'use client';

import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import {
  JaNeiAvbruttIkkeOppgitt,
  JaNeiIkkeOppgitt,
  JaNeiVetIkke,
  stringToJaNeiAvbruttIkkeOppgitt,
  stringToJaNeiIkkeOppgitt,
  stringToJaNeiVetikke,
} from '../../../lib/form';
import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { Barnetillegg } from './Barnetillegg';
import { DigitaliseringsGrunnlag, Søknad } from '../../../lib/types/types';
import { Student } from './Student';
import { Submittable } from '../DigitaliserDokument.tsx';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';
import { VStack } from '@navikt/ds-react';

export type Barn = {
  fnr?: string;
  fornavn?: string;
  etternavn?: string;
  relasjon?: 'FORELDER' | 'FOSTERFORELDER';
};

export interface SøknadFormFields {
  søknadsDato: Date;
  yrkesSkade: JaNeiIkkeOppgitt;
  erStudent: JaNeiAvbruttIkkeOppgitt;
  studentKommeTilbake: JaNeiVetIkke;
  oppgitteBarn: Barn[];
}

interface Props extends Submittable {
  grunnlag: DigitaliseringsGrunnlag;
  readOnly: boolean;
}

function mapTilSøknadKontrakt(data: SøknadFormFields) {
  const søknad: Søknad = {
    student: data.erStudent === JaNeiAvbruttIkkeOppgitt.IKKE_OPPGITT ? undefined : {
      erStudent: data.erStudent,
      kommeTilbake: data.studentKommeTilbake || null,
    },
    yrkesskade: data.yrkesSkade,
    oppgitteBarn: data.oppgitteBarn?.length
      ? { identer: data.oppgitteBarn.map((barn) => ({ identifikator: barn.fnr! })) }
      : undefined,
  };
  return JSON.stringify(søknad);
}

export const DigitaliserSøknad = ({ grunnlag, readOnly, submit }: Props) => {
  const søknadGrunnlag = grunnlag.vurdering?.strukturertDokumentJson
    ? JSON.parse(grunnlag.vurdering?.strukturertDokumentJson)
    : {};
  const søknadsdato = grunnlag.vurdering?.søknadsdato;
  const { form, formFields } = useConfigForm<SøknadFormFields>(
    {
      søknadsDato: {
        type: 'date',
        label: 'Søknadsdato',
        defaultValue: søknadsdato ? new Date(søknadsdato) : undefined,
        rules: { required: 'Du må oppgi søknadsdato' },
      },
      yrkesSkade: {
        type: 'radio',
        label: 'Yrkesskade',
        options: [JaNeiIkkeOppgitt.JA, JaNeiIkkeOppgitt.NEI, JaNeiIkkeOppgitt.IKKE_OPPGITT],
        defaultValue: søknadGrunnlag.yrkesskade ? stringToJaNeiIkkeOppgitt(søknadGrunnlag.yrkesskade) : undefined,
        rules: { required: 'Du må velge om søker har oppgitt en yrkesskade' },
      },
      erStudent: {
        type: 'radio',
        label: 'Er søkeren student?',
        options: [
          JaNeiAvbruttIkkeOppgitt.JA,
          JaNeiAvbruttIkkeOppgitt.NEI,
          JaNeiAvbruttIkkeOppgitt.AVBRUTT,
          JaNeiAvbruttIkkeOppgitt.IKKE_OPPGITT,
        ],
        defaultValue: søknadGrunnlag.student?.erStudent
          ? stringToJaNeiAvbruttIkkeOppgitt(søknadGrunnlag.student.erStudent)
          : undefined,
        rules: { required: 'Du må velge et alternativ om søkers student-status' },
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

  return (
    <VilkårsKort heading={'Digitaliser søknad'}>
      <form onSubmit={form.handleSubmit((data) => submit('SØKNAD', mapTilSøknadKontrakt(data), data.søknadsDato))}>
        <VStack gap={'6'}>
          <VStack gap={'3'}>
            {grunnlag.erPapir && <p>Papirsøknader skal justeres for postgang</p>}
            <FormField form={form} formField={formFields.søknadsDato} />
          </VStack>
          <div>
            <FormField form={form} formField={formFields.yrkesSkade} />
          </div>
          <Barnetillegg form={form} readOnly={readOnly} />
          <Student form={form} formFields={formFields} />
          <Nesteknapp>Neste</Nesteknapp>
        </VStack>
      </form>
    </VilkårsKort>
  );
};
