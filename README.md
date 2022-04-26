# VaycayApp  
Welcome to VAYCAY  
This app was built for explorers who visit tinytowns and dont have a particular place to visit.  
Many locals have great hole in the wall spots that you dont find on any tourist maps. If only there were a place to record all of the great places that you can't find on google, tripadvisor, and other travel apps.  

## Login  
If you would like to demo the app, please use the following credentials.  
Username: demo@gmail.com  
Password: 12345678  

## Features  
Once logged in you will be able to create your favorite places in the world to share with everyone.  
You will also have the ability to create a list of favorites.  

## Stack  
This app used Node.js and Express for creating the server.  
MongoDB for the database, originally hosted on mlab, now on Atlas.  
Built the front-end in Pug(formerly known as Jade), a HTML pre-processor.  
Cloudinary for image hosting.  
Passport.js for authentication using bcrypt for password encryption.  

## Installation  
git clone https://github.com/patelpr/VaycayApp.git vaycay  
cd vaycay  
touch .env  
***  
Please Add the following keys to the .env file along with their values  
DATABASE_URL=MONGODB URI STRING  
OPTIONS= CLOUDINARY IMAGE HOSTING OBJECT {cloud_name, api_key, api_secret}  
***  
npm i && npm start  
