import MainLayout from "./components/layouts/MainLayout";
import { toggleDarkMode } from "./redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const darkMode=useAppSelector((store)=>store.theme.darkMode)
 
  return (
    <div className={`${darkMode?"bg-black text-white":"bg-white text-black"}`}>
      <MainLayout />
    </div>
  );
}

export default App;
