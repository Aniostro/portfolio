// Portfolio Configuration
// Edit these values to customize your portfolio

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Full Stack Developer & UI/UX Designer",
        description: "I create beautiful, functional, and user-centered digital experiences that solve real-world problems with clean code and innovative design.",
        email: "your.email@example.com",
        phone: "+1 (234) 567-890",
        location: "Your City, Country",
        profileImage: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=Your+Photo"
    },

    // Social Media Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        behance: "https://behance.net/yourusername",
        dribbble: "https://dribbble.com/yourusername",
        instagram: "https://instagram.com/yourusername"
    },

    // About Section Statistics
    stats: {
        projectsCompleted: 50,
        happyClients: 25,
        yearsExperience: 3
    },

    // Skills (add your technologies)
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vue" },
            { name: "TypeScript", icon: "fab fa-js-square" },
            { name: "Sass", icon: "fab fa-sass" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "GraphQL", icon: "fas fa-project-diagram" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "Adobe Suite", icon: "fab fa-adobe" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Webpack", icon: "fas fa-cube" }
        ]
    },

    // Projects (replace with your actual projects)
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce+Platform",
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://your-ecommerce-demo.com",
            githubUrl: "https://github.com/yourusername/ecommerce"
        },
        {
            id: 2,
            title: "Task Manager App",
            description: "A productivity app built with React Native and Firebase. Includes real-time synchronization, push notifications, and offline support.",
            image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Manager+App",
            category: "mobile",
            technologies: ["React Native", "Firebase", "Redux"],
            liveUrl: "https://your-app-store-link.com",
            githubUrl: "https://github.com/yourusername/taskmanager"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website with modern animations and smooth scrolling. Built with vanilla JavaScript and CSS animations.",
            image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Portfolio+Website",
            category: "web",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            liveUrl: "https://your-portfolio.com",
            githubUrl: "https://github.com/yourusername/portfolio"
        },
        {
            id: 4,
            title: "Brand Identity Design",
            description: "Complete brand identity design for a tech startup including logo, color palette, typography, and brand guidelines.",
            image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Brand+Identity",
            category: "design",
            technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
            liveUrl: "https://your-behance-project.com",
            githubUrl: "https://github.com/yourusername/brand-identity"
        }
    ],

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "John Smith",
            position: "CEO, Tech Solutions",
            avatar: "https://via.placeholder.com/60x60/4f46e5/ffffff?text=JS",
            content: "Exceptional work! The website exceeded our expectations in both design and functionality. Highly professional and delivered on time."
        },
        {
            id: 2,
            name: "Sarah Davis",
            position: "Marketing Director",
            avatar: "https://via.placeholder.com/60x60/8b5cf6/ffffff?text=SD",
            content: "Amazing attention to detail and great communication throughout the project. The final product is exactly what we envisioned."
        }
    ],

    // Theme Colors (CSS custom properties)
    theme: {
        colors: {
            primary: "#4f46e5",
            secondary: "#6366f1",
            accent: "#8b5cf6",
            success: "#10b981",
            warning: "#f59e0b",
            error: "#ef4444"
        },
        fonts: {
            primary: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        }
    },

    // Contact Form Settings
    contact: {
        formspreeId: "YOUR_FORMSPREE_ID", // Get from formspree.io
        emailjsServiceId: "YOUR_EMAILJS_SERVICE_ID", // Alternative: emailjs.com
        emailjsTemplateId: "YOUR_EMAILJS_TEMPLATE_ID",
        emailjsUserId: "YOUR_EMAILJS_USER_ID"
    },

    // SEO Settings
    seo: {
        title: "Your Name - Portfolio",
        description: "Professional portfolio showcasing web development projects and skills",
        keywords: "web developer, portfolio, react, javascript, ui/ux designer",
        author: "Your Name",
        url: "https://yourusername.github.io/portfolio"
    },

    // Features Toggle
    features: {
        darkMode: true,
        animations: true,
        particles: true,
        scrollProgress: true,
        lazyLoading: true,
        pwa: true
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Make available globally
window.portfolioConfig = portfolioConfig;
