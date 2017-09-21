function loadTasks() {
  fetch('tasks')
  .then(function(response) {
    return response.json();
  })
  .then(function(tasks) {
    var html = '';
    for (var i = 0, len = tasks.length; i < len; i++) {
      var task = tasks[i];
      var destroyButton = '<button onclick="destroyTask(\'' + task._id + '\')">X</button>';
      html += '<li>' + tasks[i].name + ' ' + destroyButton + '</li>';
    }
    document.getElementById('tasks').innerHTML = html;
  });
};

function destroyTask(id) {
  fetch('tasks/' + id, {
    method: 'delete'
  })
  .then(loadTasks);
}

function createTask() {
  var taskName = document.getElementById('new_task_name').value;

  fetch('tasks', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: taskName })
  })
  .then(loadTasks);

  return false;
};

loadTasks();
