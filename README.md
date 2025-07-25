# Spice 
A Simple BlogWebsite Made with NodeJS and Vanilla Javascript.

*FrontEnd for the Website* : https://github.com/BadDreams34/BlogWebsite-FrontEnd

## Demo
https://drive.google.com/file/d/13g0_leOpSOVaQp4NV4mbbI4pgH9as4nf/view

## Functionality 
- Users can post blogs and give them a title.
- Can see the Blogs of other users
- Can post comments under the Post of other Users
- Clean and simple UI


## Setup
- Clone this Repository with `git clone`
- Create a .env file in the root folder with the following variables : `DATABASE_URL`, `BASE_URL`
```
//example of .env
// change the values accordingly 
DATABASE_URL="postgresql://dfsasdf@localhost:5432/sdfafds?schema=public"
BASE_URL="http://localhost/6050"
```

- Run `npm run setup` for install Required Packages and Setting up database.
- Run your Backend with `npm run start`
- Now clone the FrontEnd Repository https://github.com/BadDreams34/BlogWebsite-FrontEnd
- Run `index.html` in your Browser and you are done!

