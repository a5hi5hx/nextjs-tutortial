import React from 'react';
import Head from 'next/head';
import styles from './MyProjectsPage.module.css'; // Importing the CSS module for styling

// Sample project data
const projects = [
    {
        id: 1,
        title: 'Project 1',
        image: 'https://picsum.photos/200?random=1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget est arcu.',
        technologies: ['React', 'Next.js', 'CSS'],
        githubUrl: 'https://github.com/username/project1'
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'https://picsum.photos/200?random=2',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/username/project2'
    },
    {
        id: 3,
        title: 'Project 3',
        image: 'https://picsum.photos/200?random=3',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/username/project2'
    },{
        id: 4,
        title: 'Project 4',
        image: 'https://picsum.photos/200?random=4',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/username/project2'
    },{
        id: 5,
        title: 'Project 5',
        image: 'https://picsum.photos/200?random=5',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/username/project2'
    },
    {
        id: 6,
        title: 'Project 6',
        image: 'https://picsum.photos/200?random=6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget est arcu.',
        technologies: ['React', 'Next.js', 'CSS'],
        githubUrl: 'https://github.com/username/project1'
    },
    // Add more projects as needed
];

const MyProjectsPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Projects</title>
            </Head>
            <h1 className={styles.heading}>My Projects</h1>
            <div className={styles.projectsContainer}>
                {projects.map(project => (
                    <div key={project.id} className={styles.projectBox}>
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                        <div className={styles.projectContent}>
                            <div className={styles.projectTechnologies}>
                                {project.technologies.map(tech => (
                                    <span key={tech} className={styles.technology}>{tech}</span>
                                ))}
                            </div>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <a href={project.githubUrl} className={styles.githubLink} target="_blank" rel="noopener noreferrer"><b className={styles.link}>Visit Project</b></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjectsPage;
