/* import { useEffect, useState } from "react" */
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
/* import banner3 from "../assets/banner3.png"; */

export const Banner = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1080/1280/333",
          thumbnail: "https://picsum.photos/id/1080/1280/333",
        },
        {
          original: "https://picsum.photos/id/1080/1280/333",
          thumbnail: "https://picsum.photos/id/1080/1280/333",
        },
        {
          original: "https://picsum.photos/id/1080/1280/333",
          thumbnail: "https://picsum.photos/id/1080/1280/333",
        }
    ]

    return (
        <div className="flex mx-2 my-6 sm:mx-16 sm:my-8 overflow-hidden lg:px-16">
            <div className="w-full">
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showNav={false}
                    showBullets={true}
                    autoPlay={true}
                    slideDuration={200}
                />
            </div>
        </div>
    )
}

export default Banner