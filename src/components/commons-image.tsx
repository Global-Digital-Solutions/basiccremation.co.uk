/* eslint-disable @next/next/no-img-element */
import type { LocationImage } from "@/lib/location-images";

// Wikimedia serves thumbnails at fixed standard widths. We build a srcset from
// those so browsers load a sensible size straight from Wikimedia's CDN.
const STEPS = [500, 960, 1280, 1920];

function srcSetFor(src: string): { src: string; srcSet: string } {
  const m = src.match(/\/(\d+)px-/);
  if (!m) return { src, srcSet: "" };
  const max = Number(m[1]);
  const widths = STEPS.filter((w) => w <= max);
  return {
    src,
    srcSet: widths.map((w) => `${src.replace(/\/\d+px-/, `/${w}px-`)} ${w}w`).join(", ")
  };
}

interface CommonsImageProps {
  image: LocationImage;
  /** Pass "" for purely decorative use */
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/** Fills its positioned parent, like next/image with `fill`. */
export function CommonsImage({ image, alt, sizes = "100vw", priority = false, className = "" }: CommonsImageProps) {
  const { src, srcSet } = srcSetFor(image.src);
  return (
    <img
      src={src}
      srcSet={srcSet || undefined}
      sizes={sizes}
      alt={alt ?? image.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      referrerPolicy="no-referrer"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

/** Attribution required by the photo's licence. */
export function PhotoCredit({ image, className = "" }: { image: LocationImage; className?: string }) {
  const isPd = image.license === "Public domain";
  return (
    <p className={`text-[10px] leading-tight ${className}`}>
      Photo:{" "}
      <a href={image.page} target="_blank" rel="noopener nofollow" className="underline">
        {image.author}
      </a>
      {isPd ? (
        ", public domain"
      ) : (
        <>
          ,{" "}
          <a href={image.licenseUrl} target="_blank" rel="noopener nofollow license" className="underline">
            {image.license}
          </a>
        </>
      )}
      , via Wikimedia Commons
    </p>
  );
}
