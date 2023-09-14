import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Packs from "./components/Pack/Pack";
import Page0 from "./components/Footer/cgu";
import Page1 from "./components/Footer/cgv";
import Page2 from "./components/Footer/mentions";
import Form from "./components/Form/Form";
import Home from './components/Home/Home';
import FormBooking from './components/Form/FormBooking';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/components/Footer/cgu",
        element: <Page0 />,
      },

      {
        path: "/components/Footer/cgv",
        element: <Page1 />,
      },

      {
        path: "/components/Footer/mentions",
        element: <Page2 />,
      },

      {
        path: "/components/Form/Form",
        element: <Form />,
      },

      {
        path: "/components/Pack/Pack",
        element: <Packs />,
      },

      {
        path: "/components/Form/FormBooking",
        element: <FormBooking />,
      },
    ] 
 },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
