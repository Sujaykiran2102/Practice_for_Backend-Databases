# Practice_for_Backend-Databases



**🎯 Task 1: Setting Up the Project (Understanding Why It's Needed)**
📖 Why Is This Important?
Before starting any project, developers need to organize their workspace. This makes it easier to manage code, collaborate with teammates, and keep everything structured. Think of this like setting up a library catalog before adding books—it keeps everything in order.
📌 Task Description
Choose a programming language (they decide on JavaScript) and a backend framework (they pick Node.js with Express).
Organize the project files so that different components (like books, users, and borrowed books) are in separate places.
Set up a system where the server can run continuously without restarting every time they make a change.
✅ Expected Outcome: A well-organized project with a basic server running successfully.

**🎯 Task 2: Connecting to a Database (Why Data Storage Matters)**
📖 Why Is This Important?
A library system needs a place to store book details, so students can search for books and borrow them. Instead of using physical notebooks, they need a database that stores and retrieves book data quickly and efficiently.
📌 Task Description
Choose a database (they decide on MongoDB, a flexible NoSQL database).
Securely connect the backend server to the database, just like how a librarian connects the library catalog to the book inventory.
Ensure the connection is secure so that sensitive data (like user details) is not exposed.
✅ Expected Outcome: The backend can successfully communicate with the database to store and retrieve book data.

**🎯 Task 3: Creating a Book Schema (How to Organize Book Data)**
📖 Why Is This Important?
In a real library, each book has an organized structure (title, author, category, and availability status). Similarly, the backend needs a structured format (schema) to store book information efficiently.
📌 Task Description
Define a Book Schema that includes details like:
Book title
Author name
Genre
Availability status (borrowed or available)
Ensure that every book added follows this format so that no book details are missing.
✅ Expected Outcome: Every book stored in the system follows a proper structure, making it easy to search, update, and delete records.

**🎯 Task 4: Building API Endpoints for Books (How Users Will Interact)**
📖 Why Is This Important?
A library system needs a way for users to interact with it. Instead of physically searching for books, users should be able to:
Add a new book to the system.
View available books.
Update book information.
Delete books that are no longer in the library.
This is where APIs (Application Programming Interfaces) come in—they act like a bridge between users and the database.
📌 Task Description
Build different routes (APIs) to allow students and librarians to:
Add new books to the library.
Retrieve all available books.
Update book information.
Delete books that are no longer needed.
✅ Expected Outcome: The system has a functional API where users can interact with book data.

**🎯 Task 5: Adding Users and Borrowing System (Making It Realistic)**
📖 Why Is This Important?
A library isn't just about books—it also has users who borrow them. The backend needs to:
Store user details (name, student ID, contact information).
Allow users to borrow books and update availability status.
Prevent books from being borrowed by multiple users at the same time.
📌 Task Description
Create a User Schema to store student details.
Build an API route where users can borrow books (this updates the book’s availability).
Ensure a book cannot be borrowed if it's already checked out.
✅ Expected Outcome: The backend now supports book borrowing and user management.

**🎯 Task 6: Testing & Deployment (Making It Live)**
📖 Why Is This Important?
A library system is only useful if it works properly and is accessible online. Before releasing it, the backend needs to be:
Tested to ensure all functions work correctly.
Deployed so that students can access it from anywhere.
📌 Task Description
Use Postman to test each API endpoint and confirm they work as expected.
Deploy the backend on a cloud server (like Render or Railway).
Share the backend API link so the frontend team can use it.
✅ Expected Outcome: The backend is fully functional and live on the internet.

## Backend API (Deployed)
Base URL: `https://library-backend.onrender.com`
### Available Endpoints:
- **Get all books:** `GET /api/books`
- **Add a book:** `POST /api/books`
- **Borrow a book:** `POST /api/users/:userId/borrow/:bookId`

# Commands for initializing everything :
1. git clone <git hub link> (in terminal)
2. create 2 folders backend and frontend inside the created folder.
2. cd <given folder name> (in terminal)
4. cd <backend> (in terminal)
5. npm init -y (in terminal)
6. npm install express dotenv mongoose (in terminal)
7. npm install --save-dev nodemon (in terminal)
8. echo node_modules >.gitignore (in terminal) (creates a folder "gitignore and adds node_modules in it)
9. echo .env >>.gitignore (in terminal) (inserts .env into the .gitignore for security purpose)
****

10. inside package.json file , inside "scripts", add these two lines :
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
11. create a folder called src
12. Add three folders called controllers, models, routes and a file called "server.js"
13. Create a Mongodb connection and add it's url inside it. Also add PORT value of 3000.
14. Inside models create two files called Book.js and User.js
15. Inside routes create two files called bookRoutes.js and userRoutes.js
16. Type your code in appropriate files
****

17. npm run dev (in terminal)
18. git add . (in terminal)
19. git commit -m "completed" (in terminal)
20. git push -u origin main (in terminal)
****

21. Test it in postman to see if it works or not.
22. Deploy this is Render.com
23. Paste the Render url in Readme (or) else where.