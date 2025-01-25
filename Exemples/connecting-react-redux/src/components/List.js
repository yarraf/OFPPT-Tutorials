import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <div>
    
  <ul>
    {articles.length>0 ? articles.map(el => (
      <li key={el.id}>{el.title}</li>
    )) : <h2>Aucun produit</h2>}
  </ul>
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;