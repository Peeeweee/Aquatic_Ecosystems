import React, { useState, useEffect } from 'react';
import { SplashTrigger } from './MarineLife';

const IntroSection = ({ onDive }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #001a33 0%, #000c18 100%)',
            color: 'white',
            padding: '2rem',
            boxSizing: 'border-box',
            overflow: 'hidden'
        }}>
            {/* Background Particles/Stars */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at center, rgba(93, 240, 232, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1000px',
                width: '100%',
                zIndex: 10,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out'
            }}>
                {/* Title */}
                <h1 className="cinzel" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    marginBottom: '2rem',
                    textAlign: 'left',
                    lineHeight: 1.1
                }}>
                    AQUATIC<br />
                    <span style={{ color: 'white' }}>ECOSYSTEMS</span>
                </h1>

                {/* Accent Line */}
                <div style={{
                    width: '100px',
                    height: '4px',
                    background: '#5df0e8',
                    marginBottom: '3rem'
                }} />

                {/* Subtitle */}
                <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4rem',
                    maxWidth: '800px',
                    textAlign: 'left'
                }}>
                    An <span style={{ color: '#5df0e8', fontStyle: 'italic' }}>aquatic ecosystem</span> is any environment that is based in water where living things interact with each other and with their surroundings.
                </p>

            </div>

            {/* Animated Splash Trigger */}
            <SplashTrigger
                onClick={onDive}
                style={{ bottom: '10%', right: '10%' }}
            />
        </div>
    );
};

export default IntroSection;
