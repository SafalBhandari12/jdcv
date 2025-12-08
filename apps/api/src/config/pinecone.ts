import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY || "",
});

const index = pc.index("jdcv");

async function upsertVectors(values: {
  id: string;
  embedding: number[];
  metadata?: Record<string, any>;
}) {
  const record: any = { id: values.id, values: values.embedding };
  if (values.metadata !== undefined) {
    record.metadata = values.metadata;
  }
  await index.upsert([record]);
}

async function queryVectors(values: {
  vector: number[];
  topK: number;
  includemeta: true;
  filter?: Record<string, any>;
}) {
  const queryOptions: any = {
    vector: values.vector,
    topK: values.topK,
    includeMetadata: values.includemeta,
  };
  if (values.filter !== undefined) {
    queryOptions.filter = values.filter;
  }
  const result = await index.query(queryOptions);
  return result;
}

export { upsertVectors, queryVectors };
