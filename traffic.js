function trafficLight(callback) {
  setInterval(() => {
    callback();
  }, 4000);

  setTimeout(() => {
    clearInterval();
  }, 500);
}

function callingIt(color) {
  console.log(color);
}

trafficLight(callingIt);
