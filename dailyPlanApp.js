const timeFrom=document.querySelector("#time-first-input");
const timeTo=document.querySelector("#time-last-input");
const taskInput=document.querySelector("#task-input");
const addButton=document.querySelector("#add");
const clearButton=document.querySelector("#clear");
const secondCont=document.querySelector(".second-cont");
// const doneButton=document.querySelector("#done");
// const notDoneButton=document.querySelector("#not-done");
// const deleteButton=document.querySelector("#delete-but");

eventListeners();
function eventListeners(){//All event listeners are here for better reading.
    addButton.addEventListener("click",getInput);
    clearButton.addEventListener("click",clearAll);
    document.addEventListener("DOMContentLoaded",loadAllPlans);
    secondCont.addEventListener("click",planButtons);
}
function loadAllPlans(){//After page loaded, loads the plans that stored in local storage.
    let times=getPlansFromStorage()[0];
    let tasks=getPlansFromStorage()[1];
    for(i=0;i<=times.length;i++){
        time=times[i].split("-");
        createLine(time[0],time[1],tasks[i]);
    }
}
function getInput(){//Gets the input from first container area.
    let timeFirst=timeFrom.value;
    let timeLast=timeTo.value;
    let task=taskInput.value.trim();
    if(timeFirst!==""&&timeLast!==""&&task!==""){
        createLine(timeFirst,timeLast,task);
        savePlansToStorage(timeFirst,timeLast,task);
    }
}
function createLine(firstTime,secondTime,textTask){//Creates the plan line and add it to HTML.
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
    buttonDone.classList.add("done");
    buttonNotDone.classList.add("button");
    buttonNotDone.classList.add("second-but");
    buttonNotDone.classList.add("not-done");
    buttonDelete.classList.add("button");
    buttonDelete.classList.add("second-but");
    buttonDelete.classList.add("delete-but");
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
    clearAll();
}
function getPlansFromStorage(){//Takes the plans from storage if exist. If not creates empty.
    let times;
    let tasks;
    if(localStorage.getItem("times")===null&&localStorage.getItem("tasks")===null){
        times=[];
        tasks=[];
    }
    else{
        times=JSON.parse(localStorage.getItem("times"));
        tasks=JSON.parse(localStorage.getItem("tasks"));
    }
    let timesTasks=[times,tasks];
    return timesTasks;
}
function savePlansToStorage(firstTime,timeLast,textTask){//Saves the plans to the storage while they added.
    let timesTasks=getPlansFromStorage();
    let times=timesTasks[0];
    let tasks=timesTasks[1];
    times.push(firstTime+"-"+timeLast);
    tasks.push(textTask);
    localStorage.setItem("times",JSON.stringify(times));
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function clearAll(){//Clears the values while input.
    timeFrom.value="";
    timeTo.value="";
    taskInput.value="";
}
function planButtons(event){
    if(event.target.className==="button second-but done"){
        event.target.parentElement.style.background="#6ef13a";
    }
    else if(event.target.className==="button second-but not-done"){
        event.target.parentElement.style.background="#e44a4a";
    }
}