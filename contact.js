document.getElementById('TheQueryForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    console.log("got here\n\n");
  e.preventDefault();
  // Get Values from the DOM
  console.log("got here\n\n");
  let message = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
//   let password = document.querySelector('#password').value;
//   let bio = document.querySelector('#bio').value;
//   let job = document.querySelector('#job').value;
//   let interest = document.querySelector('#interest').value;}







  console.log("36 got here\n\n 3");
let formMessage = firebase.database().ref('register');
let newFormMessage = formMessage.push();
newFormMessage.set({
  message: message,
  email: email,
});

console.log("works")




}
