import React, { Component } from 'react';
import anychart from 'anychart';

class Pie extends Component {
    
    componentDidMount () {
        let chart = anychart.pie(this.props.data);
        chart.title(this.props.title);
        chart.container('react-anychart-pie');
        chart.draw();
    }

    render () {
        return (
            <div id="react-anychart-pie" style={{width: this.props.width, height: this.props.height, display: 'inline-block'}}>
                
            </div>
        )
    }
}

export default Pie;