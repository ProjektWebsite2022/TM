const app = Vue.createApp({
  data() {
      return{
          jsonData: {},
          currentLanguage: 'default', // This is the initial language
      }
  },
  mounted() {
    this.loadJSON();
  },
  methods: {
      loadJSON() {
          const request = new XMLHttpRequest();
          let fileName = 'text.json'; // Default filename

          // Change filename based on language
          if (this.currentLanguage === 'english') {
              fileName = 'textenglish.json';
          }

          request.open('GET', fileName);
          request.onload = () => {
            if (request.status === 200) {
              this.jsonData = JSON.parse(request.responseText);
            }
          };
          request.send();
      },
      switchLanguage() {
          // Toggle language between default and english
          if (this.currentLanguage === 'default') {
              this.currentLanguage = 'english';
          } else {
              this.currentLanguage = 'default';
          }

          // Load JSON again with new language
          this.loadJSON();
      }
  }
});

app.component('my-header', {
    // Name des Komponente ist hier "my-header"
    template: `
      <header>
      <nav>
      <a href="index.html">
        <img class="logo" src="Bilder/logo.png" alt="logo"
      /></a>
      <input type="checkbox" id="checkbox">
      <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
      </label>
      
      <ul>
        <li><a class="Startseite" href="index.html"> Startseite</a></li>
        <li><a class="Angebot" href="angebot.html"> Angebot</a></li>
        <li><a class="Ueber_uns" href="ueber_uns.html"> Über uns</a></li>
        <li><a class="Gallerie" href="gallerie.html"> Gallerie</a></li>
        <li><a class="Kontakt" href="kontakt.html"> Kontakt</a></li>
      </ul>
    </nav>
    <br> <br> <br>
    <video class="video" src="fireworks-694.mp4" autoplay loop>
      Dein Browser unterstützt das Video-Tag nicht.
    </video>

      </header>
    `,
  }).component('my-footer', {
    template:`
 <footer>
    <div class="Fußzeile">
      <ul>
        <li>
          <h1>Über Uns</h1>
          <ul>
            <button @click="switchLanguage">Switch Language</button>
            <li><a href="ueber_uns.html">Unser Unternehmen</a></li>
            <li><a href="Q+A.html#AGB">AGB</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="Fußzeile">
      <ul>
        <li>
          <h1>Kundenservice</h1>
          <ul>
            <li><a href="Q+A.html#Hilfe">Hilfe</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
            <li><p class="Kontaktdaten">Tel.: +49 170 6378290</p></li>
            <li><p class="Kontaktdaten">E-Mail: TimoMachts@TM.com</p></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="Fußzeile">
      <ul>
        <li>
          <h1>Buchung</h1>
          <ul>
            <li><a href="Q+A.html#Benutzerdaten">Benutzerdaten</a></li>
            <li><a href="Q+A.html#Buchung">Fragen zur Buchung</a></li>
            <li><a href="Q+A.html#Bezahlmethoden">Bezahlen</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>`

  });

app.mount('#app')