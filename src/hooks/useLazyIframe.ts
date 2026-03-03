import { useState, useEffect, useRef } from "react";

/**
 * Hook to lazy-load an iframe only when its container is visible.
 * Returns a ref to attach to the container and a boolean `isVisible`.
 */
export function useLazyIframe(rootMargin = "200px") {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return { ref, isVisible };
}
