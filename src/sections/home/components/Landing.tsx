import {memo, Ref, RefObject, useEffect, useRef, useState} from "react";
// @ts-ignore
import * as Granim from "granim"

interface AppProps {
    canvasWrapperRef: RefObject<HTMLDivElement>
}

function Landing({canvasWrapperRef}: AppProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        handleResize();
        window.addEventListener('resize', handleResize)

        function handleResize() {
            if (canvasRef.current && canvasWrapperRef.current) {
                const canvas = canvasRef.current;
                // resize canvas
                canvas.height = canvasWrapperRef.current.clientHeight;
                canvas.width = canvasWrapperRef.current.clientWidth;
            }
        }

        const granimInstance = new Granim({
            element: '#canvas-basic',
            direction: 'left-right',
            isPausedWhenNotInView: true,
            image : {
                position: ['center', 'center'],
                stretchMode: ['none', 'none'],
                source: 'https://firebasestorage.googleapis.com/v0/b/personal-site-57ec2.appspot.com/o/images%2Fpexels-photo-1423600.jpeg?alt=media&token=8ded1ddb-db63-4bf2-9506-27e05f208406',
                blendingMode: 'multiply'
            },
            states : {
                "default-state": {
                    gradients: [
                        ['#29323c', '#485563'],
                        ['#FF6B6B', '#556270'],
                        ['#80d3fe', '#7ea0c4'],
                        ['#f0ab51', '#eceba3']
                    ]
                }
            },
            transitionSpeed: 4000
        });
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return <canvas id="canvas-basic" ref={canvasRef} />
}

export default memo(Landing);