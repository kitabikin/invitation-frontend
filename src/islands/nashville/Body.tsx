import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { themeAtom, overflowYAtom } from '@/store/nashvilleStore';

export const Body = () => {
  const [overflowY, setOverflowY] = useAtom(overflowYAtom);
  const initialTheme = { value: 'theme-gold', label: 'Gold' };
  useHydrateAtoms([[themeAtom, initialTheme]]);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.classList.add(initialTheme.value);
  }, []);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflowY = overflowY;
  }, [overflowY]);

  return null;
};

export default Body;
