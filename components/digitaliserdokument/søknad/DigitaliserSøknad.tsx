'use client'

import {FormField, useConfigForm} from "@navikt/aap-felles-react";
import {Behovstype, JaEllerNei, JaEllerNeiOptions, JaNeiAvbrutt, JaNeiVetIkke} from "../../../lib/form";
import {FormEvent, FormEventHandler} from "react";
import {VilkårsKort} from "../../vilkårskort/VilkårsKort";
import {Button} from "@navikt/ds-react";
import {useLøsBehovOgGåTilNesteSteg} from "../../../lib/hooks/LøsBehovOgGåTilNesteStegHook";
import { Barnetillegg} from "./Barnetillegg";
import {Søknad} from "../../../lib/types/types";

export type Barn = {
    fnr: string;
    fornavn: string;
    etternavn: string;
    relasjon: 'FORELDER' | 'FOSTERFORELDER';
}

export interface SøknadFormFields {
  søknadsDato: Date;
  yrkesSkade: JaEllerNei;
  erStudent: JaNeiAvbrutt;
  studentKommeTilbake: JaNeiVetIkke;
  oppgitteBarn: Barn[];
}
interface Props {
    behandlingsVersjon: number;
    journalpostId: string;
}

function mapTilSøknadKontrakt(data: SøknadFormFields) {
  return JSON.stringify({
    student: {
      erStudent: data.erStudent.toString(),
      kommeTilbake: data.studentKommeTilbake.toString(),
    },
    yrkesskade: data.yrkesSkade.toString(),
  } as Søknad);
}

export const DigitaliserSøknad = ({behandlingsVersjon, journalpostId}: Props) => {
    const {form, formFields} = useConfigForm<SøknadFormFields>({
        søknadsDato: {
            type: 'date',
            label: 'Søknadsdato'
        },
        yrkesSkade: {
            type: 'radio',
            label: 'Yrkesskade',
            options: JaEllerNeiOptions
        },
        erStudent: {
            type: 'radio',
            label: 'Er søkeren student?',
            options: [JaNeiAvbrutt.JA, JaNeiAvbrutt.NEI, JaNeiAvbrutt.AVBRUTT]
        },
        studentKommeTilbake: {
            type: 'radio',
            label: 'Skal studenten tilbake til studiet?',
            options: [JaNeiVetIkke.JA, JaNeiVetIkke.NEI, JaNeiVetIkke.VET_IKKE]
        },
        oppgitteBarn: {
            type: 'fieldArray',
            defaultValue: []
        }
    })
    const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');
    const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        form.handleSubmit((data) => {
            løsBehovOgGåTilNesteSteg({
                behandlingVersjon: behandlingsVersjon,
                behov: {
                    behovstype: Behovstype.DIGITALISER_DOKUMENT,
                    strukturertDokument: mapTilSøknadKontrakt(data)
                },
                //TODO: dette skal være referanse: string
                // @ts-ignore
                referanse: parseInt(journalpostId),
            })
        })(event);
    };
    const erStudent = form.watch('erStudent');

    return (
        <VilkårsKort heading={'Digitaliser søknad'}>
            <form onSubmit={onSubmit}>
                <VilkårsKort heading={'Personalia'}>
                    <FormField form={form} formField={formFields.søknadsDato}/>
                </VilkårsKort>
                <VilkårsKort heading={'Yrkesskade'}>
                    <FormField form={form} formField={formFields.yrkesSkade}/>
                </VilkårsKort>
                <Barnetillegg form={form} />
                <Button>Send</Button>
            </form>
        </VilkårsKort>
    )
}