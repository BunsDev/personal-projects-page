import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@mui/styled-engine";
import { BaseButton } from "..";

interface TopicI {
  css: SerializedStyles;
  text: string;
  btn?: string;
}

const Topic = () => {
  const topicsLeft: TopicI[] = [
    {
      text: `Этот блок приветсвует тебя. \n
    Вебсайт представляет собой некий блог обо мне и веб технологиях.`,
      css: css`
        background: #121111;
        color: white;
        margin-bottom: 10px;
        p {
          font-weight: 100;
          color: #a4a4a4;
        }
      `,
    },
    {
      text: `Проекты по категориям/стэку`,
      btn: "Тык",
      css: css`
        background: #2a2a2a;
        color: white;
        p {
          margin-bottom: 10px;
        }
      `,
    },
  ];
  const topicsRight: TopicI[] = [
    {
      text: `На веб сайте вы можете найти мои заметки, об процессе, мыслях и
  многом другом.`,
      btn: "К заметкам",
      css: css`
        max-width: 410px;
        width: 100%;
        background-color: #f5e765;
        color: black;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          margin-bottom: 10px;
        }
      `,
    },
  ];
  return (
    <Layout>
      <LeftCol>
        {topicsLeft?.map((topic, index) => {
          return <Topic.Card topic={topic} key={index} />;
        })}
      </LeftCol>
      <RightCol>
        {topicsRight?.map((topic, index) => {
          return <Topic.Card topic={topic} key={index} />;
        })}
      </RightCol>
    </Layout>
  );
};

// Sub components

Topic.Card = ({ topic }: { topic: TopicI }) => {
  return (
    <Card css={topic.css}>
      <div>
        <p>{topic.text}</p>
      </div>
      {topic.btn && <BaseButton>{topic.btn}</BaseButton>}
    </Card>
  );
};

// Styled components

const Layout = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    flex-wrap: wrap;
    justify-content: end;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    justify-content: center;
  }
`;

const LeftCol = styled.div`
  max-width: 300px;
  margin-right: 10px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const RightCol = styled.div`
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    max-width: 300px;
  }
`;

const Card = styled.div`
  background: #433f3f;
  color: white;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: box-shadow 0.3s;
  &:hover {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(134, 151, 38, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export default Topic;
