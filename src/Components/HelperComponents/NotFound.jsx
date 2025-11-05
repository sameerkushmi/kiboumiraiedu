import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const glitchRef = useRef(null);
  const glitchBeforeRef = useRef(null);
  const glitchAfterRef = useRef(null);

  useEffect(() => {
    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    glitchTimeline
      .to(glitchRef.current, {
        duration: 0.1,
        skewX: 70,
        ease: "power4.inOut",
      })
      .to(glitchRef.current, {
        duration: 0.04,
        skewX: 0,
        ease: "power4.inOut",
      })
      .to(glitchRef.current, {
        duration: 0.04,
        x: -20,
        ease: "power4.inOut",
      })
      .to(glitchRef.current, {
        duration: 0.04,
        x: 0,
        ease: "power4.inOut",
      })
      .add(() => {
        if (glitchRef.current) {
          gsap.set(glitchRef.current, {
            textShadow: `
              ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00ff,
              ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff
            `,
          });
        }
      })
      .to(glitchRef.current, {
        duration: 0.04,
        textShadow: "0 0 0 #ff00ff, 0 0 0 #00ffff",
      })
      .to(glitchRef.current, {
        duration: 0.1,
        skewX: -70,
        ease: "power4.inOut",
      })
      .to(glitchRef.current, {
        duration: 0.04,
        skewX: 0,
        ease: "power4.inOut",
      });

    const randomGlitch = () => {
      const randomDelay = Math.random() * 3 + 1;
      gsap.delayedCall(randomDelay, () => {
        gsap.to(glitchRef.current, {
          duration: 0.05,
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
          yoyo: true,
          repeat: 1,
        });
        randomGlitch();
      });
    };

    randomGlitch();

    return () => {
      glitchTimeline.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Glitchy 404 Text */}
        <div className="relative inline-block mb-8">
          <h1
            ref={glitchRef}
            className="text-8xl md:text-9xl font-black text-white tracking-wider relative"
            style={{
              textShadow: "3px 3px 0 #ff00ff, -3px -3px 0 #00ffff",
            }}
          >
            404
          </h1>

          {/* Glitch layers */}
          <div
            className="absolute top-0 left-0 text-8xl md:text-9xl font-black tracking-wider pointer-events-none opacity-70"
            style={{
              color: "#ff00ff",
              animation: "glitch-1 0.3s infinite",
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            }}
          >
            404
          </div>
          <div
            className="absolute top-0 left-0 text-8xl md:text-9xl font-black tracking-wider pointer-events-none opacity-70"
            style={{
              color: "#00ffff",
              animation: "glitch-2 0.3s infinite",
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
            }}
          >
            404
          </div>
        </div>

        {/* Page Not Found text */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
          PAGE NOT FOUND
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md mx-auto">
          The page you're looking for seems to have glitched out of existence.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            Go Back To Home
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(-3px, 3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}
