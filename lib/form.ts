import {ValuePair} from "@navikt/aap-felles-react";

export enum JaEllerNei {
    Ja = 'ja',
    Nei = 'nei',
}

export const JaEllerNeiOptions: ValuePair[] = [
    { label: 'Ja', value: JaEllerNei.Ja },
    { label: 'Nei', value: JaEllerNei.Nei },
];

export enum Behovstype {
    AVKLAR_TEMA = '1339',
    FINN_SAK = '1362',
}
