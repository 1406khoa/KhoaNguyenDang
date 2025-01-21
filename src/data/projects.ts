export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  duration: string;
  role: string;
  institution: string;
  mentor: string;
  techCount: number;
  featureCount: number;
  technologies: string[];
  features: string[];
  images: {
    url: string;
    caption: string;
  }[];
  animations: {
    title: string;
    description: string;
    features: string[];
  }[];
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
  responsibilities: {
    title: string;
    items: string[];
  }[];

  learnings?: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    items: string[];
  }[];
}


import { Code2, Code, Gamepad2, Database, PieChart, Lightbulb, Activity, Users } from 'lucide-react';
import { ComponentType } from 'react';

import BinaryTreeImage from '../images/BinaryTree.png';
import SearchingTree from '../images/searching.webp';
import FunctionImage from '../images/functions.png';

import HumanBenchmarkImage from '../images/13.webp';
import DashboardImage from '../images/Dashboard.webp';
import HomePageImage from '../images/HomePage.webp';
import VisualMemoryImage from '../images/VisualMemory.webp';
import NumberMemoryImage from '../images/NumberMemory.webp';
import LoginPageImage from '../images/LoginPage.webp';
import TypingTestImage from '../images/TypingTest.webp';

export const projects: Project[] = [
  {
    id: 'binary-tree',
    title: "Binary Tree Management",
    description: "A web-based application designed to provide an interactive and visually engaging experience for students and educators in learning about binary trees.",
    image: BinaryTreeImage,
    demoUrl: "https://binarytreevisualization.onrender.com/",
    githubUrl: "https://github.com/1406khoa/BinaryTreeVisualization",
    duration: "15 weeks (18/09/2024 – 25/12/2024)",
    role: "Team Leader & Frontend Developer",
    institution: "Hoa Sen University, Faculty of Information Technology",
    mentor: "Phan Hồng Trung",
    techCount: 3,
    featureCount: 4,
    technologies: ["Blazor", "MatBlazor", "Visual Studio"],
    features: [
      "Real-time animations for node operations",
      "Multiple traversal visualizations (LNR, NLR, RNL)",
      "DFS and BFS algorithm animations",
      "AVL Tree rotation animations"
    ],
    images: [
      {
        url: BinaryTreeImage,
        caption: "Project Overview"
      },
      {
        url: SearchingTree,
        caption: "Shortest path search"
      },
      {
        url: FunctionImage,
        caption: "Key Fuctions"
      }
    ],
    animations: [
      {
        title: "AVL Tree Rotations",
        description: "Interactive visualization of Left and Right rotations in AVL trees",
        features: [
          "Smooth transition animations for node repositioning",
          "Color-coded nodes to highlight rotation pivot points",
          "Step-by-step visualization of balance factor changes",
          "Interactive speed control for rotation animations"
        ]
      },
      {
        title: "Tree Traversals",
        description: "Dynamic visualization of different tree traversal algorithms",
        features: [
          "In-order (LNR) traversal animation",
          "Pre-order (NLR) traversal animation",
          "Post-order (LRN) traversal animation",
          "Visual path tracking with node highlighting"
        ]
      }
    ],
    challenges: [
      {
        title: "Animation Synchronization",
        problem: "Synchronizing multiple animations while ensuring visual clarity",
        solution: "Utilized Blazor's rendering lifecycle and optimized state management to maintain animation fluidity"
      },
      {
        title: "DFS Animation Challenges",
        problem: "Creating animations that accurately represent the recursive exploration and backtracking process of DFS",
        solution: "Implemented recursive stack-based animation control, ensuring the controller 'discovers' nodes dynamically in the correct DFS order"
      },
      {
        title: "BFS Animation Handling",
        problem: "Managing queue-based animations to accurately simulate BFS traversal while keeping the flow visually smooth",
        solution: "Developed a queue-based animation system to handle real-time node exploration and state updates, ensuring smooth transitions between nodes"
      },
      {
        title: "Node Highlighting Issues",
        problem: "Controller animations caused visual glitches such as 'jerky' movements or failure to remain stationary on the target node",
        solution: "Refined animation timing and movement logic using interpolation techniques to ensure precise and smooth node transitions"
      },
      {
        title: "Tree Rotation Animation in AVL",
        problem: "Simulating the actual circular rotation of tree nodes during AVL balancing, ensuring the animation reflects the rotational behavior intuitively and fluidly",
        solution: "Spent significant time researching mathematical models and animation techniques to represent node rotation. Implemented a combination of trigonometric transformations and interpolations, allowing nodes to follow a smooth circular path while preserving tree structure and maintaining visual clarity during AVL balancing operations"
      }
    ],

    responsibilities: [
      {
        title: "Animation Development",
        items: [
          "Designed and implemented dynamic animations for tree operations",
          "Created smooth transitions for traversal techniques",
          "Developed visual feedback for search algorithms"
        ]
      },
      {
        title: "Algorithm Implementation",
        items: [
          "Developed core functions for Binary Trees and BST",
          "Built traversal algorithms with synchronized animations",
          "Implemented DFS and BFS with visual feedback"
        ]
      }
    ],
    learnings: [
      {
        icon: Code2,
        title: "Technical Skills",
        items: [
          "Understand how Blazor Framework works",
          "Deep understanding of tree algorithms",
          "Animation and state management"
        ]
      },
      {
        icon: Users,
        title: "Leadership Skills",
        items: [
          "Team coordination",
          "Project planning",
          "Timeline management"
        ]
      },
      {
        icon: Lightbulb,
        title: "Problem Solving",
        items: [
          "Complex animation synchronization",
          "Performance optimization",
          "User experience design"
        ]
      }
    ]
  },
  {
    id: 'humanbenchmark-clones',
    title: "Human Benchmark",
    description: "A cognitive testing application built with React that helps users measure and improve their cognitive abilities through various interactive games and challenges.",
    image: HumanBenchmarkImage,
    demoUrl: "https://humanbenchmark-clone-three.vercel.app/",
    githubUrl: "https://github.com/1406khoa/Humanbenchmark-Clone",
    duration: "5 weeks (14/10/2024 – 20/11/2024)",
    role: "Front End Developer",
    institution: "Personal Project",
    mentor: "Self-Guided",
    techCount: 8,
    featureCount: 11,
    "technologies": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Context",
      "Recharts",
      "React Router",
      "Lucide React",
      "Supabase"
    ],
    "features": [
      "Reaction Time Test",
      "Visual Memory Test",
      "Number Memory Test",
      "Word Memory Test",
      "Typing Speed Test",
      "Chimp Test",
      "Account creation and authentication",
      "Score tracking and history",
      "Personal best records",
      "Cross-device progress syncing",
      "Responsive design"
    ],
    images: [
      {
        url: HomePageImage,
        caption: "Web Overview"
      },
      {
        url: VisualMemoryImage,
        caption: "Visual Memory Test"
      },
      {
        url: DashboardImage,
        caption: "Dashboard"
      },
      {
        url: NumberMemoryImage,
        caption: "Number Memory Test"
      },
      {
        url: LoginPageImage,
        caption: "Login Page"
      },
      {
        url: TypingTestImage,
        caption: "Typing Test"
      }
    ],
    "animations": [
      {
        "title": "Flip Animations in Visual Memory",
        "description": "Simple flip animations to enhance interaction in the Visual Memory game.",
        "features": [
          "Flip-in animation for revealing the correct squares during the setup phase.",
          "Flip-out animation for hiding incorrect squares after user selection."
        ]
      },
      {
        "title": "Typing Feedback Effects",
        "description": "Real-time animations to synchronize user input with visual feedback in Typing Speed Test.",
        "features": [
          "Typewriter-style animations for each character typed.",
          "Dynamic color changes for correct (green) and incorrect (red) inputs.",
          "Interactive virtual keyboard that highlights keys pressed by the user."
        ]
      },
      {
        "title": "Static Performance Analytics in Dashboard",
        "description": "Static visualizations to help users understand their reaction speed compared to predefined performance categories.",
        "features": [
          "A bell curve chart to represent overall reaction speed distribution.",
          "Clear performance categories displayed below the chart for easy comparison.",
          "Dynamic highlighting of the user’s performance category for personalized feedback."
        ]
      }
    ],

    "challenges": [
      {
        "title": "Real-time Feedback",
        "problem": "Providing users with immediate and accurate feedback during gameplay.",
        "solution": "Optimized state management and real-time updates using React Context to ensure smooth and responsive interactions."
      },
      {
        "title": "Secure Authentication",
        "problem": "Ensuring user data security and isolation in a shared database.",
        "solution": "Implemented Supabase with Row Level Security (RLS) and protected API endpoints to secure sensitive user data and prevent unauthorized access."
      },
      {
        "title": "Cross-Browser Compatibility",
        "problem": "Ensuring consistent gameplay experience across different browsers and devices.",
        "solution": "Tested and fixed rendering issues using browser-specific CSS adjustments and polyfills, ensuring the app worked flawlessly on both modern and older browsers."
      },
      {
        "title": "Responsive Design",
        "problem": "Creating a UI that works seamlessly across desktop, tablet, and mobile devices.",
        "solution": "Used Tailwind CSS for responsive layouts and thoroughly tested on various screen sizes to ensure a consistent and user-friendly experience."
      },
      {
        "title": "Performance Optimization with Lazy Loading",
        "problem": "Initial performance was low when tested on Lighthouse due to heavy assets being loaded all at once.",
        "solution": "Implemented lazy loading for images and game components, significantly improving the app's performance score and reducing initial load times."
      }
    ],

    "responsibilities": [
      {
        "title": "Frontend Development",
        "items": [
          "Designed and implemented responsive UI components with Tailwind CSS",
          "Integrated game algorithms and animations",
          "Developed charts for performance analytics using Recharts"
        ]
      },
      {
        "title": "Backend Integration",
        "items": [
          "Set up Supabase for authentication and data storage",
          "Configured secure API endpoints",
          "Integrated real-time database features"
        ]
      }
    ],

    learnings: [
      {
        icon: Code,
        title: "React and TypeScript Skills",
        items: [
          "Gained practical experience in building reusable components with React.",
          "Applied TypeScript to improve type safety and maintainability of the codebase.",
          "Integrated game logic into the UI with a focus on clarity and functionality."
        ]
      },
      {
        icon: Gamepad2,
        title: "Game Development Insights",
        items: [
          "Learned how to design and implement mechanics for cognitive games like reaction time and memory tests.",
          "Developed systems to gradually adjust game difficulty for a better user experience.",
          "Built a basic scoring and tracking system to monitor player performance."
        ]
      },
      {
        icon: Database,
        title: "Real-Time Data Management",
        items: [
          "Used Supabase for authentication and syncing user progress across devices.",
          "Implemented real-time updates to enhance user interactions during gameplay.",
          "Designed a simple database schema to store game scores and user history effectively."
        ]
      },
      {
        icon: PieChart,
        "title": "Data Visualization",
        "items": [
          "Learned to create static visualizations for displaying performance data in a clear and user-friendly way.",
          "Designed a bell curve chart to represent reaction speed categories for better comparison.",
          "Added dynamic highlighting to performance categories, helping users understand their standing more intuitively."
        ]
      },

      {
        icon: Lightbulb,
        title: "Problem-Solving Skills",
        items: [
          "Worked on optimizing performance for data-heavy components and animations.",
          "Addressed challenges in managing state for games like Visual Memory and Typing Speed.",
          "Improved gameplay interactions by resolving bugs and optimizing real-time updates."
        ]
      },
      {
        icon: Activity,
        title: "Performance Optimization",
        items: [
          "Implemented lazy loading and dynamic imports to improve initial load times.",
          "Enhanced rendering efficiency by using React memoization techniques where necessary.",
          "Reduced asset sizes and optimized animations for smoother user experience."
        ]
      }
    ]
  }
];