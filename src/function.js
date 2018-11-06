import parameters from './parameters';

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
    }),
  };
};

export default handler;
