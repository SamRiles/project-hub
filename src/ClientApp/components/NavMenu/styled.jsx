import styled from 'styled-components';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

export const SiteHeader = styled(Header)`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 12px;
    font-size: 18px;
    font-weight: 500;
`;

export const LeftMenu = styled(Menu)`
    flex: 1;
    justify-content: flex-start;
    white-space: nowrap;
    display: inline-block;


`;

export const RightMenu = styled(Menu)`
    flex: 1;
    justify-content: flex-end;
    text-align: right;
    padding-right: 40px;
`;