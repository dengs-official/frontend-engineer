const worker = new Worker("./worker.js");

document.getElementById("start").addEventListener("click", (e) => {
  const cube = document.getElementById("cube");
  cube.innerText = "";
  // calc(10000);
  worker.postMessage(100000);
  worker.onmessage = (e) => {
    cube.innerText = e.data;
  };

  let start = null;
  let count = 0;
  function step(timestep) {
    if (!start) start = timestep;
    const process = timestep - start;
    cube.style.left = Math.min(process / 10, 200) + "px";
    cube.innerText = ++count;
    if (process < 2000) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
});

function calc(length) {
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += 1;
    console.log(result);
  }
  return result;
}
