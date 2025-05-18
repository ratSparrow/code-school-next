import expenseTracker from "../assets/images/projects/expense-tracker.png"
import ecommerce from "../assets/images/projects/ecommerce.png"
import employee from "../assets/images/projects/employee-management.png"
import quiz from "../assets/images/projects/quiz.png"
import todo from "../assets/images/projects/todo.png"
export const courseCurriculum = [
  {
    title: "Week 1",
    cardTitle: "Kick Off Your First Code",
    cardSubtitle: "HTML Essentials",
    cardDetailedText: "Learn how the web works and build structured pages using semantic HTML.",
  },
  {
    title: "Week 2",
    cardTitle: "Design Beautiful Interfaces",
    cardSubtitle: "CSS Basics",
    cardDetailedText: "Style your pages with CSS, explore layout systems like Flexbox and Grid.",
  },
  {
    title: "Week 3",
    cardTitle: "Create & Deploy Portfolio",
    cardSubtitle: "Portfolio Project",
    cardDetailedText: "Build and launch your own personal portfolio using HTML and CSS.",
  },
  {
    title: "Week 4",
    cardTitle: "Get Started with JavaScript",
    cardSubtitle: "Variables & Logic",
    cardDetailedText: "Master JavaScript fundamentals like variables, data types, and logic.",
  },
  {
    title: "Week 5",
    cardTitle: "Make Your Website Interactive",
    cardSubtitle: "DOM Manipulation",
    cardDetailedText: "Use JavaScript to interact with and manipulate webpage elements.",
  },
  {
    title: "Week 6",
    cardTitle: "Write Powerful Logic",
    cardSubtitle: "Functions & Events",
    cardDetailedText: "Learn functions, event handling, and how to respond to user actions.",
  },
  {
    title: "Week 7",
    cardTitle: "Work With Data",
    cardSubtitle: "Arrays & Objects",
    cardDetailedText: "Organize and process data using arrays, loops, and objects.",
  },
  {
    title: "Week 8",
    cardTitle: "Modern JavaScript",
    cardSubtitle: "ES6 & Storage",
    cardDetailedText: "Explore ES6 features, localStorage, and mini coding challenges.",
  },
  {
    title: "Week 9",
    cardTitle: "React Basics",
    cardSubtitle: "Components & JSX",
    cardDetailedText: "Set up React and create components using JSX syntax.",
  },
  {
    title: "Week 10",
    cardTitle: "Dynamic Components",
    cardSubtitle: "Props & State",
    cardDetailedText: "Manage data and user interaction with props and state.",
  },
  {
    title: "Week 11",
    cardTitle: "Multi-Page Apps",
    cardSubtitle: "React Router",
    cardDetailedText: "Implement navigation using React Router and organize app layout.",
  },
  {
    title: "Week 12",
    cardTitle: "React Hooks",
    cardSubtitle: "useState & useEffect",
    cardDetailedText: "Manage side effects and state updates using React hooks.",
  },
  {
    title: "Week 13",
    cardTitle: "Project: API Integration",
    cardSubtitle: "React + APIs",
    cardDetailedText: "Build a React project using external APIs and deploy it online.",
  },
  {
    title: "Week 14",
    cardTitle: "Project: Dynamic UI",
    cardSubtitle: "Advanced UI Build",
    cardDetailedText: "Create a visually polished and responsive user interface.",
  },
  {
    title: "Week 15",
    cardTitle: "State Management",
    cardSubtitle: "Redux Project",
    cardDetailedText: "Implement Redux to manage global state in a real app.",
  },
  {
    title: "Week 16",
    cardTitle: "Build an Online Store",
    cardSubtitle: "Ecommerce Project",
    cardDetailedText: "Create an ecommerce UI with cart, product listings, and filters.",
  },
  {
    title: "Week 17",
    cardTitle: "Server-Side JavaScript",
    cardSubtitle: "Node.js & Express",
    cardDetailedText: "Set up a backend using Node.js and create APIs with Express.",
  },
  {
    title: "Week 18",
    cardTitle: "Work with Databases",
    cardSubtitle: "REST API & MongoDB",
    cardDetailedText: "Learn REST principles and store data using MongoDB.",
  },
  {
    title: "Week 19",
    cardTitle: "Backend Operations",
    cardSubtitle: "CRUD with Mongo",
    cardDetailedText: "Build APIs that Create, Read, Update, and Delete data.",
  },
  {
    title: "Week 20",
    cardTitle: "Full-Stack Integration",
    cardSubtitle: "Connect Frontend & Backend",
    cardDetailedText: "Connect React to your API using Axios and manage data flow.",
  },
  {
    title: "Week 21",
    cardTitle: "Final Project Launch",
    cardSubtitle: "Capstone Project",
    cardDetailedText: "Build and deploy a full-stack project showcasing all your skills.",
  },
];



export const projectSyllabus = [
    {
        title: "Expense Tracker",
        thumbnail: expenseTracker,  // Replace with your actual image path
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
        thumbnail: quiz,
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
        thumbnail: todo,
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
        thumbnail: ecommerce,
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
        thumbnail: employee,
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
