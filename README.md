# Expense Tracker

A full-featured web application to manage your income and expenses easily!  
Track, visualize, and export your financial data — all through a responsive and intuitive interface.

## ✨ Features

- **User Authentication**: Secure login and sign-up functionality with JWT authentication.
- **Dashboard Overview**: View Total Balance, Total Income, and Total Expenses in a simple, clean summary.
- **Income Management**: Add, view, delete, and export your income sources.
- **Expense Management**: Add, view, delete, and export your expenses, categorized for easy tracking.
- **Interactive Charts**: Visualize your financial data with Bar, Pie, and Line charts.
- **Recent Transactions**: Quickly access the most recent income and expense entries.
- **Reports**: Download comprehensive Income and Expense reports in Excel format.
- **Mobile Responsive**: Seamless experience across desktops, tablets, and mobile devices.
- **Intuitive Navigation**: Sidebar menu for easy access to Dashboard, Income, Expenses, and Logout options.
- **Easy Delete Functionality**: Hover over income/expense cards to reveal a delete button for quick removal.

## 🖥️ Screenshots

## 1) Login page
   ![Screenshot 2025-04-28 223607](https://github.com/user-attachments/assets/6187d231-3155-469f-b9f2-4ef39eee6d66)
   
## 2) SignUp page
   ![image](https://github.com/user-attachments/assets/95020e0c-7d79-4583-9567-72cad01d3fb9)
 
## 3) Dasboard page
   ![image](https://github.com/user-attachments/assets/219a2517-7934-41bd-8046-16329939deb8)

## 4) Income page
   ![Screenshot 2025-04-28 224347](https://github.com/user-attachments/assets/9fe836e3-1c7f-42d2-a415-57bf29c4c9f3)

## 5) Expense page
   ![image](https://github.com/user-attachments/assets/c6048fc2-c32b-4464-836c-ac16f3be826e)



## 🚀 Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Charts**: Chart.js / Recharts
- **Excel Export**: SheetJS / XLSX

## 📦 Installation

1. Clone the repository:

```bash
https://github.com/AbhaijeetSingh11/Expense-Tracker.git
```

2. Navigate to the project directory:

```bash
//open terminal one for frontend
cd frontend/expense-tracker
npm run dev
//open terminal two for backend
cd backend
npm run dev
```

3. Install dependencies:

```bash
npm install
```

4. Set up your environment variables:

Create a `.env` file and add:

```bash
PORT=5000
MONGO_URI=your_mongo_database_connection_string
JWT_SECRET=your_secret_key
```

5. Run the server:

```bash
npm run dev
```

6. Open your browser and visit:

```
http://localhost:5000
```

## 📑 Project Structure

```
/fronend/expense-tracker    --> Frontend code
/backend    --> Backend code
.env       --> Environment variables
README.md  --> Project documentation
```

## ⚡ Future Improvements

- Add recurring transactions support
- Add notifications/reminders for upcoming expenses
- Implement dark mode
- Add multi-currency support

## 🙌 Acknowledgements

Thanks to the open-source community and libraries that made this project possible!

## 📫 Contact

If you have any questions, feedback, or suggestions, feel free to reach out:

- **Email**: abhaijeet11@gmail.com
- **LinkedIn**: www.linkedin.com/in/abhaijeet-singh-003030287
