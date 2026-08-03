import React from 'react'

function Education() {
  const items = [
    {
      period: 'Oct 2022 · June 2026',
      title: 'BS Computer Science',
      org: 'University of Central Punjab, Lahore',
      desc: 'Major in Machine Learning and Artificial Intelligence. Coursework across OOP, Data Structures & Algorithms, Database Systems, ML, Deep Learning, Mobile App Development, and Cloud Computing.',
    },
    {
      period: 'Certification',
      title: 'AWS Academy Cloud Foundations',
      org: 'Amazon Web Services',
      desc: 'Foundations of AWS cloud concepts, core services, security, and architecture.',
    },
  ]

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="section__head reveal">
          <h2 className="section__title">Education &amp; Credentials</h2>
        </div>

        <div className="edu__grid">
          {items.map((item, index) => (
            <div key={index} className="edu-card reveal">
              <div className="edu-card__period">{item.period}</div>
              <h3 className="edu-card__title">{item.title}</h3>
              <div className="edu-card__org">{item.org}</div>
              <p className="edu-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
