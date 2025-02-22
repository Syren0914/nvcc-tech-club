import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./navbar/page"





const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Club",
  description: "Welcome to our NVCC Tech Club",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      
      
      
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        
      <Navbar/>
        
        <main className="container mx-auto px-6 py-8">
          {children}</main>
        <footer className="border-t py-6">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tech Club. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

