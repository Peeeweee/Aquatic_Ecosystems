import React, { useState, useEffect } from 'react';
import { Jellyfish, BigFauna } from './MarineLife';

const FlipCard = ({ id, front, back, isFlipped, onFlip }) => {
    return (
        <div
            onClick={() => onFlip(id)}
            style={{
                flex: '1 1 300px',
                maxWidth: '400px',
                height: 'clamp(350px, 60vh, 450px)',
                perspective: '1000px',
                cursor: 'pointer',
                willChange: 'transform',
            }}
        >
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
            }}>
                {/* Front Face */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'rgba(0, 40, 60, 0.6)',
                    border: '1px solid rgba(93, 240, 232, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                }}>
                    <div style={{ fontSize: 'clamp(3rem, 10vw, 4rem)', marginBottom: '1rem' }}>{front.emoji}</div>
                    <h3 className="cinzel" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: '#5df0e8', margin: '0.5rem 0' }}>{front.name}</h3>
                    <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                        "{front.teaser}"
                    </p>
                    <div style={{ marginTop: '2rem', fontSize: '0.7rem', color: '#5df0e8', opacity: 0.6, letterSpacing: '0.1rem' }}>CLICK TO DECRYPT</div>
                </div>

                {/* Back Face */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'rgba(0, 60, 80, 0.9)',
                    border: '2px solid #5df0e8',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '1.5rem',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    transform: 'rotateY(180deg)',
                    textAlign: 'left',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                }}>
                    <div style={{ width: '100%', fontSize: '0.6rem', color: '#5df0e8', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        GREEK: {back.origin}
                    </div>
                    <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', lineHeight: '1.5', margin: '0 0 1rem 0' }}>{back.definition}</p>
                    <div style={{ width: '100%', fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)', color: 'rgba(255,255,255,0.7)' }}>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                            {back.points.map((p, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>{p}</li>)}
                        </ul>
                    </div>
                    <div style={{
                        marginTop: 'auto',
                        padding: '10px',
                        width: '100%',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(93, 240, 232, 0.1)',
                        border: '1px solid rgba(93, 240, 232, 0.3)',
                        fontSize: '0.7rem',
                        color: '#5df0e8'
                    }}>
                        <strong>GLOWING FACT:</strong> {back.fact}
                    </div>
                </div>
            </div>
        </div>
    );
};

const MidnightSection = () => {
    const [flipStates, setFlipStates] = useState([false, false, false]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 2 + Math.random() * 3,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4,
        }));
        setParticles(newParticles);
    }, []);

    const handleFlip = (id) => {
        setFlipStates(prev => {
            const next = [...prev];
            next[id] = !next[id];
            return next;
        });
    };

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: 'clamp(40px, 10vh, 100px) 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            position: 'relative',
        }}>
            {/* Ambient Whales (Silhouettes) */}
            <BigFauna type="whale" top="15%" speed={45} delay={0} opacity={0.15} />
            <BigFauna type="whale" top="65%" speed={50} delay={10} opacity={0.1} />

            {/* Bioluminescent Jellyfish */}
            <Jellyfish style={{ left: '10%', top: '25%', animationDelay: '0s' }} />
            <Jellyfish style={{ left: '85%', top: '40%', animationDelay: '2s' }} />
            <Jellyfish style={{ left: '20%', top: '70%', animationDelay: '4s' }} />
            <Jellyfish style={{ left: '75%', top: '15%', animationDelay: '1s' }} />
            <Jellyfish style={{ left: '45%', top: '80%', animationDelay: '3.5s' }} />
            {/* Bioluminescence Particles */}
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: '#5df0e8',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px #5df0e8, 0 0 20px #5df0e8',
                    opacity: 0.6,
                    animation: `biolume ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    pointerEvents: 'none',
                    willChange: 'opacity, transform',
                }} />
            ))}

            <div style={{
                width: '100%',
                maxWidth: '800px',
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 13, 26, 0.8)',
                borderLeft: '4px solid #5df0e8',
                backdropFilter: 'blur(5px)',
                marginBottom: '4rem',
                alignSelf: 'flex-start',
                zIndex: 10,
            }}>
                <p style={{
                    fontFamily: "'Cinzel', serif",
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    "Total darkness now. But life is everywhere — just a different kind. Down here, what matters isn't what you look like. It's how you move, where you live, and how you eat."
                </p>
            </div>

            <h2 className="cinzel" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center', zIndex: 10 }}>
                3 Ecological Categories of Organisms
            </h2>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px',
                justifyContent: 'center',
                zIndex: 10,
            }}>
                <FlipCard
                    id={0}
                    isFlipped={flipStates[0]}
                    onFlip={handleFlip}
                    front={{ emoji: '🔵', name: 'PLANKTON', teaser: 'They drift. They have no choice.' }}
                    back={{
                        origin: 'planktos = "wandering"',
                        definition: 'Organisms that cannot swim against the current. They drift with the water.',
                        points: [
                            'Phytoplankton: Produce 50% of Earth\'s oxygen.',
                            'Zooplankton: Link to larger animals.',
                            'Examples: Diatoms, krill, fish eggs.'
                        ],
                        fact: 'Phytoplankton produce more oxygen than all forests combined.'
                    }}
                />
                <FlipCard
                    id={1}
                    isFlipped={flipStates[1]}
                    onFlip={handleFlip}
                    front={{ emoji: '🐋', name: 'NEKTON', teaser: 'They swim. They choose.' }}
                    back={{
                        origin: 'nektos = "swimming"',
                        definition: 'Organisms that can swim actively against currents. They control their position.',
                        points: [
                            'Sub-groups: Fish, Marine mammals, Reptiles, Cephalopods.',
                            'Examples: Tuna, sharks, whales, salmon, squid.'
                        ],
                        fact: 'Remove apex nekton and the entire food web collapses.'
                    }}
                />
                <FlipCard
                    id={2}
                    isFlipped={flipStates[2]}
                    onFlip={handleFlip}
                    front={{ emoji: '🪨', name: 'BENTHOS', teaser: 'They stay. The bottom is their world.' }}
                    back={{
                        origin: 'benthos = "depths of the sea"',
                        definition: 'Bottom-dwellers. They live on or in the ocean floor.',
                        points: [
                            'Sessile: Sponges, oysters, coral.',
                            'Burrowers: Clams, worms, shrimp.',
                            'Crawlers: Crabs, lobsters, sea stars.'
                        ],
                        fact: 'One oyster filters up to 50 gallons of water per day.'
                    }}
                />
            </div>

            <div style={{
                marginTop: 'auto',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                textAlign: 'center',
                padding: '3rem 0',
                zIndex: 10,
            }}>
                Citation: Castro, P. & Huber, M.E. (2019). Marine Biology, 11th ed. McGraw-Hill Education.
            </div>

            <style>{`
                @keyframes biolume {
                    0%, 100% { opacity: 0.1; transform: scale(0.8); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
            `}</style>
        </div>
    );
};

export default MidnightSection;
