const timeFrom=document.querySelector("#time-first-input");
const timeTo=document.querySelector("#time-last-input");
const taskInput=document.querySelector("#task-input");
const addButton=document.querySelector("#add");
const clearButton=document.querySelector("#clear");
const secondCont=document.querySelector(".second-cont");


addButton.addEventListener("click",getInput);
function getInput(){
    let timeFirst=timeFrom.value;
    let timeLast=timeTo.value;
    let task=taskInput.value;
    createLine(timeFirst,timeLast,task);
}
function createLine(firstTime,secondTime,textTask){
    let planRow=document.createElement("div");
    let timeOutput=document.createElement("div");
    let taskOutput=document.createElement("div");
    let buttonDone=document.createElement("button");
    let buttonNotDone=document.createElement("button");
    let buttonDelete=document.createElement("button");
    planRow.classList.add("plan-row");
    timeOutput.classList.add("time-output");
    taskOutput.classList.add("task-output");
    buttonDone.classList.add("button");
    buttonDone.classList.add("second-but");
    buttonNotDone.classList.add("button");
    buttonNotDone.classList.add("second-but");
    buttonDelete.classList.add("button");
    buttonDelete.classList.add("second-but");
    timeOutput.textContent=firstTime+"-"+secondTime;
    taskOutput.textContent=textTask;
    buttonDone.textContent="Done";
    buttonNotDone.textContent="Not Done";
    buttonDelete.textContent="Delete Task";
    planRow.append(timeOutput);
    planRow.append(taskOutput);
    planRow.append(buttonDone);
    planRow.append(buttonNotDone);
    planRow.append(buttonDelete);
    secondCont.append(planRow);
}