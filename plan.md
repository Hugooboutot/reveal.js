Thème  : Histoire de JS et du web
Format : 45' (à confirmer)

# 2010-2012 : transformation du paysage

2010 -- Préprocesseurs CSS, débuts du RWD, essor du web mobile.  Le MVC se solidifie avec Backbone et Angular.
----

  * Avril : [Thoughts on Flash](https://www.apple.com/hotnews/thoughts-on-flash/), lettre ouverte de Steve Jobs qui annonce clairement la mort de Flash le format, qui de toutes façons ne sera jamais pris en charge sur iOS, et qui causera pléthore de crashes sur Android les années suivantes.  Plutôt bien vu, même si Flash survit encore en 2014 grâce aux vidéos à DRM, en attendant d'être remplacé une bonne fois pour toutes avec l'arrivée des EME.
  * 04/10 : LESS 1.0 (Alexis Sellier).  Assez pourri à la base mais a eu le mérite de mettre les préprocesseurs CSS et leurs concepts-clés sur le radar, car SASS restait largement méconnu.
  * 05/10 : SASS 3.0 devient compatible CSS basiques (sur-ensemble).  Défonce royalement LESS, mais il faudra attendre Rails 3.1, un an plus tard, pour que SASS et HAML deviennent vraiment populaires.
  * 25/05/10 : article fondateur [Responsive Web Design](http://alistapart.com/article/responsive-web-design) d'Ethan Marcotte sur A List Apart.
  * 09/10 : sortie de Jasmine, framework populaire de tests JS orienté BDD/specs.
  * 10/10 : Palm webOS devient HP webOS suite au rachat durant l'été, et va donc crever en à peine 1 an, comme tout rachat HP.
  * 10/10 : Backbone débarque (0.1.0) et AngularJS aussi (0.9.0 "dragonbreath", ça sentait au moins aussi bon que ça)
  * 12/10 : SinonJS 1.0
  * 12/10 : ControlJS (Steve Souders), one-shot
  * 12/10 : HeadJS 0.2 (Tero Piirainen & Robert Hoffman), jusqu'en novembre 2012 en gros.
  * 12/10 : CoffeeScript 1.0
  * Début des Nexus de Google.  C'est cette année-là que la part de marché smartphones d'Android décolle (22,5%).  Pendant ce temps, à force de rater le train, RIM (BlackBerry) commence à sombrer et ne reviendra plus (moins de 0,5% du marché en 2014).
  * Le web mobile amorce sa tendance de croissance forte, vers un dépassement du web desktop.  Pour rappel, dans les pays émergents, le web est majoritairement mobile.

2011 -- Très grosse année.  AMD/Require.js, SASS3, Brunch, Bootstrap, Ember, npm, web sockets…
----

  * Chrome commence à sortir des versions toutes les 6 semaines ; Firefox lui emboîte le pas.  Début des browsers *evergreen*.
  * 01/11 : Dust débarque : moteur de templating JS super balèze.  Sera vite repris et maintenu par LinkedIn (1.0 en juillet 2012 ; globalement ce qu'on a de plus balèze aujourd'hui en templating JS ; utilisé aussi par PayPal)
  * 01/11 : jQuery 1.5 introduit les Deferred, qui commencent à tâtonner autour de la notion de Promesse.  Au final, ce ne seront jamais de vraies promesses (au sens Promises/A+), mais ça aura commencé à diffuser la notion.
  * 02/11 : $script.js (Dustian Diaz)
  * 02/11 : Handlebars montre les crocs (Yehuda Katz veut une version nettement boostée de Mustache), utilisé notamment par Ember 1.x et Thorax.
  * 03/11 : Stylus commence à faire parler de lui (TJ Holowaychuck)
  * 04/03/11 : YepNope.js (compagnon de Modernizr, Alex Sexton & Ralph Holzmann), jusqu'en avril 2012
  * IE9 lance la renaissance d'IE à la mi-mars, avec 100% d'ES5, un Canvas accéléré HW, une partie de HTML5 et CSS3 (100% Acid3).  Le DevRel en chef s'appelle Pete LePage (Pète les Pages), ça ne s'invente pas (et ça le fait pisser de rire).
  * 05/11 : AMD sort du bois
  * 05/11 : Rails 3.1 attire l'attention sur SASS 3, HAML et CoffeeScript, enterre Prototype.js, et innove grave côté build avec l'Asset Pipeline, qui préfigure les builds qu'on aura ailleurs avec Brunch, Grunt, Moonboots, etc.
  * 05/11 : Google open-source WebRTC, qui permet aux pages web de faire du P2P inter-device, sans passer par un serveur donc.  Énorme potentiel.  Boulot préliminaire de standardisation au WHATWG, la suite au W3C (WD sept 2013). FF22+, Chrome 23+, Opera 18+.
  * Flash découvre la "vraie" 3D.
  * 07/11 : Brunch (Paul Miller, Nik Graf, Thomas Schranz) commence à sortir du bois
  * 07/11 : Annonce de "Boot 2 Gecko", qui deviendra Firefox OS, par Andreas Gal, Dir Research chez Mozilla.  Lance notamment le travail sur plein d'APIs Device et sur les Manifestes de Web Apps (actuellement en Draft au W3C).
  * 08/11 : Twitter Bootstrap 1.0 (Mark Otto, Jacob Thornton).  Kaboom.  Résurgence de LESS, du coup.
  * 09/11 : BrowserStack débarque (2 types à Bombay).  Va connaître un bon boost en déc 2012 via Modern.IE.  "Seulement" Live au début, et sur des émulateurs (mais avec Local Testing).
  * 19/10/11 : RequireJS 1.0
  * 10/11 : Rachat de PhoneGap par Adobe, d'où le split PhoneGap / Cordova.
  * 11/11 : première sortie de Mocha, le 3ème framework de tests JS, très populaire côté Node, qui gagnera vite du monde côté browser aussi.
  * 12/11 : Chez Twitter, on sort Hogan, une alternative maison à Handlebars.
  * 12/11 : Ember.js (Yehuda Katz) renaît des cendres de SproutCore 2.0.  Massivement CoC.
  * 12/11 : npm fait son apparition en décembre (l'outil et la registry). 6K modules deux semaines plus tard.
  * 12/11 : CasperJS 0.4.0 (première version publique)
  * 12/11 : La RFC 6455 standardise le protocole Web Sockets.  Le W3C planche sur le standard de l'API (CR depuis 2 ans…), mais tous les browsers récents l'implémentent de toutes façons.
  * Cloud9 s'ouvre au public : premier gros EDI moderne en ligne, intégré avec tout le monde.

2012 -- Grunt, essor de la robotique JS et des promesses.
----

  * 01/12 : Bret Victor donne son talk mythique "[Inventing on Principle](http://vimeo.com/36579366)" au CUSEC 2012.
  * 01/12 : 150M active BitTorrent users.
  * 02/12 : Bootstrap 2.0
  * 29/02/12 : Premier Raspberry Pi commercial : modèle B ($35).  Le modèle A sortira un an plus tard.
  * 14/03/12 : Brunch 1.0 ; 2 semaines avant la sortie de Grunt, il enterre déjà ce que sera Grunt 2 ans plus tard.
  * 29/03/12 : Ben Alman, de Bocoup, lance Grunt.  Devient super populaire malgré ses limitations.  Lance le "marché" des outils de build/tâches basées JS, tournant sur Node.  Aujourd'hui, le dev tourne au ralenti, car c'est stable et Gulp a repris une bonne partie du marché.
  * 04/12 : Sortie de Johnny-Five, un framework Node.js pour piloter le firmware Firmata déployable sur la plupart des cartes (Arduino, etc.) ; évoluera vers un système à adaptateurs pour piloter un peu de tout.  À la base des NodeBots, NodeRockets, NodeBoats, etc.
  * 05/12 : Chai.js 1.
  * ??? : SauceLabs étend son offre de tests manuels+automatisés aux browsers et mobiles, ainsi que son offre OpenSauce.  Outre la capitalisation sur Selenium, des tarifs attractifs et la capture vidéo systématique en font un gros challenger de BrowserStack.
  * 13/06/12 : AngularJS 1.0 "temporal-domination" (le bien nommé)
  * Testacular (ex SlimJim, futur Karma (03/2013)) commence à faire parler de lui ; lié à la team Angular, mais indépendant.
  * 06/12 : Promises/A+ 1.0 ; toutes les principales libs (q, then/promise, rsvp, bluebird…) vont débarquer, ou atteindre la 1.0, dans les mois qui suivent.
  * 10/12 : Annonce de Dart (0.1).  WTF.
  * 24/12/12 : Joyeux Noël : CasperJS 1.0
  * Les esprits commencent à bouger autour de JS et du web front : un dev front est clairement une licorne (ou tout du moins un Rainbow Dash).  Des plats de nouille jQuery ne suffisent plus, on commence à faire du JS de qualitay.

# 2013-2015 : JS est partout, le web est mobile et tout s'y connecte

2013 -- Décollage du RWD, Firefox OS, ASM.js, toujours plus de robotique, de tests et de MVC.  JS est vraiment partout, c'est l'année de son affirmation "langage n°1".
----

  * L'année du décollage pour le RWD.
  * L'année de la résurgence de Usenet (créé en 1980 et jamais mort), en particulier pour la diffusion "pirate" de séries TV, au travers du format NZB et d'outils dédiés type SABnzbd et SickBeard.
  * IE11 continue à faire très mal, avec WebGL accéléré HW notamment.  Les F12 Tools ne cessent de s'améliorer et convergent petit à petit vers ceux de Chrome et Firefox.
  * 31/01/13 : Modern.IE -- des VMs clean, de l'audit de page et 3 mois gratuits sur BrowserStack.
  * 02/13 : Firefox OS est l'attraction phare du MWC, avec une pléthore d'annonces et de démos
  * 03/13 : Backbone.js 1.0
  * 03/13 : Apparition d'ASM.js, un sous-ensemble optimisable d'ES3 servant de cible à des compilations type LLJS.  "JS comme runtime".  2 mois plus tard, on aura la démo Citadel/Epic dans Firefox.
  * 03/13 : Sortie de Codio, autre EDI avancé en ligne.
  * 30/04/13 : Intern 1.0, serveur CI pointu, intégrable avec toute l'infra de tests JS, open-source et donc hébergeable on-premise, par SitePen Labs.  Hélas avec son propre DSL (pas Mocha, par exemple).
  * 05/13 : annonce de React, le système de templating/rendering réactif iconoclaste de Facebook.  Mettra un an à devenir populaire, mais inspirera vite beaucoup de choses, dont Ember 2 et Angular 2.
  * 05/13 : Démo Citadel dans Firefox, basée sur le portage LLJS/ASM.js de Unreal Engine 3 (Epic). 60+fps en fullscreen, sans plugin.  Ouvre la voie pour UE4 un an plus tard.
  * 07/13 : David Catuhe et David Rousset, microsoftees, créent sur leur temps libre BabylonJS, qui va devenir un framework de référence pour WebGL.
  * 08/13 : Bootstrap 3.0, mobile-first / responsive.
  * 09/13 : Microsoft annonce TypeScript à JSConf.EU
  * 09/13 : Dart 1.0.  LOL.
  * 09/13 : Ember.js 1.0
  * SauceLabs sort son offre cloud : Automated Browser, Automated Mobile, connecteurs JS et Sauce Connect.  Exploitable par Karma, Mocha, etc.
  * 27/09/13 : Gulp 1.0 (Eric Schoffstall).  Grunt, mais en pipeline.  La communauté adopte super vite, les plugins forkent tout de suite.  Mais reste lent.
  * 10/10 : l'api Web Audio, déjà pas mal implémentée dans les browsers modernes, avance au W3C.  Mozilla joue aussi avec une extension expérimentale, Web Audio Data.
  * 17/10/13 : Intel Galileo ($70)
  * 10/13 : Sortie de CylonJS, un framework robotique et physique pour Node.
  * 11/13 : Sortie de Ionic, framework mobile basé Angular (FBI).
  * 12/13 : Jade, par TJ Holowaychuck.  Templating pur JS (browser et Node) à indentation significative, similaire à HAML et Slim.
  * 23/12 : GitHub passe les 10M dépôts (en moins de 4 ans), le 10ème million n'ayant pris que 48 jours.
  * Mozilla commence à remettre un gros coup sur les Dev Tools de Firefox.

2014 -- Les tendances s'affirment côté hardware, jeux et tests industrialisés.  Le Reactive Programming et les Web Components séduisent.
----

  * 01/14 : le trafic web mobile des US dépasse pour la première fois celui du web desktop.
  * 02/14 : Tessel réussit son crowdfunding et livre ses premiers prototypes.  Spark sort à peu près en même temps, avec un autre modèle cloud-centric.
  * 17/02/14 : Annonce de Broccoli (Jo Liss), parce que Jo n'aime ni Grunt ni Gulp.  Ça va plus vite, c'est de la pipeline, mais ça reste une tonne de code pour de simples builds.
  * On a passé le milliard de sites en septembre.
  * L'année des *success stories* Node : PayPal, LinkedIn, Walmart, Uber, Medium, Groupon, eBay, Microsoft (Azure Mobile Services, etc.), Yahoo!, Storify, Trello, Voxer, Zendesk…  Mais aussi AppFog, Bocoup, Ghost, Koding, LearnBoost, JSBin, Rdio, Shutterstock, SitePen…
  * 05/14 : Ubisoft et MS sortent la version web d'Assassin's Creed: Pirates, entièrement réalisée avec BabylonJS.
  * 05/14 : Mozilla et Epic font une démo du Unreal Engine 4 dans Firefox, toujours basé ASM.js.  Développé sur GitHub en accès contrôlé.
  * 07/14 : FirefoxOS sort en France (mais bon, c'est pas le cœur de cible, hein)
  * 09/14 : Spook, sorte de serveur CI par-dessus CasperJS
  * 08/14 : BrowserStack Automate utilise des vrais devices iOS, et va étendre aux autres plate-formes.
  * 15/10/14 : la registry npm dépasse 100K modules, et augmente à raison d'environ 212 nouveaux modules/jour.  Les écosystèmes les plus vivants derrière sont GoDoc (104, -50%), puis Packagist (83) et MavenCentral (78).
  * 11/14 : MongoDB est apparemment [le datastore NoSQL le plus populaire](http://db-engines.com/en/ranking), classé 5ème, juste derrière PostgreSQL et loin devant Cassandra (10ème), Redis (12ème) et CouchDB (21ème).
  * Firefox OS 2.x devrait sortir d'ici la fin de l'année, ou en janvier 2015.
  * Les nouvelles APIs du W3C (DOM, Storage, ServiceWorker, etc.) sont basées Promesses et commencent à être exposées comme modules plutôt que dans les namespaces globaux.
  * Le plugin Java pour les navigateur est la principale source de CVE :-)
  * La tendance au [Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) (et notamment au [FRP](http://en.wikipedia.org/wiki/Functional_reactive_programming)) dans l'univers JS devient visible, avec [RxJS](http://reactive-extensions.github.io/RxJS/), [Bacon.js](http://baconjs.github.io/), etc.
  * Émergence du noBackend / BaaS, parfois en mode offline-first, avec l'émergence de Hood.ie, Parse, AppFog, Firebase, OpenStack, et le bon vieux App Engine…  Mais aussi AnyPresence, Appcelerator (via Titanium), Kinvey, BaasBox, backendless…
  * Émergence des Web Components, que ce soit via le polyfill de base, Platform/Polymer, ou encore X-Tags/Bricks.  Mais pas les directives Angular… :p

2015 -- Année de bascule ?
----

  * 03/15 : sortie officielle prévue de ES6 finalisé.  Déjà largement pris en charge par les runtimes.  Promesses, modules, POO classique, proxies, affectation déstructurée…
  * AngularJS 2.0 devrait débarquer, très, très peu compatible avec AngularJS 1.0, et pas d'upgrade path propre (contrairement à Ember).  Retente le coup du langage dédié avec AtScript, que beaucoup voient comme le successeur de Dart.
  * Pari : le dernier clou dans le cercueil d'IE6
  * Pari : ES5 voire ES6 en adoption rapide, quitte à passer par du transpiling
  * Pari : Affirmation de Node.js
  * Pari : Décollage des Web Components
  * Pari : début des usages P2P (ex. WebRTC) et du Physical Web / IoT / objets connectés (via BlueTooth LE aussi)
  * Besoin : plus d'ARIA ! plus d'accessibilité !

# Et ensuite ?

  * ES7 prévu en 2016 (sorties annuelles à compter du 6).  Object.observe, async/await, SIMD…
  * [The Birth and Death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) : de 1995 à 2035 (Gary Bernhardt)

Mais aussi : FAI US (CompuServe, AOL) et français (Wanadoo, Freesbee, Numéricable / Noos, Free…)

Idées
=====

* Taguer les slides, permettre un filtrage thématique : HTML, JS, CSS, Multimédia, Temps réel, Paradigmes, Web mobile, Performances, Libraries & Frameworks, MVC (includes templating), Tooling, IoT / Physical Web, Acteurs…
* Des badges, genre "tel achievement unlocked" au fur et à mesure, peut-être ?
* Chopper des photos quali homogènes des principaux acteurs : Brendan Eich, Steve Jobs, Ryan Dahl, Rick Waldron, Brian Leroux, Jeremy Ashkenas…
