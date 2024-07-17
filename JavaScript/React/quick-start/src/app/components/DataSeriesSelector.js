"use client";

import { useEffect, useState } from 'react';

const DataSeriesSelector = ({ dataSeries, handleSeriesChange }) => {
  const [selectedSeries, setSelectedSeries] = useState([]);

  useEffect(() => {
    setSelectedSeries(dataSeries.map(series => ({ ...series, selected: false })));
  }, [dataSeries]);

  const handleCheckboxChange = (index) => {
    const newSeries = [...selectedSeries];
    newSeries[index].selected = !newSeries[index].selected;
    setSelectedSeries(newSeries);
    handleSeriesChange(newSeries);
  };

  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        数据系列
      </div>
      <div className="collapse-content">
        {selectedSeries.map((series, index) => (
          <div key={index} className="flex items-center mt-4">
            <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
              <span className="label-text mr-2">{series.name}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-info"
                checked={series.selected}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSeriesSelector;

