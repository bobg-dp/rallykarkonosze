import { allStages } from "./stages.js";

const flyerFiles = {
  zabobrze: [
    {
      side: "Awers",
      src: "/assets/locals/zabobrze/oszabobrzeAWERS.png",
    },
    {
      side: "Rewers",
      src: "/assets/locals/zabobrze/oszabobrzeREWERS.png",
    },
  ],
  chrosnica: [
    {
      side: "Awers",
      src: "/assets/locals/chrosnica/oschroanicaAWERS.png",
    },
    {
      side: "Rewers",
      src: "/assets/locals/chrosnica/oschrosnicaREWERS.png",
    },
  ],
  struznica: [
    {
      side: "Awers",
      src: "/assets/locals/struznica/osstruznicaAWERS.png",
    },
    {
      side: "Rewers",
      src: "/assets/locals/struznica/osstruznicaREWERS.png",
    },
  ],
};

export const localsSections = allStages.map((stage) => ({
  id: stage.slug,
  code: stage.code,
  name: stage.name,
  typeLabel: stage.typeLabel,
  dateLabel: stage.dateLabel,
  flyers: flyerFiles[stage.slug].map((flyer) => ({
    ...flyer,
    alt: `Ulotka dla mieszkańców – ${stage.name}, strona ${flyer.side.toLowerCase()}`,
    label: flyer.side,
  })),
}));
