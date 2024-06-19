import {
  BarChart4,
  CalendarDays,
  LibraryBig,
  MessageSquareDiff,
  StarIcon,
  UsersRound,
} from "lucide-react";

const size = 33;

export const features = [
  {
    title: "Collections",
    description:
      "Keep track of your favorite Games. Create lists of your favorite Games.",
    icon: <LibraryBig size={size} />,
    isAvailable: true,
  },
  {
    title: "Rete",
    description: "Rate your favorite Games. Share your ratings with others.",
    icon: <StarIcon size={size} />,
    isAvailable: true,
  },
  {
    title: "Review",
    description:
      "Review your favorite Games. tell others what you like or dislike.",
    icon: <MessageSquareDiff size={size} />,
    isAvailable: true,
  },
  {
    title: "Stats",
    description:
      "Do you like stats? see how many Games you have played, how much time you have sinked into games, and much more.",
    icon: <BarChart4 size={size} />,
    isAvailable: true,
  },
  {
    title: "Community",
    description:
      "A community of users who love Games. Come join us! we would love to have you!",
    icon: <UsersRound size={size} />,
    isAvailable: true,
  },
  {
    title: "Calendar",
    description: "See when your favorite games will be released.",
    icon: <CalendarDays size={size} />,
    isAvailable: true,
  },
];
