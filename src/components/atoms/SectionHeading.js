export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-3xl font-bold text-blue-950 text-center ${className}`}>
      {children}
    </h2>
  );
}
