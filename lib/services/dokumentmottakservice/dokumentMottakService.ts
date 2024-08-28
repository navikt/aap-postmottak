import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { mockFlyt } from 'lib/mock/mockFlyt';
import { BehandlingFlytOgTilstand } from 'lib/types/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (behandlingsReferanse: string): Promise<BehandlingFlytOgTilstand> => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost') {
    return mockFlyt;
  }
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsReferanse}/flyt`;
  return await fetchProxy<BehandlingFlytOgTilstand>(url, dokumentMottakApiScope, 'GET');
};
