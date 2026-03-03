import { useLazyIframe } from "@/hooks/useLazyIframe";
import { MapPin } from "lucide-react";

interface LazyMapProps {
    src: string;
    title: string;
    height?: string;
}

/**
 * Renders a Google Maps iframe only when the container scrolls near the viewport.
 * Shows a lightweight placeholder until the map loads.
 */
export default function LazyMap({ src, title, height = "h-40" }: LazyMapProps) {
    const { ref, isVisible } = useLazyIframe("300px");

    return (
        <div
            ref={ref}
            className={`rounded-xl overflow-hidden ${height} w-full`}
            style={{ border: "1px solid rgba(220,53,69,0.12)" }}
        >
            {isVisible ? (
                <iframe
                    src={src}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted/30">
                    <MapPin className="w-5 h-5 text-muted-foreground/40 animate-pulse" />
                </div>
            )}
        </div>
    );
}
