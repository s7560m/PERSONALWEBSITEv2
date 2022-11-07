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
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}