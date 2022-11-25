import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { MdMusicNote, MdMusicOff } from 'react-icons/md/index.js';
import ReactPlayer from 'react-player';
import { isPlayingAtom } from '@/store/hazelStore';

export const Music = ({ ...props }) => {
  const [showChild, setShowChild] = useState(false);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const { musicSong } = props.music;

  return (
    <>
      <div className="z-[500]">
        <button
          type="button"
          className={cn(
            'fixed z-[500] w-[50px] h-[50px] bottom-[30px] right-[30px]',
            'flex items-center justify-center rounded-full',
            'text-gray-600 border-2 border-gray-600',
          )}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <MdMusicNote size={20} /> : <MdMusicOff size={20} />}
        </button>
        <ReactPlayer
          url={musicSong.value}
          playing={isPlaying}
          loop={true}
          style={{ display: 'none' }}
        />
      </div>
    </>
  );
};

export default Music;
