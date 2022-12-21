import { AppHeader } from './components/app-header';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <AppHeader />
      <main className="flex max-w-5xl px-4 mx-auto w-full mt-8">
        <section className="grow">
          <Home />
        </section>
        <aside className="basis-48 hidden sm:block border border-stone-300 rounded shadow p-4">
          <h3 className="text-lg font-semibold">Sidebar</h3>
        </aside>
      </main>
    </>
  );
}

export default App;
