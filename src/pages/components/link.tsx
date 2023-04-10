interface LinkProps {
  label: string;
  href: string;
}

const LinkStyle = (props: LinkProps): JSX.Element => {
  return (
    <a
      className="xsm:mx-2 sm:mx-3 lg:mx-2 hover:bg-violet-900 hover:bg-center rounded-md text-2xl font-mono transition duration-700 ease-in-out "
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export default LinkStyle;
