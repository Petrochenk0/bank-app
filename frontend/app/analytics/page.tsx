import { Metadata } from 'next';

import Header from '@/widgets/Header/Header';
import LeftSideBar from '@/widgets/LeftSideBar/LeftSideBar';
import { RightSideBar } from '@/widgets/RightSideBar/RightSideBar';

import '../global.css';

export const metadata: Metadata = {
  title: 'Analytics',
};

export default function Analytics() {
  return (
    <div>
      <Header />
      <LeftSideBar />
      <h1 className="justify__center">Analytics 👀</h1>
      <RightSideBar />
    </div>
  );
}
