import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="h-full">{props.children}</div>

    </div>
  );
});

export default Page;