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
    <>
      <NextHead>
        <title>{title}</title>
        {meta.map(({ name, content }, index) => (
          <meta key={index} name={name} content={content} />
        ))}
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </NextHead>
    </>
  );
};
