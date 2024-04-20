import { ClientNavbar } from "@/components/clients/navbar"
import { Providers } from "@/components/home/providers"

export default function ClientDashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col justify-between px-8 py-4 ">
      <ClientNavbar />
      {children}
    </section>
  )
}