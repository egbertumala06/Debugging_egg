
let count = 0;

const countBtn = document.getElementById("countBtn");
const countOutput = document.getElementById("countOutput");
const resetBtn = document.getElementById("resetBtn");
const debugLog = document.getElementById("debugLog");

countBtn.addEventListener("click", function () {
    console.log("Before:", count);
    count++;
    countOutput.textContent = count;
    debugLog.textContent = "Count: " + count;
    console.log("After:", count);
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countOutput.textContent = count;
    debugLog.textContent = "Counter reset to 0.";
});
