import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { ReactNode } from "react";

interface AudienceCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  linkHref?: string;
}

export default function AudienceCard({
  icon,
  title,
  text,
  linkHref = "/kontakt"
}: AudienceCardProps) {
  return (
    <div className="flex items-center w-full min-h-24 px-4 py-3 bg-bg-l dark:bg-bg-d border border-border-l dark:border-border-d">
      <div className="flex items-center justify-center min-w-12">
        {icon}
      </div>
      <div className="flex flex-col flex-1 ml-4">
        <h3 className="font-semibold text-base mb-1 text-card-text-l dark:text-card-text-d">
          {title}
        </h3>
        <p className="text-sm text-secondary-l dark:text-secondary-d">
          {text}
        </p>
      </div>
      <div className="flex items-center ml-4">
        <Link href={linkHref} aria-label={`Kontakt aufnehmen für ${title}`}>
          <IoArrowForward
            size={20}
            className="text-primary hover:text-primary-dark cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
