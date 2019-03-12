<template>
  <button
    id="darkModeToggle"
    @click="toggleDarkMode"
    v-text="`Dark Mode: ${darkMode}`"
    class="pointer ttc absolute fixed-l right-0 top-0 pa3 pa4-l f7 input-reset button-reset bg-transparent bw0 outline-0 black-50"
  />
</template>

<script>
export default {
  name: 'DarkMode',
  data() {
    return {
      darkModeToggleText: 'Light',
      darkMode: 'off'
    }
  },
  methods: {
    enableDarkMode: function() {
      this.darkMode = 'on'
      this.saveCookie('cmdm', 'on')
      this.darkModeToggleText = 'Light'
      document.querySelector('body').classList.add('darkMode')
    },
    disableDarkMode: function() {
      this.darkMode = 'off'
      this.saveCookie('cmdm', 'off')
      this.darkModeToggleText = 'Dark'
      document.querySelector('body').classList.remove('darkMode')
    },
    toggleDarkMode: function() {
      if (this.readCookie('cmdm') === 'off') {
        this.enableDarkMode()
      } else {
        this.disableDarkMode()
      }
    },
    readCookie: function(cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    saveCookie: function(name, value) {
      document.cookie = `${name}=${value}; expires=; domain=${
        window.location.hostname
      }; path=/;`
    }
  },
  mounted() {
    if (this.readCookie('cmdm') === 'off') {
      this.disableDarkMode()
    } else {
      this.enableDarkMode()
    }
  }
}
</script>
