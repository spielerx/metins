export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
};

export const formatTime = (date: string): string => {
  return new Date(date)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    })
    .replace(" ", "")
    .toLocaleLowerCase();
};

export const formatDateTime = (date: string): string => {
  const dateString = formatDate(date);
  const timeString = formatTime(date);

  return `${dateString} at ${timeString}`;
};

export const modifyDateByDays = (days: number) =>
  new Date(new Date().setDate(new Date().getDate() - days)).toISOString();
