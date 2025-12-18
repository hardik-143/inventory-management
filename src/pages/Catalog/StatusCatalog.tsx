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
    caption: "Explore the heights and embrace the thrill.",
    preview:
      "https://i.pinimg.com/474x/10/17/19/1017190716c7e531216d9b78cfcbf748.jpg",
    autoShare: false,
  },
  {
    id: "status-3",
    name: "City Lights",
    caption: "Experience the vibrant nightlife of the city.",
    preview:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    autoShare: true,
  },
];
