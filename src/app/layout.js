import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {MdMeetingRoom} from "react-icons/md";
import Image from "next/image";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css";
import {HiOutlineDeviceMobile} from "react-icons/hi";
import {IoSettingsOutline} from "react-icons/io5";
import DeviceListing from "@/app/devices/_components/device_listing";
import MeetingsLink from "@/components/nav_links/meetings_link";
import DeviceLink from "@/components/nav_links/device_link"; // Specify weight
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className={"w-full bg-slate-200 grid grid-cols-12"}>
          <div className="col-span-2 bg-primary shadow-md h-screen ">
              <div className="flex flex-col items-center justify-center py-2 mb-5 border-b-third border-b-2">
                  <Image
                      className="dark:invert"
                      src="/MUBASGold.png"
                      alt="Mubas logo"
                      width={80}
                      height={8}
                      priority
                  />
              </div>
           <MeetingsLink/>
              <DeviceLink/>
              
          </div>
          <div className=" col-span-10">
              {children}

          </div>
      </div>
      </body>
    </html>
  );
}
