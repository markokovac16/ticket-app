import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-600 hover:cursor-pointer hover:text-red-500"
    />
  );
};

export default DeleteBlock;
