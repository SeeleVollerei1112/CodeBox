import { useEffect, useRef, useState } from 'react';

const ResizableContainer = ({ children }) => {
    const containerRef = useRef(null);
    const [leftWidth, setLeftWidth] = useState('50%');

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

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const chartElement = containerRef.current.querySelector('.echarts-instance');
            if (chartElement && chartElement.echartsInstance) {
                chartElement.echartsInstance.resize();
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, [leftWidth]);

    return (
        <div ref={containerRef} className="flex flex-col w-full lg:flex-row mt-4 relative z-0">
            <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: leftWidth }}>
                <div className="place-items-center p-4">
                    {children[0]}
                </div>
            </div>
            <div
                className="divider lg:divider-horizontal cursor-col-resize"
                onMouseDown={handleMouseDown}
            >
                OR
            </div>
            <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: `calc(100% - ${leftWidth})` }}>
                {children[1]}
            </div>
        </div>
    );
};

export default ResizableContainer;
