import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

// Redux
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

describe('App tests', () => {

  const mockStore = configureMockStore([thunk])

  test('Render component', () => {
    var store = mockStore({
      posts: {
        items: [

        ],
        count: 0,
        isLoading: false,
        hasError: false,
        isPosting: false,
        hasPostError: false
      }
    })

    const { getByTestId } = render(<Provider store={store}><App /></Provider>)

    expect(getByTestId('app')).toBeInTheDocument(true)
  })

  test('Render component with posts', () => {
    var store = mockStore({
      posts: {
        items: [
          {
            "_id": "5d0aced050e88427a0603abx",
            "name": "Primeiro texto livro desse artigo",
            "description": "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.",
            "votes": 49
          },
          {
            "_id": "5d0aced050e88427a0603abb",
            "name": "Primeiro texto livro desse artigo",
            "description": "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.",
            "votes": 49
          }
        ],
        count: 0,
        isLoading: false,
        hasError: false,
        isPosting: false,
        hasPostError: false
      }
    })

    const { getByTestId } = render(<Provider store={store}><App /></Provider>)

    expect(getByTestId('app')).toBeInTheDocument(true)
  })

  test('Test Upvote', () => {
    var store = mockStore({
      posts: {
        items: [
          {
            "_id": "5d0aced050e88427a0603abx",
            "name": "Primeiro texto livro desse artigo",
            "description": "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.",
            "votes": 49
          }
        ]
      }
    })

    const { getByTestId } = render(<Provider store={store}><App /></Provider>)
    const upVoteButton = getByTestId('up-vote')
    fireEvent.click(upVoteButton)
    expect(upVoteButton).toBeInTheDocument()
  })

  test('Test Downvote', () => {
    var store = mockStore({
      posts: {
        items: [
          {
            "_id": "5d0aced050e88427a0603abx",
            "name": "Primeiro texto livro desse artigo",
            "description": "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.",
            "votes": 49
          }
        ]
      }
    })

    const { getByTestId } = render(<Provider store={store}><App /></Provider>)
    const downVoteButton = getByTestId('down-vote')
    fireEvent.click(downVoteButton)
    expect(downVoteButton).toBeInTheDocument()
  })

})