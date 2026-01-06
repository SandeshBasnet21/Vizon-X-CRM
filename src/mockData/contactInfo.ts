import { Mail, Phone, MapPin, Clock, LucideIcon } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon; // 👈 store component reference
  title: string;
  main: string;
  sub: string;
}

export const contactInfoData: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email Us",
    main: "support@karyavaar.com",
    sub: "We’ll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    main: "+1 (555) 000-0000",
    sub: "Mon–Fri from 9am to 6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    main: "123 Business Ave, Suite 100",
    sub: "San Francisco, CA 94102",
  },
  {
    icon: Clock,
    title: "Working Hours",
    main: "Mon–Fri: 9am – 6pm",
    sub: "Weekend: Closed",
  },
];
