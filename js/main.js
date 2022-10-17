// Start the welcome count
// let projectCount = document.querySelector(".project-count");
// let moneyCount = document.querySelector(".money-count");

// setInterval(() => {
//     if (projectCount.innerHTML !== projectCount.dataset.count) {
//         projectCount.innerHTML++;
//     }
// }, 2000 / projectCount.dataset.count);

// setInterval(() => {
//     if (moneyCount.innerHTML !== moneyCount.dataset.count) {
//         moneyCount.innerHTML++;
//     }
// }, 200 / moneyCount.dataset.count);

// End the welcome count
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
// Start the Adding task section
let taskDiv = document.querySelector(".task-container");
let taskTitle = document.getElementById("title");
let taskText = document.getElementById("text");
let addTaskBtn = document.querySelector(".add-task");

addTaskBtn.onclick = () => {
    let mainDiv = document.createElement("div");
    let div = document.createElement("div");
    let divTitle = document.createElement("p");
    let divText = document.createElement("p");
    let deleteFigure = document.createElement("i");

    divTitle.innerHTML = taskTitle.value;
    divText.innerHTML = taskText.value;
    taskTitle.value = "";
    taskText.value = "";

    mainDiv.classList.add(
        "mt-5",
        "pb-2",
        "flex",
        "justify-between",
        "items-center",
        "border-b-2",
        "border-gray-100",
        "border-solid",
        "task"
    );

    divTitle.classList.add("text-lg", "font-bold");
    divText.classList.add("text-lg", "text-gray-400");

    deleteFigure.classList.add("fa-regular", "fa-trash-can", "mr-2", "del");

    div.appendChild(divTitle);
    div.appendChild(divText);
    mainDiv.appendChild(div);
    mainDiv.appendChild(deleteFigure);
    taskDiv.appendChild(mainDiv);

    let allTasks = document.querySelectorAll(".task");
    let deleteTask = document.querySelectorAll(".task .del");

    deleteTask.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("done");
        });
    });
};

// taskRemove();

// End the Adding task section
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
