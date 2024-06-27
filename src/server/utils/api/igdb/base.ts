import { type IGDBAccessTokenResponse } from "@/@types";
import { defaultFields } from "@/server/utils/api/igdb/constants";

class IGDBApiBase {
  private clientId: string;
  private clientSecret: string;
  private clientAccessToken?: string;
  private tokenExpiration = 0;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async getAccessToken() {
    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=client_credentials`,
      { method: "POST" },
    );

    if (!response.ok) {
      throw new Error("Failed to get access token");
    }

    const json = (await response.json()) as IGDBAccessTokenResponse;

    console.log(`Getting a new access token`);

    this.clientAccessToken = json.access_token;
    this.tokenExpiration = Date.now() + json.expires_in * 1000; // Convert to milliseconds
    return this.clientAccessToken;
  }

  checkAndRenewToken = async () =>
    !!(Date.now() >= this.tokenExpiration - 100) &&
    (await this.getAccessToken());

  async makeReq<T = unknown>(
    reqUrl: "games",
    options: {
      fields?: string[];
      where?: string;
      search?: string;
      sort?: string;
      limit?: string;
      offset?: string;
    },
  ): Promise<T> {
    try {
      await this.checkAndRenewToken();

      if (!this.clientAccessToken) {
        throw new Error("There seems to be an issue with the access token");
      }

      // Construct the request body
      let requestBody = "";
      const fields = options.fields ?? [];
      requestBody += `fields ${[...fields, ...defaultFields].join(",")};`;

      if (options.sort) requestBody += ` sort ${options.sort};`;
      if (options.limit) requestBody += ` limit ${options.limit};`;
      if (options.search) requestBody += ` search "${options.search}";`;
      if (options.where) requestBody += ` where ${options.where};`;

      const res = await fetch(`https://api.igdb.com/v4/${reqUrl}`, {
        method: "POST",
        headers: {
          "Client-ID": this.clientId,
          Authorization: `Bearer ${this.clientAccessToken}`,
        },
        body: requestBody ? requestBody : undefined,
        cache: "no-cache",
      });

      if (!res.ok) throw new Error("Failed to fetch data");

      return (await res.json()) as T;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
}

export default IGDBApiBase;
