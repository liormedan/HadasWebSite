import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap"
});

export const metadata = {
  title: "הדס דרור | מנהיגות ערה",
  description:
    "האתר הרשמי של הדס דרור - מנחה ראשית, יזמית ומנטורית לפיתוח מנהיגות אישית וארגונית."
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
