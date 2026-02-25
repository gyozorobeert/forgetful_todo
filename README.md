# 📝 Forgetful Todo
### A Vite + React Exploration of State and Side Effects

Welcome to the **Forgetful Todo** app. It’s fast, it’s sleek, and it has the memory of a goldfish. This project was built to master the fundamentals of React's `useState` and `useEffect` hooks without the distractions of persistent storage or external databases.

---

## 🚀 Tech Stack

* **Framework:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast HMR)
* **Styling:** TailwindCSS
* **State Management:** Pure React Hooks (`useState`, `useEffect`)

---

## ✨ Features

* **Add Tasks:** Capture your thoughts before they vanish.
* **Toggle Completion:** Mark tasks as done with a satisfying click.
* **Delete Tasks:** Remove the evidence of things you'll never do.
* **Ephemeral State:** Perfect for those who want a fresh start every time they hit **Refresh**.

---

## 🧠 Hook Logic

This app focuses on the core "React Way" of managing data:

### `useState()`
The heart of the application. It manages the array of todo objects. Every time you add, toggle, or delete a task, React re-renders the UI to reflect the current state.

### `useEffect()`
While we aren't saving to a database, `useEffect` is used here to monitor state changes. For example, it can be used to update the document title with the number of pending tasks or to log state changes for debugging purposes.

---

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gyozorobeert/forgetful_todo.git](https://github.com/gyozorobeert/forgetful_todo.git)
    ```

2.  **Navigate to the folder:**
    ```bash
    cd forgetful_todo
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```text
src/
├── components/     # UI Building blocks (TodoItem, TodoList)
├── App.tsx         # Main logic & hook implementation
├── main.tsx        # Entry point
└── index.css         # Styling
