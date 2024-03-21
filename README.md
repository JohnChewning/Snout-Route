# Snout Route - Travel Companion for Pet Owners

Snout Route is a comprehensive community driven travel companion app designed for pet owners who wish to explore the world with their furry friends. This innovative platform offers a wide range of features to make traveling with pets seamless and enjoyable. From finding pet-friendly accommodations to discovering exciting destinations, Snout-Route ensures that your travel experiences are memorable and hassle-free.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Initializing Application](#initialize-application)
- [Getting Started](#getting-started)
- [Collaborators](#collaborators)
- [Contribution](#contribution)
- [License](#license)

## Features

- **Accommodation Search**: Easily locate pet-friendly hotels, motels, vacation rentals, and campgrounds tailored to your needs.
- **Review and Rating System**: Share and read reviews of pet-friendly accommodations to make informed decisions.
- **Pet-Friendly Destinations**: Discover parks, beaches, trails, and dining areas where your pets are warmly welcomed.
- **Travel Tips and Resources**: Access invaluable advice on pet travel, including airlines, car rentals, and international travel regulations.
- **Emergency Services**: Quickly find nearby vet clinics and emergency pet services to keep your pets safe while on the road.
- **User Community**: Connect with fellow pet owners to share experiences, advice, and arrange meetups.
- **Navigation Integration**: Seamlessly integrate with popular navigation tools to find the best routes and stops for your pet-friendly travels.
- **Personalized Trip Planning**: Plan your entire trip, including stays, attractions, and dining, in a single, user-friendly interface.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize ORM
- Express-session and cookies for authentication
- dotenv for environment variable management
- Deployed on Heroku
- Nodemon

## Installation Instructions

1.  Before starting the application, be sure to install all dependencies needed, which are listed under [Technologies Used](#technologies-used).
    Run:

            npm i

2.  Create your dotenv file. In your preferred text editor, create a new file named '.env'. The file must be in the same format as the below with your own username and password included.

        DB_NAME='snout_route_db'
        DB_USER=''
        DB_PASSWORD=''
        API_KEY=AIzaSyB-XiaRLsDxx2m_nfqQxoq4FNxhv7ggH44

3.  Next, log into MySQL and run the schema.sql file and then exit:

        source db/schema.sql;
        Exit

This setup ensures your application can interact with a MySQL database for development, testing, and production environments.

## Initialize Application

Initialize the application in the terminal of the server.js file by running the command:

        npm start

## Getting Started

Once the application has been initialized in the terminal you may now use Snout Route. To use Snout Route, follow these steps:

1. Visit [Snout-Route](https://snout-route-60664b49cc33.herokuapp.com/) to access the app.
2. Create an account or log in.
3. Start planning your pet-friendly adventure!

## Collaborators

- Toshie Araki
- Johnathan Chewning
- Devin Everitt
- Hunter Hurst
- Garrett Sullivan

## Contribution

Interested in contributing to Snout-Route? Please read our contributing guidelines and submit a pull request or open an issue to discuss your ideas.

## License

Snout-Route is open source under the [MIT License](LICENSE).

Thank you for choosing Snout-Route for your pet-friendly travel needs!
