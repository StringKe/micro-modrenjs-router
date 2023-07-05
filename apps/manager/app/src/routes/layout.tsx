import {Link, Outlet} from '@modern-js/runtime/router';

export default function Layout() {
    return (
        <div>
            <div>
                <Link to={'/'}>首页</Link>
                <span>|</span>
                <Link to={'/product'}>产品</Link>
            </div>


            <div>/routers/layout.tsx</div>
            <Outlet/>
            <div>/routers/layout.tsx</div>
        </div>
    );
}
