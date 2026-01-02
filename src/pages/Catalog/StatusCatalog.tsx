export type StatusItem = {
  id: string;
  name: string;
  caption?: string;
  preview: string;
  autoShare: boolean;
};

export const initialStatuses: StatusItem[] = [
  {
    id: "status-1",
    name: "Summer Vibes",
    caption: "Enjoy the sunny days with vibrant colors!",
    preview:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-2",
    name: "Mountain Adventure",
    caption:
      "Experience the vibrant nightlife of the city and its charm. Explore the heights and embrace the thrill. Experience the vibrant nightlife of the city and its charm.",
    preview:
      "https://i.pinimg.com/474x/10/17/19/1017190716c7e531216d9b78cfcbf748.jpg",
    autoShare: false,
  },
  {
    id: "status-3",
    name: "City Lights",
    caption:
      "Experience the vibrant nightlife of the city and its charm. Explore the heights and embrace the thrill. Experience the vibrant nightlife of the city and its charm.",
    preview:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-4",
    name: "Ocean Breeze",
    caption:
      "Experience the vibrant nightlife of the city and its charm. Explore the heights and embrace the thrill. Experience the vibrant nightlife of the city and its charm.",
    preview:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-5",
    name: "Forest Dreams",
    caption:
      "Experience the vibrant nightlife of the city and its charm. Explore the heights and embrace the thrill. Experience the vibrant nightlife of the city and its charm.",
    preview:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    autoShare: false,
  },
  {
    id: "status-6",
    name: "Desert Sunset",
    caption:
      "Experience the vibrant nightlife of the city and its charm. Explore the heights and embrace the thrill. Experience the vibrant nightlife of the city and its charm.",
    preview:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-7",
    name: "Northern Lights",
    caption: "Chase the magical Aurora Borealis in the sky.",
    preview:
      "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-8",
    name: "Tropical Paradise",
    caption: "Escape to exotic tropical island getaways.",
    preview:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    autoShare: false,
  },
  {
    id: "status-9",
    name: "Urban Exploration",
    caption: "Discover hidden gems in the urban landscape.",
    preview:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
  {
    id: "status-10",
    name: "Autumn Leaves",
    caption: "Witness the stunning colors of fall season.",
    preview:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    autoShare: false,
  },
  {
    id: "status-11",
    name: "Winter Wonder",
    caption: "Experience the magical winter snow landscape.",
    preview:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
];
