import "./import"
import { OpenApiGeneratorV3, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {config} from './config'
import parseArgs from 'minimist';
import YAML from 'yaml';
import { writeFileSync } from 'fs';
import { ArtistCountryCodeFromArtistMbid } from "./endpoints/artist-country-code-from-artist-mbid";
import { SpotifyIdFromMbid } from "./endpoints/spotify-id-from-mbid";
import { SpotifyIdFromMetadata } from "./endpoints/spotify-id-from-metadata";
import { SimilarRecordings } from "./endpoints/similar-recordings";
import { BulkTagLookup } from "./endpoints/bulk-tag-lookup";

const argv = parseArgs(process.argv.slice(2));

const outputFile = argv['o']

if(!outputFile) {
  console.log('Please provide an output file')
  process.exit(1)
}

const main = async () => {
  const r = new OpenAPIRegistry();


  [
    ArtistCountryCodeFromArtistMbid,
    SpotifyIdFromMbid,
    SpotifyIdFromMetadata,
    SimilarRecordings,
    BulkTagLookup,
  ].flat().map(x=>r.registerPath(x))
  const generator = new OpenApiGeneratorV3(r.definitions);
  const document = generator.generateDocument(config)
  const yamlDocument = YAML.stringify(document)

  writeFileSync(outputFile, yamlDocument)
}

main().catch(console.error);
