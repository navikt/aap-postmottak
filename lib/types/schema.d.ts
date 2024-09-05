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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.DefinisjonDTO"][];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.DetaljertBehandlingDTO"];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.DetaljertBehandlingDTO"];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.BehandlingFlytOgTilstandDto"];
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
                    referanse: string;
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.BehandlingResultatDto"];
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
                    "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
                };
            };
            responses: {
                202: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
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
    "/api/dokumenter/{journalpostId}/{dokumentinfoId": {
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto"];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto"];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto"];
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
                        "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.BehandlingsListe"][];
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
        "no.nav.aap.behandlingsflyt.BehandlingsListe": {
            id: string;
            status: string;
        };
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.Definisjon": {
            kode: string;
            kreverToTrinn: boolean;
            /** @enum {string} */
            "l\u00F8sesISteg": "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "FINN_SAK";
            /** @enum {string} */
            type: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG";
            name: string;
        };
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling": {
            /** Format: int64 */
            behandlingVersjon: number;
            behov: components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning"];
            ingenEndringIGruppe?: boolean | null;
            referanse: components["schemas"]["no.nav.aap.behandlingsflyt.sakogbehandling.behandling.dokumenter.JournalpostId"];
        };
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning": {
            behovstype: string;
            skalTilAap: boolean;
        };
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning": components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning"] | components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning"] | components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning"];
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning": {
            behovstype: string;
            strukturertDokument?: string | null;
        };
        "no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.l\u00F8sning.KategoriserDokumentL\u00F8sning": {
            behovstype: string;
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaGrunnlagDto": {
            dokumenter: number[];
            vurdering?: components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaVurderingDto"];
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.avklarteam.flate.AvklarTemaVurderingDto": {
            skalTilAap: boolean;
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringGrunnlagDto": {
            dokumenter: number[];
            vurdering?: components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringVurderingDto"];
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.kategorisering.flate.KategoriseringVurderingDto": {
            /** @enum {string} */
            brevkode: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringGrunnlagDto": {
            dokumenter: number[];
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "UKJENT";
            vurdering?: components["schemas"]["no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringVurderingDto"];
        };
        "no.nav.aap.behandlingsflyt.faktagrunnlag.saksbehandler.dokument.strukturering.flate.StruktureringVurderingDto": {
            strukturertDokumentJson: string;
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.AvklaringsbehovDTO": {
            definisjon: components["schemas"]["no.nav.aap.behandlingsflyt.behandling.avklaringsbehov.Definisjon"];
            endringer: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.EndringDTO"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.BehandlingFlytOgTilstandDto": {
            /** @enum {string} */
            aktivGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "FINN_SAK";
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "FINN_SAK";
            /** Format: int64 */
            behandlingVersjon: number;
            flyt: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.FlytGruppe"][];
            prosessering: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.visning.Prosessering"];
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.BehandlingResultatDto": Record<string, never>;
        "no.nav.aap.behandlingsflyt.flyt.flate.DefinisjonDTO": {
            /** @enum {string} */
            behovType: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG";
            /** @enum {string} */
            "l\u00F8sesISteg": "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "FINN_SAK";
            navn: string;
            type: string;
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.DetaljertBehandlingDTO": {
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "FINN_SAK";
            avklaringsbehov: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.AvklaringsbehovDTO"][];
            /**
             * Format: date-time
             * @example 2024-09-05T10:35:47.886037
             */
            opprettet: string;
            referanse: components["schemas"]["no.nav.aap.behandlingsflyt.sakogbehandling.behandling.dokumenter.JournalpostId"];
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "AVSLUTTET";
            type: string;
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.EndringDTO": {
            begrunnelse?: string | null;
            endretAv: string;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2024-09-05T10:35:47.886037
             */
            tidsstempel: string;
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.FlytGruppe": {
            "erFullf\u00F8rt": boolean;
            skalVises: boolean;
            steg: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.FlytSteg"][];
            /** @enum {string} */
            stegGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "FINN_SAK";
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.FlytSteg": {
            avklaringsbehov: components["schemas"]["no.nav.aap.behandlingsflyt.flyt.flate.AvklaringsbehovDTO"][];
            /** @enum {string} */
            stegType: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "ENDERLIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "FINN_SAK";
        };
        "no.nav.aap.behandlingsflyt.flyt.flate.visning.Prosessering": {
            /** @enum {string} */
            status: "JOBBER" | "FEILET" | "FERDIG";
            ventendeOppgaver: components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
        };
        "no.nav.aap.behandlingsflyt.sakogbehandling.behandling.dokumenter.JournalpostId": {
            /** Format: int64 */
            referanse: number;
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
             * @example 2024-09-05T10:35:47.886037
             */
            "planlagtKj\u00F8retidspunkt": string;
            /** @enum {string} */
            status: "KLAR" | "PLUKKET" | "FERDIG" | "FEILET";
            type: string;
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
