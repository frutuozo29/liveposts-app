/** @jsx jsx */

import { jsx } from '@emotion/core'

import { main, cards, btn_add } from './styles'

import Header from '../Header'
import Card from '../Card'

const App = () => (
  <div className="App">
    <Header />
    <button css={btn_add}>Novo Post</button>
    <div css={main}>
      <div css={cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
)

export default App
