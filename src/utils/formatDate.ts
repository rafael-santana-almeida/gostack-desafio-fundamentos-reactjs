const formatDate = (dateString: Date): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
