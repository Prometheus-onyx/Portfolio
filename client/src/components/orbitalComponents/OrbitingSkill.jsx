import { useState, memo } from "react";
import iconComponents from "./IconComponents";
import SkillIcon from "./SkillIcon";

const OrbitingSkill = memo(({
  config,
  angle
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    orbitRadius,
    size,
    iconType,
    label
  } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;
  
  return <div className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out" style={{
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
    zIndex: isHovered ? 20 : 10
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `} style={{
      boxShadow: isHovered ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20` : undefined
    }}>
        <SkillIcon type={iconType} />
        {isHovered && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>}
      </div>
    </div>;
});

export default OrbitingSkill;