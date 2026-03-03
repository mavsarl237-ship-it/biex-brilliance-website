import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-48 sm:w-96 h-48 sm:h-96 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(59,130,220,0.3), transparent 70%)",
                top: "20%",
                left: "10%",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-32 sm:w-64 h-32 sm:h-64 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(59,130,220,0.2), transparent 70%)",
                bottom: "15%",
                right: "15%",
              }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 relative z-10"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Biex Conseils"
                className="w-28 h-28 object-contain preloader-logo rounded-2xl"
              />
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-2xl"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(220,53,69,0.2)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(358 73% 52%), hsl(358 73% 42%))",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-subheading text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(59,130,220,0.5)" }}
            >
              Biex Conseils
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
