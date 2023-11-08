// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TimeSeries from "./charts/TimeSeries";
import ColumnChart from './charts/ColumnChart';
import SparklineChartsAdult from "./charts/SparklineChartsAdult";
import { useEffect, useState } from 'react';
import DateRanges from './components/DateRangePicker';
import SparklineChartsChildren from './charts/SparklineChartsChildren';

function App() {
  const [data , setData] = useState([]);
  const [allData , setAllData] = useState([]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
      axios
      .get("http://localhost:3001/")
      .then((hotelData) => {
        setData(hotelData?.data.data);
        setAllData(hotelData?.data.data);
        console.log("alldata" , allData);
      });
  }, []);

  function filterDataByDateRange(startDate , endDate) {
    let newData = allData.filter((date) => {
      const monthIndex = months.findIndex(month => month === date.arrival_date_month[3]);
        let newDate = new Date(
          date.arrival_date_year+1, 
          monthIndex, 
          date.arrival_date_day_of_month
        );

        console.log("newData" , newDate);
        console.log("startDate" , startDate);
        console.log("end Date" , endDate);
        return (
          newDate >= startDate &&
          newDate <= endDate
        );
    });

    setData(newData);
    console.log("new data check0" , newData);
  };

  console.log("new data check9" , data);

  return (
    <div className="App">
      <div>
        <DateRanges  paretFun={filterDataByDateRange}/>
      </div>
      <div>
        <h1>
          Time Series
        </h1>
        <TimeSeries data = {data}/>
      </div>
      <div>
        <h1>
          Column Chart
        </h1>
        <ColumnChart data = {data}/>
      </div>
      <div>
        <h1>
          Sparkline Chart Of Adults
        </h1>
        <SparklineChartsAdult data = {data}/>
      </div>
      <div>
        <h1>
          Sparkline Chart Of Childerns
        </h1>
        <SparklineChartsChildren data = {data}/>
      </div>
    </div>
  );
}

export default App;
