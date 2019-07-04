import { css } from '@emotion/core'

export const main = css`
  display: grid;
  grid-auto-rows: min-content;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.125);
  overflow: hidden;
  background-color: #0066cc;
  margin-top: 32px;
  width: 100%;
  height: min-content;
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

export const description = css`
  text-align: justify; 
  padding: 8px 12px;
  color: #FFF;
`

export const btn_voltar = css`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  height: 32px;
  background-color: #545b62;
  border-color: #4e555b;
  width: 80px;
  margin: 8px 12px;
`