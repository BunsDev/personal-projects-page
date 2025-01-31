import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Post } from "entities/post";
import { getPostByName } from "entities/post/api";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useSWR, { SWRConfig } from "swr";
import { PostPageFallbackProps } from "../../../pages/post/[name]";

const PostByName = () => {
  const { lang } = useTranslation("common");
  const router = useRouter();
  const { data: source, error } = useSWR(
    [router?.query?.name?.toString() || "", lang],
    getPostByName
  );

  if (error) {
    return <div>Ooops...</div>;
  }

  return <Post source={source} loading={!source} />;
};

const PostPage = ({ fallback }: PostPageFallbackProps) => {
  const { query } = useRouter();
  const title = query?.name;

  return (
    <>
      <Head>
        <title>Enchantress | {title}</title>
      </Head>

      <SWRConfig value={{ fallback }}>
        <PostByName />
      </SWRConfig>
    </>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Layout = styled(Container)`
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0;
  }
`;

export default PostPage;
