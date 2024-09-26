import React from "react";
import { Sidebar, Menu, SubMenu } from "react-pro-sidebar";
import "./Sidebar.css";

const CustomMenuItem = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        padding: "10px",
        fontSize: "16px",
        transition: "background-color 0.3s ease, color 0.3s ease",
        color: "#333",
        borderRadius: "10px",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2c94c4", e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "black")}
    >
      {children}
    </div>
  );
};

const CustomSidebar = ({ onMenuItemClick }) => {
  return (
    <div className="sidebar-container">
      <Sidebar className="admin-sidebar">
        <div style={{ padding: '50px 20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="profile-overview-container">
            <>
              <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                alt=""
                className="profile-pic"
              />
              <h6>Ashan Avishka</h6>
            </>
          </div>
          <Menu className="menu-container" style={{ flexGrow: 1 }}>
            <CustomMenuItem onClick={() => onMenuItemClick('inquiries')}>Inquiries</CustomMenuItem>
            <CustomMenuItem onClick={() => onMenuItemClick('newsletters')}>Newsletters</CustomMenuItem>
            <CustomMenuItem onClick={() => onMenuItemClick('events')}>Events & News</CustomMenuItem>
            <CustomMenuItem onClick={() => onMenuItemClick('blogs')}>Blogs</CustomMenuItem>
          </Menu>
          <div className="logout-container">
            <CustomMenuItem className="logout-item">Logout</CustomMenuItem>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
