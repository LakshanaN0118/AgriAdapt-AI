/* =========================================================================
   AgriAdapt AI — Local RAG Knowledge Base
   -------------------------------------------------------------------------
   A simple, structured knowledge base derived exclusively from the
   AgriAdapt AI project material (index.html).

   Purpose : local retrieval-augmented generation (RAG) — no external
             APIs or libraries required.
   Structure: each entry has a topic, an array of keywords, and a short
              factual description sourced directly from project material.
   ========================================================================= */

const KNOWLEDGE_BASE = [

  /* ── Hidden Hunger ───────────────────────────────────────────────────── */
  {
    topic: "Hidden Hunger",
    keywords: [
      "hidden hunger", "micronutrient deficiency", "malnutrition",
      "iron", "zinc", "vitamin a", "SDG 2", "zero hunger",
      "food security", "anaemia"
    ],
    description:
      "Hidden hunger refers to micronutrient deficiency — a form of " +
      "malnutrition where people consume enough calories but lack " +
      "essential vitamins and minerals such as iron, zinc, and vitamin A. " +
      "It undermines immunity, cognitive development, and growth without " +
      "visible signs of starvation, and is a core challenge addressed by " +
      "SDG 2 (Zero Hunger). Biofortified crops, diverse diets, and " +
      "targeted crop selection are key responses."
  },

  /* ── Iron / Anaemia ──────────────────────────────────────────────────── */
  {
    topic: "Iron / Anaemia",
    keywords: [
      "iron", "iron deficiency", "anaemia", "non-haem iron",
      "biofortified", "dark leafy greens", "legumes", "women", "children",
      "micronutrient", "blood", "haemoglobin"
    ],
    description:
      "Iron-deficiency anaemia is prevalent, particularly among women and " +
      "children. It impairs growth, immunity, and cognitive development. " +
      "Biofortified crops, dark leafy greens, and legumes rich in " +
      "non-haem iron are recommended to address this gap. Crops such as " +
      "pearl millet, cowpea, quinoa, faba bean, and moringa are noted for " +
      "their iron content in the project material. Dried moringa leaves " +
      "are described as containing significantly more iron than spinach."
  },

  /* ── Zinc Deficiency ─────────────────────────────────────────────────── */
  {
    topic: "Zinc Deficiency",
    keywords: [
      "zinc", "zinc deficiency", "immune function", "child development",
      "zinc-biofortified", "legumes", "micronutrient", "dietary diversity",
      "cowpea", "quinoa", "millet", "barley"
    ],
    description:
      "Zinc deficiency affects immune function and child development. " +
      "Zinc-biofortified crops, legumes, and diverse diets are the " +
      "recommended approach to closing this micronutrient gap. Crops " +
      "highlighted for their zinc content in the project material include " +
      "pearl millet, cowpea, sorghum, quinoa, faba bean, and barley."
  },

  /* ── Provitamin A ────────────────────────────────────────────────────── */
  {
    topic: "Provitamin A",
    keywords: [
      "vitamin a", "provitamin a", "vitamin a deficiency", "blindness",
      "immune suppression", "orange-fleshed", "sweet potato", "OFSP",
      "dark leafy vegetables", "biofortified", "moringa", "winged bean"
    ],
    description:
      "Vitamin A deficiency causes preventable blindness and immune " +
      "suppression. Orange-fleshed crops, dark leafy vegetables, and " +
      "biofortified varieties are key solutions. Orange-fleshed sweet " +
      "potato (OFSP) is a proven biofortification solution: a single " +
      "medium OFSP can provide over 100% of a child's daily vitamin A " +
      "requirement. Moringa and winged bean are also noted as sources of " +
      "vitamin A in the project material."
  },

  /* ── Drought ─────────────────────────────────────────────────────────── */
  {
    topic: "Drought",
    keywords: [
      "drought", "water scarcity", "rainfall", "rain-fed", "dryland",
      "drought-tolerant", "water-efficient", "dry spell", "arid",
      "semi-arid", "heat", "soil moisture"
    ],
    description:
      "Drought is a severe threat to staple crop yields, causing " +
      "widespread caloric and economic losses across rain-fed farming " +
      "systems. Water-efficient or drought-tolerant varieties are " +
      "essential. Recommended crops include pearl millet, sorghum, " +
      "cowpea, orange-fleshed sweet potato, cassava, and drought-tolerant " +
      "maize (DTMA varieties). These crops are adapted to low-rainfall, " +
      "high-temperature environments and low-fertility soils where " +
      "conventional staples fail."
  },

  /* ── Extreme Heat ────────────────────────────────────────────────────── */
  {
    topic: "Extreme Heat",
    keywords: [
      "heat", "extreme heat", "high temperature", "heat stress",
      "heat-tolerant", "short growing cycle", "grain filling",
      "pest pressure", "maturation", "climate risk"
    ],
    description:
      "High temperatures accelerate crop maturation, reduce grain " +
      "filling, and increase pest pressure. Heat-tolerant varieties with " +
      "short growing cycles are prioritised. Crops recommended under " +
      "extreme heat in the project material include sorghum, cowpea, " +
      "orange-fleshed sweet potato, and pearl millet. Cowpea is noted as " +
      "tolerating high temperatures and low rainfall, and is suitable for " +
      "protein and zinc-deficient populations facing heat stress."
  },

  /* ── Flooding ────────────────────────────────────────────────────────── */
  {
    topic: "Flooding",
    keywords: [
      "flood", "flooding", "submergence", "waterlogged", "flood-tolerant",
      "anaerobic", "SUB1", "flood-prone", "tidal", "coastal", "wetland"
    ],
    description:
      "Flooding can destroy root systems, cause anaerobic soil conditions, " +
      "and spread crop disease. Flood-tolerant or elevated-bed cultivation " +
      "strategies are needed. Key flood-adapted crops in the project " +
      "material include Sub1A flood-tolerant rice (e.g. Swarna-Sub1, which " +
      "carries the SUB1 gene enabling submergence survival), taro, and " +
      "winged bean. Salinity-tolerant coastal rice varieties (e.g. Pokkali, " +
      "BRRI dhan67) are recommended for tidal flood plains with saltwater " +
      "intrusion."
  },

  /* ── Biofortification ────────────────────────────────────────────────── */
  {
    topic: "Biofortification",
    keywords: [
      "biofortification", "biofortified", "nutrient-dense", "OFSP",
      "orange-fleshed sweet potato", "vitamin a", "iron", "zinc",
      "micronutrient", "crop breeding", "fortified", "nutritional"
    ],
    description:
      "Biofortification is the process of increasing the nutritional " +
      "value of crops through breeding or agronomic practices. It is a " +
      "key strategy for addressing hidden hunger. In the project material, " +
      "orange-fleshed sweet potato (OFSP) is highlighted as a proven " +
      "biofortification solution for vitamin A deficiency. Zinc-biofortified " +
      "crops are recommended for zinc deficiency. Fortified maize flour is " +
      "described as an effective vehicle for iron, zinc, and vitamin A " +
      "supplementation at population scale."
  },

  /* ── Climate Resilience ──────────────────────────────────────────────── */
  {
    topic: "Climate Resilience",
    keywords: [
      "climate resilience", "climate-resilient", "climate adaptation",
      "climate risk", "resilient crops", "stress-tolerant",
      "climate change", "adaptive", "food security", "smallholder"
    ],
    description:
      "Climate resilience in agriculture refers to the capacity of crops " +
      "and farming systems to withstand and recover from climate shocks " +
      "such as drought, flooding, extreme heat, salinity, frost, and soil " +
      "erosion. The project prioritises crops that are adapted to specific " +
      "climate risks while also addressing nutritional gaps — combining " +
      "stress tolerance with biofortification. Strategies include selecting " +
      "varieties with short growing cycles, deep root systems, submergence " +
      "tolerance, and heat hardiness."
  },

  /* ── Sustainable Agriculture ─────────────────────────────────────────── */
  {
    topic: "Sustainable Agriculture",
    keywords: [
      "sustainable agriculture", "sustainability", "conservation agriculture",
      "intercropping", "crop rotation", "nitrogen-fixing", "agroforestry",
      "soil health", "ground cover", "organic matter", "low-input",
      "SDG 2", "zero hunger", "smallholder"
    ],
    description:
      "Sustainable agriculture practices in the project material include: " +
      "intercropping cereals with nitrogen-fixing legumes (e.g. millet " +
      "with cowpea, maize with bean or cowpea); conservation agriculture " +
      "with minimum tillage, permanent soil cover, and crop rotation; " +
      "agroforestry using moringa or taro with nitrogen-fixing trees; " +
      "System of Rice Intensification (SRI) to reduce water use; cover " +
      "cropping with vetiver grass and mucuna to restore degraded soils; " +
      "and retaining crop residues as mulch to reduce moisture loss and " +
      "prevent erosion. These practices reduce synthetic fertiliser needs, " +
      "improve soil health, and support long-term food security."
  },

];

/* =========================================================================
   Retrieval helper
   -------------------------------------------------------------------------
   Simple keyword-overlap search. Returns entries sorted by the number of
   query words that match an entry's keywords or topic (case-insensitive).
   No external libraries required.
   ========================================================================= */

/**
 * Search the knowledge base for entries relevant to a query string.
 * @param {string} query  - Free-text query from the user.
 * @param {number} topK   - Maximum number of results to return (default 3).
 * @returns {Array<{entry: object, score: number}>} Scored, sorted results.
 */
function searchKnowledgeBase(query, topK = 3) {
  if (!query || typeof query !== "string") return [];

  const tokens = query
    .toLowerCase()
    .split(/\W+/)
    .filter(t => t.length > 1);

  const scored = KNOWLEDGE_BASE.map(entry => {
    const haystack = [
      entry.topic.toLowerCase(),
      ...entry.keywords.map(k => k.toLowerCase()),
      entry.description.toLowerCase(),
    ].join(" ");

    const score = tokens.reduce((sum, token) => {
      return sum + (haystack.includes(token) ? 1 : 0);
    }, 0);

    return { entry, score };
  });

  return scored
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
