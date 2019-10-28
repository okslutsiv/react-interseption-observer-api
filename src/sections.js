// https://github.com/knicklabs/lorem-ipsum.js

import { loremIpsum } from "lorem-ipsum";

export const sectionsData = [
  {
    id: "mango",
    headline: "Mango",
    text: loremIpsum({ count: 40, units: "sentences" })
  },
  {
    id: "avocado",
    headline: "Avocado",
    text: loremIpsum({ count: 60, units: "sentences" })
  },
  {
    id: "bamboo",
    headline: "Bamboo",
    text: loremIpsum({ count: 50, units: "sentences" })
  }
];
