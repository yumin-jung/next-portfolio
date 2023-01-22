'use client';

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from '@react-spring/web';

const AnimationHome: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let pointerInteracting: number | null = null;
    let pointerInteractionMovement = 0;

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    useEffect(() => {
        let phi = 0;
        const { current: canvas } = canvasRef;

        if (!canvas) return;
        canvas.width = 1000;
        canvas.height = 1000;

        canvas.onpointerdown = (e) => {
            pointerInteracting = e.clientX - pointerInteractionMovement;
            canvas.style.cursor = 'grabbing';
        };

        canvas.onpointerup = () => {
            pointerInteracting = null;
            canvas.style.cursor = 'grab';
        };

        canvas.onpointerout = () => {
            pointerInteracting = null;
            canvas.style.cursor = 'grab';
        };

        canvas.onmousemove = (e) => {
            if (pointerInteracting !== null) {
                const delta = e.clientX - pointerInteracting;
                pointerInteractionMovement = delta;
                api.start({
                    r: delta / 200,
                });
            }
        };

        canvas.ontouchmove = (e) => {
            if (pointerInteracting !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting;
                pointerInteractionMovement = delta;
                api.start({
                    r: delta / 100,
                });
            }
        };

        if (!canvasRef.current) return;

        createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1000,
            height: 1000,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [36.3504119, 127.3845475], size: 0.03 }
            ],
            onRender: (state) => {
                // This prevents rotation while dragging
                if (!pointerInteracting) {
                    // Called on every animation frame.
                    // `state` will be an empty object, return updated params.
                    phi += 0.005;
                }
                state.phi = phi + pointerInteractionMovement / 200;
            }
        });
    }, []);

    return (
        <canvas ref={canvasRef} className="w-[500px] h-[500px] aspect-square cursor-grab opacity-1 transition-opacity" />
    )
}

export default AnimationHome;