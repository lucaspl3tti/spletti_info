import { Utilities } from '@helper/utilities.helper';

export default function (ms: number): Promise<unknown> {
  return Utilities.delay(ms);
}
