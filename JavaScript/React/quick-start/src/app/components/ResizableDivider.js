'use client'

import { useRef, useState } from 'react';

export default function ResizableDivider() {
    const [leftWidth, setLeftWidth] = useState('50%');
    const containerRef = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const newLeftWidth = (e.clientX / containerWidth) * 100;
            setLeftWidth(`${newLeftWidth}%`);
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div ref={containerRef} className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" style={{ width: leftWidth }}>
                Content 1
            </div>
            <div
                className="divider lg:divider-horizontal cursor-col-resize"
                onMouseDown={handleMouseDown}
            >
                OR
            </div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" style={{ width: `calc(100% - ${leftWidth})` }}>
                Content 2
            </div>
        </div>
    );
}
