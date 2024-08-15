import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center gap-5">
      <div className="flex items-center gap-2">
        Made with 🍉 by{" "}
        <Link
          href={"https://www.nilabjo.com"}
          target="_blank"
          className="text-accent hover:text-accent/80 transition"
        >
          @nilabjo
        </Link>
      </div>
      <span>
        Give it a ⭐ on{" "}
        <Link
          href={"https://github.com/cyberserk7/dev-snacks"}
          target="_blank"
          className="text-accent hover:text-accent/80 transition"
        >
          Github
        </Link>
      </span>
    </footer>
  );
};
