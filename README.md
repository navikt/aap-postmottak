# AAP Postmottak

Frontendapplikasjon for postmottak i AAP

## Bygge og kjøre app lokalt

### Github package registry

Vi bruker Github sitt package registry for npm pakker, siden flere av Nav sine pakker kun blir publisert her.

For å kunne kjøre `yarn install` lokalt må du logge inn mot Github package registry. Legg til følgende i .bashrc eller .zshrc lokalt på din maskin:
I .bashrc eller .zshrc:

`export NPM_AUTH_TOKEN=github_pat`

Hvor github_pat er din personal access token laget på github (settings -> developer settings). Husk `read:packages`-rettighet og enable SSO når du oppdaterer/lager PAT.

### .env.local-fil

I tillegg må du kopiere `.env-template` til `.env.local` for å kunne kjøre lokalt.

### Kjøre lokalt

```
yarn dev
```

---

## Kode generert av GitHub Copilot

Dette repoet bruker GitHub Copilot til å generere kode.

# Henvendelser

---

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

# For NAV-ansatte

---

Interne henvendelser kan sendes via Slack i kanalen #po-aap-team-aap.
