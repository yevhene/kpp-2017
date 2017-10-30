const api = 'https://vntu-kpp.herokuapp.com/examples/03-desktop';
let count = 0;

function createMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  fetch(`${api}/messages`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, message })
  })
  .then(loadMessages);

  return false;
}

function loadMessages() {
  fetch(`${api}/messages`)
    .then((response) => response.json())
    .then(render);
}

function render(messages) {
  if (messages.length == count) {
    return;
  }
  count = messages.length;

  const html = messages
    .reverse()
    .map((m) => `<li>[${m.time}] <b>${m.name}</b>: ${m.message}</li>`)
    .join('');

  document.getElementById('messages').innerHTML = html;
}

loadMessages();

setInterval(loadMessages, 500);
