export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    React.AriaAttributes {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <a
      className="border border-blue-500 bg-blue-500 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      {...props}
    >
      {children}
    </a>
  );
};