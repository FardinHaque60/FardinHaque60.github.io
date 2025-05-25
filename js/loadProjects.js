// add another entry following the format
const projData = [
    {
        link: "https://github.com/FardinHaque60/Hoops",
        name: "Hoops",
        emoji: "🏀",
        tools: "React Native, MongoDB",
        description: ["Coming Soon!"],
        dates: "Present"
    },
    {
        link: "https://github.com/FardinHaque60/ParkPredict_Experiments",
        name: "ParkPredict",
        emoji: "🚗",
        tools: "Data Engineering, Model Experiments",
        description: ["Coming Soon!"],
        dates: "Present"
    },
    {
        link: "https://github.com/cmpe195a-2024-25-group-9",
        name: "Vocast",
        emoji: "🎤",
        tools: "Angular, FastAPI, WebSockets, ESP32",
        description: [
            "In large classrooms it is often difficult to hear students, so this project utilizes students devices as a distributed microphone",
            "IoT project with two parts: web interface and custom base station acting as an audio streaming server",
            "Students use the website to join the professor's session where they can unmute to speak and the base station drives their voice to speakers in the class"
        ],
        dates: "August 2024 - May 2025"
    },
    {
        link: "https://github.com/FardinHaque60/LikeHome",
        name: "LikeHome",
        emoji: "🛏️",
        tools: "Angular, Django, SQLite3",
        description: [
            "hotels.com clone",
            "Web app for booking hotels",
            "Agentic chatbot capable of searching, adding hotels to users watchlist, and providing account information"
        ],
        dates: "August 2024 - November 2024"
    },
    {
        link: "https://github.com/FardinHaque60/Knits",
        name: "Knits",
        emoji: "🧶",
        tools: "React Native, Springboot, mySQL",
        description: [
            "Social media mobile app that offers users a neat way of organizing hangouts",
            "Strategizing backend in Spring by representing users in a graph to provide recommendations efficiently",
            "Provides map API for users to set-up rides and coordinate their location with a group"
        ],
        dates: "January 2024 - May 2024"
    },
    {
        link: "https://github.com/FardinHaque60/CareFULL",
        name: "CareFULL",
        emoji: "⚕️",
        tools: "React.js, Django, PostgreSQL",
        description: [
            "Health-care application tailored to measuring trends using individuals bioinformation",
            "Implementing backend using MVC and organizing queries to the database for accurate retrieval",
            "Offers conversational chatbot using LLM that utilizes vectors to provide users insightful information regarding their health statistics"
        ],
        dates: "January 2024 - May 2024"
    },
    {
        link: "https://github.com/FardinHaque60/Scribe",
        name: "Scribe",
        emoji: "🖋️",
        tools: "Jinja, Flask, SQLAlchemy",
        description: [
            "Notion clone using Flask framework",
            "Managed a team of 2 others in organizing meetings, creating requirements, managing milestones, and creating a system for quality assurance when pushing changes to retain maintainability",
            "Utilized SQLAlchemy, Jinja Templates, Quill, and other libraries for frontend and backend"
        ],
        dates: "November 2023 - December 2023"
    },
    {
        link: "https://github.com/FardinHaque60/Bug-Base",
        name: "Bug Base",
        emoji: "🐞",
        tools: "FXML, JavaFX, SQLite",
        description: [
            "Desktop based application to aid users organize bugs and enhancements in a single dashboard",
            "Lead a team of 2 others to create a JavaFX project, identify classes, and develop UML diagrams, use cases, functional spec, and other client facing resources",
            "Anchored backend and database development with SQLite implementation on users local machine"
        ],
        dates: "October 2023 - December 2023"
    },
    {
        link: "",
        name: "23-Tree",
        emoji: "🌳",
        tools: "Java",
        description: [
            "Self balancing tree program that can insert values and store them in a full binary tree",
            "Optimized program to work on hundreds of thousands of values, providing runtimes <500ms for insert, size, get, and find functions all running in, worst case, logarithmic time or less"
        ],
        dates: "October 2023"
    }
];

for (let i = 0; i < projData.length; i++) {
    const visibleProj = document.getElementById('visibleProjects');
    const hiddenProj = document.getElementById('moreProjects');

    // Create main container div
    const projectDiv = document.createElement('div');
    projectDiv.className = 'd-flex flex-column flex-md-row justify-content-between mb-5';

    // Create left (main) column
    const leftDiv = document.createElement('div');
    leftDiv.className = 'flex-grow-1';

    // Project link and title
    const h3 = document.createElement('h3');
    h3.className = 'mb-0';
    if (projData[i].link) {
        const projLink = document.createElement('a');
        projLink.href = projData[i].link;
        projLink.target = "_blank";
        projLink.textContent = projData[i].name;
        h3.appendChild(projLink);
    } else {
        h3.textContent = projData[i].name;
    }
    h3.appendChild(document.createTextNode(" " + projData[i].emoji));

    // Tools/subheading
    const subheading = document.createElement('div');
    subheading.className = 'subheading mb-3';
    subheading.textContent = projData[i].tools;

    // Description list
    const descDiv = document.createElement('div');
    const ul = document.createElement('ul');

    for (const descItem of projData[i].description) {
        const li = document.createElement('li');
        li.textContent = descItem;
        ul.appendChild(li);
    }

    descDiv.appendChild(ul);

    // Empty paragraph
    const p = document.createElement('p');

    // Assemble left column
    leftDiv.appendChild(h3);
    leftDiv.appendChild(subheading);
    leftDiv.appendChild(descDiv);
    leftDiv.appendChild(p);

    // Create right (date) column
    const rightDiv = document.createElement('div');
    rightDiv.className = 'flex-shrink-0';
    const span = document.createElement('span');
    span.className = 'text-primary';
    span.textContent = projData[i].dates;
    rightDiv.appendChild(span);

    // Assemble main container
    projectDiv.appendChild(leftDiv);
    projectDiv.appendChild(rightDiv);

    i < 3 ? visibleProj.appendChild(projectDiv) : hiddenProj.appendChild(projectDiv);
}