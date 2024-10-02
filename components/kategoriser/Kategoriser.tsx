'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import { KategoriserGrunnlag } from '../../lib/types/types';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
  grunnlag: KategoriserGrunnlag;
}
interface FormFields {
  kategori: string;
}
export const Kategoriser = ({ behandlingsVersjon, journalpostId, grunnlag }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    kategori: {
      type: 'combobox',
      label: 'Velg kategori for dokument',
      rules: { required: 'Du må velge kategori' },
      options: [
        { label: 'Søknad', value: 'SØKNAD' },
        { label: 'Pliktkort', value: 'PLIKTKORT' },
      ],
      defaultValue: grunnlag.vurdering?.brevkode,
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('KATEGORISER_DOKUMENT');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.KATEGORISER_DOKUMENT,
          // TODO:  kategori må endres. er ikke det samme som brevkode
          // @ts-ignore
          dokumentkategori: data.kategori,
        },
        //TODO: dette skal være referanse: string
        // @ts-ignore
        referanse: parseInt(journalpostId),
      });
    })(event);
  };
  return (
    <VilkårsKort heading={'Kategoriser'}>
      <form onSubmit={onSubmit}>
        <FormField form={form} formField={formFields.kategori} />
        <Button>Send</Button>
      </form>
    </VilkårsKort>
  );
};
