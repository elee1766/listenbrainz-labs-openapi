import { z } from "zod";
import { createGetPostPair } from "../common/createPair";



const algorithms = [
  "session_based_days_9000_session_300_contribution_5_threshold_15_limit_50_skip_30"
] as const;

export const SimilarRecordings = createGetPostPair({
  path: "/similar-recordings/json",
  description: "view recordings similar to a given recording and algorithm",
  params:  z.object({
    recording_mbids: z.string().uuid().openapi({
      example: "7db2c09d-345f-46e6-900e-0f4499e29c3d",
    }),
    algorithm: z.enum(algorithms).openapi({
      example: algorithms[0],
    }),
  }),
  postParams: {
    schema: z.object({
      recording_mbids: z.array(z.string().uuid()).openapi({
        example: ["7db2c09d-345f-46e6-900e-0f4499e29c3d"],
      }),
      algorithm: z.enum(algorithms).openapi({
        example: algorithms[0],
      }),
    }),
  },
  response: {
    description: "successful response",
    content: {
      "application/json": {
        schema: z.array(
          z.object({
            recording_mbid: z.string().uuid().openapi({
              example: "e3b7cd96-c41d-497a-b401-dc7494f638db",
            }),
            recording_name: z.string().openapi({
              example: "The Middle",
            }),
            artist_credit_name: z.string().openapi({
              example: "Jimmy Eat World",
            }),
            artist_credit_mbids: z.nullable(z.array(z.string().uuid())),
            release_name: z.string().openapi({
              example: "Bleed American",
            }),
            release_mbid: z.string().uuid().openapi({
              example: "29bf4852-0f9b-4f21-b2a6-6eff6003ef33",
            }),
            caa_id: z.number().openapi({
              example: 31536400421,
            }),
            caa_release_mbid: z.string().uuid().openapi({
              example: "c42c37be-11e3-472a-ae6c-429c8e300efd",
            }),
            score: z.number().openapi({
              example: 375,
            }),
            reference_mbid: z.string().uuid().openapi({
              example: "7db2c09d-345f-46e6-900e-0f4499e29c3d",
            }),
          })
        )
      },
    },
  },
})
