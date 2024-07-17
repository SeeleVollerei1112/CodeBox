"use client";

import { useRef, useState } from 'react';
import EChartComponent from '../../../../charts/src/app/components/EChartComponent';

const ResizableContainer = ({ getOption, children }) => {
    const [leftWidth, setLeftWidth] = useState('50%');
    const containerRef = useRef(null);

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

    return (
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
                {children}
            </div>
        </div>
    );
}

export default ResizableContainer;
