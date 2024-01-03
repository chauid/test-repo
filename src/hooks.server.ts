import type { Handle, HandleServerError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/admin')) {
    return new Response('관리자 페이지', { status: 404 });
  }
  const response = await resolve(event);
  return response;
};

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
  return {
    message: `msg: ${message}`,
  };
};
