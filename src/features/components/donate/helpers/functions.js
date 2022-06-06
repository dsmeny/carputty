export const calcPercentage = (v1, v2) => ((v1 - v2) / v1) * 100;

export const convertNumber = (number) =>
  new Intl.NumberFormat()
    .formatToParts(number)
    .reduce((string, part) => string + part.value, "");

export const postDonation = async (projectDetails) => {
  const response = await fetch("http://localhost:3001/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectDetails),
  });
  const data = await response.json();
  console.log("post message: ", data);
};
