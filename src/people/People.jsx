import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ...
import {showPeopleList} from '../actions/people';




class People extends Component {
  static propTypes = {
    // ...
    people : PropTypes.array.isRequired
  };

  // ...
  renderPeopleList = () => {
    const pplList = this.props.people;
    return pplList.map( (item, i) => {
      return <div className="App-box" key={i} >{item.name}</div>
    })
  }

  render() {
    return (
      <div>
        {this.renderPeopleList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // ...
  return {
    people : state.myStates.people
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(People);
