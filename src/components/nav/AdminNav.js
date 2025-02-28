import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav className="mt-3">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/customer" className="nav-link">
          Customer
        </Link>
      </li>
       <li className="nav-item">
        <Link to="/admin/customers" className="nav-link">
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          Product
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          Products
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
          Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>
      </li>

      <li className="nav-item" style={{borderBottom: "1px solid #ccc"}}>
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/post" className="nav-link">
          Blog
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/posts" className="nav-link">
          Blogs
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/admin/postcategory" className="nav-link">
          Blog Category
        </Link>
      </li>

      
      <li className="nav-item">
        <Link to="/admin/tag" className="nav-link">
          Blog Tag Category
        </Link>
      </li>
      
    </ul>
  </nav>
);

export default AdminNav;
