const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let successMessage = document.getElementById("successMessage");

    // Check required fields
    if (name === "" || email === "" || phone === "" || message === "") {
        successMessage.textContent = "Please fill all fields.";
        successMessage.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        successMessage.textContent = "Please enter a valid email.";
        successMessage.style.color = "red";
        return;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        successMessage.textContent =
            "Phone number must contain 10 digits.";
        successMessage.style.color = "red";
        return;
    }

    // Successful submission
    successMessage.textContent =
        "Form submitted successfully!";

    successMessage.style.color = "green";

    form.reset();
});
