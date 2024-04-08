export const formatDateTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return `${formattedHours}:${formattedMinutes}${period} • ${formattedDate}`;
};

export const shortenAuthor = (author: string) => {
  const maxLength = 15;
  if (!author) return 'Unknown Author';
  return author.length > maxLength ? author.slice(0, maxLength) + '...' : author;
}