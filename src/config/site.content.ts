import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Slow travel · honest dispatches',
  },
  footer: {
    tagline: 'Stories from the road, told with care',
  },
  hero: {
    badge: 'Fresh dispatches',
    title: ['Places worth the detour,', 'told by people who went.'],
    description:
      'We publish thoughtful travel writing and image-led field notes—ferry timetables, neighborhood walks, small mistakes, and the details that never make it onto a postcard.',
    primaryCta: {
      label: 'Read latest stories',
      href: '/articles',
    },
    secondaryCta: {
      label: 'Browse field photos',
      href: '/image-sharing',
    },
    searchPlaceholder: 'Search routes, cities, photo essays, and guides',
    focusLabel: 'Focus',
    featureCardBadge: 'rotating cover',
    featureCardTitle: 'The homepage follows what we have published most recently.',
    featureCardDescription:
      'Featured photography and stories refresh visually while the underlying platform behavior stays the same.',
  },
  home: {
    metadata: {
      title: 'World Worth Wandering — travel stories & field notes',
      description:
        'Long-form travel essays, photo essays, and practical notes from the road—written for readers who care about context, not just captions.',
      openGraphTitle: 'World Worth Wandering — travel stories & field notes',
      openGraphDescription:
        'Independent travel writing and photography from people who move slowly and look closely.',
      keywords: [
        'travel writing',
        'slow travel',
        'photo essays',
        'travel stories',
        'field notes',
        'independent travel',
      ],
    },
    introBadge: 'What we publish',
    introTitle: 'A calmer home for travel stories and the images that carry them.',
    introParagraphs: [
      'World Worth Wandering is built around reading: long routes, short observations, and photo essays that treat a place as more than a backdrop.',
      'Articles and images live side by side so you can start with words, follow a visual thread, or do the opposite—without jumping between unrelated templates.',
      'Whether you are planning a trip, remembering one, or simply traveling from your desk, the goal is the same—clear writing, generous spacing, and zero directory clutter.',
    ],
    sideBadge: 'Why it feels different',
    sidePoints: [
      'Editorial typography and spacing tuned for long reading sessions.',
      'Stories and field photos share one visual language—not two competing skins.',
      'Motion stays light: small fades and shifts, nothing that fights the text.',
      'Fast pages: CSS-first effects, no heavy animation libraries.',
    ],
    primaryLink: {
      label: 'Open stories',
      href: '/articles',
    },
    secondaryLink: {
      label: 'See field photos',
      href: '/image-sharing',
    },
  },
  cta: {
    badge: 'Join the list',
    title: 'Get one slow-travel letter when we publish something worth your Sunday.',
    description:
      'No daily blasts—just occasional notes when a new route, essay, or photo series is ready. You can leave anytime.',
    primaryCta: {
      label: 'Create a free account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Write to us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'New entries in this section, newest first.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Travel stories & essays',
    description: 'Long-form travel writing, route notes, and essays from the road.',
  },
  listing: {
    title: 'Listings',
    description: 'Discoverable pages and structured listings across topics.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Short posts, offers, and timely notices.',
  },
  image: {
    title: 'Field photos & visual essays',
    description: 'Image-led dispatches, galleries, and scenes from places we have visited.',
  },
  profile: {
    title: 'Profiles',
    description: 'Writers, hosts, and contributors behind the stories.',
  },
  sbm: {
    title: 'Saved links & resources',
    description: 'Curated bookmarks and reference lists.',
  },
  pdf: {
    title: 'Downloads & PDFs',
    description: 'Guides, maps, and printable resources.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings when you need a structured page, not a story',
    paragraphs: [
      'Some information works better as a clear, scannable page—hours, locations, and practical details without narrative padding.',
      'Listings stay available alongside our travel stories so supporting context does not live on a separate product.',
      'Use this section when you are looking for something specific; use stories when you want atmosphere and sequence.',
    ],
    links: [
      { label: 'Travel stories', href: '/articles' },
      { label: 'Field photos', href: '/image-sharing' },
      { label: 'Classifieds', href: '/classifieds' },
    ],
  },
  article: {
    title: 'Stories built for reading, not skimming',
    paragraphs: [
      'This is the heart of World Worth Wandering: essays, route diaries, and explainers written for people who enjoy a little length.',
      'We care about pacing—short sections when energy is high, longer passages when a place deserves room.',
      'Pick a category to narrow the shelf, or start with the lead story on the homepage and wander from there.',
    ],
    links: [
      { label: 'Field photos', href: '/image-sharing' },
      { label: 'Search the site', href: '/search' },
      { label: 'PDF downloads', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Short posts for timely, lightweight updates',
    paragraphs: [
      'Classifieds cover the quick stuff—gear for sale, ride shares, last-minute meetups—without pretending to be magazine features.',
      'They sit in the same ecosystem as stories and listings so you can move between formats without learning a new interface.',
      'Filter by category when you are in a hurry; follow links into longer articles when you want depth.',
    ],
    links: [
      { label: 'Stories', href: '/articles' },
      { label: 'Listings', href: '/listings' },
      { label: 'Profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'When the image leads, the caption follows',
    paragraphs: [
      'Field photos are for light, texture, and sequence—markets at dawn, ferry decks, hotel windows after rain.',
      'These posts are meant to be browsed slowly, then opened when you want the full frame.',
      'They pair naturally with our written pieces; many routes start as images before they become essays.',
    ],
    links: [
      { label: 'Read stories', href: '/articles' },
      { label: 'Listings', href: '/listings' },
      { label: 'Classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'People behind the bylines',
    paragraphs: [
      'Profiles introduce contributors, hosts, and partners—who they are, what they cover, and where their work tends to roam.',
      'They are trust anchors: a way to connect a voice to a place before you commit to a long read.',
      'Jump from a profile into their latest story or photo set whenever you want more context.',
    ],
    links: [
      { label: 'Stories', href: '/articles' },
      { label: 'Field photos', href: '/image-sharing' },
      { label: 'Listings', href: '/listings' },
    ],
  },
  sbm: {
    title: 'Shelves of links we actually reopen',
    paragraphs: [
      'Bookmark collections gather ferry PDFs, regional blogs, transit apps, and other tabs that usually die in the browser.',
      'The layout stays text-forward so you can scan titles and notes without thumbnail noise.',
      'Use them as a launch pad into longer reading elsewhere on the site.',
    ],
    links: [
      { label: 'Stories', href: '/articles' },
      { label: 'Listings', href: '/listings' },
      { label: 'PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'Documents you can save offline',
    paragraphs: [
      'PDFs host maps, packing lists, printable itineraries, and other files that are easier to carry than another open tab.',
      'They complement essays: read the narrative here, tuck the checklist in your bag.',
      'Browse by category when you need something practical in a hurry.',
    ],
    links: [
      { label: 'Stories', href: '/articles' },
      { label: 'Listings', href: '/listings' },
      { label: 'Profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short signals from the community',
    paragraphs: [
      'Brief updates highlight what is new without asking for a full article every time.',
      'They work best as bridges—pointing to stories, photos, or resources worth a second look.',
      'Treat them as a light rhythm between longer publishes.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Stories', href: '/articles' },
      { label: 'PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Responses tied to the piece',
    paragraphs: [
      'Comments stay attached to articles so discussion lives next to the words it refers to.',
      'We moderate lightly for spam and abuse; disagreement is fine, cruelty is not.',
      'After commenting, keep exploring related stories from the same region or theme.',
    ],
    links: [
      { label: 'Stories', href: '/articles' },
      { label: 'Listings', href: '/listings' },
      { label: 'Classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations & partners',
    paragraphs: [
      'Organization pages group collaborators, sponsors, and editorial partners in one structured place.',
      'They connect to listings and stories when a trip or series involves more than one name.',
      'Use them to understand who backs a project before you dive into the content.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Stories', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
