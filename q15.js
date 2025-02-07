
function registerUser(username, callback) {
    console.log("Registering user...")

    setTimeout(() => {
        if (username) {
            console.log(`User "${username}" registered successfully.`)
          
        } else {
            console.log("Registration failed: Username is required.")
        }
        callback()
    }, 1000)
}

function sendVerification(success,username, callback) {
    console.log("Sending verification email...")

    setTimeout(() => {
    
        if (success) {
            console.log(`Verification email sent to "${username}".`)
       
        } else {
            console.log("Verification failed: Email service unavailable.");
        }
        callback()
    }, 1000);
}


function loginUser(success, username, callback ) {
    console.log("Logging in...")

    setTimeout(() => {
      
        if (success) {
            console.log(`User "${username}" logged in successfully.`)
            callback();
        } else {
            console.log("Login failed: Incorrect credentials.")
        }
    }, 1000);
}


function displayWelcomeMessage(username) {
    console.log("Displaying welcome message...")

    setTimeout(() => {
        console.log(`Welcome, ${username}! `)
      
    }, 1000);
}

registerUser("ravi" , (()=>{
    sendVerification(true , "ravi" , (()=>{
        loginUser(true ,"ravi" ,(()=>{
            displayWelcomeMessage("ravi .")
        }))
    }))
}))