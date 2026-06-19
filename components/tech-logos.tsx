export type CompanyLogo = {
  id: string;
  name: string;
  url: string;
};

export const companyLogos: CompanyLogo[] = [
  { id: "spotify", name: "Spotify", url: "https://cdn.simpleicons.org/spotify/ffffff" },
  { id: "airbnb", name: "Airbnb", url: "https://cdn.simpleicons.org/airbnb/ffffff" },
  { id: "stripe", name: "Stripe", url: "https://cdn.simpleicons.org/stripe/ffffff" },
  { id: "notion", name: "Notion", url: "https://cdn.simpleicons.org/notion/ffffff" },
  { id: "figma", name: "Figma", url: "https://cdn.simpleicons.org/figma/ffffff" },
  { id: "discord", name: "Discord", url: "https://cdn.simpleicons.org/discord/ffffff" },
  { id: "slack", name: "Slack", url: "https://cdn.simpleicons.org/slack/ffffff" },
  { id: "nike", name: "Nike", url: "https://cdn.simpleicons.org/nike/ffffff" },
  { id: "vercel", name: "Vercel", url: "https://cdn.simpleicons.org/vercel/ffffff" },
  { id: "twitch", name: "Twitch", url: "https://cdn.simpleicons.org/twitch/ffffff" },
  { id: "linear", name: "Linear", url: "https://cdn.simpleicons.org/linear/ffffff" },
  { id: "adobe", name: "Adobe", url: "https://cdn.simpleicons.org/adobe/ffffff" },
];

// Backwards-compat — page.tsx-д хуучин `techLogos` нэрээр ашигладаг
export const techLogos = companyLogos;
