import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  const maxPriority = 5;
  return (
    <div className="flex justify-start align-baseline">
      {Array.from({ length: maxPriority }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faFire}
          className={`pr-1 ${
            priority > index ? "text-red-600" : "text-slate-400"
          }`}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
