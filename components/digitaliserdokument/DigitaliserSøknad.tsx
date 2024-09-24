'use client'

import {FormField, useConfigForm} from "@navikt/aap-felles-react";
import {Behovstype, JaEllerNei, JaEllerNeiOptions, JaNeiAvbrutt, JaNeiVetIkke} from "../../lib/form";
import {FormEvent, FormEventHandler} from "react";
import {VilkårsKort} from "../vilkårskort/VilkårsKort";
import {Button} from "@navikt/ds-react";
import {useLøsBehovOgGåTilNesteSteg} from "../../lib/hooks/LøsBehovOgGåTilNesteStegHook";
import { Søknad } from '../../lib/types/types';

interface FormFields {
  søknadsDato: Date;
  yrkesSkade: JaEllerNei;
  erStudent: JaNeiAvbrutt;
  studentKommeTilbake: JaNeiVetIkke;
}
interface Props {
    behandlingsVersjon: number;
    journalpostId: string;
}

function mapTilSøknadKontrakt(data: FormFields) {
  return JSON.stringify({
    student: {
      erStudent: data.erStudent.toString(),
      kommeTilbake: data.studentKommeTilbake.toString(),
    },
    yrkesskade: data.yrkesSkade.toString(),
  } as Søknad);
}

export const DigitaliserSøknad = ({behandlingsVersjon, journalpostId}: Props) => {

    const {form, formFields} = useConfigForm<FormFields>({
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
                <FormField form={form} formField={formFields.søknadsDato}/>
                <FormField form={form} formField={formFields.yrkesSkade}/>
                <FormField form={form} formField={formFields.erStudent}/>
                {erStudent === JaNeiAvbrutt.JA && <FormField form={form} formField={formFields.studentKommeTilbake}/>}
                <Button>Send</Button>
            </form>
        </VilkårsKort>
    )
}