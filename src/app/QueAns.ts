export interface Questions {
  id: number;
  question: string;
  answer: string;
}

export const questions = [
  {
    id: 1,
    question: 'Förklara vad Angular är och varför det används',
    answer: `Angular, är som det står på deras sida en plattform och ramverk vilket förenklar och möjligör produktionen av mer komplexa hemsidor eller appar. 
    Detta kan man se te.x. när man startar ett nytt projekt och får en hel arbetsmiljö färdigkonfigurerad för att därifrån börja bygga. 
    Utöver det har man även testmiljö som kan emulera tjänster som kanske inte är tillgängliga när man testar appen/sidan, det finns självklart mycket mer än detta men som är utanför min nuvarande förståelse.`
  },
  
  {
    id: 2,
    question: 'Förklara för vad Single page applications är',
    answer: `Istället för att ha en sida uppbyggd på många olika html-filer som skickas till användaren utefter vilken sida som besöks så är single page applications just vad namnet antyder, en sida/app byggd på bara en html-fil. 
    I html-filen finns en del javascript som körs av webbläsarens javascript-motor som i sin tur visar en sida/app som är snabb.`
  },
  
  {
    id: 3,
    question: 'Beskriv de fundamentala delarna i Angulars arkitektur (rita gärna beskrivande)',
    answer: `Enligt angular.io består Angular ramverket i dess mest basala form av komponenter som ordnas in i "NgModules".
    Dessa "Ngmodules" inehåller instruktioner som är dedikerade till olika områden i appen. Varje Angular-tillverkad app har en "root module" som heter "AppModule" vars funktion är att starta upp appen som oftast består av flera andra moduler med olika funktioner.

    NgModulernas funktion kan även importeras till andra moduler vilket förenklar tillverkningen av komplexa appar genom att sätta ihop dessa som byggklossar.

    Förutom en "root module" så finns det också minst en "component" en s.k "root component" som definerar en komponent-lista och binder den med "DOM".

    Samtidigt utgör varje "component" en "class" som innehåller app-data och är också kopplad med en "template" html-fil som bygger upp en "view".

    "Template" kombinerar HTML med Angular markup, alltså är all HTML syntax giltig plus att man har Angulars egna syntax till användning som ger mer funktionalitet.
    Något som också nämns är att, då  en "Template" är endast en del av hela appen så innebär detta att man ej behöver ha med element så som <head> <body> osv och kan därmed bara lägga tid på den delen som just den template utgör av appen/sida.

    För data som inte är bunden till en specifik komponent men istället ska delas mellan flera "components" gör man till en "service class" med  @Injectable() dekoratorn.

    Detta hjälper "components" att hålla sig lätta och effektiva då jobbet att hämta data lämnas till de olika "service" istället.

    Navigationen av sidan görs med Ngmodulen "Router" vilket i sig är en service och gör det möjligt att navigera sidan/appen enligt redan familiära webläsarnavigationsmodellen som är;

        • att komma åt exakt sida genom url
        • länkar leder till en ny sida
        • fram och bak knappar i webbläsaren tar dig genom de sidor du redan besökt

    Då single page apps består bara av en html-fil så förstår jag här att routern är vad som blandannat gör detta möjlligt.
    När en användare klickar på en länk som leder till en ny sida så hämtar routern den "view" som motsvarar länken och matar det till webbläsaren.

    Routern kan även bestämma att göra något som kallas för "lazy-load" vilket innebär att ladda upp sånt som inte behövs visas nu, senare när det behövs, typ som en kundvagn.

    Routern tolkar länkar enligt appens "view"-navigationsregler och datatillstånd (vilande, används, överförs). 
    När man navigerar runt genom att trycka på knappar, göra val ur listor så lagrar routern den här aktiviteten i webbläsar-historiken så att bak och fram knappen kan fungera.

    Navigationsregler defineras genom att länka "navigation paths" med "components". 
    Dessa "navigations paths" använder URL-liknande syntax och integreras i  programdatan likt hur "template" integreras.`
    
  },
  
  {
    id: 4,
    question: 'Redogör för vad TypeScript är och dess syfte (varför vill vi använda Typescript)',
    answer: `Som jag har förstått så är TypeScript en förbättring till JavaScript.
    Ett sätt som den är bättre på och som jag har redan fått erfara på en extrem nybörjarnivå är att den varnar för fel redan vid "compilation" och bygger inte färdigt förens felet är åtgärdat.
    Enligt typescriptlang.org så är JavaSript inte petig nog att för hitta fel och det är inte förens under "run time" man stötter på dem vilket försvårar arbetet. 
    Detta löser TS med något som kallas för static type checking vilket hittar fel redan innan programmet körs.

    Då Javascript har kommit mycket längre från dess tidiga dagar där den var avseddd för mindre bitar kod som kördes i webbläsaren så är den idag ganska allomfattande och kan köras utanför webbläsare tack vare node.js. Detta ledde till att grunden behövdes göra stabilare och där är vart TypeScript kommer in, det är genom TypeScript vi nu kan använda en plattform som Angular som är skrivet i TypeScript.`
  },
  
  {
    id: 5,
    question: 'Förklara skillnaden mellan att utveckla en webbapplikation som en single page applikation med Angular eller som en "traditionell" webbapplikation.',
    answer: `Skillnaden ligger i att mycket mer kod behöver repeteras och ens egna kunskap behöver vara mycket mer bredare för att koppla ihop de olika delarna med varandra eller skapa system för för att få en viss funktion man är ute efter.
    Med en plattform som Angular har man istället en standard som man får färdigt att fortsätta bygga på man har verktyg att ta del av som man kanske istället hade fått leta separat och försöka förstå hur de fungerar.

    Man får mer tid att lägga ner på skapandet, självklart har man fortfarande en tröskel att komma över när det kommer till att lära sig använda det men den tröskeln verkar ha blivit extremt mycket mindre speciellt när man har så mycket resurser att ta del av.`
  },

];
