
# VaycayApp

Welcome to VAYCAY! 
This app was built for explorers who visit tinytowns and dont have a particular place to visit.
Many locals have great hole in the wall spots that you dont find on any tourist maps. If only there were a place to record all of the great places that you can't find on google, tripadvisor, and other travel apps.

## DEMO
[Click here for the App](https://vaycayapp.herokuapp.com/places)  
Username: demo@gmail.com  
Password: 12345678  

##  TECH USED

|Frontend|Backend|  
|--|--|  
| Pug| Node.js |  
|CSS|Express|  
|Javascript|Mongoose |  
|HTML|MongoDB|  
||Dotenv|  
||Cloudinary|  
||Passport.js|  
||Bcrypt.js|  

This app used Node.js and Express for creating the server.  
MongoDB for the database, originally hosted on mlab, now on Atlas.  
Built the front-end in Pug.  
Cloudinary for image hosting.  
Passport.js for authentication using bcrypt for password encryption and decryption.  

## ROUTES  

|Method|Route|Description|  
|--|--|--|  
|GET|/|Shows home view|  
|GET |/login|Shows login view|  
|GET|/loginFailure|Show unauthorize login view|  
|GET|/register|Shows account register form|  
|GET|/add|Shows add register|  
|GET|/places| View all places unfiltered|  
|GET|/places/:id| View specific place by ID|  
|GET|/faves|Shows all places filtered to marked favorites|  
|GET|/edit/:id|View edit form of a saved place by ID|  
|GET|/logout|Initiates Logout Sequence|  
|POST|/login|Initiates Login Sequence with Passport Local|  
|POST|/register|Initiates Registration Sequence with Passport Local|  
|POST|/add|Add a place|  
|POST|/edit/:id|Edit a place by ID|  
|POST|/fave/:id|Mark a place as a favorite by ID|  
|POST|/reviews/:id|Add a review of a place|
|POST|/delete/:id| Delete place by ID|  

## INSTALLATION  
```
    git clone https://github.com/patelpr/VaycayApp.git vaycay  
    cd vaycay  
    touch .env  
```
Please add the following keys to the `.env` file along with their values  
```
    DATABASE_URL=MONGODB URI STRING  
    OPTIONS= CLOUDINARY IMAGE HOSTING OBJECT {cloud_name, api_key, api_secret}  
```  
Then in your command line go ahead and start it up!  
```
    npm i && npm start  
```
