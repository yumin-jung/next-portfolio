'use client';

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from '@react-spring/web';

const AnimationHome: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let pointerInteracting: number | null = null;
    let pointerInteractionMovement = 0;
    const locationToAngles = (lat: number, long: number) => {
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
    }
    const focusRef = useRef([0, 0])
    let isClicked = false;

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

        let width = 0;
        let phi = 0;
        let theta = 0;
        let currentPhi = 0;
        let currentTheta = 0;
        const doublePi = Math.PI * 2;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            opacity: 0.8,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [1, 1, 1],
            glowColor: [1.1, 1.1, 1.1],
            markers: [
                // longitude latitude
                { location: [36.3504119, 127.3845475], size: 0.03 }
            ],
            onRender: (state) => {
                const [focusPhi, focusTheta] = focusRef.current
                const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
                const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
                // Control the speed
                if (distPositive < distNegative) {
                    currentPhi += distPositive * 0.08
                } else {
                    currentPhi -= distNegative * 0.08
                }
                // currentTheta = currentTheta * 0.92 + focusTheta * 0.08

                if (isClicked) {
                    state.phi = currentPhi
                    state.theta = currentTheta
                    setTimeout(() => {
                        isClicked = false
                        focusRef.current = locationToAngles(phi, 0)
                        phi = currentPhi + 0.005
                    }, 1000);
                } else {
                    state.phi = phi + r.get()
                    currentPhi = state.phi
                    phi += 0.005
                }
                state.width = width * 2
                state.height = width * 2
            }
        });
        return () => globe.destroy()
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center control-buttons" style={{ gap: '.5rem' }}>
                I live in
                <button className="underline" onClick={() => {
                    isClicked = true
                    focusRef.current = locationToAngles(36.3504119, 127.3845475)
                }}>Daejeon</button>
            </div>
            <canvas ref={canvasRef} className="w-full h-full aspect-square cursor-grab transition-opacity" />
        </>
    )
}

export default AnimationHome;