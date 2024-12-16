## ListenBrainz Labs OpenAPI

This is the OpenAPI specification for the ListenBrainz Labs API.

Not every API is documented here, because I don't use them all. Please feel free to open a PR if you want to add an endpoint, or open an issue and i can add it for you if i can find the time.

the generate schema is oas3.0. while we could support 3.1 (which would be really useful, for typed tuples), the client generator i use in golang doesn't support it, so i'm not generating one.

if you NEED 3.1, open an issue and i can make a schema31.yaml file for you.
