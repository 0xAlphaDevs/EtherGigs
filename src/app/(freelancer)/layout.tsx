import { FreelancerNavbar } from "@/components/freelancer/navbar"

export default function FreelancerDashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col justify-between px-8 py-4 ">
      <FreelancerNavbar />
      {children}
    </section>
  )
}