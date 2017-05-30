/*jshint esversion:6*/
const express = require('express');
const D3 = express.Router();
const {D3soil, D3rainfall, D3temp} = require('../../models');

D3.get('/rainfall', (req,res) => {
  D3rainfall.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

D3.get('/temp', (req,res) => {
  D3temp.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

D3.get('/soil', (req,res) => {
  D3soil.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

D3.post('/closest', (req,res) => {
  console.log(req.body[0].latitude);
  let closestData = {};
  D3rainfall.all()
  .then((rain) => {
    if(rain.length > 0) {
      closestData.rain = findClosestData(rain, req.body[0].latitude, req.body[0].longitude);
    }  else {
      closestData.rain = rain;
    }
    D3temp.all()
    .then(temp => {
      if(temp.length > 0) {
        closestData.temp = findClosestData(temp, req.body[0].latitude, req.body[0].longitude);
      } else {
        closestData.temp = temp;
      }
      D3soil.all()
      .then(soil => {
        if(soil.length > 0) {
          closestData.soil = findClosestData(soil, req.body[0].latitude, req.body[0].longitude);
        } else {
          closestData.soil = soil;
        }
        res.json(closestData);
      });
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send({error: err.message});
  });
});

module.exports = D3;

const findClosestData = (data, lat, long) => {
  let closestCoords;
  console.log(data);
  let leastDist = getDistanceFromLatLonInKm(lat, long, data[0].latitude, data[0].longitude);
  for (var i = 0; i < data.length; i++) {
    if(getDistanceFromLatLonInKm(lat, long, data[i].latitude, data[i].longitude) < leastDist) {
      leastDist = getDistanceFromLatLonInKm(lat, long, data[i].latitude, data[i].longitude);
      closestCoords = data[i];
    }
  }
  return data.filter(each => each.latitude === closestCoords.latitude && each.longitude === closestCoords.longitude);
};

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}