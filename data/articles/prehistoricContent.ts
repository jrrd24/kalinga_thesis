import { ArticleContent } from "@/components/articles/ArticlePage";

export const prehistoricContent: ArticleContent[] = [
  {
    type: "paragraph",
    text: [
      "The study of Philippine prehistory did not emerge overnight; it developed through decades of fieldwork, careful observation, and the dedication of early scholars who sought to understand the country’s distant past. Archaeological activity in the Philippines dates back to 1881, when a French explorer conducted expeditions in the central islands. This was followed by more systematic explorations in the early 20th century, particularly through American-led research. These early efforts laid the groundwork for recognizing the Philippines as a significant site for the study of human origins and migration in Southeast Asia.",
      "Among the key figures in this field was Henry Otley Beyer, often referred to as the “Father of Philippine Archaeology.” His contributions went beyond excavation; he helped institutionalize anthropology in the country. After arriving in the Philippines in the early 1900s, Beyer immersed himself in ethnographic and archaeological work, particularly among indigenous communities. His extensive travels across Southeast Asia enabled him to draw connections among the region's cultures. One of his most notable works, published in 1947, compiled known archaeological sites across the archipelago and became a foundational reference for future researchers.",
      "Another important figure was Robert B. Fox, whose work significantly advanced the understanding of prehistoric life in the Philippines. As a leading archaeologist of the National Museum, Fox conducted major excavations, including those in Palawan, where evidence of early human presence was discovered alongside stone tools. His research confirmed that the Philippines was not isolated in prehistoric times but part of broader regional developments. Fox also led explorations in the Cagayan Valley during the 1970s, uncovering both fossilized remains of extinct animals and stone tools believed to have been used by early humans.",
    ],
  },

  {
    type: "paragraph-image",
    text: [
      "Beyond tools, the geographical context of these discoveries also matters. Many of the archaeological sites were located on hills and ridges, areas that may have offered strategic advantages such as visibility and protection. Over time, natural processes like erosion brought fossils and artifacts closer to the surface, making them easier to discover. These landscapes, once inhabited by early humans and large animals, have since been transformed into agricultural lands.",
      "The development of Philippine archaeology was further enriched by other scholars such as Wilhelm G. Solheim II, who conducted some of the earliest post-war excavations in the country. His work expanded the scope of research to include not only the Philippines but also the broader Southeast Asian region, highlighting cultural connections across islands and mainland territories.",
      "Taken together, these efforts reveal the Philippines as an active participant in prehistoric human history. The combination of fossil evidence, stone tools, and systematic research demonstrates that early humans once thrived in the archipelago. More importantly, the work of these pioneering archaeologists established a strong foundation for understanding how ancient communities lived, adapted, and interacted with their environment.",
    ],
    imageUrl: [
      {
        src: "/assets/articles/prehistoric/header.png",
        caption: null,
        source: null,
      },
    ],
    imageLocation: "left",
  },

  {
    type: "group",
    content: [
      {
        type: "sub-section-title",
        text: "A Cave as a Home",
      },
      {
        type: "paragraph",
        text: [
          "Archaeological discoveries across Southeast Asia suggest that early humans naturally sought refuge in caves. In Peñablanca, more than a hundred caves, rock shelters, and open sites were explored beginning in the late 1970s. Many of these showed clear signs that people had lived there long before recorded history.",
          "These caves offered safety from harsh weather and wild animals. But more than that, they became centers of daily life—places where people rested, prepared food, and likely formed early social bonds. The image of a family inside a cave—sharing food and caring for children—reflects a simple but meaningful way of life grounded in survival and cooperation.",
        ],
      },
    ],
  },

  { type: "divider" },

  {
    type: "group",
    content: [
      {
        type: "section-title",
        text: "Stone Tools and Early Technology",
      },
      {
        type: "paragraph",
        text: [
          "One of the strongest pieces of evidence of early human activity in the region is the discovery of stone tools. These were not random rocks but carefully shaped implements used for specific tasks.",
          "There were two main types:",
        ],
      },
      {
        type: "list",
        addIndent: true,
        items: [
          {
            text: "**Pebble and cobble tools**: large, heavy stones used for chopping, breaking bones, or cutting wood",
          },
          {
            text: "**Flake and flake-core tools**: smaller, sharper pieces used for slicing meat or scraping materials",
          },
        ],
      },
      {
        type: "paragraph",
        text: [
          "These tools were often made from materials like chert and andesite, chosen for their durability. Early humans shaped them by striking stones together, creating sharp edges. When the tools became dull, they were sharpened again through a process called “retouching,” showing that even at this stage, people already understood the importance of maintenance and efficiency.",
          "Interestingly, many of these tools found in **Peñablanca** and **Rizal, Kalinga**, are similar to those discovered in other parts of Southeast Asia. This suggests that early humans shared knowledge or developed similar survival strategies across regions.",
        ],
      },
    ],
  },

  { type: "divider" },

  {
    type: "group",
    content: [
      {
        type: "section-title",
        text: "A Glimpse into Prehistoric Life",
      },
      {
        type: "paragraph-image",
        text: [
          "The presence of these tools alongside the fossil remains of large animals indicates that early humans lived alongside now-extinct species. They were likely hunters and gatherers, moving in small groups and relying on their environment for food.",
          "During the time of Homo erectus, these early people probably traveled across land bridges that once connected islands in Southeast Asia. This idea is supported by evidence from nearby regions like China and Java, suggesting that migration played a key role in spreading human populations.",
          "Their daily routine was not easy. It involved constant movement, hunting, gathering, and adapting to changing environments. Yet their ability to create tools and use natural shelters, such as caves, shows a growing intelligence and adaptability.",
        ],
        imageUrl: [
          {
            src: "/assets/articles/prehistoric/1.jpg",
            caption: "Fernando Amorsolo, Baguio, 1941. Oil on canvas.",
            source: null,
          },
        ],
        imageLocation: "right",
      },
    ],
  },

  {
    type: "sources",
    text: [
      "https://archaeolist.com/sites/the-philippines/rizal-archaeological-site-kalinga",
      "Pioneers in Philippine Archeology, Wilfredo P. Ronquilla, Books- Cagayan National Museum Archives and Research Office. ",
    ],
  },
];
