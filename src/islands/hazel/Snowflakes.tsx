import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { R, animSnowflakes } from '@/lib/animation';

export const Snowflakes = ({ ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { snowflakesImage, snowflakesTotal } = props.snowflakes;

  const image = snowflakesImage.value
    ? `url(${snowflakesImage.value})`
    : 'var(--hazel-bg-snowflake)';

  useEffect(() => {
    const w = containerRef.current?.clientWidth || 0;
    const h = containerRef.current?.clientHeight || 0;

    for (let i = 0; i < snowflakesTotal.value; i++) {
      const Div = document.createElement('div');
      const size = R(20, 30);

      gsap.set(Div, {
        width: `${size}px`,
        height: `${size}px`,
        position: 'absolute',
        backgroundImage: image,
        backgroundSize: '100% 100%',
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
      });
      containerRef.current?.appendChild(Div);
      animSnowflakes(h, Div);
    }
  }, [snowflakesImage, snowflakesTotal]);

  return (
    <>
      <div
        className="absolute z-[400] w-full h-screen md:h-[80vh]"
        ref={containerRef}
      />
    </>
  );
};

export default Snowflakes;
