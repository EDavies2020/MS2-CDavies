function sendMail(contactForm) {
    emailjs.send("CADavies","website enquiry", {
        "name": contactForm.name.value,
        "email": contactForm.email.value,
        "number": contactForm.number.value,
        "therapy": contactForm.therapy.value,
        "details": contactForm.details.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}