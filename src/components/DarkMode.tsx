import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Sun from './svg/Sun';
import Moon from './svg/Moon';

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
      className='btn btn-square btn-ghost swap swap-rotate'
      data-toggle-theme='winter'
      data-act-class='swap-active'
      aria-label='Toggle dark or light mode'
    >
      <input
        type='checkbox'
        onClick={
          resolvedTheme === 'light'
            ? () => setTheme('dark')
            : () => setTheme('light')
        }
        {...(resolvedTheme === 'light' ? { checked: true } : {})}
      ></input>
      <Sun />
      <Moon />
    </label>
  );
};

export default DarkMode;
