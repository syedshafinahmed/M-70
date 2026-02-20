export const feedback = [
  {
    id: 1,
    message: "Khabar khub moja chilo",
  },
  {
    id: 2,
    message: "Khabar khub ekta moja chilo na",
  },
  {
    id: 3,
    message: "Waiter der bebohar aro valo kora jay",
  },
];
export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API Created!",
  });
}
