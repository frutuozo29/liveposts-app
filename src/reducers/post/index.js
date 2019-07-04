const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  hasError: false,
  isPosting: false,
  hasPostError: false,
  isIncluding: false,
  postSelected: {}
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
        items: action.payload,
        postSelected: {}
      }
    case 'GET_POSTS_REQUEST_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        items: []
      }
    case 'SET_POST_SELECTED':
      return {
        ...state,
        postSelected: action.payload
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
    case 'CREATE_POST_REQUEST':
      return {
        ...state,
        isPosting: true,
        hasPostError: false
      }
    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        isPosting: false,
        hasPostError: false,
        items: []
      }
    case 'CREATE_POST_ERROR':
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
    case 'SET_ISINCLUDING':
      return {
        ...state,
        isIncluding: action.payload
      }
    case 'DELETE_POST_REQUEST_SUCCESS':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.id),
        postSelected: {}
      }
    default:
      return state
  }
}

export default posts;