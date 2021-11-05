const worker = new Worker("./worker.js");
const shared = new SharedWorker("./shared.js");

document.getElementById("worker-count").addEventListener("click", () => {
  worker.postMessage("index");
});
worker.onmessage = (e) => {
  document.getElementById("worker-result").innerText = e.data;
};
document.getElementById("shared-count").addEventListener("click", () => {
  shared.port.postMessage("index");
});
shared.port.onmessage = (e) => {
  document.getElementById("shared-result").innerText = e.data;
};
