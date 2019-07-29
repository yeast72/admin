import React, { Component } from "react";
import { connect } from "react-redux";

class AdminPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>Admin Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products.byId };
};

export default connect(mapStateToProps)(AdminPage);
