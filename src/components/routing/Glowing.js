import React from 'react';

const GlowingCircles = () => {
    return (
        <div>
            <style>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                }
                ul {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    margin: 0;
                    padding: 0;
                    display: flex;
                }
                ul li {
                    list-style: none;
                    width: 40px;
                    height: 40px;
                    background: white;
                    border-radius: 50%;
                    animation: glow 1.6s ease-in-out infinite;
                }
                @keyframes glow {
                    0%, 40%, 100% {
                        transform: scale(0.2);
                    }
                    20% {
                        transform: scale(1);
                    }
                }
                ul li:nth-child(1) {
                    animation-delay: -1.4s;
                    background-color: yellow;
                    box-shadow: 0 0 50px yellow;
                }
                ul li:nth-child(2) {
                    animation-delay: -1.2s;
                    background-color: pink;
                    box-shadow: 0 0 50px pink;
                }
                ul li:nth-child(3) {
                    animation-delay: -1s;
                    background-color: yellow;
                    box-shadow: 0 0 50px yellow;
                }
                ul li:nth-child(4) {
                    animation-delay: -0.8s;
                    background-color: pink;
                    box-shadow: 0 0 50px pink;
                }
                ul li:nth-child(5) {
                    animation-delay: -0.6s;
                    background-color: yellow;
                    box-shadow: 0 0 50px yellow;
                }
                ul li:nth-child(6) {
                    animation-delay: -0.4s;
                    background-color: pink;
                    box-shadow: 0 0 50px pink;
                }
                ul li:nth-child(7) {
                    animation-delay: -0.2s;
                    background-color: yellow;
                    box-shadow: 0 0 50px yellow;
                }
                ul li:nth-child(8) {
                    animation-delay: -0s;
                    background-color: pink;
                    box-shadow: 0 0 50px pink;
                }
            `}</style>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default GlowingCircles;
