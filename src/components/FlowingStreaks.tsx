import { useEffect, useRef, useState } from "react";
import "./FlowingStreaks.css";

const FlowingStreaks = ({ 
  color = "#8A2BE2", 
  pathCount = 5,
  speed = 5,
  opacity = 0.7,
  thickness = 4
}) => {
  const containerRef = useRef(null);
  const [paths, setPaths] = useState([]);
  
  // Generate random bezier paths
  useEffect(() => {
    const generatePaths = () => {
      const newPaths = [];
      const height = containerRef.current?.clientHeight || 600;
      const width = containerRef.current?.clientWidth || 1200;
      
      for (let i = 0; i < pathCount; i++) {
        const yPos = (height / (pathCount + 1)) * (i + 1);
        const variance = height / 6;
        
        // Generate random control points for bezier curve
        const cp1y = yPos + (Math.random() * variance * 2 - variance);
        const cp2y = yPos + (Math.random() * variance * 2 - variance);
        const cp3y = yPos + (Math.random() * variance * 2 - variance);
        
        const path = `M-100,${yPos} C${width*0.2},${cp1y} ${width*0.5},${cp2y} ${width*1.2},${cp3y}`;
        newPaths.push(path);
      }
      
      setPaths(newPaths);
    };
    
    generatePaths();
    
    // Regenerate on resize for responsiveness
    const handleResize = () => {
      generatePaths();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathCount]);
  
  return (
    <div 
      className="flowing-streaks-container" 
      ref={containerRef}
      style={{ opacity }}
    >
      <svg 
        className="flowing-streaks" 
        viewBox="0 0 1200 600" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="80%" stopColor={color} stopOpacity="1" />
            <stop offset="80.01%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          
          <mask id="flowMask">
            <rect 
              className="mask-rect" 
              x="-100%" 
              y="0" 
              width="100%" 
              height="100%" 
              fill="white"
              style={{ animationDuration: `${speed}s` }}
            />
          </mask>
        </defs>
        
        {/* Static paths */}
        {paths.map((path, index) => (
          <path 
            key={`static-${index}`}
            className="streak-path" 
            d={path}
            stroke={color}
            strokeOpacity={0.3}
            strokeWidth={thickness/2} 
            fill="none" 
          />
        ))}
        
        {/* Animated flowing paths */}
        <g mask="url(#flowMask)">
          {paths.map((path, index) => (
            <path 
              key={`flow-${index}`}
              className="streak-flow" 
              d={path}
              stroke="url(#flowGradient)" 
              strokeWidth={thickness} 
              fill="none" 
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default FlowingStreaks;
