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



// for making the modal visible
document.getElementById('signup').addEventListener('click', function (event ) {
    

    const modalWindow = document.getElementById('full-window-container');
    modalWindow.style.visibility = 'visible';

})


// Click Away Listener

document.getElementById('sign-up-container').addEventListener('click', function(event) {
    event.stopPropagation();
})

document.getElementById('full-window-container').addEventListener('click', function(event) {
    event.stopPropagation();
    this.style.visibility = 'hidden';
    this.style.transition = '0.3s ease-in-out';

})


//  for setting alert div style and message

function setAlertDiv(element, borderColor, backgroundColor,  message) {

    element.style.padding = '10px';
    element.style.opacity = "0.5";
    element.style.border = `1px solid ${borderColor}`;
    element.style.backgroundColor = backgroundColor;
    element.innerHTML = message;
    element.style.margin = "10px";
    element.style.color = "black";
    element.style.borderRadius = "2px";
    element.style.width = "250px";
    element.style.fontSize = "15px";
    element.style.visibility = "visible";
}

document.getElementById('SignUp-Submit-Button').addEventListener('click',function(event) {
    // inputs lo
    // disable inputs and buttons
    // log details
    // then close the modal
    // clear the inputs
    // and undisable the inputs


    // getting input elements
    const email =  document.getElementById('signup-email');
    const password =  document.getElementById('password');
    const confirmPassword =  document.getElementById('confirm-password');

    // getting their values for validation
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    //performing validations
    let alertString = "";
    const alertContainer = document.getElementsByClassName('alert-container-para')[0];
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue || !emailValue.match(validRegex)) {
        alertString = "Not a valid email!";
        setAlertDiv(alertContainer, colorObject.red.borderColor , colorObject.red.backgroundColor, alertString);
        return;
    }

    if(!passwordValue) {
        alertString = "password is required!";
        setAlertDiv(alertContainer, colorObject.red.borderColor , colorObject.red.backgroundColor, alertString);
        return;
    }

    if(!confirmPasswordValue) {
        alertString = "Retype the password!";
        setAlertDiv(alertContainer, colorObject.red.borderColor , colorObject.red.backgroundColor, alertString);
        return;
    } 
    if(passwordValue.length > 0 && confirmPasswordValue !== passwordValue) {
        alertString = "passwords doesn't match!";
        setAlertDiv(alertContainer, colorObject.red.borderColor , colorObject.red.backgroundColor, alertString);
        return;
    }


    const signupButton = document.getElementById('SignUp-Submit-Button');
    
    
    // disabling inputs
    email.disabled = true;
    password.disabled = true;
    confirmPassword.disabled = true;
    signupButton.disabled = true;
    // ... adding spinner to button
    signupButton.innerHTML = `<img id = "spinner" src = "./public/images/spinners/spinner-for-button.svg" alt = "spinner" >`;

    
    // Now Logging the details

    const user = {
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue
    };

    setTimeout(() => {
        // Now undisabling and displaying success message
        alertString = "Welcome!"
        setAlertDiv(alertContainer, colorObject.green.borderColor, colorObject.green.backgroundColor, alertString)
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
            alertContainer.style.visibility = "hidden";
        },1000)
        console.log(user);
    },2000)


})
