import { z } from "zod";
import { createGetPostPair } from "../common/createPair";



export const SpotifyIdFromMbid = createGetPostPair({
  path: "/bulk-tag-lookup/json",
  description: "bulk-tag-lookup",
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
            tag: z.string().openapi({
              example: "blues",
            }),
            percent: z.number().openapi({
              example: 0.022332730560578662,
            }),
            source: z.string().openapi({
              example: "recording",
            }),
          })
        )
      },
    },
  },
})
