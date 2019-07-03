/** @jsx jsx */

import { jsx } from '@emotion/core'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPostById } from '../../actions/post'
import { main, title, description, btn_voltar } from './styles'

const ViewPost = ({ history, match }) => {

  const dispatch = useDispatch()
  const postSelected = useSelector(({ posts }) => posts.postSelected)

  useEffect(() => {
    dispatch(getPostById(match.params.id))
  }, [dispatch, match])

  return (
    <div data-testid="viewpost" css={main}>
      <h3 css={title}>{postSelected.name}</h3>
      <p css={description}>
        {postSelected.description}
      </p>
      <button
        data-testid="btn-voltar"
        css={btn_voltar}
        onClick={() => {
          history.push('/')
        }}
      >Voltar</button>
    </div>
  )

}

export default ViewPost