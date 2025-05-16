// routes.ts
import Home from '../../pages/Home/Home'
import Pincode from '../../pages/Pincode/Pincode';
import Branch from '../../pages/Branch/Branch';



export interface RouteItem {
  path: string;
  element: React.FC;
}

export const routes: RouteItem[] = [
  {
    path:'/',
    element:Home,
    
  },
  {
    path:"/pincodesearch",
    element:Pincode,
  },
  {
    path:"/branchsearch",
    element:Branch,
  },
  
  {
    path: '*',
    element: () => <h2>Page Not Found</h2>,
  },
]
