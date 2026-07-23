import Image from 'next/image'

export interface ResponsiveHeroImageProps {
  src: string
  alt?: string
  objectPosition?: string
  priority?: boolean
  sizes?: string
}

/**
 * Full-bleed banner photo, sized differently per breakpoint so the whole
 * image is visible on narrow phones instead of the ~4x center-crop a
 * landscape photo gets forced into on a very tall/narrow viewport under
 * plain object-cover. Below `sm`: the real photo sits centered with
 * object-contain (no cropping) over a blurred, scaled-up copy of itself
 * filling the rest of the frame, so there's no dead/plain-color letterbox
 * band. From `sm` up: a single plain object-cover fill, unchanged from
 * the original full-bleed treatment.
 */
export function ResponsiveHeroImage({ src, alt = '', objectPosition, priority, sizes = '100vw' }: ResponsiveHeroImageProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="scale-110 object-cover object-center blur-2xl brightness-75 sm:hidden"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain sm:object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        priority={priority}
      />
    </>
  )
}
