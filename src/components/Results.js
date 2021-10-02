import React from "react";
import Animal from "./Animal";
import Company from "./Company";
import Product from "./Product";
import ErrorState from "./ErrorState";

const resultTypes = {
  animal: Animal,
  product: Product,
  company: Company,
  error: ErrorState,
};

const Results = (props) => {
  const { results, onStar, resultTitle } = props;

  const renderResult = (result) => {
    const ResultComponent = resultTypes[result.type];
    return <ResultComponent key={result.id} {...result} onStar={onStar} />;
  };

  return (
    <div className="Results__Container">
      {results.length === 0 && "Please try again using different search terms"}
      {results.length > 0 && (
        <>
          <h4>{resultTitle}</h4>
          <ul className="Results__List">
            {results.map((result) => renderResult(result))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Results;
