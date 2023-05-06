export function getDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${month}, ${year}`;
  return formattedDate;
}
