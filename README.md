# Rebirth AI Design System

React- ja TypeScript-pohjainen komponenttikirjasto, joka kokoaa Figma Make
design systemin ydinosiot uudelleenkäytettäviksi komponenteiksi.

## Käyttö

```tsx
import { Alert, Avatar, Badge, Button, Card, Input, Tab, Tabs } from "@rebirth-ai/design-system";

export function Example() {
  return <Card title="Profile" footer={<Button>Save</Button>}>
    <Avatar name="Aino Virtanen" />
    <Input label="Email" type="email" hint="We never share your email." />
    <Badge tone="success">Active</Badge>
    <Alert tone="info" title="Heads up">Your profile is visible to your team.</Alert>
    <Tabs><Tab selected>Details</Tab><Tab>Settings</Tab></Tabs>
  </Card>;
}
```

`src/index.ts` tuo komponenttien tyylit automaattisesti. Tokenit ovat CSS-muuttujina
`src/styles/tokens.css`-tiedostossa, joten brändiarvoja voi ylikirjoittaa sovelluskohtaisesti.

## Selaimesikatselu

`index.html` on dokumentaation etusivu. Se sisältää vasemman navigaation ja linkit
komponenttikohtaisiin alasivuihin `pages/`-kansiossa.
Käynnistä projektin juuressa paikallinen palvelin ja avaa selaimessa `index.html`:

```bash
python3 -m http.server 8000
```

Osoite on tällöin `http://localhost:8000/index.html`.
