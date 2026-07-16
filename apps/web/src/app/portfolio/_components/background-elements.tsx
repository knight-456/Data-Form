import { memo } from "react";

export const BackgroundElements = memo(function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand/15 dark:bg-brand/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[40%] right-[-5%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
    </div>
  );
});
