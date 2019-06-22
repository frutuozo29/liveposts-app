const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  hasError: false,
  isPosting: false,
  hasPostError: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_POSTS_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    case 'GET_POSTS_REQUEST_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        items: []
      }
    case 'UPDATE_VOTES_REQUEST':
      return {
        ...state,
        isPosting: true,
        hasPostError: false
      }
    case 'UPDATE_VOTES_SUCCESS':
      return {
        ...state,
        isPosting: false,
        hasPostError: false
      }
    case 'UPDATE_VOTES_ERROR':
      return {
        ...state,
        isPosting: false,
        hasPostError: true
      }
    case 'SET_VOTES':
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload.id ? { ...item, votes: action.payload.votes } : item
        )
      }
    default:
      return state
  }
}

export default posts;