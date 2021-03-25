const initialState = {};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    case 'HOME_DATA': {
      return {
        ...state,
        homeDataError: action.error ? action.error : null,
        homeDataSuccess: action.subtype === 'success',
        homeDataLoading: action.subtype === 'loading',
        homeData:
          action.subtype === 'success' ? action.homeData : state.homeData,
      };
    }
    case 'MOVIE_DATA': {
      return {
        ...state,
        movieDataError: action.error ? action.error : null,
        movieDataSuccess: action.subtype === 'success',
        movieDataLoading: action.subtype === 'loading',
        movieData:
          action.subtype === 'success' ? action.movieData : state.movieData,
      };
    }
    default:
      return state;
  }
}
