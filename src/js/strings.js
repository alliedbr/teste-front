let index = 1;
const input = document.getElementById('msg');
const messages = [
  'RXN0YW1vcyByZWFsbWVudGUgbXVpdG8gZmVsaXplcw==',
  'cXVlIHZvY+ogdGVuaGEgY2hlZ2FkbyBhdOkgYXF1aSE=',
  'QWdvcmEgc/MgZmFsdGEgbyD6bHRpbW8gcGFzc286',
  'aHR0cHM6Ly9naXRodWIuY29tL3dvb3phYnIvdGVzdGUtZnJvbnQ='
];
input.value = atob(messages[0]);

setInterval(() => {
  input.value = atob(messages[index]);

  if (index < messages.length - 1) {
    index++;
  } else {
    index = 0;
  }
}, 10);
