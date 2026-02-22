import React, { useState, useEffect } from 'react';
import { SplashTrigger } from './MarineLife';
import EnvironmentalScene from './EnvironmentalScene';

const IntroSection = ({ onDive, introComplete }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (introComplete) {
            setVisible(true);
        }
    }, [introComplete]);

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            color: 'white',
            padding: '2rem',
            boxSizing: 'border-box',
            overflow: 'hidden'
        }}>
            <EnvironmentalScene />


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
                    <span style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>ECOSYSTEMS</span>
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
