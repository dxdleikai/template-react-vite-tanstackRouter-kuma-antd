/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ListLazyImport = createFileRoute('/list')()
const ApplyLazyImport = createFileRoute('/apply')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ListLazyRoute = ListLazyImport.update({
  path: '/list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/list.lazy').then((d) => d.Route))

const ApplyLazyRoute = ApplyLazyImport.update({
  path: '/apply',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/apply.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/apply': {
      preLoaderRoute: typeof ApplyLazyImport
      parentRoute: typeof rootRoute
    }
    '/list': {
      preLoaderRoute: typeof ListLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  ApplyLazyRoute,
  ListLazyRoute,
])

/* prettier-ignore-end */