import DeleteBlock from "./DeleteBlock";
import Description from "./Description";
import Edit from "./Edit";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const createdAt = new Date(ticket.createdAt);
  const formattedDate = createdAt.toLocaleString();
  const updatedAt = new Date(ticket.updatedAt);
  const updatedDate = updatedAt.toLocaleString();
  return (
    <div className="flex flex-col p-3 m-2 transition duration-700 ease-in-out rounded-md shadow-lg bg-card hover:bg-card-hover">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="flex gap-2 ml-auto">
          <Edit id={ticket._id} />
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <h4>{ticket.title}</h4>
      <hr className="h-px mb-2 border-0 bg-page" />
      <Description description={ticket.description} />
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col gap-1">
          <p>Created at: {formattedDate}</p>{" "}
          {updatedDate !== formattedDate && <p>Updated at: {updatedDate}</p>}
          {updatedDate === formattedDate && (
            <p className="mb-2 text-sm text-gray-400">Hasn't been updated</p>
          )}
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
