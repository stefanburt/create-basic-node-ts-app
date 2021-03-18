const jsonArray = {
  results: [
    {
      assetId: "0",
      value: "string",
      organisationId: "123",
      type: "string",
      status: "string",
      created: "string",
      updated: "string",
      assetTeams: [44, 120, 9012, 9012, 9012, 9012, 9012],
    },
    {
      assetId: "1",
      value: "string",
      organisationId: "123",
      type: "string",
      status: "string",
      created: "string",
      updated: "string",
      assetTeams: [440, 12, 6012, 440, 12, 6012],
    },
    {
      assetId: "2",
      value: "string",
      organisationId: "123",
      type: "string",
      status: "string",
      created: "string",
      updated: "string",
      assetTeams: [1, 3, 6],
    },
    {
      assetId: "5",
      value: "string",
      organisationId: "123",
      type: "string",
      status: "string",
      created: "string",
      updated: "string",
      assetTeams: [4, 13, 6],
    },
    {
      assetId: "5",
      value: "string",
      organisationId: "123",
      type: "string",
      status: "string",
      created: "string",
      updated: "string",
      assetTeams: [44, 1, 1, 1, 1, 2, 612],
    },
  ],
};

const dedupResult = (array: number[]): number[] => Array.from(new Set(array));

jsonArray.results.forEach((item) => {
  const arr = item.assetTeams;
  const depupedArray = dedupResult(arr);

  item.assetTeams = depupedArray;
});

console.log(...jsonArray.results);
