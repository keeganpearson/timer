// slice off the node thingy to get command line arguments
let args = process.argv.slice(2);

// for each command line argument (number given) do this
args.forEach(arg => {
  // convert to number
  let time = Number(arg);

  // check if greater than 0, ignore if NaN or negative
  if (!isNaN(time) && time >= 0) {
    // convert given time to milliseconds to make easier
    time *= 1000;

    // set timer
    setTimeout(() => {
      // when time expires, beep
      process.stdout.write('\x07');
    }, time);
  }
});