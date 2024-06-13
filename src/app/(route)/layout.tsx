import type { Metadata } from "next";
import "../ui/globals.css";

export const metadata: Metadata = {
  title: "몬티홀 시뮬레이터",
  description: "선택을 바꿀지 말지는 당신 선택!",
  icons: {
    icon: "/goat.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black min-h-screen min-w-[800px] mx-auto">
        {children}
      </body>
    </html>
  );
}
