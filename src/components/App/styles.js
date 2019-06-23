import { css } from '@emotion/core'

export const main = css`
  padding: 0 48px 24px;

  @media (max-width: 420px) {
    padding: 0 12px 24px;  
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
    margin: 18px 12px;  
  }
`

export const cards = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 18px;
`

export const no_data = css`
  display: grid;
  grid-template-rows: 200px 200px;
  justify-items: center;
  align-items: center;
  grid-gap: 16px;
`

export const no_posts = css`
  color: #FFF;
  text-align: center;
  align-self: self-start;
`

export const icon_info = css`
  font-size: 48px;
  color: #FFF;
  align-self: self-end;
`
