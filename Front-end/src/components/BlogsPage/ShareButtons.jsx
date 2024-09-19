// File: components/ShareButtons.js
import React, { useState } from "react";
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
import "../CSS/Pages/ShareButtons.css"; 

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
    <div className="share-button-container">
      <button
        className="main-share-button btn btn-outline-secondary btn-sm"
        onClick={togglePopup}
      >
        <i
          class="fa-solid fa-share-nodes"
          style={{ fontSize: "16px", marginRight: "10px" }}
        ></i>
        share
      </button>
      <div className={`share-popup ${isOpen ? "open" : ""}`}>
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
