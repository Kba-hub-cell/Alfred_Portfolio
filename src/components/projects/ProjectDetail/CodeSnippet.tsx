import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
}

const CodeSnippet = ({ code, language, title }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8 rounded-lg overflow-hidden bg-[#1E1E1E] shadow-lg">
      {title && (
        <div className="bg-[#2D2D2D] text-neutral-200 py-2 px-4 font-mono text-sm flex items-center justify-between">
          <span>{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center text-neutral-400 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check size={16} className="mr-1" /> Copied!
              </>
            ) : (
              <>
                <Clipboard size={16} className="mr-1" /> Copy
              </>
            )}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vs2015}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.6,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;