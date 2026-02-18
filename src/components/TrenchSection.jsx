import React, { useState } from 'react';
import { Snailfish } from './MarineLife';

const WarningPanel = ({ id, title, content, isOpen, onToggle }) => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: 'rgba(30, 0, 0, 0.4)',
            border: `1px solid ${isOpen ? '#ff4d4d' : 'rgba(150, 0, 0, 0.3)'}`,
            borderRadius: '4px',
            marginBottom: '1rem',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'max-height, opacity',
        }}>
            <button
                onClick={() => onToggle(id)}
                style={{
                    width: '100%',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                <div style={{
                    width: 'clamp(10px, 2vw, 12px)',
                    height: 'clamp(10px, 2vw, 12px)',
                    backgroundColor: '#ff4d4d',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px #ff4d4d',
                    animation: 'alert-pulse 1.5s infinite',
                    flexShrink: 0,
                }} />
                <h3 className="cinzel" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', margin: 0, letterSpacing: '0.1rem', color: isOpen ? '#ff4d4d' : 'white' }}>
                    {title}
                </h3>
                <span style={{ marginLeft: 'auto', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.4s', fontSize: '1.2rem' }}>
                    ↓
                </span>
            </button>

            <div style={{
                maxHeight: isOpen ? '500px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.5s ease',
            }}>
                <div style={{
                    padding: '0 1.5rem 1.5rem clamp(2rem, 8vw, 3.2rem)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.6'
                }}>
                    {content}
                </div>
            </div>
        </div>
    );
};

const TrenchSection = ({ onReturn }) => {
    const [openPanel, setOpenPanel] = useState(null);
    const [showSources, setShowSources] = useState(false);

    const threats = [
        {
            id: 0,
            title: '🏭 Water Pollution',
            content: 'Industrial waste, sewage, plastics, and oil spills contaminate aquatic environments. Real example: Pasig River, Philippines — once declared biologically dead, it serves as a stark reminder of the consequences of uncontrolled waste disposal.'
        },
        {
            id: 1,
            title: '🌿 Eutrophication',
            content: 'Fertilizer runoff leads to nutrient overloads, causing algal blooms that deplete oxygen. Real example: The Gulf of Mexico Dead Zone, spanning 6,000–7,000 square miles.'
        },
        {
            id: 2,
            title: '🌡️ Climate Change',
            content: 'Rising temperatures lower dissolved oxygen levels, while ocean acidification dissolves coral skeletons. Real example: The Great Barrier Reef, suffering mass coral bleaching.'
        },
        {
            id: 3,
            title: '🎣 Overfishing',
            content: 'The removal of apex predators collapses entire food webs. Real example: Populations of tuna and sharks have plummeted by over 90% since industrial fishing began.'
        },
        {
            id: 4,
            title: '🦀 Invasive Species',
            content: 'Non-native organisms outcompete local species and destroy balance. Real example: Golden apple snails in Philippine freshwater rice ecosystems.'
        }
    ];

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
            overflow: 'hidden',
        }}>
            {/* Emergency Red Pulse Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, transparent 70%, rgba(255, 0, 0, 0.05) 100%)',
                animation: 'emergency-glow 4s infinite ease-in-out',
                pointerEvents: 'none',
                zIndex: 1,
            }} />

            {/* Specialized Marine Life */}
            <Snailfish top="10%" speed={40} delay={0} />
            <Snailfish top="40%" speed={35} delay={5} />
            <Snailfish top="80%" speed={45} delay={2} />

            {/* Diver Narration */}
            <div style={{
                width: '100%',
                maxWidth: '800px',
                padding: '1.5rem',
                backgroundColor: 'rgba(20, 0, 0, 0.6)',
                borderLeft: '4px solid #ff4d4d',
                backdropFilter: 'blur(5px)',
                marginBottom: '4rem',
                alignSelf: 'flex-start',
                zIndex: 5,
                border: '1px solid rgba(255, 77, 77, 0.2)',
            }}>
                <p style={{
                    fontFamily: "'Cinzel', serif",
                    color: 'rgba(255, 200, 200, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    "Something's wrong down here. The trench should be untouched. But even here, we've found plastic bags. Microplastics. The fingerprints of human destruction reach even this deep. <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>[SIGNAL DEGRADING]</span>"
                </p>
            </div>

            <h2 className="cinzel" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center', color: '#ff4d4d', zIndex: 5 }}>
                THREATS TO AQUATIC ECOSYSTEMS
            </h2>

            {/* Warning Panels Container */}
            <div style={{ width: '100%', maxWidth: '850px', zIndex: 5 }}>
                {threats.map((threat) => (
                    <WarningPanel
                        key={threat.id}
                        id={threat.id}
                        title={threat.title}
                        content={threat.content}
                        isOpen={openPanel === threat.id}
                        onToggle={(id) => setOpenPanel(openPanel === id ? null : id)}
                    />
                ))}
            </div>

            {/* Final Quote Refinement */}
            <div style={{
                textAlign: 'center',
                maxWidth: '900px',
                marginBottom: '5rem',
                transform: 'translateY(0)',
                opacity: 0.9,
                transition: 'all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)',
                zIndex: 5
            }}>
                <blockquote style={{ margin: 0, position: 'relative' }}>
                    <h2 className="cinzel" style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        color: 'white',
                        lineHeight: '1.4',
                        textShadow: '0 0 20px rgba(93, 240, 232, 0.3)',
                        fontWeight: 'lighter',
                    }}>
                        "The deeper we go, the more we find — <br />
                        <span style={{ color: 'var(--teal)' }}>and the more we stand to lose."</span>
                    </h2>
                </blockquote>
            </div>

            {/* Redesigned Sources Area */}
            <div style={{ zIndex: 5, textAlign: 'center', width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
                <button
                    onClick={() => setShowSources(!showSources)}
                    className="interactive-element cinzel"
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(93, 240, 232, 0.3)',
                        color: 'rgba(255, 255, 255, 0.6)',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.1em',
                        marginBottom: '2rem'
                    }}
                >
                    {showSources ? 'HIDE DOCUMENTATION ↓' : 'VIEW SOURCES & DATA ↑'}
                </button>

                {showSources && (
                    <div className="glass-morphism" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '3rem 2rem',
                        borderRadius: '8px',
                        width: '100%',
                        animation: 'fadeIn 0.5s ease-out',
                        textAlign: 'left'
                    }}>
                        <div className="scanline" />
                        <h4 className="cinzel" style={{ fontSize: '0.9rem', color: 'var(--teal)', marginBottom: '2rem', textAlign: 'center' }}>Scientific References</h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth < 600 ? '1fr' : '1fr 1fr',
                            gap: '1.5rem',
                            fontSize: '0.75rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {[
                                "WWF (2020). Living Planet Report 2020.",
                                "NOAA (2023). Gulf of Mexico Hypoxic Zone.",
                                "Miller, G.T. & Spoolman, S.E. (2012). Living in the Environment.",
                                "Odum, E.P. & Barrett, G.W. (2004). Fundamentals of Ecology.",
                                "Castro, P. & Huber, M.E. (2019). Marine Biology, 11th ed.",
                                "Cunningham, W.P. & M.A. (2017). Principles of Environmental Science."
                            ].map((source, i) => (
                                <div key={i} style={{ borderLeft: '1px solid var(--teal)', paddingLeft: '1rem' }}>
                                    {source}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Return to Surface Button */}
            <div style={{ marginTop: '6rem', marginBottom: '5rem', textAlign: 'center' }}>
                <button
                    onClick={(e) => { e.stopPropagation(); if (onReturn) onReturn(); else window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="interactive-element cinzel"
                    style={{
                        background: 'rgba(93, 240, 232, 0.1)',
                        border: '2px solid var(--teal)',
                        color: 'white',
                        padding: '2rem',
                        borderRadius: '50%',
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        boxShadow: '0 0 30px rgba(93, 240, 232, 0.2)',
                        gap: '8px'
                    }}
                >
                    <span style={{ fontSize: '2rem' }}>⚓</span>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.1rem' }}>ASCEND</span>
                </button>
            </div>

            <style>{`
                @keyframes alert-pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.4); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes emergency-glow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.9; }
                }
                @keyframes teal-pulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.02); }
                }
            `}</style>
        </div>
    );
};

export default TrenchSection;
