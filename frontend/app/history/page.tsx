import { Metadata } from 'next';

import HistoryOfOperations from '@/pages/HistoryOfOperations/HistoryOfOperations';

import '../global.css';

import LeftSideBar from '@/widgets/LeftSideBar/LeftSideBar';
import { RightSideBar } from '@/widgets/RightSideBar/RightSideBar';
import Header from '@/widgets/Header/Header';
import { MyContextProvider } from '@/store/Context';

export const metadata: Metadata = {
  title: 'History',
};
export default function History() {
  return (
    <div>
      <MyContextProvider>
        <HistoryOfOperations />
      </MyContextProvider>
    </div>
  );
}
