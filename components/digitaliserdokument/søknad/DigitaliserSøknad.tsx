'use client';

import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import {
  Behovstype,
  JaEllerNei,
  JaEllerNeiOptions,
  JaNeiAvbrutt,
  JaNeiVetIkke,
  stringToJaEllerNei,
  stringToJaNeiAvbrutt,
  stringToJaNeiVetikke,
} from '../../../lib/form';
import { FormEvent, forwardRef, useImperativeHandle } from 'react';
import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { useLøsBehovOgGåTilNesteSteg } from '../../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Barnetillegg } from './Barnetillegg';
import { StruktureringGrunnlag, Søknad } from '../../../lib/types/types';
import { Student } from './Student';
import { ServerSentEventStatusAlert } from '../../serversenteventstatusalert/ServerSentEventStatusAlert';
import { setDokumentJson, Submittable } from '../DigitaliserDokument.tsx';

export type Barn = {
  fnr?: string;
  fornavn?: string;
  etternavn?: string;
  relasjon?: 'FORELDER' | 'FOSTERFORELDER';
};

export interface SøknadFormFields {
  søknadsDato: Date;
  yrkesSkade: JaEllerNei;
  erStudent: JaNeiAvbrutt;
  studentKommeTilbake: JaNeiVetIkke;
  oppgitteBarn: Barn[];
}

interface Props {
  grunnlag: StruktureringGrunnlag;
  readOnly: boolean;
}

function mapTilSøknadKontrakt(data: SøknadFormFields) {
  return JSON.stringify({
    student: {
      erStudent: data.erStudent,
      kommeTilbake: data.studentKommeTilbake || null,
    },
    yrkesskade: data.yrkesSkade,
    oppgitteBarn: data.oppgitteBarn?.length
      ? { identer: data.oppgitteBarn.map((barn) => ({ identifikator: barn.fnr })) }
      : null,
  } as Søknad);
}

export const DigitaliserSøknad = forwardRef<Submittable, Props>(
  ({ grunnlag, readOnly }: Props, ref) => {
    const søknadGrunnlag = grunnlag.vurdering?.strukturertDokumentJson
      ? JSON.parse(grunnlag.vurdering?.strukturertDokumentJson)
      : {};
    const { form, formFields } = useConfigForm<SøknadFormFields>(
      {
        søknadsDato: {
          type: 'date',
          label: 'Søknadsdato',
        },
        yrkesSkade: {
          type: 'radio',
          label: 'Yrkesskade',
          options: JaEllerNeiOptions,
          defaultValue: søknadGrunnlag.yrkesskade ? stringToJaEllerNei(søknadGrunnlag.yrkesskade) : undefined,
        },
        erStudent: {
          type: 'radio',
          label: 'Er søkeren student?',
          options: [JaNeiAvbrutt.JA, JaNeiAvbrutt.NEI, JaNeiAvbrutt.AVBRUTT],
          defaultValue: søknadGrunnlag.student?.erStudent
            ? stringToJaNeiAvbrutt(søknadGrunnlag.student.erStudent)
            : undefined,
        },
        studentKommeTilbake: {
          type: 'radio',
          label: 'Skal studenten tilbake til studiet?',
          options: [JaNeiVetIkke.JA, JaNeiVetIkke.NEI, JaNeiVetIkke.VET_IKKE],
          defaultValue: søknadGrunnlag.student?.kommeTilbake
            ? stringToJaNeiVetikke(søknadGrunnlag.student.kommeTilbake)
            : undefined,
        },
        oppgitteBarn: {
          type: 'fieldArray',
          defaultValue:
            søknadGrunnlag.oppgitteBarn?.identer?.map((barn: { identifikator: string }) => ({
              fnr: barn.identifikator,
            })) || [],
        },
      },
      { readOnly }
    );

    useImperativeHandle(ref, () => ({
      submit(setDokumentJson: setDokumentJson): void {
        console.log('submithandle called from digitaliser søknad');
        form.handleSubmit((data) => {
          console.log("YOLO");
          setDokumentJson(mapTilSøknadKontrakt(data));
        })();
      },
    }));

    return (
      <VilkårsKort heading={'Digitaliser søknad'}>
        <form>
          <VilkårsKort heading={'Personalia'}>
            <FormField form={form} formField={formFields.søknadsDato} />
          </VilkårsKort>
          <VilkårsKort heading={'Yrkesskade'}>
            <FormField form={form} formField={formFields.yrkesSkade} />
          </VilkårsKort>
          <Barnetillegg form={form} readOnly={readOnly} />
          <Student form={form} formFields={formFields} />
        </form>
      </VilkårsKort>
    );
  }
);

DigitaliserSøknad.displayName = 'DigitaliserSøknad';