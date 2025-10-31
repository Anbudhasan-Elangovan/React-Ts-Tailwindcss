import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard content area.</p>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
