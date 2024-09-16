import {ValuePair} from "@navikt/aap-felles-react";

export enum JaEllerNei {
    Ja = 'ja',
    Nei = 'nei',
}

export enum JaNeiVetIkke {
    JA = 'Ja',
    NEI = 'Nei',
    VET_IKKE = 'Vet ikke'
}
export enum JaNeiAvbrutt {
    JA = 'Ja',
    NEI = 'Nei',
    AVBRUTT = 'Avbrutt'
}

export const JaEllerNeiOptions: ValuePair[] = [
    { label: 'Ja', value: JaEllerNei.Ja },
    { label: 'Nei', value: JaEllerNei.Nei },
];

export enum Behovstype {
    AVKLAR_TEMA = '1339',
    FINN_SAK = '1362',
    KATEGORISER_DOKUMENT = '1337',
    DIGITALISER_DOKUMENT = '1359'
}
export const getJaNeiEllerUndefined = (value?: boolean | null): JaEllerNei | undefined => {
    if (value === null || value === undefined) {
        return undefined;
    }
    return value ? JaEllerNei.Ja : JaEllerNei.Nei;
};
