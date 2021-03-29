function sendMail(contactForm) {
var templateParams = {
    "name": contactForm.name.value,
    "emailaddress": contactForm.emailaddress.value,
    "contactnumber": contactForm.contactnumber.value,
    "therapyoptions": contactForm.therapyoptions.value,
    "therapychoice": contactForm.therapychoice.value,
    "therapydetails": contactForm.therapydetails.value,
};
    emailjs.send("CADavies","website enquiry", templateParams)
        .then(function(response) { 
            console.log('SUCCESS!', response.status, response.text);
                contactForm.name.value = '';
                contactForm.emailaddress.value = '';
                contactForm.contactnumber.value = '';
                contactForm.therapyoptions.value = '';
                contactForm.therapychoice.value = '';
                contactForm.therapydetails.value = '';
        }, function(error) {
            console.log('FAILED...', error);
        });
}

$(function(){
     $('form').on('submit', function () {                   
          $('#submitModal').modal('show');
          return false;
     });
 });
