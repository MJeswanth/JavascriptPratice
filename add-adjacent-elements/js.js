console.clear();
const taskContainer = document.querySelector("#tasks");
console.log(taskContainer); 

taskContainer.addEventListener("click", (e) => {
  
target = e.target;

if("BUTTON" == target.tagName){
    const id = target.parentNode.getAttribute('id');
    const action = target.getAttribute("data-action");
  
    insertTask(id, action, target.parentNode);
  

}

})

//inserting a new task
function insertTask(id, action, parent){

    let newTask = prompt("Enter new Task: ");
     
   
        let newtaskUI = buildNewTaskUI(newTask);
    
    if("add-above" == action){  
      parent.insertAdjacentHTML('beforebegin', newtaskUI);   
    }
    if("add-below" == action){
      parent.insertAdjacentHTML('afterend',newtaskUI);
    }
  
}


// Building new task
function buildNewTaskUI(newTask){

  const id  = document.querySelectorAll(".task-item").length+1;

  let html = `<li class="task-item" id= "task-${id}"> ${newTask}
  <button data-action="add-above">Add Above</button>
  <button data-action="add-below">Add Below</button>
</li>
`;
 
  return html;

}