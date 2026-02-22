import React, { useState } from 'react';
import { BigFauna, Octopus } from './MarineLife';

const AccordionCard = ({ title, icon, index, activeIndex, setActiveIndex, children }) => {
    const isOpen = activeIndex === index;

    return (
        <div style={{
            width: '100%',
            backgroundColor: 'rgba(0, 13, 26, 0.4)',
            border: `1px solid ${isOpen ? '#5df0e8' : 'rgba(93, 240, 232, 0.2)'}`,
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            marginBottom: '1rem',
            willChange: 'max-height, opacity',
        }}>
            <button
                onClick={() => setActiveIndex(isOpen ? null : index)}
                style={{
                    width: '100%',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>{icon}</span>
                    <h3 className="cinzel" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', margin: 0, color: isOpen ? '#5df0e8' : 'white' }}>
                        {title}
                    </h3>
                </div>
                <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.4s ease',
                    fontSize: '1.2rem',
                    color: '#5df0e8',
                }}>
                    ↓
                </span>
            </button>
            <div style={{
                maxHeight: isOpen ? '800px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid rgba(93, 240, 232, 0.1)' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const TwilightSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [nutrientLevel, setNutrientLevel] = useState(1);

    const getLakeColor = (level) => {
        const rStart = 52, gStart = 152, bStart = 219;
        const rEnd = 45, gEnd = 90, bEnd = 39;
        const factor = (level - 1) / 9;
        const r = Math.round(rStart + (rEnd - rStart) * factor);
        const g = Math.round(gStart + (gEnd - gStart) * factor);
        const b = Math.round(bStart + (bEnd - bStart) * factor);
        return `rgb(${r}, ${g}, ${b})`;
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
            {/* Ambient specialized life */}
            <BigFauna type="shark" top="20%" speed={30} delay={0} opacity={0.2} />
            <BigFauna type="shark" top="60%" speed={25} delay={5} opacity={0.3} />
            <Octopus top="35%" speed={22} delay={1} opacity={0.2} />
            {/* Diver Narration */}
            <div style={{
                width: '100%',
                maxWidth: '800px',
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 13, 26, 0.6)',
                borderLeft: '4px solid #5df0e8',
                backdropFilter: 'blur(5px)',
                marginBottom: '4rem',
                alignSelf: 'flex-start',
            }}>
                <p style={{
                    fontFamily: "'Cinzel', serif",
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    "Entering the twilight zone. Light barely reaches here. Not every creature can survive at this depth — or at any depth. Three invisible forces decide who lives and who doesn't."
                </p>
            </div>

            <h2 className="cinzel" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center' }}>
                3 Factors Affecting Distribution of Organisms
            </h2>

            <div style={{ width: '100%', maxWidth: '800px' }}>
                <AccordionCard
                    title="Salinity"
                    icon="🧂"
                    index={0}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.8)' }}>
                        <p><strong>Definition:</strong> How much salt is dissolved in water</p>
                        <p><strong>Why it matters:</strong> Each organism is built for one salt level — put it in the wrong water, and it dies</p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <div style={{ display: 'flex', height: '10px', width: '100%', borderRadius: '5px', overflow: 'hidden', marginBottom: '10px' }}>
                                <div style={{ flex: '0.15', background: '#3498db', borderRight: '1px solid white' }} />
                                <div style={{ flex: '0.5', background: '#e67e22', borderRight: '1px solid white' }} />
                                <div style={{ flex: '0.35', background: '#2980b9' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', flexWrap: 'wrap', gap: '5px' }}>
                                <span>Freshwater &lt;0.5 ppt</span>
                                <span>Brackish 0.5–30 ppt</span>
                                <span>Marine 30–38 ppt</span>
                            </div>
                        </div>
                    </div>
                </AccordionCard>

                <AccordionCard
                    title="Dissolved Oxygen"
                    icon="💨"
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.8)' }}>
                        <p><strong>Definition:</strong> Oxygen in water that aquatic life breathes through gills or skin</p>
                        <p><strong>Why it matters:</strong> Too little oxygen, and the water becomes a dead zone — nothing survives</p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <div style={{
                                height: '10px',
                                width: '100%',
                                borderRadius: '5px',
                                background: 'linear-gradient(90deg, #c0392b 0%, #e74c3c 20%, #5df0e8 100%)',
                                marginBottom: '10px'
                            }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                                <span style={{ color: '#e74c3c' }}>Hypoxic &lt;2 mg/L</span>
                                <span style={{ color: '#5df0e8' }}>Healthy 6–8 mg/L</span>
                            </div>
                        </div>
                    </div>
                </AccordionCard>

                <AccordionCard
                    title="Nutrient Minerals"
                    icon="🌿"
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.8)' }}>
                        <p><strong>Definition:</strong> Chemicals like nitrogen and phosphorus that feed aquatic plants and algae</p>
                        <p><strong>Why it matters:</strong> Balance is everything — too little means barely any life, too much triggers a chain reaction that kills it all</p>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={nutrientLevel}
                                    onChange={(e) => setNutrientLevel(parseInt(e.target.value))}
                                    style={{ width: '100%', cursor: 'pointer', accentColor: '#5df0e8' }}
                                />
                                <div style={{ textAlign: 'center', marginTop: '10px', color: nutrientLevel > 7 ? '#2ecc71' : '#5df0e8' }}>
                                    {nutrientLevel <= 3 ? 'Oligotrophic' : nutrientLevel <= 7 ? 'Mesotrophic' : 'Eutrophic'}
                                </div>
                            </div>
                            <div style={{
                                width: '100px',
                                height: '60px',
                                borderRadius: '8px',
                                backgroundColor: getLakeColor(nutrientLevel),
                                border: '2px solid rgba(255,255,255,0.2)',
                                boxShadow: `0 0 15px ${getLakeColor(nutrientLevel)}`,
                                transition: 'all 0.4s ease',
                                willChange: 'background-color, box-shadow',
                            }} />
                        </div>
                    </div>
                </AccordionCard>
            </div>

            {/* Footnote */}
            <div style={{
                marginTop: 'auto',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                fontStyle: 'italic',
                padding: '3rem 0',
            }}>
                Citation: Odum, E.P. & Barrett, G.W. (2004). Fundamentals of Ecology. Thomson Brooks/Cole.
            </div>
        </div>
    );
};

export default TwilightSection;
