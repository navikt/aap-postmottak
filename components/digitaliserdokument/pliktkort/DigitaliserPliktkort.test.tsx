import { describe, expect, it } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { DigitaliserPliktkort } from './DigitaliserPliktkort';
import { render, screen } from '@testing-library/react';

describe('DigitaliserPliktkort', () => {
  const user = userEvent.setup();

  it('innsendtdato vises', () => {
    render(<DigitaliserPliktkort behandlingsVersjon={1} journalpostId={'1'} />);
    expect(screen.getByRole('textbox', { name: /Innsendt dato/i })).toBeVisible();
  });

  it('legg til pliktperiode, felter for arbeidstimer for en periode vises', async () => {
    render(<DigitaliserPliktkort behandlingsVersjon={1} journalpostId={'1'} />);

    const leggTilPeriodeKnapp = screen.getByRole('button', { name: /legg til ny periode/i });
    await user.click(leggTilPeriodeKnapp);

    expect(screen.getAllByRole('spinbutton', { name: /arbeidstimer/i }).length).toBe(7);
  });
});
