import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Sun from './utilities/Sun';
import Moon from './utilities/Moon';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label
      className='btn btn-square btn-ghost swap swap-rotate ml-1'
      data-toggle-theme='winter'
      data-act-class='swap-active'
      aria-label='Toggle dark or light mode'
      onClick={
        resolvedTheme === 'light'
          ? () => setTheme('dark')
          : () => setTheme('light')
      }
    >
      {resolvedTheme === 'light' ? <Moon /> : <Sun />}
    </label>
  );
};

export default DarkMode;
