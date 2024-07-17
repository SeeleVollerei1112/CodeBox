import Dropdown from "../C/Dropdown";

const Home = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Dropdown Example</h1>
            <Dropdown options={options} />
        </div>
    );
}

export default Home;

