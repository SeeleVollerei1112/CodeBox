function fetchData() {
    return
    setTimeout(() => {
        resolve("Data received");
    }, 2000);
}

async function getDate() {
    console.log('Fetching data...');
    const data = await fetchData();
    console.log(data);
}

console.log('Before getData');
getDate();
console.log('After getData');