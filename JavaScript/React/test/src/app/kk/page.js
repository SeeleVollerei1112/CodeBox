'use client'

import { useEffect, useRef, useState } from 'react';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';

const Home = () => {
    const [theme, setTheme] = useState('default');
    const [selectedOption, setSelectedOption] = useState('option1');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [leftWidth, setLeftWidth] = useState('50%');
    const [seriesData, setSeriesData] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchSeriesData = async () => {
            const exampleData = [
                { name: '搜索引擎', value: 1048 },
                { name: '直接访问', value: 735 },
                { name: '邮件营销', value: 580 },
                { name: '联盟广告', value: 484 },
                { name: '视频广告', value: 300 }
            ];
            const exampleBarLineData = [
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
            ];

            setTimeout(() => {
                if (selectedOption === 'option1') {
                    setSeriesData(exampleData);
                } else if (selectedOption === 'option2') {
                    setSeriesData(exampleBarLineData);
                }
            }, 1000);
        };

        fetchSeriesData();
    }, [selectedOption]);

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
                        data: seriesData,
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
                series: seriesData
            };
        }
    };

    return (
        <div className={`container mx-auto p-4 h-screen flex flex-col`} data-theme={theme}>
            <Navbar handleThemeChange={handleThemeChange} />
            <MainContainer
                leftWidth={leftWidth}
                getOption={getOption}
                handleMouseDown={handleMouseDown}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                isCheckboxChecked={isCheckboxChecked}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    );
}

export default Home;
