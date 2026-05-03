# CS208 Full Stack Final Project - Donut Shop Application

- Name: Emma Walls
- GitHub: [https://github.com/eawalls/CS-208-Final-Project](https://github.com/eawalls/CS-208-Final-Project)
- Term: Spring 2026

## Project Description

My final project for CS208 is a website for a small family-run donut shop. The site allows users to view
the menu, access links to order donuts, and leave comments for the shop. The application uses Express for 
the backend and MariaDB (MySQL) for the database. First follow the instructions below to set up the database
and tables neccesary to run the website. 

## Setup Instructions
1. Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running. You
only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

2. Create the Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

3. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

4. Run the Application

Start the application using the following command:

```bash
npm start
```

5. Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.

## Design Decisions
- I wanted the website to have a cozy feeling, as specified by the design brief, throughout the entire site.
To capture this, I decided to have a header built into the body of the layout that display the companies
colors as well as their logo. This way no matter what page the user goes to, they still see the logo and 
colors that give the webpage that "cozy" feeling.
- The home page needed to be welcoming as well as give the user an immediate idea of what the website is for.
To capture this, I wanted to display the donuts that the shop sells. The design brief did specify that they also
wanted the website to be mobile friendly, so my challenge was making sure to take up the space of a full website,
but also allowing for a change in structure to accomodate a smaller mobile device. I chose to use flex to split
the homepage in half, allowing for the text to be on the left and an image of the donuts on the right. This made the 
homepage appear more "full" and welcoming. This meant that I also had to add a media section to my css so that I could
specify the flex to stack vertically if the user had a smaller screen that would not fit the entire page.
- I also wanted the user to be able to quickly order donuts no matter which page of the website they are on. To accomplish
this, I added an aside tag that would appear on the right of my main sections (the content of the pages themselves). This
side portion contains the links to ordering websites so that the user never has to go searching for how to order donuts. 

## Edge Cases
1. What happens if the server/API is unreachable?
I used a try-catch block so that if the server or API are unreachable, the page will display a message stating that there
was an "Error loading page" or an "Error adding comment" if the page fails to post a comment from a user.
2. What happens if a user submits a comment with only whitespace?
I made the name and message fields required so a user may not submit with blank fields. If a user attempts to submit with 
one of the fields containing only whitespace, I used the trim feature to return an error message stating "Name and Comment 
are required". 
3. What happens if a user submits extremely long input?
In the comments.pug file, I specified a required max-length of 50 characters for the name field and 800 characters for the
message/comment field. This will stop the user from being able to type any more than the maximum allowed characters. 
4. What happens if the user rapidly double-clicks the submit button?
I added a script within the comments.pug file that disables the submit button after it has been presses and disables a message 
that states the comment is posting while the job is being run.

## Challenges & Learnings
- I had trouble with the edge case for double-clicking. I did not remember that a button could be disabled, so I had to go searching
for a method to prevent double-clicking. I eventually found the blog listed in citations and used that to build a script. I originally
wrote the script in the index.js file, but it kept breaking the entire website and would not allow me to open it. At this point I did
run the problem through AI which suggested trying the script within the comments.pug file instead which fixed the issue. 
- When I was trying to design the homepage, I originally tried using tables to build the side-by-side look that I wanted with the image and text.
I had a difficult time getting this to convert to a mobile design, however. Once I went back to the the textbook and the CSS site listed in 
the citations, I decided to try using flex instead. This enabled me to easily switch the flex style to vertical for media. 

## Citations
- Site used to help with disabling submission button after it is pressed: https://coreui.io/blog/how-to-disable-a-button-in-javascript/
- Class book: https://learn.zybooks.com/zybook/BOISESTATECS208PanterSpring2026
- HTML reference to help build PUG files: https://www.w3schools.com/tags/
- CSS reference to help build style.css file: https://www.w3schools.com/w3css/w3css_tags.asp
- Google AI was also used to help troubleshoot the backend processes for GET comments and POST comments, as well as organizing the CSS file.
