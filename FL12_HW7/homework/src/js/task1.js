let userLogin;
let userPassword;
let decision;
let userCheckingOldPassword;
let userNewPassword;
let userCheckingNewPassword;


userLogin = prompt('Enter your email');
if(userLogin === '' || userLogin === null) {
    alert('Canceled');
} else {
    if(userLogin.length < 5) {
        alert("I don't know any emails having name length less than 5 symbols");
    } else {
        if(userLogin === 'user@gmail.com' || userLogin === 'admin@gmail.com') {
            userPassword = prompt('Enter your password');
            if(userPassword === '' || userPassword === null) {
                alert('Canceled');
            } else {
                if(userLogin === 'user@gmail.com' && userPassword === 'UserPass' 
                || userLogin === 'admin@gmail.com' && userPassword === 'AdminPass'){
                    decision = confirm('Do you want to change your password?');
                    if(decision === false) {
                        alert('You have failed the change.');
                    } else {
                        userCheckingOldPassword = prompt('Repeat your old password');
                        if(userCheckingOldPassword === '' || userCheckingOldPassword === null) {
                            alert('Canceled');
                        } else {
                            if(userCheckingOldPassword === userPassword) {
                                userNewPassword = prompt('Enter new password');
                                if(userNewPassword === '' || userNewPassword === null) {
                                    alert('Canceled');
                                } else {
                                    if(userNewPassword.length < 6) {
                                        alert('It’s too short password. Sorry.');
                                    } else {
                                        userCheckingNewPassword = prompt('Repeat your new password');
                                        if(userCheckingNewPassword !== userNewPassword) {
                                            alert('You wrote the wrong password.');
                                        } else {
                                            alert('You have successfully changed your password.');
                                        }
                                    }
                                }
                            } else {
                                alert('Wrong password');
                            }
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('I don’t know you');
        }
    }  
}





