"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ConnectKitButton } from "connectkit";

export function ClientNavbar() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-20">
        <h1 className="text-2xl font-bold relative mr-12 ">
          EtherGigs{" "}
          <sup className="text-sm font-semibold absolute ml-2 ">
            Client
          </sup>
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/client" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === ("/client")
                      ? "bg-green-300"
                      : ""
                  )}
                >
                  Listed Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/client/ongoing-jobs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === ("/client/ongoing-jobs")
                      ? "bg-green-300"
                      : ""
                  )}
                >
                  Ongoing Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/client/wallet" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === ("/client/wallet")
                      ? "bg-green-300"
                      : ""
                  )}
                >
                  Your Wallet
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <ConnectKitButton /> */}
    </div>
  );
}