// Create a function called validatePassword to validate passwords entered in the form
// Valid passwords should have at least 8 characters, at least one uppercase letter, and at  least one lowercase letter.
// Invoke this new function from validateForm function,
// Update validateForm to:
// validate user-entered password
// verify first and last name values are NOT missing
// Show a message is any form entries are invalid
// Show a message if all 3 fields are valid
// Your validation can stop and show the failure message when the first invalid condition is met


// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// let password = document.getElementById('password');
// let form = document.getElementById('form');

// let errorFname = document.getElementById("errorFname");
// let errorLname = document.getElementById('errorLname');
// let errorPassword = document.getElementById('errorPassword');

// let lowercase = /[a-z]/;
// let uppercase = /[A-Z]/;

// form.addEventListener('submit', (e) => {



//     if (fname.value === '' || lname.value == null)

//     {
//         e.preventDefault();
//         errorFname.innerHTML = "Enter Your First Name";
//     } 

//     else {
//         errorFname.innerHTML = " ";
//     }



//     if (lname.value === '' || lname.value == null)

//     {
//         e.preventDefaulte();
//         errorLname.innerHTML = 'Enter Your Last Name';
//     }
//     else {
//         errorLname.innerHTML = ' ';
//     }




//     if (password.value.length < 8)

//     {
//         e.preventDefault();
//         errorPassword.innerHTML = 'Password must be at least 8 characters';
//     }
//     else {
//         errorPassword.innerHTML = ' ';
    
//     }




//     if (!password.value.match(lowercase))

//     {
//         e.preventDefault();
//         errorPassword.innerText = 'Password must contain at least 1 lowercase letter';
//     }
//     else {
//         errorPassword.innerText = ' ';
    
//     }




//     if (!password.value.match(uppercase))

//     {
//         e.preventDefault();
//         errorPassword.innerText = 'Password must contain at least 1 uppercase letter';
//     }
//     else {
//         errorPassword.innerText = ' ';
    
//     }



// })