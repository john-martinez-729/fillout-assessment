import {
  BsFileTextFill,
  BsFillBookFill,
  BsFillCheckCircleFill,
  BsFillEyeFill,
  BsCreditCard2BackFill,
  BsFillLockFill,
  BsCalendar2Fill,
} from "react-icons/bs";
import { CSSProperties } from "react";

export const pageTypeMeta = {
  form: {
    label: "Form",
    description: "Page to collect user input",
    icon: BsFileTextFill,
    color: "rgb(245, 158, 11)",
    backgroundColor: "rgb(255, 251, 235)",
    premium: false,
  },
  cover: {
    label: "Cover",
    description: "Welcome users to your form",
    icon: BsFillBookFill,
    color: "rgb(14, 165, 233)",
    backgroundColor: "rgb(240, 249, 255)",
    premium: false,
  },
  ending: {
    label: "Ending",
    description: "Show a thank you page or redirect users",
    icon: BsFillCheckCircleFill,
    color: "rgb(244, 63, 93)",
    backgroundColor: "rgb(255, 241, 242)",
    premium: false,
  },
  review: {
    label: "Review",
    description: "Let users review their submission",
    icon: BsFillEyeFill,
    color: "rgb(168, 85, 247)",
    backgroundColor: "rgb(250, 245, 255)",
    premium: false,
  },
  payment: {
    label: "Payment",
    description: "Collect payments with Stripe",
    icon: BsCreditCard2BackFill,
    color: "rgb(236, 72, 153)",
    backgroundColor: "rgb(253, 242, 248)",
    premium: false,
  },
  login: {
    label: "Login",
    description: "Let users login with email, password or SSO",
    icon: BsFillLockFill,
    color: "rgb(34, 197, 94)",
    backgroundColor: "rgb(240, 253, 244)",
    premium: true,
  },
  scheduling: {
    label: "Scheduling",
    description: "Book meetings on your calendar",
    icon: BsCalendar2Fill,
    color: "rgb(55, 65, 81)",
    backgroundColor: "rgb(249, 250, 251)",
    premium: false,
  },
} as const;

export type PageTypeKey = keyof typeof pageTypeMeta;

export type PageType = {
  label: string;
  description: string;
  iconKey: PageTypeKey;
  iconStyle: CSSProperties;
  premium?: boolean;
};

export const pageTypes: PageType[] = (
  Object.keys(pageTypeMeta) as PageTypeKey[]
).map((key) => {
  const { label, description, color, backgroundColor, premium } =
    pageTypeMeta[key];
  return {
    label,
    description,
    iconKey: key,
    premium,
    iconStyle: {
      color,
      backgroundColor,
      borderColor: color,
    },
  };
});
