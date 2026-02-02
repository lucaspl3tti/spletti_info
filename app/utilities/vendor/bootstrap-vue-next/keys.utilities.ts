import type { ComponentInternalInstance } from 'vue';

export const genericBvnPrefix = 'BootstrapVueNext__';

export const withBvnPrefix = (value: string, suffix: string = '') => {
  const suffixWithTrail = `${suffix}___`;
  return `${genericBvnPrefix}ID__${value}__${suffix ? suffixWithTrail : ''}`;
};

// const createBvnInjectionKey = (name: string) => withBvnPrefix(name) as unknown as symbol;
const createBvnRegistryInjectionKey = (name: string) => {
  return withBvnPrefix(`${name}__registry`) as unknown as symbol;
};

// Show/Hide components
export type RegisterShowHideFnInput = {
  id: string
  component: ComponentInternalInstance
  value: Ref<boolean>
  toggle: (resolveOnHide?: boolean) => Promise<boolean | string>
  show: (resolveOnHide?: boolean) => Promise<boolean | string>
  hide: (trigger?: string) => Promise<boolean | string>
  registerTrigger: (trigger: string, el: Element) => void
  unregisterTrigger: (trigger: string, el: Element, clean: boolean) => void
}

export interface RegisterShowHideMapValue {
  id: string
  component: ComponentInternalInstance
  value: Readonly<Ref<boolean>>
  toggle: (resolveOnHide?: boolean) => Promise<boolean | string | null>
  show: (resolveOnHide?: boolean) => Promise<boolean | string | null>
  hide: (trigger?: string, noTraverse?: boolean) => Promise<boolean | string | null>
  registerTrigger: (trigger: string, el: Element) => void
  unregisterTrigger: (trigger: string, el: Element, clean: boolean) => void
}

export interface RegisterShowHideInstances {
  instances: RegisterShowHideMapValue[]
  getActive: () => RegisterShowHideMapValue | undefined
}

export interface RegisterShowHideValue {
  register: (input: RegisterShowHideFnInput) => {
    unregister: () => void
    updateId: (newId: string, oldId: string) => void
  }
  values: Ref<Map<string, RegisterShowHideInstances>>
}

export const showHideRegistryKey: InjectionKey<RegisterShowHideValue> =
  createBvnRegistryInjectionKey('showHide');
