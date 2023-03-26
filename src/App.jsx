import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Index from "./pages/Home/Index";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/frontend_mentor_counterDown",
    element: <Home />,
    children: [{ index: true, element: <Index /> }],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
