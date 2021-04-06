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
    * hmpg.js: [view report](assets/images/training/hmpgjs.PNG) 
    * maps.js: [view report](assets/images/training/mapsjs.PNG) 
    * script.js: [view report](assets/images/training/scriptjs.PNG)
    * sendmail.js: [view report](assets/images/training/sendmailjs.PNG) 
    * springboard.js: [view report](assets/images/training/springboardjs.PNG) 
    * therapy.js: [view report](assets/images/training/therapyjs.PNG) 


## Errors

* HTML - minor errors resolved, no errors remaining
* CSS - No errors found 
* Javascript - No errors found


## Warnings

* HTML - Warning The type attribute is unnecessary for JavaScript resources. From line 13, column 5; to line 13, column 102
        itle> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></scri
    * Fix: I have left this warning as this this is the code EmailJS ask to be pasted into the head element
* HTML - Warning The type attribute is unnecessary for JavaScript resources. From line 14, column 5; to line 14, column 35
        ript> <script type="text/javascript">
    * Fix: I have left this warning as this this is the code EmailJS ask to be pasted into the head element 
* HTML - Warning Section lacks heading. Consider using h2 - h6 elements to add identifying headings to all sections.
        From line 64, column 1; to line 64, column 9
    * Fix: Removed <section></section> from maps section which resolved this warning
* CSS - No Warnings found
* JavaScript - 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
* JavaScript - 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
* JavaScript - 'template literal syntax' is only available in ES6 (use 'esversion: 6').
    * Fix: /*jshint esversion: 6 */ was added to JSHint before js code to resolve these issues.
      This fix I found on [stackoverflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const)
* JavaScript - Missing semicolon
    * Fix: Added missing semicolons
* JavaScript - Do not use 'new' for side effects.
    * Fix: As this was taken from [google maps documentation](https://developers.google.com/maps/documentation/javascript/marker-clustering) I ave left this as it is


## Testing EmailJS API

* Email to Christine following form submission: [enquiry email](assets/images/training/websiteenquiry.pdf)
* Email to user from Christine Website (EmailJS): [auto response](assets/images/training/autoresponse.pdf)

## Console
* No errors displayed in console


## Testing User Experience (UX)
---------------------------------


### First time user goals:

* Easily understand what the business offers and purpose of the website
    * Homepage - The main hero image states that Christine is a holistic therapist
    * Homepage - My Story explains Christines experience and how it has led her to what she now offers
    * Therapies page - All therapies Christine offers are listed here with full details of the therapy
    * Contact page - The enquiry form shows the purpose of the site is to make contact about the therapy your interested in

* Easy to navigate
    * The navigation bar is at the top of each page, accessed via the burger icon
    * There is a back to top button available when you begin to scroll down the page
    * All links change colour when hovered over to show they can be clicked
    * There are links throughout all pages directing the user around the site depending on their priorities

* Testimonials to show what the users think of Christine and her therapies
    * There are 2 testimonial carouseld, 1 on the homepage and 1 on the therapies page

* Help users to get a feel for Christine as a person to decide if she is right person to treat them
    * The colours and images have been chosen to reflect Christines personality and ethos.

* Details of therapies, prices and appointment details
    * There is a therapies page listing details of all therapies available with links to make contact
    * Prices and timings are available on the contact page

* Provide contact details for Christine and location. Easy to make contact with Christine via the website and acknowledgement of the enquiry
    * Christines contact details are in each footer and also on the contact page
    * There is a enquiry form on the contact page which submits an email to Christine
    * The user opens a modal on submission thanking them for the enquiry, they also recieve an auto response via email

* Give and introduction to Christines joint venture, Springboard
    * Details about Christines joint venture are on the Springboard page
    * There is a link to the springboard page on the therapies page

### Returning user goals:

* Find/double check contact Information, check location
    * This is available on the contact page

* Find information on other treatments following initial appointment
    * All services are shown on the therapies page

* Showing friends/recommendation
    * The website can be easily shared with others
    * They can also be directed to Christines social media

* Springboard updates
    * Updates can be posted when the Springboard website is live and weekends are confirmed

* Christine would like a client area added to upload initial reports - Future consideration 
    * This will be a future development
    
### Frequent user goals:

* Check for addition of new therapies/testimonials
    * Therapies and testimonials can be updated easily periodically 

* Springboard updates 
    * Updates can be posted when the Springboard website is live and weekends are confirmed

* Christine would like a client area added to upload links to reseach she has compiled/ additional reading for subscribing clients - Future consideration
* Christine would like to add a blog, perhaps linked from/to facebook with relevant posts to therapies
    * Both of the above points are future website development points

 ## Manual Testing

* Navbar
    * I chose a picture for the background of the curtain navbar, the links werent that easy to see so I added a colour background  
        with low opactity to make these more visible to the user

* Footer
    * The email, telephone number and facebook links are all working correctly

* Homepage
    * Read more/read less buttons are working correctly
    * Link to therapies page works correctly and doesnt break the site by clicking the back button
    * Testimonial carousel is working correctly. Again, I used a plain colour behind the text to make it clearer to the user
    * Each page has been tested on all screen sizes using online responsive media sites. I have also manually tested on my iphone phone, 
        ipad and Christine tested using her android

* Therapies page 
    * 
