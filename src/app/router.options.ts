import type { RouterConfig } from '@nuxt/schema';

import {
  defaultScrollBehavior,
  defaultScrollOffset,
  scrollToAnchorOffset,
} from '@/consts/scroll-options';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: scrollToAnchorOffset,
        behavior: defaultScrollBehavior,
      };
    }

    return { top: defaultScrollOffset, behavior: defaultScrollBehavior };
  },
};
