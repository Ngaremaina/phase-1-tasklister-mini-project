document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let task_input = document.getElementById('new-task-description').value
    handleToDo(task_input)
    form.reset()
  })
});

function handleToDo(todo){
  let p = document.createElement('p')
  p.textContent = `${todo}`
  document.querySelector('ul').appendChild(p)

  let btn = document.createElement('button')
  btn.textContent = " X"
  p.appendChild(btn)

  btn.addEventListener('click', handleDelete)

}

function handleDelete(e){
  e.target.parentNode.remove()
}
