import {Link, Outlet} from '@modern-js/runtime/router';

export default function Layout() {
    return (
        <div>
            <div>
                <Link to={'/'}>首页</Link>
                <span>|</span>
                <Link to={'/product'}>产品</Link>
                <span>|</span>
                <Link to={'/admin'}>管理</Link>
                <span>|</span>
                <Link to={'/product/print'}>打印</Link>
                <span>|</span>
                <Link to={'/product/print/design'}>设计</Link>
            </div>

            <Outlet/>
        </div>
    );
}
