import React from "react";

export default function Pagenation(props) {
  return (
    <div>
      {props.goToPreviousPage && (
        <button
          className="m-2 btn btn-primary"
          onClick={props.goToPreviousPage}
        >
          Previous
        </button>
      )}
      {props.goToNextPage && (
        <button className="m-2 btn btn-primary" onClick={props.goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
