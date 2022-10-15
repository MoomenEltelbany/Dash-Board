// Start the welcome count
let projectCount = document.querySelector(".project-count");
let moneyCount = document.querySelector(".money-count");

console.log(projectCount.innerHTML, moneyCount.innerHTML);
console.log(projectCount.dataset.count, moneyCount.dataset.count);

setInterval(() => {
    if (projectCount.innerHTML !== projectCount.dataset.count) {
        projectCount.innerHTML++;
    }
}, 2000 / projectCount.dataset.count);

setInterval(() => {
    if (moneyCount.innerHTML !== moneyCount.dataset.count) {
        moneyCount.innerHTML++;
    }
}, 200 / moneyCount.dataset.count);

// End the welcome count