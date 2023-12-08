'use client';
export default function Error(): React.ReactNode {
  const errorStatic = 'Somethink went wrong';
  return (
    <div>
      <h1>Error...</h1>
      <p>{errorStatic}</p>
    </div>
  );
}
