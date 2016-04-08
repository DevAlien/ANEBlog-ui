import App from './components/pages/App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';

export default function getRoutes(store) {
  return {
    component: App,
    childRoutes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/logout',
        component: Home,
        onEnter: Home.onEnterLogout(store)
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '*',
        component: NotFound
      }
    ],
    onEnter: App.onEnter(store)
  };
}
