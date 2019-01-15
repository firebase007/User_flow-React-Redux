import SignUpComponent from '../containers/SignUp';
import LoginComponent from '../containers/Login';

/**
 * Configure App Routes
 */
const Routes = [
  {
    path: '/sign-up',
    component: SignUpComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
];

export default Routes;
