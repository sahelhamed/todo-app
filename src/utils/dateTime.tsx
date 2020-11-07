// Node_modules
import { ReactText } from 'react';
import moment from 'moment';
// Constants
import { DAY, WEEK, YEAR } from '../constants/text';

/**
 * Format date
 * @param date : date js type
 * @returns {string}
 */
export const formatDate = (date: ReactText): string => {
  // eslint-disable-next-line no-console
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

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
export const filterDatesByCurrentDay = (date: string | number): boolean => {
  const lastDay = moment().subtract(1, 'days').hours(0);
  return moment(date) > lastDay;
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
export const filterDatesByCurrentWeek = (date: string | number): boolean => {
  const lastWeek = moment().subtract(7, 'days').hours(0);
  return moment(date) > lastWeek;
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
export const filterDatesByCurrentMonth = (date: string | number): boolean => {
  const lastMonth = moment().subtract(30, 'days').hours(0);
  return moment(date) > lastMonth;
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
export const filterDatesByCurrentYear = (date: string | number): boolean => {
  const lastYear = moment().subtract(365, 'days').hours(0);
  return moment(date) > lastYear;
};

/**
 * Get time from date
 * @param date : date js type
 * @param filterType : type of filter
 * @returns {boolean}
 */
export const filterDates = (
  date: string | number,
  filterType: string,
): boolean => {
  switch (filterType) {
    case DAY:
      return filterDatesByCurrentDay(date);
    case WEEK:
      return filterDatesByCurrentWeek(date);
    case YEAR:
      return filterDatesByCurrentYear(date);
    default:
      return filterDatesByCurrentWeek(date);
  }
};
