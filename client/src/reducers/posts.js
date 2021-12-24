import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.id ? action.payload : post
        ),
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };

    case CREATE:
      return { ...state, posts: [...state, action.payload] };
    default:
      return state;
  }
};
