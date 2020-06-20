import React from 'react';
import { connect } from "react-redux";
import { addAdditionalFeature } from "../actions";

const AdditionalFeature = props => {
  const handleBuyItem = (features) => {
    let hasFeature = false;
    if (props.car.features.length === 0) {
      props.addAdditionalFeature(features);
      hasFeature = true;
    }
    props.car.features.map (f=> {
      if (f.id === features.id) {
        hasFeature = true;
      }
    });
    if (!hasFeature) {
      props.addAdditionalFeature(features);
    }
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        onClick = {() => handleBuyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {addAdditionalFeature}

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
