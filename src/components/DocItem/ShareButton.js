import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ShareButton() {
  return (
    <div className="dropdown dropdown--hoverable pointer">
      <a
        target="_blank"
        rel="noreferrer noopener"
        style={{ marginTop: "0.45rem" }}
      >
        <FontAwesomeIcon icon={faShareSquare} style={{ fontSize: "16px" }} />
        <>&nbsp;</>
      </a>
      <button
        className="button button--lg button--link padding-horiz--none pointer"
        style={{ fontWeight: 400, fontFamily: "inherit", fontSize: "inherit" }}
      >
        Share
      </button>
      <ul className="dropdown__menu">
        <li>
          <a className="dropdown__link icons" href="#url">
            <FontAwesomeIcon icon={faTwitter} className="margin-right--sm" />
            Twitter
          </a>
        </li>
        <li>
          <a className="dropdown__link icons" href="#url">
            <FontAwesomeIcon icon={faLinkedin} className="margin-right--sm" />
            LinkedIn
          </a>
        </li>
        <li>
          <a className="dropdown__link icons" href="#url">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="margin-right--sm"
            />
            Facebook
          </a>
        </li>
        <li>
          <a className="dropdown__link icons" href="#url">
            <FontAwesomeIcon icon={faEnvelope} className="margin-right--sm" />
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ShareButton;

// <?xml version="1.0" encoding="UTF-8"?>
// <div>

// <a id="linkedin" href="http://www.linkedin.com/shareArticle?mini=true&url=https://docs.zowe.org/stable&source=https://docs.zowe.org/stable" onclick="window.open(this.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
// <img src="./linkedin.JPG" height="25" title='Share on LinkedIn'></a>

// <a id="facebook" onclick="window.open(this.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://docs.zowe.org/stable" class="fb-xfbml-parse-ignore"><img title='Share on Facebook' src="./facebook.JPG" height="25"></a>

// <a id='tweet' onclick="window.open(this.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"  href="https://twitter.com/share?url=https://docs.zowe.org/stable&text=I have a good article to share with you:" class="twitter-share-button" data-show-count="false"><img title='Share on Twitter' src="./tweet.JPG" height="25"></a>

// <script>
// var url= window.location.href;

// document.getElementById("linkedin").href='http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&source=https://docs.zowe.org/stable';
// document.getElementById("facebook").href='https://www.facebook.com/sharer/sharer.php?u='+url;
// document.getElementById("tweet").href='https://twitter.com/share?url='+url+'&text=I have a good article to share with you: ';

// </script>
// </div>
