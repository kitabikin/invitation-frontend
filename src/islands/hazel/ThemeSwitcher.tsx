import st from '@/styles/ThemeSwitcher.module.css';
import {
  Select,
  SelectArrow,
  SelectItem,
  SelectPopover,
  useSelectState,
} from 'ariakit/select';
import { useAtom } from 'jotai';
import { themeAtom } from '@/store/hazelStore';

const OPTIONS = [
  { value: 'theme-blue', label: 'Biru' },
  { value: 'theme-red', label: 'Merah' },
  { value: 'theme-green', label: 'Hijau' },
];

export const ThemeSwitcher = () => {
  const [themeColor, setThemeColor] = useAtom(themeAtom);
  const select = useSelectState({
    defaultValue: themeColor,
    sameWidth: true,
    gutter: 4,
    setValue: (value) => {
      if (select.value !== value) {
        document.querySelector('body')?.classList.remove(themeColor);
        setThemeColor(value);
        document.querySelector('body')?.classList.add(value);
      }
    },
  });
  const selected = OPTIONS.find((res: any) => res.value === select.value);

  return (
    <div>
      <Select state={select} className={st.select}>
        {selected?.label}
        <SelectArrow />
      </Select>
      <SelectPopover state={select} className={st.popover}>
        {OPTIONS.map((res: any) => (
          <SelectItem
            key={res.value}
            className={st.selectItem}
            value={res.value}
          >
            {res.label}
          </SelectItem>
        ))}
      </SelectPopover>
    </div>
  );
};

export default ThemeSwitcher;
