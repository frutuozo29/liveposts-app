/** @jsx jsx */

import { jsx } from '@emotion/core'

import { header, title, icon_title } from './styles'

const Header = () => (
  <header css={header} data-testid="header">
    <h1 css={title}>LivePosts</h1>
    <a href="https://github.com/frutuozo29/liveposts-app" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github" css={icon_title}></i>
    </a>
  </header>
)

export default Header