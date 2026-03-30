// add experience as another entry in this variable
const expData = [
    {
        role: "Software Engineering Intern",
        company: "NVIDIA",
        description: "Incoming Summer 2026 on " + 
            "<a href=\"https://developer.nvidia.com/industries/telecommunications/ai-aerial\" target=\"blank\"> Aerial Platforms Team </a>",
        dates: "June 2026 - September 2026"
    },
    {
        role: "Software Engineering Intern",
        company: "Google",
        description: "Adding search features for encrypted emails on Gmail Web",
        dates: "May 2025 - August 2025"
    },
    {
        role: "Research Assistant",
        company: "San Jose State University",
        description: "Comparing performance of PCA, Matrix Factorization, Autoencoders, and Singular Value Threshold on denoising genome data " +
            "<br></br><a href=\"http://hdl.handle.net/20.500.12680/2r36v736v\" target=\"_blank\"> Manuscript </a>",
        dates: "August 2024 - April 2025"
    },
    {
        role: "Software Engineering Intern",
        company: "Google",
        description: "Developed full-stack app using Java backend & Angular frontend as part of Slides AI model eval pipeline",
        dates: "May 2024 - August 2024"
    },
    {
        role: "Technology Intern",
        company: "Integem",
        description: "Trained image classification models on NVIDIA's Jetson Nano, constructed Raspberry Pi robots, and programmed in Python for AR game development",
        dates: "May 2023 - August 2023"
    },
    {
        role: "Software Engineering Intern",
        company: "Utiltyx",
        description: "Implemented OpenCV and mathematical model detection pipeline to find electric poles in an image and calculate the angle they make with the ground with ~86% accuracy",
        dates: "June 2022 - August 2022"
    },
    {
        role: "Data Analysis Intern",
        company: "NASA",
        description: "Conducted regression experiments using SciPy to predict the potential reduction in delays implementing a flight optimization program could offer",
        dates: "June 2021 - August 2021"
    }
];


for (let i = 0; i < expData.length; i++) {
    const visibleExp = document.getElementById('visibleExperiences');
    const hiddenExp = document.getElementById('moreExperiences');

    const expWrapper = document.createElement('div');
    expWrapper.className = 'd-flex flex-column flex-md-row justify-content-between mb-5';
    /* expWrapper.classList.add('d-flex');
    expWrapper.classList.add('flex-column');
    expWrapper.classList.add('flex-md-row');
    expWrapper.classList.add('justify-content-between');
    expWrapper.classList.add('mb-5');
    */

    const expInfo = document.createElement('div');
    expInfo.classList.add('flex-grow-1');
    const expHeader = document.createElement('h3');
    expHeader.classList.add('mb-0');
    expHeader.textContent = expData[i].role;
    const expComp = document.createElement('div');
    expComp.classList.add('subheading');
    expComp.classList.add('mb-3');
    expComp.textContent = expData[i].company;
    const expDesc = document.createElement('p');
    expDesc.innerHTML = expData[i].description; // can handle html text like <a> tags
    expInfo.appendChild(expHeader); expInfo.appendChild(expComp); expInfo.appendChild(expDesc);

    const expDates = document.createElement('div');
    expDates.classList.add('flex-shrink-0');
    const expDateSpan = document.createElement('span');
    expDateSpan.classList.add('text-primary');
    expDateSpan.textContent = expData[i].dates;
    expDates.appendChild(expDateSpan);

    expWrapper.appendChild(expInfo); expWrapper.appendChild(expDates);

    i < 3 ? visibleExp.appendChild(expWrapper) : hiddenExp.appendChild(expWrapper);
}