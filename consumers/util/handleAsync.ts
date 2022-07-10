import { RequestHandler } from 'express';

export default function (handle: RequestHandler): RequestHandler {
  return async function (request, response, next) {
    console.log(handle)
    try {
      await handle(request, response, next);

      return next();
    } catch (error: unknown) {
      return next(error);
    }
  }
}