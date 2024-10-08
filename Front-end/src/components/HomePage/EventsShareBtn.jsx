// File: components/ShareButtons.js
import React, { useState } from "react";
import share_icon from "../../assets/icons/Group 21.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import "../CSS/Home/EventShareButtons.css"; 

const ShareButtons = ({ url, title, thumbnail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err); 
      });
  };

  const validUrl = url || "https://example.com"; 

  return (
    <div className="share-button-container2">
      <button
        className="main-share-button2 btn btn-outline-secondary btn-sm"
        onClick={togglePopup}
      >
        
        <img style={{height:'35px'}} src={share_icon} alt="" />
        
      </button>
      <div className={`share-popup2 ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <TwitterShareButton
              url={url}
              title={title}
              className="share-button-pt"
            >
              <TwitterIcon size={22} round className="share-icon-pt" />
              Twitter
            </TwitterShareButton>
          </li>
          <li>
            <FacebookShareButton
              url={url}
              quote={title}
              className="share-button-pt"
            >
              <FacebookIcon size={22} round className="share-icon-pt" />
              Facebook
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton
              url={validUrl}
              title={title}
              source={thumbnail}
              className="share-button-pt"
            >
              <LinkedinIcon size={22} round className="share-icon-pt" />
              Linkedin
            </LinkedinShareButton>
          </li>
          <li>
            <EmailShareButton
              url={url}
              subject={title}
              body="Check this out!"
              className="share-button-pt"
            >
              <EmailIcon size={22} round className="share-icon-pt" />
              Share-Email
            </EmailShareButton>
          </li>
          <li>
            <button
              className="copy-link-button share-button-pt"
              onClick={copyToClipboard}
            >
              <i className="fas fa-link share-icon-pt"></i>{" "}
              {copied ? "Link Copied!" : "Copy Link"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButtons;
