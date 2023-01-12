import { GetServerSideProps } from "next"

type Props = {
  url: string;
};

export default function Home({ url }: Props) {
  return <div>resolvedUrl: {url}</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  resolvedUrl
}) => {
  console.log(`This resolvedUrl should be URL, but is a path instead: ${resolvedUrl}`);

  return {
    props: {
      url: new URL(resolvedUrl).toString()
    }
  };
};
