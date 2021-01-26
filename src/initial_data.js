const initialData = {
  cards: {
    "card-1": {
      id: "card-1",
      title: "Wireframe Design",
      description: "Redesign all wireframe for my new application",
    },
    "card-2": {
      id: "card-2",
      title: "API Design",
      description: "Make a decision between Rails and Mongo",
    },
    "card-3": {
      id: "card-3",
      title: "hardware restrictions ",
      description: "Research mobile devices for hardware restrictions",
    },
    "card-4": {
      id: "card-4",
      title: "API vs Serverless",
      description: "Choose between API and a serverless option",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      cardIds: ["card-1", "card-2", "card-3", "card-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      cardIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      cardIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
  counter: 100,
};

export default initialData;
