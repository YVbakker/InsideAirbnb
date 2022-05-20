# InsideAirbnb

An app based on [insideairbnb](http://insideairbnb.com) that __does__ use https among other security & performance enhancements.

Using dotnet core 6 / 7 preview 2

* asp.net core backend
* blazor frontend

## To run API

1. Got to api subdir
2. copy `.env.example` to `.env` (and fill in the blanks)
3. copy `appsettings.json` to `appsettings.Development.json` (and fill in the blanks)
4. `docker compose up -d`
5. `dotnet run`

## Technical Requirements

### Must have

* Wordt gehost op het Azure Cloud Platform
* Maakt gebruik van ASP.Net Razor pages of MVC. Alleen in overleg met docent als er goede redenen zijn om hiervan af te wijken
* Maakt gebruik van MSSQL Server (versie van Azure) ✅
* De applicatie moet veilig zijn. Gebruik de OWASP top 5 om de meest voorkomende onveiligheden op te sporen en af te dichten
* De applicatie is aantoonbaar highly-scalable. Er worden daarvoor performance tests als bewijsmateriaal opgeleverd (voor de performance-verbeteringen en daarna)
* Authenticatie en autorisatie via Azure B2C of IdentityServer4 (Authentication As A Service)
* Caching service via Redis ✅

### Would have

* Microservice architectuur
* Microservice orchestration met Kubernetes
* Blazor applicatie met SignalR ✅

## Functional Requirements

### Must have

* Registeren en inloggen ✅
* Filter op prijs ✅
* Filter op buurt ✅
* Filter op review ✅
* Kaart is clickable, details rechts op pagina, maakt gebruik van de mapbox API
* Details per item waarop gefiltered is: #overnachtingen, #opbrengst in de maand. (must)
* Er moeten rollen toegevoegd en toegekend worden aan geregistreerde gebruikers. (must)
* Resultaten zoals trends, totalen, gemiddelden, etc. worden weergegeven in charts, alleen te bekijken voor ADMINS. Denk daarbij aan bv Gemiddelde beschikbaarheid per maand, gemiddelde beschikbaarheid per buurt, overzicht van gemiddelde huurprijs per buurt. Andere managementoverzichten zijn ook mogelijk, ga daarvoor op zoek naar online voorbeelden (must)

### Could have

* Locaties van zoekresultaat zichtbaar op kaart
* Layout idem als insideairbnb.com


