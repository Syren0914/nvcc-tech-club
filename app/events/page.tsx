"use client"
import Image from "next/image"
import { Calendar, MapPin, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Events() {
  const events = [
    {
      title: "Weekly Club Meeting",
      date: "Every Thursday, 2:30 PM",
      location: "Room 301E, LC Building",
      description: "Our regular weekly meeting to discuss ongoing projects and club activities.",
      type: "in-person",
      image: "/meeting.jpg",
    },
    {
      title: "How to 3D model",
      date: "Every Thursday, 2:30 PM",
      location: "Room 301E, LC Building",
      description: "Learn the basics of 3D modeling and create your own 3D models.",
      type: "in-person",
      image: "/blender2.jpg",
    },
    {
      title: "Workshop: How to Build a Server",
      date: "March 15, 2025, 6:00 PM",
      location: "Zoom",
      description: "Learn the basics of setting up and configuring a server for web applications.",
      type: "online",
      image: "/building.webp",
    },
    {
      title: "Hackathon: 24-Hour Code Challenge",
      date: "May 1-2, 2025",
      location: "University Student Center",
      description: "Join us for an exciting 24-hour coding challenge. Great prizes to be won!",
      type: "in-person",
      image: "/hackathons.jpg",
    },
    {
      title: "Field Trip: Data Center Visit",
      date: "May 10, 2025, 10:00 AM",
      location: "TechCorp Data Center",
      description:
        "A unique opportunity to tour a state-of-the-art data center and learn about large-scale computing infrastructure.",
      type: "in-person",
      image: "/datacenter.webp",
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
      <h1 className="text-4xl font-bold mb-6">Events & Meetings</h1>
      <p className="text-lg mb-8 text-muted-foreground">
        Stay up-to-date with our upcoming events, workshops, and meetings. Don&apos;t miss out on these opportunities to
        learn and connect!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={1200}
                height={800}
                className="w-full h-[200px] object-cover rounded-t-lg mb-4"
              />
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground mt-1">
                  {event.type === "in-person" ? (
                    <MapPin className="h-5 w-5 mr-2" />
                  ) : (
                    <Video className="h-5 w-5 mr-2" />
                  )}
                  <span>{event.location}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </motion.div>
    </div>
  )
}

