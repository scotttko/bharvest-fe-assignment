import { css } from '@emotion/react'

export const fontVariables = css`
  :root {
    --f-size-micro: 14px;
    --f-size-small: 16px;
    --f-size-large: 18px;
    --f-size-true: 18px;

    --f-weight-small: 400;
    --f-weight-true: 400;
    --f-weight-book: 400;
    --f-weight-medium: 500;
    --f-weight-large: 600;

    --f-lineHeight-small: 20px;
    --f-lineHeight-large: 24px;
    --f-lineHeight-true: 24px;
  }
`

export const fonts = {
  size: {
    micro: 'var(--f-size-micro)',
    small: 'var(--f-size-small)', // 16px
    large: 'var(--f-size-large)', // 18px
    true: 'var(--f-size-true)', // 18px
  },
  weight: {
    small: 'var(--f-weight-small)', // 400
    true: 'var(--f-weight-true)', // 400
    book: 'var(--f-weight-book)', // 400
    medium: 'var(--f-weight-medium)', // 500
    large: 'var(--f-weight-large)', // 500
  },
  lineHeight: {
    small: 'var(--f-lineHeight-small)', // 20px
    large: 'var(--f-lineHeight-large)', // 24px
    true: 'var(--f-lineHeight-true)', // 24px
  },
}

export type Fonts = keyof typeof fonts
