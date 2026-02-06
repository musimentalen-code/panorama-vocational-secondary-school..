function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("loginMsg");

    if (user === "student" && pass === "1234") {
        msg.style.color = "green";
        msg.innerText = "Login successful!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid username or password";
    }
}