import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import filesize from 'filesize';
import FacebookLogin from 'react-facebook-login2';
import {connect} from 'react-redux';
import {loginFacebook} from '../../actions/users';
import nodeify from 'nodeify';

import config from '../../../config';

@connect(state => {
    return {
        ...state
    }
}, (dispatch) => ({dispatch}))
export default class Header extends React.Component {
    static propTypes = {}

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const state = this.props;
        if (!state.app || !state.app.user || !state.app.user.name) {
            return <div>
                <Link to="/login">Login</Link>
            </div>
        } else {
            return <div>Welcome
                {state.app.user.name}
                <Link to="/logout">Logout</Link>
            </div>
        }
    }
}

Header.contextTypes = {
    store: PropTypes.object
}
