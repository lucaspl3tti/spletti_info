import { Utilities } from '@/helper/utilities.helper';

export default function (ms: number): Promise<unknown> {
  return Utilities.sleep(ms);
}
