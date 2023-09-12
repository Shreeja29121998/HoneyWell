import React, { useState } from "react";
const TrainForm = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter id:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
};

export default TrainForm;
