import { z } from "zod";
import { createGetPostPair } from "../common/createPair";



export const ArtistCountryCodeFromArtistMbid = createGetPostPair({
  path: "/artist-country-code-from-artist-mbid/json",
  description: "Given artist MBIDs look up countries for those artists. Any artist_mbids not found in the database will be omitted from the results. If none are found a 404 error is returned",
  params:  z.object({
    artist_mbid: z.string().uuid().openapi({
      example: "190e78ac-8f44-4bf1-a4ff-95ed9376ad9e",
    })
  }),
  response: {
    description: "successful response",
    content: {
      "application/json": {
        schema: z.array(
          z.object({
            artist_mbid: z.string().uuid().openapi({
              example: "190e78ac-8f44-4bf1-a4ff-95ed9376ad9e",
            }),
            artist_name: z.string().openapi({
              example: "Motion City Soundtrack",
            }),
            area_id: z.number().openapi({
              example: 222,
            }),
            country_code: z.string().openapi({
              example: "US",
            }),
          })
        )
      },
    },
  },
  responses: {
    "404": {
      description: "Not found",
    },
  }
})
