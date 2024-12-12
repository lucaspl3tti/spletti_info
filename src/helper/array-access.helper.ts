import { Utilities } from './utilities.helper';

/**
 * ##### Array helper functions
 */
export class ArrayAccess {
  /**
   * ## Helper function to get either the first element in the array, or the
   * first ~given amount~ items in the array
   */
  static first<Type>(array: Type[], amount = 1): Type | Type[] {
    if (amount === 1) {
      return array[0];
    }

    return array.slice(0, amount);
  }

  /**
   * ## Helper function to get either the last element in the array, or the
   * last ~given amount~ items in the array
   */
  static last<Type>(array: Type[], amount = 1): Type | Type[] {
    if (amount === 1) {
      return array[array.length - 1];
    }

    return array.slice(-amount);
  }

  static removeItem<Type>(array: Type[], itemToRemove: Type) {
    return array.filter((item) => item !== itemToRemove);
  }

  /**
   * ## Helper function to get random item in array
   */
  static getRandomItem<Type>(array: Type[]): Type {
    return array[Utilities.getRandomNumber(0, array.length - 1)];
  }

  /**
   * Helper function to wrap a value in an array
   */
  static wrapInArray<Type>(value: Type|null|undefined): Type[] {
    if (value === null || value === undefined) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  }

  /**
   * Helper function to format an array of strings into a sentence
   */
  static formatStringArrayToSentence(stringArray: string[]): string {
    if (!stringArray?.length) {
      return '';
    }

    return stringArray.join(', ').replace(/, ([^,]*)$/, ' and $1.');
  }
}
