import React from 'react';

const EnvironmentalScene = () => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            overflow: 'hidden',
            background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F7FA 100%)'
        }}>
            <style>{`
        @keyframes cloud-move {
          from { transform: translateX(-150%); }
          to { transform: translateX(250%); }
        }
        @keyframes sun-pulsate {
          0% { filter: drop-shadow(0 0 15px rgba(255, 235, 59, 0.7)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 30px rgba(255, 235, 59, 1)); transform: scale(1.05); }
          100% { filter: drop-shadow(0 0 15px rgba(255, 235, 59, 0.7)); transform: scale(1); }
        }
        @keyframes wave-sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-2%); }
        }
        @keyframes float-island {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes wave-roll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>

            <svg
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: '100%', height: '100%' }}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Sky Background is Div background */}

                {/* Sun */}
                <circle
                    cx="850"
                    cy="100"
                    r="40"
                    fill="#FFF176"
                    style={{
                        animation: 'sun-pulsate 4s ease-in-out infinite'
                    }}
                />

                {/* Clouds */}
                <g style={{ opacity: 0.8 }}>
                    <path
                        d="M100 100 Q120 70 150 100 Q180 80 210 100 Q240 110 210 130 H100 Z"
                        fill="white"
                        style={{ animation: 'cloud-move 60s linear infinite' }}
                    />
                    <path
                        d="M400 150 Q430 110 470 150 Q510 130 550 150 Q590 170 550 190 H400 Z"
                        fill="white"
                        style={{ animation: 'cloud-move 45s linear infinite', animationDelay: '-10s' }}
                    />
                    <path
                        d="M700 80 Q720 50 750 80 Q780 60 810 80 Q840 90 810 110 H700 Z"
                        fill="white"
                        style={{ animation: 'cloud-move 80s linear infinite', animationDelay: '-30s' }}
                    />
                </g>

                {/* Island Group */}
                <g style={{ animation: 'float-island 6s ease-in-out infinite' }}>
                    {/* Mountain */}
                    <path
                        d="M400 450 L500 250 L550 350 L650 200 L750 450 Z"
                        fill="#795548"
                    />
                    <path
                        d="M500 250 L525 300 L475 300 Z"
                        fill="#5D4037"
                        opacity="0.3"
                    />
                    <path
                        d="M650 200 L680 270 L620 270 Z"
                        fill="#5D4037"
                        opacity="0.3"
                    />

                    {/* Island Base (Sand) */}
                    <ellipse cx="575" cy="455" rx="200" ry="40" fill="#FBC02D" />

                    {/* Grass/Top */}
                    <ellipse cx="575" cy="445" rx="180" ry="25" fill="#4CAF50" />
                </g>

                {/* Sea / Waves */}
                <g style={{ animation: 'wave-sway 10s ease-in-out infinite' }}>
                    {/* Back Wave */}
                    <path
                        d="M-100 480 Q250 450 500 480 Q750 510 1100 480 V600 H-100 Z"
                        fill="#0097A7"
                        opacity="0.6"
                    />
                    {/* Middle Wave */}
                    <path
                        d="M-100 510 Q250 540 500 510 Q750 480 1100 510 V600 H-100 Z"
                        fill="#00ACC1"
                        opacity="0.8"
                    />
                    {/* Front Wave */}
                    <path
                        d="M-100 550 Q250 520 500 550 Q750 580 1100 550 V600 H-100 Z"
                        fill="#00796B"
                    />
                </g>
            </svg>
        </div>
    );
};

export default EnvironmentalScene;
