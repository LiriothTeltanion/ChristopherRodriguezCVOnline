export type LanguageCode = "en" | "es";

export type LocalizedText = {
  en: string;
  es: string;
};

/**
 * Tracks where a piece of content came from so unverified claims can be
 * displayed with cautious wording (or withheld from headline stats) instead
 * of presented as confirmed fact. See SHOW_UNVERIFIED_METRICS in metrics.ts.
 */
export type ContentVerification =
  "userConfirmed" | "cvReported" | "institutionWebsite" | "verificationRecommended";

export type ProfessionalRole = {
  id: string;
  role: LocalizedText;
  organization: string;
  organizationLabel?: LocalizedText;
  organizationUrl?: string;
  location: LocalizedText;
  workFormat?: LocalizedText;
  dates: LocalizedText;
  startDate?: string;
  endDate?: string | null;
  current: boolean;
  founder?: boolean;
  displayOrder: number;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  achievement?: LocalizedText;
  teachingFocus?: LocalizedText[];
  institutionContext?: LocalizedText;
  attributionNote?: LocalizedText;
  verification: ContentVerification[];
  logo?: string;
  /** Small flag icon rendered next to the location text, when relevant. */
  locationFlag?: "us" | "ve" | "co";
};

export type ProfessionalMetric = {
  id: string;
  value: string;
  label: LocalizedText;
  sourceStatus: ContentVerification;
  featured: boolean;
  verificationNote?: LocalizedText;
  detail?: LocalizedText;
};

export type ExternalLink = {
  id: string;
  label: LocalizedText;
  url: string;
  ariaLabel: LocalizedText;
  verified: boolean;
};

export type ProfessionalService = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type Publication = {
  id: string;
  title: string;
  type: LocalizedText;
};

export type CountryExperience = {
  id: string;
  name: LocalizedText;
  items: LocalizedText[];
};

export type TeachingValue = LocalizedText;

export type EcosystemNode = {
  id: string;
  name: string;
  focus: LocalizedText;
};
