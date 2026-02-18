import React from 'react';

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
        }}>
            {/* Sunlight Rays Animation */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                opacity: 0.6,
                pointerEvents: 'none',
                animation: 'pulse-opacity 4s ease-in-out infinite',
                zIndex: 1,
            }} />

            {/* Cloud Layer 1 (Back, slow) */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '-20%',
                width: '250px',
                opacity: 0.4,
                animation: 'drift 60s linear infinite',
                zIndex: 2,
            }}>
                <svg viewBox="0 0 100 40" fill="white">
                    <path d="M10,30 Q15,20 25,25 T40,20 T55,25 T75,20 T90,30 Z" />
                </svg>
            </div>

            {/* Cloud Layer 2 (Front, faster) */}
            <div style={{
                position: 'absolute',
                top: '25%',
                left: '-30%',
                width: '350px',
                opacity: 0.6,
                animation: 'drift 45s linear infinite reverse',
                zIndex: 2,
            }}>
                <svg viewBox="0 0 100 40" fill="white">
                    <path d="M5,35 Q15,25 30,30 T50,25 T70,30 T95,35 Z" />
                </svg>
            </div>

            {/* Distant Island Silhouette */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '10%',
                width: 'clamp(200px, 40vw, 500px)',
                opacity: 0.8,
                zIndex: 3,
                animation: 'island-bob 6s ease-in-out infinite',
                filter: 'drop-shadow(0 0 20px rgba(0, 40, 60, 0.5))',
            }}>
                <svg viewBox="0 0 500 200" style={{ width: '100%' }}>
                    {/* Darker base */}
                    <path d="M0,200 L500,200 L450,180 Q400,160 350,170 T250,140 T150,160 T50,185 Z" fill="#001a2d" />
                    {/* Highlights */}
                    <path d="M50,185 Q100,170 150,160 T250,140 T350,170 T450,180" fill="none" stroke="rgba(93, 240, 232, 0.2)" strokeWidth="2" />
                </svg>
            </div>

            {/* Shimmer Line (Water Surface) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(93, 240, 232, 0.6), transparent)',
                boxShadow: '0 0 15px rgba(93, 240, 232, 0.3)',
                animation: 'shimmer-sweep 10s linear infinite',
                zIndex: 4,
            }} />

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
                    color: '#5df0e8',
                    opacity: 1,
                    letterSpacing: '0.1rem',
                    textShadow: '0 0 12px rgba(0, 13, 26, 0.8), 0 0 2px rgba(0, 0, 0, 0.5)',
                }}>
                    DEPTH: 0m — THE SURFACE
                </div>
                <div style={{
                    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                    color: 'white',
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
                    color: '#5df0e8',
                    opacity: 1,
                    letterSpacing: '0.1rem',
                    textShadow: '0 0 10px rgba(0, 13, 26, 0.8)',
                }}>
                    REPORTER: KENT PAULO DELGADO
                </div>
            </div>

            {/* Main Title Container */}
            <div style={{
                textAlign: 'center',
                zIndex: 10,
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
                    textShadow: '0 0 30px rgba(93, 240, 232, 0.5), 0 0 60px rgba(0, 102, 204, 0.3)',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '0.2rem',
                }}>
                    THE DEEP DIVE
                </h1>
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    letterSpacing: 'clamp(0.2rem, 1.5vw, 0.5rem)',
                    color: 'rgba(255, 255, 255, 0.9)',
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
                    backgroundColor: 'rgba(0, 13, 26, 0.75)',
                    borderLeft: '4px solid #5df0e8',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'left',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}>
                    <p style={{
                        fontFamily: "'Cinzel', serif",
                        color: 'rgba(255, 255, 255, 0.95)',
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
                @keyframes pulse-opacity {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                @keyframes drift {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(150vw); }
                }
                @keyframes island-bob {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-5px) rotate(0.5deg); }
                }
                @keyframes shimmer-sweep {
                    0% { transform: translateX(-100%) translateY(-50%); }
                    100% { transform: translateX(100%) translateY(-50%); }
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
