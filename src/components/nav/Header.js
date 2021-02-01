import { Switch, Route } from "react-router-dom";
import React, { useState, lazy } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ContactsOutlined,
  IdcardOutlined,
  CustomerServiceOutlined,
  BookOutlined,
} from "@ant-design/icons";
import logo from "../../static/images/logo/logonb.png";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
const Shop = lazy(() => import("../../pages/Shop"));

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item>
      <Link to="/">
        <img width="85px" src={logo} />
        </Link>
      </Item>

      <Item key="home">
        <Link to="/">Home</Link>
      </Item>

      <Item key="shop">
        <Link to="/shop">Shop</Link>
      </Item>

      {/* <Item key="blog" icon={<BookOutlined />}>
        <Link to="/posts">Blog</Link>
      </Item> */}

      <Item key="services">
        <Link to="/services">Services</Link>
      </Item>

      <Item key="about">
        <Link to="/about">About</Link>
      </Item>

      <Item key="contact">
        <Link to="/contact">Contact</Link>
      </Item>

      {/* {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>
      )} */}

      {!user && (
        <Item key="login" className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      <span className="float-right p-1" style={{marginLeft:""}}>
        <Search />
      </span>
    </Menu>
  );
};

export default Header;
