import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

export const getServerSideProps: GetServerSideProps<ErrorProps> = async (context: any) => {
  const { res, err } = context;
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
};

export default Error;