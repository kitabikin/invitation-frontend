import cn from 'classnames';
import { useAtom } from 'jotai';
import { IKImage, IKContext } from 'imagekitio-react';
import {
  isDisplayAtom,
  overflowYAtom,
  isPlayingAtom,
} from '@/store/hazelStore';

export const To = ({ ...props }) => {
  const [isDisplay, setIsDisplay] = useAtom(isDisplayAtom);
  const [_, setOverflowY] = useAtom(overflowYAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const { guest } = props.options;
  const { toImage, toTitle, toButtonLabel } = props.to;

  const handleClick = () => {
    setIsDisplay(false);
    setIsPlaying(!isPlaying);
    setOverflowY('auto');
  };

  return (
    <>
      <div
        className={cn(
          'fixed h-full w-full z-[600] opacity-100',
          'bg-[color:var(--hazel-bg-color)]',
          isDisplay ? 'block' : 'hidden',
        )}
      >
        <div className={cn('mx-auto max-w-md h-full px-4')}>
          <div
            className={cn(
              'relative flex flex-col items-center justify-center text-center',
              'h-full w-full py-8 px-4 bg-center bg-no-repeat bg-contain',
              'bg-[image:var(--hazel-bg-to)]',
            )}
          >
            {/* Kepada Image */}
            {toImage && toImage.is_active && (
              <div className={cn('flex rounded-full overflow-hidden')}>
                <IKContext urlEndpoint="https://ik.imagekit.io/kitabikincom">
                  <IKImage
                    src={toImage.value}
                    alt={toImage.label}
                    transformation={[
                      {
                        height: '100',
                        width: '100',
                      },
                    ]}
                    loading="lazy"
                  />
                </IKContext>
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

            <div className={cn('mt-5')}>
              <button
                type="button"
                className={cn(
                  'bg-white hover:bg-[color:var(--hazel-color-primary)]',
                  'text-[color:var(--hazel-color-body)] hover:text-white',
                  'border-2 border-[color:var(--hazel-color-primary)]',
                  'italic font-bold text-sm rounded-full',
                  'px-6 py-2',
                )}
                onClick={handleClick}
              >
                {toButtonLabel.value}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default To;
