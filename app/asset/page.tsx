import { Metadata } from 'next';
import '../global.css';
export const metadata: Metadata = {
  title: 'Assets',
};
export default function MainStaticPage() {
  return <h1 className="justify__center">My assets 🎇</h1>;
}
