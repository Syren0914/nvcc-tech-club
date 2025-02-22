"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"


export default function About() {
  const teamMembers = [
    { name: "Hashem Anwari", role: "Teacher Advisor", image: "/anwari.jpg" },
    { name: "Jun Ip", role: "President", image: "/programmer.png" },
    { name: "Nick", role: "Vice President", image: "/programmer.png" },

    { name: "Erdene Batbayar", role: "Officer", image: "/officer.jpg" },
    { name: "Deigo Fonseca", role: "Former Officer", image: "/deigo.jpg" },
    { name: "Christian Galvez", role: "Treasurer", image: "/christian.jpg" },
    { name: "Maggie", role: "Secretary", image: "/programmer.png" },


    { name: "Estabon Gandarillas", role: "Media Officer", image: "/programmer.png" },
  ]

  return (
    <div className="space-y-12 mt-12">
      <section>
      <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" inset-0  bg-opacity-50 flex flex-col  justify-center rounded-lg"
            >
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/group.jpg"
              alt="Tech Club Photo"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-muted-foreground">
            The NVCC Tech Club was established in 2010 with the mission to build a supportive community of technology enthusiasts, offer hands-on learning experiences, and prepare students for careers in the rapidly evolving tech industry.
            </p>
            <p className="text-lg text-muted-foreground">
            Our club unites students interested in diverse fields such as web development, cybersecurity, game design, and robotics. We host workshops, hackathons, and industry speaker events to help our members develop practical skills, expand their knowledge, and stay ahead in the world of technology.
            </p>
          </div>
        </div>
        </motion.div>
      </section>

      <section>
      <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-4 rounded shadow-md flex flex-col items-center"
          >
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </motion.div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="mb-4 text-muted-foreground">
          We meet every Thursday at 2:30 PM in 302E of the LC Building. All skill levels are welcome!
        </p>
        <p className="text-muted-foreground">
          To become a member, simply attend one of our meetings or fill out the sign-up form on our Contact page.
        </p>
      </section>
    </div>
  )
}

