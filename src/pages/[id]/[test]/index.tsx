import { useParams } from "react-router-dom";

export default () => {
  const { id, test } = useParams();
  return (
    <>
      <h1>
        Page {id}: {test}
      </h1>
    </>
  );
};
