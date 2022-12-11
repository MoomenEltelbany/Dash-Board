// Change the active class on the colors
let allColors = document.querySelectorAll(".colors span");
let allColorsArray = Array.from(allColors);

allColorsArray.forEach((element) => {
    element.onclick = () => {
        allColorsArray.forEach((element) => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    };
});

// Start the welcome count
let projectCount = document.querySelector(".project-count");
let moneyCount = document.querySelector(".money-count");

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
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
// Start the Adding task section
// Capturing the elements
let taskDiv = document.querySelector(".task-container");
let taskTitle = document.getElementById("title");
let taskText = document.getElementById("text");
let addTaskBtn = document.querySelector(".add-task");
let titleErrorSpan = document.querySelector(".title-error");
let textErrorSpan = document.querySelector(".text-error");

let divs = document.querySelectorAll(".task-container .task");

// Array that will hold the tasks
let arrayOfTasks = [];

// Check if the title and text inputs aren't empty
taskTitle.onblur = () => {
    if (taskTitle.value === "") {
        titleErrorSpan.style.cssText = "display: block !important;";
    } else {
        titleErrorSpan.style.cssText = "display: none !important;";
    }
};
taskText.onblur = () => {
    if (taskText.value === "") {
        textErrorSpan.style.cssText = "display: block !important;";
    } else {
        textErrorSpan.style.cssText = "display: none !important;";
    }
};

// Onclick on the add button
addTaskBtn.onclick = () => {
    // If both of the inputs are empty, nothing will happen
    if (taskTitle.value !== "" && taskText.value !== "") {
        let taskObject = {
            title: taskTitle.value,
            text: taskText.value,
            completed: false,
        };

        arrayOfTasks.push(taskObject);
        taskTitle.value = "";
        taskText.value = "";

        console.log(arrayOfTasks);

        // Creating the divs
        createDivs(arrayOfTasks);

        // Function of deleting the task
        removeDiv(arrayOfTasks);
    }
};

function createDivs(array) {
    taskDiv.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let mainDiv = document.createElement("div");
        let div = document.createElement("div");
        let divTitle = document.createElement("p");
        let divText = document.createElement("p");
        let deleteFigure = document.createElement("i");

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

        if (array[i].completed) {
            mainDiv.classList.add("done");
        }

        mainDiv.setAttribute("data-id", `div_${i}`);
        deleteFigure.setAttribute("data-id", `div_${i}`);

        divTitle.classList.add("text-lg", "font-bold");
        divText.classList.add("text-lg", "text-gray-400");

        deleteFigure.classList.add("fa-regular", "fa-trash-can", "mr-2", "del");

        divTitle.appendChild(document.createTextNode(array[i].title));
        divText.appendChild(document.createTextNode(array[i].text));
        div.appendChild(divTitle);
        div.appendChild(divText);
        mainDiv.appendChild(div);
        mainDiv.appendChild(deleteFigure);

        taskDiv.appendChild(mainDiv);
    }
}

function removeDiv(array) {
    let deleteTask = document.querySelectorAll(".task .del");

    deleteTask.forEach((btn) => {
        btn.onclick = () => {
            let allTasks = document.querySelectorAll(".task");
            allTasks.forEach((task) => {
                if (task.dataset.id === btn.dataset.id) {
                    task.classList.toggle("done");
                    array.forEach((ele) => {
                        if (
                            ele.title ===
                            task.childNodes[0].childNodes[0].innerHTML
                        ) {
                            ele.completed = true;
                        }
                    });
                }
            });
        };
    });
}

// taskRemove();

// End the Adding task section
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
// Start the Select group in the table
let selectGroups = document.querySelectorAll("select");

let selectGroupsArray = Array.from(selectGroups);

for (let i = 0; i < 6; i++) {
    selectGroupsArray[i].classList.remove(
        "pending",
        "in-progress",
        "completed",
        "rejected"
    );

    selectGroupsArray[i].classList.add(
        window.localStorage.getItem(`select-${i}`)
    );

    selectGroupsArray[i].value = window.localStorage.getItem(`select-${i}`);
}

selectGroupsArray.forEach((select) => {
    select.onchange = () => {
        // Remove all the classes that are responsible for the background of the select group
        select.classList.remove(
            "pending",
            "in-progress",
            "completed",
            "rejected",
            "no-status"
        );

        // Add the class to the select element
        select.classList.add(select.value);

        window.localStorage.setItem(select.dataset.set, select.value);
    };
});

// End the Select group in the table
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
