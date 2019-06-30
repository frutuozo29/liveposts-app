/** @jsx jsx */

import { jsx } from '@emotion/core'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as postActions from '../../actions/post'

import { cards } from './styles'
import Card from '../Card'
import Loading from '../Loading'
import Message from '../Message'

// react-redux

const CardList = () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)
  const isLoading = useSelector(state => state.posts.isLoading)
  const hasError = useSelector(state => state.posts.hasError)

  useEffect(() => { !posts.length && !isLoading && !hasError && dispatch(postActions.getPosts()) }, [isLoading, hasError, posts, dispatch])

  if (isLoading) {
    return <Loading testid="cardlist" />
  } else if (hasError) {
    return <Message testid="cardlist" icon="fa-times" text="Ocorreu um erro ao carregar os dados, tente novamente." />
  } else if (posts && posts.length) {
    return (
      <div data-testid="cardlist" css={cards}>
        {posts.sort((a, b) => b.votes - a.votes).map(post => (
          <Card
            {...{ post }}
            key={post._id}
            upVote={(() => dispatch(postActions.updateVotes(post._id, 1)))}
            downVote={(() => dispatch(postActions.updateVotes(post._id, -1)))}
          />
        ))
        }
      </div>
    )
  } else {
    return <Message testid="cardlist" icon="fa-exclamation-triangle" text="Não existem posts para visualizar." />
  }
}
export default CardList