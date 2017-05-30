import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getD3Temp} from '../../Actions';
var Barchart = require('react-d3-basic').Barchart;

class D3 extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getD3Temp();
  }


  (function() {
    var generalChartData = this.props.temp

    var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, "%"];

    render(){(
      <BarChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xLabel= {xLabel}
        xScale= {xScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    })
  })()

const mapStateToProps = state => {
  return {
    temp: state.D3.temp,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   getD3Temp: () => {
      dispatch(getD3Temp())
    }
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(D3);