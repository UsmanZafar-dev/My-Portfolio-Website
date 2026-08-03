import React from 'react'

function VideoTest() {
  return (
    <section className="section section--alt" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>INFITRON Phone Video Mockup Test (React Preview)</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
          This is a React preview component to check how your video looks inside the phone mockup frame before replacing the featured project screenshots slider.
        </p>

        <div className="phone-mockup" style={{ transform: 'scale(1.05)', marginTop: '20px' }}>
          <div className="phone-mockup__notch"></div>
          <div className="phone-mockup__screen">
            <video 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              src="/assets/INFITRONVideo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTest
