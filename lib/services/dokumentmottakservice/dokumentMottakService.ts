import { fetchPdf, fetchProxy } from 'lib/fetchproxy/fetchProxy';
import {
  AvklarTemaGrunnlag,
  BehandlingFlytOgTilstand,
  FinnSakGrunnlag,
  JournalpostInfo,
  KategoriserGrunnlag,
  LøsAvklaringsbehovPåBehandling,
  OverleveringGrunnlag,
  SettPåVentRequest,
  StruktureringGrunnlag,
  Venteinformasjon,
} from 'lib/types/types';

const dokumentMottakApiBaseUrl = process.env.DOKUMENTMOTTAK_API_BASE_URL;
const dokumentMottakApiScope = process.env.DOKUMENTMOTTAK_API_SCOPE ?? '';

export const hentFlyt = async (behandlingsreferanse: string): Promise<BehandlingFlytOgTilstand> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/flyt`;
  return await fetchProxy<BehandlingFlytOgTilstand>(url, dokumentMottakApiScope, 'GET');
};

export const hentAvklarTemaGrunnlag = async (behandlingsreferanse: string): Promise<AvklarTemaGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/grunnlag/avklarTemaVurdering`;
  return await fetchProxy<AvklarTemaGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentFinnSakGrunnlag = async (behandlingsreferanse: string): Promise<FinnSakGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/grunnlag/finnSak`;
  return await fetchProxy<FinnSakGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentKategoriserGrunnlag = async (behandlingsreferanse: string): Promise<KategoriserGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/grunnlag/kategorisering`;
  return await fetchProxy<KategoriserGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentOverleveringGrunnlag = async (behandlingsreferanse: string): Promise<OverleveringGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/grunnlag/overlevering`;
  return await fetchProxy<OverleveringGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentDigitaliseringGrunnlag = async (behandlingsreferanse: string): Promise<StruktureringGrunnlag> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/grunnlag/strukturering`;
  return await fetchProxy<StruktureringGrunnlag>(url, dokumentMottakApiScope, 'GET');
};
export const hentJournalpostInfo = async (behandlingsreferanse: string): Promise<JournalpostInfo> => {
  const url = `${dokumentMottakApiBaseUrl}/api/dokumenter/${behandlingsreferanse}/info`;
  return fetchProxy<JournalpostInfo>(url, dokumentMottakApiScope, 'GET');
};

export const løsAvklaringsbehov = async (avklaringsBehov: LøsAvklaringsbehovPåBehandling) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/løs-behov`;
  return await fetchProxy<void>(url, dokumentMottakApiScope, 'POST', avklaringsBehov);
};
export const settPåVent = async (behandlingsreferanse: string, body: SettPåVentRequest): Promise<unknown> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/sett-på-vent`;
  return await fetchProxy<unknown>(url, dokumentMottakApiScope, 'POST', body);
};
export const hentVenteInformasjon = async (behandlingsreferanse: string): Promise<Venteinformasjon> => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/vente-informasjon`;
  return await fetchProxy<Venteinformasjon>(url, dokumentMottakApiScope, 'GET');
};
export const hentDokumentFraDokumentInfoId = async (
  journalpostId: number,
  dokumentInfoId: string
): Promise<Blob | undefined> => {
  return fetchPdf(
    `${dokumentMottakApiBaseUrl}/api/dokumenter/${journalpostId}/${dokumentInfoId}`,
    dokumentMottakApiScope
  );
};

export const endreTema = async (behandlingsreferanse: string) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling/${behandlingsreferanse}/endre-tema`;
  return await fetchProxy<{ redirectUrl: string }>(url, dokumentMottakApiScope, 'POST');
};

export const hentAlleBehandlinger = async () => {
  const url = `${dokumentMottakApiBaseUrl}/test/hentAlleBehandlinger`;
  return await fetchProxy<[{ id: string; status: string; opprettet: string; steg: string }]>(
    url,
    dokumentMottakApiScope,
    'GET'
  );
};

// TODO: Fjern denne - testendepunkt
export const opprettBehandlingForJournalpost = async (body: { journalpostId: number }) => {
  const url = `${dokumentMottakApiBaseUrl}/api/behandling`;
  return await fetchProxy<{ referanse: number }>(url, dokumentMottakApiScope, 'POST', body);
};

// TODO: Fjern denne - testendepunkt
export const rekjørFeiledeJobber = async () => {
  const url = `${dokumentMottakApiBaseUrl}/drift/api/jobb/rekjorAlleFeilede`;
  return await fetchProxy(url, dokumentMottakApiScope, 'GET');
};
