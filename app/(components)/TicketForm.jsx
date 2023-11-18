"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;

  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "aplication/json",
      });
      if (!res.ok) {
        throw new Error("Failed to edit a ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "aplication/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create a ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware problem",
    active: true,
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];
  return (
    <div className="flex justify-center text-center ">
      <form
        className="flex flex-col w-1/2 gap-3"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update A ticket" : "Create A Ticket"}</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={formData.description}
          placeholder="Write a description of an issue"
          onChange={handleChange}
        ></textarea>

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Priority</label>
        <div className="flex justify-center gap-2">
          <div>
            <input
              type="radio"
              id="priority-1"
              name="priority"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
          </div>

          <div>
            <input
              type="radio"
              id="priority-2"
              name="priority"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
          </div>

          <div>
            <input
              type="radio"
              id="priority-3"
              name="priority"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
          </div>

          <div>
            <input
              type="radio"
              id="priority-4"
              name="priority"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
          </div>

          <div>
            <input
              type="radio"
              id="priority-5"
              name="priority"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
          className="px-0"
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="in progress">In progress</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="max-w-md btn"
          value={EDITMODE ? "Update the ticket" : "Create a ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
