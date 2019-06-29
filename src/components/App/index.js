/** @jsx jsx */

import { jsx } from '@emotion/core'

import { useEffect, useState } from 'react'

import Routes from '../../routes'
import { Link } from 'react-router-dom'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import * as postActions from '../../actions/post'
import { apiBaseUrl } from '../../actions'

import socketIOClient from 'socket.io-client'

import { app, main, btn_add } from './styles'

import Header from '../Header'

const App = () => {

  const dispatch = useDispatch()
  const isIncluding = useSelector(state => state.posts.isIncluding)
  const [hasSocket, setHasSocket] = useState(false)

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
    <div css={app} data-testid="app">
      <Header />
      {!isIncluding &&
        <Link css={btn_add} to="/newpost">Novo Post</Link>
      }
      <div css={main}>
        <Routes />
      </div>
    </div>
  )
}
export default App
