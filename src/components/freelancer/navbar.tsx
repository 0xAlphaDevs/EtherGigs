"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ConnectKitButton } from "connectkit";

export function FreelancerNavbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-20">
        <h1 className="text-2xl font-bold relative mr-12 ">
          EtherGigs{" "}
          <sup className="text-sm font-semibold absolute ml-2 ">Freelancer</sup>
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/freelancer-dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/freelancer-dashboard" ? "bg-green-300" : ""
                  )}
                >
                  Listed Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/freelancer-proposals" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/freelancer-proposals" ? "bg-green-300" : ""
                  )}
                >
                  Your Proposals
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/freelancer-ongoing-jobs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/freelancer-ongoing-jobs"
                      ? "bg-green-300"
                      : ""
                  )}
                >
                  Ongoing Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/freelancer-wallet" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/freelancer-wallet" ? "bg-green-300" : ""
                  )}
                >
                  Your Wallet
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ConnectKitButton />
    </div>
  );
}
