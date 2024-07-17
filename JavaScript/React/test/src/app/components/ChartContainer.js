import EChartComponent from './EChartComponent';

const ChartContainer = ({ leftWidth, getOption, handleMouseDown }) => (
    <div ref={containerRef} className="flex flex-col w-full lg:flex-row mt-4 relative z-0">
        <div className="flex-grow h-auto card bg-base-300 rounded-box" style={{ width: leftWidth }}>
            <div className="place-items-center p-4">
                <EChartComponent option={getOption()} /> {/* ECharts 图表 */}
            </div>
        </div>
        <div className="divider lg:divider-horizontal cursor-col-resize" onMouseDown={handleMouseDown}>
            OR
        </div>
    </div>
);

export default ChartContainer;
