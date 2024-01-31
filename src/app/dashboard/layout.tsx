import { Navbar } from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{width: '100%'}}>
      <Navbar />
      {children}
    </div>
  );
}
