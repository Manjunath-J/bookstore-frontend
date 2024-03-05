import './App.css';
import BookContainer from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from './components/Wishlist';
import Order from './components/Order';
import Sign from './components/Sign';
import { Provider } from 'react-redux';
import BookStore from "./utils/redux-stores/Bookstore"


  const AppRoutes = createBrowserRouter([

    {
      path: "/",
      element: <Dashboard/>,
      children: [
        { path: "/", element: <BookContainer /> },
        { path: "home", element: <BookContainer /> },
        { path: "book/:_id", element: <BookInfo /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "order", element: <Order /> },
      ],
    },
    {
      path: "/sign",
      element: <Sign />,
    },
  ]);

function App() {
  return (
    <div className="app-container">
      <Provider store={BookStore}>
        <RouterProvider router={AppRoutes}></RouterProvider>
      </Provider>
    </div>
  );
}
export default App;
