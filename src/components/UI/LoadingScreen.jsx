import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading progress
    const duration = 2000; // 2 seconds total loading time
    const intervalTime = 20; // Update every 20ms
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 200); // Small delay after hitting 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "auto";
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-4">
        {/* Animated Gradient Rings */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Inner pulse */}
          <motion.div
            className="absolute inset-2 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-purple-500 opacity-20 blur-sm"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Rotating ring 1 */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-500 border-r-pink-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Rotating ring 2 */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-pink-500"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Percentage text */}
          <span className="text-xl font-bold font-mono text-white tracking-widest">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Text Logo */}
        <motion.h2
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 tracking-wider mb-2 animate-pulse"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Umesh.dev
        </motion.h2>

        <motion.p
          className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Loading Portfolio
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-pulse"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
