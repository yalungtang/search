import React from "react";
import SingleResult from "./SingleResult";
import emptyImage from "../empty.png";
import Tag from "./Tag";

const Product = (props) => {
  const { name, productCategory, previewText, image, type } = props;

  return (
    <SingleResult {...props}>
      <div className="Result__Header">
      <div className="Result__Image">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <img src={emptyImage} alt="Unavailable" />
          )}
        </div>
        <div className="Result__HeaderContent">
          <h2>{name}</h2>
          <div className="Result__Category">
            <Tag text={type} />
            <Tag text={productCategory} />
          </div>
        </div>
      </div>
      <div className="Result__Content">{previewText}</div>
    </SingleResult>
  );
};

export default Product;
