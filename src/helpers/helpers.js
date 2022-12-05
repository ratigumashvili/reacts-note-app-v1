export const getDate = (value) => {
  return new Date(value).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getPriority = (value) => {
  if (value === "normal") {
    return "green";
  }
  if (value === "low") {
    return "yellow";
  }
  if (value === "high") {
    return "crimson";
  }
};

export const getIntroText = (value) => {
  if (value && value.length >= 30) {
    return value.substring(0, 30) + "...";
  }
  return value.substring(0, 20);
};
