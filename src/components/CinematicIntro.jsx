import React, { useState, useEffect, useRef } from 'react';
import { Submarine } from './MarineLife';

// Sounds can be replaced with actual underwater SFX urls
const AMBIENT_SOUND = "https://www.soundjay.com/nature/sounds/underwater-ambience-1.mp3";
const SONAR_SOUND = "https://www.soundjay.com/mechanical/sounds/metal-detecting-1.mp3";
const THUD_SOUND = "https://www.soundjay.com/nature/sounds/paper-slap-1.mp3"; // Or a heavy thud

const RadarAnimation = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, rgba(0, 40, 80, 0.4) 0%, rgba(0, 0, 0, 1) 100%)',
            boxShadow: '0 0 50px rgba(0, 120, 255, 0.3)',
            zIndex: 10
        }}>
            {/* Concentric Circles */}
            <div style={{ position: 'absolute', width: '75%', height: '75%', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
            <div style={{ position: 'absolute', width: '50%', height: '50%', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
            <div style={{ position: 'absolute', width: '25%', height: '25%', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>

            {/* Ripple Effects */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(0, 120, 255, 0.4)', animation: 'radar-ripple 2s linear infinite' }}></div>
            <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(0, 120, 255, 0.2)', animation: 'radar-ripple 2s linear infinite 1s' }}></div>

            {/* Crosshairs */}
            <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
            <div style={{ position: 'absolute', height: '100%', width: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>

            {/* Sweeping Arm */}
            <div style={{
                position: 'absolute',
                width: '50%',
                height: '50%',
                top: 0,
                left: '50%',
                transformOrigin: 'bottom left',
                background: 'linear-gradient(45deg, rgba(0, 120, 255, 0.8) 0%, transparent 70%)',
                animation: 'radar-sweep 4s linear infinite',
                borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)'
            }}></div>

            {/* Blips */}
            <div className="radar-blip" style={{ position: 'absolute', top: '30%', left: '70%', width: '6px', height: '6px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white', animation: 'blip-fade 4s linear infinite' }}></div>
            <div className="radar-blip" style={{ position: 'absolute', top: '60%', left: '40%', width: '4px', height: '4px', background: 'white', borderRadius: '50%', boxShadow: '0 0 8px white', animation: 'blip-fade 4s linear infinite 1s' }}></div>
            <div className="radar-blip" style={{ position: 'absolute', top: '20%', left: '30%', width: '5px', height: '5px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white', animation: 'blip-fade 4s linear infinite 2.5s' }}></div>
        </div>
    );
};

const CinematicIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('WAITING'); // WAITING -> RADAR_TICKING -> DOSSIER -> CLASSIFIED -> WATER_TRANSITION -> SUBMARINE_PASS -> COMPLETE
    const [depth, setDepth] = useState(11000); // Start at bottom, tick up to 0M

    const audioAmbientRef = useRef(null);
    const audioSonarRef = useRef(null);
    const audioThudRef = useRef(null);

    useEffect(() => {
        const handleInteraction = (e) => {
            if (phase === 'WAITING' && ((e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) || e.type === 'click')) {
                setPhase('RADAR_TICKING');
            }
        };

        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('click', handleInteraction);
        return () => {
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('click', handleInteraction);
        };
    }, [phase]);

    useEffect(() => {
        if (phase !== 'RADAR_TICKING') return;

        // 1. Play sounds
        if (audioAmbientRef.current) {
            audioAmbientRef.current.volume = 0.5;
            audioAmbientRef.current.play().catch(e => console.log('Autoplay blocked', e));
        }

        // 2. Start Depth Ticker
        const tickDuration = 10000; // 10 seconds to tick down to 0
        const startDepth = 11000;
        const intervalTime = 50; // ms per tick update
        let currentDepth = startDepth;
        const decrement = startDepth / (tickDuration / intervalTime);

        const ticker = setInterval(() => {
            currentDepth -= decrement;
            if (currentDepth <= 0) {
                setDepth(0);
                clearInterval(ticker);
                // Phase 1 -> 2: Tick done
                setTimeout(() => setPhase('DOSSIER'), 500);
            } else {
                setDepth(Math.floor(currentDepth));
                // Play faint sonar ping occasionally during tick down
                if (Math.random() > 0.95 && audioSonarRef.current) {
                    audioSonarRef.current.currentTime = 0;
                    audioSonarRef.current.volume = 0.2;
                    audioSonarRef.current.play().catch(e => console.log('Autoplay blocked'));
                }
            }
        }, intervalTime);

        // Sequence timelines after DOSSIER phase
        return () => clearInterval(ticker);
    }, [phase]);

    useEffect(() => {
        if (phase === 'DOSSIER') {
            // Phase 2 -> 3: Show CLASSIFIED stamp
            setTimeout(() => {
                setPhase('CLASSIFIED');
                if (audioThudRef.current) {
                    audioThudRef.current.volume = 0.8;
                    audioThudRef.current.play().catch(e => console.log('Autoplay blocked'));
                }
            }, 2000);
        } else if (phase === 'CLASSIFIED') {
            // Phase 3 -> 4: Begin dissolve into water
            setTimeout(() => {
                setPhase('WATER_TRANSITION');
            }, 1500);
        } else if (phase === 'WATER_TRANSITION') {
            // Phase 4 -> 5: Submarine passes by
            setTimeout(() => {
                setPhase('SUBMARINE_PASS');
            }, 3000);
        } else if (phase === 'SUBMARINE_PASS') {
            // Phase 5 -> 6: Complete sequence, fade overlay out
            setTimeout(() => {
                setPhase('COMPLETE');
                setTimeout(() => onComplete(), 1000); // Tell parent to mount app
            }, 4000); // Wait for sub to fully pass
        }
    }, [phase, onComplete]);


    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: phase === 'WAITING' || phase === 'RADAR_TICKING' || phase === 'BLACK_SCREEN' || phase === 'DOSSIER' || phase === 'CLASSIFIED' ? '#000' :
                (phase === 'WATER_TRANSITION' || phase === 'SUBMARINE_PASS' || phase === 'COMPLETE') ? '#0778a0' : '#000', // Transitions to cerulean
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontFamily: 'Courier, monospace',
            overflow: 'hidden',
            transition: 'background-color 2s ease-in-out, opacity 1s ease-out',
            opacity: phase === 'COMPLETE' ? 0 : 1, // Fade out entire container at the end
            pointerEvents: phase === 'COMPLETE' ? 'none' : 'auto'
        }}>
            {/* Audio tags */}
            <audio ref={audioAmbientRef} loop src={AMBIENT_SOUND} />
            <audio ref={audioSonarRef} src={SONAR_SOUND} />
            <audio ref={audioThudRef} src={THUD_SOUND} />

            {/* Depth Meter (Fixed CONSTANT element) */}
            {(phase === 'RADAR_TICKING' || phase === 'BLACK_SCREEN' || phase === 'DOSSIER' || phase === 'CLASSIFIED' || phase === 'WATER_TRANSITION' || phase === 'SUBMARINE_PASS') && (
                <div style={{
                    position: 'absolute',
                    right: '50px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 10000, // Always on top
                    opacity: (phase === 'RADAR_TICKING' && depth > 5000) ? 0.3 : 1, // Glow faint initially, gets brighter
                    transition: 'opacity 2s ease-in',
                    textShadow: '0 0 10px var(--teal)',
                    color: 'var(--teal)'
                }}>
                    <div style={{ width: '2px', height: '100px', backgroundColor: 'var(--teal)', opacity: 0.5 }}></div>
                    <div className="cinzel" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {depth}M
                    </div>
                    <div style={{ width: '2px', height: '100px', backgroundColor: 'var(--teal)', opacity: 0.5 }}></div>
                </div>
            )}


            {/* Waiting Message */}
            {phase === 'WAITING' && (
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.2rem',
                    letterSpacing: '2px',
                    opacity: 0.8,
                    animation: 'pulse 2s infinite'
                }}>
                    PRESS ENTER TO INITIATE SEQUENCE
                </div>
            )}

            {/* Main Content Area */}
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Radar Phase */}
                {phase === 'RADAR_TICKING' && <RadarAnimation />}

                {/* Flickering Light Effect for Dossier reveal */}
                {(phase === 'DOSSIER' || phase === 'CLASSIFIED') && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,1) 80%)',
                        animation: 'flicker 0.5s calc(infinity * 1s) steps(2, end)', // Replace with CSS anim later
                        pointerEvents: 'none',
                        zIndex: 5
                    }} />
                )}

                {/* Phase 2/3: Dossier Document */}
                <div style={{
                    width: '600px',
                    maxWidth: '90%',
                    backgroundColor: '#f4ecd8', // Worn paper color
                    color: '#1a1a1a',
                    padding: '40px',
                    borderRadius: '5px',
                    boxShadow: '0 0 50px rgba(255,255,255,0.1)',
                    position: 'relative',
                    zIndex: 10,
                    opacity: phase === 'DOSSIER' || phase === 'CLASSIFIED' ? 1 : 0,
                    transform: (phase === 'DOSSIER' || phase === 'CLASSIFIED') ? 'scale(1)' :
                        phase === 'WATER_TRANSITION' || phase === 'SUBMARINE_PASS' || phase === 'COMPLETE' ? 'scale(1.1)' : 'scale(0.9)',
                    transition: phase === 'WATER_TRANSITION' ? 'opacity 3s ease, transform 3s ease' : 'opacity 1s ease, transform 2s ease', // Dissolve transition
                    filter: phase === 'WATER_TRANSITION' ? 'blur(10px)' : 'none' // Ink bleeding effect
                }}>
                    {/* Paper Texture Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.4,
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"%3E%3C/rect%3E%3C/svg%3E")',
                        pointerEvents: 'none'
                    }}></div>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: '"Impact", "Arial Black", sans-serif', letterSpacing: '2px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
                        OPERATION: DEEP DIVE
                    </h2>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: 'bold' }}>
                        <p>SUBJECT &mdash; AQUATIC ECOSYSTEMS</p>
                        <p>STATUS  &mdash; ACTIVE</p>
                        <p>CLEARANCE &mdash; INITIATED</p>
                    </div>

                    {/* Classified Stamp */}
                    {phase === 'CLASSIFIED' && (
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            color: '#d92525',
                            border: '6px solid #d92525',
                            padding: '10px 20px',
                            fontSize: '3rem',
                            fontFamily: '"Impact", sans-serif',
                            transform: 'rotate(-15deg)',
                            opacity: 0.8,
                            animation: 'stamp-slam 0.2s cubic-bezier(0.1, 0.9, 0.2, 1) forwards'
                        }}>
                            CLASSIFIED
                        </div>
                    )}
                </div>

                {/* Phase 5: Submarine passing */}
                {(phase === 'SUBMARINE_PASS' || phase === 'COMPLETE') && (
                    <div style={{
                        position: 'absolute',
                        zIndex: 50,
                        top: '50%',
                        animation: 'sub-cross 4s linear forwards',
                        pointerEvents: 'none'
                    }}>
                        <Submarine style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,0,0.5))' }} />
                        {/* Trailing Bubbles */}
                        {[...Array(20)].map((_, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                right: `-100px`, // Start behind sub
                                top: `${Math.random() * 60 - 30}px`,
                                width: `${Math.random() * 15 + 5}px`,
                                height: `${Math.random() * 15 + 5}px`,
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '50%',
                                animation: `intro-bubble-trail ${Math.random() * 2 + 1}s linear ${Math.random() * 1}s forwards`,
                                opacity: 0
                            }} />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default CinematicIntro;
