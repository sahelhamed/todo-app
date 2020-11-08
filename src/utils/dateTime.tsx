// Node_modules
import { ReactText } from 'react';

/**
 * Format date
 * @param date : date js type
 * @returns {string}
 */
export const formatDate = (date: ReactText): string => {
  const newDate = new Date(date);
  const month = newDate.toLocaleDateString('en-US', { month: 'long' });
  const day = newDate.toLocaleDateString('en-US', { day: 'numeric' });
  const year = newDate.toLocaleDateString('en-US', { year: 'numeric' });
  return `${day} ${month} ${year}`;
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {string}
 */
export const formatTime = (date: ReactText): string => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
