import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --white: #ffffff;
    --black: #000000;
    --surface1: #ffffff;
    --surface1Hovered: #fcfcfc;
    --surface2: #f9f9f9;
    --surface2Hovered: #f2f2f2;
    --surface3: rgba(34, 34, 34, 0.05);
    --surface3Solid: #f2f2f2;
    --surface3Hovered: rgba(19, 19, 19, 0.1);
    --surface4: rgba(19, 19, 19, 0.08);
    --surface5: rgba(0, 0, 0, 0.04);
    --scrim: rgba(0, 0, 0, 0.6);
    --neutral1: #131313;
    --neutral1Hovered: rgba(19, 19, 19, 0.83);
    --neutral2: rgba(19, 19, 19, 0.63);
    --neutral2Hovered: rgba(19, 19, 19, 0.83);
    --neutral3: rgba(19, 19, 19, 0.35);
    --neutral3Hovered: rgba(19, 19, 19, 0.55);

    --accent1: #ff37c7;
    --accent1Hovered: #e500a5;
    --accent2: rgba(255, 55, 199, 0.08);
    --accent2Solid: #fff3fc;
    --accent2Hovered: rgba(255, 55, 199, 0.12);
    --accent3: #222222;
    --accent3Hovered: #000000;

    --background: #ffffff;
    --backgroundHover: #f9f9f9;
    --backgroundPress: #f9f9f9;
    --backgroundFocus: #f9f9f9;

    --color: #131313;
    --colorHover: #ff37c7;
    --colorPress: #ff37c7;
    --colorFocus: #ff37c7;
    --shadowColor: rgba(0, 0, 0, 0.15);
    --shadowColorHover: rgba(0, 0, 0, 0.2);
  }

  [data-theme='dark'] {
    --white: #ffffff;
    --black: #000000;
    --surface1: #131313;
    --surface1Hovered: #1a1a1a;
    --surface2: #1f1f1f;
    --surface2Hovered: #242424;
    --surface3: rgba(255, 255, 255, 0.12);
    --surface3Solid: #393939;
    --surface3Hovered: rgba(255, 255, 255, 0.16);
    --surface4: rgba(255, 255, 255, 0.2);
    --surface5: rgba(0, 0, 0, 0.04);
    --scrim: rgba(0, 0, 0, 0.6);
    --neutral1: #ffffff;
    --neutral1Hovered: rgba(255, 255, 255, 0.85);
    --neutral2: rgba(255, 255, 255, 0.65);
    --neutral2Hovered: rgba(255, 255, 255, 0.85);
    --neutral3: rgba(255, 255, 255, 0.38);
    --neutral3Hovered: rgba(255, 255, 255, 0.58);
    --accent1: #ff37c7;
    --accent1Hovered: #e500a5;
    --accent2: rgba(255, 55, 199, 0.08);
    --accent2Solid: #261621;
    --accent2Hovered: rgba(255, 55, 199, 0.12);
    --accent3: #ffffff;
    --accent3Hovered: #f5f5f5;

    --background: #131313;
    --backgroundHover: #1f1f1f;
    --backgroundPress: #1f1f1f;
    --backgroundFocus: #1f1f1f;

    --color: #ffffff;
    --colorHover: #ff37c7;
    --colorPress: #ff37c7;
    --colorFocus: #ff37c7;
    --shadowColor: rgba(0, 0, 0, 0.4);
    --shadowColorHover: rgba(0, 0, 0, 0.5);
  }
`

export const colors = {
  white: 'var(--white)',
  black: 'var(--black)',

  surface1: 'var(--surface1)',
  surface1Hovered: 'var(--surface1Hovered)',
  surface2: 'var(--surface2)',
  surface2Hovered: 'var(--surface2Hovered)',
  surface3: 'var(--surface3)',
  surface3Solid: 'var(--surface3Solid)',
  surface3Hovered: 'var(--surface3Hovered)',
  surface4: 'var(--surface4)',
  surface5: 'var(--surface5)',

  scrim: 'var(--scrim)',

  neutral1: 'var(--neutral1)',
  neutral1Hovered: 'var(--neutral1Hovered)',
  neutral2: 'var(--neutral2)',
  neutral2Hovered: 'var(--neutral2Hovered)',
  neutral3: 'var(--neutral3)',
  neutral3Hovered: 'var(--neutral3Hovered)',

  accent1: 'var(--accent1)',
  accent1Hovered: 'var(--accent1Hovered)',
  accent2: 'var(--accent2)',
  accent2Solid: 'var(--accent2Solid)',
  accent2Hovered: 'var(--accent2Hovered)',
  accent3: 'var(--accent3)',
  accent3Hovered: 'var(--accent3Hovered)',

  background: 'var(--background)',
  backgroundHover: 'var(--backgroundHover)',
  backgroundPress: 'var(--backgroundPress)',
  backgroundFocus: 'var(--backgroundFocus)',

  color: 'var(--color)',
  colorHover: 'var(--colorHover)',
  colorPress: 'var(--colorPress)',
  colorFocus: 'var(--colorFocus)',

  shadowColor: 'var(--shadowColor)',
  shadowColorHover: 'var(--shadowColorHover)',
}

export type Colors = keyof typeof colors
