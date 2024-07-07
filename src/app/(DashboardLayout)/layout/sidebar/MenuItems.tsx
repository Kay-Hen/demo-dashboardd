import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconUsers,
  IconMail,
  IconReport,
  IconCalendar,
  IconSettings,
  IconPhone,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Manage Staff",
    icon: IconUsers,
    href: "/manage/manage-staff",
  },
  {
    id: uniqueId(),
    title: "Visitors",
    icon: IconUsers,
    href: "/visitors",
  },
  {
    id: uniqueId(),
    title: "Clients",
    icon: IconUsers,
    href: "/clients",
  },
  {
    id: uniqueId(),
    title: "Daily Reports",
    icon: IconReport,
    href: "/daily-reports",
  },
  {
    id: uniqueId(),
    title: "Mail",
    icon: IconMail,
    href: "/mail",
  },
  {
    id: uniqueId(),
    title: "Manage Calls",
    icon: IconPhone,
    href: "/manage/manage-calls",
  },
  {
    id: uniqueId(),
    title: "Appointment",
    icon: IconCalendar,
    href: "/appointment",
  },
  {
    id: uniqueId(),
    title: "Administration",
    icon: IconSettings,
    href: "/administration",
  },
];

export default Menuitems;