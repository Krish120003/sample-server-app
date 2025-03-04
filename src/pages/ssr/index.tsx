import { GetServerSideProps } from "next";

interface ServerTimeProps {
  currentTime: string;
}

export const getServerSideProps: GetServerSideProps<
  ServerTimeProps
> = async () => {
  const currentTime = new Date().toLocaleString();

  return {
    props: {
      currentTime,
    },
  };
};

export default function SSRTime({ currentTime }: ServerTimeProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Server-Side Rendered Time</h1>
      <p>Current server time: {currentTime}</p>
      <p>build new wow</p>
    </div>
  );
}
