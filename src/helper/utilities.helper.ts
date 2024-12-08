import type { Viewport } from '@/types/misc.types';
import type { JsonObject } from '@/interfaces/helpers.interface';

/**
 * Utility helper functions
 */
export class Utilities {
  /**
   * ## Helper function to block scope for a given amount of time in ms and run
   * next set piece of code only after given time has passed
   */
  static sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  /**
   * ## Helper function to get the current viewport from window
   */
  static getViewport(viewport: Viewport): MediaQueryList {
    const viewports = {
      'sm': 576,
      'md': 768,
      'lg': 992,
      'xl': 1200,
      'xxl': 1400,
      '3xl': 1600,
      '4k': 2400,
    };

    const viewportWidth = viewports[viewport];

    return window.matchMedia(`(min-width: ${viewportWidth}px)`);
  }

  /**
   * ## Helper function to see if the viewport matches the MediaQuery
   */
  static matchesViewport(viewport: MediaQueryList): boolean {
    return viewport.matches;
  }

  /**
   * ## Helper function to watch the viewport
   */
  static watchViewport(
    viewport: MediaQueryList,
    callback: (event: MediaQueryListEvent) => void,
  ) {
    viewport.addEventListener('change', (event) => callback(event));
  }

  /**
   * ## Helper function to loop over iteratable sources
   */
  static iterate<Key extends string | number, Item>( // eslint-disable-line max-len
    source: Map<Key, Item> | Array<Item> | FormData | object | string,
    callback: (value: Item, key?: Key) => void,
  ) {
    /**
     * if source is either a Map or an Array run forEach with
     * callback on source
     */
    if (
      source instanceof Map ||
      Array.isArray(source)
    ) {
      // @ts-ignore
      return source.forEach(callback);
    }

    // If source is of type FormData run a for of loop
    if (source instanceof FormData) {
      for (const entry of source.entries()) {
        callback(entry[1] as Item, entry[0] as Key);
      }

      return;
    }

    /**
     * if source is an Object run forEach with callback
     * over the object keys array
     */
    if (typeof source === 'object') {
      return Object.keys(source).forEach((key) => {
        callback((source as Record<string, Item>)[key], key as Key);
      });
    }

    // if source is a String run forEach with callback over new array
    if (typeof source === 'string') {
      for (const character of source) {
        callback(character as unknown as Item);
      }

      return;
    }

    // if source is not iterable throw error
    throw new Error(`The element type ${typeof source} is not iterable!`);
  }

  /**
   * ## Helper function to check if a value is empty
   */
  static isEmpty<Type>(value: Type): boolean {
    if (!value) {
      return true;
    }

    if (typeof value === 'string') {
      return value.trim() === '';
    }

    if (Array.isArray(value)) {
      return value.length === 0;
    }

    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }

    if (value instanceof Object) {
      return Object.keys(value).length === 0;
    }

    if (value instanceof FormData) {
      return ![...value.keys()].length || [...value.keys()].length === 0;
    }

    return false;
  }

  /**
   * ## Helper function to get a random number between a given minimum value
   * and a given maximum value
   */
  static getRandomNumber(minimumValue: number, maximumValue: number): number {
    // eslint-disable-next-line max-len
    return Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue);
  }

  /**
   * ## Helper function to validate an email address
   */
  static isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+(\+[a-zA-Z0-9._-]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // eslint-disable-line max-len
    return emailRegex.test(email);
  }

  static getFormDataFromJson(
    jsonObject: JsonObject,
    parentKey: string = '',
  ): FormData {
    const formData = new FormData();

    Object.entries(jsonObject).forEach(([key, value]) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (value) {
        if (typeof value === 'object') {
          // Recursively handle nested objects
          const nestedFormData = this.getFormDataFromJson(
            value as JsonObject,
            fullKey,
          );

          nestedFormData.forEach((value, key) => formData.append(key, value));
        } else {
          formData.append(fullKey, value.toString());
        }
      }
    });

    return formData;
  }
}
