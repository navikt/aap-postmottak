import { fetchProxy } from 'lib/fetchproxy/fetchProxy';
import { SakSøkInfo } from 'app/api/kelvinsok/route';

const saksbehandlingApiBaseUrl = process.env.BEHANDLING_API_BASE_URL;
const saksbehandlingApiScope = process.env.BEHANDLING_API_SCOPE ?? '';

export const finnSakerForIdent = async (ident: string): Promise<SakSøkInfo[]> => {
  const url = `${saksbehandlingApiBaseUrl}/api/sak/finn`;
  return await fetchProxy<SakSøkInfo[]>(url, saksbehandlingApiScope, 'POST', { ident });
};
