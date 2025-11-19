import { useState, useEffect } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export default function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount

    return mousePosition;
}
