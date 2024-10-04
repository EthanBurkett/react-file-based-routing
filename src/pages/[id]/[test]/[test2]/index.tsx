import { useParams } from "react-router-dom";

export default () => {
  const { id, test, test2 } = useParams();
  return (
    <>
      <h1>
        Page {id} {test}: {test2}
      </h1>
    </>
  );
};
