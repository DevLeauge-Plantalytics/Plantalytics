import React, {Component} from 'react';
import {connect} from 'react-redux';
var BarChart = require('react-d3-basic').BarChart;

class DataVisuals extends Component {

  constructor(props) {
    super(props);
  }

  renderChartTemp(){
    var generalChartData = this.props.D3Data.temp

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
      <div>
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
      </div>
    );
  }

  renderChartRain(){
    var generalChartData = this.props.D3Data.rain

    var width = 350,
    height = 200,
    title = "Rain Chart",
    chartSeries = [
      {
        field: 'rainfall',
        name: 'Rain data'
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
      <div>
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
      </div>
    );
  }

  render(){
    return (
      <div>
        <ul id="data-visuals-list">
          <li className="data-visual1">{this.renderChartTemp()}</li>
          <li className="data-visual2">{this.renderChartRain()}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    D3Data: state.D3.locationData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVisuals);