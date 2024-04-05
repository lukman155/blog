// Sample dummy data for articles
const dummyArticles = {
  technology: [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "React Basics",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Node.js Fundamentals",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  travel: [
    {
      id: 4,
      title: "Exploring Europe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Hiking in the Mountains",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Beach Vacation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

export const getCategorisedArticles = () => {
  // Simulate fetching data from an API or database
  return dummyArticles;
};
