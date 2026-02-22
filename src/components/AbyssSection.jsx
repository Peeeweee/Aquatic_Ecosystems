import React, { useState } from 'react';
import { Anglerfish, Octopus } from './MarineLife';

const AbyssSection = () => {
    const [ecosystem, setEcosystem] = useState('freshwater');
    const [openZones, setOpenZones] = useState([]);

    const freshwaterZones = [
        { name: 'Littoral', color: '#1a7aab', depth: 'Shallow', desc: 'The bright, busy edges — where sunlight hits and life thrives most visibly. (The part where you can still see the bottom and plants are rooted)' },
        { name: 'Limnetic', color: '#145e87', depth: 'Open', desc: 'The open middle — still lit, still alive, but dominated by drifters like plankton. (The open water surface away from shore, where you\'d be swimming or boating)' },
        { name: 'Profundal', color: '#0d4463', depth: 'Deep', desc: 'Where sunlight gives up. Dark, cold, and quiet — only decomposers make it here. (Below the point where light stops reaching — the dark middle depths)' },
        { name: 'Benthic', color: '#0b4a6b', depth: 'Bottom', desc: 'The floor — where everything that sinks ends up, and nothing goes to waste. (Literally the mud and sediment at the very bottom)' },
    ];

    const marineZones = [
        { name: 'Intertidal', color: '#1a7aab', depth: 'Tide-line', desc: 'The edge between two worlds — organisms here survive being dry half the time. (The wet rocks and sand you walk on at the beach)' },
        { name: 'Neritic', color: '#0f5e87', depth: 'Shelf', desc: 'Shallow, sunlit, and rich — this is where coral reefs and kelp forests call home. (Shallow enough to snorkel or dive — you can still see the seafloor)' },
        { name: 'Oceanic', color: '#083d5e', depth: 'Open', desc: 'Beyond the shelf, it goes deep — from sunlit surface all the way to crushing darkness. (Way out in open water where the bottom is unreachable)' },
        { name: 'Benthic', color: '#073a57', depth: 'Floor', desc: 'The deep ocean floor — home to creatures that look like they shouldn\'t exist. (The very bottom — pitch black, extreme pressure, no light)' },
    ];

    const currentZones = ecosystem === 'freshwater' ? freshwaterZones : marineZones;

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
            {/* Diver Narration */}
            <div style={{
                width: '100%',
                maxWidth: '800px',
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 13, 26, 0.7)',
                borderLeft: '4px solid #5df0e8',
                backdropFilter: 'blur(5px)',
                marginBottom: '3rem',
                alignSelf: 'flex-start',
            }}>
                <p style={{
                    fontFamily: "'Cinzel', serif",
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    "The abyss. Pressure here would crush an unprotected human. Yet life organized itself into layers — each zone its own world, each with its own rules."
                </p>
            </div>

            <h2 className="cinzel" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '2rem', textAlign: 'center' }}>
                Zones of Aquatic Ecosystems
            </h2>

            {/* Toggle Buttons */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '3rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '0.5rem',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <button
                    onClick={() => { setEcosystem('freshwater'); setOpenZones([]); }}
                    style={{
                        padding: 'clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)',
                        borderRadius: '25px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: ecosystem === 'freshwater' ? '#5df0e8' : 'transparent',
                        color: ecosystem === 'freshwater' ? '#001a2d' : 'white',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        boxShadow: ecosystem === 'freshwater' ? '0 0 15px #5df0e8' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                    }}
                >
                    🏞️ Freshwater
                </button>
                <button
                    onClick={() => { setEcosystem('marine'); setOpenZones([]); }}
                    style={{
                        padding: 'clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)',
                        borderRadius: '25px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: ecosystem === 'marine' ? '#5df0e8' : 'transparent',
                        color: ecosystem === 'marine' ? '#001a2d' : 'white',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        boxShadow: ecosystem === 'marine' ? '0 0 15px #5df0e8' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                    }}
                >
                    🌊 Marine
                </button>
            </div>

            {/* Diagram Container */}
            <div style={{
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}>
                {currentZones.map((zone, index) => {
                    const isOpen = openZones.includes(index);

                    const toggleZone = () => {
                        setOpenZones(prev =>
                            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
                        );
                    };

                    return (
                        <div
                            key={`${ecosystem}-${index}`}
                            onClick={toggleZone}
                            style={{
                                backgroundColor: zone.color,
                                padding: 'clamp(1rem, 3vw, 1.5rem) 2rem',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                position: 'relative',
                                borderLeft: isOpen ? '6px solid #5df0e8' : '0px solid transparent',
                                willChange: 'border-left-width, background-color',
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <h3 className="cinzel" style={{ margin: 0, fontSize: 'clamp(1rem, 3vw, 1.4rem)', letterSpacing: '0.1rem' }}>
                                    {zone.name}
                                </h3>
                                <span style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontWeight: 'bold', opacity: 0.7, letterSpacing: '0.05rem' }}>
                                    {zone.depth}
                                </span>
                            </div>

                            <div style={{
                                maxHeight: isOpen ? '400px' : '0',
                                opacity: isOpen ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.5s ease',
                                willChange: 'max-height, opacity',
                            }}>
                                <p style={{
                                    marginTop: '1.5rem',
                                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                    lineHeight: '1.6',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    maxWidth: '600px',
                                }}>
                                    {zone.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Specialized Marine Life (Marine Only) */}
            {ecosystem === 'marine' && (
                <>
                    <Anglerfish top="20%" speed={40} delay={0} />
                    <Anglerfish top="70%" speed={35} delay={5} />
                    <Octopus type="dumbo" top="40%" speed={30} delay={2} />
                </>
            )}

            {/* Footnote */}
            <div style={{
                marginTop: 'auto',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                fontStyle: 'italic',
                padding: '3rem 0',
            }}>
                Citation: Cunningham, W.P. & Cunningham, M.A. (2017). Principles of Environmental Science. McGraw-Hill.
            </div>
        </div>
    );
};

export default AbyssSection;
