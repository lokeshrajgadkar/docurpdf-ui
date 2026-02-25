import { Github01Icon, Linkedin01Icon, NewTwitterRectangleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"


function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              DocUrPDF
            </h2>

            <p className="text-base-content/70 max-w-md">
              Convert, edit and manage your PDFs with speed and simplicity.
              Built for professionals and businesses.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a className="btn btn-sm btn-circle btn-ghost">
                <HugeiconsIcon icon={Github01Icon} />
              </a>
              <a className="btn btn-sm btn-circle btn-ghost">
                <HugeiconsIcon icon={Linkedin01Icon} />
              </a>
              <a className="btn btn-sm btn-circle btn-ghost">
                <HugeiconsIcon icon={NewTwitterRectangleIcon} />
              </a>
            </div>
          </div>

          {/* Other Sections Same As Before */}
          
        </div>

        <div className="border-t border-base-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} DocUrPDF. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-primary transition">Privacy Policy</a>
            <a className="hover:text-primary transition">Terms</a>
            <a className="hover:text-primary transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer