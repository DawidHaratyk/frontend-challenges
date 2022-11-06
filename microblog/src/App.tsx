import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { PostsList } from './components/PostsList/PostsList';
import { PostsForm } from './components/PostsForm/PostsForm';

export const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <PostsForm />
        <PostsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
