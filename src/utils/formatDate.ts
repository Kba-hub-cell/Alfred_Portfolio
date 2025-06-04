/**
 * Formats a date string to a more readable format
 * @param dateString - Date string in ISO format (e.g., "2023-03-15")
 * @returns Formatted date string (e.g., "March 15, 2023")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};