import { ResponseConfig, RouteConfig } from "@asteasolutions/zod-to-openapi";
import { RouteParameter, ZodMediaTypeObject } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { ErrorBadRequest } from "./errors";
import { z } from "zod";



export interface PairConfig {
    tags?: string[]
    responses?: {
        [key: number]: ResponseConfig
    }
    path: string
    description: string
    params: RouteParameter
    postParams?: ZodMediaTypeObject
    response: ResponseConfig
}

export const createGetPostPair = (c: PairConfig): RouteConfig[] => {

    const get: RouteConfig = {
        method: "get",
        tags: ["Get API", ...(c.tags||[])],
        path: c.path,
        description: c.description,
        request: {
            query: c.params,
        },
        responses: {
            200: c.response,
            400: ErrorBadRequest,
            ...(c.responses||{})
        }
    }

    if(!(c.params instanceof z.ZodObject)) {
        throw new Error("PairConfig.params must be a ZodObject")
    }
    // create an example object
    let obj:any = {}
    if(!c.postParams) {
        for(const key of Object.keys(c.params.shape)) {
            let info = c.params.shape[key]
            obj[key] = info._def.openapi.metadata.example
        }
    }

    const post: RouteConfig = {
        method: "post",
        tags: ["Post API", ...(c.tags||[])],
        path: c.path,
        description: c.description,
        request: {
            body: {
                content: {
                    "application/json": c.postParams || {
                        schema: z.tuple([c.params]),
                        example: [obj],
                    }
                }
            }
        },
        responses: {
            200: c.response,
            400: ErrorBadRequest,
            ...(c.responses||{})
        }
    }
    return [get, post]
}
