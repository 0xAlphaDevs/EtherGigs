export default function GigsterDashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col justify-between px-8 py-4 ">
      {children}
    </section>
  )
}