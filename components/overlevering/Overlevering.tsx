'use client';

import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype, getJaNeiEllerUndefined, JaEllerNei, JaEllerNeiOptions } from '../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { OverleveringGrunnlag } from '../../lib/types/types';
import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { ServerSentEventStatusAlert } from '../serversenteventstatusalert/ServerSentEventStatusAlert';
import { Nesteknapp } from '../nesteknapp/Nesteknapp';
import { FormEvent, FormEventHandler } from 'react';
import { VStack } from '@navikt/ds-react';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: OverleveringGrunnlag;
  readOnly: boolean;
}

interface FormFields {
  skalOverleveres: JaEllerNei;
}

export const Overlevering = ({ behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>(
    {
      skalOverleveres: {
        type: 'radio',
        label: 'Skal dokumentet sendes til fagsystem?',
        description: 'Hvis dokumentet sendes til fagsystemet kan det føre til en revurdering',
        rules: { required: 'Du må svare på om dokumentet skal overleveres til fagsystem' },
        defaultValue: getJaNeiEllerUndefined(grunnlag.vurdering?.skalOverleveres),
        options: JaEllerNeiOptions,
      },
    },
    { readOnly }
  );
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('OVERLEVER_TIL_FAGSYSTEM');

  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.AVKLAR_OVERLEVERING,
          // @ts-ignore
          skalOverleveres: data.skalOverleveres === JaEllerNei.Ja,
        },
        // @ts-ignore
        referanse: behandlingsreferanse,
      });
    })(event);
  };

  return (
    <VStack padding={'4'} gap={'4'}>
      <VilkårsKort heading={'Send dokument'}>
        <form onSubmit={onSubmit}>
          <VStack gap={'6'}>
            <ServerSentEventStatusAlert status={status} />
            <FormField form={form} formField={formFields.skalOverleveres} />
            <Nesteknapp disabled={readOnly}>Send inn</Nesteknapp>
          </VStack>
        </form>
      </VilkårsKort>
    </VStack>
  );
};
