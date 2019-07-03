import { css } from '@emotion/core'

export const app = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  height: max-content;
`

export const main = css`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 48px 24px;

  @media (max-width: 420px) {
    padding: 0 12px 24px;
  }
`

export const btn_add = css`
  color: #000;
  display: inline-block;
  margin: 25px 50px;
  padding: 10px 20px;
  max-width: 150px;
  text-decoration: none;
  text-align: center;
  background-color: #FFF;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0);
  font-size: 14px;

  @media (max-width: 420px) {
    margin: 18px 12px;
  }
`