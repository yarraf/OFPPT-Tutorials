// import React, { useEffect } from "react";
// import { getData } from "../actions";
// import { connect } from "react-redux";


// const Post = ({getData})=>{

//     useEffect(()=>{
//         getData();
//     })
// }


// const mapDispatchToProps = dispatch =>{
//     return getData = dispatch(getData());
// }

// export default connect(null,mapDispatchToProps)(Post);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('call posts');
    this.props.getData();
  }

  render() {
    return  (
      <ul>
        {this.props.articles ? this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        )):<h2>No post</h2>}
      </ul>
    );
   
  }
}

function mapStateToProps(state) {
  return {
    // articles: state.remoteArticles.slice(0, 10)
    articles: state.remoteArticles.slice(0,10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);

// export default Post;
