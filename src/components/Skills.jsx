import React from 'react'

function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'Kotlin',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        {
          name: 'TensorFlow',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        },
        {
          name: 'PyTorch',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        },
        {
          name: 'Scikit-learn',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        },
        {
          name: 'Reinforcement Learning',
          icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2.5" />
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
              <circle cx="12" cy="19" r="2.5" />
              <line x1="12" y1="7.5" x2="12" y2="16.5" />
              <line x1="6.77" y1="10.23" x2="17.23" y2="13.77" />
              <line x1="17.23" y1="10.23" x2="6.77" y2="13.77" />
            </svg>
          ),
        },
        {
          name: 'NLP / TF-IDF',
          icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h8M8 14h6" />
            </svg>
          ),
        },
        {
          name: 'Pandas / NumPy',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        {
          name: 'Kotlin',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        },
        {
          name: 'Android Studio',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        {
          name: 'FastAPI',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'REST APIs',
          icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Firebase',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        {
          name: 'Git & GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        },
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Jupyter / Colab',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
        },
        {
          name: 'Postman',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        },
        {
          name: 'VS Code',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          name: 'Antigravity',
          icon: (
            <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="url(#antigravity-grad-react)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="antigravity-grad-react" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ea8ff" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path d="M12 3L2 20h20L12 3z" />
              <path d="M5 16h14" />
              <path d="M8 12h8" />
            </svg>
          ),
        },
      ],
    },
  ]

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__head reveal">
          <h2 className="section__title">Skills &amp; Technologies</h2>
          <p className="section__lede">Languages, frameworks, and tools I work with.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-card reveal">
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="skills-list__item">
                    {typeof skill.icon === 'string' ? (
                      <img className="skill-icon" src={skill.icon} alt={skill.name} />
                    ) : (
                      skill.icon
                    )}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
