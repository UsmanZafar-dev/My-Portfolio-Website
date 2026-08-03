import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Projects() {
  const slides = [
    '/assets/screens/Splash.jpeg',
    '/assets/screens/SignUp.jpeg',
    '/assets/screens/Login.jpeg',
    '/assets/screens/Dashboard.jpeg',
    '/assets/screens/Wardrobe.jpeg',
    '/assets/screens/Laundry.jpeg',
    '/assets/screens/Donation.jpeg',
    '/assets/screens/AIChatbot.jpeg',
    '/assets/screens/Collection.jpeg',
    '/assets/screens/AIVirtualTry-On.jpeg',
    '/assets/screens/Profile.jpeg',
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showModal])

  const projectCards = [
    {
      category: 'Machine Learning',
      lang: 'Python',
      title: 'Heart Disease Classification',
      desc: 'Developed an end-to-end ML pipeline to predict heart disease risk by comparing Logistic Regression, KNN, SVM, Random Forest, and ANN models. Applied data preprocessing, hyperparameter tuning, and PCA for dimensionality reduction, with Random Forest achieving the best performance at 91.8% accuracy.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Random Forest', 'SVM', 'KNN', 'Logistic Regression', 'ANN', 'PCA'],
      link: 'https://github.com/UsmanZafar-dev/Heart_Disease_Classification',
    },
    {
      category: 'NLP',
      lang: 'Python',
      title: 'Toxic Comment Classifier',
      desc: 'Built an NLP-based toxic comment classification system using TF-IDF vectorization and a Random Forest classifier to detect harmful user-generated content. Developed an interactive Gradio web interface for real-time predictions, achieving over 91% classification accuracy.',
      tags: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Random Forest', 'Gradio', 'Pandas'],
      link: 'https://github.com/UsmanZafar-dev/Toxic_Comment_Classifier',
    },
    {
      category: 'Machine Learning',
      lang: 'Python',
      title: 'House Price Prediction',
      desc: 'Designed a machine learning system to estimate residential property prices using Linear Regression. Performed exploratory data analysis, feature engineering, one-hot encoding, feature scaling, and built a custom prediction pipeline based on property characteristics such as location, size, and amenities.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Linear Regression', 'Feature Engineering', 'One-Hot Encoding', 'StandardScaler'],
      link: 'https://github.com/UsmanZafar-dev/House_Price_Prediction_System',
    },
    {
      category: 'Mobile',
      lang: 'Java',
      title: 'Truck Dispatching App',
      desc: 'Developed an Android logistics app that streamlines truck dispatching by enabling separate driver and customer accounts, secure authentication, and delivery assignment workflows. Built a responsive mobile interface with backend API integration to support real-time logistics operations.',
      tags: ['Java', 'SharedPreferences', 'Fragments', 'User Authentication', 'UI/UX'],
      isPrivate: true,
    },
    {
      category: 'Programming Fundamentals',
      lang: 'C++',
      title: 'Word Search Puzzle Game',
      desc: 'Built a console-based Word Search Puzzle game in C++ featuring multiple difficulty levels, dictionary-based word validation, persistent game state, scoring, and a leaderboard system. Implemented file handling and algorithmic logic to deliver an engaging gameplay experience.',
      tags: ['C++', 'File I/O', 'Arrays', 'Functions', 'Searching Algorithms'],
      link: 'https://github.com/UsmanZafar-dev/Word_Search_Puzzle_Game',
    },
    {
      category: 'Data Structures',
      lang: 'C++',
      title: 'AVL Tree Implementation',
      desc: 'Implemented a fully functional AVL Tree in C++ supporting insertion, deletion, searching, and self-balancing through tree rotations. Included traversal algorithms along with height and diameter calculations to demonstrate efficient balanced tree operations.',
      tags: ['C++', 'Data Structures'],
      link: 'https://github.com/UsmanZafar-dev/AVL_Tree_Implementation',
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head reveal">
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__lede">A selection of projects that showcase my skills and passion for development.</p>
        </div>

        <div className="projects">
          {/* FEATURED: INFITRON */}
          <article className="project project--featured reveal">
            <div className="project__meta">
              <span className="project__tag project__tag--featured">Final Year Project</span>
              <h3 className="project__title">
                INFITRON <span className="project__title-sub">Tailored by Intelligence</span>
              </h3>
              <ul className="project__bullet-list">
                <li>Designed and developed an AI-powered Android wardrobe management application that digitizes clothing collections and delivers personalized, context-aware outfit recommendations using Artificial Intelligence, Augmented Reality, and contextual intelligence.</li>
                <li>Engineered a reinforcement learning recommendation engine that continuously adapts to user preferences by incorporating interaction history, weather conditions, calendar events, and mood for intelligent outfit suggestions.</li>
                <li>Built AI-powered clothing classification using FashionCLIP, real-time AR visualization with MediaPipe Pose Landmarker and CameraX, and AI virtual try-on using IDM-VTON to create an interactive styling experience.</li>
                <li>Developed a scalable FastAPI backend with MongoDB and implemented additional features including wardrobe analytics, smart laundry management, a Donation Hub for sustainable fashion, and a voice-enabled AI wardrobe assistant.</li>
              </ul>
              <ul className="tag-list tag-list--project">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Python</li>
                <li>FastAPI</li>
                <li>MongoDB</li>
                <li>TensorFlow</li>
                <li>FashionCLIP</li>
                <li>MediaPipe</li>
                <li>IDM-VTON</li>
                <li>Computer Vision</li>
                <li>Machine Learning</li>
                <li>Reinforcement Learning</li>
                <li>CameraX</li>
                <li>Ktor</li>
                <li>Room Database</li>
                <li>REST APIs</li>
                <li>Git</li>
              </ul>
              <div className="project__actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/UsmanZafar-dev/INFITRON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--sm btn--ghost"
                >
                  View on GitHub
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn--sm btn--primary-glow"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="project__visual project__visual--featured" aria-hidden="true">
              <div className="phone-mockup">
                <div className="phone-mockup__notch"></div>
                <div className="phone-mockup__screen">
                  {slides.map((url, i) => (
                    <img
                      key={i}
                      className={`phone-slide ${i === activeIndex ? 'is-active' : ''}`}
                      src={url}
                      alt={`INFITRON slide ${i + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* GRID OF SMALLER PROJECT CARDS */}
          <div className="projects__grid">
            {projectCards.map((card, i) => (
              <article key={i} className="project project--card reveal">
                <div className="project__card-top">
                  <span className="project__tag">{card.category}</span>
                  <span className="project__lang">{card.lang}</span>
                </div>
                <h3 className="project__title">{card.title}</h3>
                <p className="project__desc">{card.desc}</p>
                <ul className="tag-list tag-list--project">
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {card.isPrivate ? (
                  <span className="project__link project__link--muted">Repository Coming Soon</span>
                ) : (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                  >
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="projects__more reveal">
            <a
              href="https://github.com/UsmanZafar-dev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              See All Repositories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {showModal && createPortal(
        <div className="project-details-overlay" onClick={() => setShowModal(false)}>
          <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
            <div className="pd-header">
              <h4 className="pd-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                INFITRON 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Product Walkthrough
              </h4>
              <button className="pd-close-btn" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="pd-body">
              <div className="phone-mockup" style={{ height: '100%', maxHeight: '80vh', width: 'auto', maxWidth: 'none', padding: '10px', margin: '0 auto' }}>
                <div className="phone-mockup__notch"></div>
                <div className="phone-mockup__screen">
                  <video 
                    className="phone-mockup__video" 
                    src="/assets/INFITRONVideo.mp4" 
                    autoPlay 
                    controls 
                    preload="auto"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
