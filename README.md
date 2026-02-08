# Technical Assignment - Next.js Role-Based Access Control

This is a minimal Next.js application built to demonstrate a simple user model, protected API routes, and role-based access control (RBAC).

## Features

- **User Model**: Simple user definition with `name` and `role` (Admin/User).
- **Authentication**: Cookie-based session management (`session_role`).
- **Middleware Protection**: Global middleware to protect `/dashboard` and `/api/secrets` routes.
- **Role-Based Access Control (RBAC)**:
  - **Dashboard**: Accessible by both authenticated Admins and Users.
  - **API Route (`/api/secrets`)**: Strictly protected. Only accessible by users with the `ADMIN` role.
- **Mock Data Layer**: Simple in-memory data store to simulate a database.

## Project Structure

- `app/Login`: Login page to set the session cookie (simulated login).
- `app/Dashboard`: Protected dashboard page that attempts to fetch data from the protected API.
- `app/api/secrets`: Protected API route that returns a secret only to Admins.
- `middleware.ts`: Intercepts requests to protected routes and enforces authentication.
- `lib/auth.ts`: Utilities for login (setting cookies) and logout.
- `lib/data.ts`: Mock data and data access simulation.

## Decisions & Trade-offs

1.  **Authentication**:
    - *Decision*: Used a simple HTTP-only cookie (`session_role`) to store the user's role directly.
    - *Reasoning*: For a "minimal" assignment, setting up a full JWT or database session flow would add unnecessary complexity. Storing the role in a signed cookie (or just a cookie in this trusted env) is sufficient to demonstrate the *logic* of access control without the boilerplate of a real auth provider (like NextAuth).

2.  **Data Layer**:
    - *Decision*: Used a static array in `lib/data.ts` with a simulated async delay.
    - *Reasoning*: Meets the requirement for a "minimal data layer" without needing a running PostgreSQL instance, making the project easier to run and review.

3.  **Middleware vs. API Checks**:
    - *Decision*: Implemented protection at *both* layers. Middleware handles *authentication* (is the user logged in?), while the API route handler handles *authorization* (does the user have the right permissions?).
    - *Reasoning*: This is a best practice. Middleware provides a broad safety net, but business logic/permissions should always be verified as close to the data as possible.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000).

4.  **Test the flow**:
    - Logic as **User**: Go to Dashboard -> Try to fetch secret -> Access Denied.
    - Logout.
    - Login as **Admin**: Go to Dashboard -> Try to fetch secret -> Success.