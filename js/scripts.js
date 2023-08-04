console.log ("Welcome to my page!")
var person = {
    name: "Collins",
    age: 24,
    hobbies: "basketball",
}

console.log (person)

  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }