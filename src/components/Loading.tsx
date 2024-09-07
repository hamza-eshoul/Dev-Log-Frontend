import { ClimbingBoxLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={twMerge(
        "flex h-[50vh] items-center justify-center",
        className,
      )}
    >
      <ClimbingBoxLoader size={30} />
    </div>
  );
};

export default Loading;
