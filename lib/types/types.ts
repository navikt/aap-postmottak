import { components } from 'lib/types/schema';
import { components as behandlingsflyt} from 'lib/types/behandlingsflyt.schema'

export type BehandlingFlytOgTilstand =
  components['schemas']['no.nav.aap.postmottak.flyt.flate.BehandlingFlytOgTilstandDto'];

export type FlytGruppe = components['schemas']['no.nav.aap.postmottak.flyt.flate.FlytGruppe'];

export type StegGruppe = components['schemas']['no.nav.aap.postmottak.flyt.flate.FlytGruppe']['stegGruppe'];

export type StegType = components['schemas']['no.nav.aap.postmottak.flyt.flate.FlytSteg']['stegType'];

export type LøsAvklaringsbehovPåBehandling =
  components['schemas']['no.nav.aap.postmottak.behandling.avklaringsbehov.flate.LøsAvklaringsbehovPåBehandling'];

export type JournalpostInfo = components['schemas']["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentInfoResponsDTO"];
export type Dokument = components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentDto"];

export type AvklarTemaGrunnlag =
  components['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto'];
export type FinnSakGrunnlag =
  components['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakGrunnlagDto'];
export type Saksinfo = components['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.SaksInfoDto'];
export type KategoriserGrunnlag =
    components['schemas']['no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto'];
export type StruktureringGrunnlag = components['schemas']["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto"]

export type Søknad = behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.faktagrunnlag.dokument.kontrakt.søknad.Søknad']
