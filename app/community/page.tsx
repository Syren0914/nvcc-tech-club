"use client"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Gamepad } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Community() {
  return (
    <div className="space-y-12 mt-12">
      <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-4 rounded shadow-md flex flex-col "
          >
      <section>
        <h1 className="text-4xl font-bold mb-6">Community & Engagement</h1>
        <p className="text-lg mb-4 text-muted-foreground">
          Join our vibrant community of tech enthusiasts! Engage in discussions, participate in fun
          activities, and connect with like-minded individuals.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-6 w-6 mr-2 text-primary" />
            Discord Server
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/discord.png"
            alt="Forum Screenshot"
            width={1600}
            height={800}
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <p className="mb-4 text-muted-foreground">
            Engage in thought-provoking discussions, ask questions, and share your knowledge with fellow members.
          </p>
          <Link href="/https://discord.gg/VHbs3MrgMC" className="text-primary hover:underline">
            Join our Discord Server
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Gamepad className="h-6 w-6 mr-2 text-primary" />
            Minecraft Server
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/minecraft.webp"
            alt="Minecraft Server"
            width={1600}
            height={800}
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <p className="mb-4 text-muted-foreground">
            Join our Minecraft server and collaborate on building amazing structures or participate in coding challenges
            within the game!
          </p>
          <p>
            <strong>Server Address:</strong> mc.techclub.nvcc.edu  - not active
          </p>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-6 w-6 mr-2 text-primary" />
            Affiliated Clubs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/placeholder.svg?height=200&width=400&text=Affiliated+Clubs"
            alt="Affiliated Clubs"
            width={400}
            height={200}
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <p className="mb-4 text-muted-foreground">
            We collaborate with other clubs to bring you interdisciplinary events and projects.
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="https://music.university.edu" className="text-primary hover:underline">
                University Music Club
              </Link>
            </li>
            <li>
              <Link href="https://robotics.university.edu" className="text-primary hover:underline">
                Robotics Society
              </Link>
            </li>
            <li>
              <Link href="https://entrepreneurship.university.edu" className="text-primary hover:underline">
                Entrepreneurship Club
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card> */}
      </motion.div>
    </div>
  )
}

