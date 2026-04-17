import { ArticleContent } from "@/components/articles/ArticlePage";

export const wayOfLifeContent: ArticleContent[] = [
  {
    type: "section-title",
    text: "Way of Life",
  },
  {
    type: "group",
    content: [
      {
        type: "paragraph",
        text: [
          "Rizal as Municipality: The **Gammonnang** subtribe is one of the distinct ethno-linguistic groups within the Kalinga people, specifically settled in the municipality of **Rizal** (historically known as Liwan). Their lifestyle is a unique blend of traditional Cordilleran mountain culture and the influences of the neighboring Cagayan Valley plains.",
          "The Gammonnang lifestyle is characterized by a transition from high-altitude tribalism to a more sedentary, agricultural society.",
        ],
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Economy:** Unlike the steep terracing of the Upper Kalinga, the Gammonnang utilize the flatter terrain of Rizal for wet-rice farming (papayaw) and corn. They are also known for swidden farming (uwa) and livestock raising.",
          },
          {
            text: "**Social Governance:** Life is governed by the **Bodong** (Peace Pact system). This is a bilateral agreement with other tribes that governs trade, travel, and justice. The **Pagta** (the laws of the pact) serves as their primary constitution.",
          },
          {
            text: "**Housing:** While modern houses are common, traditional status was once marked by the **Binayon**—an octagonal house reserved for the **Pangat** (leaders) and wealthy families.",
          },
        ],
      },
    ],
  },

  // Family
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Family",
      },
      {
        type: "paragraph",
        text: [
          "Family is the core unit of Gammonnang society, and kinship ties are exceptionally strong.",
        ],
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Extended Circles**: A person’s loyalty extends to their **pithalian** (kindred), which includes relatives up to the third or fourth degree of consanguinity.",
          },
          {
            text: "**Inheritance**: Property (especially rice fields and heirloom jars/beads) is traditionally divided among children, though the firstborn often receives a larger or more significant portion to ensure they can host family rituals.",
          },
          {
            text: "**Child-rearing Rituals**",
            items: [
              {
                text: "**Kontad/Kontid**: A ritual performed for infants to protect them from malevolent spirits.",
              },
              {
                text: "**Gabbok**: A community gathering to welcome a child, involving the butchering of a pig and the serving of rice cakes.",
              },
            ],
          },
        ],
      },
    ],
  },

  // Marriage
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Marriage",
      },
      {
        type: "paragraph",
        text: [
          "Marriage is not just a union of two people but a strategic alliance between two families or clans.",
        ],
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Courtship (Bilin)**: Traditionally involved a man visiting a lady at night to express intent through conversation or offering betel nut.",
          },
          {
            text: "**Arranged Marriage (Ab-aboryan)**: Practiced by wealthy families (Kachangyan) to keep wealth within certain circles. It can involve betrothals made even when children are infants.",
          },
          {
            text: "**Wedding Feast (Tupayya)**: The highlight of the union, where gongs (gangsa) are played. Men perform the Pattong (gong dance) while women perform the Tadok. The exchange of heirlooms, such as Bongol (beads) or Gosi (ancient jars), often seals the contract.",
          },
        ],
      },
    ],
  },

  // Beliefs
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "4 Beliefs",
      },
      {
        type: "paragraph",
        text: [
          "The Gammonnang maintain a dual-belief system, practicing Christianity while holding onto deep-seated animistic traditions.",
        ],
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Kabunyan**: The supreme deity and creator",
          },
          {
            text: "**Paniyaw**: A moral concept that certain acts (like theft or murder) are 'paniyaw' (taboo/forbidden) because they invite divine punishment or bad luck.",
          },
          {
            text: "**Ngilin**: Strict adherence to taboos, especially during pregnancy or harvests, to avoid offending nature spirits.",
          },
          {
            text: "**Nature Spirits**: They believe in spirits inhabiting trees, rivers, and stones. Rituals led by elders or shamans are performed to appease these spirits during illness or before land cultivation.",
          },
        ],
      },
    ],
  },

  // Fiesta and Celebrations
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Fiesta and Celebrations",
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Town Fiesta**: Rizal celebrates its foundation and patronal feast with a mix of Catholic mass and tribal dancing",
          },
          {
            text: "**Ullalim Festival**: While a province-wide event (Feb 14), the Gammonnang participate heavily, showcasing the Ullalim (epic chants) that narrate the bravery of their ancestors.",
          },
          {
            text: "**Bodong Celebrations**: The 'warming' or renewal of a peace pact is a major event involving days of feasting, chanting (Dan-dannag), and the butchering of carabaos to feed the community.",
          },
        ],
      },
    ],
  },

  {
    type: "sources",
    text: [
      "Lynch, F. (1953). The Kalingas: their institutions and customary law. Philippine Studies Historical and Ethnographic Viewpoints, 1(1). https://doi.org/10.13185/2244-1638.3554",
      "The Kalinga of northern Luzon, Philippines : Dozier, Edward P : Free Download, Borrow, and Streaming : Internet Archive. (1967). Internet Archive. https://archive.org/details/kalingaofnorther0000dozi/page/n9/mode/2up",
    ],
  },
];
