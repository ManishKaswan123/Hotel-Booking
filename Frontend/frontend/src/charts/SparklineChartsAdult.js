import "../styles/style1.css";
import React from 'react';
import ApexCharts from 'react-apexcharts';


function SparklineChartsAdult(data) {
  console.log("timeseriers data" , data);

  const xAxis = data.data.map((item) => item.adults);
  const count = xAxis.reduce((result , current) => {
    return result +=current
  }, 0);

  var ChartOptions1 = {
    series: [{
    data: xAxis
  }],
    chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
  title: {
    text: count,
    offsetX: 0,
    style: {
      fontSize: '24px',
    }
  },
  subtitle: {
    text: 'Adults',
    offsetX: 0,
    style: {
      fontSize: '14px',
    }
  }
};

var ChartOptions2 = {
    series: [{
    data: xAxis
  }],
    chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
  title: {
    text: count,
    offsetX: 0,
    style: {
      fontSize: '24px',
    }
  },
  subtitle: {
    text: 'Adults',
    offsetX: 0,
    style: {
      fontSize: '14px',
    }
  }
};

var ChartOptions3 = {
    series: [
      {
        data: xAxis,
      },
    ],
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 0.3,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    title: {
      text: count,
      offsetX: 0,
      style: {
        fontSize: '24px',
      },
    },
    subtitle: {
      text: 'Adults',
      offsetX: 0,
      style: {
        fontSize: '14px',
      },
    },
};  

var ChartOptions4 = {
    series: [
        {
        data: xAxis,
        },
    ],
    chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
        enabled: true,
        },
    },
    tooltip: {
        fixed: {
        enabled: false,
        },
        x: {
        show: false,
        },
        y: {
        // title: {
        //     formatter: function (seriesName) {
        //     return 'Last 10 days';
        //     },
        // },
            title: {
                text: 'Last 10 days',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                },
            }
        },
        marker: {
        show: false,
        },
    },
};
  
var ChartOptions5 = {
    series: [
        {
          data: xAxis,
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
};

var ChartOptions6 = {
    series: [43, 32, 12, 9],
    chart: {
      type: 'pie',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
    },
};

var ChartOptions7 = {
    series: [43, 32, 12, 9],
  chart: {
    type: 'donut',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
  },
};

var  ChartOptions8 = {
    series: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      chart: {
        type: 'bar',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
        //   title: {
        //     formatter: function (seriesName) {
        //       return '';
        //     },
        //   },
            title: {
                text: 'Last 10 days',
                offsetX: 0,
                style: {
                    fontSize: '24px',
                },
            }
        },
        marker: {
          show: false,
        },
      },
};

var ChartOptions9 = {
    series: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      chart: {
        type: 'bar',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
};

var ChartOptions10 = {
    series: [45],
  chart: {
    type: 'radialBar',
    width: 50,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%',
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: false,
      },
    },
  },
};

var ChartOptions11 = {
    series: [53, 67],
          chart: {
          type: 'radialBar',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: '50%'
            },
            track: {
              margin: 1
            },
            dataLabels: {
              show: false
            }
          }
        }
};
    return (
      <div>
        <div className='chart123'>
          <div className='item'>
          <ApexCharts 
            options={ChartOptions1} 
            series={ChartOptions1.series} 
            type="area" 
            height={160} 
          />
          </div>
          <div className='item'>
          <ApexCharts 
            options={ChartOptions2} 
            series={ChartOptions2.series} 
            type="area" 
            height={160} 
          />
          </div>
          <div className='item'>
          <ApexCharts 
            options={ChartOptions3} 
            series={ChartOptions3.series} 
            type="area" 
            height={160} 
          />
          </div>
        </div>
        
        <div className='chart4to12'>
          <div className='chart4567'>
            <div className='item2'>
              <ApexCharts 
              options={ChartOptions4} 
              series={ChartOptions4.series} 
              type="line" 
              height={160}
              />
            </div>
            <div className='item2'>
              <ApexCharts
              options={ChartOptions5}
              series={ChartOptions5.series}
              type="line"
              height={160}
              />
            </div>
            <div className='item2'>
              <ApexCharts
                options={ChartOptions6}
                series={ChartOptions6.series}
                type="pie"
                height={160}
              />
            </div>
            <div className='item2'>
              <ApexCharts
                options={ChartOptions7}
                series={ChartOptions7.series}
                type="donut"
                height={160}
              />
            </div>
          </div>
          <div className='chart891011'>
            <div className='item3'>
              <ApexCharts
                options={ChartOptions8}
                series={ChartOptions8.series}
                type="bar"
                height={160}
              />
            </div>
            <div className='item3'>
              <ApexCharts
                options={ChartOptions9}
                series={ChartOptions9.series}
                type="bar"
                height={160}
              />
            </div>
            <div className='item3'>
              <ApexCharts
                options={ChartOptions10}
                series={ChartOptions10.series}
                type="radialBar"
                height={160}
              />
            </div>
            <div className='item3'>
              <ApexCharts
                options={ChartOptions11}
                series={ChartOptions11.series}
                type="radialBar"
                height={160}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default SparklineChartsAdult;
  