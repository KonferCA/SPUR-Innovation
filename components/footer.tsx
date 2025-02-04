import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">SPUR Innovation Center</h2>
          <p className="text-sm text-muted-foreground">Spurring the Future Funding of Decentrazlized Smart City Infrastructure</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ai-analytics" className="text-muted-foreground transition-colors hover:text-primary">
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="text-muted-foreground transition-colors hover:text-primary">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/spur_innovation/"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/SpurInnovation"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/spur-innovation-center"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SPUR Innovation Center, Inc. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          <a href="https://konfer.ca" target="_blank">Designed and Developed by Konfer</a>
        </p>
      </div>
    </footer>
  )
}
