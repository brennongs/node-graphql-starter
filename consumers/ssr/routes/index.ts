import { Request, Response } from "express";

import handleAsync from "~/consumers/util/handleAsync";

import makeGetAllLinks from "~/adapters/factories/links/get-all-links-factory";

const getAllLinks = makeGetAllLinks();

export default handleAsync(async (
  request: Request,
  response: Response,
) => {
  const host = request.headers.host;
  const feed = await getAllLinks.execute();
  console.log(feed)

  response.render('index', {
    host,
    feed,
  })
})
