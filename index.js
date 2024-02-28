const colorObject = {
    red: {
        borderColor: 'red',
        backgroundColor: '#ffb1ad',
    },
    green: {
        borderColor: '#30af16',
        backgroundColor: '#b4ff9b',
    }
}
const email =  document.getElementById('signup-email');
const emailErrorContainer = document.getElementById('email-error');
const password =  document.getElementById('password');
const passwordErrorContainer = document.getElementById('password-error');
const confirmPassword =  document.getElementById('confirm-password');
const confirmPasswordErrorContainer = document.getElementById('confirm-password-error');
const signupButton = document.getElementById('SignUp-Submit-Button');



// Function to add in prototypes

String.prototype.checkEmailRegex = function() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.match(emailRegex);
}

String.prototype.checkPasswordRegex = function() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#&])[A-Za-z\d!@#&]{8,15}$/
    return this.match(passwordRegex)
}


// Validators for inputs
const validateEmail = () => {
    return email.value.checkEmailRegex();
}

const validatePassword = () => {
    return password.value.checkPasswordRegex();
}

const validateConfirmPassword = () => {
    return password.value === confirmPassword.value;
}


// for setting error container
const showError = (element, displayMode, errorMessage) => {
    element.innerHTML = errorMessage;
    element.style.color = "red";
    element.style.fontSize = "10px";
    element.style.display = displayMode;
}



// listeners for onmouseleave on inputs

email.addEventListener('blur', () => {
    if(!validateEmail()) {
        showError(emailErrorContainer, 'block', 'email not valid');
    }
    else{
        showError(emailErrorContainer, 'none');
    }
})


password.addEventListener('blur', () => {
    if(!validatePassword()) {
        showError(passwordErrorContainer, 'block', 'password should contain A-Z, a-z, !@#&, 0-9 and length from 8-15');
    }
    else{
        showError(passwordErrorContainer, 'none');
    }
})

confirmPassword.addEventListener('blur', () => {
    if(!validateConfirmPassword()) {
        showError(confirmPasswordErrorContainer, 'block', 'passwords not matching');
    }
    else{
        showError(confirmPasswordErrorContainer, 'none');
    }
})


// disabling the button until all the validations are met


setInterval(() => {
    document.getElementById('SignUp-Submit-Button').disabled = !(validateEmail() && validatePassword() && validateConfirmPassword());
},1000)



document.getElementById('SignUp-Submit-Button').addEventListener('click',function(event) {
    // get the element access
    // now perform the validations
    // If validations are right perfome following:-
    // disable inputs and buttons
    // log details
    // then close the modal
    // clear the inputs
    // and undisable the inputs


    // validations are being performed. Submit button will be disabled till all the validations are true
    
    // disabling inputs
    email.disabled = true;
    password.disabled = true;
    confirmPassword.disabled = true;
    signupButton.disabled = true;
    // ... adding spinner to button
    signupButton.innerHTML = `<img id = "spinner" src = "./public/images/spinners/spinner-for-button.svg" alt = "spinner" >`;

    
    // Now Logging the details

    const user = {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };

    setTimeout(() => {
        setTimeout(() => {
            document.getElementById('full-window-container').style.visibility = "hidden";
            email.disabled = false;
            password.disabled = false;
            confirmPassword.disabled = false;
            signupButton.disabled = false;
            
            email.value = "";
            password.value = "";
            confirmPassword.value = "";
            signupButton.innerHTML = "Sign Up";
        },1000)
        console.log(user);
    },1500)

})



// ---------------------- for opening and closing of modal -----------------------

// listening to click on signup button for making the modal visible
document.getElementById('signup').addEventListener('click', function (event ) {
    
                
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    signupButton.innerHTML = "Sign Up";
    showError(emailErrorContainer,'none');
    showError(passwordErrorContainer,'none');
    showError(confirmPasswordErrorContainer,'none');
    const modalWindow = document.getElementById('full-window-container');
    modalWindow.style.visibility = 'visible';

})


// Click Away Listener from modal to close it
document.getElementById('sign-up-container').addEventListener('click', function(event) {
    event.stopPropagation();
})
document.getElementById('full-window-container').addEventListener('click', function(event) {
    event.stopPropagation();
    this.style.visibility = 'hidden';
    this.style.transition = '0.3s ease-in-out';

})
