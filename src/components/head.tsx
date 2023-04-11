import NextHead from 'next/head';

interface HeadProps {
  title: string;
  meta: {
    name: string;
    content: string;
  }[];
}

export const Head = ({ title, meta }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      {meta.map(({ name, content }, index) => (
        <meta key={index} name={name} content={content} />
      ))}
    </NextHead>
  );
};
