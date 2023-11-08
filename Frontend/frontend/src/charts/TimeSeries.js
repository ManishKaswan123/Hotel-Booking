import React  from 'react';
import ApexCharts from 'react-apexcharts';

function TimeSeries(data) {
  console.log("timeseriers data" , data);
  const yAxis = [];
  const xAxis = [];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const time = data.data.reduce((timeSlote, current) => {
    const monthIndex = months.findIndex(month => month === current.arrival_date_month[3]);
    let newDate = new Date(
      current.arrival_date_year+1, 
      monthIndex, 
      current.arrival_date_day_of_month
    );

    console.log("year" , current.arrival_date_year);
    const formattedDate = new Date(current.arrival_date_year+1 , monthIndex, current.arrival_date_day_of_month);
    const formattedDateString = `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;

    // console.log("formattedDate", formattedDate);
    // console.log("formattedDateString" , formattedDateString);

    

    let existingItem = timeSlote.find((item) => {
      const date1 = new Date(item);
      const date2 = new Date(newDate);

      // console.log("item and newDate" , item , newDate );
      // if(item == newDate)
      //   console.log("Matched");
      // console.log("time1 time2" , date1.getTime() , date2.getTime());

      return (
        date1.getTime() === date2.getTime()
      )
    }
    
    );
    let count = current.adults + current.babies + current.children;

    if (existingItem) {
      console.log("newcheck");
      yAxis[yAxis.length-1] += count;
    } else {
      console.log("check");
      timeSlote.push(newDate);
      yAxis.push(count);
      xAxis.push(formattedDateString);
    }
  
    return timeSlote;
  }, []);


  const chartOptions = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'sales',
        data: yAxis,
      },
    ],
    xaxis: {
      categories: xAxis,
    },
  };

  console.log("yaxis" , yAxis);
  console.log("x-axis" , xAxis);

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="line" height={350} />
    </div>
  );
}

export default TimeSeries;

