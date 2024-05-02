'use client';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <>
      Houve um erro: {error.message}
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
