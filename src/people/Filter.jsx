import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ...
import { filterWord, checkKey } from '../actions/people';

class Filter extends Component {
  static propTypes = {
    // ...
    filter : PropTypes.string.isRequired
  };

  // ... 
  handleSearchChange = (event) => {
    this.props.filterWord(event.currentTarget.value);
  }

  keyPress = (e) => {
    this.props.checkKey(e.keyCode);
  }

  render() {
    return (
      <div className='App-box'>
        <input type="text" name="filter" value={this.props.filter} placeholder="Filter" onChange={this.handleSearchChange} onKeyDown={this.keyPress} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // ...
  return {
    filter: state.myStates.filterQuery
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
  filterWord,
  checkKey
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
