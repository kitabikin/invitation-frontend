import { gsap } from 'gsap';

export function R(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function animSnowflakes(h: number, elm: any) {
  gsap.to(elm, {
    y: h + 100,
    ease: 'Linear.easeNone',
    repeat: -1,
    delay: -15,
    duration: R(10, 30),
  });
  gsap.to(elm, {
    x: '+=100',
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: 'Sine.easeInOut',
    duration: R(4, 8),
  });
  gsap.to(elm, {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: 'Sine.easeInOut',
    delay: -15,
    duration: R(4, 8),
    opacity: 0.5,
  });
}
