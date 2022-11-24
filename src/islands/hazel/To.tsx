import cn from 'classnames';
import { css } from '@stitches/core';
import { useAtom } from 'jotai';
import Button from '@/islands/hazel/Button';
import { displayAtom, overflowYAtom, isPlayingAtom } from '@/store/hazelStore';

export const To = ({ ...props }) => {
  const [display, setDisplay] = useAtom(displayAtom);
  const [_, setOverflowY] = useAtom(overflowYAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const { guest } = props.options;
  const { toImage, toTitle, toButtonLabel } = props.to;

  const main = css({
    backgroundColor: 'var(--hazel-bg-color)',
    display: display,
  });

  const box = css({
    backgroundImage: `var(--hazel-bg-to)`,
  });

  const handleClick = () => {
    setDisplay('none');
    setIsPlaying(!isPlaying);
    setOverflowY('auto');
  };

  return (
    <>
      <div className={cn(main(), 'fixed h-full w-full z-[600] opacity-100')}>
        <div className={cn('mx-auto max-w-md h-full px-4')}>
          <div
            className={cn(
              'relative flex flex-col items-center justify-center text-center',
              'h-full w-full py-8 px-4 bg-center bg-no-repeat bg-contain',
              box(),
            )}
          >
            {/* Kepada Image */}
            {toImage && toImage.is_active && (
              <div className={cn('flex rounded-full overflow-hidden')}>
                {props.image}
              </div>
            )}

            {/* Kepada Title */}
            {toTitle && toTitle.is_active && (
              <div className={cn('italic font-bold mt-4')}>{toTitle.value}</div>
            )}

            {/* Options Guest */}
            <div className={cn('text-2xl md:text-3xl font-bold mt-4')}>
              {guest}
            </div>

            <div className={cn('mt-4')}>
              <Button onClick={handleClick}>{toButtonLabel.value}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default To;
