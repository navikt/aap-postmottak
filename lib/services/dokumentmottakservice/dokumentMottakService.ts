import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { Flyt } from 'lib/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (behandlingsReferanse: string): Promise<Flyt> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsReferanse}/flyt`;
  return await fetchProxy<Flyt>(url, dokumentMottakApiScope, 'GET');
};
