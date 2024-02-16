# Euphoria

# Authors: Michelle Amina Okumu , Leila Abdi, Daniel Baru, Norah Kibathi, Abdishukri Mohamed, Macdonald Muhavi

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
