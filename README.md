# To-Do List Application

## 1. Application and Functionality

This is a To-Do List application built using React.js. The application allows users to:

- **Add new tasks** with a text description and a priority (low, medium, high).
- **Mark tasks as completed** or **incomplete** by clicking on them.
- **Delete tasks** from the list.
- **Filter tasks** based on their completion status (Completed, Incompleted, or All).
- **Sort tasks** based on priority (Low, Medium, High), or by their completion status (Completed, Incompleted).
- **Search tasks** based on the task description.
- All tasks are saved in **localStorage**, so the data persists even after refreshing the page.

## 2. Live Demo

You can view the live demo of the To-Do List application here:  
[Live Demo](https://your-live-site-link.com)

## 3. Project Structure

- `src/` - Contains all source code files.
- `src/App.js` - The main component that controls the task list.
- `src/App.css` - The styling for the application.
- `src/assets/` - Contains images for checked/unchecked states.
- `public/` - Public folder containing the index.html file.

## 4. Assumptions Made During Development

- **No backend server**: All data is stored in the browser's localStorage, so tasks will persist only on the current device/browser.
- **Simple UI**: The user interface is kept simple for clarity and functionality. It focuses mainly on the core features.
- **Priority options**: Tasks are categorized with three priority levels: Low, Medium, and High. However, no detailed validation for these categories is provided.
- **Task description**: There are no restrictions on the task description. It can be a simple text string.

## 5. Screenshots

Here are a couple of screenshots showing the functionality of the application:

**1. Main page showing tasks with priority labels:**

![Main Page](/src/assets/screen%201.png)
 
## Clone the repository to your local machine

```bash
   git clone https://github.com/KMTonmoy/Task-Master.git
   cd Task-Master
   npm install
   npm run dev




[GitHub Repository Link](https://github.com/KMTonmoy/Task-Master)

Feel free to fork the repository, open issues, and contribute to the project!
