import { Submittable } from '../DigitaliserDokument.tsx';
import { AnnetRelevantDokument, DigitaliseringsGrunnlag, ÅrsakTilBehandling } from '../../../lib/types/types';
import { FormField, useConfigForm, ValuePair } from '@navikt/aap-felles-react';
import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { Nesteknapp } from '../../nesteknapp/Nesteknapp';
import { VStack } from '@navikt/ds-react';

export interface AnnetRelevantDokumentFormFields {
  årsak: String;
}

interface Props extends Submittable {
  grunnlag: DigitaliseringsGrunnlag;
  readOnly: boolean;
}

function mapTilAnnetRelevantDokumentKontrakt(data: AnnetRelevantDokumentFormFields) {
  return JSON.stringify({
    årsakTilBehandling: data.årsak,
  } as AnnetRelevantDokument);
}

export const DigitaliserAnnetRelevantDokument = ({ grunnlag, readOnly, submit }: Props) => {
  const annetRelevantDokumentGrunnlag = grunnlag.vurdering?.strukturertDokumentJson
    ? JSON.parse(grunnlag.vurdering?.strukturertDokumentJson)
    : {};

  // TODO: Avklar hvilke årsaker som saksbehandler skal kunne sette
  const årsakOptions: ValuePair<ÅrsakTilBehandling>[] = [
    { label: 'Mottatt søknad', value: 'SØKNAD' },
    { label: 'Mottatt aktivitetsmelding', value: 'AKTIVITETSMELDING' },
    { label: 'Mottatt meldekort', value: 'MELDEKORT' },
    { label: 'Mottatt legeerklæring', value: 'LEGEERKLÆRING' },
    { label: 'Mottatt dialogmelding', value: 'DIALOGMELDING' },
    { label: 'Revurder medlemskap', value: 'REVURDER_MEDLEMSKAP' },
    { label: 'Revurder yrkesskade', value: 'REVURDER_YRKESSKADE' },
    { label: 'Revurder beregning', value: 'REVURDER_BEREGNING' },
  ];

  const { form, formFields } = useConfigForm<AnnetRelevantDokumentFormFields>(
    {
      årsak: {
        type: 'select',
        label: 'Velg en årsak',
        options: [{ label: '', value: '' }, ...årsakOptions],
        defaultValue: årsakOptions.find((option) => option.value === annetRelevantDokumentGrunnlag.årsakTilBehandling)
          ?.value,
        rules: { required: 'Du må velge en årsak' },
      },
    },
    { readOnly }
  );

  return (
    <VilkårsKort heading={'Årsak til behandling'}>
      <form
        onSubmit={form.handleSubmit((data) =>
          submit('ANNET_RELEVANT_DOKUMENT', mapTilAnnetRelevantDokumentKontrakt(data), null)
        )}
      >
        <VStack gap={'6'}>
          <FormField form={form} formField={formFields.årsak} />
          <Nesteknapp>Send Inn</Nesteknapp>
        </VStack>
      </form>
    </VilkårsKort>
  );
};
