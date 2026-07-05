import { aquaroutineShopUrl } from '../lib/shopUrl'
import { siteImages } from '../lib/siteImages'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Maintenance', href: '#maintenance' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Shop', href: aquaroutineShopUrl },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const services = [
  {
    id: 'planted-tanks',
    title: 'Planted Tanks',
    description:
      'Iwagumi, nature, and Dutch-inspired layouts with curated hardscape, CO₂ systems, and living plant palettes.',
    icon: 'leaf',
    image: siteImages.services['planted-tanks'],
  },
  {
    id: 'koi-ponds',
    title: 'Koi Ponds',
    description:
      'Outdoor and courtyard ponds with natural filtration, stone edging, and balanced ecosystems for healthy koi.',
    icon: 'pond',
    image: siteImages.services['koi-ponds'],
  },
  {
    id: 'rainforest',
    title: 'Rainforest Vivariums',
    description:
      'Indoor tropical biomes with misting rigs, grow lights, and layered planting for a living green wall effect.',
    icon: 'forest',
    image: siteImages.services.rainforest,
  },
  {
    id: 'terrariums',
    title: 'Terrariums',
    description:
      'Closed and open glass worlds with moss, ferns, miniature waterfalls, and warm ambient lighting.',
    icon: 'jar',
    image: siteImages.services.terrariums,
  },
  {
    id: 'maintenance',
    title: 'Setup & Care',
    description:
      'White-glove installation plus scheduled maintenance — water testing and filter servicing.',
    icon: 'tools',
    image: siteImages.services.maintenance,
  },
  {
    id: 'custom',
    title: 'Custom Builds',
    description:
      'One-of-a-kind tanks and enclosures shaped around your room, brand, or architectural vision.',
    icon: 'blueprint',
    image: siteImages.services.custom,
  },
  {
    id: 'store',
    title: 'Full Supply Store',
    description:
      'Hardscape, substrates, livestock, filters, and foods — everything to start or sustain your build.',
    icon: 'store',
    image: siteImages.services.store,
  },
] as const

export const maintenanceIncluded = [
  {
    title: 'Water Chemistry',
    description:
      'pH, GH, KH, ammonia, nitrite, and nitrate logged each visit — with dosing adjustments for planted and livestock tanks.',
  },
  {
    title: 'Filtration Service',
    description:
      'Canister, HOB, and sump media rinsed or replaced on schedule; impellers inspected and intake sponges cleared.',
  },
  {
    title: 'Plant Care',
    description:
      'Trimming, replanting, and removal of melt or algae-covered leaves to preserve layout balance and light penetration.',
  },
  {
    title: 'Algae Management',
    description:
      'Targeted removal of hair, brush, and film algae; flow and nutrient balance reviewed to reduce recurrence.',
  },
  {
    title: 'Livestock Health',
    description:
      'Visual checks on fish, shrimp, and invertebrates; early signs of stress, disease, or aggression noted and reported.',
  },
  {
    title: 'Equipment Checks',
    description:
      'CO₂ regulators, solenoids, lighting timers, misting systems, and auto-dosers tested for correct operation.',
  },
  {
    title: 'Glass & Hardscape',
    description:
      'Interior glass cleaned, hardscape repositioned where needed, and substrate vacuumed in planted zones.',
  },
  {
    title: 'Visit Reports',
    description:
      'After each service you receive a brief summary of parameters, work completed, and any follow-up recommendations.',
  },
] as const

export const maintenanceTankTypes = [
  {
    id: 'planted',
    name: 'Planted Tanks',
    tagline: 'Aquascapes, nano cubes, and high-tech layouts',
    features: [
      'CO₂ and fertiliser dosing reviewed each visit',
      'Plant trimming, replanting, and algae control',
      'Substrate vacuuming and hardscape adjustment',
      'Lighting and flow tuned for healthy growth',
    ],
  },
  {
    id: 'cichlid',
    name: 'Cichlid Tanks',
    tagline: 'African, South American, and mixed-species setups',
    features: [
      'Aggression and territory monitoring',
      'Higher bioload filtration service',
      'Rockwork and cave structure inspection',
      'Water hardness and pH stability checks',
    ],
  },
  {
    id: 'non-planted',
    name: 'Non-Planted Tanks',
    tagline: 'Community, species, and bare-bottom systems',
    features: [
      'Routine glass cleaning and gravel vacuum',
      'Filter media rinse and replacement schedule',
      'Livestock health and feeding assessment',
      'Equipment reliability and leak checks',
    ],
  },
] as const

export const maintenancePackages = [
  {
    id: 'with-consumables',
    name: 'With Consumables',
    tagline: 'Hands-off care — we supply what your tank needs',
    highlight: true,
    features: [
      'Filter media, carbon, and sponges on schedule',
      'Water conditioners and dechlorinators',
      'Plant fertilisers and CO₂ consumables',
      'Fish foods and targeted supplements as agreed',
      'Consumable restocking logged each visit',
    ],
  },
  {
    id: 'without-consumables',
    name: 'Without Consumables',
    tagline: 'Expert labour — you keep your preferred brands',
    highlight: false,
    features: [
      'Full on-site service and water testing',
      'Cleaning, trimming, and equipment checks',
      'You provide consumables; we apply on visit',
      'Ideal for established hobbyists with stock on hand',
      'Flexible scheduling across Bengaluru',
    ],
  },
] as const

export const installationPromo = {
  eyebrow: 'Complimentary Service',
  headline: 'Free Installation on Purchases Above ₹10,000',
  description:
    'Qualifying orders include professional on-site setup — filters, lighting, CO₂ systems, and hardscape — handled by our experienced team at no extra charge.',
  shopLabel: 'Shop Online',
  contactLabel: 'Contact Us',
} as const

export const galleryItems = [
  {
    id: 1,
    title: 'Emerald Iwagumi',
    category: 'Planted Tank',
    image: siteImages.gallery[0],
    span: 'large' as const,
  },
  {
    id: 2,
    title: 'Stone & Moss Terrace',
    category: 'Terrarium',
    image: siteImages.gallery[1],
    span: 'normal' as const,
  },
  {
    id: 3,
    title: 'Courtyard Koi',
    category: 'Koi Pond',
    image: siteImages.gallery[2],
    span: 'normal' as const,
  },
  {
    id: 4,
    title: 'Office Rainforest',
    category: 'Vivarium',
    image: siteImages.gallery[3],
    span: 'normal' as const,
  },
  {
    id: 5,
    title: 'Dutch Garden Layout',
    category: 'Planted Tank',
    image: siteImages.gallery[4],
    span: 'large' as const,
  },
  {
    id: 6,
    title: 'Reception Feature Wall',
    category: 'Custom Build',
    image: siteImages.gallery[5],
    span: 'normal' as const,
  },
  {
    id: 7,
    title: 'Showcase 07',
    category: 'Showcase',
    image: siteImages.gallery[6],
    span: 'normal' as const,
  },
  {
    id: 8,
    title: 'Showcase 08',
    category: 'Showcase',
    image: siteImages.gallery[7],
    span: 'normal' as const,
  },
  {
    id: 9,
    title: 'Showcase 09',
    category: 'Showcase',
    image: siteImages.gallery[8],
    span: 'normal' as const,
  },
  {
    id: 10,
    title: 'Showcase 10',
    category: 'Showcase',
    image: siteImages.gallery[9],
    span: 'normal' as const,
  },
  {
    id: 11,
    title: 'Showcase 11',
    category: 'Showcase',
    image: siteImages.gallery[10],
    span: 'normal' as const,
  },
  {
    id: 12,
    title: 'Showcase 12',
    category: 'Showcase',
    image: siteImages.gallery[11],
    span: 'normal' as const,
  },
  {
    id: 13,
    title: 'Showcase 13',
    category: 'Showcase',
    image: siteImages.gallery[12],
    span: 'normal' as const,
  },
  {
    id: 14,
    title: 'Showcase 14',
    category: 'Showcase',
    image: siteImages.gallery[13],
    span: 'normal' as const,
  },
  {
    id: 15,
    title: 'Showcase 15',
    category: 'Showcase',
    image: siteImages.gallery[14],
    span: 'normal' as const,
  },
  {
    id: 16,
    title: 'Showcase 16',
    category: 'Showcase',
    image: siteImages.gallery[15],
    span: 'normal' as const,
  },
  {
    id: 17,
    title: 'Showcase 17',
    category: 'Showcase',
    image: siteImages.gallery[16],
    span: 'normal' as const,
  },
  {
    id: 18,
    title: 'Showcase 18',
    category: 'Showcase',
    image: siteImages.gallery[17],
    span: 'normal' as const,
  },
  {
    id: 19,
    title: 'Showcase 19',
    category: 'Showcase',
    image: siteImages.gallery[18],
    span: 'normal' as const,
  },
  {
    id: 20,
    title: 'Showcase 20',
    category: 'Showcase',
    image: siteImages.gallery[19],
    span: 'normal' as const,
  },
  {
    id: 21,
    title: 'Showcase 21',
    category: 'Showcase',
    image: siteImages.gallery[20],
    span: 'normal' as const,
  },
  {
    id: 22,
    title: 'Showcase 22',
    category: 'Showcase',
    image: siteImages.gallery[21],
    span: 'normal' as const,
  },
  {
    id: 23,
    title: 'Showcase 23',
    category: 'Showcase',
    image: siteImages.gallery[22],
    span: 'normal' as const,
  },
  {
    id: 24,
    title: 'Showcase 24',
    category: 'Showcase',
    image: siteImages.gallery[23],
    span: 'normal' as const,
  },
  {
    id: 25,
    title: 'Showcase 25',
    category: 'Showcase',
    image: siteImages.gallery[24],
    span: 'normal' as const,
  },
  {
    id: 26,
    title: 'Showcase 26',
    category: 'Showcase',
    image: siteImages.gallery[25],
    span: 'normal' as const,
  },
  {
    id: 27,
    title: 'Showcase 27',
    category: 'Showcase',
    image: siteImages.gallery[26],
    span: 'normal' as const,
  },
  {
    id: 28,
    title: 'Showcase 28',
    category: 'Showcase',
    image: siteImages.gallery[27],
    span: 'normal' as const,
  },
  {
    id: 29,
    title: 'Showcase 29',
    category: 'Showcase',
    image: siteImages.gallery[28],
    span: 'normal' as const,
  },
  {
    id: 30,
    title: 'Showcase 30',
    category: 'Showcase',
    image: siteImages.gallery[29],
    span: 'normal' as const,
  },
  {
    id: 31,
    title: 'Showcase 31',
    category: 'Showcase',
    image: siteImages.gallery[30],
    span: 'normal' as const,
  },
  {
    id: 32,
    title: 'Showcase 32',
    category: 'Showcase',
    image: siteImages.gallery[31],
    span: 'normal' as const,
  },
  {
    id: 33,
    title: 'Showcase 33',
    category: 'Showcase',
    image: siteImages.gallery[32],
    span: 'normal' as const,
  },
  {
    id: 34,
    title: 'Showcase 34',
    category: 'Showcase',
    image: siteImages.gallery[33],
    span: 'normal' as const,
  },
  {
    id: 35,
    title: 'Showcase 35',
    category: 'Showcase',
    image: siteImages.gallery[34],
    span: 'normal' as const,
  },
  {
    id: 36,
    title: 'Showcase 36',
    category: 'Showcase',
    image: siteImages.gallery[35],
    span: 'normal' as const,
  },
  {
    id: 37,
    title: 'Showcase 37',
    category: 'Showcase',
    image: siteImages.gallery[36],
    span: 'normal' as const,
  },
  {
    id: 38,
    title: 'Showcase 38',
    category: 'Showcase',
    image: siteImages.gallery[37],
    span: 'normal' as const,
  },
  {
    id: 39,
    title: 'Showcase 39',
    category: 'Showcase',
    image: siteImages.gallery[38],
    span: 'normal' as const,
  },
] as const

export const productCategories = [
  'Fish',
  'Plants',
  'Tanks',
  'Filters',
  'Hardscape',
  'Food',
  'Accessories',
  'Custom',
] as const

export type ProductCategory = (typeof productCategories)[number]

export const products: Record<
  ProductCategory,
  { name: string; price: string; badge?: string }[]
> = {
  Fish: [
    { name: 'Neon Tetra School (12)', price: '₹480', badge: 'Popular' },
    { name: 'Siamese Algae Eater', price: '₹320' },
    { name: 'Amano Shrimp (6)', price: '₹540', badge: 'New' },
    { name: 'Discus Pair — Select Grade', price: '₹4,800' },
  ],
  Plants: [
    { name: 'Monte Carlo Carpet Pot', price: '₹280' },
    { name: 'Anubias Nana on Driftwood', price: '₹650', badge: 'Staff Pick' },
    { name: 'Bucephalandra Mini', price: '₹420' },
    { name: 'Hemianthus Cuba Tissue Culture', price: '₹380' },
  ],
  Tanks: [
    { name: 'Rimless 60P (60×30×36 cm)', price: '₹8,500' },
    { name: 'Cube 45L with Cabinet', price: '₹12,400', badge: 'Bundle' },
    { name: 'Paludarium Frame 90 cm', price: '₹18,900' },
    { name: 'Nano Shrimp Cube 25L', price: '₹3,200' },
  ],
  Filters: [
    { name: 'Canister Filter 600 L/h', price: '₹6,800' },
    { name: 'Hang-on Back 400 L/h', price: '₹2,400' },
    { name: 'Sponge Filter Set (3)', price: '₹890' },
    { name: 'UV Sterilizer 9W', price: '₹3,100' },
  ],
  Hardscape: [
    { name: 'Dragon Stone — 5 kg Box', price: '₹1,200' },
    { name: 'Spider Wood Branch (M)', price: '₹950', badge: 'Limited' },
    { name: 'River Pebbles — Natural Mix', price: '₹480' },
    { name: 'Seiryu Stone Slab', price: '₹1,650' },
  ],
  Food: [
    { name: 'Premium Shrimp Pellets', price: '₹340' },
    { name: 'Tropical Flake Blend', price: '₹280' },
    { name: 'Frozen Bloodworm Cubes', price: '₹420' },
    { name: 'Koi Growth Formula 2 kg', price: '₹1,890' },
  ],
  Accessories: [
    { name: 'CO₂ Regulator + Solenoid', price: '₹4,200' },
    { name: 'LED Aquascape Light 45 cm', price: '₹5,600', badge: 'Best Seller' },
    { name: 'Aquatic Tool Kit (5 pc)', price: '₹1,100' },
    { name: 'Auto Doser — 3 Channel', price: '₹7,800' },
  ],
  Custom: [
    { name: 'Consultation — 60 min', price: '₹1,500' },
    { name: 'Hardscape Design Package', price: '₹8,000' },
    { name: 'Full Room Installation', price: 'From ₹45,000' },
    { name: 'Annual Maintenance Plan', price: 'Contact for quote' },
  ],
}

export const stats = [
  { value: '500+', label: 'Installations' },
  { value: '1,000+', label: 'Clients Served' },
] as const

const shopAddress =
  '1/95, National Park Road, near Rajarajeshwari Temple, Bannerughatta, Bengaluru, Karnataka 560083'

const mapDirectionsUrl = 'https://maps.app.goo.gl/1eKSi7U5ho6gYPGK8'

export const contact = {
  address: shopAddress,
  mapEmbedUrl:
    'https://maps.google.com/maps?q=12.8110838,77.578329&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapDirectionsUrl,
  phones: ['+91 994 570 1197', '+91 761 929 1197'],
  email: 'rainforestaquariumbangalore@gmail.com',
  hours: 'Mon–Sat 10:00–19:00 · Sun 10:00–17:00',
} as const
