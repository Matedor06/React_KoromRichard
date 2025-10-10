import { useParams } from "react-router-dom";

const Param = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <h1>Param: {Number(id)}</h1>
    </>
  );
};

export default Param;
