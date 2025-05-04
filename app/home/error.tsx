"use client";

import { useEffect } from "react";

const error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error("Error /home", error);
  }, [error]);

  return <div className="h-svh w-full flex items-center justify-center">Something Went Wrong!</div>;
};

export default error;
