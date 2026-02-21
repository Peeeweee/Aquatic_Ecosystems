import React from 'react';
import { ResearchShip } from './MarineLife';

const SurfaceSection = ({ onBeginDescent }) => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F7FA 50%, #0077be 50%, #005a8d 100%)',
        }}>
            {/* Sun */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '15%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, #FFF700 30%, #FFCC00 60%, transparent 100%)',
                borderRadius: '50%',
                boxShadow: '0 0 50px #FFCC00, 0 0 100px #FFCC00',
                animation: 'sun-pulse 4s ease-in-out infinite',
                zIndex: 1,
            }} />

            {/* Clouds */}
            {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: `${10 + i * 8}%`,
                    left: `${-20 + i * 25}%`,
                    width: `${150 + i * 50}px`,
                    opacity: 0.8,
                    animation: `drift ${40 + i * 10}s linear infinite`,
                    zIndex: 2,
                }}>
                    <svg viewBox="0 0 100 40" fill="white" filter="drop-shadow(0 5px 10px rgba(0,0,0,0.1))">
                        <path d="M10,30 C10,20 25,15 35,22 C40,10 60,10 70,22 C85,15 95,25 90,35 L10,35 Z" />
                    </svg>
                </div>
            ))}

            {/* Mountains on the Island */}
            <div style={{
                position: 'absolute',
                bottom: '50%',
                right: '5%',
                width: 'clamp(300px, 50vw, 600px)',
                zIndex: 3,
                animation: 'island-bob 8s ease-in-out infinite',
            }}>
                <svg viewBox="0 0 500 250" style={{ width: '100%' }}>
                    {/* Distant Mountain */}
                    <path d="M50,200 L150,50 L250,200 Z" fill="#4a5d6e" />
                    {/* Main Mountain */}
                    <path d="M150,200 L300,20 L450,200 Z" fill="#5c7a8c" />
                    {/* Island Base (Greenery) */}
                    <path d="M0,250 C50,220 150,190 250,200 C350,210 450,230 500,250 L0,250 Z" fill="#2d5a27" />
                    <path d="M50,230 C100,210 200,190 300,200 C400,210 450,230 480,240" fill="#3d8b37" opacity="0.6" />
                    {/* Beach */}
                    <path d="M0,250 L500,250 L480,240 C350,220 150,220 20,240 Z" fill="#f0e68c" />
                </svg>
            </div>

            {/* Multi-layered Waves */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '200%',
                height: '50%',
                zIndex: 5,
                pointerEvents: 'none',
            }}>
                {/* Back Wave */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.4,
                    animation: 'wave-move 15s linear infinite',
                }}>
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '100px' }}>
                        <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z" fill="#005a8d" />
                    </svg>
                </div>
                {/* Middle Wave */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '-20%',
                    width: '100%',
                    height: '100%',
                    opacity: 0.6,
                    animation: 'wave-move 10s linear infinite reverse',
                }}>
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '120px' }}>
                        <path d="M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50 L1000,100 L0,100 Z" fill="#0077be" />
                    </svg>
                </div>
                {/* Front Wave */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.8,
                    animation: 'wave-move 7s linear infinite',
                }}>
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '140px' }}>
                        <path d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 L1200,100 L0,100 Z" fill="#5df0e8" />
                    </svg>
                </div>
            </div>

            {/* Research Ship */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '10%',
                zIndex: 10,
                pointerEvents: 'none',
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                animation: 'ship-bob 5s ease-in-out infinite',
            }}>
                <ResearchShip />
            </div>

            {/* HUD Status Elements */}
            <div style={{
                position: 'absolute',
                top: 'clamp(20px, 5vh, 40px)',
                left: 'clamp(20px, 5vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                zIndex: 20,
            }}>
                <div className="cinzel" style={{
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                    color: '#004a7c',
                    fontWeight: 'bold',
                    letterSpacing: '0.1rem',
                }}>
                    DEPTH: 0m — THE SURFACE
                </div>
                <div style={{
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    color: '#004a7c',
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.05rem',
                }}>
                    <span style={{ animation: 'blink 1.5s step-end infinite' }}>📡</span>
                    DIVER ONE — TRANSMISSION OPEN
                </div>
                <div className="cinzel" style={{
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    color: '#004a7c',
                    fontWeight: 'bold',
                    letterSpacing: '0.1rem',
                }}>
                    REPORTER: KENT PAULO DELGADO
                </div>
            </div>

            {/* Main Title Container */}
            <div style={{
                textAlign: 'center',
                zIndex: 15,
                padding: '0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
            }}>
                <h1 className="cinzel" style={{
                    fontSize: 'clamp(2.5rem, 12vw, 7.5rem)',
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(255, 255, 255, 0.4)',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '0.2rem',
                }}>
                    THE DEEP DIVE
                </h1>
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    letterSpacing: 'clamp(0.2rem, 1.5vw, 0.5rem)',
                    color: '#004a7c',
                    textTransform: 'uppercase',
                    fontSize: 'clamp(0.7rem, 2.5vw, 1.1rem)',
                    margin: 0,
                }}>
                    An Expedition into Aquatic Ecosystems
                </p>

                {/* Narration Box */}
                <div style={{
                    marginTop: '3.5rem',
                    width: '100%',
                    maxWidth: '650px',
                    padding: '1.8rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderLeft: '4px solid #0077be',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'left',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}>
                    <p style={{
                        fontFamily: "'Cinzel', serif",
                        color: '#002a45',
                        fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)',
                        lineHeight: '1.7',
                        margin: 0,
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                    }}>
                        "This is Diver One, descending now. Below the surface lies a world most people never see — ancient, vast, and more alive than anywhere on land. Your mission: understand it before it's gone."
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes sun-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.9; }
                }
                @keyframes drift {
                    from { transform: translateX(-20vw); }
                    to { transform: translateX(120vw); }
                }
                @keyframes island-bob {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes ship-bob {
                    0%, 100% { transform: translateY(0) rotate(-1deg); }
                    50% { transform: translateY(-8px) rotate(1deg); }
                }
                @keyframes wave-move {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default SurfaceSection;
