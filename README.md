# Snout-Route - Travel Companion for Pet Owners

Snout-Route is a comprehensive community driven travel companion app designed for pet owners who wish to explore the world with their furry friends. This innovative platform offers a wide range of features to make traveling with pets seamless and enjoyable. From finding pet-friendly accommodations to discovering exciting destinations, Snout-Route ensures that your travel experiences are memorable and hassle-free.

## Features

- **Accommodation Search**: Easily locate pet-friendly hotels, motels, vacation rentals, and campgrounds tailored to your needs.
- **Pet-Friendly Destinations**: Discover parks, beaches, and trails, where your pets are warmly welcomed.
- **Personalized Trip Planning**: Plan your entire trip, including attractions and parks, in a single, user-friendly interface.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize ORM
- Express-session and cookies for authentication
- dotenv for environment variable management
- Deployed on Heroku

## Database Setup

To configure the database for Snout-Route, follow these steps:

1. **Install Sequelize and MySQL2**: Run `npm install sequelize mysql2`.
2. **Initialize Sequelize**: Execute `npx sequelize-cli init` to generate the necessary folders and config files.
3. **Configure Database Credentials**: Modify `config/config.js` to use environment variables for database credentials.
4. **Create the Database**: Use MySQL commands or a graphical interface to create your initial database(s).
5. **Run Migrations**: Execute `npx sequelize-cli db:migrate` to create your database schema.
6. **Seed the Database** (Optional): Run `npx sequelize-cli db:seed:all` to populate your database with initial data.
7. **Test the Connection**: Ensure your database connection is correctly configured by running a test script.

This setup ensures your application can interact with a MySQL database for development, testing, and production environments.


## Getting Started

To use Snout-Route, follow these steps:

1. Visit [Snout-Route](#) to access the app.
2. Create an account or log in.
3. Start planning your pet-friendly adventure!

## Collaborators

- Toshie Araki
- Johnathan Chewning
- Devin Everitt
- Hunter Hurst
- Garrett Sullivan

## Future Development 
- **Review and Rating System**: Share and read reviews of pet-friendly accommodations to make informed decisions.
- **Travel Tips and Resources**: Access invaluable advice on pet travel, including airlines, car rentals, and international travel regulations.
- **Navigation Integration**: Seamlessly integrate with popular navigation tools to find the best routes and stops for your pet-friendly travels.
- **User Community**: Connect with fellow pet owners to share experiences, advice, and arrange meetups.
- **Emergency Services**: Quickly find nearby vet clinics and emergency pet services to keep your pets safe while on the road.

## Contribution

Interested in contributing to Snout-Route? Please read our contributing guidelines and submit a pull request or open an issue to discuss your ideas.

## License

Snout-Route is open source under the [MIT License](LICENSE).

Thank you for choosing Snout-Route for your pet-friendly travel needs!
