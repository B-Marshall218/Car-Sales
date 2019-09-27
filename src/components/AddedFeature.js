import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/CarActions";

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeFeature(props.feature.id)} className="button">X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {

  return {}
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
