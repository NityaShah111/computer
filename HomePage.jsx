import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import ImageSlider from './ImageSlider';
import Stats from './Stats';
import CoreValues from './CoreValues';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Model() {
  const ref = useRef();
  const { scene } = useGLTF('/model.glb');
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return <primitive ref={ref} object={scene} scale={1.2} />;
}

const HomePage = () => {
  return (
    <div className="home-page-background" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blurred Video Background for HomePage only, not in footer */}
      <video
        className="blurred-bg-video"
        autoPlay
        loop
        muted
        playsInline
        src="/backgroundone.mp4"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, filter: 'blur(8px) brightness(0.7)', pointerEvents: 'none' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ParticlesBackground />
        <ImageSlider />
        <Stats />
        {/* JCSM Mission Section */}
        <section className="jcsm-mission-section">
          <div className="jcsm-mission-content">
            <h2 className="jcsm-mission-title">IDEAL COMPUTER EDUCATION CENTER</h2>
            <p>
              Established in 2001, Ideal Computer Class has been a trusted name in quality computer education. With over two decades of excellence, we have guided thousands of students toward successful careers in technology. Our expert faculty, hands-on training, and modern lab facilities ensure every learner gains the confidence and skills needed for real-world success.
              Whether you're a beginner or looking to upgrade your skills, Ideal Computer Class offers the perfect platform to learn, grow, and succeed.
              Join us today and take the first step toward a brighter future!
            </p>
          </div>
          <div className="jcsm-mission-image">
            <div style={{ width: '100%', height: 500 }}>
              <Canvas camera={{ position: [0, 0, 2.5] }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={true} />
              </Canvas>
            </div>
          </div>
        </section>
        {/* Key Highlights Section */}
        <section className="key-highlights-section">
          <h2 className="key-highlights-title">Key Highlights</h2>
          <div className="key-highlights-grid">
            {/* ... existing highlight items ... */}
          </div>
        </section>
        <CoreValues />
      </div>
    </div>
  );
};

export default HomePage; 