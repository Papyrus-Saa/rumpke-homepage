import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 min-h-24 px-4 py-3 bg-bg-l dark:bg-bg-d border border-border-l dark:border-border-d">
      <div className="flex items-center justify-center min-w-12 shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-1 text-card-text-l dark:text-card-text-d">
          {title}
        </h3>
        <p className="text-sm text-secondary-l dark:text-secondary-d">
          {text}
        </p>
      </div>
    </div>
  );
}
