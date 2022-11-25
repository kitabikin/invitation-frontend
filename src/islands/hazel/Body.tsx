import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { themeAtom, overflowYAtom } from '@/store/hazelStore';

export const Body = ({ ...props }) => {
  const [overflowY] = useAtom(overflowYAtom);

  const { generalTheme } = props.general;

  const initialTheme = {
    value: `theme-${generalTheme.value}`,
    label: null,
  };
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
