# 📋 Simple Task Manager - Workspace Edition

A highly polished, Notion-inspired Task Manager built for **Assignment 1**. This application allows users to manage daily tasks within a calm, structured dashboard featuring live statistics and a fully responsive layout.

---

## 🚀 Features

- **Dynamic Task Composition**: Add tasks via the input field by clicking the "Add Task" button or pressing the `Enter` key.
- **Task Management**:
    - **Complete Tasks**: Mark tasks as finished with a visual strikethrough effect.
    - **Delete Tasks**: Instantly remove tasks from your queue.
- **Real-time Statistics**: A sidebar dashboard that tracks:
    - **Total Tasks**: How many items are currently in your list.
    - **Done Count**: How many tasks you have successfully completed.
- **Empty State UI**: A smart placeholder message that appears when the list is empty to maintain a clean workspace.

## 🛠️ Technical Implementation

### **Frontend Structure (HTML5)**
- Used semantic tags (`<aside>`, `<main>`, `<section>`) for better SEO and accessibility.
- Implemented `<ul>` and `<li>` for the task list as per technical requirements.

### **Styling & UI (CSS3)**
- **Glassmorphism**: Used `backdrop-filter: blur()` and semi-transparent backgrounds for a modern look.
- **Flexbox & Grid**: Utilized CSS Grid for the main workspace layout and Flexbox for task item alignment.
- **Responsiveness**: Fully optimized for mobile, tablet, and desktop screens using Media Queries.
- **Strikethrough Effect**: Implemented using a `.completed` class to satisfy functional requirements.

### **Logic (JavaScript)**
- **DOM Manipulation**: Creating elements dynamically using `createElement` and updating the DOM with `appendChild` and `remove`.
- **Event Handling**: Listens for `click` events on buttons and `keypress` events for the `Enter` key.
- **State Management**: Variables track the count of tasks to update the sidebar UI in real-time.

---

## 📋 Assignment Requirements Checklist

- [x] **Add Task**: Functional via button and Enter key.
- [x] **View Tasks**: Displayed in a structured list.
- [x] **Complete Task**: Toggleable strikethrough effect.
- [x] **Delete Task**: Tasks can be removed from the list.
- [x] **Clean Layout**: Professional, Notion-like UI spacing.
- [x] **DOM Manipulation**: Implemented in `script.js`.
- [x] **Event Handling**: Implemented for all user actions.

---

## 💻 How to Run
1. Clone this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Enjoy a calmer way to manage your work!

---

## 📁 Deliverables
- **Source Code**: Included in this repository.
- **GitHub Repository**: https://github.com/Henry4501/TaskManager
- **Documentation**: Provided in this README.md.

**Developed as part of Assignment 1 - Simple Task Manager.**
