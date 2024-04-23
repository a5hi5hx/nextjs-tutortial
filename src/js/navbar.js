'use client'
import { useEffect } from 'react';

export default function useNavbar() {
    useEffect(() => {
        const links = document.querySelectorAll('.links a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        return () => {
            // Clean up event listeners
            links.forEach(link => {
                link.removeEventListener('click', () => {
                    links.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                });
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render
}
