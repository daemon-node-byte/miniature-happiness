import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '40px' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '34px' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '30px' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontSize: '26px' }}>{children}</h4>,
    h5: ({ children }) => <h5 style={{ fontSize: '22px' }}>{children}</h5>,
    h6: ({ children }) => <h6 style={{ fontSize: '18px'}}>{children}</h6>,
    p: ({ children }) => <p style={{ fontSize: '14px' }}>{children}</p>,
    ul: ({ children }) => <ul className='list-disc'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal'>{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ children, href }) => <a href={href} className='text-indigo-400 visited:text-orange-500'>{children}</a>,
    img: (props) => (
      <Image
        sizes="100vw"
        width={800}
        height={400}
        {...(props as ImageProps)}
        src={props.src ?? ''}
        alt={props.alt ?? ''}
      />
    ),
    ...components,
  }
}