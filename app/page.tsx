"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { FlipWords } from "@/components/ui/flip-words"



export default function Home() {
  const words = ["Develop", "Design", "Discover", "Lead"];
  return (
    <div className="space-y-12 mt-12">
      
      <section className="text-center relative">
        <Image
          src="/loundon.jpg"
          alt="Tech Club Hero"
          width={1200}
          height={400}
          priority
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center rounded-lg"
            >
            <h1 className="text-4xl font-bold mb-4 text-white ">Welcome to the NVCC Tech Club <br /></h1>
            <div className="flex">
              <p className="text-xl mb-6 text-gray-200">Empowering You to  </p> <FlipWords words={words} className="text-xl mb-6 text-gray-200"/>
            </div>
            <Button asChild>
              <Link href="/aboutus">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            </motion.div>
          </div>
        
      </section>

      <section className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-8">Upcoming Event</h2>
        <div className="bg-background p-4 rounded border">
          <h3 className="text-xl font-medium">Workshop: Building a Full-Stack Web Application</h3>
          <p className="mt-2 text-muted-foreground">
            Join us this Thursday at 2:30 PM in Room LC 302E or via Zoom to learn how to create a modern web app from scratch!
          </p>
          <Link href="/events" className="inline-block mt-4 text-primary hover:underline">
            View all events
          </Link>
        </div>
      </section>

      <section>
              <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-4 rounded shadow-md flex flex-col items-center"
          >
        <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {[
            { name: "Web Development", icon: "/web.png" },
            { name: "Cybersecurity", icon: "/security.png" },
            { name: "Game Development", icon: "/game.png" },
            { name: "Robotics", icon: "/robotics.png" },
            { name: "3D Modeling", icon: "/blender.png" }
          ].map((area) => (
            <div key={area.name} className="bg-card p-4 rounded shadow-md flex flex-col items-center">
              <Image src={area.icon || "/placeholder.svg"} alt={area.name} width={50} height={50} className="mb-2" />
              <h3 className="text-lg font-medium mb-2">{area.name}</h3>
              <p className="text-sm text-muted-foreground text-center">
                Explore projects and resources in {area.name.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
        </div>
        </motion.div>
      </section>

      <section className="text-center">
      <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-4 rounded shadow-md flex flex-col items-center"
          >
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6 text-muted-foreground">
          Connect with fellow enthusiasts, participate in exciting projects, and enhance your skills!
        </p>
        <div className="space-x-4 space-y-4">
        <Button asChild variant="secondary">
          <Link href="/contact">
            Become a Member <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link target="_blank" href="https://discord.gg/VHbs3MrgMC">
            Join the Discord Community <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        </div>
        </motion.div>
      </section>
    </div>
  )
}

