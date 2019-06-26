import { css } from '@emotion/core'

export const app = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

export const main = css`
  display: flex;
  
  height: 100%;
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
  box-shadow: 0px 4px 4px rgb(0, 0, 0);
  
  @media (max-width: 420px) {
    margin: 18px 12px;  
  }
`
