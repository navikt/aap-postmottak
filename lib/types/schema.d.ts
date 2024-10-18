/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/config/definisjoner": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.DefinisjonDTO"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.DetaljertBehandlingDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/forbered": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.DetaljertBehandlingDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.JournalpostDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.JournalpostDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/flyt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.BehandlingFlytOgTilstandDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/resultat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.BehandlingResultatDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/sett-p\u00E5-vent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.SettP\u00E5VentRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.BehandlingResultatDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/vente-informasjon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.flyt.flate.Venteinformasjon"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/l\u00F8s-behov": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
                };
            };
            responses: {
                202: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/dokumenter/{journalpostId}/{dokumentinfoId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Journalpost-ID */
                    journalpostId: number;
                    /** @description Dokumentinfo-ID */
                    dokumentinfoId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/pdf": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/dokumenter/{journalpostId}/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Journalpost-ID */
                    journalpostId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentInfoResponsDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/avklarTemaVurdering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/endre-tema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.EndreTemaResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/kategorisering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/finnSak": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/strukturering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/feilende": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/planlagte-jobber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/rekjor/{jobbId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ID */
                    jobbId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/avbryt/{jobbId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ID */
                    jobbId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/rekjorAlleFeilede": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/sisteKj\u00F8rte": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test/hentAlleBehandlinger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.test.BehandlingsListe"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "no.nav.aap.komponenter.type.Periode": {
            /**
             * Format: date
             * @example 2024-10-18
             */
            fom: string;
            /**
             * Format: date
             * @example 2024-10-18
             */
            tom: string;
        };
        "no.nav.aap.motor.api.JobbInfoDto": {
            /** Format: int32 */
            "antallFeilendeFors\u00F8k": number;
            beskrivelse: string;
            feilmelding?: string | null;
            /** Format: int64 */
            id: number;
            /** @description Key type: kotlin.String */
            metadata: {
                [key: string]: string;
            };
            navn: string;
            /**
             * Format: date-time
             * @example 2024-10-18T11:44:10.505105912
             */
            "planlagtKj\u00F8retidspunkt": string;
            /** @enum {string} */
            status: "KLAR" | "PLUKKET" | "FERDIG" | "FEILET" | "AVBRUTT";
            type: string;
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling": {
            /** Format: int64 */
            behandlingVersjon: number;
            behov: components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning"];
            ingenEndringIGruppe?: boolean | null;
            referanse: components["schemas"]["no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId"];
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklarSaksnummerL\u00F8sning": {
            behovstype: string;
            "f\u00F8rP\u00E5GenerellSak": boolean;
            opprettNySak: boolean;
            saksnummer?: string | null;
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning": {
            behovstype: string;
            skalTilAap: boolean;
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning": components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklarSaksnummerL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.SattP\u00E5VentL\u00F8sning"];
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning": {
            behovstype: string;
            strukturertDokument?: string | null;
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning": {
            behovstype: string;
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
        };
        "no.nav.aap.postmottak.behandling.avklaringsbehov.l\u00F8sning.SattP\u00E5VentL\u00F8sning": {
            behovstype: string;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto": {
            dokumenter: string[];
            vurdering?: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaVurderingDto"];
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaVurderingDto": {
            skalTilAap: boolean;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.EndreTemaResponse": {
            redirectUrl: string;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakGrunnlagDto": {
            saksinfo: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.SaksInfoDto"][];
            vurdering?: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakVurderingDto"];
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.AvklarSakVurderingDto": {
            "f\u00F8rP\u00E5GenerellSak": boolean;
            opprettNySak: boolean;
            saksnummer?: string | null;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.finnsak.flate.SaksInfoDto": {
            periode: components["schemas"]["no.nav.aap.komponenter.type.Periode"];
            saksnummer: string;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentDto": {
            dokumentInfoId: string;
            tittel?: string | null;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentIdent": {
            ident?: string | null;
            navn?: string | null;
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentInfoResponsDTO": {
            dokumenter: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentDto"][];
            "s\u00F8ker"?: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.flate.DokumentIdent"];
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto": {
            dokumenter: number[];
            vurdering?: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringVurderingDto"];
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringVurderingDto": {
            /** @enum {string} */
            brevkode: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto": {
            dokumenter: number[];
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
            vurdering?: components["schemas"]["no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringVurderingDto"];
        };
        "no.nav.aap.postmottak.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringVurderingDto": {
            strukturertDokumentJson: string;
        };
        "no.nav.aap.postmottak.flyt.flate.AvklaringsbehovDTO": {
            definisjon: components["schemas"]["no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon"];
            endringer: components["schemas"]["no.nav.aap.postmottak.flyt.flate.EndringDTO"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.postmottak.flyt.flate.BehandlingFlytOgTilstandDto": {
            /** @enum {string} */
            aktivGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "AVKLAR_SAK" | "ENDRE_TEMA";
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA";
            /** Format: int64 */
            behandlingVersjon: number;
            flyt: components["schemas"]["no.nav.aap.postmottak.flyt.flate.FlytGruppe"][];
            prosessering: components["schemas"]["no.nav.aap.postmottak.flyt.flate.visning.Prosessering"];
            visning: components["schemas"]["no.nav.aap.postmottak.flyt.flate.visning.Visning"];
        };
        "no.nav.aap.postmottak.flyt.flate.BehandlingResultatDto": Record<string, never>;
        "no.nav.aap.postmottak.flyt.flate.DefinisjonDTO": {
            /** @enum {string} */
            behovType: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            /** @enum {string} */
            "l\u00F8sesISteg": "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA";
            navn: string;
            type: string;
        };
        "no.nav.aap.postmottak.flyt.flate.DetaljertBehandlingDTO": {
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA";
            avklaringsbehov: components["schemas"]["no.nav.aap.postmottak.flyt.flate.AvklaringsbehovDTO"][];
            /**
             * Format: date-time
             * @example 2024-10-18T11:44:10.505105912
             */
            opprettet: string;
            referanse: components["schemas"]["no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId"];
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "IVERKSETTES" | "AVSLUTTET";
            type: string;
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.postmottak.flyt.flate.EndringDTO": {
            begrunnelse?: string | null;
            endretAv: string;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2024-10-18T11:44:10.505105912
             */
            tidsstempel: string;
        };
        "no.nav.aap.postmottak.flyt.flate.FlytGruppe": {
            "erFullf\u00F8rt": boolean;
            skalVises: boolean;
            steg: components["schemas"]["no.nav.aap.postmottak.flyt.flate.FlytSteg"][];
            /** @enum {string} */
            stegGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "AVKLAR_SAK" | "ENDRE_TEMA";
        };
        "no.nav.aap.postmottak.flyt.flate.FlytSteg": {
            avklaringsbehov: components["schemas"]["no.nav.aap.postmottak.flyt.flate.AvklaringsbehovDTO"][];
            /** @enum {string} */
            stegType: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA";
        };
        "no.nav.aap.postmottak.flyt.flate.JournalpostDto": {
            /** Format: int64 */
            referanse: number;
        };
        "no.nav.aap.postmottak.flyt.flate.SettP\u00E5VentRequest": {
            begrunnelse: string;
            /** Format: int64 */
            behandlingVersjon: number;
            /**
             * Format: date
             * @example 2024-10-18
             */
            frist?: string | null;
            /** @enum {string} */
            grunn: "VENTER_PÅ_OPPLYSNINGER" | "VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER" | "VENTER_PÅ_MEDISINSKE_OPPLYSNINGER" | "VENTER_PÅ_VURDERING_AV_ROL" | "VENTER_PÅ_SVAR_FRA_BRUKER";
            /** Format: int64 */
            referanse: number;
        };
        "no.nav.aap.postmottak.flyt.flate.Venteinformasjon": {
            begrunnelse: string;
            /**
             * Format: date
             * @example 2024-10-18
             */
            frist: string;
            /** @enum {string} */
            grunn: "VENTER_PÅ_OPPLYSNINGER" | "VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER" | "VENTER_PÅ_MEDISINSKE_OPPLYSNINGER" | "VENTER_PÅ_VURDERING_AV_ROL" | "VENTER_PÅ_SVAR_FRA_BRUKER";
        };
        "no.nav.aap.postmottak.flyt.flate.visning.Prosessering": {
            /** @enum {string} */
            status: "JOBBER" | "FEILET" | "FERDIG";
            ventendeOppgaver: components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
        };
        "no.nav.aap.postmottak.flyt.flate.visning.Visning": {
            visVentekort: boolean;
        };
        "no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon": {
            kode: string;
            kreverToTrinn: boolean;
            /** @enum {string} */
            "l\u00F8sesISteg": "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA";
            /** @enum {string} */
            type: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            name: string;
        };
        "no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId": {
            /** Format: int64 */
            referanse: number;
        };
        "no.nav.aap.postmottak.test.BehandlingsListe": {
            id: string;
            /**
             * Format: date-time
             * @example 2024-10-18T11:44:10.505105912
             */
            opprettet: string;
            status: string;
            steg: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
