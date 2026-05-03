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
but also allowing for a change in structure to accomodate a smaller mobile device. I chose to use a flexbox to split
the homepage in half, allowing for the text to be on the left and an image of the donuts on the right. This made the 
homepage appear more "full" and welcoming. This meant that I also had to add a media section to my css so that I could
specify the flexbox to stack vertically if the user had a smaller screen that would not fit the entire page.
- I also wanted the user to be able to quickly order donuts no matter which page of the website they are on. To accomplish
this, I added an aside tag that would appear on the right of my main sections (the content of the pages themselves). This
side portion contains the links to ordering websites so that the user never has to go searching for how to order donuts. 

## Edge Cases


## Challenges & Learnings


## Citations

