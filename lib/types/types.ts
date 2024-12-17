// import { components } from 'lib/types/schema';
import { components as postmottak } from '@navikt/aap-postmottak-backend-typescript-types';
import { components as behandlingsflyt } from 'lib/types/behandlingsflyt.schema';

export type BehandlingFlytOgTilstand =
  postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.BehandlingFlytOgTilstandDto'];

export type FlytGruppe = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.FlytGruppe'];
export type FlytProsessering = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.visning.Prosessering'];

export type StegGruppe = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.FlytGruppe']['stegGruppe'];

export type StegType = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.FlytSteg']['stegType'];

export type LøsAvklaringsbehovPåBehandling =
  postmottak['schemas']['no.nav.aap.postmottak.behandling.avklaringsbehov.flate.LøsAvklaringsbehovPåBehandling'];

export type SettPåVentRequest = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.SettP\u00E5VentRequest'];
export type SettPåVentÅrsaker =
  postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.SettP\u00E5VentRequest']['grunn'];
export type Venteinformasjon = postmottak['schemas']['no.nav.aap.postmottak.flyt.flate.Venteinformasjon'];
export type JournalpostInfo =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentInfoResponsDTO'];
export type Dokument =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentDto'];

export type AvklarTemaGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto'];
export type FinnSakGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakGrunnlagDto'];
export type Saksinfo =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.SaksInfoDto'];
export type KategoriserGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto'];
export type KategoriserDokumentKategori =
  postmottak['schemas']['no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning']['kategori'];
export type StruktureringGrunnlag =
  postmottak['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto'];

export type Søknad =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.faktagrunnlag.dokument.kontrakt.søknad.Søknad'];
