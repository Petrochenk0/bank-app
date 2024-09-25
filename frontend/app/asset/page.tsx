import { Metadata } from 'next';
import '../global.css';
import Header from '@/widgets/Header/Header';
import LeftSideBar from '@/widgets/LeftSideBar/LeftSideBar';
import { RightSideBar } from '@/widgets/RightSideBar/RightSideBar';

export const metadata: Metadata = {
  title: 'Assets',
};

export default function MainStaticPage() {
  return (
    <div>
      <Header />
      <LeftSideBar />
      <h1 className="justify__center">My assets 🎇</h1>
      <RightSideBar />
    </div>
  );
}
