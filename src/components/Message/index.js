/** @jsx jsx */

import { jsx } from '@emotion/core'

import { no_data, no_posts, icon_info } from './styles'

const Message = ({ testid, icon, text }) => (
  <div data-testid={testid} css={no_data}>
    <i className={`fas ${icon}`} css={icon_info}></i>
    <h3 css={no_posts}>{text}</h3>
  </div>
)

export default Message
