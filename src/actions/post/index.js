import { apiBaseUrl } from '../../actions'

export const getPostsRequest = () => ({ type: 'POSTS_REQUEST' })

export const getPostsRequestSucess = (payload) => ({ type: 'POSTS_REQUEST_SUCESS', payload })

export const getPostsRequestError = () => ({ type: 'POSTS_REQUEST_ERROR' })

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