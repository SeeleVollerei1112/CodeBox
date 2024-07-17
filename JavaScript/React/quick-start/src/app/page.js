"use client";

import { useRef, useState } from 'react';
import EChartComponent from './components/EChartComponent';
import Navbar from './Navbar';
import ResizableContainer from './ResizableContainer';
import ChartTypeSelector from './ChartTypeSelector';
import DataSeriesSelector from './DataSeriesSelector';

const Home = () => {
  const [theme, setTheme] = useState('default');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const getOption = () => {
    if (selectedOption === 'option1') {
      return {
        title: {
          text: '示例饼图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    } else if (selectedOption === 'option2') {
      return {
        title: {
          text: '示例柱状图/折线图',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130]
          },
          {
            name: '联盟广告',
            type: 'bar',
            data: [60, 80, 70, 90, 110, 130, 150]
          },
          {
            name: '搜索引擎',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      };
    }
  };

  return (
    <div className={`container mx-auto p-4 h-screen flex flex-col items-start justify-start relative`} data-theme={theme}>
      <Navbar theme={theme} handleThemeChange={handleThemeChange} />
      <ResizableContainer getOption={getOption}>
        <ChartTypeSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <DataSeriesSelector isCheckboxChecked={isCheckboxChecked} handleCheckboxChange={handleCheckboxChange} />
      </ResizableContainer>
    </div>
  );
};

export default Home;
