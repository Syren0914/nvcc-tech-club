import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Contact & Join</h1>
        <p className="text-lg mb-4 text-muted-foreground">
          Interested in joining our Tech Club? Have questions? Get in touch with us!
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
          <CardDescription>Join our community of tech enthusiasts</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input id="major" name="major" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year of Study</Label>
              <Select name="year">
                <SelectTrigger>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freshman">Freshman</SelectItem>
                  <SelectItem value="sophomore">Sophomore</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="interests">Areas of Interest</Label>
              <Textarea id="interests" name="interests" />
            </div>
            <Button type="submit">Submit Application</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-primary" />
            <span>Email: nvcctechclub@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-primary" />
            <span>
              Discord:{" "}
              <a target="_blank" href="https://discord.gg/VHbs3MrgMC" className="text-primary hover:underline">
                Join our Discord server
              </a>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

