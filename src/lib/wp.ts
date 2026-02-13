import type { GetAllPagesResponse } from '@/types/wp';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(`${import.meta.env.WP_DOMAIN}/graphql`);

export async function getAllPages(): Promise<GetAllPagesResponse> {
  return client.request<GetAllPagesResponse>(`
    {
      pages(first: 1000) {
        nodes {
          id
          title
          slug
          blocks {
            name
            originalContent
          }
        }
      }
    }
  `);
}
