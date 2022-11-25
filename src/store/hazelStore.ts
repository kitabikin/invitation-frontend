import { atom } from 'jotai';

export const themeAtom = atom({ value: 'theme-red', label: 'Merah' });
export const isDisplayAtom = atom(true);
export const overflowYAtom = atom('hidden');
export const isPlayingAtom = atom(false);
