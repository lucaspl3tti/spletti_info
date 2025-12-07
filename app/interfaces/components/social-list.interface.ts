import type { PimcoreSocialItem } from '@/interfaces/base/api.interface';

export interface ClbSocialListProperties {
  iconSize?: string | number
  isNav?: boolean
}

export interface ClbSocialListItem extends PimcoreSocialItem {
  showTooltip: boolean
}
