import './App.css';
import BookContainer from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        { path: "home", index: true, element: <BookContainer /> },
        { path: "book/:_id", element: <BookInfo /> },
      ],
    },
  ]);
  return <RouterProvider router={AppRoutes} />;
}

export default App;
