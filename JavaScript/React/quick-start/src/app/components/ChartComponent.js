"use client";

import { useEffect, useState } from 'react';
import EChartComponent from './EChartComponent';

const ChartComponent = ({ config, dataSeries }) => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const seriesData = dataSeries.map(series => ({
      name: series.name,
      type: series.type,
      data: series.data
    }));

    const xAxisData = dataSeries.length > 0 ? dataSeries[0].data.map((_, index) => `Category ${index + 1}`) : [];

    const xAxis = {
      type: 'category',
      data: xAxisData
    };

    const yAxis = {
      type: 'value'
    };

    setOption({
      title: {
        text: config.titleText,
        left: config.titlePosition
      },
      legend: {
        left: config.legendPosition
      },
      xAxis: xAxis,
      yAxis: yAxis,
      series: seriesData
    });
  }, [config, dataSeries]);

  return (
    <EChartComponent option={option} />
  );
};

export default ChartComponent;
