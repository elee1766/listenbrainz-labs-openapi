import { ResponseConfig } from "@asteasolutions/zod-to-openapi";

export const ErrorBadRequest:ResponseConfig = {
  description: "Bad Request",
  content: {
    "text/html": {
      schema: {
        type: "string",
        example: `
<!doctype html>
<html lang="en">
<title>400 Bad Request</title>
<h1>Bad Request</h1>
<p>The request could not be understood by the server due to malformed syntax.</p>
</html>
        `.trim(),
      }
    }
  }
}
