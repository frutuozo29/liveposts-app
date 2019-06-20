import { apiBaseUrl } from '../../actions'

export const getPostsRequest = () => ({ type: 'GET_POSTS_REQUEST' })

export const getPostsRequestSucess = (payload) => ({ type: 'GET_POSTS_REQUEST_SUCESS', payload })

export const getPostsRequestError = () => ({ type: 'GET_POSTS_REQUEST_ERROR' })

export const getPosts = () => (dispacth) => {
  dispacth(getPostsRequest())

  return fetch(`${apiBaseUrl}/post`)
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(({ posts }) => {
      console.log(posts)
      dispacth(getPostsRequestSucess(posts))
    })
    .catch(() => dispacth(getPostsRequestError()))
}

export const updateVotesRequest = () => ({ type: 'UPDATE_VOTES_REQUEST' })

export const updateVotesSucess = (response) => ({ type: 'UPDATE_VOTES_SUCCESS', payload: response })

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
    .then(response => response.json())
    .then(response => dispacth(updateVotesSucess(response)))
    .catch(() => dispacth(updateVotesError()))
}