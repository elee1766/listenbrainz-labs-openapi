import { OpenAPIObjectConfigV31 } from "@asteasolutions/zod-to-openapi/dist/v3.1/openapi-generator";

export const config:OpenAPIObjectConfigV31 = {
  info: {
    title: "ListenBrainz Labs API",
    version: "1.0.0",
    description: "ListenBrainz Labs API is the MetaBrainz Dataset Hoster API",
  },
  tags: [{
    name: "Post API",
  }, {
      name: "Get API",
    }],
  openapi: "3.1.0",
  servers: [
    {
      url: "https://labs.api.listenbrainz.org",
    },
  ],
}
