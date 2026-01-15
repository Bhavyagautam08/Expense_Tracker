# Expense Tracker Backend

This is the backend service for the Expense Tracker application. It provides APIs for managing expenses, budgets, recurring transactions, and user authentication.

## Features

- **Expense Management**: Add, view, and list expenses.
- **Analytics**: Get insights into expense data.
- **Background Jobs**: Scheduled tasks using `node-cron`.
- **Data Validation**: Middleware for request validation.
- **Database**: MongoDB integration via Mongoose.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **Mongoose**: MongoDB object modeling.
- **Dotenv**: Environment variable authentication.
- **Bcrypt**: Password hashing.
- **Node-cron**: Task scheduling.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── jobs/           # Scheduled jobs
├── middlewares/    # Custom middlewares
├── models/         # Mongoose models
├── routes/         # API routes
├── services/       # Business logic services
└── utils/          # Utility functions
```

## API Endpoints

### Expenses

- `POST /api/expenses/addExpense` - Add a new expense.
- `GET /api/expenses/getExpenses` - Retrieve a list of expenses.
- `GET /api/expenses/getAnalytics` - Get expense analytics.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhavyagautam08/Expense_Tracker.git
   ```

2. Install dependencies:
   ```bash
   cd Expense_Tracker_backend
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables (e.g., PORT, MONGODB_URI).

### Running the Server

Start the development server:
```bash
npm run dev
```

The server will start on the port specified in your `.env` file or default to 4000.
