'use client';

import { VilkårsKort } from 'components/vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype, JaEllerNei, JaEllerNeiOptions } from 'lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from 'lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { AvklarTemaGrunnlag } from 'lib/types/types';
import { getJaNeiEllerUndefined } from 'lib/form';
import { ServerSentEventStatusAlert } from 'components/serversenteventstatusalert/ServerSentEventStatusAlert';
import { endreTema, løsBehov } from 'lib/clientApi';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: AvklarTemaGrunnlag;
  readOnly: boolean;
}

interface FormFields {
  erTemaAAP: string;
}

export const AvklarTema = ({behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly}: Props) => {
  const {formFields, form} = useConfigForm<FormFields>(
    {
      erTemaAAP: {
        type: 'radio',
        label: 'Er dokumentet riktig journalført på tema AAP?',
        rules: {required: 'Du må svare på om dokumentet har riktig tema'},
        defaultValue: getJaNeiEllerUndefined(grunnlag.vurdering?.skalTilAap),
        options: JaEllerNeiOptions,
      },
    },
    {readOnly}
  );
  const {løsBehovOgGåTilNesteSteg, status} = useLøsBehovOgGåTilNesteSteg('AVKLAR_TEMA');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      if (data.erTemaAAP === JaEllerNei.Ja) {
        løsBehovOgGåTilNesteSteg({
          behandlingVersjon: behandlingsVersjon,
          behov: {
            behovstype: Behovstype.AVKLAR_TEMA,
            skalTilAap: data.erTemaAAP === JaEllerNei.Ja,
          },
          // @ts-ignore
          referanse: behandlingsreferanse,
        });
      } else {
        løsBehov({
          behandlingVersjon: behandlingsVersjon,
          behov: {
            behovstype: Behovstype.AVKLAR_TEMA,
            skalTilAap: data.erTemaAAP === JaEllerNei.Ja,
          },
          // @ts-ignore
          referanse: behandlingsreferanse,
        }).then(() => endreTema(behandlingsreferanse).then((redirectUrl) => redirectUrl && window.location.replace(redirectUrl)));
      }
    })(event);
  };

  return (
    <VilkårsKort heading={'Avklar tema'}>
      <form onSubmit={onSubmit}>
        <ServerSentEventStatusAlert status={status}/>
        <FormField form={form} formField={formFields.erTemaAAP}/>
        <Nesteknapp>Bekreft</Nesteknapp>
      </form>
    </VilkårsKort>
  );
};
