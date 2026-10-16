# Transport Srbobran – sajt

## Postavljanje na GitHub Pages
1. Na GitHub nalogu napravi novi javni repozitorijum sa imenom **transport**.
2. Ubaci sav sadržaj ovog foldera u repozitorijum (Add file → Upload files). Fajl `.nojekyll` mora da ostane.
3. Idi u Settings → Pages → Source: *Deploy from a branch*, grana `main`, folder `/ (root)`.
4. Sajt je na adresi: https://transportsrbobran.com (domen na Namecheap-u, CNAME fajl u repozitorijumu)

Ako repozitorijum nazoveš drugačije, u svim fajlovima zameni
`https://psihotrot-tech.github.io/transport` novom adresom.

## Kada stigne domen
1. U svim fajlovima zameni `https://psihotrot-tech.github.io/transport` sa `https://tvojdomen.rs`.
2. Napravi fajl `CNAME` sa jednim redom: `tvojdomen.rs`.
3. Kod registra domena podesi DNS prema uputstvu GitHub Pages (A zapisi + CNAME za www).

## Posle objavljivanja (bitno za Google)
- **Google Search Console**: dodaj sajt i pošalji `sitemap.xml`.
- **Google Business Profile**: napravi profil „Transport Srbobran“ (kategorija: Šlep služba / Towing service), unesi isti telefon, radno vreme 0–24 i područje usluge (Novi Sad, Vrbas, Bečej, Temerin, Kula…). Ovo je najvažniji korak za lokalne pretrage.
- Zamoli zadovoljne klijente da ostave recenziju na Google profilu. Kada se skupe, mogu da se ubace na sajt (mesto je označeno u `index.html`).

## Struktura
- `index.html` – srpski, `en/` – engleski, `de/` – nemački
- `slep-sluzba-<mesto>/` – stranice po mestima (Novi Sad, Srbobran, Vrbas, Bečej, Temerin, Kula, Zrenjanin, Bačka Palanka, Inđija, Sremska Mitrovica)
- `assets/` – stil, skripta, logo (`logo.svg` znak, `logo-full.svg` znak sa nazivom)

Fotografije: vlastite fotografije Transport Srbobran (tablice zamućene).
