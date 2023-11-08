import React from 'react';
import ApexCharts from 'react-apexcharts';

function ColumnChart(data) {
  console.log("timeseriers data" , data);
  const yAxis = [];
  const xAxis = [];

  const time = data.data.reduce((result , current) => {
    let existingItem = result.find((item) => item === current.country)

    let count = current.adults + current.babies + current.children;

    if (existingItem) {
      yAxis[yAxis.length-1] += count;
    } else {
      result.push(current.country);
      yAxis.push(count);
      xAxis.push(current.country);
    }
  
    return result;
  }, []);

  console.log("Column yaxis" , yAxis);
  console.log("Column xaxis", xAxis);
  var chartOptions = {
      series: [{
      name: 'Inflation',
      data: yAxis
    }],
      chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: xAxis,
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    
    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  };


  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
  