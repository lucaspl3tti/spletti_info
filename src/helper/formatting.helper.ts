import { Dom } from './dom.helper';
import { Utilities } from './utilities.helper';

/**
 * ##### Formatting helper functions
 */
export class Formatting {
  /**
   * ## Helper function to format a given date string
   */
  static formatDate(
    value: string | Date,
    options: Intl.DateTimeFormatOptions = {},
  ): string {
    if (Utilities.isEmpty(value)) {
      throw new Error('Date value must not be null or empty');
    }

    // create new date from given value
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    // get the current language from user
    const languageCode = navigator.language;

    // set default options for language formatter and append special options
    const defaultOptions: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    options = { ...defaultOptions, ...options };

    // create new formatter instance
    const dateTimeFormatter = new Intl.DateTimeFormat(languageCode, options);

    return dateTimeFormatter.format(date);
  }

  /**
   * ## Helper function to format bytes
   */
  static formatBytes(bytes: number) {
    const sizes = ['bytes', 'kb', 'mb', 'gb', 'tb'];
    if (bytes === 0) {
      return '0 Bytes';
    }

    const magnitude = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = parseFloat((bytes / Math.pow(1024, magnitude)).toFixed(2));
    return `${size} ${sizes[magnitude]}`;
  }

  /**
   * ## Helper function to decode strings
   */
  static decodeString(string: string): string {
    if (string.length === 0) {
      return string;
    }

    /**
     * create textarea element (will not be appended to DOM) and set it's
     * innerHTML to the string value
     */
    const textarea: HTMLTextAreaElement = Dom.createElement('textarea', {
      html: string,
    });

    /**
     * get the decoded string via the textareas valiue and remove the
     * element again
     */
    const decodedString = textarea.value;
    textarea.remove();

    return decodedString;
  }

  /**
   * ## Helper function to truncate string to a given amount of characters
   */
  static truncateString(
    string: string,
    maxCharacters: number,
    useWordBoundary = true,
  ): string {
    if (string.length <= maxCharacters) {
      return string;
    }

    // shorten string to given length
    let newString = string.slice(0, maxCharacters - 1);

    // if useWordBoundary is true shorten string to the last full word
    if (useWordBoundary) {
      newString = newString.slice(0, newString.lastIndexOf(' '));
    }

    // append html entity for "..." to newString
    newString += '\u2026';

    return newString;
  }

  static kebabToDashCase(string: string): string {
    return string.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
  }

  static spaceToDashCase(string: string): string {
    return string.replace(' ', '-').toLowerCase();
  }

  /**
   * ## Helper function to convert a given string to a string with a unit.
   *
   * If the given string is empty or not a number, it will return null.
   * If the given string is a number, it will return a string with the
   * given unit (default is 'px').
   */
  static convertToUnit(string: string|number, unit = 'px'): string|null {
    if (string === null || string === '') {
      return null;
    } else if (isNaN(+string)) {
      return String(string);
    } else if (!isFinite(+string)) {
      return null;
    } else {
      return `${Number(string)}${unit}`;
    }
  }
}
