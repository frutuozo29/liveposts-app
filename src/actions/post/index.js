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