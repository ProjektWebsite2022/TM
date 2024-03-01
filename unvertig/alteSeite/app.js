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

          const savedLanguage = localStorage.getItem('currentLanguage');
          if (savedLanguage !== null) {
            this.currentLanguage = savedLanguage;
          }

          // Change filename based on language
          if (this.currentLanguage === 'english') {
              fileName = 'text2.json';
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

          localStorage.setItem('currentLanguage', this.currentLanguage);

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
        <li><a class="Startseite" href="index.html"> {{$root.jsonData.H1}}</a></li>
        <li><a class="Angebot" href="angebot.html"> {{$root.jsonData.H2}}</a></li>
        <li><a class="Ueber_uns" href="ueber_uns.html"> {{$root.jsonData.H3}}</a></li>
        <li><a class="Gallerie" href="gallerie.html"> {{$root.jsonData.H4}}</a></li>
        <li><a class="Kontakt" href="kontakt.html"> {{$root.jsonData.H5}}</a></li>
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
          <h1>{{$root.jsonData.F2}}</h1>
          <ul>
            
          
            <li><a href="#" @click.prevent="$emit('switch-language')">{{$root.jsonData.F1}}</a></li>
            <li><a href="ueber_uns.html">{{$root.jsonData.F3}}</a></li>
            <li><a href="Q+A.html#AGB">{{$root.jsonData.F4}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="Fußzeile">
      <ul>
        <li>
          <h1>{{$root.jsonData.F5}}</h1>
          <ul>
            <li><a href="Q+A.html#Hilfe">{{$root.jsonData.F6}}</a></li>
            <li><a href="kontakt.html">{{$root.jsonData.F7}}</a></li>
            <li><p class="Kontaktdaten">Tel.: +49 170 6378290</p></li>
            <li><p class="Kontaktdaten">E-Mail: TimoMachts@TM.com</p></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="Fußzeile">
      <ul>
        <li>
          <h1>{{$root.jsonData.F8}}</h1>
          <ul>
            <li><a href="Q+A.html#Benutzerdaten">{{$root.jsonData.F9}}</a></li>
            <li><a href="Q+A.html#Buchung">{{$root.jsonData.F10}}</a></li>
            <li><a href="Q+A.html#Bezahlmethoden">{{$root.jsonData.F11}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>`

  });

app.mount('#app')