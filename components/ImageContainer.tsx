import React from "react";

import Image, { ImageLoaderProps } from "next/image";

type fallbackType = "profile" | "banner" | "product" | "payment_method";

interface ImageProp {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "initial" | "inherit" | "";
  fallback?: fallbackType;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
}

const fallbackMap: { [e: string]: string } = {
  profile: "/profile-placeholder.png",
  banner: "/banner-placeholder.webp",
  product: "/product-placeholder.webp",
  payment_method: "/product-placeholder.webp",
};

const myLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return src;
};

export default function ImageContainer({
  width,
  height,
  src,
  className,
  fallback,
  alt,
  layout,
  objectFit,
}: ImageProp) {
  return layout == "fill" ? (
    <Image
      loader={myLoader}
      className={className}
      src={src ?? (fallback ? fallbackMap[fallback] : "/undefined.png")}
      alt={alt}
      layout={layout}
      objectFit={objectFit ? objectFit : "cover"}
    />
  ) : (
    <Image
      loader={myLoader}
      className={className}
      src={src ?? (fallback ? fallbackMap[fallback] : "/undefined.png")}
      alt={alt}
      width={width ?? 100}
      height={height ?? 100}
    />
  );
}
