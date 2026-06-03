export function getFormattedDate() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  
  return formattedDate;
}
