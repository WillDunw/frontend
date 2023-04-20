import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { ViewRecipe } from './pages/ViewRecipe';
import { Error } from './pages/Error';
import { AddRecipe } from './pages/AddRecipe';
import { UpdateRecipe } from './pages/UpdateRecipe';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * The app. It determines which page is opened based on which route has been used.
 * @returns The routes of the app as a html div
 */
function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<Error errorMessage={"Unexpected error."} />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='recipe/:recipeID' element={<ViewRecipe />} />
        <Route path='addRecipe' element={<AddRecipe />} />
        <Route path='updateRecipe' element={<UpdateRecipe />} />
        <Route path='error' element={<Error />} />
        <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
