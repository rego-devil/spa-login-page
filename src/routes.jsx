import {MainPage, LoginPage, NewsPage, ProfilePage, NotFoundPage, AuthRoute, LogoutRoute} from './containers';

export const routes = [
  {
    isExact: true,
    path: '/',
    component: MainPage
  },
  {
    isExact: true,
    path: '/login',
    component: LoginPage
  },
  {
    isExact: true,
    path: '/news',
    component: NewsPage
  },
  {
    isExact: true,
    path: '/profile',
    component: AuthRoute,
    innerComponent: ProfilePage,
    redirect: '/login'
  },
  {
    isExact: true,
    path: '/logout',
    component: LogoutRoute,
    redirect: '/'
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
