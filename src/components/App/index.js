/** @jsx jsx */

import { jsx } from '@emotion/core'

import { useEffect } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'
import * as postActions from '../../actions/post'
import { apiBaseUrl } from '../../actions'

import socketIOClient from 'socket.io-client'

import { main, cards, btn_add } from './styles'

import Header from '../Header'
import Card from '../Card'

const App = ({ isLoading, hasError, posts, getPosts, updateVotes, setVotes }) => {

  useEffect(() => { !posts.length && !isLoading && !hasError && getPosts() }, [isLoading, hasError, posts, getPosts])

  const socket = socketIOClient(apiBaseUrl)
  socket.on('newVote', (data) => {
    setVotes(data.id, data.votes)
  })

  return (
    <div className="App">
      <Header />
      <button css={btn_add}>Novo Post</button>
      <div css={main}>
        <div css={cards}>
          {posts && posts.sort((a, b) => b.votes - a.votes).map(post =>
            <Card
              {...{ post }}
              key={post._id}
              upVote={(() => updateVotes(post._id, 1))}
              downVote={(() => updateVotes(post._id, -1))}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  hasError: posts.hasError,
  isLoading: posts.isLoading,
  posts: posts.items
})

const mapDispatchToProps = (dispatch) => bindActionCreators(postActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
