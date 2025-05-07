export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">© {currentYear} Hakeem Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
