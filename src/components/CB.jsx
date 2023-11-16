import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Eror, Home, Service } from "../pages";

const router  = createBrowserRouter ([
 {
  path: '/',
  element: <Home/>,
  // erorElement: <Eror />,
 },
 {
  path: 'about',
  element: <About />
},
{
  path: '*',
  element: <Eror />
},
{
  path: 'contact',
  element: <Contact />
},
{
  path: 'service',
  element: <Service />
}
])

export default router