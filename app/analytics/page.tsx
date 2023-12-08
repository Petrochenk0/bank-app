import { Metadata } from 'next';
import '../global.css';
export const metadata: Metadata = {
  title: 'Analytics',
};
export default function Analytics() {
  return <h1 className="justify__center">Analytics 👀</h1>;
}
