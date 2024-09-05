'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype, JaEllerNei, JaEllerNeiOptions } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import { AvklarTemaGrunnlag } from 'lib/types/types';
import { getJaNeiEllerUndefined } from 'lib/utils/form';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
  grunnlag: AvklarTemaGrunnlag;
}
interface FormFields {
  erTemaAAP: string;
}
export const AvklarTema = ({ behandlingsVersjon, journalpostId, grunnlag }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    erTemaAAP: {
      type: 'radio',
      label: 'Er dokumentet riktig journalført på tema AAP?',
      rules: { required: 'Du må svare på om dokumentet har riktig tema' },
      defaultValue: getJaNeiEllerUndefined(grunnlag.vurdering),
      options: JaEllerNeiOptions,
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('AVKLAR_TEMA');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.AVKLAR_TEMA,
          skalTilAap: data.erTemaAAP === JaEllerNei.Ja,
        },
        //TODO: dette skal være referanse: string
        // @ts-ignore
        referanse: parseInt(journalpostId),
      });
    })(event);
  };
  return (
    <VilkårsKort heading={'Avklar tema'}>
      <form onSubmit={onSubmit}>
        <FormField form={form} formField={formFields.erTemaAAP} />
        <Button>Send</Button>
      </form>
    </VilkårsKort>
  );
};
