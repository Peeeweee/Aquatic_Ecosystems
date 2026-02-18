import React from 'react';

/**
 * Seaweed component with swaying animation
 */
export const Seaweed = ({ style }) => (
    <div style={{
        position: 'absolute',
        bottom: 0,
        ...style
    }}>
        <svg width="40" height="120" viewBox="0 0 40 120" style={{
            animation: 'sway 4s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 0 5px rgba(93, 240, 232, 0.2))'
        }}>
            <path
                d="M20,120 Q5,90 20,60 T20,0"
                fill="none"
                stroke="#2ecc71"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M20,120 Q35,100 20,80 T20,40"
                fill="none"
                stroke="#27ae60"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
            />
        </svg>
        <style>{`
            @keyframes sway {
                0%, 100% { transform: rotate(-5deg) skewX(-2deg); }
                50% { transform: rotate(5deg) skewX(2deg); }
            }
        `}</style>
    </div>
);

/**
 * Coral component (Static decoration)
 */
export const Coral = ({ style }) => (
    <div style={{ position: 'absolute', bottom: 0, ...style }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M30,60 L30,40 M30,40 L15,30 M30,40 L45,30 M15,30 L10,15 M15,30 L25,20 M45,30 L40,15 M45,30 L55,20"
                fill="none" stroke="#e74c3c" strokeWidth="4" strokeLinecap="round" />
            <circle cx="10" cy="15" r="3" fill="#ff7675" />
            <circle cx="25" cy="20" r="3" fill="#ff7675" />
            <circle cx="40" cy="15" r="3" fill="#ff7675" />
            <circle cx="55" cy="20" r="3" fill="#ff7675" />
        </svg>
    </div>
);

/**
 * Individual Fish component
 */
export const Fish = ({ color = "#5df0e8", size = 20, speed = 10, delay = 0, top = "20%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '-50px',
        animation: `swim ${speed}s linear ${delay}s infinite`,
        zIndex: 5,
        pointerEvents: 'none'
    }}>
        <svg width={size} height={size / 2} viewBox="0 0 100 50">
            <path d="M0,25 Q40,-10 80,25 T0,25" fill={color} />
            <path d="M80,25 L100,5 L100,45 Z" fill={color} />
            <circle cx="20" cy="20" r="3" fill="white" />
        </svg>
        <style>{`
            @keyframes swim {
                from { transform: translateX(-100px); }
                to { transform: translateX(calc(100vw + 100px)); }
            }
        `}</style>
    </div>
);

/**
 * Shark / Majestic silhouette component
 */
export const BigFauna = ({ type = "shark", speed = 25, delay = 0, top = "40%", opacity = 0.3 }) => {
    const isWhale = type === "whale";
    return (
        <div style={{
            position: 'absolute',
            top: top,
            right: '-300px',
            animation: `swim-reverse ${speed}s linear ${delay}s infinite`,
            zIndex: 2,
            opacity: opacity,
            pointerEvents: 'none'
        }}>
            <svg width={isWhale ? 300 : 150} height={isWhale ? 100 : 50} viewBox="0 0 300 100">
                {isWhale ? (
                    <path d="M280,50 Q200,80 100,80 T20,50 T100,20 T280,50 M280,50 L300,30 L300,70 Z" fill="#2c3e50" />
                ) : (
                    <path d="M250,50 Q180,70 100,50 T20,30 T100,10 T250,50 M250,50 L270,30 L270,70 Z M150,20 L180,-10 L190,20 Z" fill="#34495e" />
                )}
            </svg>
            <style>{`
                @keyframes swim-reverse {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-100vw - 350px)); }
                }
            `}</style>
        </div>
    );
};

/**
 * Bioluminescent Jellyfish
 */
export const Jellyfish = ({ style, speed = 6 }) => (
    <div style={{
        position: 'absolute',
        ...style,
        animation: `float-pulse ${speed}s ease-in-out infinite`,
        zIndex: 5,
        filter: 'drop-shadow(0 0 15px rgba(93, 240, 232, 0.6))'
    }}>
        <svg width="40" height="60" viewBox="0 0 40 60">
            <path d="M5,25 Q20,0 35,25" fill="rgba(93, 240, 232, 0.4)" stroke="#5df0e8" strokeWidth="2" />
            <path d="M10,25 Q10,60 15,40" fill="none" stroke="#5df0e8" strokeWidth="1" opacity="0.8" />
            <path d="M20,25 Q20,60 25,40" fill="none" stroke="#5df0e8" strokeWidth="1" opacity="0.8" />
            <path d="M30,25 Q30,60 35,40" fill="none" stroke="#5df0e8" strokeWidth="1" opacity="0.8" />
        </svg>
        <style>{`
            @keyframes float-pulse {
                0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; filter: brightness(1); }
                50% { transform: translateY(-30px) scale(1.15); opacity: 1; filter: brightness(1.3); }
            }
        `}</style>
    </div>
);

/**
 * Sea Turtle component
 */
export const SeaTurtle = ({ speed = 20, delay = 0, top = "30%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '-150px',
        animation: `swim ${speed}s ease-in-out ${delay}s infinite`,
        zIndex: 4,
        pointerEvents: 'none'
    }}>
        <svg width="80" height="60" viewBox="0 0 100 80">
            <path d="M20,40 Q50,10 80,40 T20,40" fill="#2d3436" />
            <path d="M30,20 L10,10 M30,60 L10,70 M70,20 L90,10 M70,60 L90,70" stroke="#2d3436" strokeWidth="6" strokeLinecap="round" />
            <circle cx="15" cy="40" r="10" fill="#636e72" />
        </svg>
    </div>
);

/**
 * Dolphin component (Arcing jump/swim)
 */
export const Dolphin = ({ speed = 12, delay = 0, top = "10%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '-100px',
        animation: `dolphin-arc ${speed}s ease-in-out ${delay}s infinite`,
        zIndex: 5,
        pointerEvents: 'none'
    }}>
        <svg width="100" height="40" viewBox="0 0 100 40">
            <path d="M0,35 Q50,-20 100,35 Q50,25 0,35" fill="#dfe6e9" />
            <path d="M70,10 L85,0 L90,15 Z" fill="#dfe6e9" />
        </svg>
        <style>{`
            @keyframes dolphin-arc {
                0% { transform: translateX(-100px) translateY(20px) rotate(-10deg); }
                30% { transform: translateX(30vw) translateY(-40px) rotate(0deg); }
                100% { transform: translateX(110vw) translateY(20px) rotate(10deg); }
            }
        `}</style>
    </div>
);

/**
 * Anglerfish (Abyss specialized)
 */
export const Anglerfish = ({ speed = 35, delay = 0, top = "50%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        right: '-100px',
        animation: `swim-reverse ${speed}s linear ${delay}s infinite`,
        zIndex: 6,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.8))'
    }}>
        <svg width="80" height="60" viewBox="0 0 100 80">
            <path d="M90,40 Q60,10 20,40 T90,40" fill="#1e272e" />
            <path d="M30,30 L10,20 M30,50 L10,60" stroke="#485460" strokeWidth="2" />
            {/* Lure */}
            <path d="M60,20 Q50,0 40,10" fill="none" stroke="#5df0e8" strokeWidth="1.5" />
            <circle cx="40" cy="10" r="4" fill="#5df0e8" style={{ animation: 'lure-glow 1.5s infinite alternate' }} />
        </svg>
        <style>{`
            @keyframes lure-glow {
                0% { opacity: 0.4; filter: blur(3px) brightness(1); }
                100% { opacity: 1; filter: blur(0px) brightness(1.5); box-shadow: 0 0 20px #5df0e8; }
            }
        `}</style>
    </div>
);

/**
 * Snailfish (Trench specialized - Pale/Transparent)
 */
export const Snailfish = ({ speed = 25, delay = 0, top = "70%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '-80px',
        animation: `swim ${speed}s ease-in-out ${delay}s infinite`,
        zIndex: 4,
        opacity: 0.4,
        pointerEvents: 'none'
    }}>
        <svg width="60" height="20" viewBox="0 0 100 30">
            <path d="M0,15 Q50,0 100,15 T0,15" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="0.5" />
            <path d="M80,15 L100,5 L100,25 Z" fill="rgba(255,255,255,0.2)" />
        </svg>
    </div>
);
/**
 * Seal component (Bobs up and down while swimming)
 */
export const Seal = ({ speed = 15, delay = 0, top = "45%" }) => (
    <div style={{
        position: 'absolute',
        top: top,
        right: '-120px',
        animation: `swim-reverse ${speed}s linear ${delay}s infinite`,
        zIndex: 4,
        pointerEvents: 'none'
    }}>
        <svg width="100" height="40" viewBox="0 0 100 40" style={{ animation: 'seal-bob 3s ease-in-out infinite' }}>
            <path d="M100,20 Q80,10 50,20 T10,20" fill="#636e72" stroke="#2d3436" strokeWidth="1" />
            <path d="M10,20 L0,10 L0,30 Z" fill="#636e72" />
            <circle cx="85" cy="15" r="2" fill="black" />
        </svg>
        <style>{`
            @keyframes seal-bob {
                0%, 100% { transform: translateY(0) rotate(-5deg); }
                50% { transform: translateY(-10px) rotate(5deg); }
            }
        `}</style>
    </div>
);

/**
 * Octopus / Dumbo Octopus component
 */
export const Octopus = ({ type = "generic", speed = 20, delay = 0, top = "60%", opacity = 0.5 }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '-100px',
        animation: `swim ${speed}s ease-in-out ${delay}s infinite`,
        zIndex: 3,
        opacity: opacity,
        pointerEvents: 'none'
    }}>
        <svg width="60" height="60" viewBox="0 0 100 100">
            {/* Head */}
            <path d="M30,50 Q50,10 70,50" fill="#a29bfe" />
            {/* Tentacles */}
            <path d="M35,50 Q30,80 25,70 M45,50 Q45,90 40,80 M55,50 Q60,90 65,80 M65,50 Q75,80 80,70"
                fill="none" stroke="#a29bfe" strokeWidth="4" strokeLinecap="round" style={{ animation: 'tentacle-sway 2s infinite' }} />
            {/* Dumbo ears if applicable */}
            {type === "dumbo" && (
                <>
                    <path d="M30,30 Q20,10 35,20" fill="#a29bfe" opacity="0.8" />
                    <path d="M70,30 Q80,10 65,20" fill="#a29bfe" opacity="0.8" />
                </>
            )}
        </svg>
        <style>{`
            @keyframes tentacle-sway {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(5px); }
            }
        `}</style>
    </div>
);

/**
 * Heavy Iron Anchor for ascent animation
 */
export const Anchor = ({ style }) => (
    <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        pointerEvents: 'none',
        ...style
    }}>
        <svg width="120" height="200" viewBox="0 0 120 200" style={{ filter: 'drop-shadow(0 0 20px rgba(93, 240, 232, 0.4))' }}>
            {/* Chain trailing upwards */}
            <path
                d="M60,0 L60,-1000"
                fill="none"
                stroke="var(--teal)"
                strokeWidth="2"
                strokeDasharray="15,5"
                opacity="0.6"
            />
            {/* Anchor Ring */}
            <circle cx="60" cy="40" r="15" fill="none" stroke="#bdc3c7" strokeWidth="8" />
            {/* Main Shank */}
            <rect x="56" cy="40" width="8" height="100" fill="#bdc3c7" />
            {/* Crossbar (Stock) */}
            <rect x="30" cy="60" width="60" height="8" rx="4" fill="#95a5a6" />
            {/* Arms & Flukes */}
            <path
                d="M60,140 Q60,180 10,140 M60,140 Q60,180 110,140"
                fill="none"
                stroke="#bdc3c7"
                strokeWidth="10"
                strokeLinecap="round"
            />
            {/* Pointy bits at ends of arms */}
            <path d="M10,140 L5,120 L25,135 Z" fill="#bdc3c7" />
            <path d="M110,140 L115,120 L95,135 Z" fill="#bdc3c7" />
        </svg>
    </div>
);

/**
 * Modern Research Submersible
 */
export const Submarine = ({ style }) => (
    <div style={{
        position: 'absolute',
        zIndex: 800,
        pointerEvents: 'none',
        ...style
    }}>
        <svg width="150" height="80" viewBox="0 0 150 80">
            {/* Main Body */}
            <path d="M10,40 Q10,10 60,10 L100,10 Q130,10 130,40 L130,50 Q130,70 100,70 L60,70 Q10,70 10,40 Z" fill="#f1c40f" stroke="#d35400" strokeWidth="2" />
            {/* Viewport (Glass) */}
            <circle cx="110" cy="40" r="15" fill="rgba(93, 240, 232, 0.4)" stroke="#5df0e8" strokeWidth="2" />
            <path d="M110,30 Q115,35 110,40" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
            {/* Propeller / Rear Motor */}
            <rect x="0" y="30" width="12" height="20" rx="2" fill="#34495e" />
            <rect x="5" y="25" width="2" height="30" fill="#2c3e50" style={{ animation: 'propeller-spin 0.2s linear infinite' }} />
            {/* Robotic Arm */}
            <path d="M60,70 Q70,90 90,85" fill="none" stroke="#7f8c8d" strokeWidth="3" strokeLinecap="round" />
            {/* Headlights */}
            <path d="M130,35 L180,20 L180,60 L130,45 Z" fill="rgba(255, 255, 255, 0.1)" />
            <circle cx="130" cy="40" r="4" fill="#ecf0f1" />
        </svg>
        <style>{`
            @keyframes propeller-spin {
                0% { transform: scaleY(1); }
                50% { transform: scaleY(0.5); }
                100% { transform: scaleY(1); }
            }
        `}</style>
    </div>
);

/**
 * Research Dock Ship (Persistent at surface) - Refined for premium look
 */
export const ResearchShip = ({ style }) => (
    <div style={{
        position: 'absolute',
        zIndex: 2,
        pointerEvents: 'none',
        ...style
    }}>
        <svg width="320" height="140" viewBox="0 0 320 140">
            {/* Hull - Multi-tone for depth */}
            <path d="M20,70 L300,70 L270,120 L50,120 Z" fill="#f5f6fa" stroke="#dcdde1" strokeWidth="1" />
            <path d="M20,70 L300,70 L295,80 L25,80 Z" fill="#dcdde1" opacity="0.5" />
            <path d="M50,110 L270,110 L265,120 L55,120 Z" fill="#2f3640" />

            {/* Superstructure */}
            <rect x="100" y="30" width="120" height="40" rx="2" fill="#dcdde1" />
            <rect x="110" y="40" width="40" height="20" rx="1" fill="#2c3e50" />
            <path d="M110,40 L150,40 L145,45 L115,45 Z" fill="rgba(93, 240, 232, 0.3)" />

            {/* Radar & Comms */}
            <rect x="140" y="10" width="4" height="20" fill="#7f8c8d" />
            <circle cx="142" cy="10" r="8" fill="none" stroke="#7f8c8d" strokeWidth="1" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 142 10" to="360 142 10" dur="4s" repeatCount="indefinite" />
            </circle>
            <line x1="180" y1="30" x2="180" y2="10" stroke="#7f8c8d" strokeWidth="2" />

            {/* Crane / Submarine Deployment System */}
            <path d="M200,70 L260,30 L285,30" fill="none" stroke="#2f3640" strokeWidth="4" strokeLinecap="round" />
            <line x1="285" y1="30" x2="285" y2="80" stroke="#7f8c8d" strokeWidth="1" strokeDasharray="4,2" />

            {/* Safety Markings & Details */}
            <rect x="50" y="90" width="10" height="4" fill="#e74c3c" rx="1" />
            <rect x="70" y="90" width="10" height="4" fill="#e74c3c" rx="1" />
            <text x="210" y="110" fontFamily="monospace" fontSize="8" fill="#7f8c8d" opacity="0.5">RES-EXP-01</text>

            {/* Identification Flag */}
            <rect x="155" y="5" width="2" height="25" fill="#353b48" />
            <path d="M157,5 L175,12 L157,20 Z" fill="#e84118" />
        </svg>
    </div>
);
