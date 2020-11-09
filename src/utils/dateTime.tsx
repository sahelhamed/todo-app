// Node_modules
import { ReactText } from 'react';
import moment from 'moment';
// Constants
import { DAY, MONTH, WEEK } from '../constants/text';

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
const filterDatesByCurrentDay = (date: string | number): boolean => {
  const startOfDay = moment().startOf('day').toDate();
  const endOfDay = moment().endOf('day').toDate();
  return moment(new Date(date)).isBetween(startOfDay, endOfDay);
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
const filterDatesByCurrentWeek = (date: string | number): boolean => {
  const startOfWeek = moment().startOf('week').toDate();
  const endOfWeek = moment().endOf('week').toDate();
  return moment(new Date(date)).isBetween(startOfWeek, endOfWeek);
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
const filterDatesByCurrentMonth = (date: string | number): boolean => {
  const startOfMonth = moment().startOf('month').toDate();
  const endOfMonth = moment().endOf('month').toDate();
  return moment(new Date(date)).isBetween(startOfMonth, endOfMonth);
};

/**
 * Get time from date
 * @param date : date js type
 * @returns {boolean}
 */
const filterDatesByCurrentYear = (date: string | number): boolean => {
  const startOfYear = moment().startOf('year').toDate();
  const endOfYear = moment().endOf('year').toDate();
  return moment(new Date(date)).isBetween(startOfYear, endOfYear);
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
    case MONTH:
      return filterDatesByCurrentMonth(date);
    default:
      return filterDatesByCurrentYear(date);
  }
};
