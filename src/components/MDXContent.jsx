import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MDXContent({ code }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {code}
      </ReactMarkdown>
    </div>
  );
}
