const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// YYYY-MM-DD to Month Day, Year format
export function formatDate(date: string): string {
  const [year, month, day] = date.split('-');
  return `${months[parseInt(month, 10) - 1]} ${day}, ${year}`;
}
