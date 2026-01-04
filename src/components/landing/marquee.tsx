import { BrandIcon } from "../icons/brand-icon";

const brands = [
  'react', 'figma', 'framer', 'webflow', 'flutter', 'stripe', 'vercel'
] as const;
const allBrands = [...brands, ...brands];

export default function Marquee() {
  return (
    <div className="py-12 border-b border-neutral-200/60 bg-neutral-50/50 overflow-hidden">
      <div className="marquee-wrapper max-w-[1400px] mx-auto">
        <div className="marquee-content items-center opacity-40 grayscale">
          {allBrands.map((brand, index) => (
            <BrandIcon 
              key={`${brand}-${index}`} 
              name={brand} 
              width={brand === 'stripe' ? '36' : '28'} 
              height={brand === 'stripe' ? '36' : '28'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
