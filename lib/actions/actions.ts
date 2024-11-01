'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateFlyt(behandlingsreferanse: string) {
  revalidateTag(`api/behandling/${behandlingsreferanse}/flyt`);
}
