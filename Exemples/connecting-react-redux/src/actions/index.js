

export const addArticle=(article)=>{
return {type:"ADD_ARTICLE", payload:article};
}

// export const getData = ()=>{
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }
// our new action creator. Will it work?
export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            console.log('response posts json' + JSON.stringify(json));
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }