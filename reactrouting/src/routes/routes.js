import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Employees from "../pages/Main/Employees";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminAddEmployee from "../pages/Admin/AdminAddEmployee";
import AdminEmployees from "../pages/Admin/AdminEmployees";
import AdminEditEmployee from "../pages/Admin/AdminEditEmployee";
export const ROUTES =[
    //Main Root
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'employee',
                element:<Employees/>
            },
            {
                path:'employee/:id',
                element:<EmployeeDetail/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
            
            
    
        ]
    },

//Admin Root
{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {
            path:'',
element:<AdminEmployees/>
        },
        {
            path:'addemployee',
            element:<AdminAddEmployee/>
        },
        {
            path:'addeditemployee/:id',
            element:<AdminEditEmployee/>
        },
    ]
}


]