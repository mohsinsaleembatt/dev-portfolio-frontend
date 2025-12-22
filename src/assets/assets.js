import reactIcon from "./icons/react.svg";
import jsIcon from "./icons/javascript.svg";
import nodeIcon from "./icons/nodejs.svg";
import tailwindIcon from "./icons/tailwindcss.svg";
import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3.svg";
import expressIcon from "./icons/express-js.svg";
import gitIcon from "./icons/git.svg";
import githubIcon from "./icons/github.svg";
import bootstrapIcon from "./icons/bootstrap.svg";
import npmIcon from "./icons/npm.svg";
import mongoIcon from "./icons/mongodb.svg";
import postgresIcon from "./icons/postgresql.svg";



export const skills = [
  {
    name: "React",
    level: "Advanced",
    icon: reactIcon,
    experienceLevel: "Project-based / Self-directed",
    usageContext:
      "Built complete frontend interfaces including dashboards, forms, reusable components, animations, and state-driven UI.",
    confidence:
      "Comfortable with hooks, component composition, props/state flow, and integrating APIs. Continuously improving patterns and performance awareness.",
    codeSnippet: `<Component props={data} />`,
  },

  {
    name: "JavaScript",
    level: "Advanced",
    icon: jsIcon,
    experienceLevel: "Strong fundamentals with regular practice",
    usageContext:
      "Used extensively for frontend logic, backend APIs, async operations, form handling, validation, and data transformation.",
    confidence:
      "Strong understanding of core concepts (closures, promises, async/await, arrays/objects). Confident writing clean, readable logic.",
    codeSnippet: `async function fetchData() { await fetch(url); }`,
  },

  {
    name: "Node.js",
    level: "Intermediate",
    icon: nodeIcon,
    experienceLevel: "Project-based backend development",
    usageContext:
      "Built REST APIs, handled routing, middleware, request validation, and integrated databases and email services.",
    confidence:
      "Comfortable building and structuring small-to-medium backend services. Still deepening knowledge of scalability and performance.",
    codeSnippet: `app.post("/api", handler);`,
  },

  {
    name: "Express.js",
    level: "Intermediate",
    icon: expressIcon,
    experienceLevel: "Hands-on API development",
    usageContext:
      "Used Express for routing, controllers, middleware, error handling, and REST API design.",
    confidence:
      "Confident with basic to intermediate Express patterns. Focused on writing clean and maintainable server logic.",
    codeSnippet: `router.post("/contact", controller);`,
  },

  {
    name: "HTML",
    level: "Advanced",
    icon: htmlIcon,
    experienceLevel: "Foundational web development skill",
    usageContext:
      "Structured semantic layouts for web pages, forms, and components with accessibility and SEO awareness.",
    confidence:
      "Very comfortable with semantic HTML and structuring content correctly for modern web applications.",
    codeSnippet: `<section><h1>Title</h1></section>`,
  },

  {
    name: "CSS",
    level: "Advanced",
    icon: cssIcon,
    experienceLevel: "Hands-on styling and layout work",
    usageContext:
      "Styled responsive layouts, handled spacing, typography, positioning, and basic animations.",
    confidence:
      "Strong grasp of layout concepts (flexbox, grid). Comfortable debugging layout issues and styling components.",
    codeSnippet: `.container { display: flex; }`,
  },

  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: tailwindIcon,
    experienceLevel: "Primary styling tool",
    usageContext:
      "Used Tailwind extensively to build responsive, consistent UIs quickly with utility-first styling.",
    confidence:
      "Highly comfortable composing complex layouts and maintaining design consistency using Tailwind utilities.",
    codeSnippet: `<div className="flex gap-4 p-4">`,
  },

  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: bootstrapIcon,
    experienceLevel: "Project-based usage",
    usageContext:
      "Used Bootstrap components and grid system for faster prototyping and layout structuring.",
    confidence:
      "Comfortable using Bootstrap classes and components, though prefer utility-first approaches for flexibility.",
    codeSnippet: `<div class="row"><div class="col">`,
  },

  {
    name: "Git",
    level: "Intermediate",
    icon: gitIcon,
    experienceLevel: "Daily development workflow",
    usageContext:
      "Used Git for version control, branching, commits, and managing code history during development.",
    confidence:
      "Comfortable with common Git commands and workflows. Still learning advanced branching strategies.",
    codeSnippet: `git commit -m "Update feature"`,
  },

  {
    name: "GitHub",
    level: "Intermediate",
    icon: githubIcon,
    experienceLevel: "Project hosting & collaboration",
    usageContext:
      "Hosted repositories, managed commits, README documentation, and basic collaboration workflows.",
    confidence:
      "Comfortable using GitHub for project management and sharing work publicly.",
    codeSnippet: `git push origin main`,
  },

  {
    name: "npm",
    level: "Intermediate",
    icon: npmIcon,
    experienceLevel: "Dependency management",
    usageContext:
      "Used npm to install, manage, and update project dependencies for frontend and backend projects.",
    confidence:
      "Comfortable managing packages and scripts, still learning deeper ecosystem tooling.",
    codeSnippet: `npm install package-name`,
  },

  {
    name: "MongoDB",
    level: "Intermediate",
    icon: mongoIcon,
    experienceLevel: "Project-based database usage",
    usageContext:
      "Used MongoDB for storing contact forms, application data, and learning schema design with Mongoose.",
    confidence:
      "Comfortable performing CRUD operations and designing simple schemas. Still learning optimization strategies.",
    codeSnippet: `Model.find({})`,
  },

  {
    name: "PostgreSQL",
    level: "Beginner",
    icon: postgresIcon,
    experienceLevel: "Learning & experimentation",
    usageContext:
      "Explored relational database concepts, basic queries, and schema relationships.",
    confidence:
      "Understands fundamentals and actively learning how to model data and write efficient queries.",
    codeSnippet: `SELECT * FROM table;`,
  },
];


