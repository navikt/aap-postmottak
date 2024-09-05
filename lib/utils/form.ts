import { JaEllerNei } from 'lib/form';

export const getJaNeiEllerUndefined = (value?: boolean | null): JaEllerNei | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  return value ? JaEllerNei.Ja : JaEllerNei.Nei;
};
