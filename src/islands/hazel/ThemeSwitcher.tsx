import { Fragment } from 'react';
import cn from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2/index.js';
import { useAtom } from 'jotai';
import { themeAtom } from '@/store/hazelStore';

const OPTIONS = [
  { value: 'theme-blue', label: 'Biru' },
  { value: 'theme-red', label: 'Merah' },
  { value: 'theme-green', label: 'Hijau' },
];

export const ThemeSwitcher = () => {
  const [themeColor, setThemeColor] = useAtom(themeAtom);

  const handleClick = (theme: any) => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.classList.remove(themeColor.value);
    setThemeColor(theme);
    body.classList.add(theme.value);
  };

  return (
    <div className="w-40">
      <Listbox value={themeColor} onChange={handleClick}>
        <div className="relative">
          <Listbox.Button
            className={cn(
              'relative w-full cursor-default rounded-lg',
              'bg-white py-2 pl-3 pr-10 text-left shadow-md  sm:text-sm',
              'focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2',
              'focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300',
            )}
          >
            <span className="block truncate">{themeColor.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={cn(
                'absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-base sm:text-sm py-1',
                'bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              )}
            >
              {OPTIONS.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    cn(
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                      active ? 'bg-sky-100 text-sky-900' : 'text-gray-900',
                    )
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={cn(
                          'block truncate',
                          selected ? 'font-medium' : 'font-normal',
                        )}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span
                          className={cn(
                            'absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600',
                          )}
                        >
                          <HiCheck className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ThemeSwitcher;
