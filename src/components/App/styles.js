import { css } from '@emotion/core'

export const main = css`
  padding: 0 48px 24px;

  @media (max-width: 420px) {
    padding: 0 24px 12px;  
  }
`

export const btn_add = css`
  margin: 25px 50px;
  background-color: #FFF;
  width: 120px;
  height: 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  @media (max-width: 420px) {
    margin: 18px 24px;  
  }
`

export const cards = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 18px;
`
