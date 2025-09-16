const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  title: `Item ${index + 1}`,
  description: `Description for item ${index + 1}`,
}));

export default mockData;
