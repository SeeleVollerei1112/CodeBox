console.log("start");

setTimeout(() => {
    console.log("timeout2");
}, 1);

setTimeout(() => {
    console.log("timeout1");
}, 0);


console.log("end");
