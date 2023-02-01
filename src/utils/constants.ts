export const config = {
  apiEndpoint: "http://localhost:3000/api"
}

export const routes = {
  HOME_ROUTE: "/",
  SHOP_ROUTE: "/products"
}

export const navLinks = [
  {
    name: "Home",
    route: routes.HOME_ROUTE,
    label: "Go to home page"
  },
  {
    name: "Shop",
    route: routes.SHOP_ROUTE,
    label: "Go to shop page"
  }
]
