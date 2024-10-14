'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateFlyt(journalpostId: string) {
  revalidateTag(`api/behandling/${journalpostId}/flyt`);
}
