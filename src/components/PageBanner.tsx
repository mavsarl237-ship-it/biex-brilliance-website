import { motion } from "framer-motion";
import heroImg from "@/assets/hero-meeting.jpg";

interface PageBannerProps {
    title: string;
    subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
    return (
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{
                    background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.85) 100%)"
                }} />
            </div>

            {/* Red decorative circle */}
            <div
                className="absolute top-8 right-12 w-20 h-20 rounded-full opacity-[0.08]"
                style={{ background: "radial-gradient(circle, hsl(358 73% 52%), transparent 70%)" }}
            />
            <div
                className="absolute bottom-6 left-16 w-3 h-3 rounded-full opacity-20"
                style={{ background: "hsl(358 73% 52%)" }}
            />

            <div className="relative z-10 container-biex px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Red accent line */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[2px]" style={{ background: "hsl(358 73% 52%)" }} />
                        <div className="w-2 h-2 rounded-full" style={{ background: "hsl(214 65% 55%)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "hsl(358 73% 52%)" }} />
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-white/50 text-lg font-body mt-4 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 30C360 10 720 50 1080 30C1260 20 1380 35 1440 25V60H0V30Z"
                        fill="hsl(220 25% 97%)"
                    />
                </svg>
            </div>
        </section>
    );
}
