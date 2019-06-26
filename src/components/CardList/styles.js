import { css } from '@emotion/core'

export const cards = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 18px;
  grid-auto-rows: min-content;
`