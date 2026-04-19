import type { TaskKey } from "./site-config";
import type { SitePost } from "./site-connector";

const taskSeeds: Record<TaskKey, string> = {
  listing: "listing",
  classified: "classified",
  article: "article",
  image: "image",
  profile: "profile",
  social: "social",
  pdf: "pdf",
  org: "org",
  sbm: "sbm",
  comment: "comment",
};

const articlePieces: Array<{
  title: string;
  category: string;
  summary: string;
  author: string;
  body: string;
}> = [
  {
    title: "Ferry light at six in the Baltic spring",
    category: "Travel",
    summary:
      "Steel decks, weak coffee, and the particular blue that only exists when cold air meets warmer water.",
    author: "Maren Lindqvist",
    body: `<p>The ferry from Helsinki to Tallinn leaves before the city is fully awake. I boarded with a backpack, a paper ticket, and the vague embarrassment of being the only person who still prints things.</p>
<h2>The hour before the sun wins</h2>
<p>At six, the light is not generous. It is honest. It shows rust on the handrails, salt dried in streaks on the windows, and the slow choreography of crew members who have done this crossing hundreds of times.</p>
<blockquote><p>A crossing is not the trip. It is the breath between two stories.</p></blockquote>
<p>I stood outside until my fingers ached, watching the wake fold and repeat. Later, over cardamom buns that tasted faintly of diesel, I wrote down three sentences I still believe: pack less, arrive early, and never trust a brochure that promises “effortless.”</p>
<h2>What I would do again</h2>
<ul><li>Book a window seat on the port side in spring—you get the long slant of light first.</li><li>Carry a thin down layer; the wind on deck is colder than the forecast suggests.</li><li>Keep your camera in an inside pocket until you are ready; condensation is cruel.</li></ul>`,
  },
  {
    title: "Learning to love the wrong train in Sicily",
    category: "Travel",
    summary:
      "A missed connection in Catania turned into the best meal of the week—once I stopped treating the day like a spreadsheet.",
    author: "Leo Martel",
    body: `<p>I had a plan: train to Agrigento, temple ridge at golden hour, back before dark. Sicily, as usual, had other ideas.</p>
<h2>The platform is a teacher</h2>
<p>The delay was announced in Italian, then repeated in a tone that suggested everyone already knew. I watched a teenager translate for his grandparents while a dog slept through the chaos with enviable professionalism.</p>
<p>When the “wrong” train finally arrived—slower, stopping at every hill town—I almost stayed angry. Then an older man offered me a segment of blood orange and pointed at the window as we climbed.</p>
<blockquote><p>Travel humbles you in the same sentence it rewards you.</p></blockquote>
<h2>Practical notes</h2>
<p>If your itinerary cannot survive a two-hour drift, it is not an itinerary; it is a fantasy with train numbers. Build slack. Carry snacks that do not melt. Say yes to fruit offered by strangers when the carriage is full of families.</p>`,
  },
  {
    title: "A week of breakfasts in Hanoi, ranked honestly",
    category: "Food",
    summary:
      "From phở at plastic stools to French pastries that survived colonial history—morning is when the city tells the truth.",
    author: "Lan Pham",
    body: `<p>Hanoi mornings smell like herbs, exhaust, and optimism. I spent seven days trying to understand breakfast the way locals do—not as a trend, but as a ritual.</p>
<h2>The ranking nobody asked for</h2>
<p><strong>1. Beef phở on a corner where the broth never cools.</strong> The meat was thin enough to read through; the chili was optional but not really.</p>
<p><strong>2. Bánh mì op la eaten standing up.</strong> Egg yolk on wax paper is inconvenient and perfect.</p>
<p><strong>3. Yogurt with black sticky rice.</strong> Sweet, tangy, and somehow still breakfast rather than dessert.</p>
<h2>What surprised me</h2>
<p>How quiet certain alleys become after the first wave of motorbikes. How often “famous” places lose to a grandmother with one pot and a line of schoolkids.</p>
<blockquote><p>If you want the real city, skip the place with a queue of only tourists.</p></blockquote>`,
  },
  {
    title: "What glossy brochures never say about jet lag",
    category: "Lifestyle",
    summary:
      "It is not just sleep—it is appetite, patience, and the weird sadness of being awake when your favorite people are not.",
    author: "Lena Okonkwo",
    body: `<p>Jet lag is treated like a nuisance you can hack with melatonin and willpower. In practice, it is a temporary rearrangement of your personality.</p>
<h2>The emotional layer</h2>
<p>On day two in a new time zone, I once cried at a supermarket because the yogurt aisle felt overwhelming. That is not a joke; it is a reminder that bodies are not laptops you can set to a new clock and expect compliance.</p>
<h2>What actually helped</h2>
<ul><li>Light first thing in the morning, even if the sky is gray.</li><li>Walking until my legs complained—gentler than caffeine loops.</li><li>Eating on local time even when food sounded impossible.</li></ul>
<blockquote><p>Be kind to yourself on the in-between days. They count, too.</p></blockquote>`,
  },
  {
    title: "Walking home from the night market in Oaxaca",
    category: "Photography",
    summary:
      "Smoke, mezcal vapor, and the sound of plastic bags—an ordinary route that still feels cinematic if you slow down.",
    author: "Diego Ríos",
    body: `<p>Oaxaca’s night market is loud in the best way: laughter layered over sizzle, vendors calling, shoes scraping stone. Leaving is when the city softens.</p>
<h2>The walk as a photograph</h2>
<p>I stopped trying to “capture” everything and instead noted sequences: a dog under a table, a child swinging a balloon, a grandmother wrapping tamales in paper that looked older than me.</p>
<p>Photography, at night, is negotiation. Raise ISO and accept grain. Choose one corner and wait for someone to walk through the light.</p>
<h2>Gear I carried</h2>
<p>A small prime lens, a scarf for lens fog, and the discipline to put the camera down for half the walk. Some streets are meant to be remembered, not optimized.</p>`,
  },
];

const imagePieces: Array<{ title: string; category: string; summary: string; author: string }> = [
  {
    title: "Dawn rope lines in a Portuguese fishing harbor",
    category: "Photography",
    summary: "Indigo water, orange floats, and gulls arguing like old colleagues.",
    author: "Inês Carvalho",
  },
  {
    title: "Monsoon steam rising off Jaipur sandstone",
    category: "Travel",
    summary: "Heat after rain turns the fort walls the color of tea.",
    author: "Arjun Mehta",
  },
  {
    title: "Last light on rice terraces, Ifugao",
    category: "Travel",
    summary: "Steps of water catching gold before the valley goes quiet.",
    author: "Maya Santos",
  },
  {
    title: "Snow silence on a Hokkaido side street",
    category: "Lifestyle",
    summary: "Vending machine glow as the only warm punctuation.",
    author: "Kenji Mori",
  },
  {
    title: "Market stacks of citrus and woven bags",
    category: "Food",
    summary: "Color theory taught by vendors who have never read a design book.",
    author: "Camila Voss",
  },
];

const taskTitles: Record<TaskKey, string[]> = {
  listing: [
    "Coastal bike rental co-op",
    "Family-run guesthouse — Valparaíso",
    "Night walk guides (small groups)",
    "Luggage storage near the old station",
    "Repair café for travelers",
  ],
  classified: [
    "Rooftop tent + crossbars",
    "Looking for ride-share: Porto → Santiago",
    "Film camera + two primes",
    "House-sit exchange (June)",
    "Used folding kayak",
  ],
  article: articlePieces.map((a) => a.title),
  image: imagePieces.map((i) => i.title),
  profile: [
    "Nadia El-Amin",
    "Jonas Weber",
    "Studio Far Drift",
    "Collective North Tide",
    "Priya Sundaram",
  ],
  social: [
    "Field note: ferry delays",
    "Call for reader routes — Balkans",
    "Behind the photo: harbor series",
    "New PDF map pack",
    "Contributor office hours",
  ],
  pdf: [
    "Carry-on packing list (temperate)",
    "Slow-ferry route planner",
    "Hostel etiquette one-pager",
    "Photo release checklist",
    "Budget template for multi-city trips",
  ],
  org: [
    "Open Atlas Writers",
    "Harborlight Media",
    "Driftline Collective",
    "Cobalt Field Notes",
    "Zenith Travel Lab",
  ],
  sbm: [
    "Regional rail apps worth keeping",
    "Ferry timetables archive",
    "Small museums with great cafes",
    "Night photography without a tripod",
    "Ethical wildlife watching links",
  ],
  comment: [
    "Reply: Sicily train essay",
    "On jet lag and kids",
    "Thanks for the Hanoi list",
    "Question about Oaxaca night shots",
    "Ferry piece — more routes?",
  ],
};

const taskCategories: Record<TaskKey, string[]> = {
  listing: ["Travel", "Service", "Lifestyle", "Travel", "Service"],
  classified: ["Market", "Travel", "Shopping", "Travel", "Market"],
  article: articlePieces.map((a) => a.category),
  image: imagePieces.map((i) => i.category),
  profile: ["Writer", "Photographer", "Studio", "Collective", "Editor"],
  social: ["Community", "News", "Updates", "Resources", "Events"],
  pdf: ["Guides", "Templates", "Docs", "Guides", "Finance"],
  org: ["Collective", "Studio", "Network", "Partner", "Lab"],
  sbm: ["Resources", "Travel", "Travel", "Photography", "Travel"],
  comment: ["Discussion", "Reply", "Feedback", "Discussion", "Discussion"],
};

const summaryByTask: Record<TaskKey, string> = {
  listing: "Practical local page with hours, contact, and clear details.",
  classified: "Short post from someone on the move.",
  article: "Long-form travel story or essay.",
  image: "Image-led field note or gallery.",
  profile: "Contributor or host profile.",
  social: "Quick update from the community.",
  pdf: "Downloadable guide or worksheet.",
  org: "Partner or collective overview.",
  sbm: "Curated bookmark shelf.",
  comment: "Response tied to a published piece.",
};

const randomFrom = (items: string[], index: number) =>
  items[index % items.length];

const buildImage = (task: TaskKey, index: number) =>
  `https://picsum.photos/seed/${taskSeeds[task]}-${index}/1200/800`;

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getMockPostsForTask = (task: TaskKey): SitePost[] => {
  return Array.from({ length: 5 }).map((_, index) => {
    const title = taskTitles[task][index];
    const category = randomFrom(taskCategories[task], index);
    const slug = slugify(title);

    if (task === "article") {
      const piece = articlePieces[index];
      return {
        id: `${task}-mock-${index + 1}`,
        title: piece.title,
        slug: slugify(piece.title),
        summary: piece.summary,
        content: {
          type: task,
          category: piece.category,
          excerpt: piece.summary,
          author: piece.author,
          description: piece.summary,
          body: piece.body,
        },
        media: [{ url: buildImage(task, index), type: "IMAGE" }],
        tags: ["travel", piece.category.toLowerCase(), "field-notes"],
        authorName: piece.author,
        publishedAt: new Date(Date.now() - index * 86400000 * 4).toISOString(),
      };
    }

    if (task === "image") {
      const piece = imagePieces[index];
      return {
        id: `${task}-mock-${index + 1}`,
        title: piece.title,
        slug: slugify(piece.title),
        summary: piece.summary,
        content: {
          type: task,
          category: piece.category,
          description: piece.summary,
          author: piece.author,
        },
        media: [{ url: buildImage(task, index), type: "IMAGE" }],
        tags: ["photography", piece.category.toLowerCase()],
        authorName: piece.author,
        publishedAt: new Date(Date.now() - index * 86400000 * 3).toISOString(),
      };
    }

    return {
      id: `${task}-mock-${index + 1}`,
      title,
      slug,
      summary: summaryByTask[task],
      content: {
        type: task,
        category,
        location: index % 2 === 0 ? "Lisbon" : "Chiang Mai",
        description: summaryByTask[task],
        website: "https://example.com",
        phone: "+1-415-555-0192",
      },
      media: [{ url: buildImage(task, index), type: "IMAGE" }],
      tags: [task, category],
      authorName: "World Worth Wandering desk",
      publishedAt: new Date().toISOString(),
    };
  });
};
