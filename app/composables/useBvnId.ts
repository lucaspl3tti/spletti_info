import { useId as vueUseId } from 'vue';

const genericBvnPrefix = 'BootstrapVueNext__';
const withBvnPrefix = (value: string, suffix: string = '') => {
  const suffixWithTrail = `${suffix}___`;
  return `${genericBvnPrefix}ID__${value}__${suffix ? suffixWithTrail : ''}`;
};

export default function (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string,
): ComputedRef<string> {
  const genId = vueUseId();
  return computed(() => toValue(id) || withBvnPrefix(genId || '', suffix));
}
