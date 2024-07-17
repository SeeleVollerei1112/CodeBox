import ChartContainer from './ChartContainer';
import SidePanel from './SidePanel';

const MainContainer = ({
    leftWidth,
    getOption,
    handleMouseDown,
    selectedOption,
    setSelectedOption,
    isCheckboxChecked,
    handleCheckboxChange
}) => (
    <div className="flex-grow flex items-center justify-center">
        <ChartContainer
            leftWidth={leftWidth}
            getOption={getOption}
            handleMouseDown={handleMouseDown}
        />
        <SidePanel
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isCheckboxChecked={isCheckboxChecked}
            handleCheckboxChange={handleCheckboxChange}
        />
    </div>
);

export default MainContainer;
