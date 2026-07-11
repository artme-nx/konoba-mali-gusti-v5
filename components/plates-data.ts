export type Plate = {
  id: string;
  index: string;
  label: string;
  note: string;
  img: string;
  alt: string;
  // Desktop scatter position/size (percent of container / clamp size).
  top: string;
  left: string;
  size: string;
  rotate: number;
};

// Five small-plate categories that make up the sampler board. These are
// generic, widely-served Dalmatian konoba categories (not specific unverified
// claims about this restaurant's exact recipes) used to compose the
// tasting-flight layout.
export const PLATES: Plate[] = [
  {
    id: "riba",
    index: "01",
    label: "Riba & školjke",
    note: "svježa lovina, škampi na buzaru",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=75",
    alt: "Tanjur svježih škampa i školjki",
    top: "0%",
    left: "0%",
    size: "clamp(190px, 23vw, 320px)",
    rotate: -4,
  },
  {
    id: "meso",
    index: "02",
    label: "Meso s gradela",
    note: "biftek i domaći odresci",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=75",
    alt: "Meso pečeno na roštilju",
    top: "48%",
    left: "4%",
    size: "clamp(160px, 18vw, 240px)",
    rotate: 3,
  },
  {
    id: "prsut",
    index: "03",
    label: "Pršut, sir & masline",
    note: "hladni degustacijski tanjur",
    img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=900&q=75",
    alt: "Pladanj s pršutom, sirom i maslinama",
    top: "6%",
    left: "37%",
    size: "clamp(180px, 20vw, 270px)",
    rotate: -2,
  },
  {
    id: "povrce",
    index: "04",
    label: "Blitva & povrće",
    note: "prilozi uz glavno jelo",
    img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=900&q=75",
    alt: "Zeleni prilozi i povrće",
    top: "54%",
    left: "40%",
    size: "clamp(140px, 15vw, 200px)",
    rotate: 5,
  },
  {
    id: "kolaci",
    index: "05",
    label: "Domaći kolači",
    note: "slatki kraj obroka",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=75",
    alt: "Domaći slatki kolač",
    top: "16%",
    left: "68%",
    size: "clamp(170px, 19vw, 250px)",
    rotate: -3,
  },
];
