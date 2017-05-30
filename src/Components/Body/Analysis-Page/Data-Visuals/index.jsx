import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getD3Temp, getD3Rain} from '../../../../Actions';
var BarChart = require('react-d3-basic').BarChart;

class DataVisuals extends Component {

  constructor(props) {
    super(props);
    this.renderChartTemp = this.renderChartTemp.bind(this);
    this.renderChartRain = this.renderChartRain.bind(this);
  }

  componentWillMount() {
    this.props.getD3Temp();
    this.props.getD3Rain();
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
    var generalChartData = this.props.rain

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
          <li className="data-visual">{this.renderChartTemp()}</li>
          <li className="data-visual">{this.renderChartRain()}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    temp: state.D3.temp,
    rain: state.D3.rain,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getD3Temp: () => {
      dispatch(getD3Temp())
    },
    getD3Rain: () => {
      dispatch(getD3Rain())
    },
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVisuals);