'use client'

import {KelvinAppHeader} from "@navikt/aap-felles-react";
import {BrukerInformasjon} from "@navikt/aap-felles-utils";

interface Props {
    brukerInformasjon: BrukerInformasjon
}
export const AppHeader = ({brukerInformasjon}: Props) => {
    return <KelvinAppHeader brukerInformasjon={brukerInformasjon} />
}