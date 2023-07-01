import { Link } from '@modern-js/runtime/router';
import { Outlet } from '@modern-js/runtime/router';
import './index.css';

export default function Layout() {
  return (
    <div>
      <div style={{
        background: '#fff',
        marginTop: '10rem',
      }}>
        <div><Link to={'/'}>Route /</Link></div>
        <div><Link to={'/test'}>Route /test</Link></div>
        <div><Link to={'/bbbb'}>2 Route /bbbb</Link></div>
      </div>
      <Outlet />
    </div>
  );
}
