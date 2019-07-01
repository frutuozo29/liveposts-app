/** @jsx jsx */

import { jsx } from '@emotion/core'
import { useSelector } from 'react-redux'

import { main, title, description, btn_voltar } from './styles'

const ViewPost = ({ history, match }) => {

  const post = useSelector(({ posts }) => posts.items.find((post) => post._id === match.params.id))

  if (!post) {
    history.push('/')
  }
  else
    return (
      <div data-testid="viewpost" css={main}>
        <h3 css={title}>{post.name}</h3>
        <p css={description}>
          {post.description}
        </p>
        <button
          css={btn_voltar}
          onClick={() => {
            history.push('/')
          }}
        >Voltar</button>
      </div>
    )

}

export default ViewPost