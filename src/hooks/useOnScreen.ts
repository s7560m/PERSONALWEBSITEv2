import {Ref, useEffect, useState} from "react";

export default function useOnScreen(ref: Ref<any>) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        // @ts-ignore
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}

export function isInViewport(element: HTMLDivElement) {
    const rect = element.getBoundingClientRect();
    // const buffer = 200;
    return rect.top <= (0.5 * window.innerHeight || 0.5 * document.documentElement.clientHeight);
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     // rect.bottom <= 1200 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight + buffer) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}