import { components } from 'lib/types/schema';

export type BehandlingFlytOgTilstand =
  components['schemas']['no.nav.aap.behandlingsflyt.flyt.flate.BehandlingFlytOgTilstandDto'];

export type FlytGruppe = components['schemas']['no.nav.aap.behandlingsflyt.flyt.flate.FlytGruppe'];

export type StegGruppe = components['schemas']['no.nav.aap.behandlingsflyt.flyt.flate.FlytGruppe']['stegGruppe'];

export type StegType = components['schemas']['no.nav.aap.behandlingsflyt.flyt.flate.FlytSteg']['stegType'];

export type LøsAvklaringsbehovPåBehandling =
  components['schemas']['no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.flate.LøsAvklaringsbehovPåBehandling'];

export type AvklarTemaGrunnlag =
  components['schemas']['no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto'];
export type KategoriserGrunnlag =
    components['schemas']['no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto'];
