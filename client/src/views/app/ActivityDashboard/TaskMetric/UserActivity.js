import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class UseractivityChart extends PureComponent {
    instance;
    options = {
        chart: {
            type: 'column', 
            height:'200px'
        },
        title: {
            text: undefined
        },
        subtitle: {
            text: undefined
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text:undefined
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }, 
            
        },
        series: [{
            name:undefined,
            showInLegend: false,
            data: [49, 71, 106, 129, 144],
            dataLabels: {
                enabled: true
            }
        }]
    }
    componentDidMount() {
        this.instance = Highcharts.chart(this.props.idName, this.options);
    }

    render() {
        return (
            <div className="useractivity" >
                <div id={`${this.props.idName}`} />
            </div>
        );
    }
}
