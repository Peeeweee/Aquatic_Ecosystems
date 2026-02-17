import React, { useState, useEffect, useRef } from 'react';
import SurfaceSection from './components/SurfaceSection';
import SunlitSection from './components/SunlitSection';
import TwilightSection from './components/TwilightSection';
import MidnightSection from './components/MidnightSection';
import AbyssSection from './components/AbyssSection';
import TrenchSection from './components/TrenchSection';

const ZoneDivider = ({ depth, label, tag }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (dividerRef.current) observer.observe(dividerRef.current);
    return () => { if (dividerRef.current) observer.unobserve(dividerRef.current); };
  }, []);

  return (
    <div
      ref={dividerRef}
      style={{
        width: '100%',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 5,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0.8)',
        transition: 'all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Central Glowing Line */}
      <div style={{
        width: '80%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--teal), transparent)',
        boxShadow: isVisible ? '0 0 20px var(--teal)' : 'none',
        position: 'relative',
        transition: 'box-shadow 2s ease-in-out',
      }}>
        {/* Scanning Pulse */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          animation: 'scan-sweep 3s linear infinite',
        }} />
      </div>

      {/* HUD Labels */}
      <div className="cinzel" style={{
        position: 'absolute',
        left: 'clamp(20px, 10vw, 150px)',
        color: 'var(--teal)',
        fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
        letterSpacing: '0.2rem',
        opacity: isVisible ? 0.8 : 0,
        textShadow: '0 0 10px var(--teal)',
        transition: 'opacity 1s ease 0.5s',
      }}>
        {tag} • {depth}
      </div>

      <div className="cinzel" style={{
        position: 'absolute',
        right: 'clamp(20px, 10vw, 150px)',
        color: 'white',
        fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
        letterSpacing: '0.2rem',
        opacity: isVisible ? 0.6 : 0,
        transition: 'opacity 1s ease 0.8s',
      }}>
        {label}
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ripples, setRipples] = useState([]);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef(null);
  const surfaceRef = useRef(null);
  const sunlitRef = useRef(null);
  const twilightRef = useRef(null);
  const midnightRef = useRef(null);
  const abyssRef = useRef(null);
  const trenchRef = useRef(null);

  const sectionsData = [
    { ref: surfaceRef, name: 'surface', zone: 'Surface Zone', depth: 0 },
    { ref: sunlitRef, name: 'sunlit', zone: 'Epipelagic Zone', depth: 200 },
    { ref: twilightRef, name: 'twilight', zone: 'Mesopelagic Zone', depth: 1000 },
    { ref: midnightRef, name: 'midnight', zone: 'Bathypelagic Zone', depth: 4000 },
    { ref: abyssRef, name: 'abyss', zone: 'Abyssopelagic Zone', depth: 6000 },
    { ref: trenchRef, name: 'trench', zone: 'Hadalpelagic Zone', depth: 11000 },
  ];

  const colors = ['#3498db', '#0778a0', '#04567a', '#033045', '#011422', '#000d1a'];

  useEffect(() => {
    // Load Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject Global Styles
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --teal: #5df0e8;
        --dark-bg: #000d1a;
      }
      
      html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
        background-color: var(--dark-bg);
        scrollbar-width: none;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
      }
      
      body::-webkit-scrollbar {
        display: none;
      }
      
      section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
      
      .cinzel { font-family: 'Cinzel', serif; }
      
      /* Global Entrance Animation Class */
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .active .reveal {
        opacity: 1;
        transform: translateY(0);
      }
      
      @keyframes sonar {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(4); opacity: 0; }
      }
      
      @keyframes bubble-rise {
        0% { transform: translateY(110vh) scale(1); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
      }
      
      @keyframes ripple {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
      }

      @keyframes scan-sweep {
        0% { transform: translateX(-500%); }
        100% { transform: translateX(500%); }
      }

      /* Hover states with will-change */
      .interactive-element {
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);

    // Loading timer
    const timer = setTimeout(() => setLoading(false), 2500);

    // Scroll listener with requestAnimationFrame throttling
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollPhysics(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateScrollPhysics = (winScroll) => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.min(Math.max(winScroll / height, 0), 1);
      setScrollProgress(progress);

      // Background Interpolation
      const scaledProgress = progress * (colors.length - 1);
      const colorIndex = Math.min(Math.floor(scaledProgress), colors.length - 2);
      const nextColorIndex = colorIndex + 1;
      const sectionProgress = progress === 1 ? 1 : scaledProgress % 1;

      const interpolate = (c1, c2, f) => {
        const r1 = parseInt(c1.substring(1, 3), 16);
        const g1 = parseInt(c1.substring(3, 5), 16);
        const b1 = parseInt(c1.substring(5, 7), 16);
        const r2 = parseInt(c2.substring(1, 3), 16);
        const g2 = parseInt(c2.substring(3, 5), 16);
        const b2 = parseInt(c2.substring(5, 7), 16);
        const r = Math.round(r1 + (r2 - r1) * f);
        const g = Math.round(g1 + (g2 - g1) * f);
        const b = Math.round(b1 + (b2 - b1) * f);
        return `rgb(${r}, ${g}, ${b})`;
      };

      document.body.style.transition = 'background-color 0.5s ease-out';
      document.body.style.backgroundColor = interpolate(colors[colorIndex], colors[nextColorIndex], sectionProgress);
    };

    // IntersectionObserver for Section Entrances
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    sectionsData.forEach(section => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser"));
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  const handleClick = (e) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };


  const currentDepth = Math.round(scrollProgress * 11000);
  const activeSectionIndex = Math.min(Math.floor(scrollProgress * sectionsData.length), sectionsData.length - 1);
  const activeZone = sectionsData[activeSectionIndex]?.zone || sectionsData[0].zone;

  return (
    <div onClick={handleClick} style={{ minHeight: '600vh' }}>
      <audio ref={audioRef} loop src="https://www.soundjay.com/nature/sounds/ocean-wave-1.mp3" />

      {/* Loading Screen */}
      {loading && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'black',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            border: '2px solid var(--teal)',
            borderRadius: '50%',
            position: 'absolute',
            animation: 'sonar 2s infinite',
          }} />
          <h1 className="cinzel" style={{ fontSize: 'clamp(1rem, 5vw, 1.5rem)', letterSpacing: '0.2rem', marginTop: '120px', textAlign: 'center', padding: '0 20px' }}>
            INITIALIZING DIVE SYSTEMS...
          </h1>
        </div>
      )}

      {/* HUD: Sound Toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleAudio(); }}
        className="interactive-element"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 990,
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid var(--teal)',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.2rem',
          backdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease',
          boxShadow: isMuted ? 'none' : '0 0 15px var(--teal)',
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${scrollProgress * 100}%`,
        backgroundColor: 'var(--teal)',
        zIndex: 900,
        transition: 'width 0.1s ease-out',
      }} />

      {/* Pressure Vignette */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        boxShadow: `inset 0 0 ${scrollProgress * 200}px ${scrollProgress * 100}px rgba(0, 13, 26, ${scrollProgress * 0.85})`,
        zIndex: 850,
      }} />

      {/* Floating Bubbles */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
        {[...Array(15)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: '-20px',
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 14}px`,
            height: `${6 + Math.random() * 14}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            animation: `bubble-rise ${6 + Math.random() * 8}s linear ${Math.random() * 5}s infinite`,
            willChange: 'transform',
          }} />
        ))}
      </div>

      {/* Depth Meter - Responsive Position */}
      <div style={{
        position: 'fixed',
        right: window.innerWidth < 700 ? 'auto' : '40px',
        bottom: window.innerWidth < 700 ? '20px' : 'auto',
        left: window.innerWidth < 700 ? '50%' : 'auto',
        top: window.innerWidth < 700 ? 'auto' : '50%',
        transform: window.innerWidth < 700 ? 'translateX(-50%)' : 'translateY(-50%)',
        zIndex: 800,
        display: 'flex',
        flexDirection: window.innerWidth < 700 ? 'row' : 'column',
        alignItems: 'center',
        color: 'white',
        backgroundColor: window.innerWidth < 700 ? 'rgba(0,0,0,0.6)' : 'transparent',
        padding: window.innerWidth < 700 ? '10px 20px' : '0',
        borderRadius: window.innerWidth < 700 ? '30px' : '0',
        backdropFilter: window.innerWidth < 700 ? 'blur(10px)' : 'none',
        border: window.innerWidth < 700 ? '1px solid rgba(93, 240, 232, 0.3)' : 'none',
      }}>
        <div style={{
          marginBottom: window.innerWidth < 700 ? '0' : '20px',
          marginRight: window.innerWidth < 700 ? '20px' : '0',
          textAlign: window.innerWidth < 700 ? 'left' : 'right'
        }}>
          <div className="cinzel" style={{ fontSize: 'clamp(1rem, 4vw, 2rem)', color: 'var(--teal)' }}>{currentDepth}m</div>
          <div className="cinzel" style={{ fontSize: 'clamp(0.6rem, 2vw, 0.8rem)', opacity: 0.8 }}>{activeZone}</div>
        </div>
        <div style={{
          width: window.innerWidth < 700 ? '100px' : '2px',
          height: window.innerWidth < 700 ? '2px' : '240px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          position: 'relative'
        }}>
          {sectionsData.map((_, i) => {
            const isActive = activeSectionIndex === i;
            return (
              <div key={i} style={{
                position: 'absolute',
                left: window.innerWidth < 700 ? `${(i / (sectionsData.length - 1)) * 100}%` : '50%',
                top: window.innerWidth < 700 ? '50%' : `${(i / (sectionsData.length - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--teal)' : 'rgba(255,255,255,0.5)',
                boxShadow: isActive ? '0 0 15px var(--teal)' : 'none',
                transition: 'all 0.3s ease',
              }} />
            );
          })}
        </div>
      </div>

      {/* Water Ripples */}
      {ripples.map((ripple) => (
        <div key={ripple.id} style={{
          position: 'fixed',
          left: ripple.x,
          top: ripple.y,
          width: '50px',
          height: '50px',
          border: '2px solid rgba(93, 240, 232, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 950,
          animation: 'ripple 0.6s ease-out forwards',
        }} />
      ))}

      {/* Sections */}
      <section id="surface" ref={surfaceRef} style={{ height: '100vh', width: '100%' }}>
        <SurfaceSection />
      </section>

      <ZoneDivider depth="200m" tag="THERMOCLINE DETECTED" label="ENTERING MESOPELAGIC" />

      <section id="sunlit" ref={sunlitRef} style={{ minHeight: '100vh', width: '100%' }}>
        <div className="reveal">
          <SunlitSection />
        </div>
      </section>

      <ZoneDivider depth="1000m" tag="HALOCLINE DETECTED" label="ENTERING BATHYPELAGIC" />

      <section id="twilight" ref={twilightRef} style={{ minHeight: '100vh', width: '100%' }}>
        <div className="reveal">
          <TwilightSection />
        </div>
      </section>

      <ZoneDivider depth="4000m" tag="BATHYMETRIC TRANSITION" label="ENTERING ABYSSOPELAGIC" />

      <section id="midnight" ref={midnightRef} style={{ minHeight: '100vh', width: '100%' }}>
        <div className="reveal">
          <MidnightSection />
        </div>
      </section>

      <ZoneDivider depth="6000m" tag="WARNING: HADAL TRANSITION" label="ENTERING HADALPELAGIC" />

      <section id="abyss" ref={abyssRef} style={{ minHeight: '100vh', width: '100%' }}>
        <div className="reveal">
          <AbyssSection />
        </div>
      </section>

      <ZoneDivider depth="11000m" tag="TERMINUS REACHED" label="CHALLENGER DEEP" />

      <section id="trench" ref={trenchRef} style={{ minHeight: '100vh', width: '100%' }}>
        <div className="reveal">
          <TrenchSection />
        </div>
      </section>
    </div>
  );
};

export default App;
