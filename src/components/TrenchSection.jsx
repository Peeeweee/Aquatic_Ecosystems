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

const TrenchSection = () => {
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
                    fontFamily: 'monospace',
                    color: 'rgba(255, 200, 200, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    <span style={{ color: '#ff4d4d', marginRight: '10px' }}>[01:02:18]</span>
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

            {/* Closing Statement */}
            <div style={{ margin: 'clamp(4rem, 15vh, 8rem) 0 4rem 0', textAlign: 'center', zIndex: 5, padding: '0 20px' }}>
                <h2 className="cinzel" style={{
                    fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                    color: '#5df0e8',
                    textShadow: '0 0 20px rgba(93, 240, 232, 0.5)',
                    animation: 'teal-pulse 4s infinite ease-in-out',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}>
                    "The deeper we go, the more we find — and the more we stand to lose."
                </h2>
            </div>

            {/* Sources Toggle */}
            <div style={{ zIndex: 5, textAlign: 'center', marginBottom: '4rem', width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
                <button
                    onClick={() => setShowSources(!showSources)}
                    style={{
                        background: 'none',
                        border: '1px solid rgba(93, 240, 232, 0.3)',
                        color: '#5df0e8',
                        padding: '0.8rem 1.5rem',
                        cursor: 'pointer',
                        fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                        fontFamily: 'Inter, sans-serif',
                        borderRadius: '4px',
                        marginBottom: '1.5rem',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {showSources ? 'Hide Sources ↑' : 'View Sources ↓'}
                </button>

                {showSources && (
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'left',
                        fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)',
                        color: 'rgba(255, 255, 255, 0.6)',
                        padding: '1.5rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        lineHeight: '1.6',
                    }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>WWF (2020). Living Planet Report 2020.</li>
                            <li style={{ marginBottom: '0.5rem' }}>NOAA (2023). Gulf of Mexico Hypoxic Zone.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Miller, G.T. & Spoolman, S. (2012). Living in the Environment.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Odum, E.P. & Barrett, G.W. (2004). Fundamentals of Ecology.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Castro, P. & Huber, M.E. (2019). Marine Biology, 11th ed.</li>
                            <li>Cunningham, W.P. & Cunningham, M.A. (2017). Principles of Environmental Science.</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Return to Surface Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cinzel"
                style={{
                    padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 5vw, 3rem)',
                    fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
                    background: 'none',
                    border: '2px solid #5df0e8',
                    color: '#5df0e8',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    boxShadow: '0 0 15px rgba(93, 240, 232, 0.2)',
                    transition: 'all 0.3s ease',
                    zIndex: 5,
                    marginBottom: '5rem',
                }}
            >
                ↑ RETURN TO SURFACE
            </button>

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
