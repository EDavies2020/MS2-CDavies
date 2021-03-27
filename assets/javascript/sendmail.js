function sendMail(contactForm) {
var templateParams = {
    "name": contactForm.name.value,
    "emailaddress": contactForm.emailaddress.value,
    "contractnumber": contactForm.contactnumber.value,
    "therapy": contactForm.therapy.value,
    "therapydetails": contactForm.therapydetails.value,
};
    emailjs.send("CADavies","website enquiry", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
 

