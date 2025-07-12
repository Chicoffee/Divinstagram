document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const message = document.getElementById('message');
        const correctPassword = "042406";

        if (password === correctPassword) {
            // Set login flag
            localStorage.setItem("authenticated", "true");
            window.location.href = "main-ui.html";
        } else {
            message.textContent = "Invalid username or password. Please try again.";
        }
    });
});
