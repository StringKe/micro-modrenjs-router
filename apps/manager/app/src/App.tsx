import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  Link,
  Outlet,
} from '@modern-js/runtime/router';

const AppLayout = () => (
  <>
    <div><Link to={'/'}>Main /</Link></div>
    <div><Link to={'/admin'}>Sub Admin /</Link></div>
    <div><Link to={'/product'}>Sub Product</Link></div>
    <div><Link to={'/product/print'}>Sub Print Product</Link></div>
    <div><Link to={'/product/print/form/design'}>3 Sub Print Product Design /</Link></div>
    <div><Link to={'/product/print/form/design/test'}>1 Sub Print Product Design /test</Link></div>
    <div><Link to={'/product/print/form/design/bbbb'}>Sub Print Product Design /bbbb</Link></div>
    <Outlet />
  </>
);

export default () => {
  const { apps, MApp, Admin, Product, PrintProduct, PrintProductFormDesign } = useModuleApps();

  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
        <Route key={'admin'} path={'admin/*'} element={<Admin />} />
        <Route key={'print-product-form-design'} path={'product/print/form/design/*'}
               element={<PrintProductFormDesign />} />
        <Route key={'print-product'} path={'product/print/*'} element={<PrintProduct />} />
        <Route key={'product'} path={'product/*'} element={<Product />} />
      </Route>,
    ),
  );

  return (
    // 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用 (本项目配置在 modern.config.ts 中)
    // <BrowserRouter>
    //   <MApp />
    // </BrowserRouter>

    // 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景
    <>
      <RouterProvider router={router} />
    </>
  );
};
