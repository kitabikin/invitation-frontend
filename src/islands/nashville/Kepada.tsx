import cn from 'classnames';
import { useAtom } from 'jotai';
import { css } from '@stitches/core';
import { displayAtom, isPlayingAtom } from '@/store/nashvilleStore';

const Kepada = (props: any) => {
  const [display, setDisplay] = useAtom(displayAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const { generalBgColor, generalbgCloud, generalColorPrimary } = props.general;
  const { kepadaImage, kepadaTitle, kepadaButtonLabel } = props.kepada;

  const section = css({
    backgroundColor: generalBgColor.value,
    display: display,
  });

  const box = css({
    backgroundImage: `url(${generalbgCloud.value})`,
  });

  const button = css({
    borderColor: generalColorPrimary.value,
    '&:hover': {
      backgroundColor: generalColorPrimary.value,
    },
  });

  function handleClickKepada() {
    setDisplay('none');
    setIsPlaying(!isPlaying);
  }

  return (
    <div
      className={cn(
        'fixed h-full w-full z-[500] opacity-100 overflow-y-hidden',
        section(),
      )}
    >
      <div className={cn('mx-auto max-w-md h-full px-4')}>
        <div
          className={cn(
            'relative flex flex-col items-center justify-center text-center',
            'h-full w-full py-8 px-4 bg-center bg-no-repeat bg-contain',
            box(),
          )}
        >
          {/* Kepada Image */}
          {kepadaImage && kepadaImage.is_active && (
            <div className={cn('flex')}>{props.image}</div>
          )}

          {/* General Hr */}
          <div className={cn('mt-6')}>{props.hr}</div>

          {/* Kepada Title */}
          {kepadaTitle && kepadaTitle.is_active && (
            <div className={cn('mt-4 font-bold italic')}>
              {kepadaTitle.value}
            </div>
          )}

          {/* Options Guest */}
          <div className={cn('mt-6 font-bold text-3xl')}>
            {props.options.guest}
          </div>

          {/* Kepada Button Label */}
          <button
            type="button"
            className={cn(
              'mt-6 bg-white text-black font-bold italic',
              'border-2 rounded-3xl px-8 py-2',
              button(),
            )}
            onClick={handleClickKepada}
          >
            {kepadaButtonLabel.value}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kepada;
