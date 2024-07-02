# DevTools Network Monitor Clone

This project replicates the network monitoring functionalities of Google Chrome's DevTools. It lists all network requests made by a webpage, shows detailed information about each request, and allows filtering by request type (XHR, JS, CSS, etc.). The project uses ReactJS for the frontend and Node.js with Puppeteer for the backend.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Request Monitoring**: List all network requests made by the page.
2. **Request Details**: Show detailed information about each request (headers, payload, response, timing).
3. **Filtering**: Allow filtering of network requests by type (XHR, JS, CSS, etc.).

## Requirements

- Node.js
- npm (Node Package Manager)
- ReactJS

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/devtools-network-monitor.git
    cd devtools-network-monitor/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create an environment variable file `.env` (if needed) and add:
    ```env
    PORT=3001
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the React development server:
    ```sh
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the URL of the page you want to monitor in the input box and click "Start Monitoring".
3. View the list of network requests, filter them by type, and click on any request to see detailed information.

## Project Structure

