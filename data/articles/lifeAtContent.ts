import { ArticleContent } from "@/components/articles/ArticlePage";
import { paragraph } from "./../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.d";

export const lifeAtContent: ArticleContent[] = [
  // === Way of Life ===
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
        text: "Beliefs",
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
      "Lynch, F. (1953). The Kalingas: their institutions and custom law. Philippine Studies Historical and Ethnographic Viewpoints, 1(1). https://doi.org/10.13185/2244-1638.3554",
      "The Kalinga of northern Luzon, Philippines : Dozier, Edward P : Free Download, Borrow, and Streaming : Internet Archive. (1967). Internet Archive. https://archive.org/details/kalingaofnorther0000dozi/page/n9/mode/2up",
    ],
  },
  // === End of Way of Life ===

  {
    type: "divider",
  },

  // === Kalinga People Now ===
  {
    type: "section-title",
    text: "The Kalinga People Now",
  },

  {
    type: "paragraph",
    text: [
      "The Kalinga are an indigenous group from the Cordillera Central of northern Luzon, traditionally recognized for their warrior culture and 'magnificently developed' physical stature.",
      "The name **'Kalinga'** itself is an external label derived from Ibanag and Gaddang terms meaning **'enemy'** or **'headhunter'**, a reputation that even influenced the American English term **'boondocks'** (from the Tagalog bundok for mountain) to describe their incredibly remote territory.",
      "While colonial administrators like Dean Worcester initially labeled them as 'wild', anthropologists and linguists later identified a complex social structure categorized by geographic subcultures—Balbalan, Tanudan, and the southern regions—and a diverse network of mutually intelligible dialects.",
    ],
  },

  {
    type: "paragraph-image",
    text: [
      "Despite the fearsome 'enemy' label, the Kalinga maintained a sophisticated society characterized by distinct cultural practices, naming traditions, and epic ballads.",
      "They were geographically and linguistically distinct from neighboring groups such as the Apayao and Ifugao, with a social system that prioritized internal kinship and specific regional identities.",
      "Their history reflects a transition from being viewed through a narrow lens of tribal warfare to being recognized as a culturally rich population with unique aesthetic traditions, specialized craftsmanship, and a deep-rooted connection to the rugged terrain of northern Luzon.",
    ],
    imageUrl: [
      {
        src: "/assets/articles/life-at/header.jpg",
        caption: null,
        source:
          "https://commons.wikimedia.org/wiki/File:Kalinga_Womens%27_Dance.jpg",
      },
    ],
    imageLocation: "left",
  },

  // Kalinga Languages

  {
    type: "paragraph-image",
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga Languages",
      },
      {
        type: "paragraph",
        text: [
          "The Kalinga people speak a complex cluster of Austronesian languages native to the northern Luzon highlands, which linguists further categorize into distinct branches and dialects. ",
          "Scholars like Ronald Himes have traditionally divided these into **Masadiit**, **Northern**, and **South-Central** groupings, while modern classifications by Ethnologue identify eight specific Kalinga languages. These range from widely spoken varieties like **Lubuagan Kalinga**, with approximately 30,000 speakers across multiple dialects, to smaller linguistic communities such as **Majukayang** and **Banao Itneg**. This linguistic diversity reflects a history of geographic isolation and regional identity, with speech communities extending beyond Kalinga Province into **Apayao**, **Abra**, and **Mountain Province**.",
          "These eight recognized languages— **Butbut**, **Limos**, **Lubuagan**, **Mabaka Valley**, **Majukayang**, **Southern**, **Tanudan**, and **Banao Itneg**—serve as the primary markers of sub-tribal identity within the region. Each language often encompasses several mutually intelligible dialects associated with specific valleys or municipalities, such as the Tinglayan and Sumadel dialects of Southern Kalinga or the Mangali dialects of the Tanudan Valley. ",
          "Despite this fragmentation, the Kalinga linguistic grouping remains a cohesive part of the broader Northern Luzon Cordilleran family, maintaining a network of shared grammatical structures and vocabulary that distinguishes them from their neighboring ethnic groups.",
        ],
      },
    ],

    imageUrl: [
      {
        src: "/assets/articles/life-at/1.jpg",
        caption: "Kalinga Script",
        source:
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Copper_plates_NMND-8.JPG",
      },
    ],
    imageLocation: "right",
  },

  // Kalinga Group
  {
    type: "paragraph-image",
    imageLocation: "left",
    imageUrl: [
      {
        src: "/assets/articles/life-at/2.png",
        caption: "Distribution of Kalinga ethno-linguistic groups.",
        source:
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Kalinga_Tribes_Map.png",
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga Group",
      },
      {
        type: "paragraph",
        text: [
          " The classification of the Kalinga people has evolved from broad geographic strokes to a highly detailed recognition of localized identities. Early academic frameworks, such as those by **Edward Dozier** and **Teodoro Llamzon**, categorized the population into major regional or dialect groups, such as the **Balbalan** in the north and the **Tanudan** in the east. Later linguistic studies further refined these divisions into specific branches, such as **Masadiit**, **Northern**, and **South-Central Kalinga**. However, modern indigenous perspectives, notably those from the **National Commission for Culture and the Arts (NCCA)**, identify upwards of **31 distinct subtribes**.",
        ],
      },
      {
        type: "list",
        items: [
          {
            text: "**Northern Regions (Balbalan & Pinukpuk)**: Home to groups such as the **Banao**, **Mabaca**, and **Limos**.",
          },
          {
            text: "**Southern Highlands (Lubuagan, Pasil, & Tinglayan)**: Centers for established communities like the **Guinaang**, **Balatoc**, and **Butbut**.",
          },
          {
            text: "**Tanudan Valley & Tabuk City**: Represented by the **Mangali** and **Biga**, though some share overlapping identities with the neighboring **Gaddang**.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Collectively, these classifications demonstrate that while the Kalinga share a broad ethnic umbrella, their true social structure is defined by a dense network of **specific territorial and ancestral affiliations**.",
      },
    ],
  },

  // Historical Resistance and Social Structure
  {
    type: "paragraph-image",
    imageLocation: "right",
    imageUrl: [
      {
        src: "/assets/articles/life-at/3.jpg",
        caption:
          "Kalinga peace pact holder with wife in 2012; The Kalinga peace pact is a unique institution to create and keep peace between hostile settlements",
        source:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kalinga_peace_pact_holder_with_wife.JPG/960px-Kalinga_peace_pact_holder_with_wife.JPG?_=20120918174736",
      },
    ],
    imageVariant: "full",
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga History and Dams",
      },
      {
        type: "paragraph",
        text: [
          "The failed religious and economic impositions of the **Spanish** on the **20th-century struggle** against the Philippine government. While Spanish missionaries and **tobacco monopolies** saw little success in the highlands, the **mid-1970s** brought a violent confrontation over the **Chico River Dam project**.",
          "The state’s attempt to displace **85,000 people** led to the martyrdom of leader **Macli-ing Dulag** and a period of intense military conflict, which only ended when the project was permanently halted in **1986**.",
          "This resilience is mirrored in their spiritual life; despite Christian influence, the Kalinga maintain a complex traditional universe of **five levels** presided over by the creator-god **Kabunyan**, where female shamans perform sacrifices and chants to navigate a world populated by ancestral spirits and nature-dwelling **pinain**.",
        ],
      },
      {
        type: "paragraph",
        text: "Socially, Kalinga life is structured around independent households and a patriarchal yet inclusive system where women serve as both spiritual and political leaders.",
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Social Hierarchy**: Traditionally divided into the **baknang** (wealthy) and **kapos** (poor).",
          },
          {
            text: "**Leadership Evolution**: Transitioned from the **mingol** (warriors) to the **papangat** (wise elders) as headhunting declined.",
          },
          {
            text: "**The Bodong**: A sophisticated peace pact system that serves as a formal diplomatic framework for maintaining kinship ties and resolving disputes.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "This combination of a **robust internal legal system** and a deeply rooted belief in the **sacredness of their ancestral land** has allowed the Kalinga to preserve a distinct cultural identity through centuries of external pressure.",
      },
    ],
  },

  //Religious System
  {
    type: "paragraph-image",
    imageLocation: "left",
    imageUrl: [
      {
        src: "/assets/articles/life-at/4.webp",
        caption:
          "Kalinga chief of a settlement on the Rio Grande de Cagayan, near Ilagan, Isabela (1906)",
        source:
          "https://factsanddetails.com/southeast-asia/Philippines/sub5_6d/entry-3883.html#group=nogroup&photo=4",
      },
    ],
    imageVariant: "full",
    content: [
      {
        type: "sub-section-title",
        text: "Religious System",
      },
      {
        type: "paragraph",
        text: [
          "The Kalinga religious system is defined by a five-tiered cosmological structure comprising the heavens, the earth, the underworld, the upstream world, and the downstream world. At the apex of this universe is the creator-god Kabunyan, though daily spiritual life focuses on a complex hierarchy of deities, including nature-dwelling spirits known as pinain, malevolent alan, and the souls of deceased ancestors. To navigate this spiritual landscape, the Kalinga rely on predominantly female shamans who use chants, pig or chicken sacrifices, and ritual dances to communicate with spirits and heal the sick. Despite the introduction of Christianity, these traditional beliefs remain central to Kalinga identity, particularly the reverence for bulol (rice-goddess statues) and the persistent belief in a multi-layered spirit world.",
          "Mortuary practices further reflect the group's unique spiritual values, emphasizing the preservation of the deceased's physical form and status. Corpses are traditionally smoked to preserve them, and funerals often span several days, marked by the sacrifice of livestock to honor the departed. Interestingly, the Kalinga believe that one’s moral behavior on earth has no bearing on one's fate in the afterlife, suggesting a spiritual focus on ritual precision and the appeasement of spirits rather than on earthly karma. While burial methods have shifted from ancient jar and mausoleum interments to modern ground burials, the elaborate funeral rites remain a significant communal event that reinforces kinship ties and ancestral respect.",
        ],
      },
    ],
  },

  //Society
  {
    type: "paragraph-image",
    imageLocation: "right",
    imageUrl: [
      {
        src: "/assets/articles/life-at/5.webp",
        caption:
          "Arm tattoos: Ibaloi woman of (37); Northern Kalinga woman (38,39); and Northern Kalinga man (40)",
        source:
          "https://factsanddetails.com/southeast-asia/Philippines/sub5_6d/entry-3883.html#group=nogroup&photo=5",
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Society",
      },
      {
        type: "paragraph",
        text: [
          "Kalinga society is fundamentally patriarchal and centered on the household, guided by the philosophy that all communal life begins at the family hearth. While a clear division of labor exists—with men handling heavy land preparation and women managing time-intensive cultivation and domestic duties—women maintain significant social power by serving as shamans and holding political office. The community is stratified into two economic classes: the baknang (wealthy), who own vast rice fields and heirlooms, and the kapos (poor). Leadership has historically evolved from the mingol, warriors who earned prestige through headhunting, to the papangat, wise elders who now lead through oratory skill, moral authority, and the pursuit of consensus during communal disputes.",
          "To manage inter-tribal relations and mitigate conflict, the Kalinga developed the bodong, a sophisticated system of formal peace pacts. This institution functions as a diplomatic framework for establishing and strengthening kinship ties, effectively reducing traditional warfare by replacing it with a structured legal and social code. The bodong proved so effective at maintaining regional stability that neighboring groups, such as the Bontok and Gaddang, eventually adopted similar practices. This blend of fierce household independence and a highly organized system of collective diplomacy remains a hallmark of Kalinga social structure, emphasizing restorative justice and the preservation of ancestral relationships.",
        ],
      },
    ],
  },

  //Family and Marriage
  {
    type: "paragraph-image",
    imageLocation: "left",
    imageVariant: "full",
    imageUrl: [
      {
        src: "/assets/articles/life-at/6.webp",
        caption: "Kalinga man and woman, 1903",
        source:
          "https://factsanddetails.com/southeast-asia/Philippines/sub5_6d/entry-3883.html#group=nogroup&photo=6",
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Family and Marriage",
      },
      {
        type: "paragraph",
        text: [
          "Kalinga kinship is structured around bilateral descent and regional endogamy, in which individuals trace ancestry equally through both parents and are expected to marry within their local community, or **'deme.'** These demes, ranging from 60 to 1,000 households, maintain strict incest taboos forbidding marriage to anyone closer than a third cousin. While polygyny exists among the wealthy, the Kalinga rarely marry outsiders, with the exception of Bontoc women. Social life is governed by the **'kindred'**—an extensive network reaching back to great-great-grandparents—where generations are prioritized over gender, and kinship terms are often reciprocal. While most regions lack permanent named lineages, some elite families in Lubuagan have begun shifting toward patrilineal identity.",
          "Domestic life typically begins with matrilocal residence, as new couples move in with the bride’s parents. Children are raised within the deme's supportive environment, learning primarily through observation rather than physical discipline. Inheritance is distributed equally among married children, though specific assets are often allocated by birth order: the eldest son typically receives the most productive land, while the youngest daughter inherits the family house. This system reflects the Kalinga view of property not as personal wealth, but as a sacred resource held in trust for future generations.",
        ],
      },
    ],
  },

  // Life
  {
    type: "paragraph-image",
    imageLocation: "right",
    imageVariant: "full",
    imageUrl: [
      {
        src: "/assets/articles/life-at/7.webp",
        caption:
          "Last Tattooed Woman of Kalinga, with traditional handtapped tattoos all over her body",
        source:
          "https://factsanddetails.com/southeast-asia/Philippines/sub5_6d/entry-3883.html#group=nogroup&photo=7",
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Life",
      },
      {
        type: "paragraph",
        text: [
          "Kalinga settlements traditionally consist of 5 to 50 households, situated in defensible positions and often featuring a central plaza for communal rites and nearby coconut groves. Their unique architecture distinguishes social status: wealthy families inhabit octagonal houses, while others live in square, stilt-mounted dwellings known as furoy or buloy. These single-room structures are crafted from plaited bamboo and thatched reeds, with life centered around a sand-filled hearth and an overhead drying rack. Despite their architectural ingenuity, historical isolation and iodine-deficient soils led to prevalent health issues like goiter, alongside respiratory and intestinal disorders that shaped the community's early medicinal needs.",
          "The Kalinga economy is a blend of subsistence farming and skilled cottage industries, centered on rice terraces, slash-and-burn agriculture, and coffee cultivation as a primary cash crop. They supplement their diet with domesticated livestock and hunted wildlife while producing high-quality metalwork, pottery, and basketry for trade in regional markets such as Tabuk. While most land is held communally, individual wealth is measured by rice terraces, livestock, and prized heirlooms such as ancient Chinese jars and gongs. This resource-based social structure experienced significant shifts in the late 20th century, particularly with the rise and fall of the Robusta coffee trade, which remains a focus of modern economic revitalization efforts.",
        ],
      },
    ],
  },

  // Kalinga Tatoos
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga Tattoos",
      },
      {
        type: "paragraph",
        text: [
          "Kalinga tattooing, known as **batok** or **whatok**, is a sacred tradition where ink is hand-tapped into the skin using pomelo thorns and charcoal. Historically, these markings served as badges of honor for men following successful headhunting raids and as symbols of beauty and fertility for women. The extensive repertoire of motifs—ranging from centipedes and snakes to ferns and rice mortars—transcends simple decoration, acting as protective talismans or status symbols that signify wealth and endurance. These designs are deeply integrated into Kalinga identity, appearing not only on the body but also on their textiles and pottery, representing the natural world and ancestral heritage.",
          "The survival of this ancient craft is largely credited to **Apo Whang-od**, the legendary mambabatok from Buscalan who became a global cultural icon, famously appearing on the cover of Vogue Philippines at age 106. While she initially tattooed warriors, she eventually opened her practice to international visitors, transforming her village into a pilgrimage site for traditional art. Because the craft must be passed down through family lines to remain authentic, Whang-od has mentored her grandnieces, Grace Palicas and Ilyang Wigan. This transition ensures that the three-dot signature and the rhythmic tapping of the coffee-wood mallet will continue to define Kalinga culture for future generations.",
        ],
      },
    ],
  },
  // === End of Kalinga People Now ===

  {
    type: "divider",
  },

  // === Pre-Historic ===
  {
    type: "section-title",
    text: "Pre-Historic",
  },
  {
    type: "group",
    content: [
      { type: "sub-section-title", text: "The Kalinga 1910" },
      {
        type: "paragraph",
        text: [
          "The Kalinga are an indigenous group in northern Luzon, Philippines, historically categorized by their neighbors and colonial administrators through the lens of headhunting traditions and distinct physical traits.",
        ],
      },
    ],
  },
  // Identity and Etymology
  {
    type: "group",
    content: [
      { type: "sub-section-title", text: "Identity and Etymology" },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**External Labeling**: The name 'Kalinga' was not traditionally used by the people themselves. It likely originated from lowland languages meaning 'enemy' and was adopted by Spanish explorers as a generic term for mountain inhabitants.",
          },
          {
            text: "**Ethnolinguistic Recognition**: Over time, the term evolved into a specific ethnic designation based on a network of mutually intelligible dialects and shared cultural practices, including unique ballads, ceremonies, and epic traditions.",
          },
        ],
      },
    ],
  },

  // Colonial Perspectives and Physicality
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Colonial Perspectives and Physicality",
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**American Descriptions**: Early 20th-century administrators, such as **Dean Worcester**, described the Kalinga as physically 'magnificent' and mentally 'acute,' though Worcester categorized them as 'wild' because of their warrior culture.",
          },
          {
            text: "**Distinct Characteristics**: Historical accounts by **Cornélis De Witt Willcox** noted that the Kalinga were taller than neighboring tribes (such as the Bontok or Ifugao) and possessed distinct facial features, such as wide-set, sloe-shaped eyes.",
          },
        ],
      },
    ],
  },

  // Cultural Origins and Social Structure
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Cultural Origins and Social Structure",
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**The 'Moro' Influence**: Historical theories suggest an infusion of **Moro (Muslim Mindanao)** blood resulting from exiles sent to northern Luzon by the Spanish. This is supported by:",
            items: [
              {
                text: "The use of the title **'dato'** for important men ",
              },
              {
                text: "Specific styles of dress reminiscent of southern Philippine cultures.",
              },
            ],
          },
          {
            text: "**Social Insulation**: Traditionally, the Kalinga maintained strict social boundaries, practicing **endogamy** (marrying only within their own bloodline) and showing little interest in integrating with Westerners or outsiders.",
          },
        ],
      },
    ],
  },

  // Gallery
  {
    type: "image",
    imageVariant: "full",
    imageUrl: [
      {
        src: "/assets/articles/life-at/8.jpg",
        caption: "Kalinga Couple In 1913",
        source: null,
      },
      {
        src: "/assets/articles/life-at/10.webp",
        caption: "Kalinga woman of Sili, Isabela (1906)",
        source: null,
      },
    ],
  },

  // Key Historical Encounters
  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "Key Historical Encounters",
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**The Worcester Incident (1907)**: During the first American administrative visit to Lubuagan, Dean Worcester and his party were nearly executed. They spent a night confined in a house while the community debated whether or not to take their heads.",
          },
          {
            text: "**Execution of Aguinaldo’s Men**: During his retreat, the Philippine revolutionary leader Emilio Aguinaldo left 17 sick and wounded soldiers in Kalinga territory; according to Willcox, these men were promptly beheaded after Aguinaldo's departure. [**Source**:“The Head Hunters of Northern Luzon” by Cornélis De Witt Willcox, Lieutenant-Colonel U.S. Army, Professor United States Military Academy, 1912 ]",
          },
        ],
      },
    ],
  },

  {
    type: "paragraph-image",
    imageLocation: "right",
    imageUrl: [
      {
        src: "/assets/articles/life-at/11.webp",
        caption:
          "Young Kalinga woman of a settlement on the Rio Grande de Cagayan near Isabela (1906)",
        source: null,
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga Dance (1910)",
      },
      {
        type: "paragraph",
        text: [
          "The Kalinga people were historically distinguished from their northern Luzon neighbors by their vibrant aesthetics and impressive physicality. Early 20th-century accounts describe them as a 'stately' and 'magnificently developed' people, characterized by their superior height and a preference for bold red and yellow attire influenced by Moro styles. Their cultural identity was largely defined by external perceptions; the name 'Kalinga' originated in lowland terms meaning 'enemy' or 'outlaw,' reflecting their fierce reputation as headhunters. Despite this fearsome label, colonial observers noted their high potential for development, grounded in a sophisticated network of shared customs, epic traditions, and a rigid social structure that prioritized internal lineage.",
          "Their ceremonial life was defined by rhythmic, gender-segregated dances and communal celebrations, in which the 'gansa' (gong) played a central role. These rituals often served as a bridge between their warrior past and social present, with some gongs featuring handles made from human jawbones as trophies of war. During these assemblies, each settlement displayed its unique identity through specific feather plumes and hibiscus adornments, while hospitality was marked by the free circulation of 'basi' (sugarcane wine). These early encounters reveal a culture that was both deeply traditional and visually spectacular, maintaining a sharp distinction in music, movement, and social etiquette compared to the neighboring Ifugao and Bontok groups.",
        ],
      },
    ],
  },
  {
    type: "paragraph-image",
    imageLocation: "left",
    imageUrl: [
      {
        src: "/assets/articles/life-at/12.webp",
        caption: "Kalinga Couple",
        source: null,
      },
    ],
    content: [
      {
        type: "sub-section-title",
        text: "Kalinga Clothing (1910)",
      },
      {
        type: "paragraph",
        text: [
          "The Kalinga were noted by early observers for a sophisticated sense of fashion and personal grooming that stood in sharp contrast to their 'wild' reputation. Women utilized intricate accessories such as bejuco bustles and nearly three-foot-long hair extensions, while both sexes adorned themselves with valuable agate beads, dog-teeth necklaces, and even repurposed materials like blue china shards or sleigh bells obtained through trade. These aesthetic choices, combined with rare social behaviors like formal family introductions and the use of cigar holders, led colonial writers to remark on the group's unexpected level of 'civilization' and refinement compared to neighboring tribes.",
          "Equally distinctive was the Kalinga's specialized weaponry, considered among the most original in the Philippine Archipelago. Their head-axes were masterfully crafted with curved blades, silver ferrules, and decorative brass plating, designed for both lethal utility and status. These were paired with unique softwood shields featuring cylindrical ribs and projections, a design more structurally complex than the flat shields of the Igorot. This combination of ornamental flair and advanced craftsmanship highlighted a culture that balanced a fierce warrior tradition with a high degree of technical skill and artistic pride.",
        ],
      },
    ],
  },

  // === End of Pre-Historic ===

  {
    type: "sources",
    text: [
      "Hays, J. (2024, March). Rice farming, production, history, types and problems in the Philippines. Facts and Details. https://factsanddetails.com/southeast-asia/Philippines/sub5_6d/entry-3883.html",
      "“Encyclopedia of World Cultures Volume 5: East/Southeast Asia:” edited by Paul Hockings, 1993; National Geographic, Live Science, Philippines Department of Tourism, Metropolitan Museum of Art, Natural History magazine, New York Times, Washington Post, Los Angeles Times, Smithsonian magazine, Encyclopedia.com, Times of London, Library of Congress, The Conversation, The New Yorker, Time, BBC, CNN, Reuters, Associated Press, AFP, Lonely Planet Guides, Google AI, Wikipedia, The Guardian and various websites, books and other publications.",
    ],
  },
];
