import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
    const { lang, t } = useLang();
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    // Show button after scrolling a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Auto-hide tooltip after 10 seconds to not be too annoying
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setShowTooltip(false), 10000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const phoneNumber = "237672741295";
    const message = t(
        "Bonjour ! Je vous contacte depuis votre site web. J'aimerais avoir plus d'informations.",
        "Hello! I am contacting you from your website. I would like more information.",
        "Hallo! Ich kontaktiere Sie über Ihre Website. Ich hätte gerne weitere Informationen.",
        "مرحباً! أتصل بكم من موقعكم الإلكتروني. أود معرفة المزيد من المعلومات."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 md:hidden flex items-end justify-end flex-col gap-3"
                >
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 relative max-w-[200px]"
                                style={{
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <button
                                    onClick={() => setShowTooltip(false)}
                                    className="absolute -top-2 -right-2 bg-gray-200 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                                <div className="flex gap-2 items-start">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <span className="text-xl">👋</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-heading font-bold text-gray-800 leading-tight mb-1">
                                            {t("Besoin d'aide ?", "Need help?", "Brauchen Sie Hilfe?", "هل تحتاج إلى مساعدة؟")}
                                        </p>
                                        <p className="text-xs text-gray-500 font-body">
                                            {t("Discutons ensemble sur WhatsApp !", "Let's chat on WhatsApp!", "Lass uns auf WhatsApp chatten!", "دعنا نتحدث على WhatsApp!")}
                                        </p>
                                    </div>
                                </div>
                                {/* Arrow pointing down to the button */}
                                <div
                                    className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center group"
                    >
                        {/* Magnetic/Pulse Animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />

                        {/* Main Button */}
                        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 active:scale-95">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
