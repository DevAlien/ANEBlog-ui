import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {updatePath} from 'redux-simple-router';
import {ActionTypes} from '../../constants';

export default class Home extends React.Component {
    static propTypes = {
    }

    constructor(props, context) {
      super(props, context);

    }

    render() {
      return <div>Home</div>;
    }
}

Home.onEnterLogout = store => (nextState, replaceState, callback) => {
  store.dispatch({type: ActionTypes.USER_LOGOUT});
  window.location = "/"
};
