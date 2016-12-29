import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { loadInfo } from '../../redux/actions';

@connect(
    state => ({info: state.info.data}),
  {loadInfo})
export default class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.object,
    loadInfo: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.loadInfo();
  }

  render() {
    const {info} = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');
    return (
      <div className={styles.infoBar + ' well'}>
        <div className="container">
          This is an info bar
          {' '}
          <strong>{info ? info.message : 'no info!'}</strong>
          <span className={styles.time}>{info && new Date(info.time).toString()}</span>
          <button className="btn btn-primary" onClick={this.handleClick}>Reload from server</button>
        </div>
      </div>
    );
  }
}
