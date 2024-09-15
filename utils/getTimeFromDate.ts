export default function getTimeFromDate(date: string) {
  const datee = new Date(date);
  const day = datee.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  const dayName = datee.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return { day, dayName };
}
