import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  let a = 1;
  a = dataload(10);
  console.log('layout.ts load');
  return {
    layout: {
      a: `layout.ts abcd : ${a}`,
      b: 'layout.ts bcdf',
    },
  };
};

function dataload(id: number) {
  let a = id;
  for (let i = 0; i < 1000000000; i++) {
    a++;
  }
  return a;
}
