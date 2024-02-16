import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <div className="">
      <Link
        href={link}
        className="bg-primary flex justify-center items-center text-white lg:p-4 p-3 text-sm xl:text-base lg:text-sm lg:w-44 xl:w-48"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
