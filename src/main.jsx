import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider} from "react-i18next"
import i18next from 'i18next'

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_br from "./translations/br/global.json"

i18next.init({
  interpolation: { escapeValue: false},
  lng: "br",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    br: {
      global: global_br
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
)
