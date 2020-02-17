import React from "react";
import { action } from "@storybook/addon-actions";

import Login from "../components/Login";

export default {
  component: Login,
  title: "Login Screen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const taskData = {
  environment: "dev"
};

export const Default = () => {
  return <Login task={{ ...taskData }} />;
};

// export const Pinned = () => (
//   <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
// );

// export const Archived = () => (
//   <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
// );
