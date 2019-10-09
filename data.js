const DATA = [{
    mainBio: `
    <img class="biopic" src="https://i.imgur.com/OOQ7lcP.png" alt="photo of callie porter-borden">
    <h4>I'm Callie.<br>I like to make things.</h4>
    <p class="bio">I am a full stack developer and web designer with a wide range of career experience.  I love to write clean and efficient code that solves problems while keeping in mind both aesthetic appeal and function.  Drawing from a background that includes work in the non-profit sector, service industry, and retail world, I have expertise in accounting, inventory management, graphic design, marketing, and customer service.  These skills inform any project I work on and allow me to better comprehend a client's needs, collaborate with others, and think broadly to find specific solutions.
    </p>
    <p>In addition to working with code, I love to create with many different textures and materials.  My pet projects are growing as much of my own food as possible in a city row home yard, screen printing and sewing, and making and sharing all kinds of food and drink.  
    </p>`,
    mainProjects: `
    <section class="project-description">
        <div class="project-images-container">
            <a href="https://erosion.porterhyphenborden.now.sh/" target="_blank">
            <img class="screenshot" src="./images/erosion-screenshot.png" alt="screenshot of Erosion"></a>
            <img class="tech-logo" src="./images/html-logo.png" alt="HTML5">
            <img class="tech-logo" src="./images/css-logo.png" alt="CSS3">
            <img class="tech-logo" src="./images/js-logo.png" alt="Javascript">
            <img class="tech-logo" src="./images/react-logo.png" alt="React">
            <img class="tech-logo" src="./images/nodejs-logo.png" alt="Node.js">
            <img class="tech-logo" src="./images/express-logo.png" alt="Express">
            <img class="tech-logo" src="./images/postgres-logo.png" alt="PostgreSQL">
        </div>
        <a href="https://erosion.porterhyphenborden.now.sh/" target="_blank"><h4>Erosion</h4></a>
        <p>Erosion is a full stack single-player puzzle game. The player must shift the grid of terrain tiles to guide the river to it's target location, earning points along the way for eroding tiles and leaving fertile soil along the river. Multiple maps are available to play, as well as a leaderboard and game history for registered users.
        <br><a href="https://github.com/porterhyphenborden/erosion-client">Github Repository (Client)</a>
        <a href="https://github.com/porterhyphenborden/erosion-api">Github Repository (API)</a></p>
    </section>
    <section class="project-description">
        <div class="project-images-container">
            <a href="https://spirited-app.porterhyphenborden.now.sh/" target="_blank">
            <img class="screenshot" src="./images/spirited-screenshot.png" alt="screenshot of Spirited"></a>
            <img class="tech-logo" src="./images/html-logo.png" alt="HTML5">
            <img class="tech-logo" src="./images/css-logo.png" alt="CSS3">
            <img class="tech-logo" src="./images/js-logo.png" alt="Javascript">
            <img class="tech-logo" src="./images/react-logo.png" alt="React">
            <img class="tech-logo" src="./images/nodejs-logo.png" alt="Node.js">
            <img class="tech-logo" src="./images/express-logo.png" alt="Express">
            <img class="tech-logo" src="./images/postgres-logo.png" alt="PostgreSQL">
        </div>
        <a href="https://spirited-app.porterhyphenborden.now.sh/" target="_blank"><h4>Spirited</h4></a>
        <p>Spirited is a full-stack cocktail library and search app for the modern bartender and cocktail enthusiast. Users can search a database of curated cocktail selections by name or ingredient, or browse themed collections. Registered users have access to their own private cocktail library, and may add and update their own recipes. 
        <br><a href="https://github.com/porterhyphenborden/spirited-client">Github Repository (Client)</a>
        <a href="https://github.com/porterhyphenborden/spirited-api">Github Repository (API)</a></p>
    </section>
    <section class="project-description">
        <div class="project-images-container">
            <a href="https://porterhyphenborden.github.io/pot-valor/" target="_blank">
            <img class="screenshot" src="./images/pot-valor-screenshot.png" alt="screenshot of Pot-Valor"></a>
            <img class="tech-logo" src="./images/html-logo.png" alt="HTML5">
            <img class="tech-logo" src="./images/css-logo.png" alt="CSS3">
            <img class="tech-logo" src="./images/js-logo.png" alt="Javascript">
        </div>
        <a href="https://porterhyphenborden.github.io/pot-valor/" target="_blank"><h4>Pot-Valor</h4></a>
        <p>This web app consolidates meal planning for the modern at-home cook by creating a space where a user can find cocktail recipes, food recipes, and suggested wine pairings, all in one search. 
        <br><a href="https://github.com/porterhyphenborden/quiz-app">Github Repository</a></p>
    </section>
    <section class="project-description">
        <div class="project-images-container">
            <a href="https://porterhyphenborden.github.io/quiz-app/" target="_blank">
            <img class="screenshot" src="./images/quiz-app-screenshot.png" alt="screenshot of tequila quiz app"></a>
            <img class="tech-logo" src="./images/html-logo.png" alt="HTML5">
            <img class="tech-logo" src="./images/css-logo.png" alt="CSS3">
            <img class="tech-logo" src="./images/js-logo.png" alt="Javascript">
        </div>
        <a href="https://porterhyphenborden.github.io/quiz-app/" target="_blank"><h4>Tequila Quiz App</h4></a>
        <p>This web app tests the user's knowledge of tequila and other Mexican spirits.  Designed to be fun and informal, this quiz can also be used by service industry professionals and includes basic information that anyone working with tequila and mezcal should know.
        <br><a href="https://github.com/porterhyphenborden/pot-valor">Github Repository</a></p>
    </section>
    `,
    mainContact: `
    <ul class="contact-list">
        <li>
            <a href="mailto:porterhyphenborden@gmail.com" target="_blank">
            <img class="contact-link" src="https://i.imgur.com/fCOQVEw.png" alt="send an email"></a>
            <h4>Email me</h4>
        </li>
        <li>
            <a href="https://www.instagram.com/porterhyphenborden" target="_blank">
            <img class="contact-link" src="https://i.imgur.com/JpZfVbt.png" alt="Instagram"></a>
            <h4>Check out my Instagram</h4>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/callie-porter-borden/" target="_blank">
            <img class="contact-link" src="https://i.imgur.com/ndYEgaS.png" alt="LinkedIn"></a>
            <h4>Find me on LinkedIn</h4>
        </li>
        <li>
            <a href="https://github.com/porterhyphenborden" target="_blank">
            <img class="contact-link" src="https://i.imgur.com/7kMd2dc.png" alt="Github"></a>
            <h4>View my work on Github</h4>
        </li>
    </ul>`,
    navBio: `       
    <ul>
        <li><a href="index.html" class="js-home logo"><span>cpb</span></a></li>
        <div class="two-top">
            <li><a href="projects.html" class="js-projects yellow"><h3>projects</h3></a></li>
            <li><a href="contact.html" class="js-contact cyan"><h3>contact</h3></a></li>
        </div>
        <li><a href="bio.html" class="js-bio magenta"><h3>bio</h3></a></li>
    </ul>`,
    navProjects: `    
    <ul>
        <li><a href="index.html" class="js-home logo"><span>cpb</span></a></li>
        <div class="two-top">
            <li><a href="bio.html" class="js-bio magenta"><h3>bio</h3></a></li>
            <li><a href="contact.html" class="js-contact cyan"><h3>contact</h3></a></li>
        </div>
            <li><a href="projects.html" class="js-projects yellow"><h3>projects</h3></a></li>
    </ul>`,
    navContact: `
    <ul>
        <li><a href="index.html" class="js-home logo"><span>cpb</span></a></li>
        <div class="two-top">
            <li><a href="bio.html" class="js-bio magenta"><h3>bio</h3></a></li>
            <li><a href="projects.html" class="js-projects yellow"><h3>projects</h3></a></li>
        </div>
        <li><a href="contact.html" class="js-contact cyan"><h3>contact</h3></a></li>
    </ul>`,
    navHome: `<ul>
    <li><a href="bio.html" class="js-bio magenta"><h3>bio</h3></a></li>
    <li><a href="projects.html" class="js-projects yellow"><h3>projects</h3></a></li>
    <li><a href="contact.html" class="js-contact cyan"><h3>contact</h3></a></li>
</ul>`
  }]