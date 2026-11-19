export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/about', label: 'About Stillwater', pageFile: 'AboutPage' },
  { path: '/treatments', label: 'Treatment Options', pageFile: 'TreatmentsPage' },
  { path: '/for-families', label: 'For Families', pageFile: 'ForFamiliesPage' },
  { path: '/for-teens-young-adults', label: 'For Teens & Young Adults', pageFile: 'ForTeensPage' },
  { path: '/first-visit', label: 'Your First Visit', pageFile: 'FirstVisitPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
];
