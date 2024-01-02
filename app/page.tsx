import Link from "next/link"
import { Separator } from "@/components/ui/separator"

type SectionContentElement = {
  title: string
  description?: string
  link: string
}

export default () => {
  const projects = [
    {
      title: "containerised-project-template",
      description: "create containerized projects in a matter of seconds",
      link: "https://github.com"
    },
    {
      title: "roman-numerals-rs",
      description: "easy from-and-to roman numerals in rust",
      link: "https://github.com"
    }
  ]

  const articles = [
    {
      title:
        "Creating a production-ready self-hosted Kubernetes Cluster from scratch on a VPS (IPv6 compatible!)",
      link: "https://medium.com/@ferdinandklr/creating-a-production-ready-self-hosted-kubernetes-cluster-from-scratch-on-a-vps-ipv6-compatible-660aa5018feb"
    }
  ]

  function Section({
    name,
    content
  }: {
    name: string
    content: SectionContentElement[]
  }) {
    return (
      <section>
        {/* section header */}
        <div className="flex items-center">
          <h2 className="mr-4 font-bold">{name}</h2>
          <Separator className="w-fit flex-grow" />
        </div>

        {/* section content */}
        <ul className="mt-4 text-sm *:mb-4">
          {content.map((element, key) => (
            <li key={key}>
              <Link href={element.link} target="_blank">
                › {element.title}
              </Link>
              {element.description && (
                <div className="text-slate-400">{element.description}</div>
              )}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <>
      {/* centered contend */}
      <main className="mx-auto flex max-w-screen-sm flex-col px-5 font-mono tracking-tight text-slate-900">
        {/* growing section */}
        <div>
          {/* whoami */}
          <div className="mb-16 mt-20 md:mt-32">
            <h1 className="mb-1 text-2xl font-bold lowercase leading-none">
              Ferdinand Keller
            </h1>
            <p className="font-light">ai engineer</p>
          </div>

          {/* projects */}
          <Section name="projects" content={projects} />

          {/* articles I wrote */}
          <Section name="articles" content={articles} />
        </div>

        {/* footer details */}
        <footer className="fixed bottom-0 mb-4 text-xs font-light leading-5 text-slate-400">
          code available on{" "}
          <Link
            href="https://github.com/ferdinandkeller/ferdinandkeller.dev"
            target="_blank"
            className="underline"
          >
            github
          </Link>
          .
        </footer>
      </main>
    </>
  )
}
