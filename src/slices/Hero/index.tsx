import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Section from '@/components/Section'
import { cn } from '@/utils/cn'
import { PrismicRichText } from '@/components/PrismicRichText'
import { PrismicNextImage } from '@prismicio/next'
import Button from '@/components/Button'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice, index }: HeroProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="lg:h-[calc(100vh-161px)] relative"
    >
      <div
        className={cn('flex justify-center lg:justify-end items-center', {
          'lg:justify-start': slice.primary.image_location,
        })}
      >
        <div
          className={cn(
            'absolute inset-0 z-[-1] bg-gradient-to-b from-color-accent via-color-base to-color-base lg:bg-gradient-to-l lg:from-transparent lg:via-color-base lg:to-color-base',
            {
              'lg:bg-gradient-to-r lg:from-transparent lg:via-color-base lg:to-color-base':
                !slice.primary.image_location,
            },
          )}
        />
        <PrismicNextImage
          field={slice.primary.background_image}
          fallbackAlt=""
          fill
          sizes="100vw"
          className="z-[-2] object-cover hidden lg:block"
          priority={index === 0}
        />
        <div className="lg:w-1/2">
          <div className="max-w-lg mx-auto grid">
            <PrismicRichText field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.description} />
            {isFilled.link(slice.primary.button_link) &&
              isFilled.keyText(slice.primary.button_text) && (
                <Button
                  field={slice.primary.button_link}
                  color="primary"
                  className="place-self-center my-6"
                >
                  {slice.primary.button_text}
                </Button>
              )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
