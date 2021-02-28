import React from 'react';

export default function Menu() {
    return (
        <header>
            <svg width="407" height="250" viewBox="0 0 407 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-98" y="9.5" width="374.059" height="373.288" rx="57" transform="rotate(-45 -98 9.5)" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="-158.781" y1="291.675" x2="340.193" y2="379.385" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1D737E"/>
                <stop offset="1" stop-color="#4FB9C7"/>
                </linearGradient>
                </defs>
            </svg>
            <img src="logo.svg" alt="Logo" className="logotopo" />

            <button className='info'>
                <span>Mais Informações</span>
            </button>
            
            <button className='menu' >
                <svg width="43" height="26" viewBox="0 0 43 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3606 5.53955H2.45131C1.09749 5.53955 0 4.44206 0 3.08824C0 1.73442 1.09749 0.636932 2.45131 0.636932H20.3606C21.7144 0.636932 22.8119 1.73442 22.8119 3.08824C22.8119 4.44206 21.7144 5.53955 20.3606 5.53955Z" fill="#197081"/>
                <path d="M39.6344 15.4629H2.45131C1.09749 15.4629 0 14.3654 0 13.0116C0 11.6578 1.09749 10.5603 2.45131 10.5603H39.6344C40.9882 10.5603 42.0857 11.6578 42.0857 13.0116C42.0857 14.3654 40.9882 15.4629 39.6344 15.4629Z" fill="black"/>
                <path d="M39.6343 25.2144H23.0104C21.6566 25.2144 20.5591 24.1169 20.5591 22.763C20.5591 21.4092 21.6566 20.3117 23.0104 20.3117H39.6343C40.9881 20.3117 42.0856 21.4092 42.0856 22.763C42.0856 24.1169 40.9881 25.2144 39.6343 25.2144Z" fill="#197081"/>
                </svg>
            </button>
        </header>
    )
}