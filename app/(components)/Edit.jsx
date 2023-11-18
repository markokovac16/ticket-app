import { faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Edit = ({ id }) => {
  return (
    <div>
      <Link href={`/TicketPage/${id}`} style={{ display: "contents" }}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-lg hover:cursor-pointer "
        />
      </Link>
    </div>
  );
};

export default Edit;
