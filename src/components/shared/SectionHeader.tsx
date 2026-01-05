interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  highlight,
  centered = true,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        {title}{" "}
        {highlight && (
          <span className="font-script text-[#0166EB]">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
