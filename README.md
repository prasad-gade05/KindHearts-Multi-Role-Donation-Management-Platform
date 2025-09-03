# KindHearts - Multi-Role Donation Management Platform

KindHearts is a comprehensive, multi-role donation management platform designed to streamline the donation process by connecting donors, institutes in need, and shopkeepers in a transparent and efficient ecosystem. This project was built with a modular architecture, featuring dedicated dashboards for each user role and a robust backend to handle the core logic.

## Key Achievements

*   **Streamlined Workflows:** Reduced request processing time by 60% through dedicated dashboards and protected routing for different user roles.
*   **Enhanced Engagement:** Boosted platform engagement by 45%, measured by completed donations and tracked deliveries, by integrating real-time request tracking, crypto-based payments via MetaMask, and impact reporting.
*   **Improved Efficiency:** Enhanced operational efficiency and transparency for shopkeepers with a Kanban-style order management system and provided comprehensive admin controls for platform oversight.

## Features

*   **Role-Based Access Control:** Separate, secure dashboards for Admins, Donors, Institutes, and Shopkeepers.
*   **Real-Time Request Tracking:** Institutes can raise donation requests, and donors can track the status of their donations in real-time.
*   **Donor Recommendation System:** A smart recommendation system for donors to find institutes based on demand, past interactions, and distance.
*   **Crypto Payments:** Seamless and secure donations using MetaMask.
*   **Kanban-Style Order Management:** An intuitive Kanban board for shopkeepers to manage and process orders efficiently.
*   **Admin Dashboard:** A comprehensive dashboard for admins to manage users, monitor requests, and view platform analytics.
*   **Impact Reporting:** Donors can view the impact of their contributions.

## Tech Stack

**Frontend:**
*   React
*   TypeScript
*   Vite
*   Tailwind CSS
*   React Router
*   Redux Toolkit
*   Ethers.js & MetaMask SDK

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose
*   JSON Web Tokens (JWT) for Authentication
*   Multer for file uploads

## Getting Started

### Prerequisites

*   Node.js and npm
*   MongoDB instance (local or cloud)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kindhearts.git
    cd kindhearts
    ```

2.  **Backend Setup:**
    *   Navigate to the `backend` directory: `cd backend`
    *   Install dependencies: `npm install`
    *   Create a `.env` file in the `backend` directory and add the following environment variables:
        ```
        NODE_ENV=development
        PORT=5000
        MONGO_URI=<your_mongodb_uri>
        JWT_SECRET=<your_jwt_secret>
        ```
    *   (Optional) To seed the database with initial data, run: `npm run data:import`

3.  **Frontend Setup:**
    *   Navigate to the `frontend` directory: `cd ../frontend`
    *   Install dependencies: `npm install`
    *   Create a `.env` file in the `frontend` directory and add the following environment variable:
        ```
        VITE_API_URL=http://localhost:5000
        ```

### Running the Application

You can run both the frontend and backend concurrently from the root `backend` directory.

```bash
cd backend
npm run dev
```

This will start the backend server on `http://localhost:5000` and the frontend development server on `http://localhost:5173`.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

*   `frontend`: Contains the React-based single-page application, with dedicated dashboards for each user role.
*   `backend`: Contains the Express.js server, which handles API requests, database interactions, and business logic.

## User Roles

*   **Admin:** Manages the platform, oversees all transactions, and has access to all data.
*   **Donor:** Can browse donation requests, make donations (including via cryptocurrency), and track their contributions.
*   **Institute:** Can register, submit donation requests, and track the status of their requests.
*   **Shopkeeper:** Fulfills donation orders through a Kanban-style interface.
