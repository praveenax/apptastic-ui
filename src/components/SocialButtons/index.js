import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ThreadsIcon,
  ThreadsShareButton,
} from "react-share";
export default function SocialButtons({ currentUrl }) {
  return (
    <div className="flex justify-end">
      {/* Mobile-only section */}
      <section className="block md:hidden">
        <div className="flex w-full justify-end gap-2">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={24} round />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <XIcon size={24} round />
          </TwitterShareButton>

          <LinkedinShareButton url={currentUrl}>
            <LinkedinIcon size={24} round />
          </LinkedinShareButton>

          <ThreadsShareButton url={currentUrl}>
            <ThreadsIcon size={24} round />
          </ThreadsShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={24} round />
          </WhatsappShareButton>
        </div>
      </section>

      {/* Desktop-only section */}
      <section className="hidden md:block">
        <div className="flex w-full justify-end gap-2">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <XIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton url={currentUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <ThreadsShareButton url={currentUrl}>
            <ThreadsIcon size={32} round />
          </ThreadsShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </section>
    </div>
  );
}
