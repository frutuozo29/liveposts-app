import { css } from '@emotion/core'

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const spin = css`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

export const forward = css`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-style: solid;
  border-width: 2px;
  border-color: #FFF #FFF transparent transparent;
  animation: spin 1.5s linear 0s infinite;
  
  ${spin}
`

export const backward = css`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-style: solid;
  border-width: 2px;
  border-color: #FFF #FFF transparent transparent;
  animation: spin 1s linear 0s infinite reverse;

  ${spin}
`