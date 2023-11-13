const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;

      case "in progress":
        color = "bg-purple-400";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold text-gray-700  rounded-full ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
