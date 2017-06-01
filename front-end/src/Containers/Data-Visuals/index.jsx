import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataByAddress} from '../../Actions';
var BarChart = require('react-d3-basic').BarChart;
var LineChart = require('react-d3-basic').LineChart;

class DataVisuals extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataByAddress(localStorage.address);
  }

  renderChartTemp(){
    var generalChartData = this.props.temp

    var width = 350,
    height = 200,
    title = "Temp Chart",
    chartSeries = [
      {
        field: 'temperature',
        name: 'Temperature'
      }
    ],
    x = function(d) {
      return d.month;
    },
    xScale = "ordinal",
    xLabel = "Month",
    yLabel = "°F",
    yScale = "linear";

    return (
        <BarChart
          title= {title}
          data= {generalChartData}
          width= {width}
          height= {height}
          chartSeries = {chartSeries}
          x= {x}
          xLabel= {xLabel}
          xScale= {xScale}
          yScale= {yScale}
          yLabel = {yLabel}
       />
    );
  }

  renderChartRain(){
    var generalChartData = this.props.rain

    var width = 350,
    height = 200,
    title = "Rain Chart",
    chartSeries = [
      {
        field: 'rainfall',
        name: 'Rain data',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.month;
    },
    xScale = "ordinal",
    xLabel = "Month",
    yLabel = "mm per sqm",
    yScale = "linear";

    return (
        <LineChart
          title= {title}
          data= {generalChartData}
          width= {width}
          height= {height}
          chartSeries = {chartSeries}
          x= {x}
          xLabel= {xLabel}
          xScale= {xScale}
          yScale= {yScale}
          yLabel = {yLabel}
       />
    );
  }

  render(){
    return (
        <div id="data-visuals-list">
          <div className="tempDiv">{this.renderChartTemp()}</div>
          <div className="raindDiv">{this.renderChartRain()}</div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rain: state.D3.rain,
    temp: state.D3.temp,
    soil: state.D3.soil,
    latitude: state.users.latitude,
    longitude: state.users.longitude
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   getDataByAddress: (address) => {
      dispatch(getDataByAddress(address))
    }
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVisuals);