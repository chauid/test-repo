import type { PageServerLoad, Actions } from './$types';
import { getdata } from '$lib/server/modules/products';

export const load: PageServerLoad = async () => {
  const props = await getdata();
  console.log('page.server load');
  return {
    page_server: {
      props,
      a: 'page.server abcd',
      b: 'page.server bcdf',
    },
  };
};

export const actions = {
  login: async (event) => {
    console.log(event.request.body);
    return { success: true };
  },
} satisfies Actions;
