import { useParams } from "react-router-dom";

export default () => {
  const { id, test } = useParams();
  return (
    <>
      <h1>pages/[id]/[test]/index.tsx</h1>
      <h1>
        Page {id}: {test}
      </h1>
    </>
  );
};
