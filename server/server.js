/*jshint esversion:6*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./models');
const fs = require('fs');
const NodeGeocoder = require('node-geocoder');

const methodOverride = require('method-override');

app.use( bodyParser.json() );

//passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//session
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//password hashing
const saltRounds = 10;
const bcrypt = require('bcrypt');

// setup sessions
app.use(session({
  store: new RedisStore(),
  secret: 'keyboard_cat',
  resave: false,
  saveUninitialized: true,
}));

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// passport local Strategy
passport.use(new LocalStrategy (
  function(username, password, done) {
    console.log('runs before serializing');
    db.User.findOne({
      where: {
        username: username
      }
    })
    .then ( user => {
      if (user === null) {
        console.log('user failed');
        return done(null, false, {message: 'bad username'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then(res => {
          console.log(res);
          if (res) { return done(null, user); }
          else {
            return done(null, false, {message: 'bad password'});
          }
        });
      }
    })
    .catch(err => {
      console.log('error: ', err);
    });
  }
));

passport.serializeUser(function(user, done) {
  console.log('serializing');
// ^ ---------- given from authentication strategy
  // building the object to serialize to save
  return done(null, {
    username: user.username,
    address: user.address
  });
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  // ^ ---------- given from serializeUser
  db.User.findOne({
    where: {
      username: user.username
    }
  }).then(user => {
    return done(null, user); // <------- inserts into the request object
  });
});

app.get('/logout', function (req, res){
  console.log(req.isAuthenticated());
  req.logout();
  console.log(req.isAuthenticated());
  res.send({success : true});
});

app.post('/login', passport.authenticate('local'), (req, res) => {

  res.json({id: req.user.id, username: req.user.username, address: req.user.address});
});

app.use(express.static('./public') );

app.use('/api', require('./api'));

// db.sequelize.sync({force:true});

var options = {
   provider: 'google',
   httpAdapter: 'https',
   apiKey: 'AIzaSyBq9bEx9M3S3uXzii-sbvtpE0t-TQxjzy4',
   formatter: null
};

var geocoder = NodeGeocoder(options);

app.get(`/localisation/:address`, function (req, res){

  geocoder.geocode(req.params.address)
  .then((location) => {
    res.json(location);
  })
  .catch(err => {
    res.status(400).send({error: err.message});
  });

});


app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});