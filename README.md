[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Affirmation Station
Capture and Integrate everyday inspiations into life enriching affirmations. 

## Links
[Client-side deployed](https://neuroplastic1.github.io/affirmationStationClient/)

[Server-side deployed](https://salty-anchorage-82122.herokuapp.com/)

[Server-side repository](https://github.com/Neuroplastic1/affirmationStationServer)

## Technologies Used
- JavaScript 
- HTML
- jQuery
- Bootstrap 
- Flexbox 
- CSS 
- cURL
- handlebar

## User stories
As a user in this application, I want to be able to sign-up and then sign-in. After being signed-in i want to be able to create new affirmation with required input, i want be able to delete my affirmation, i want to be able to view all affirmations.as a user i also want to be able to edit my previous affirmation. as a user i want to be able to change my password and sign out.
# Wireframes
Before user is signed in give access to sign up form and sign in form.


![IMG_0888](https://user-images.githubusercontent.com/64027495/87384328-70a01a00-c569-11ea-851d-66b111038a18.JPG)


After user is Signed-in, allow user to access change password form, sign out button, play game button (when clicked, displays the square for them to play), game stats button (when click, displays the number of games they’ve played).
## Planning and Building process 

I aproached creating this app by making an approximate time plan of the process. I first set up my server side schema and routes and then focused on Client side. On client side I first added all athentication forms and affirmation create & update froms to html, I used Jquery and handlebars for event handling and ui flow and used ajax for handling api requests and responses from server side. in the end i sued css to add background image and aligning the forms and data resources.

## Unresolve issues

Because of importing the background image through external link, each page takes quiet long time to load. in the future I would like to add an image 
