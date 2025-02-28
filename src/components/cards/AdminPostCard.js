import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html'

const { Meta } = Card;

const AdminPostCard = ({ post, handleRemove }) => {
  // destructure
  const { title, description, images, slug } = post;

  return (
    <Card style={{top:"20px"}}
      cover={
        <div style={{height:"5px"}}>
        <img src={images && images.length ? images[0].url : laptop}
          style={{ height: "50px", width: "50px", objectFit: "cover" }}
          className="p-1"
        />
        <Link to={`/admin/post/${slug}`} style={{position:"absolute", marginLeft:"10px", transform:"translateY(1px)"}}>
        {post.title}</Link>
        
        <Link to={`/admin/post/${slug}`} >
          <EditOutlined className="text-warning" style={{position:"absolute", left:"55px", top:"30px"}} />
        </Link>
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
          style={{position:"absolute", top:"30px", marginLeft:"35px"}}
        />
        </div>
      }  
    >
    </Card>
  );
};

export default AdminPostCard;
