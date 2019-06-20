const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  hasError: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'POSTS_REQUEST_SUCESS':
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    case 'POSTS_REQUEST_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        posts: []
      }
    default:
      return state
  }
}

export default posts;