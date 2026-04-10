import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AudienceCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  number: string;
  linkHref?: string;
}

export default function AudienceCard({
  icon,
  title,
  text,
  number,
  linkHref = "/kontakt",
}: AudienceCardProps) {
  return (
    <Link href={linkHref} aria-label={`${title} - Mehr erfahren`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl">
      <Card className="h-full flex flex-col bg-card-l dark:bg-card-d border-border-l dark:border-border-d hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center border shrink-0" aria-hidden="true">
              {icon}
            </div>
            <Badge variant="outline" className="font-mono text-xs text-card-text-l dark:text-card-text-d border-border-l dark:border-border-d">
              {number}
            </Badge>
          </div>
          <CardTitle className="text-base font-semibold text-card-text-l dark:text-card-text-d mt-4">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm leading-relaxed text-secondary-l dark:text-secondary-d">
            {text}
          </p>
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline">
            Mehr erfahren <ArrowRight size={14} />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
