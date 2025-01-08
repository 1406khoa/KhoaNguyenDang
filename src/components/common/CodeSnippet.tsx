import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Đoạn code demo
const sampleCode = `
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2>Hello {name}, welcome to my World!</h2>;
};

export default Greeting;
`;

const CodeSnippet = () => {
  return (
    <div className="w-full max-w-xl transform scale-125 bg-gray-900 rounded-md shadow-lg overflow-hidden border border-gray-600 mx-auto">
      {/* Title Bar - Windows Style */}
      <div className="flex items-center justify-end bg-gray-200 text-black px-4 py-2 border-b border-gray-300">
        {/* Cụm nút bên phải */}
        <div className="flex items-center space-x-1">
          {/* Minimize */}
          <button className="hover:bg-gray-300 px-2 rounded-sm text-sm leading-5">
            &#8211;
          </button>
          {/* Maximize */}
          <button className="hover:bg-gray-300 px-2 rounded-sm text-sm leading-5">
            &#9633;
          </button>
          {/* Close */}
          <button className="hover:bg-red-500 hover:text-white px-2 rounded-sm text-sm leading-5">
            &#10005;
          </button>
        </div>
      </div>

      {/* Khu vực highlight code */}
      <SyntaxHighlighter
        language="typescript"
        style={atomDark}
        customStyle={{
          margin: 0,
          backgroundColor: 'transparent',
          fontSize: '1rem',
        }}
        showLineNumbers
      >
        {sampleCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
