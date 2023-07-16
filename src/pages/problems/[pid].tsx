import React from 'react';
import Topbar from "@/component/Topbar/Topbar";
import Workspace from "@/component/Workspace/Workspace";

const ProblemPage = () => {
  return (
    <div>
      <Topbar problemPage/>
      <Workspace />
    </div>
  );
};

export default ProblemPage;
