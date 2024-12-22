import React from 'react';
import { Upload } from 'lucide-react';
import { uploadImage } from '../utils/imageUpload';

interface Props {
  src: string;
  alt: string;
  className?: string;
  onImageChange: (newImage: string) => void;
}

export default function EditableImage({ src, alt, className = '', onImageChange }: Props) {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        onImageChange(imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="relative group">
      <img src={src} alt={alt} className={className} />
      <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <Upload className="w-8 h-8 text-white" />
      </label>
    </div>
  );
}