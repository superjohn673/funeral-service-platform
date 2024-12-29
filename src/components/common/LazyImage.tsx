import React, { useState, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const LazyImage: React.FC<Props> = ({
  src,
  alt,
  className,
  placeholderSrc = "/api/placeholder/100/100",
}) => {
  const [loadedSrc, setLoadedSrc] = useState<string>(placeholderSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoadedSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={loadedSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoading ? "opacity-50" : "opacity-100"
      } ${className}`}
    />
  );
};

export default LazyImage;
