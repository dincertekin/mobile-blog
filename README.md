# dtBlog

**dtBlog** is a blog application built using **React Native** for the client-side and **Express.js** with **MySQL** for the server-side. The UI design was sourced from a design on Figma, and the entire application was developed from scratch.

## Features

- **Blog Management:** Create, read, update, and delete blog posts.
- **Responsive Design:** Optimized for mobile devices.
- **Real-time Updates:** Posts and comments are updated in real-time.

## Screenshots

<img src="https://i.imgur.com/oWW9CUN.png" alt="Screenshot" width="400">
<img src="https://i.imgur.com/u00vNcM.png" alt="Screenshot" width="400">

## Technologies Used

### Client-Side:
- **React Native:** Framework for building native apps using React.
- **Node-Fetch:** HTTP client for API requests.

### Server-Side:
- **Express.js:** Fast and minimal Node.js web framework.
- **MySQL:** Relational database for storing user data and blog content.

## Installation

### Prerequisites

- **Node.js** and **npm/yarn** installed.
- **MySQL** database setup.

### Client-Side Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/dincertekin/dtBlog.git
   cd dtBlog/client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run start
   # or
   yarn start
   ```

### Server-Side Setup

1. Navigate to the server directory:

   ```bash
   cd dtBlog/server
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure the MySQL by editing `app.js` file in the `server` directory:

   ```js
   host: 'your_mysql_host'
   user: 'your_mysql_user'
   password: 'your_mysql_password'
   database: 'your_database_name'
   ```

4. Start the server:

   ```bash
   npm run start
   # or
   yarn start
   ```

## Usage

1. Open the app on your mobile device (or emulator).
2. Start creating, editing, and reading blog posts.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Figma** for the UI design inspiration.
- **Open-source libraries** and frameworks that made this project possible.
