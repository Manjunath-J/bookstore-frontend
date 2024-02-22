import './App.css';
import BookContainer from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from './components/Wishlist';
import Firstpage from './components/Firstpage';
import Order from './components/Order';

function App() {
  const AppRoutes = createBrowserRouter([

    {
      path: "/sign",
      element: <Firstpage />,
    },
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        { path: "home", index: true, element: <BookContainer /> },
        { path: "book/:_id", element: <BookInfo /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "order", element: <Order /> },
      ],
    },
  ]);
  return <RouterProvider router={AppRoutes} />;
}

export default App;
