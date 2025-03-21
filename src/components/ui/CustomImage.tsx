"use client";

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type CustomImageProps = NextImageProps & {
  className?: string;
};

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  ...props
}: CustomImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={true}
      {...props}
    />
  );
}
