export function convertDateStringToDate(dateString: string): Date {
  if (dateString === '') return new Date();

  const [day, month, year] = dateString.split('/');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}
