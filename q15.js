
function registerUser(username, callback) {
    console.log("Registering user...")

    setTimeout(() => {
        if (username) {
            console.log(`User "${username}" registered successfully.`);
          
        } else {
            console.log("Registration failed: Username is required.");
        }
        callback()
    }, 1000);
}

function sendVerification(success,username, callback) {
    console.log("Sending verification email...")

    setTimeout(() => {
        // let success = Math.random() > 0.2; 
        if (success) {
            console.log(`Verification email sent to "${username}".`)
       
        } else {
            console.log("Verification failed: Email service unavailable.");
        }
        callback()
    }, 1000);
}


function loginUser(success, username, callback ) {
    console.log("Logging in...");

    setTimeout(() => {
        // let success = Math.random() > 0.1; // 90% chance of success
        if (success) {
            console.log(`User "${username}" logged in successfully.`);
            callback();
        } else {
            console.log("Login failed: Incorrect credentials.");
        }
    }, 1000);
}


function displayWelcomeMessage(username) {
    console.log("Displaying welcome message...");

    setTimeout(() => {
        console.log(`Welcome, ${username}! 🎉`);
        // callback(null);
    }, 1000);
}
// registerUser("ravi" , sendVerification(false))
registerUser("ravi" , (()=>{
    sendVerification(true , "ravi" , (()=>{
        loginUser(true ,"ravi" ,(()=>{
            displayWelcomeMessage("ravi")
        }))
    }))
}))