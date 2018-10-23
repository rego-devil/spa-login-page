import {MainPage, LoginPage, NewsPage, ProfilePage, NotFoundPage, AuthRoute, LogoutRoute} from './containers';

export const routes = [
  {
    isExact: true,
    path: '/',
    component: MainPage,
    isNavBar: true,
    navBarTitle: 'Home',
  },
  {
    isExact: true,
    path: '/login',
    component: LoginPage
  },
  {
    isExact: true,
    path: '/news',
    component: NewsPage,
    isNavBar: true,
    navBarTitle: 'News',
  },
  {
    isExact: true,
    path: '/profile',
    component: AuthRoute,
    innerComponent: ProfilePage,
    redirect: '/login',
    isNavBar: true,
    navBarTitle: 'Profile',
  },
  {
    isExact: true,
    path: '/logout',
    component: LogoutRoute,
    redirect: '/',
    isNavBar: true,
    navBarTitle: 'Logout',
  },
  {
    isExact: false,
    path: '*',
    component: NotFoundPage,
  },
]

// <Route exact path="/" component={MainPage} />
// <Route exact path="/login" component={LoginPage} />
// <Route exact path="/news" component={NewsPage} />
// <AuthRoute exact path="/profile" component={ProfilePage} redirect='/login' />
// <LogoutRoute exact path="/logout" redirect='/' />
// <Route component={NotFoundPage} /> 
