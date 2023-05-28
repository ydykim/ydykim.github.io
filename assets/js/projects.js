$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://cs.skku.edu/ko/college/intro/course',
            title: 'Problem Solving Techniques',
            demo: false,
            technologies: ['조재민', '3 credit'],
            description: "Through programming, fundamental theories for problem-solving in various domains are learned and implemented as the foundation courses for computer engineering major.",
            categories: ['featured']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://cs.skku.edu/ko/college/intro/course',
            title: 'System Program',
            demo: false,
            technologies: ['이호준', '3 credit'],
            description: "This course focuses on the theory, design, and implementation methodologies of system software. It covers topics such as assemblers, preprocessors (microprocessors), linkers/loaders, and document editors.",
            categories: ['featured']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://cs.skku.edu/ko/college/intro/course',
            title: 'Programming Languages',
            demo: false,
            technologies: ['황성재', '3 credit'],
            description: "This course covers fundamental concepts of computer programming and introduces different language paradigms. Topics include data types, control flow, object-oriented concepts, and efficient data management.",
            categories: ['featured']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://cs.skku.edu/ko/college/intro/course',
            title: 'Operating Systems',
            demo: false,
            technologies: ['신동군', '3 credit'],
            description: "The course covers fundamental concepts of operating systems, including process management, memory management, file and I/O management, and security. It also explores design considerations for distributed systems and parallel processing operating systems.",
            categories: ['featured']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'General Logic',
            demo: false,
            technologies: ['한기호', '2 credit'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['native']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'Critical Thinking',
            demo: false,
            technologies: ['홍지호', '2 credit'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['native']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'Linear Algebra',
            demo: false,
            technologies: ['허석문', '3 credit'],
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['native']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'Fundamental of Data Analytics',
            demo: false,
            technologies: ['김유성', '3 credit'],
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['native']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'The Analects of Confucius',
            demo: 'https://elementary-jekyll.github.io/',
            technologies: ['윤민향', '2 credit'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['native']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://www.skku.edu/skku/edu/bachelor/curriculum.do',
            title: 'Basis and Practice in Programming',
            demo: 'https://sootspirits.github.io',
            technologies: ['김유성', '3 credit'],
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['native']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}