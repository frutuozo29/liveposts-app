import { css } from '@emotion/core'

export const main = css`
  display: grid;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.125);
  overflow: hidden;
  grid-template-rows: 1fr auto;
  background-color: #065D79;
  margin-top: 32px;
`

export const form = css`
  display: grid;
  grid-auto-rows: auto auto auto auto 38px;
  justify-items: start;
  grid-gap: 4px;
  padding: 12px 12px;

  > span {
    color: #FFF;
    align-self: self-end;
    margin-top: 8px;
  }

  > input, textarea {
    padding: 3px 6px;
    border-radius: 3px;
    border: none;
  }

  > textarea {
    resize: none;
    width: 100%;
  }
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
  grid-gap: 10px;
  padding-top: 8px;
`
const btn_default = css`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
`

export const btn_criar = css`
  ${btn_default}  
  
  background-color: #007bff;
  border-color: #007bff;
`

export const btn_cancelar = css`
  ${btn_default}

  background-color: #545b62;
  border-color: #4e555b;
`