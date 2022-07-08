var hellolist = document.getElementById("list");
function Todo() {
  var todo_item = document.getElementById("input_todo");
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);
  list.appendChild(li);

  var delButton = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delButton.appendChild(delText);
  li.appendChild(delButton);
  delButton.setAttribute("onclick", "deleteItem(this)");
  delButton.setAttribute("class", "btn");
  input_todo.value = " ";
  var editButton = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editButton.appendChild(editText);
  li.appendChild(editButton);
  editButton.setAttribute("onclick", "editItem(this)");
  editButton.setAttribute("class", "btn");
}

function deleteItem(a) {
  a.parentNode.remove();
}

function editItem(e) {
  console.log(e);
  var val = prompt("enter updated value", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = val;
}
function deleteAll() {
  list.innerHTML = " ";
}
