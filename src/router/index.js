import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import AccountTypePage from '../views/AccountTypePage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import LegalInformationPage from '../views/LegalInformationPage.vue'
import InformersPage from '../views/tradeholic/InformersPage.vue'
import CalendarsPage from '../views/tradeholic/CalendarsPage.vue'
import CalculatorsPage from '../views/tradeholic/CalculatorsPage.vue'
import SignalsPage from '../views/tradeholic/SignalsPage.vue'
import CourseBeginnersPage from '../views/tradeholic/CourseBeginnersPage.vue'
import CourseAdvancedPage from '../views/tradeholic/CourseAdvancedPage.vue'
import BeginnersVODSPage from '../views/tradeholic/BeginnersVODSPage.vue'
import AdvancedVODSPage from '../views/tradeholic/AdvancedVODSPage.vue'
import CryptocurrencyPage from '../views/tradeholic/CryptocurrencyPage.vue'
import NewsPage from '../views/tradeholic/NewsPage.vue'
import FundamentalAnalysisPage from '../views/tradeholic/FundamentalAnalysisPage.vue'
import TechnicalAnalysisPage from '../views/tradeholic/TechnicalAnalysisPage.vue'
import TrendAnalysisPage from '../views/tradeholic/TrendAnalysisPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/:lang(en|ru)?',
    component: {
      render() {
        return null;
      }
    }
  },
  {
    path: '/:lang(en|ru)?/',
    name: 'home',
    component: HomePage,
    meta: { title: '' }
  },
  {
    path: '/:lang(en|ru)?/about',
    name: 'about',
    component: AboutPage,
    meta: { title: 'About us' }
  },
  {
    path: '/:lang(en|ru)?/account-type',
    name: 'account',
    component: AccountTypePage,
    meta: { title: 'Account types' }
  },
  {
    path: '/:lang(en|ru)?/contacts',
    name: 'contacts',
    component: ContactsPage,
    meta: { title: 'Contacts' }
  },
  {
    path: '/:lang(en|ru)?/legal-information',
    name: 'legal-information',
    component: LegalInformationPage,
    meta: { title: 'Legal information' }
  },
  {
    path: '/:lang(en|ru)?/informers',
    name: 'informers',
    component: InformersPage,
    meta: { title: 'Informers' }
  },
  {
    path: '/:lang(en|ru)?/calendars',
    name: 'calendars',
    component: CalendarsPage,
    meta: { title: 'Calendars' }
  },
  {
    path: '/:lang(en|ru)?/calculators',
    name: 'calculators',
    component: CalculatorsPage,
    meta: { title: 'Calculators' }
  },
  {
    path: '/:lang(en|ru)?/signals',
    name: 'signals',
    component: SignalsPage,
    meta: { title: 'Signals' }
  },
  {
    path: '/:lang(en|ru)?/course-beginner',
    name: 'course-beginner',
    component: CourseBeginnersPage,
    meta: { title: 'Course beginner' }
  },
  {
    path: '/:lang(en|ru)?/course-advanced',
    name: 'course-advanced',
    component: CourseAdvancedPage,
    meta: { title: 'Course advanced' }
  },
  {
    path: '/:lang(en|ru)?/beginner-vods',
    name: 'beginner-vods',
    component: BeginnersVODSPage,
    meta: { title: 'Beginner vods' }
  },
  {
    path: '/:lang(en|ru)?/advanced-vods',
    name: 'advanced-vods',
    component: AdvancedVODSPage,
    meta: { title: 'Advanced vods' }
  },
  {
    path: '/:lang(en|ru)?/cryptocurency',
    name: 'cryptocurency',
    component: CryptocurrencyPage,
    meta: { title: 'Cryptocurrency' }
  },
  {
    path: '/:lang(en|ru)?/news',
    name: 'news',
    component: NewsPage,
    meta: { title: 'News' }
  },
  {
    path: '/:lang(en|ru)?/fundamental-analysis',
    name: 'fundamental-analysis',
    component: FundamentalAnalysisPage,
    meta: { title: 'Fundamental Analysis' }
  },
  {
    path: '/:lang(en|ru)?/technical-analysis',
    name: 'technical-analysis',
    component: TechnicalAnalysisPage,
    meta: { title: 'Technical analysis' }
  },
  {
    path: '/:lang(en|ru)?/determinating-trend',
    name: 'determinating-trend',
    component: TrendAnalysisPage,
    meta: { title: 'Determining trend' }
  },
  {
    path: '/:lang(en|ru)?/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en';
  const pageMeta = to.meta.title || '';
  document.title = `Brand name - ${pageMeta}`;
  next();
});

export default router
