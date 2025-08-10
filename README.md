# Project Name

A simple guide to running this app.

## Getting Started

To start the development server, run:

```bash
npm run dev --silent | cat
```
## How to Add Pokémon
Edit public/data/pokemon.csv to include your new Pokémon’s information.
Follow the same column format as the existing entries.
Save the file to update the available Pokémon in the app.

Add Move Information
Open src/game/attacks.ts and update the ATTACKS object.
Add your new moves with their name, damage, type, and shape data.
Ensure the format matches the existing entries.
