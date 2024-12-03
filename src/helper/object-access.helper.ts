import { Utilities } from './utilities.helper';

export class ObjectAccess {
  static length<ObjectType extends Record<string, unknown>>(
    object: ObjectType,
  ): number {
    return Object.keys(object).length;
  }

  /**
   * ## Helper function to get either the first key-value pair in the object,
   * or the first ~given amount~ key-value pairs in the object
   */
  static first<Key extends string | number | symbol, Value>(
    object: Record<Key, Value>,
    amount = 1,
  ): [Key, Value] | Array<[Key, Value]> {
    const entries = Object.entries(object) as Array<[Key, Value]>;

    if (amount === 1) {
      return entries[0];
    }

    return entries.slice(0, amount);
  }

  /**
   * ## Helper function to get either the last key-value pair in the object,
   * or the last ~given amount~ key-value pairs in the object
   */
  static last<Key extends string | number | symbol, Value>(
    object: Record<Key, Value>,
    amount = 1,
  ): [Key, Value] | Array<[Key, Value]> {
    const entries = Object.entries(object) as Array<[Key, Value]>;

    if (amount === 1) {
      return entries[entries.length - 1];
    }

    return entries.slice(-amount);
  }

  /**
   * ## Helper function to remove a specific item from an object
   * (by its key)
   */
  static removeItem<Key extends string | number | symbol, Value>(
    object: Record<Key, Value>,
    keyToRemove: Key,
  ): Record<Key, Value> {
    const { [keyToRemove]: removedItem, ...rest } = object; // eslint-disable-line max-len, @typescript-eslint/no-unused-vars
    return rest as Record<Key, Value>;
  }

  /**
   * ## Helper function to get a random key-value pair from an object
   */
  static getRandomItem<Key extends string | number | symbol, Value>(
    object: Record<Key, Value>,
  ): [Key, Value] {
    const entries = Object.entries(object) as Array<[Key, Value]>;
    const randomIndex = Utilities.getRandomNumber(0, entries.length - 1);

    return entries[randomIndex];
  }
}
