import { atom } from 'jotai';

export const themeAtom = atom({ value: 'theme-gold', label: 'Gold' });
export const displayAtom = atom('block');
export const overflowYAtom = atom('hidden');
export const isPlayingAtom = atom(false);
