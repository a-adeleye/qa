const AUDITCATEGORIES = [
  {
    category: "CACE",
    parameters: [
      { parameter: "Professionalism", ratings: [2, 0, "Fatal"] },
      { parameter: "Issue Handling/Customer Intelligence", ratings: [2, 1, 0] },
      { parameter: "Knowledge & Information", ratings: [3, 2, 0] },
      { parameter: "Communication", ratings: [3, 2, 0] },
      { parameter: "Resolution", ratings: [2, 0] },
    ],
  },
  {
    category: "BACE",
    parameters: [
      { parameter: "Timeliness", ratings: [1, 0, "Fatal"] },
      { parameter: "FCR/Escalation", ratings: [1, 1, "Fatal"] },
    ],
  },
  {
    category: "COACE",
    parameters: [
      {
        parameter: "Proper Verification & Authentication",
        ratings: [1, "Fatal"],
      },
      { parameter: "Confidential Information", ratings: [0.5, "Fatal"] },
    ],
  },
  {
    category: "NCE",
    parameters: [
      { parameter: "Greeting & Introduction", ratings: [0.5, 0] },
      { parameter: "Interaction Handling", ratings: [2, 1, 0, "Fatal"] },
    ],
  },
];

export default AUDITCATEGORIES;
