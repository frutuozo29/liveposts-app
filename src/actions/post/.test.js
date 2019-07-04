import * as actions from '../post'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const mockStore = configureMockStore([thunk])
const URL_MOCK_API = 'http://localhost:1000'

const response = {
  posts: [
    {
      _id: "5d0aced050e88427a0603abb",
      name: "Primeiro texto livro desse artigo",
      description: "Existem muitas variações disponíveis de passagens de Lorem Ipsum.",
      votes: 49
    }
  ],
  count: 1
}

describe('Actions test', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      post: {
        items: [],
        count: 0,
        isLoading: false,
        hasError: false,
        isPosting: false,
        hasPostError: false
      }
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  test('Action getPostsRequest', () => {
    const action = actions.getPostsRequest()
    expect(action).toEqual({
      type: 'GET_POSTS_REQUEST'
    })
  })

  test('Action getPostsRequestSuccess', () => {
    const action = actions.getPostsRequestSuccess({})
    expect(action).toEqual({
      type: 'GET_POSTS_REQUEST_SUCCESS',
      payload: {}
    })
  })

  test('Action getPostsRequestError', () => {
    const action = actions.getPostsRequestError()
    expect(action).toEqual({
      type: 'GET_POSTS_REQUEST_ERROR'
    })
  })

  test('Action getPosts', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post`, response)

    const expectedActions = [
      { type: 'GET_POSTS_REQUEST' },
      {
        type: 'GET_POSTS_REQUEST_SUCCESS',
        payload: [
          ...response.posts
        ]
      }

    ]

    await store.dispatch(actions.getPosts())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action getPosts returns 500', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post`, 500)

    const expectedActions = [
      { type: 'GET_POSTS_REQUEST' },
      { type: 'GET_POSTS_REQUEST_ERROR' }
    ]

    await store.dispatch(actions.getPosts())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action updateVotesRequest', () => {
    const action = actions.updateVotesRequest()
    expect(action).toEqual({
      type: 'UPDATE_VOTES_REQUEST'
    })
  })

  test('Action updateVotesSuccess', () => {
    const action = actions.updateVotesSuccess({})
    expect(action).toEqual({ type: 'UPDATE_VOTES_SUCCESS' })
  })

  test('Action updateVotesError', () => {
    const action = actions.updateVotesError()
    expect(action).toEqual({ type: 'UPDATE_VOTES_ERROR' })
  })

  test('Action updateVotes', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, response)

    const expectedActions = [
      { type: 'UPDATE_VOTES_REQUEST' },
      { type: 'UPDATE_VOTES_SUCCESS' }

    ]

    await store.dispatch(actions.updateVotes(1, 1))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action updateVotes returns 500', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, 500)

    const expectedActions = [
      { type: 'UPDATE_VOTES_REQUEST' },
      { type: 'UPDATE_VOTES_ERROR' }
    ]

    await store.dispatch(actions.updateVotes(1, 1))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action setVotes', () => {
    const action = actions.setVotes(1, 1)
    expect(action).toEqual({
      type: 'SET_VOTES',
      payload: { id: 1, votes: 1 }
    })
  })

  test('Action setIsIncluding', () => {
    const action = actions.setIsIncluding(true)
    expect(action).toEqual({
      type: 'SET_ISINCLUDING',
      payload: true
    })
  })

  test('Action createPostRequest', () => {
    const action = actions.createPostRequest({})
    expect(action).toEqual({ type: 'CREATE_POST_REQUEST' })
  })

  test('Action createPostSuccess', () => {
    const action = actions.createPostSuccess()
    expect(action).toEqual({ type: 'CREATE_POST_SUCCESS' })
  })

  test('Action createPostError', () => {
    const action = actions.createPostError()
    expect(action).toEqual({ type: 'CREATE_POST_ERROR' })
  })

  test('Action createPost', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post`, response)

    const expectedActions = [
      { type: 'CREATE_POST_REQUEST' },
      { type: 'CREATE_POST_SUCCESS' }
    ]

    await store.dispatch(actions.createPost('Teste', 'Post de teste'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action createPost returns 500', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post`, 500)

    const expectedActions = [
      { type: 'CREATE_POST_REQUEST' },
      { type: 'CREATE_POST_ERROR' }
    ]

    await store.dispatch(actions.createPost('Teste', 'Post de teste'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action setPostSelected', () => {
    const action = actions.setPostSelected({})
    expect(action).toEqual({ type: 'SET_POST_SELECTED', payload: {} })
  })

  test('Action getPostById', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, response)

    const expectedActions = [{
      type: 'SET_POST_SELECTED',
      payload: response
    }]

    await store.dispatch(actions.getPostById('1'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action getPostById returns 500', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, 500)

    const expectedActions = []

    await store.dispatch(actions.getPostById('1'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action deletePostRequestSucces', () => {
    const action = actions.deletePostRequestSucces('1')
    expect(action).toEqual({ type: 'DELETE_POST_REQUEST_SUCCESS', id: '1' })
  })

  test('Action deletePostById', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, response)

    const expectedActions = [{
      type: 'DELETE_POST_REQUEST_SUCCESS',
      id: '1'
    }]

    await store.dispatch(actions.deletePostById('1'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Action deletePostById returns 500', async () => {
    fetchMock.mock(`${URL_MOCK_API}/post/1`, 500)

    const expectedActions = [{
      type: 'SET_POST_SELECTED',
      payload: {}
    }]

    await store.dispatch(actions.deletePostById('1'))
    expect(store.getActions()).toEqual(expectedActions)
  })

})