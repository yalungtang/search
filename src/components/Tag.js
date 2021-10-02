import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Tag = (props) => {
  const { text } = props;
  return (
    <span>
      <FontAwesomeIcon icon={faTag} />
      &nbsp;{text}
    </span>
  );
};

export default Tag;
