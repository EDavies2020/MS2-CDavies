## Testing
-----------------


## Validating code

* W3C Markup Validation Service - Used to validate html
    * Homepage html: [view report](assets/images/testing/index.htmlchecker.pdf) 
    * Therapies page html: [view report](assets/images/testing/therapies.htmlchecker.pdf) 
    * Contact page html: [view report](assets/images/testing/contact.htmlchecker.pdf)
    * Springboard page html: [view report](assets/images/testing/springboard.htmlchecker.pdf)

* W3C CSS Validation Service - Used to validatate CSS
    * style.css: [view report](assets/images/testing/cssvalidatorresults.pdf) 

*JS Hint - Used to validate JavaScript
    * maps.js: [view report](assets/images/training/jshintmapsjs.PNG) 
    * sendmail.js: [view report](assets/images/training/jshintsendmailjs.PNG) 
    * script.js: [view report](assets/images/training/jshintscriptjs.PNG)


## Errors

* HTML - minor errors resolved, no errors remaining
* CSS - No errors found 
* Javascript - No errors found


## Warnings

* Contact page html - Warning The type attribute is unnecessary for JavaScript resources. From line 13, column 5; to line 13, column 102
        itle> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></scri
    * Fix: I have left this warning as this this is the code EmailJS ask to be pasted into the head element
* Contact page html - Warning The type attribute is unnecessary for JavaScript resources. From line 14, column 5; to line 14, column 35
        ript> <script type="text/javascript">
    * Fix: I have left this warning as this this is the code EmailJS ask to be pasted into the head element 
* Contact page html - Warning Section lacks heading. Consider using h2 - h6 elements to add identifying headings to all sections.
        From line 64, column 1; to line 64, column 9
    * Fix: Removed <section></section> from maps section which resolved this warning
* CSS - No Warnings found
* JavaScript - 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
    * Fix: /*jshint esversion: 6 */ was added to JSHint before js code resolved the issue.
      This fix I found on stackoverflow: https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const
* Script.js - Missing semicolon
    * Fix: Added missing semicolon


## Testing EmailJS API

* Email to Christine following form submission: [enquiry email](assets/images/training/websiteenquiry.pdf)
* Email to user from Christine Website (EmailJS): [auto response](assets/images/training/autoresponse.pdf)


## Testing User Experience (UX)


### First time user goals:

*  

### Returning user goals:

* 

### Frequent user goals:

*

 ## Further Testing

* 

## Known issues 

*