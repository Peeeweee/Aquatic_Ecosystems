import React, { useState, useEffect, useRef } from 'react';
import { Seaweed, Coral, Fish, SeaTurtle, Dolphin, Seal } from './MarineLife';

const StatCounter = ({ target, label, prefix = '', suffix = '', isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = parseFloat(target);
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <div style={{ textAlign: 'center', minWidth: '150px' }}>
            <div className="cinzel" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#5df0e8', fontWeight: '900', letterSpacing: '0.1em' }}>
                {prefix}{count % 1 === 0 ? count : count.toFixed(1)}{suffix}
            </div>
            <div className="inter-ui" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15rem', marginTop: '8px' }}>
                {label}
            </div>
        </div>
    );
};

const SunlitSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const cardStyle = (id) => ({
        flex: 1,
        minWidth: 'min(100%, 350px)',
        padding: '2.5rem 2rem',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isVisible
            ? (hoveredCard === id ? 'translateY(-15px) scale(1.02)' : 'translateY(0)')
            : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        willChange: 'transform, opacity',
        position: 'relative',
        overflow: 'hidden'
    });

    return (
        <div
            ref={sectionRef}
            style={{
                width: '100%',
                minHeight: '100vh',
                padding: 'clamp(40px, 10vh, 100px) 20px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                color: 'white',
            }}
        >
            {/* Coral Reef Elements at the bottom */}
            <Coral style={{ left: '5%', bottom: '20px', transform: 'scale(1.2)' }} />
            <Coral style={{ left: '15%', bottom: '10px', transform: 'scale(0.8) rotate(-10deg)' }} />
            <Coral style={{ right: '10%', bottom: '15px', transform: 'scale(1.1)' }} />

            <Seaweed style={{ left: '8%', bottom: '20px' }} />
            <Seaweed style={{ left: '12%', bottom: '10px', animationDelay: '1s' }} />
            <Seaweed style={{ right: '15%', bottom: '20px', animationDelay: '0.5s' }} />
            <Seaweed style={{ right: '5%', bottom: '10px', animationDelay: '1.5s' }} />

            {/* Ambient Fish Schools */}
            <Fish speed={15} top="15%" delay={0} size={15} color="#5df0e8" />
            <Fish speed={12} top="18%" delay={2} size={12} color="#488c99" />
            <Fish speed={18} top="22%" delay={5} size={18} color="#5df0e8" />

            <Fish speed={20} top="65%" delay={1} size={14} color="#5df0e8" />
            <Fish speed={16} top="70%" delay={4} size={16} color="#488c99" />

            {/* Specialized Marine Life */}
            <SeaTurtle top="40%" speed={25} delay={2} />
            <Dolphin top="15%" speed={15} delay={8} />
            <Seal top="50%" speed={20} delay={5} />
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
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out',
                willChange: 'transform, opacity',
            }}>
                <p style={{
                    fontFamily: "'Cinzel', serif",
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    lineHeight: '1.6',
                    margin: 0,
                }}>
                    "Still in the sunlit zone. Light reaches here — this is where most life begins. Two completely different worlds exist in water: one fresh, one salt. And they share almost nothing."
                </p>
            </div>

            <h2 className="cinzel" style={{
                fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
                marginBottom: '3rem',
                textAlign: 'center',
                textShadow: '0 0 15px rgba(93, 240, 232, 0.3)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s',
                willChange: 'transform, opacity',
            }}>
                The Two Main Divisions
            </h2>

            {/* Cards Container */}
            <div
                id="sunlit-container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '1000px',
                    marginBottom: '5rem',
                    justifyContent: 'center',
                }}
            >
                {/* Card 1 - Freshwater */}
                <div
                    className="glass-morphism"
                    style={{ ...cardStyle(1), transitionDelay: '0.4s' }}
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="scanline" />
                    <div style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>🏞️</div>
                    <h3 className="cinzel" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', color: '#5df0e8', margin: 0, fontWeight: '700' }}>Freshwater</h3>
                    <ul className="inter-ui" style={{
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        color: 'rgba(255,255,255,0.7)',
                        paddingLeft: '1.2rem',
                        margin: 0
                    }}>
                        <li>Salt? Almost none (&lt; 0.5 ppt)</li>
                        <li>Rarest water on Earth — less than 1% is actually usable</li>
                        <li>Found in rivers, lakes, and wetlands</li>
                    </ul>
                </div>

                {/* Card 2 - Saltwater */}
                <div
                    className="glass-morphism"
                    style={{ ...cardStyle(2), transitionDelay: '0.6s' }}
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="scanline" />
                    <div style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>🌊</div>
                    <h3 className="cinzel" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', color: '#5df0e8', margin: 0, fontWeight: '700' }}>Saltwater (Marine)</h3>
                    <ul className="inter-ui" style={{
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        color: 'rgba(255,255,255,0.7)',
                        paddingLeft: '1.2rem',
                        margin: 0
                    }}>
                        <li>Covers 70% of our planet's surface</li>
                        <li>Makes up 97% of all Earth's water</li>
                        <li>Found in open oceans, coral reefs, and estuaries</li>
                    </ul>
                </div>
            </div>

            {/* Stats Counter */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'clamp(2rem, 8vw, 4rem)',
                width: '100%',
                maxWidth: '800px',
                marginBottom: '4rem',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.8s',
                willChange: 'transform, opacity',
            }}>
                <StatCounter target="97" suffix="%" label="Earth's water that is saltwater" isVisible={isVisible} />
                <StatCounter target="2.5" suffix="%" label="Earth's water that is fresh" isVisible={isVisible} />
                <StatCounter target="95" suffix="%" label="Of the ocean unexplored" isVisible={isVisible} />
            </div>

            {/* Footnote */}
            <div style={{
                marginTop: 'auto',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                fontStyle: 'italic',
                paddingTop: '3rem',
            }}>
                Citation: Miller, G.T. & Spoolman, S.E. (2012). Living in the Environment. Brooks/Cole.
            </div>

            <style>{`
                @media (max-width: 700px) {
                    #sunlit-container { flex-direction: column; align-items: center; }
                }
            `}</style>
        </div>
    );
};

export default SunlitSection;
