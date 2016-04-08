import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header'
import {loadUser} from '../../actions/users';
import nodeify from 'nodeify';
import Helmet from 'react-helmet';
import Login from './Login';

@connect((state) => {
    return {app: state.app}
})
export default class App extends React.Component {
  static propTypes = {
      app: PropTypes.object.isRequired
    }
  render() {
    let components;
    if(this.props.app && !this.props.app.user) {
      components = <Login />
    } else {
      components = [<Header />, <div className="page-body">{this.props.children}</div>]
    }
    return (
      <div>
        <Helmet
          title="Home"
          titleTemplate="%s | ANE Blog"
          meta={[
              {"name": "viewport", content: "initial-scale=1.0,user-scalable=yes,width=device-width"},
              {"name": "description", "content": "ANE BLOG, just focus on writing"}
          ]}
        />
        {components}
      </div>
    );
  }
}

App.onEnter = store => (nextState, replaceState, callback) => {
  const {id} = nextState.params;
  const {app} = store.getState();
  if(!app.user && app.authInfo) {
    return nodeify(store.dispatch(loadUser()), callback);
  }

  return callback();
};
