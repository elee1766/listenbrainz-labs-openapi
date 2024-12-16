import { OpenAPIObjectConfig } from "@asteasolutions/zod-to-openapi/dist/v3.0/openapi-generator";

export const config:OpenAPIObjectConfig = {
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
  openapi: "3.0.0",
  servers: [
    {
      url: "https://labs.api.listenbrainz.org",
    },
  ],
}
