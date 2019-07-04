import post from '../post'

describe('Reducer test', () => {
  const state = {
    items: [],
    count: 0,
    isLoading: false,
    hasError: false,
    isPosting: false,
    hasPostError: false,
    isIncluding: false,
    postSelected: {}
  }

  test('return default value store', () => {
    expect(post(undefined, {})).toEqual(state)
  })

  test('return when GET_POSTS_REQUEST', () => {
    const action = { type: 'GET_POSTS_REQUEST' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isLoading: true
    })
  })

  test('return when GET_POSTS_REQUEST_SUCCESS', () => {
    const action = { type: 'GET_POSTS_REQUEST_SUCCESS', payload: { posts: [{}], count: 0 } }

    expect(post(undefined, action)).toEqual({
      ...state,
      isLoading: false,
      items: action.payload
    })
  })

  test('return when GET_POSTS_REQUEST_ERROR', () => {
    const action = { type: 'GET_POSTS_REQUEST_ERROR' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isLoading: false,
      hasError: true,
      items: []
    })
  })

  test('return when UPDATE_VOTES_REQUEST', () => {
    const action = { type: 'UPDATE_VOTES_REQUEST' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: true,
      hasPostError: false
    })
  })

  test('return when UPDATE_VOTES_SUCCESS', () => {
    const action = { type: 'UPDATE_VOTES_SUCCESS' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: false,
      hasPostError: false
    })
  })

  test('return when UPDATE_VOTES_ERROR', () => {
    const action = { type: 'UPDATE_VOTES_ERROR' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: false,
      hasPostError: true
    })
  })

  test('return when SET_VOTES', () => {
    let stateLocal = {
      ...state,
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
      ]
    }
    const action = { type: 'SET_VOTES', payload: { id: '5d0aced050e88427a0603abx', votes: 49 } }

    expect(post(stateLocal, action)).toEqual({ ...stateLocal })
  })

  test('return when SET_ISINCLUDING', () => {
    const action = { type: 'SET_ISINCLUDING', payload: true }

    expect(post(undefined, action)).toEqual({
      ...state,
      isIncluding: true
    })
  })

  test('return when SET_POST_SELECTED', () => {
    const action = { type: 'SET_POST_SELECTED', payload: {} }

    expect(post(undefined, action)).toEqual({
      ...state,
      postSelected: {}
    })
  })

  test('return when CREATE_POST_REQUEST', () => {
    const action = { type: 'CREATE_POST_REQUEST' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: true,
      hasPostError: false
    })
  })

  test('return when CREATE_POST_SUCCESS', () => {
    const action = { type: 'CREATE_POST_SUCCESS' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: false,
      hasPostError: false
    })
  })

  test('return when CREATE_POST_ERROR', () => {
    const action = { type: 'CREATE_POST_ERROR' }

    expect(post(undefined, action)).toEqual({
      ...state,
      isPosting: false,
      hasPostError: true
    })
  })

})