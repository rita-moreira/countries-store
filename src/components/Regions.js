import React from "react";
import { connect } from "react-redux";
import { selectRegion } from "../actions";
import { fetchCountries } from "../actions";

class Reagions extends React.Component {
  renderRegions() {
    return this.props.regions.map((region) => {
      return (
        <button
          key={region.name}
          className="ui button"
          onClick={() => {
            this.props.selectRegion(region);
            this.props.fetchCountries(region);
          }}
        >
          {region.name}
        </button>
      );
    });
  }
  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "50%",
          transform: "translate(-50%)",
        }}
        className="ui five buttons"
      >
        {this.renderRegions()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.regions);
  return { regions: state.regions };
};

export default connect(mapStateToProps, { selectRegion, fetchCountries })(
  Reagions
);
