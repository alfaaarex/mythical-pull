import { IconType } from "react-icons";

import {
  FiArrowUpRight,
  FiLink,
  FiExternalLink,
  FiMail,
  FiCalendar,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiGlobe,
  FiNavigation2,
} from "react-icons/fi";

import {
  FiHome,
  FiUser,
  FiLayers,
  FiInbox,
  FiImage,
} from "react-icons/fi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: FiArrowUpRight,
  arrowRight: FiArrowRight,
  email: FiMail,
  globe: FiGlobe,
  person: FiUser,
  grid: FiLayers,
  book: FiInbox,
  openLink: FiLink,
  calendar: FiCalendar,
  home: FiHome,
  gallery: FiImage,
  discord: FaDiscord,
  eye: FiEye,
  eyeOff: FiEyeOff,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: FiExternalLink,
  document: FiFileText,
  rocket: FiNavigation2,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
