import React from "react";
import { connect } from "react-redux";

class Countries extends React.Component {
  renderCountriesList() {
    if (!this.props.countries) {
      return null;
    } else {
      return this.props.countries.map((country) => {
        return (
          <div
            style={{ marginLeft: "50%" }}
            className="item"
            key={country.name}
          >
            <div className="ui small image">
              <img
                className="ui avatar image"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className="middle aligned content">
              <div className="header">{country.name}</div>
              <div className="description">
                <p>{country.capital}</p>
              </div>
              <div className="extra">
                <div className="ui right floated button">Select</div>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    if (!this.props.region) {
      return (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <img
            style={{ backgroundColor: "whitesmoke" }}
            className="ui small centered circular image"
            src="../images/continents.png"
            alt="continents"
          />
          <h1 style={{ fontSize: "12px" }}>Please, select a region</h1>
        </div>
      );
    }
    return (
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <img
          style={{ backgroundColor: "whitesmoke" }}
          className="ui small centered circular image"
          src={this.props.region.img}
          alt={this.props.region.name}
        />
        <h1 style={{ fontSize: "12px" }}>{this.props.region.name}</h1>

        <div
          style={{ width: "50%", textAlign: "left" }}
          className=" ui  divided items"
        >
          {this.renderCountriesList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.countries.data);
  return { region: state.selectRegion, countries: state.countries.data };
};
export default connect(mapStateToProps)(Countries);
