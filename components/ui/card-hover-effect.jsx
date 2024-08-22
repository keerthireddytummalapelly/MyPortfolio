import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const isClickable = Boolean(item?.link);

        const CardContent = (
          <Card
            technologies={item.technologies}
            githubLink={item.githubLink}
            websiteLink={item.websiteLink}
          >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        );

        return isClickable ? (
          <Link
            href={item?.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            {CardContent}
          </Link>
        ) : (
          <div
            key={item?.title}
            className="relative block p-2 h-full w-full cursor-default"
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
  technologies,
  githubLink,
  websiteLink,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-background border-2 border-white group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          {children}
          {technologies && <CardTechnologies>{technologies}</CardTechnologies>}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 mt-4 text-white hover:text-gray-500"
            >
              <FaGithub size={24} />
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-16 mt-4 text-white hover:text-gray-500"
            >
              <FaLink size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);

export const CardTechnologies = ({ className, children }) => (
  <p
    className={cn(
      "mt-4 text-zinc-300 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    <strong>Technologies Used:</strong> {children}
  </p>
);
