import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootProvider from "./common/providers/RootProvider";
import ROUTES from "./common/config/routes";

const routes = createBrowserRouter(ROUTES);

export default function App() {
  return (
    <RootProvider>
      <RouterProvider router={routes} />
    </RootProvider>
  );
}
