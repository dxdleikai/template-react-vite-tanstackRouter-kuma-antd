import React, { FC, useState } from "react";
import ErrorWrapper from "@/components/ErrorWrapper";
import { Menu } from "antd";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import type { MenuProps, MenuItemProps } from "antd";
import styles from "./index.module.less";
import { Box, Flex } from "@kuma-ui/core";

export type LeftMenuProps = { children?: React.ReactNode };

/**
 * ，外部为`div`，支持`div`所有`props`
 */
let routes: any = [
  {
    path: "/apply",
    label: "黑名单申请",
  },
  {
    path: "/list",
    label: "黑名单列表",
  },
  {
    path: "/import",
    label: "黑名单导入",
  },
  {
    path: "/dataQuery",
    label: "主数据查询",
  },
  {
    path: "/deptQuery",
    label: "部门编码查询",
  },
];

const LeftMenu: FC<LeftMenuProps> = (props) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([routes[0].path]);

  const items = routes.map((item: any) => ({
    key: item.path,
    label: (
      <Link to={item.path} key={item.path} className="[&.active]:font-bold">
        {item.label}
      </Link>
    ),
  }));

  const menuClick: MenuProps["onClick"] = (e: any) => {
    setSelectedKeys(e.keyPath);
  };

  return (
    <ErrorWrapper>
      <div className={styles.menuBox}>
        <Flex h={48} fontWeight={'bold'} alignItems={'center'} justifyContent="center" bg={'#001529'} color={'rgba(255, 255, 255, 0.65)'} >
          信控黑明单
        </Flex>
        <Menu
          onClick={menuClick}
          style={{ width: 256, height: "100%" }}
          selectedKeys={selectedKeys}
          mode="inline"
          theme="dark"
          items={items}
        />
      </div>
    </ErrorWrapper>
  );
};
LeftMenu.defaultProps = {};
export default LeftMenu;
