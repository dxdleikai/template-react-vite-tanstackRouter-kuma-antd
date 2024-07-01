import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {Flex} from '@kuma-ui/core'
import LeftMenu from '@/pages/LeftMenu'
import styles from './root.module.less'

export const Route = createRootRoute({
  component: () => (
    <Flex className={styles.pageContainer}>
      <LeftMenu></LeftMenu>
      <div className={styles.routeBox}>
        <div className={styles.routeConainer}><Outlet /></div>
      </div>
      <TanStackRouterDevtools />
    </Flex>
  ),
})
