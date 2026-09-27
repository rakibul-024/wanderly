import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  Compass,
  Headphones,
  Map,
  Mountain,
  Palmtree,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waves,
} from "lucide-react";

export type Destination = {
  name: string;
  country: string;
  description: string;
  price: number;
  rating: string;
  reviews: number;
  image: string;
  imageAlt: string;
};

export type TravelCategory = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  location: string;
  review: string;
  avatar: string;
  avatarAlt: string;
};

export const destinations: Destination[] = [
  {
    name: "Bali",
    country: "Indonesia",
    description: "Temple mornings, rice terraces & island sunsets.",
    price: 890,
    rating: "4.9",
    reviews: 248,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Traditional Balinese temple framed by lush tropical greenery",
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Whitewashed lanes above the Aegean blue.",
    price: 1240,
    rating: "4.9",
    reviews: 192,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
    imageAlt: "White buildings overlooking the blue sea in Santorini",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    description: "Desert stillness meets a dazzling skyline.",
    price: 760,
    rating: "4.8",
    reviews: 176,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Dubai skyline glowing at sunset",
  },
  {
    name: "Paris",
    country: "France",
    description: "Slow café mornings and timeless boulevards.",
    price: 980,
    rating: "4.8",
    reviews: 221,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Eiffel Tower rising above Paris rooftops",
  },
  {
    name: "Kyoto",
    country: "Japan",
    description: "Lantern-lit streets and quiet bamboo paths.",
    price: 1120,
    rating: "4.9",
    reviews: 164,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Traditional Japanese street in Kyoto at dusk",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    description: "Overwater stays and beautifully blue horizons.",
    price: 1680,
    rating: "5.0",
    reviews: 138,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Overwater villas above a turquoise Maldivian lagoon",
  },
];

export const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Best Price Guarantee",
    description: "Thoughtfully priced trips, with no surprise fees along the way.",
    icon: BadgePercent,
  },
  {
    title: "Handpicked Destinations",
    description: "Handpicked stays and experiences chosen for the way they make you feel.",
    icon: Sparkles,
  },
  {
    title: "Trusted Local Guides",
    description: "Meet brilliant guides who know the little places worth finding.",
    icon: UsersRound,
  },
  {
    title: "24/7 Travel Support",
    description: "Our real humans are one message away, wherever you wander.",
    icon: Headphones,
  },
];

export const categories: TravelCategory[] = [
  {
    title: "Beach",
    description: "Salt air, slow days, and nowhere else to be.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Turquoise waves washing onto a sunlit sandy beach",
    icon: Waves,
  },
  {
    title: "Adventure",
    description: "Take the scenic route. Then keep going.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Dramatic mountain peaks rising into the clouds",
    icon: Mountain,
  },
  {
    title: "Nature",
    description: "Find your kind of quiet in the wild.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Sunlight spilling through a peaceful green forest",
    icon: Palmtree,
  },
  {
    title: "Culture",
    description: "The stories and flavors that stay with you.",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Colorful lanterns illuminating an old city street",
    icon: Compass,
  },
  {
    title: "Luxury",
    description: "Beautiful places, with every detail considered.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Elegant resort pool surrounded by palm trees",
    icon: Sparkles,
  },
  {
    title: "City Tours",
    description: "Get happily lost in somewhere new.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=85",
    imageAlt: "City skyline lit up after sunset",
    icon: Map,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Laurent",
    location: "London, UK",
    review:
      "Wanderly found us the Bali we had dreamed about, and then introduced us to a few places we never would have found ourselves. Every detail felt personal.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85",
    avatarAlt: "Portrait of traveler Sophie Laurent",
  },
  {
    name: "Daniel Kim",
    location: "Toronto, Canada",
    review:
      "Our guide in Kyoto felt more like a friend showing us around. We came home with a camera full of photos and a list of places we already want to revisit.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85",
    avatarAlt: "Portrait of traveler Daniel Kim",
  },
  {
    name: "Amara Johnson",
    location: "New York, USA",
    review:
      "From the first call to our last sunset in Greece, the Wanderly team made everything feel effortless. The little thoughtful touches made all the difference.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=85",
    avatarAlt: "Portrait of traveler Amara Johnson",
  },
];

export const footerDestinations = [
  "Bali, Indonesia",
  "Santorini, Greece",
  "Kyoto, Japan",
  "Maldives",
];
