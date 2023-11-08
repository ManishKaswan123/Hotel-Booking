import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import { useState } from "react";

function DateRanges ({paretFun}) {
    const [startDate , setStartDate] = useState(new Date());
    const [endDate , setEndDate] = useState(new Date());

    const handleSelect =(ranges) => {
        // let filtered = allData.filter((data) => {
        //   let dataDate = new Date(data["createdAt"]);
        //   return (
        //     dataDate >= date.selection.startDate &&
        //     dataDate <= date.selection.endDate
        //   );
        // });
        // setDateRange(ranges.selection);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        paretFun(startDate , endDate);
    };

    const dateRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    return (
        <div>
            <DateRangePicker 
            ranges = {[dateRange]}
            onChange={handleSelect}
            />
        </div>
    );
};

export default DateRanges;