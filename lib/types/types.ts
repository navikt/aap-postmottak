import { components as postmottak } from '@navikt/aap-postmottak-backend-typescript-types';
import { components as behandlingsflyt } from '@navikt/aap-behandlingsflyt-typescript-types';

export type BehandlingFlytOgTilstand =
  postmottak['schemas']['no.nav.aap.postmottak.api.flyt.BehandlingFlytOgTilstandDto'];

export type FlytGruppe = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.FlytGruppe'];
export type FlytProsessering = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.Prosessering'];

export type StegGruppe = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.FlytGruppe']['stegGruppe'];

export type StegType = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.FlytSteg']['stegType'];

export type LøsAvklaringsbehovPåBehandling =
  postmottak['schemas']['no.nav.aap.postmottak.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling'];

export type SettPåVentRequest = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.SettP\u00E5VentRequest'];
export type SettPåVentÅrsaker = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.SettP\u00E5VentRequest']['grunn'];
export type Venteinformasjon = postmottak['schemas']['no.nav.aap.postmottak.api.flyt.Venteinformasjon'];
export type JournalpostInfo =
  postmottak['schemas']['no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentInfoResponsDTO'];
export type Dokument = postmottak['schemas']['no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentDto'];

export type AvklarTemaGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklartema.flate.AvklarTemaGrunnlagDto'];
export type FinnSakGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.api.faktagrunnlag.finnsak.AvklarSakGrunnlagDto'];
export type Saksinfo = postmottak['schemas']['no.nav.aap.postmottak.api.faktagrunnlag.finnsak.SaksInfoDto'];
export type KategoriserGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto'];
export type KategoriserDokumentKategori =
  postmottak['schemas']['no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning']['kategori'];
export type StruktureringGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto'];

export type Søknad =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.kontrakt.hendelse.dokumenter.S\u00F8knadV0'];
