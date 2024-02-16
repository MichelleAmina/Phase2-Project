# Euphoria

# Authors: Michelle Amina Okumu , Leila Abdi, Daniel Baru, Norah Kibathi, Abdishukri Mohamed, Macdonald Muhavi

# Introduction 
Euphoria is a group project made as part of Phase2 Week 3 Independent Poroject. It's a web application built with react that fetches data from a deployed db.json page (https://euphoria-git-main-michelle-aminas-projects.vercel.app/Jewelery) and posts data to the same page (https://euphoria-git-main-michelle-aminas-projects.vercel.app/Contact).

Euphoria is you're one stop shop for everything jewelery. For beautiful unique pieces with a wide range of prices, check out our inventory. Spend some time on the application and learn a little more about us. We're always ready to help so feel free to contact us or even leave some feedback on how we can improve our service

## Link to live project 
https://euphoria-jewelery.vercel.app/

## Project Requirements
1. Make a single page application (only one index.html file) using create-react-app
2. Your app should use at least 5 components in a way that keeps your code well organized
3. There should be at least 3 client-side routes using react-routerLinks to an external site.
4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Additionally, you may choose to incorporate data from an external API but it is not required.

### Stretch Goals
1. Incorporate data from an external API. 
2. Add some styling

## Folders and Files 
- Files are grouped in folders that contain their jsx and css pages. 
1. App.jsx - Main page housing the Navbar, Pages and Footer components 
2. Navbar (Navbar.jsx, navbar.css) - Contains the navlinks to different pages; rings, bracelets,earrings,  necklaces, home, about, contact. 
3. Footer (Footer.jsx, footer.css) - Contains the footer element which also has links to different pages 
4. Pages - Contains routes to different page components 
5. Jewelery (Rings.jsx, Earrings.jsx, Necklace.jsx, Bracelets.jsx, jewlelery.css) - Contains the jewelery pages, where the fetched data is displayed based on its category 
6. Home (Home.jsx, home.css) -  Contains  the home page and all associated information
7. About (About.jsx, about.css) - Contains the about page and all assocaited information
8. Contact (Contact.jsx, contact.css) - Contains all contact page and all associated information. Also has a contact form that can be filled, and a POST request sent to the deployed db.json to store the information. 

## To run the program/ setup instructions 
- Clone the repository and naviate to the project directory. 
- Install the required dependencies 
npm install
- Start the server 
npm run dev
- Visit the provided route 
eg http://localhost:5173/

### From the live project 
Open the project link in the browser of your choice. Welcome to Euphoria! You will initially land on the Home page. Feel free to scroll viewing our new and latest products. At the bottom of the page is a Footer containing all our Contact information as well as links to other pages. 
In the About page, get to know a little about us and our team. As well as our journey from inception.
Contact page. Feel free to reach out to us or even send us some constructive critisism using out contact us form. There's also a map showing you where we're located in case you want to pay us a visit.
On the left of the navigation bar are out jewelery pages. Click on one! scroll through our products and filter based on your preferences. 
I hope you enjoyed your experience on our web application. 


## Licence 

MIT License

Copyright (c) 2023 MichelleAmina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
