"use client";

import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import React, { useState } from "react";

const TicketCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="flex flex-col p-3 m-2 rounded-md shadow-lg bg-card hover:bg-card-hover">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>

      <h4>Ticket Title</h4>
      <hr className="h-px mb-2 border-0 bg-page" />
      <p className="whitespace-pre-wrap">Ticket description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p>Date of ticket: {currentDate.toLocaleDateString()}</p>
          <ProgressDisplay />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
