import {Outlet} from 'react-router-dom';
import { Fragment } from 'react';
import MainNavigation from '../components/main-navigation';

const Layout=()=>{
return(
    <Fragment>
<MainNavigation></MainNavigation>
<main>
<Outlet/>
</main>

    </Fragment>
 
)
}
export default Layout;