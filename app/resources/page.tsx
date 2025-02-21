import Link from "next/link"
import { Book, Code, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resources() {
  const resources = [
    {
      category: "Ethical Hacking",
      icon: Shield,
      items: [
        { title: "Introduction to Ethical Hacking", link: "/resources/intro-ethical-hacking" },
        { title: "Network Penetration Testing Basics", link: "/resources/network-pentesting" },
        { title: "Web Application Security", link: "/resources/web-app-security" },
      ],
    },
    {
      category: "Web Development",
      icon: Code,
      items: [
        { title: "HTML & CSS Fundamentals", link: "/resources/html-css-basics" },
        { title: "JavaScript for Beginners", link: "/resources/js-beginners" },
        { title: "Building RESTful APIs", link: "/resources/restful-apis" },
      ],
    },
    {
      category: "Career Resources",
      icon: Book,
      items: [
        { title: "Creating a Tech Resume with LaTeX", link: "/resources/latex-resume" },
        { title: "Preparing for Technical Interviews", link: "/resources/tech-interviews" },
        { title: "Open Source Contribution Guide", link: "/resources/open-source-guide" },
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Resources & Tutorials</h1>
      <p className="text-lg mb-8 text-muted-foreground">
        Explore our collection of guides, tutorials, and resources to enhance your skills in various areas of computer
        science.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <category.icon className="h-6 w-6 mr-2 text-primary" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link} className="text-primary hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

