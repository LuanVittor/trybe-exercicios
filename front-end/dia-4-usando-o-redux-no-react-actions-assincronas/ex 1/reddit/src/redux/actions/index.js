export const REQUEST_API = 'REQUEST_API';
export const GET_REDDIT = 'GET_REDDIT';

export const resquestAPI = () => ({ type: REQUEST_API });

export const getReddit = (json) => ({
   type: GET_REDDIT,
   data: json.data.children.map((child) => child.data) 
  });

  export const failure = (error) => ({
    type: 'ERROR',
    error,
   });
 

export function fetchReddit() {
  return (dispatch) => {
    dispatch(resquestAPI());
    return fetch('https://www.reddit.com/r/reactjs.json')
    .then((r) => r.json()
    .then(
      (json) => dispatch(getReddit(json)),
      (error) => dispatch(failure(error.message))
    ))
  }
}
