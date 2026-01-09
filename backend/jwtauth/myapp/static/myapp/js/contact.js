document.addEventListener("DOMContentLoaded", () => {
    // Your PUBLIC KEY must be inside quotes
    emailjs.init("Wmtg1in2XOCBnxXH0");

    const form = document.getElementById("contactForm");
    const msgBox = document.getElementById("msgBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showMessage("All fields are required.", "error");
            return;
        }

        // Service ID and Template ID MUST also be in quotes
        const serviceID = "service_5rribbk";
        const templateID = "template_ztpvggm";

        emailjs.send(serviceID, templateID, {
            from_name: name,
            reply_to: email,
            message: message
        })
        .then(() => {
            showMessage("Message sent successfully!", "success");
            form.reset();
        })
        .catch(() => {
            showMessage("Failed to send message. Try again.", "error");
        });
    });

    function showMessage(text, type) {
        msgBox.textContent = text;
        msgBox.className = type;
        msgBox.style.display = "block";

        setTimeout(() => {
            msgBox.style.display = "none";
        }, 3000);
    }
});
