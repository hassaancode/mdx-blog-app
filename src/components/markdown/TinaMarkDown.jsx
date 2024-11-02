"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";

// Import your custom components
import RouterButton from "../RouterButton";
import YouTubeEmbed from "./YoutubeEmbed";
export default function TinaMarkdownComponent({ content }) {
  // Define your Custom Components here
  const components = {
    RouterButton,
    YouTubeEmbed,
  };

  return <TinaMarkdown content={content} components={components} />;
}
