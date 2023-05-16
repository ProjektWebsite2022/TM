const app = Vue.createApp({
    //data, functions
    //template: '<h2> I am the template </h2>'
    data() {
        return{
            jsonData: {},
            
        }
    },
    mounted() {
      this.loadJSON();
    },

    methods: {
        loadJSON() {
            const request = new XMLHttpRequest();
            request.open('GET', 'text.json');
            request.onload = () => {
              if (request.status === 200) {
                this.jsonData = JSON.parse(request.responseText);
              }
            };
            request.send();
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
      <input type="checkbox" id="toggle_button" />
      <label for="toggle_button" class="toggle_button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>
      <ul>
        <li><a class="Startseite" href="index.html"> Startseite</a></li>
        <li><a class="Angebot" href="angebot.html"> Angebot</a></li>
        <li><a class="Ueber_uns" href="ueber_uns.html"> Über uns</a></li>
        <li><a class="Gallerie" href="gallerie.html"> Gallerie</a></li>
        <li><a class="Kontakt" href="kontakt.html"> Kontakt</a></li>
      </ul>
    </nav>
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