import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(
  state => ({user: state.auth.user})
)
export default class Chat extends Component {

  static propTypes = {
    user: PropTypes.object
  };

  state = {
    message: '',
    messages: []
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const {user} = this.props;

    return (
      <div className={'container'}>
        <h1 className={style}>Editor</h1>


      </div>
    );
  }
}
