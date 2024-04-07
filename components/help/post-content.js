import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function PostContent({ title, slug, image, content }) {
  const customRenderers = {
    code(code) {
      const { className, children } = code;
      const language = className?.split('-')[1];
      return <SyntaxHighlighter 
          style={atomDark}
          language={language}
          children={children}
        />;
    },
  };

  return <article className={classes.content}>
    <PostHeader 
      title={title} 
    />
    <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
  </article>;
}