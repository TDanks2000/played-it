import { type IGDBReturnDataType } from "@/@types";
import { env } from "@/env";
import IGDBApiBase from "@/server/utils/api/igdb/base";

class IGDBWrapper extends IGDBApiBase {
  constructor() {
    super(env.TWITCH_CLIENT_ID ?? "", env.TWITCH_CLIENT_SECRET ?? "");
  }

  async info(id: string): Promise<IGDBReturnDataType | undefined> {
    const igdbData = await this.makeReq<IGDBReturnDataType[]>("games", {
      where: `id = ${id}`,
      limit: "1",
    });

    const item = igdbData[0];

    return item;
  }

  async search(query: string): Promise<IGDBReturnDataType[]> {
    const data = await this.makeReq<IGDBReturnDataType[]>("games", {
      search: query,
    });

    return data;
  }

  async mostAnticipated(): Promise<IGDBReturnDataType[]> {
    const DateNow = (new Date().getTime() / 1000).toFixed();
    return await this.makeReq<IGDBReturnDataType[]>("games", {
      sort: "hypes desc",
      where: `hypes != n & first_release_date > ${DateNow}`,
    });
  }

  async newReleases(): Promise<IGDBReturnDataType[]> {
    const DateNow = (new Date().getTime() / 1000).toFixed();
    return await this.makeReq<IGDBReturnDataType[]>("games", {
      sort: "first_release_date desc",
      where: `hypes != n & first_release_date < ${DateNow}`,
    });
  }

  async topRated(): Promise<IGDBReturnDataType[]> {
    return await this.makeReq<IGDBReturnDataType[]>("games", {
      sort: "total_rating desc",
      where: `total_rating != n & total_rating > 85 & hypes > 2 & rating_count > 5 & version_parent = null & category = 0`,
    });
  }
}

const igdb = new IGDBWrapper();

export default igdb;
