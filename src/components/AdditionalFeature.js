import React from 'react';
import { connect } from "react-redux";
import { updateFeature } from "../actions/CarActions";

const AdditionalFeature = props => {
  return (
    <li>
      {}
      <button onClick={() => props.updateFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {

  return {}
};

export default connect(
  mapStateToProps,
  { updateFeature }
)(AdditionalFeature);
