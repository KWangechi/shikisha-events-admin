// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-auth-sanctum',
  ],

  runtimeConfig: {
    public: {
      sanctum: {
        baseUrl: 'http://localhost:8000',
        globalMiddleware: {
          enabled: true,
        },
        // redirectIfAuthenticated: true,
        // redirectIfUnauthenticated: true,
        mode: 'token',
        endpoints: {
          login: '/api/login',
          logout: '/api/logout',
          user: '/api/user',
        },
        redirect: {
          onLogin: '/',
          onLogout: '/login',
        },
      },
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  routeRules: {
    '/components': { redirect: '/components/accordion' },
    '/settings': { redirect: '/settings/profile' },
  },

  imports: {
    dirs: [
      './lib',
    ],
  },

  compatibilityDate: '2024-12-14',
})
