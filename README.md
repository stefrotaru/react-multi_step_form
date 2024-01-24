# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Redux Store Slices

The Redux store slices are defined as follows:

{
  stepsProgress?: {
    userInfo: false,
    selectPlan: false,
    selectAddons: false,
    summary: false,
  },
  user: {
    name: '',
    email: '',
    phone: '',
  },
  plan: {
    subscriptionType: '',
    subscriptionPrice: '',
    subscriptionRenewalInterval: '', (1-12; Actually this will always be 1)
    subscriptionRenewalIntervalUnit: '', (Month || Year)
  },
  addons: [
    {
      addonName: '',
      addonPrice: '',
      addonRenewalInterval: '', (1-12; Actually this will always be 1)
      addonRenewalIntervalUnit: '', (Month || Year; Will only be monthly but what the hell)
    },
    {
      ...
    },
  ],
}