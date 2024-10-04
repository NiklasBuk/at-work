import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/index'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
)
