/** @jsx jsx */

import { jsx } from '@emotion/core'

import { useEffect, useState } from 'react'

// react-redux
import { useSelector, useDispatch } from 'react-redux'
import * as postActions from '../../actions/post'
import { apiBaseUrl } from '../../actions'

import socketIOClient from 'socket.io-client'

import { main, cards, btn_add } from './styles'

import Header from '../Header'
import Card from '../Card'

const App = () => {

  const isLoading = useSelector(state => state.posts.isLoading)
  const hasError = useSelector(state => state.posts.hasError)
  const posts = useSelector(state => state.posts.items)
  const dispatch = useDispatch()

  const [hasSocket, setHasSocket] = useState(false)

  useEffect(() => { !posts.length && !isLoading && !hasError && dispatch(postActions.getPosts()) }, [isLoading, hasError, posts, dispatch])

  useEffect(() => {
    !hasSocket && (() => {
      const socket = socketIOClient(apiBaseUrl)
      socket.on('newVote', (data) => {
        dispatch(postActions.setVotes(data.id, data.votes))
      })

      setHasSocket(true)
    })()
  }, [hasSocket, dispatch])


  return (
    <div className="App">
      <Header />
      <button css={btn_add}>Novo Post</button>
      <div css={main}>
        <div css={cards}>
          {posts && posts.sort((a, b) => b.votes - a.votes).map(post => (
            <Card
              {...{ post }}
              key={post._id}
              upVote={(() => dispatch(postActions.updateVotes(post._id, 1)))}
              downVote={(() => dispatch(postActions.updateVotes(post._id, -1)))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default App
