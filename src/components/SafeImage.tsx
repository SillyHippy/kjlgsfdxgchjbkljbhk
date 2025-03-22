'use client'

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

// SafeImage component wraps Next.js Image component to prevent hydration errors
export default function SafeImage(props: ImageProps) {
  // Only render the image on the client side to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder until client-side hydration is complete
    return (
      <div
        style={{
          width: typeof props.width === 'number' ? `${props.width}px` : props.width,
          height: typeof props.height === 'number' ? `${props.height}px` : props.height,
          backgroundColor: '#f0f0f0'
        }}
        aria-label={props.alt as string || 'Image placeholder'}
      />
    );
  }

  // Once on the client, render the actual Image component with all props
  return <Image {...props} alt={props.alt || ''} />;
}
