export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-400/70 dark:bg-slate-900 border-t  dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-light-text dark:text-gray-400 text-sm">© {currentYear} Hakeem Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
