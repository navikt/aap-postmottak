'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import { KategoriserGrunnlag } from '../../lib/types/types';
import { ServerSentEventStatusAlert } from '../serversenteventstatusalert/ServerSentEventStatusAlert';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: KategoriserGrunnlag;
}
interface FormFields {
  kategori: string;
}
export const Kategoriser = ({ behandlingsVersjon, behandlingsreferanse, grunnlag }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    kategori: {
      type: 'combobox',
      label: 'Velg kategori for dokument',
      rules: { required: 'Du må velge kategori' },
      options: [
        { label: 'Søknad', value: 'SØKNAD' },
        { label: 'Meldekort', value: 'PLIKTKORT' },
      ],
      defaultValue: grunnlag.vurdering?.brevkode,
    },
  });
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('KATEGORISER_DOKUMENT');
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
        // @ts-ignore
        referanse: behandlingsreferanse,
      });
    })(event);
  };
  return (
    <VilkårsKort heading={'Kategoriser'}>
      <form onSubmit={onSubmit}>
        <ServerSentEventStatusAlert status={status} />
        <FormField form={form} formField={formFields.kategori} />
        <Button>Send</Button>
      </form>
    </VilkårsKort>
  );
};
