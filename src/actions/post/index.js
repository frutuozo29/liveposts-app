import { apiBaseUrl } from '../../actions'

export const getPostsRequest = () => ({ type: 'GET_POSTS_REQUEST' })

export const getPostsRequestSuccess = (payload) => ({ type: 'GET_POSTS_REQUEST_SUCCESS', payload })

export const getPostsRequestError = () => ({ type: 'GET_POSTS_REQUEST_ERROR' })

export const getPosts = () => (dispacth) => {
  dispacth(getPostsRequest())

  return fetch(`${apiBaseUrl}/post`)
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(({ posts }) => dispacth(getPostsRequestSuccess(posts)))
    .catch(() => dispacth(getPostsRequestError()))
}

export const updateVotesRequest = () => ({ type: 'UPDATE_VOTES_REQUEST' })

export const updateVotesSuccess = () => ({ type: 'UPDATE_VOTES_SUCCESS' })

export const updateVotesError = () => ({ type: 'UPDATE_VOTES_ERROR' })

export const updateVotes = (id, vote) => (dispacth) => {
  dispacth(updateVotesRequest())
  const body = { vote }

  return fetch(`${apiBaseUrl}/post/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(() => dispacth(updateVotesSuccess()))
    .catch(() => dispacth(updateVotesError()))
}

export const setVotes = (id, votes) => ({ type: 'SET_VOTES', payload: { id, votes } })

export const setIsIncluding = (isIncluding) => ({ type: 'SET_ISINCLUDING', payload: isIncluding })

export const createPostRequest = () => ({ type: 'CREATE_POST_REQUEST' })

export const createPostSuccess = () => ({ type: 'CREATE_POST_SUCCESS' })

export const createPostError = () => ({ type: 'CREATE_POST_ERROR' })

export const createPost = (name, description) => (dispacth) => {
  dispacth(createPostRequest())
  const body = { name, description }

  return fetch(`${apiBaseUrl}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(() => dispacth(createPostSuccess()))
    .catch(() => dispacth(createPostError()))
}

export const setPostSelected = (payload) => ({ type: 'SET_POST_SELECTED', payload })

export const getPostById = (id) => (dispacth) => {
  return fetch(`${apiBaseUrl}/post/${id}`)
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then((response) => dispacth(setPostSelected(response)))
    .catch(() => { })
}

export const deletePostRequestSucces = (id) => ({ type: 'DELETE_POST_REQUEST_SUCCESS', id })

export const deletePostById = (id) => (dispacth) => {
  return fetch(`${apiBaseUrl}/post/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(() => dispacth(deletePostRequestSucces(id)))
    .catch(() => dispacth(setPostSelected({})))
}