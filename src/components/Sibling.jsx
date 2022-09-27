import { useEffect } from "react";
function Sibling() {
  useEffect(() => {
    console.log("Sibling USeEffect Started");
  }, []);

  return (
    <>
      <p>It is a Siling</p>
    </>
  );
}

export default Sibling;
