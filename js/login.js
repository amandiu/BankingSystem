document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const emailFieldvalue = emailField.value;
    const passwordFieldvalue = passwordField.value;
    
    emailField.value = "";
    passwordField.value = "";

    if (emailFieldvalue === "aman@gmail.com" && passwordFieldvalue === "aman22") {
        document.location.href = "http://127.0.0.1:5500/bank.html";
    }
});