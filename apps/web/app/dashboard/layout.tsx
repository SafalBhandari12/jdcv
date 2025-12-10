import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | matchMinds",
  description: "Smart candidate matching dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
