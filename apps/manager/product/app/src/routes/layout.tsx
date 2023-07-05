import {Outlet, useLocation} from '@modern-js/runtime/router';

export default function Layout() {
    const location = useLocation();
    return (
        <div style={{
            padding: '10px',
            background: 'rgba(0,0,0,0.1)'
        }}>
            <pre>
                [product]
                {JSON.stringify(location, null, 4)}
            </pre>
            <div>[product] /routers/layout.tsx</div>
            <Outlet/>
            <div>[product] /routers/layout.tsx</div>
        </div>
    );
}
