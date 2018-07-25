var removeButton = "&times";
var completedButton = "&copy";

var greentick = '<img width="30px" src="https://png.icons8.com/color/50/000000/double-tick.png">';
var blacktick = '<img width="30px" src="https://png.icons8.com/material-two-tone/50/000000/double-tick.png">';

window.onload = function() {
    console.log("Window Loaded");
}


function addToDoItemToTheList() {
    var value = document.getElementById('create-new-todo').value;
    if(value) {
        addItemToTheToDOlIST(value)
        document.getElementById('create-new-todo').value = "";
    }
}

function removeToDoItemFromList() {
    var item = this.parentNode;
    var parent = this.parentNode.parentNode;
    parent.removeChild(item);
}


function isolatedCompletedItem() {
    var item = this.parentNode;
    var parent = this.parentNode.parentNode;
    var parentID = parent.id;
    var comp = this.parentNode.childNodes[2];

    var target = null;

    if (parentID === 'cainam-todo-list') {
        target = document.getElementById('cainam-todo-list-completed');
        target.insertBefore(item, target.childNodes[0])
        comp.innerHTML = greentick;
    }else{
        comp.innerHTML = blacktick;
        target = document.getElementById('cainam-todo-list');
        target.insertBefore(item, target.childNodes[0])
    }
}

function addItemToTheToDOlIST(text) {

    var mylist = document.getElementById('cainam-todo-list');

    var item = document.createElement('li');
    item.classList.add("todo-item");
    item.innerText = text;

    var removeItem = document.createElement('small');
    removeItem.classList.add("remove");
    removeItem.innerHTML = removeButton;
    removeItem.addEventListener('click', removeToDoItemFromList);


    var completedItem = document.createElement('small');
    completedItem.classList.add("completed");
    completedItem.innerHTML = blacktick;

    completedItem.addEventListener('click', isolatedCompletedItem);
    
    item.appendChild(removeItem);
    item.appendChild(completedItem);
    mylist.insertBefore(item, mylist.childNodes[0]);
}

document.getElementById("add").addEventListener('click', addToDoItemToTheList);