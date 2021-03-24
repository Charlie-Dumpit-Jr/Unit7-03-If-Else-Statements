// connects "Your age?" Button to test age function
document.getElementById('button').addEventListener('click', testAge)
let age = 0

function testAge () {
  age = document.getElementById('input').value
  age = parseInt(age)
  
  // check if user input is >=17, 13, 5.
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You Can Watch Any Movies'
    alert('Thank You for Verifying your Age')
  } 
  else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can Watch a PG 13 or a G Movie'
    alert('Thank You for Verifying your Age')
  }
  else if (age >=5) {
    document.getElementById('answer').innerHTML = 'You are too Young'
    alert('Thank You for Verifying your Age')
  }
}
