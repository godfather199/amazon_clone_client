import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { persistQueryClient, PersistQueryClientProvider,  } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime:  1000 * 60 * 60 * 24,
      retry: false,
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 60 * 60 * 24, 
    },
  },
})


queryClient.setQueryDefaults(["logged_In_User_State"], {
  staleTime: 1000 * 60 * 60 * 24,
});


// Create a localForage persister
const persister = createSyncStoragePersister({
  storage: window.localStorage,
})


// Persist the query client
// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
//   maxAge: 1000 * 60 * 60 * 24, // 24 hours
// });


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <App />
  <ReactQueryDevtools initialIsOpen={true} />
  </PersistQueryClientProvider>

    {/* <QueryClientProvider client={queryClient}>
    </QueryClientProvider> */}
  </React.StrictMode>
);

 
