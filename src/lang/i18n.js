import { createI18n } from 'vue-i18n'
import vnlanguage from './vi.json'
import enlanguage from './en.json'

const messages = {
  vi: vnlanguage,
  en: enlanguage,
}
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n;