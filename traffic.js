function trafficLight(color, callback) {
  let count = 0;
  let timer = setInterval(() => {
    count++;
    callback(count);

    if (count == 3) {
      clearInterval(timer);
    }
  }, 1000);
}

function changeColor(count) {
  if (count == 1) {
    console.log("Red");
  } else if (count == 2) {
    console.log("Green");
  } else {
    console.log("Yellow");
  }
}

trafficLight("red", changeColor);
