import React from "react";
import { incrementLike, decrementLike } from "./Redux/Actions";
import { connect } from "react-redux";

function LikeCounter({ like, increment, decrement }) {
  return (
    <div id="container">
      <p id="like-count">{like}</p>
      <div id="buttons">
      <button id="like" onClick={increment}>Like</button>
      <button id="unlike" onClick={decrement}>Unlike</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    like: state.like,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementLike()),
    decrement: () => dispatch(decrementLike()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeCounter);