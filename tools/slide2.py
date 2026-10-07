from figgen import *
W = 'rgb(255,255,255)'; RED = 'rgb(129,0,18)'; GR = 'rgb(107,107,107)'; K = 'rgb(17,17,17)'
box = lambda x, y, w, h, col, c=3.92: R(x, y, w, h, f=[col], c=c)
lines = [R(39.23, 105.92, 31.38, 2.94, f=[RED], c=1.96), R(0, 108.86, 843.43, 0.98, f=["rgb(232,232,232)"])]
left = [
  F(31.38, 23.54, 509.98, 45.11, f=[W], k=["rgb(232,232,232)", 0.98, 0], c=22.56, e=[["d", 0, 1.96, 7.85, 0, "rgba(0,0,0,0.08)"]], cl=1, k2=[
    F(20.6, 13.14, 18.83, 18.83, cl=1, k2=[F(3.14, 3.14, 12.95, 12.95, k2=[
      V(2.35, 2.35, 12.55, 12.55, "0 0 13 13", '<path d="M6.27679 11.7689C9.31 11.7689 11.7689 9.31 11.7689 6.27679C11.7689 3.24357 9.31 0.784668 6.27679 0.784668C3.24357 0.784668 0.784668 3.24357 0.784668 6.27679C0.784668 9.31 3.24357 11.7689 6.27679 11.7689Z" stroke="#6B6B6B" stroke-width="1.56918" stroke-linecap="round" stroke-linejoin="round"/>'),
      V(11.77, 11.77, 5.1, 5.1, "0 0 6 6", '<path d="M4.31532 4.31532L0.784668 0.784668" stroke="#6B6B6B" stroke-width="1.56918" stroke-linecap="round" stroke-linejoin="round"/>')])]),
    T(51.19, 13.06, 89, 19, 'taxi bornem', size=15.69, col=K)]),
  T(39.23, 84.34, 31, 15, 'Alles', st='Semi Bold', size=12.75, col=RED),
  T(100.04, 84.34, 33, 15, 'Maps', size=12.75, col=GR), T(162.8, 84.34, 81, 15, 'Afbeeldingen', size=12.75, col=GR), T(272.64, 84.34, 45, 15, 'Nieuws', size=12.75, col=GR),
] + lines + [
  F(39.23, 137.3, 27.46, 27.46, f=["rgb(255,199,61)"], c=13.73, cl=1, k2=[T(9.23, 6.23, 9, 15, 'T', st='Bold', size=12.75, col=K)]),
  T(76.5, 135.34, 82, 17, 'Taxi Bornem', st='Medium', size=13.73, col=K), T(76.5, 152.99, 110, 14, 'Bornem · Taxidienst', size=11.77, col=GR),
  T(39.23, 178.49, 417, 24, 'Uw betrouwbare taxi in Bornem en omgeving', size=19.61, col=RED),
  T(39.23, 209.88, 460.95, 44, 'Stipt, betrouwbaar en persoonlijk. Taxi Bornem brengt u comfortabel en veilig naar elke bestemming, 24 uur per dag, 7 dagen per week.', size=13.73, col='rgb(77,77,77)', lh=21.58, ar=0),
  T(54.92, 282.45, 69, 17, 'Rit boeken', size=13.73, col=RED), T(192.22, 282.45, 52, 17, 'Contact', size=13.73, col=RED), R(39.23, 282.45, 1.96, 19.61, f=["rgb(232,232,232)"]),
  box(39.23, 333.45, 137.3, 8.83, 'rgb(235,235,235)'), box(39.23, 355.03, 372.68, 13.73, 'rgb(217,217,217)'), box(39.23, 386.41, 460.95, 8.83, 'rgb(235,235,235)'), box(39.23, 404.06, 392.29, 8.83, 'rgb(235,235,235)'),
  box(39.23, 441.33, 117.69, 8.83, 'rgb(237,237,237)'), box(39.23, 462.91, 333.45, 13.73, 'rgb(222,222,222)'), box(39.23, 494.29, 441.33, 8.83, 'rgb(237,237,237)'), box(39.23, 511.94, 372.68, 8.83, 'rgb(237,237,237)'),
]
profile = F(535.48, 125.53, 284.41, 411.91, f=[W], k=["rgb(232,232,232)", 0.98, 0], c=13.73, cl=1, k2=[
  R(0, 0, 284.41, 147.11, f=["IMG"], n="Foto"),
  T(17.65, 160.84, 118, 24, 'Taxi Bornem', st='Semi Bold', size=19.61, col=K),
  F(17.65, 192.22, 221.29, 15, cl=1, k2=[T(0, 0, 20, 15, '4,9', st='Medium', size=12.75, col=K)] + [STAR(23.92 + i * 16.67, 1.13) for i in range(5)] + [T(107.29, 0.5, 114, 14, '50+ Google-reviews', size=11.77, col=GR)]),
  T(17.65, 215.76, 117, 14, 'Taxidienst in Bornem', size=11.77, col=GR),
  F(17.65, 245.18, 72.5, 29.69, f=[W], k=["rgb(232,232,232)", 0.98, 0], c=15.69, cl=1, k2=[T(12.75, 7.85, 47, 14, 'Website', st='Semi Bold', size=11.77, col=RED)]),
  F(102, 245.18, 59.5, 29.69, f=[W], k=["rgb(232,232,232)", 0.98, 0], c=15.69, cl=1, k2=[T(12.75, 7.85, 34, 14, 'Route', st='Semi Bold', size=11.77, col=RED)]),
  F(186.34, 245.18, 58.54, 27.73, f=[RED], c=15.69, cl=1, k2=[T(11.77, 6.87, 35, 14, 'Bellen', st='Semi Bold', size=11.77, col=W)]),
  R(17.65, 292.26, 249.11, 0.98, f=["rgb(232,232,232)"]),
  T(17.65, 307.95, 31, 14, 'Open', st='Semi Bold', size=11.77, col=K), T(74.54, 307.95, 188, 14, '24 uur per dag, 7 dagen per week', size=11.77, col=GR),
  T(17.65, 337.37, 33, 14, 'Regio', st='Semi Bold', size=11.77, col=K), T(74.54, 337.37, 118, 14, 'Bornem en omgeving', size=11.77, col=GR),
  T(17.65, 366.79, 43, 14, 'Boeken', st='Semi Bold', size=11.77, col=K), T(74.54, 366.79, 130, 14, 'Online of via WhatsApp', size=11.77, col=GR)])
chip = F(529.6, 517.83, 321.13, 42.5, f=["rgba(0,0,0,0.65)"], k=["rgba(255,255,255,0.14)", 0.98, 0], c=15.69, e=[["d", 0, 0, 35.31, 0, "rgba(130,0,18,0.6)"], ["g", 23.54]], cl=1, k2=[
  STAR(16.67 + i * 20.59, 14.88) for i in range(5)] + [T(119.65, 12.75, 93, 17, '4,9 op Google', st='Semi Bold', size=13.73, col=W), T(220.5, 13.75, 82, 15, '· 50+ reviews', size=12.75, col='rgba(255,255,255,0.6)')])
beeld = F(535, 320, 850.3, 560, k2=[
  F(0, 0, 843.43, 549.21, f=[W], c=19.61, e=[["d", 0, 29.42, 58.84, 0, "rgba(0,0,0,0.5)"], ["d", 0, 0, 78.46, 0, "rgba(153,5,20,0.5)"]], cl=1, k2=left + [profile]), chip])
d = {
 "kop": T(474.5, 120, 971, 76, '', segs=[["Zo word je ", "Manrope", "ExtraBold", 64, W, -0.56, 76, 0, 0], ["gevonden", "Manrope", "ExtraBold", 64, "rgb(242,74,99)", -0.56, 76, 0, 0], [" in je regio.", "Manrope", "ExtraBold", 64, W, -0.56, 76, 0, 0]]),
 "intro": T(705, 210, 510, 30, 'Zo staat Taxi Bornem in Google. Dit hebben we opgezet.', st='Regular', size=20, col='rgba(255,255,255,0.7)', lh=30, fam='Manrope'),
 "beeld": beeld,
 "lijnen": PATHS((430, 365.27, 147.19, 35.48, "0 0 148 36", "M0 34.7251H18.2609L147 0.725098"), (430, 511.09, 132.63, 149.66, "0 0 133 150", "M0 148.913H34L132 0.413086"),
                 (1226.23, 399.25, 263.77, 130.1, "0 0 264 131", "M263.767 0.75H229.767L0.367188 129.45"), (1304.8, 659.25, 185.2, 200.3, "0 0 186 201", "M185.198 0.75H151.198L0.598145 199.85")),
 "slot": SLOT(632, 652, 'CASE  ·  TAXI BORNEM  ·  LIVE', 253, 193, 'Bekijk de case -->', 137, 544, 108),
 "call": [CALL(114, 369, 95, 1, 11, 6, 'Gevonden op “taxi bornem”', 212, 'Het eerste resultaat wanneer iemand zoekt.', 38),
          CALL(114, 622, 76, 2, 10, 8, 'Een resultaat dat uitnodigt', 205, 'Een duidelijke titel en beschrijving.', 19),
          CALL(1490, 362, 76, 3, 10, 8, 'Google-profiel op punt', 176, 'Foto, openingsuren, route en bellen.', 19),
          CALL(1490, 622, 76, 4, 9.5, 9, 'Reviews in de kijker', 152, '4,9 sterren uit meer dan 50 reviews.', 19)],
 "anch": [[571, 359], [556, 504], [1220.61, 522.7], [1299.44, 853.08]],
}
save(2, d)
