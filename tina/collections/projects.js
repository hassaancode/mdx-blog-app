export const projects = {
  name: "project",
  label: "Projects",
  path: "content/projects",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "author",
      label: "Author",
    },
    {
      type: "number",
      name: "readTime",
      label: "Read Time (minutes)",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {
          name: "RouterButton",
          label: "Home Page CTA",
          fields: [
            {
              name: "btnText",
              label: "Title",
              type: "string",
            },
          ],
        },
        {
          name: "YouTubeEmbed",
          label: "Embed Youtube Video",
          fields: [
            {
              name: "id",
              label: "Video ID",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
