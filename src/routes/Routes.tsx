import { createBrowserRouter } from 'react-router-dom';
import AdminMain from '../admin/AdminMain';
import { UpEventsDesc } from '../data/UpEventsDesc';
import { Home, Events, EventDesc, Team, About, GiveTalk } from '../pages';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/events/debate",
      element: <EventDesc Desc = {UpEventsDesc[0]} />,
    },
    {
      path: "/events/BGMI",
      element: <EventDesc Desc = {UpEventsDesc[1]} />,
    },
    {
      path: "/events",
      element: <Events DescArray = {UpEventsDesc}/>,
    },
    {
      path: "/givetalk",
      element: <GiveTalk />,
    },
    {
      path: "/team",
      element: <Team />,
    },  
    {
      path: "/events/eventDesc",
      element: <EventDesc />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/admin-control/",
      element: <AdminMain />
    }
  ]);

export default router;