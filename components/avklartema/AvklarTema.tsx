'use client'

import {VilkårsKort} from "../vilkårskort/VilkårsKort";
import {FormField, useConfigForm} from "@navikt/aap-felles-react";
import {Behovstype, JaEllerNei, JaEllerNeiOptions} from "../../lib/form";
import {FormEvent, FormEventHandler} from "react";
import {useLøsBehovOgGåTilNesteSteg} from "../../lib/hooks/LøsBehovOgGåTilNesteStegHook";
import {Button} from "@navikt/ds-react";

interface Props {
    behandlingsVersjon: number;
    id: string;
}
interface FormFields {
    erTemaAAP: string;
}
export const AvklarTema = ({behandlingsVersjon, id}: Props) => {
    const { formFields, form } = useConfigForm<FormFields>({
        erTemaAAP: {
            type: 'radio',
            label: 'Er dokumentet riktig journalført på tema AAP?',
            rules: { required: 'Du må svare på om dokumentet har riktig tema'},
            options: JaEllerNeiOptions
        }
    });
    const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('AVKLAR_TEMA');
    const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
       form.handleSubmit(
           (data) => {
               løsBehovOgGåTilNesteSteg({
               behandlingVersjon: behandlingsVersjon,
               behov: {
                   behovstype: Behovstype.AVKLAR_TEMA,
                   skalTilAap: data.erTemaAAP === JaEllerNei.Ja
               },
               //TODO: dette skal være referanse: string
               // @ts-ignore
               referanse: parseInt(id)

           })}
       )(event);
    }
    return (
       <VilkårsKort heading={'Bekreft tema'}>
           <form
              onSubmit={onSubmit}
           >
               <FormField form={form} formField={formFields.erTemaAAP} />
               <Button>Send</Button>
           </form>
       </VilkårsKort>
    )
}