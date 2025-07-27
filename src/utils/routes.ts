import Home from '../pages/Home'
import Catalogo from '../pages/Catalogo'

export interface Route {
  path: string
  component: React.ComponentType
  name: string
}

export const routes: Route[] = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/catalogo',
    component: Catalogo,
    name: 'catalogo'
  }
]

export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find(route => route.path === path || route.name === path.replace('/', ''))
}

export const getCurrentRoute = (): Route => {
  const hash = window.location.hash.slice(1)
  const pathname = window.location.pathname
  
  if (hash) {
    return getRouteByPath(hash) || routes[0]
  }
  
  return getRouteByPath(pathname) || routes[0]
}