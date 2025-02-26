import { describe, expect, it } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { DigitaliserMeldekort } from './DigitaliserMeldekort';
import { render, screen } from '@testing-library/react';

describe('DigitaliserPliktkort', () => {
  const user = userEvent.setup();

  it('innsendtdato vises', () => {
    render(
      <DigitaliserMeldekort submit={() => {}} behandlingsVersjon={1} behandlingsreferanse={'1'} readOnly={false} />
    );
    expect(screen.getByRole('textbox', { name: /Innsendt dato/i })).toBeVisible();
  });
});
