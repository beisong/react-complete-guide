import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  ); // ...props pass in every props to the wrappedComponent
};

export default withClass;
