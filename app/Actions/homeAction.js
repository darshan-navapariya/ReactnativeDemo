import AsyncStorage from 'react-native';

export function HOMEACTION() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'HOME_DATA',
          subtype: 'loading',
        });

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=906f53f43f1d5fb460ea00e641ae380c&page=1',
          requestOptions,
        )
          .then((response) => response.text())
          .then((result) => {
            let res = JSON.parse(result);
            dispatch({
              type: 'HOME_DATA',
              subtype: 'success',
              homeData: res,
            });
            resolve(res);
          })
          .catch((error) => {
            console.log('error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'HOME_DATA',
          error: e,
        });
      }
    });
  };
}
export function MOVIEDETAILS(id) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      try {
        dispatch({
          type: 'MOVIE_DATA',
          subtype: 'loading',
        });

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=906f53f43f1d5fb460ea00e641ae380c`,
          requestOptions,
        )
          .then((response) => response.text())
          .then((result) => {
            let res = JSON.parse(result);
            dispatch({
              type: 'MOVIE_DATA',
              subtype: 'success',
              homeData: res,
            });
            resolve(res);
          })
          .catch((error) => {
            console.log('error', error);
            rejects(error);
          });
      } catch (e) {
        dispatch({
          type: 'MOVIE_DATA',
          error: e,
        });
      }
    });
  };
}
