'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype, JaEllerNei, JaEllerNeiOptions } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button, HStack } from '@navikt/ds-react';
import { AvklarTemaGrunnlag } from 'lib/types/types';
import { getJaNeiEllerUndefined } from 'lib/form';
import { endreTema } from '../../lib/clientApi';
import { useRouter } from 'next/navigation';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
  grunnlag: AvklarTemaGrunnlag;
}

interface FormFields {
  erTemaAAP: string;
}

export const AvklarTema = ({ behandlingsVersjon, journalpostId, grunnlag }: Props) => {
  const router = useRouter();
  const { formFields, form } = useConfigForm<FormFields>({
    erTemaAAP: {
      type: 'radio',
      label: 'Er dokumentet riktig journalført på tema AAP?',
      rules: { required: 'Du må svare på om dokumentet har riktig tema' },
      defaultValue: getJaNeiEllerUndefined(grunnlag.vurdering?.skalTilAap),
      options: JaEllerNeiOptions,
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('AVKLAR_TEMA');
  const onJa = () => {
    løsBehovOgGåTilNesteSteg({
      behandlingVersjon: behandlingsVersjon,
      behov: {
        behovstype: Behovstype.AVKLAR_TEMA,
        skalTilAap: true,
      },
      //TODO: dette skal være referanse: string
      // @ts-ignore
      referanse: parseInt(journalpostId),
    });
  };

  return (
    <VilkårsKort heading={'Avklar tema'}>
      <p>Er dokumentet riktig journalført på tema AAP?</p>
      <HStack gap={'1'} padding={'1'}>
        <Button onClick={onJa}>Ja!</Button>
        <Button
          onClick={() => {
            endreTema(journalpostId).then((redirectUrl) => redirectUrl && router.replace(redirectUrl));
          }}
        >
          Nope
        </Button>
      </HStack>
    </VilkårsKort>
  );
};
