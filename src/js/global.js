window.onload = function () {
  if (is.ie()) {
    var msg = document.createElement('h1');
    msg.className = 'vacancies-closed';
    msg.innerHTML = 'Vagas encerradas!'
    document.getElementById('alert').appendChild(msg);
  } else {
    console.log('%cAllied Brasil', 'color: #003b71; font-size: 24px;');
    console.log('Primeira dica:');
    console.log('TyBpbXBvcnRhbnRlIMOpIHRlciBlc3RpbG8uIE91IG7Do28gdGVyLCBlbSBhbGd1bnMgY2Fzb3MgOyk=');
  }
}
