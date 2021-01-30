import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import data from "ra-core/src/reducer/admin/resource/data";

interface IProps {
    data: string[]
}

interface ISeries {
    data: string
}

const ApexChart: React.FunctionComponent<IProps> = ({data}) => {
    const [series, setSeries] = React.useState<ISeries[]>([{
        data: data.slice()
    }])
    const [options, setOptions] = React.useState<any>({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        },
    },)

    React.useEffect(() => {
        setInterval(() => {
            getNewSeries(lastDate, {
                min: 10,
                max: 90
            })
        }, 1000)
    }, [])
    return(
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350}/>
        </div>
    )
}

export default ApexChart
