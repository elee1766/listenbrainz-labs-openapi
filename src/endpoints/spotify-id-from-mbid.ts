import { z } from "zod";
import { createGetPostPair } from "../common/createPair";



export const SpotifyIdFromMbid = createGetPostPair({
  path: "/spotify-id-from-mbid/json",
  description: " Given a recording mbid, lookup its metadata using canonical metadata tables and using that attempt to find a suitable match in Spotify.",
  params:  z.object({
    recording_mbid: z.string().uuid().openapi({
      example: "7db2c09d-345f-46e6-900e-0f4499e29c3d",
    })
  }),
  response: {
    description: "successful response",
    content: {
      "application/json": {
        schema: z.array(
          z.object({
            recording_mbid: z.string().uuid().openapi({
              example: "7db2c09d-345f-46e6-900e-0f4499e29c3d",
            }),
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
