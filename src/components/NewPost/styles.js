import { css } from '@emotion/core'

export const main = css`
  display: grid;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.125);
  overflow: hidden;
  grid-template-rows: 1fr auto;
  background-color: #065D79;
`

export const form = css`
  display: grid;
  grid-auto-rows: 18px 22px 18px 150px 32px;
  grid-gap: 10px;
  padding: 12px 12px;
`

export const title = css`
  position: relative;
  padding: 8px 12px;
  color: #FFF;

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    bottom: 0;
    left: 12px;
    height: 1px;
    background-color: #fff;
  }
`

export const botoes = css`
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 12px;
`
const btn_default = css`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
`

export const btn_criar = css`
  ${btn_default}  
  
  background-color: #FFF;
`

export const btn_cancelar = css`
  ${btn_default}

  background-color: #FFF;
`
