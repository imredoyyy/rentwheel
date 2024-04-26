import * as React from "react";

const Container = ({ id, className, children}) => {
  return (
    <section id={id}
      className={`bg-gray w-full py-16 md:py-20" ${className || ''}`}
      >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Container;
