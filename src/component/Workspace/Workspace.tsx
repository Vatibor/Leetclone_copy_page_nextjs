import React from 'react';
import Split from 'react-split'
import ProblemDescription from "@/component/Workspace/ProblemDescription/ProblemDescription";
import Playground from "@/component/Workspace/Playground/Playground";


const Workspace = () => {
  return (
    <Split
      className="split"
      minSize={0}
    >
      <ProblemDescription />
      <Playground />

    </Split>
  );
};

export default Workspace;
