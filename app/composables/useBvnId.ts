import { useId as vueUseId } from 'vue';
import { withBvnPrefix } from '@/utilities/vendor/bootstrap-vue-next/keys.utilities';

export default function (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string,
): ComputedRef<string> {
  const genId = vueUseId();
  return computed(() => toValue(id) || withBvnPrefix(genId || '', suffix));
}
