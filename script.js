function get()	{
	var data = localStorage.getItem('todos');
	return data;
}

function onDomLoaded()	{
	toDo = document.querySelector('h1');
	field = document.querySelector('input');
	li = document.querySelector('li');
	ul = document.querySelector('ul');
	console.log(localStorage.todo);
	console.log(get());
	if (get()) {
		ul.innerHTML = get();
	}


function add()	{
	li = document.createElement('li');
	li.textContent = field.value;
	ul.append(li);	
	icoTrash = document.createElement('i');
	icoTrash.classList.add("fas", "fa-trash-alt");
	li.prepend(icoTrash);
	localStorage.setItem("todos", ul.innerHTML);
	
}	

document.addEventListener('click', (e) => {	
	if (e.target.tagName == "I") {
		console.log(typeof(e.target.tagName));
		console.log(e.target.parentNode);
		e.target.parentNode.remove();
		localStorage.todo.replace(e.target.tagName,"");
		localStorage.setItem("todos", ul.innerHTML);
	}
});


field.addEventListener('keydown', function(event) {
	if (event.key == 'Enter') {
		if (field.value) {
		add();
	}
		field.value = "";
	}
});
	btn.addEventListener('click', function()	{
	lis = document.querySelectorAll('li');
	for (var i=0; i<lis.length; i++) {
		lis[i].parentNode.removeChild(lis[i]);
	}
	localStorage.setItem('todos','');
});

}
document.addEventListener("DOMContentLoaded", onDomLoaded);
