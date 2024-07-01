import config from '@/config/index.ts';
import NotFound from '@/pages/404';
import { ConfigProvider } from 'antd';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  NotFoundRoute,
  RouterProvider,
  createHashHistory,
  createRouter,
} from '@tanstack/react-router';
// import zhCN from 'antd/locale/zh_CN';
// import { Inspector } from 'react-dev-inspector';

import ReactDOM from 'react-dom/client';
// import 'reset.css';
import './index.less';

import { Route as rootRoute } from './routes/__root.tsx';

// Import the generated route tree
// import { createPortal } from 'react-dom';
import { routeTree } from './routeTree.gen.ts';
//404页面
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <NotFound></NotFound>,
});
const hashHistory = createHashHistory()

// Create a new router instance
const router = createRouter({
  routeTree,
  notFoundRoute,
  basepath: config.basepath,
  history: hashHistory 
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
// 创建一个 client
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });
// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  const insertDom = document.createElement('div');
  document.body.insertBefore(insertDom, document.body.children[0]);
  root.render(
    // <StrictMode>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: '#118EE9',
        borderRadius: 2,
        // 派生变量，影响范围小
        colorBgContainer: '#f6ffed',
      },
    }}
  >
     <RouterProvider router={router} />
  </ConfigProvider>
  );
}
