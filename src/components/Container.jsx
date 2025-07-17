import React from "react";

const Container = ({ children, className }) => {
  return (
    <>
      <div className={`${className} container mx-auto w-[1170px]`}>
        {children}
      </div>
    </>
  );
};

export default Container;
