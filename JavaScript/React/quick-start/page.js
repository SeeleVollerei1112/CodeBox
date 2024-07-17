"use client";

import { useRef, useState } from 'react';
import EChartComponent from './components/EChartComponent';

const Home = () => {
  const [theme, setTheme] = useState('default');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [leftWidth, setLeftWidth] = useState('50%');
  const containerRef = useRef(null);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const minLeftWidth = (1 / 3) * 100;
      let newLeftWidth = (e.clientX / containerWidth) * 100;
      if (newLeftWidth < minLeftWidth) {
        newLeftWidth = minLeftWidth;
      }
      setLeftWidth(`${newLeftWidth}%`);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const getOption = () => {
    if (selectedOption === 'option1') {
      return {
        title: {
          text: '饼图示例',
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
          text: '柱形/折线图示例',
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
      <div className="relative group flex justify-center w-full z-10">
        <div className="absolute top-0 left-0 w-full h-12 bg-transparent"></div>
        <div className="navbar bg-base-100 glass rounded-full p-2 flex justify-between items-center transition-all duration-300 opacity-0 transform -translate-y-full pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto w-auto">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box mx-4">
            <li>
              <a className="tooltip" data-tip="Home">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Details">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Stats">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </a>
            </li>
          </ul>
          <div className="flex-none relative">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-20 p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" onChange={handleThemeChange} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" onChange={handleThemeChange} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" onChange={handleThemeChange} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" onChange={handleThemeChange} /></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" onChange={handleThemeChange} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex flex-col w-full lg:flex-row mt-4 relative z-0">
        <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: leftWidth }}>
          <div className="place-items-center p-4">
            <EChartComponent option={getOption()} /> {/* ECharts 图表 */}
          </div>
        </div>
        <div
          className="divider lg:divider-horizontal cursor-col-resize"
          onMouseDown={handleMouseDown}
        >
          OR
        </div>
        <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: `calc(100% - ${leftWidth})` }}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              图表类型
            </div>
            <div className="collapse-content">
              <div className="form-control mt-4">
                <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg">
                  <span className="label-text mr-2">饼图</span>
                  <input
                    type="radio"
                    name="custom-radio"
                    className="checkbox checkbox-info"
                    checked={selectedOption === 'option1'}
                    onChange={() => setSelectedOption('option1')}
                  />
                </label>
              </div>
              <div className="form-control mt-4">
                <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg">
                  <span className="label-text mr-2">柱形/折线图</span>
                  <input
                    type="radio"
                    name="custom-radio"
                    className="checkbox checkbox-info"
                    checked={selectedOption === 'option2'}
                    onChange={() => setSelectedOption('option2')}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              数据系列
            </div>
            <div className="collapse-content">
              <div className="flex items-center mt-4">
                <label className="label cursor-pointer bg-base-100 backdrop-blur-md p-2 rounded-lg flex-grow">
                  <span className="label-text mr-2">Enable selector</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <select className={`select w-full max-w-xs ml-2 ${isCheckboxChecked ? '' : 'opacity-50'}`} disabled={!isCheckboxChecked}>
                  <option value="">Choose an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

