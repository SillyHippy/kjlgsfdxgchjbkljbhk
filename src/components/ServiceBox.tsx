'use client'

import SafeImage from './SafeImage';

interface ServiceBoxProps {
  title: string;
  description: string;
  imagePath?: string;
  imageAlt?: string;
}

export default function ServiceBox({ title, description, imagePath, imageAlt }: ServiceBoxProps) {
  return (
    <div className="text-center mb-8">
      {imagePath && (
        <div className="flex justify-center mb-4">
          <SafeImage
            src={imagePath}
            alt={imageAlt || title}
            width={180}
            height={125}
            style={{ objectFit: 'contain' }}
            priority={false}
          />
        </div>
      )}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
