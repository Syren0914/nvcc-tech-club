import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const teamMembers = [
    { name: "Hashem Anwari", role: "Teacher Advisor", image: "/anwari.jpg" },
    { name: "June Ip", role: "President", image: "/placeholder.svg?height=100&width=100" },
    { name: "Erdene Batbayar", role: "Officer", image: "/officer.jpg" },
    { name: "Deigo Fonseca", role: "Former Officer", image: "/deigo.jpg" },
    { name: "Christian Galvez", role: "Former Officer", image: "/christian.jpg" },

    { name: "Estabon Gandarillas", role: "Secretary", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="space-y-12">
      <section>
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
      </section>

      <section>
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
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="mb-4 text-muted-foreground">
          We meet every Tuesday at 7 PM in Room 301 of the LHEC Building. All skill levels are welcome!
        </p>
        <p className="text-muted-foreground">
          To become a member, simply attend one of our meetings or fill out the sign-up form on our Contact page.
        </p>
      </section>
    </div>
  )
}

