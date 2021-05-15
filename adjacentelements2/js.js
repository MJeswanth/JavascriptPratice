console.clear();
const btn = document.querySelector("#tasks");
console.log(btn);

btn.addEventListener("click", e =>{

const target = e.target;



if(target.tagName == 'BUTTON'){

  const btnAction = target.getAttribute('data-action');
  console.log(target.parentNode);
  addTask(btnAction, target.parentNode);

}


});

function addTask( action, parent ){

let newTask = prompt("Enter the task");
  
let taskUI = buildUIforTask(newTask);

    if("above"==action){
  
    parent.insertAdjacentHTML('beforebegin', taskUI);

   }

 if("below"==action){
   
   parent.insertAdjacentHTML('afterend', taskUI);

   }

}

function buildUIforTask(newTask){


const id = document.querySelectorAll(".task-items").length;
let html = `<li id="${id}" >${newTask}<button data-action="above" > Add Above</button>
  <button data-action="below"> Add below</button></li>`;

return html;

}