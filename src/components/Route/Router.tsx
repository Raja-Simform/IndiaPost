
import { Route, Routes } from 'react-router-dom'
import { type RouteItem, routes } from '../Route/Routes'

export const Router = () => {
  return <Routes>{renderRoutes(routes)}</Routes>
}

function renderRoutes(routes: RouteItem[]) {
  return routes.map((route) => {
    const Element = route.element
    return <Route key={route.path} path={route.path} element={<Element />} />
  })
}
