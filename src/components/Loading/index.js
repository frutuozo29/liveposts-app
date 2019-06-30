/** @jsx jsx */

import { jsx } from '@emotion/core'

import { wrapper, forward, backward } from './styles'

const Loading = ({ testid = 'loading' }) => {
  return (
    <div data-testid={testid} css={wrapper}>
      <div css={forward}></div>
      <div css={backward}></div>
    </div>
  )
}

export default Loading