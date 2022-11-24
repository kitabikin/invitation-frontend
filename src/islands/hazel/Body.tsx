import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { themeAtom, overflowYAtom } from '@/store/hazelStore';

export const Body = () => {
  const [overflowY, setOverflowY] = useAtom(overflowYAtom);
  const initialTheme = `theme-green`;
  useHydrateAtoms([[themeAtom, initialTheme]]);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflowY = overflowY;
  }, [overflowY]);

  return null;
};

export default Body;
