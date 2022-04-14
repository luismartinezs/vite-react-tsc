interface Props {
  children?: React.ReactNode;
  btnStyle: "primary" | "secondary";
  type: "button" | "link";
}

const BaseButton: React.FC<Props> = ({
  children,
  btnStyle = "primary",
  type = "button",
}: Props): JSX.Element => {
  const getButtonClasses = (): string => {
    const base =
      "font-semibold px-4 py-2 rounded-lg flex items-center transition ease-in-out duration-300 group whitespace-nowrap";
    switch (btnStyle) {
      case "primary":
        return `${base} bg-primary-500 hover:bg-primary-600 text-white`;
      case "secondary":
        return `${base} bg-gray-100 hover:bg-gray-200 text-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-secondary-100`;
      default:
        return "";
    }
  };

  if (type === "link") {
    return (
      <a className={getButtonClasses()} href="/">
        {children}
      </a>
    );
  }
  return (
    <button className={getButtonClasses()} type="button">
      {children}
    </button>
  );
};

export default BaseButton;
