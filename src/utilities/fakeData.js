export const courseCurriculum = [

]

export const projectSyllabus = [
    {
        title: "Expense Tracker",
        thumbnail: "/images/expense-tracker.png",  // Replace with your actual image path
        overview: "A personal finance tracker to monitor income and expenses.",
        outcomes: [
            "React state with useState and useEffect",
            "Form handling and validation",
            "Conditional rendering",
            "Calculating totals (income, expense, balance)",
            "LocalStorage or backend integration"
        ],
        features: [
            "Add income/expenses",
            "Show transaction history",
            "Display total balance",
            "Delete a transaction"
        ],
        tools: ["React", "Tailwind CSS", "LocalStorage", "Express", "MongoDB"]
    },
    {
        title: "Quiz App",
        thumbnail: "/images/quiz-app.png",
        overview: "An interactive quiz game with multiple choice questions.",
        outcomes: [
            "Routing with React Router",
            "Component-driven architecture",
            "State and props usage",
            "Score calculation",
            "Conditional page rendering"
        ],
        features: [
            "Home, Quiz, Result pages",
            "One question at a time",
            "Final score display",
            "API integration (optional)"
        ],
        tools: ["React", "React Router", "Tailwind CSS"]
    },
    {
        title: "To-Do Application",
        thumbnail: "/images/todo-app.png",
        overview: "A classic CRUD app to manage daily tasks.",
        outcomes: [
            "Controlled form inputs",
            "CRUD functionality with state",
            "Filtering and searching tasks",
            "Persisting data"
        ],
        features: [
            "Add, edit, delete tasks",
            "Mark as completed",
            "Filter by status"
        ],
        tools: ["React", "Tailwind CSS", "LocalStorage", "Node.js (optional)"]
    },
    {
        title: "E-commerce App",
        thumbnail: "/images/ecommerce-app.png",
        overview: "A minimal e-commerce frontend with product listings and cart.",
        outcomes: [
            "Routing and dynamic pages",
            "Global state with Context or Redux",
            "Cart management logic",
            "Component reuse"
        ],
        features: [
            "Product list and detail pages",
            "Add to/remove from cart",
            "Cart page with total price",
            "Product filters (optional)"
        ],
        tools: [
            "React",
            "React Router",
            "Context API or Redux",
            "Tailwind CSS"
        ]
    },
    {
        title: "Employee Management App",
        thumbnail: "/images/employee-management.png",
        overview: "A CRUD app to manage employee records with backend integration.",
        outcomes: [
            "Full CRUD with backend API",
            "API calls with Axios or Fetch",
            "Error handling in forms",
            "UI tables and modals"
        ],
        features: [
            "Add/update/delete employee",
            "Employee list with search/filter",
            "Optional pagination"
        ],
        tools: ["React", "Axios", "Express.js", "MongoDB", "Tailwind CSS"]
    }
];
