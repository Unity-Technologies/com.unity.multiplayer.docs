import React from "react";
import IconEdit from "@theme/Icon/Edit";
import IconBug from "@theme/IconBug";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { useDoc } from "@docusaurus/theme-common/internal";

function DocsFeedbackLinks() {
  const { metadata } = useDoc();
  const { editUrl } = metadata;

  // grabs the markdown file location for submitting GitHub issues
  const mdPath = /(?<=main\/).*/.exec(editUrl)[0];

  return (
    <div className="row">
      <div className="row margin-left--none navbar__inner liner">
        <div className="user-options">
          {/* PDF Button*/}
          <div
            className="margin-right--md pointer display-flex"
            style={{ display: "flex" }}
          >
            {editUrl && (
              <a onClick={() => window.print()}>
                <FontAwesomeIcon icon={faPrint} />
                PDF
              </a>
            )}
          </div>

          {/* Edit URL */}
          <div>
            {editUrl && (
              <a href={editUrl} target="_blank" rel="noreferrer noopener">
                <IconEdit />
                Edit this page
              </a>
            )}
          </div>

          {/* Open Doc Button*/}
          <div
            className="margin-right--md display-flex"
            style={{ display: "flex" }}
          >
            {mdPath && (
              <a
                href={
                  "https://github.com/Unity-Technologies/com.unity.multiplayer.docs/issues/new?labels=feedback&title=Feedback%20for%20" +
                  mdPath
                }
                target="_blank"
              >
                <IconBug />
                Log an issue
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsFeedbackLinks;
