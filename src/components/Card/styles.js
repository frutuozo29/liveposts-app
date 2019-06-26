import { css } from '@emotion/core'

export const card = css`
  display: grid;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.125);
  overflow: hidden;
  grid-template-rows: 30px 150px 40px;
  background-color: #0066cc;
`
export const card_title = css`
  position: relative;
  padding: 8px 12px;
  color: #FFF;

  &::after {
    content: '';
    position: absolute;
    right: 12px;
    bottom: -6px;
    left: 12px;
    height: 1px;
    background-color: #fff;
  }
`

export const card_description = css`
  padding: 12px 12px;
  color: #FFF; 
  font-size: 14px;
  height: 150px;
  text-align: justify;
  text-justify: inter-word;
`

export const card_footer = css`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #FFF;
  align-items: center;
  padding: 0 12px;
`

export const card_actions = css`
  display: grid;
  grid-template-columns: 24px 64px 24px;
  grid-template-rows: 40px;
  align-items: center;
  justify-items: center;
`

export const read_more = css`
  text-decoration: none;
  width: 82px;
`

export const icon_action_up = css`
  font-size: 22px;
  cursor: pointer;
  color: #42f445;
`

export const icon_action_down = css`
  font-size: 22px;
  cursor: pointer;
  color: #f44e20;
`