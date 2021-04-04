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
---------------------------------


### First time user goals:

* Easily understand what the business offers and purpose of the website
    * Homepage - The main hero image states that Christine is a holistic therapist
    * Homepage - My Story explains Christines experience and how it has led her to what she now offers
    * Therapies page - All therapies Christine offers are listed here with full details of the therapy
    * Contact page - The enquiry form shows the purpose of the site is to make contact about the therapy your interested in

* Easy to navigate
    * The navigation bar is at the top of each page, accessed via the burger introduction
    * There is a back to top button available when hyou begin to scroll down the page
    * All links change colour when hovered over to show they can be clicked
    * There are links throughout all pages directing the user around the site depending on their priorities

* Testimonials to show what the users think of Christine and her therapies

* Help users to get a feel for Christine as a person to decide if she is right person to treat them

* Details of therapies, prices and appointment details

* Provide contact details for Christine and location. Easy to make contact with Christine via the website and acknowledgement of the enquiry

* Give and introduction to Christines joint venture, Springboard

### Returning user goals:

* Find/double check contact Information, check location
* Find information on other treatments following initial appointment
* Showing friends/recommendation
* Springboard updates
* Christine would like a client area added to upload initial reports - Future consideration 

### Frequent user goals:

* Check for addition of new therapies/testimonials
* Springboard updates    
* Christine would like a client area added to upload links to reseach she has compiled/ additional reading for subscribing clients - Future consideration
* Christine would like to add a blog, perhaps linked from/to facebook with relevant posts to therapies

*  

### Returning user goals:

* 

### Frequent user goals:

*

 ## Further Testing

* 

## Known issues 

*