import React from 'react'

function About() {

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__head reveal">
          <h2 className="section__title">About Me</h2>
          <p className="section__lede">A glimpse into who I am and what drives my passion for technology.</p>
        </div>

        <div className="about__grid">
          <div className="about__body reveal">
            <p>
              A motivated and detail-oriented <strong>Computer Science graduate</strong> passionate about building{' '}
              <strong>intelligent, scalable applications</strong> that people actually use.
            </p>
            <p>
              My journey in tech began during my <strong>BS in Computer Science</strong> at the{' '}
              <strong>University of Central Punjab</strong>, where I specialized in{' '}
              <strong>Machine Learning and Artificial Intelligence</strong>. Throughout my academic journey,{' '}
              I built a strong foundation in programming, software engineering, and applied AI, while developing{' '}
              machine learning models, Android applications, and backend APIs using <em>Python, Kotlin, FastAPI</em>,{' '}
              and modern AI technologies.
            </p>
            <p>
              Currently, I'm focused on strengthening my skills in <strong>intelligent systems, backend engineering,{' '}
              and Android development</strong> through hands-on projects, continuous learning, and exploring emerging technologies.
            </p>
            <p>
              When I'm not coding, you'll usually find me experimenting with new AI frameworks, exploring the latest{' '}
              advancements in technology, or working on personal projects that challenge me to learn and grow as an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
