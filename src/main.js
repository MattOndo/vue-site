import DefaultLayout from '~/layouts/Default.vue'
import 'tachyons'
import '~/assets/style.css'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  // Vue.use(VueAxios, axios);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700'
  })

  head.meta.push({
    name: 'author',
    content: 'Matt Ondo'
  })

  head.script.push({
    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMW4NLP');`,
    type: 'text/javascript'
  })
}
