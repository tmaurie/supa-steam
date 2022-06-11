// index.js

import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
// import theme from './styles/theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <>
    {/* 👇 Here's the script */}
    <ColorModeScript />
    <App />
  </>,
)
