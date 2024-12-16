import { z } from "zod";
import { createGetPostPair } from "../common/createPair";

export const SpotifyIdFromMetadata = createGetPostPair({
  path: "/spotify-id-from-metadata/json",
  description: "Given artist name, release name, and track name, attempt to find a suitable match in Spotify.",
  params:  z.object({
    artist_name: z.string().openapi({
      example: "Motion City Soundtrack",
    }),
    release_name: z.string().openapi({
      example: "Commit This to Memory",
    }),
    track_name: z.string().openapi({
      example: "Everything Is Alright",
    }),
  }),
  response: {
    description: "successful response",
    content: {
      "application/json": {
        schema: z.array(
          z.object({
            artist_name: z.string().openapi({
              example: "Motion City Soundtrack",
            }),
            release_name: z.string().openapi({
              example: "Commit This to Memory",
            }),
            track_name: z.string().openapi({
              example: "Everything Is Alright",
            }),
            spotify_track_ids: z.array(z.string()).openapi({
              example: ["6xyiHZgrmXw7sMyYXbXjPV"],
            }),
          })
        )
      },
    },
  },
})
