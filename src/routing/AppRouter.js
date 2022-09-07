import { NavLink, Route, Routes } from "react-router-dom"
import Users from "../components/Users/Users"
import Todo from "../components/Todo/Todo"
import UserDetails from "../components/UserDetails/UserDetails"
import Layout from "../components/Layout/Layout"
import useReactRouterBreadcrumbs, {
  createRoutesFromChildren,
} from "use-react-router-breadcrumbs"
import React from "react"

const DynamicUserBreadcrumb = ({ match }) => <span>{match.params.userId}</span>
const StaticBreadcrumb = ({ breadcrumbText }) => <span>{breadcrumbText}</span>

export const routes = [
  {
    path: "/",
    breadcrumb: StaticBreadcrumb,
    breadcrumbText: "Im so static, you already know",
    element: (
      <Layout>
        <div data-testid="home">Home</div>
      </Layout>
    ),
  },
  {
    path: "users/:userId",
    breadcrumb: DynamicUserBreadcrumb,
    element: (
      <Layout>
        <UserDetails />
      </Layout>
    ),
  },
  {
    path: "users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: "todo",
    element: (
      <Layout>
        <Todo />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <main style={{ padding: "1rem" }}>
        <p data-testid="page-not-found">404 page not found</p>
      </main>
    ),
  },
]

export const BreadcrumbTrail = ({ routes }) => {
  const appRouteObjects = createRoutesFromChildren(
    routes.map((r) => <Route {...r} />)
  )
  const breadcrumbs = useReactRouterBreadcrumbs(appRouteObjects)

  return (
    <div style={{ display: "flex" }}>
      {breadcrumbs.length > 2 &&
        breadcrumbs.map(({ match, breadcrumb }, i) => {
          const isLastElem = breadcrumbs.length - 1 === i
          const isFirstElem = i === 0

          return (
            <div style={{ display: "flex" }} key={match.pathname}>
              {!isLastElem ? (
                <NavLink to={match.pathname}>{breadcrumb}</NavLink>
              ) : (
                <span>{breadcrumb}</span>
              )}
              {!isLastElem && !isFirstElem && (
                <div style={{ marginRight: 4, marginLeft: 4 }}> / </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

const AppRouter = () => {
  return (
    <Routes>
      <Route {...routes[0]} />
      <Route {...routes[1]} />
      <Route {...routes[2]} />
      <Route {...routes[3]} />
      <Route {...routes[4]} />
    </Routes>
  )
}

export default AppRouter
