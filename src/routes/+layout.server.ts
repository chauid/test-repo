import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  const a = await dataload(10);
  if (a === 10) {
    // error(404, { message: 'layout 404 errorss' });
  }
  console.log('layout.server load');

  return {
    layout_server: {
      a: 'layout.server abcd',
      b: 'layout.server bcdf',
    },
  };
};

async function dataload(id: number) {
  let a = id;
  for (let i = 0; i < 10000000; i++) {
    a++;
  }
  return id;
}
