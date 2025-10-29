interface Project {
  title: string;
  logo: string;
  bg?: string;
  website: string;
  role: string;
  start: number | string;
  end?: number | string;
}

type PolaroidRotate =
  | "-2xl"
  | "-xl"
  | "-lg"
  | "-md"
  | "-sm"
  | "-xs"
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

interface Polaroid {
  src: string;
  rotate?: PolaroidRotate;
  size?: "sm" | "md" | "lg";
  label?: { text: string; class?: string };
  pos?: { top?: number; left?: number; bottom?: number; right?: number };
}
