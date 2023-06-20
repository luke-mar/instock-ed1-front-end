# Instock - Warehouse Management System

Instock is a web-based warehouse management system that allows users to create, manage, and track inventory within warehouses. It provides a user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations on warehouses and inventory items. The application is built using React, Sass, Node.js, Express, MySQL, and Knex.

## Features

- Warehouse Management: Create, update, and delete warehouses.
- Inventory Management: Add, update, and delete inventory items within warehouses.
- Search and Filter: Easily search and filter warehouses and inventory items based on various criteria.
- Dashboard: View a summary of warehouse and inventory statistics.
- Responsive Design: The application is responsive and optimized for various screen sizes and devices.

## Prerequisites

To run the Instock application on your local machine, make sure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)
- MySQL: [Download MySQL](https://www.mysql.com/downloads/)

## Getting Started

1. Clone the repository:

   ```
   git clone 
   ```

2. Navigate to the project directory:

   ```
   cd instock
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the database:

   - Create a new MySQL database.
   - Configure the database connection settings in the `config/database.js` file.

5. Run the database migrations:

   ```
   npm run migrate
   ```

6. Start the development server:

   ```
   npm start
   ```

7. Open your browser and visit `http://localhost:3000` to access the Instock application.

## Folder Structure

The folder structure of the Instock project is organized as follows:

- `client`: Contains the frontend code built using React and Sass.
- `server`: Contains the backend code built using Node.js, Express, MySQL, and Knex.
- `migrations`: Contains the database migration files.
- `config`: Contains the configuration files for the database and other settings.

## Contributors

Lucas Martinez
Armando Fernandez
Olivia Banks
Isaac Chammah
Natasha Anglade
Gennesis Baez

