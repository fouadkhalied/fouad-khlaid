export default function Footer() {
  return (
    <footer className="py-12 border-t border-border text-center">
      <p className="text-xs font-mono text-secondary">
        &copy; {new Date().getFullYear()} Fouad Khalid. Built with Next.js & Tailwind.
      </p>
      <p className="text-[10px] font-mono text-secondary/50 mt-2">
        fouadkhalid.me
      </p>
    </footer>
  );
}
