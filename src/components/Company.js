import React from "react";
import SingleResult from "./SingleResult";
import Tag from "./Tag";

const Company = (props) => {
  const {
    name,
    description,
    type,
    address: { address1, address2, city, postalCode, state },
  } = props;
  const nameInitial = name.split('')[0].toUpperCase();

  return (
    <SingleResult {...props}>
      <div className="Result__Header">
        <div className="Result__Image">
          <span className="Result__ImageFont">{nameInitial}</span>
        </div>
        <div className="Result__HeaderContent">
          <h2>{name}</h2>
          <div className="Result__Category">
              <Tag text={type} />
          </div>
          <div className="Result__Address">
            {address1} {address2}, {city}, {state}
            <br />
            {postalCode}
          </div>
        </div>
      </div>
      <div className="Result__Content">
        <div className="Result__Description">{description}</div>
      </div>
    </SingleResult>
  );
};

export default Company;
