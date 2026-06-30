"use client";

import React, { useEffect, useState, memo } from 'react';
import iconComponents from './orbitalComponents/IconComponents';
import SkillIcon from './orbitalComponents/SkillIcon';
import skillsConfig from './orbitalComponents/SkillsConfig';
import OrbitingSkill from './orbitalComponents/OrbitingSkill';
import GlowingOrbitPath from './orbitalComponents/GlowingOrbitPath';
import orbitConfigs from './orbitalComponents/OrbitConfigs';

SkillIcon.displayName = 'SkillIcon';

OrbitingSkill.displayName = 'OrbitingSkill';

GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId;
    let lastTime = performance.now();

    const animate = currentTime => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);

  }, [isPaused]);

  return <main className="w-full flex items-center justify-center overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`
      }} />
      </div>

      <div className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-112.5 md:h-112.5 flex items-center justify-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        
        {}
        <div className="w-20 h-20 bg-linear-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {}
        {orbitConfigs.map(config => <GlowingOrbitPath key={`path-${config.radius}`} radius={config.radius} glowColor={config.glowColor} animationDelay={config.delay} />)}

        {}
        {skillsConfig.map(config => {
        const angle = time * config.speed + (config.phaseShift || 0);
        return <OrbitingSkill key={config.id} config={config} angle={angle} />;
      })}
      </div>
    </main>;
}