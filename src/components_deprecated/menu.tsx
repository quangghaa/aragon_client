import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";
import {
    FinanceIcon, NavAppIcon, NavHomeIcon,
    NavOrgIcon, NavVoteIcon, PermissionIcon
} from "../utils/image";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Home', '1', <NavHomeIcon />),
    getItem('Voting', 'sub-voting', <NavVoteIcon />, [
        getItem('ANT 1', 'sv-1', <PieChartOutlined />),
        getItem('ANT 2', 'sv-2', <PieChartOutlined />),
    ]),
    getItem('Finance', '3', <FinanceIcon />),

    { type: 'divider' },

    getItem('System', 'sub-system', <SettingOutlined />, [
        getItem('Permissions', 'ss-1', <PermissionIcon />),
        getItem('App Center', 'ss-2', <NavAppIcon />),
        getItem('Organization', 'ss-3', <NavOrgIcon />),
    ])
];
const MainMenu = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub-system']}
            mode="inline"
            items={items}
        />
    )
}

export default MainMenu