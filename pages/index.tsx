import Link from 'next/link';

const MainPage = () => {
  return (
    <Link href={'/auth'} style={{ fontSize: 32 }}>
      Log in
    </Link>
  );
};

export default MainPage;
