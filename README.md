# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) RAD London - WDI Group Project

###Overview
Interactive map of East London, marking the popular historical locations revealing the name, pictures and information. Signing in through Twitter will provide the user with the ability to "check into" the locations. 

![Frontpage](https://cloud.githubusercontent.com/assets/13486932/10378251/ca572906-6dff-11e5-9213-66902c9db244.png "Front Page")


###Approach/How it works
User is presented with a landing page, giving them an understanding of the use of the web application. User has the ability to sign in via Twitter with the twitter sign in page, or via the login button in the navigaton bar. Once signed in, the user's twitter profile image will appear next to the home button on the navigation bar. 

Navigation bar shows:

* Home button 
* Place button 
* Login (for Twitter) button
* Logout (for twitter) button
* User image from twitter
* RAD London Logo

![Place 1](https://cloud.githubusercontent.com/assets/13486932/10378628/d3fb31f8-6e01-11e5-9a2c-8ec1974cf124.png "Freedom Press: Place example")

<br>

![Place 2](https://cloud.githubusercontent.com/assets/13486932/10378716/52161940-6e02-11e5-9e6c-bf7cfc92e70f.png "Battle of Cable Street: Place example")

Place button leads to a page showing the interactive map.
Once on the map page users are able to click on the markers shown on the map revealing a box showing the information of the currently selected location. 

###The Build

* HTML5
* Node.js
* Express
* MongoDB
* Mongoose
* CSS
* JavaScript
* jQuery
* Ajax
* Google Maps API
* Twitter API
* Passport (Authentication)
* And numerous other Node 'Middlewares'

### Problems & Challenges 

The main challenges with the functionality revolved around authenticaton, taking a long time to implement passport and navigate the restrictions it can create with data pulled from external API's.
Retrieving and pushing data into our local database also proved difficult. 

### MVP 2
* Different pages showing for different available walking tours around East London.
* Expanding it to different areas of London
* Twitter showing user searched location or tag on pages
* Add personal history/stories to the page, comment feature. 
* Once application has expanded to different areas of London show underneath titleon homepage, shows the popular destinations/walking tours.
* Make links of these places clickable revealing different pages showing different maps with the current functionality.