import { css } from '@stitches/core';
import { Button as Btn } from 'ariakit/button';

const button = css({
  display: 'flex',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  whiteSpace: 'nowrap',
  borderRadius: '20px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'var(--hazel-color-primary)',
  backgroundColor: '#FFF',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  fontSize: '1rem',
  fontWeight: 700,
  fontStyle: 'italic',
  lineHeight: '1.5rem',
  color: 'var(--hazel-color-body)',
  textDecorationLine: 'none',
  '&:hover': {
    backgroundColor: 'var(--hazel-color-primary)',
    color: '#FFF',
  },
});

export default function Button(props: any) {
  return (
    <Btn {...props} className={button()}>
      {props.children}
    </Btn>
  );
}
