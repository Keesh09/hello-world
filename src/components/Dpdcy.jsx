import React, { useEffect, useState } from "react";

const Dpdcy = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs");
  }, []);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);
  return (
    <div>
      <button
        className="border border-gray-300 rounded-md p-3"
        onClick={() => setCount(count + 1)}
      >
        Click: {count}{" "}
      </button>
    </div>
  );
};

export default Dpdcy;
