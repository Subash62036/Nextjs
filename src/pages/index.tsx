import React, { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export default function HomePage(): JSX.Element {
  const [opacityClass, setOpacityClass] = useState('opacity-100');
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleInputFocus = () => {
    setOpacityClass('opacity-40');
  };

  const handleInputBlur = () => {
    setOpacityClass('opacity-100');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    }
    return (
      <MoonIcon
        className="w-7 h-7"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  };

  return (
    <>
      <div className="h-[100vh] px-4 lg:px-0 overflow-x-hidden">
        <div className="relative h-full">
          <div className="w-full h-full mx-auto">
            {renderThemeChanger()}
            <p className={`mt-4 md:mt-8 text-[20px] text-grey leading-none font-sans-serif text-center ${opacityClass} transition-all`}>Some caption</p>
          </div>
        </div>
      </div>
    </>
  );
}
HomePage.pageTitle = 'XYZ';
