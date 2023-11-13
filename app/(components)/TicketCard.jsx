import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const createdAt = new Date(ticket.createdAt);
  const formattedDate = createdAt.toLocaleString();
  const updatedAt = new Date(ticket.updatedAt);
  const updatedDate = updatedAt.toLocaleString();
  return (
    <div className="flex flex-col p-3 m-2 transition duration-500 ease-in-out rounded-md shadow-lg bg-card hover:bg-card-hover hover:cursor-pointer">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>

      <h4>{ticket.title}</h4>
      <hr className="h-px mb-2 border-0 bg-page" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col gap-1">
          <p>Created at: {formattedDate}</p>{" "}
          {updatedDate !== formattedDate && <p>Updated at: {updatedDate}</p>}
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
