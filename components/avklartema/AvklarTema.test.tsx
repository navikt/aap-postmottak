import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvklarTema } from './AvklarTema';
import { AvklarTemaGrunnlag } from 'lib/types/types';

describe('AvklarTema', () => {
  const grunnlag: AvklarTemaGrunnlag = {
    vurdering: {skalTilAap: true},
    dokumenter: [],
  };
  it('Skal ha en oversikt', () => {
    render(<AvklarTema behandlingsVersjon={1} journalpostId={'123'} grunnlag={grunnlag} />);
    const heading = screen.getByText('Avklar tema');
    expect(heading).toBeVisible();
  });
  it('Har et valg for om dokumentet hører til tema AAP eller ikke', () => {
    render(<AvklarTema behandlingsVersjon={1} journalpostId={'123'} grunnlag={grunnlag} />);
    expect(screen.getByText('Er dokumentet riktig journalført på tema AAP?')).toBeVisible();
  });
});
