"use client"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"


export default function Projects() {
  const projects = [
    {
      category: "Web Development",
      items: [
        {
          name: "Club Website",
          description: "Our official website built with Next.js",
          repo: "https://github.com/cs-club/website",
          image: "/project1.png",
        },
        {
          name: "Personal Portfolio Website",
          description: "Each member creates their own portfolio using HTML, CSS, and JavaScript",
          repo: "https://github.com/cs-club/website",
          image: "/html.jpg",
        },
        {
          name: "Club Member Directory",
          description: "A simple website that lists all club members, their roles, and GitHub profiles.",
          repo: "https://github.com/cs-club/website",
          image: "/project1.png",
        },
        {
          name: "Event Registration System",
          description: "A simple form where members can register for club events. \n Use Firebase or a JSON file to store submissions.",
          repo: "https://github.com/cs-club/website",
          image: "/project1.png",
        },
        
      ],
    },
    {
      category: "Cybersecurity",
      items: [
        {
          name: "Pwnagotchi",
          description: "A virtual pet that collects WiFi handshakes for hacking",
          repo: "https://github.com/cs-club/ethical-hacking-lab",
          image: "/pwnagotchi.jpg",
        },
        {
          name: "Ethical Hacking Lab",
          description: "A virtual environment for practicing ethical hacking techniques",
          repo: "https://github.com/cs-club/ethical-hacking-lab",
          image: "/linux.jpg",
        },
        {
          name: "Password Strength Analyzer",
          description: "A tool to evaluate password security",
          repo: "https://github.com/cs-club/password-analyzer",
          image: "/password.jpg",
        },
      ],
    },
    {
      category: "Game Development",
      items: [
        {
          name: "Slope Game",
          description: "A classic endless runner game built from scratch using Java",
          repo: "https://github.com/cs-club/2d-platformer",
          image: "/slope.png",
        },
        {
          name: "2D Platformer",
          description: "A classic platformer game built with Unity",
          repo: "https://github.com/cs-club/2d-platformer",
          image: "/placeholder.svg?height=200&width=300&text=2D+Platformer",
        },
        {
          name: "AR Campus Tour",
          description: "An augmented reality tour of our campus",
          repo: "https://github.com/cs-club/ar-campus-tour",
          image: "/placeholder.svg?height=200&width=300&text=AR+Campus+Tour",
        },
      ],
    },
    {
      category: "Robotics",
      items: [
        {
          name: "Retro Gaming Console",
          description: "A robot that can follow a line using sensors",
          repo: "https://github.com/cs-club/line-follower",
          image: "/arduino.png",
        },
        
      ],
    },
  ]

  return (
    <div>
      <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-4 rounded shadow-md flex flex-col "
          >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6 ">Projects & Initiatives</h1>
        <p className="text-lg mb-8 text-muted-foreground">
          
          Explore our ongoing projects across various domains of Tech. Feel free to contribute to any project
          that interests you!
        </p>
      </div>

      {projects.map((category) => (
        <section key={category.category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={1200}
                    height={800}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
      </motion.div>
    </div>
  )
}

