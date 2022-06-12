import chata from './img/situace-img/situations/chata.png';
import flour from './img/situace-img/flour.svg';
import foodTray from './img/situace-img/food-tray.svg';
import hand from './img/situace-img/hand.svg';
import water from './img/situace-img/water-gallon.svg';
import storm from './img/situace-img/situations/bourka.png';
import running from './img/situace-img/run.svg';
import walking from './img/situace-img/walking.svg';
import tree from './Hra/img/tree1.svg';
import squat from './img/situace-img/squat.svg';
import electricity from './img/situace-img/situations/draty.png';
import listen from './img/situace-img/listen.svg';
import sosCall from './img/situace-img/sos-call.svg';
import stick from './img/situace-img/stick.svg';
import accident from './img/situace-img/situations/autonehoda.png';
import siren from './img/situace-img/siren.svg';
import call from './img/situace-img/call.svg';
import searching from './img/situace-img/searching.svg';
import doingNothing from './img/situace-img/doing-nothing.svg';
import river from './img/situace-img/situations/reka.png';
import hide from './img/situace-img/hide.svg';
import observing from './img/situace-img/observing.svg';
import camera from './img/situace-img/camera.svg';
import fireplace from './img/situace-img/situations/ohniste.png';
import forestEdge from './img/situace-img/forest-edge.svg';
import waterWell from './img/situace-img/water-well.svg';
import fifty from './img/situace-img/fifty.svg';
import threePeople from './img/situace-img/three-people.svg';
import burnt from './img/situace-img/situations/popaleny.png';
import fan from './img/situace-img/fan.svg';
import window from './img/situace-img/window.svg';
import blanket from './img/situace-img/blanket.svg';
import nature from './img/situace-img/river.svg';
import snow from './img/situace-img/situations/lavina.png';
import breath from './img/situace-img/breath.svg';
import bubble from './img/situace-img/bubble.svg';
import House from './HraciPole/img/house.svg';
import Storm from './HraciPole/img/storm.svg';
import Electricity from './HraciPole/img/electric-pole.svg';
import Accident from './HraciPole/img/accident.svg';
import River from './HraciPole/img/river.svg';
import Fireplace from './HraciPole/img/campfire.svg';
import Burnt from './HraciPole/img/wildfire.svg';
import Snow from './HraciPole/img/avalanche.svg';
import heart from './img/heart.svg';
import heartEmpty from './img/heart_empty.svg';

export const situations = [
  {
    id: 1,
    heading: 'Jak nejlépe uhasíš vznícený olej na pánvi?',
    image: chata,
    altText: 'Jak nejlépe uhasíš vznícený olej na pánvi?',
    answerCorrect:
      'Rychlá a správná reakce může vše zachránit. Je třeba ihned vypnout zdroj tepla a celou pánev zakrýt pečícím plechem nebo dostatečně velkou poklicí (je možné použít i navlhčenou utěrku). Tím se zamezí přístupu vzduchu k plamenům a oheň se během chvilky sám udusí. Nikdy se nesmí hořící olej hasit vodou! Došlo by k vyvržení oleje do okolí a tím ke zvětšení objemu plamenů, které mohou zachvátit celou místnost. Hrozí také ošklivé popálení nebo opaření. Při vaření, smažení, opékání apod. je potřeba zajistit vždy stály dohled. Pozor také na odkládání hořlavých předmětů jako jsou utěrky, papírové ručníky či chňapky.',
    answers: [
      {
        id: 1,
        answer: 'Stáhnu pánev z plotýnky a nechám oheň dohořet',
        icon: hand,
        iconAlt: 'Stáhnu pánev z plotýnky a nechám oheň dohořet',
        correct: false,
      },
      {
        id: 2,
        answer: 'Přikryji pánev poklicí a vařič vypnu',
        icon: foodTray,
        iconAlt: 'Přikryji pánev poklicí a vařič vypnu',
        correct: true,
      },
      {
        id: 3,
        answer: 'Oheň zasypu moukou',
        icon: flour,
        iconAlt: 'Oheň zasypu moukou',
        correct: false,
      },
      {
        id: 4,
        answer: 'Vodou či vodním hasícím přístrojem',
        icon: water,
        iconAlt: 'Vodou či vodním hasícím přístrojem',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    heading:
      'Co uděláš, když tě bouřka zastihne v přírodě, v otevřeném terénu?',
    image: storm,
    altText:
      'Co uděláš, když tě bouřka zastihne v přírodě, v otevřeném terénu?',
    answerCorrect:
      'Poloha v podřepu s nohama co neblíže u sebe představuje nejbezpečnější ochranu před bleskem v otevřeném prostoru. Nohy je potřeba mít co nejvíce u sebe, aby nevznikalo tzv. krokové napětí. Za bouřky se ale neschovávej ani pod osamělými stromy, na okraji lesa, pod převisy nízkých skal, či v menších staveních bez hromosvodu. Vhodný úkryt nepředstavuje ani stan či malá jeskyně ve skále, tam všude vás může zasáhnout blesk. Největší nebezpečí zásahu bleskem hrozí při pobytu v otevřeném terénu a na vyvýšených místech. Velké nebezpečí představuje také koupání a pohyb v blízkosti vody. Za bouřky venku nepřenášej kovové předměty – fungují jako hromosvod.',
    answers: [
      {
        id: 1,
        answer: 'Uteču se schovat',
        icon: running,
        iconAlt: 'Uteču se schovat',
        correct: false,
      },
      {
        id: 2,
        answer: 'Pokračuji v chůzi',
        icon: walking,
        iconAlt: 'Pokračuji v chůzi',
        correct: false,
      },
      {
        id: 3,
        answer: 'Schovám se pod stromy',
        icon: tree,
        iconAlt: 'Schovám se pod stromy',
        correct: false,
      },
      {
        id: 4,
        answer: 'Dřepnu si, nejlépe do nějaké prohlubně',
        icon: squat,
        iconAlt: 'Dřepnu si, nejlépe do nějaké prohlubně',
        correct: true,
      },
    ],
  },
  {
    id: 3,
    heading:
      'Co uděláš, naleznešli při procházce spadlé dráty vysokého napětí?',
    image: electricity,
    altText:
      'Co uděláš, naleznešli při procházce spadlé dráty vysokého napětí?',
    answerCorrect:
      'Vysoké napětí je mnohem nebezpečnější než domácí zásuvka, neboť jeho velikost přesahuje i několik desítek tisíc voltů a kontakt s ním znamená téměř jistou smrt. Nikdy se nedotýkej drátů spadlých na zem! Nikdy nešplhej na tramvaje, trolejbusy nebo vagóny na nádraží! Pro zásah vysokým napětím se nemusíš drátů ani dotknout, výboj přeskočí i na poměrně velkou vzdálenost. Pokud se v blízkosti drátů vyskytuje poraněný člověk, první pomoc mu můžeš podat až po zajištění bezpečnosti na místě úrazu - odpojení poraněného od proudu. Po zásahu elektrickým proudem je nutné vždy nechat vyšetřit postiženého lékařem, k poruchám srdeční činnosti může docházet i delší dobu po zásahu proudem.',
    answers: [
      {
        id: 1,
        answer: 'Můžu na ně sáhnout a odklidit je stranou',
        icon: hand,
        iconAlt: 'Můžu na ně sáhnout a odklidit je stranou',
        correct: false,
      },
      {
        id: 2,
        answer:
          'Nesahám na ně, poslechem zjistím, zda jsou pod proudem a uvědomím záchranáře',
        icon: listen,
        iconAlt:
          'Nesahám na ně, poslechem zjistím, zda jsou pod proudem a uvědomím záchranáře',
        correct: false,
      },
      {
        id: 3,
        answer:
          'Nesahám na ně, ani se k nim nepřibližuji a uvědomím záchranáře',
        icon: sosCall,
        iconAlt:
          'Nesahám na ně, ani se k nim nepřibližuji a uvědomím záchranáře',
        correct: true,
      },
      {
        id: 4,
        answer: 'Odklidím je stranou pomocí izolantu',
        icon: stick,
        iconAlt: 'Odklidím je stranou pomocí izolantu',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    heading:
      'Co uděláš, stane-li se v tvé blízkosti dopravní nehoda, při níž je zraněn člověk?',
    image: accident,
    altText:
      'Co uděláš, stane-li se v tvé blízkosti dopravní nehoda, při níž je zraněn člověk?',
    answerCorrect:
      'Když se člověk stane svědkem dopravní nehody a může poskytnout pomoc ostatním v první řadě je potřeba zachovat klid. Při poskytování pomoci dbát na vlastní bezpečnost a bezpečnost ostatních účastníků nehody. Obléct si výstražnou vestu a neprodleně zavolat na linku tísňového volání, nejlépe 112. Je-li to možné, v dostatečné vzdálenosti před nehodou umístit výstražný trojúhelník a zajistit provizorní regulaci nebo odklon dopravy, aby nedošlo k řetězení nehody. Zjistit, jaký je rozsah nehody – počet zraněných, další možné nebezpečí a v rámci svých možností nebo za pomoci operátora tísňové linky poskytnout první pomoc. Po příjezdu záchranářů se řídit jejich pokyny a jako svědek dopravní nehody setrvat na místě, být k dispozici veliteli zásahu a poskytnout své svědectví. Nikdy nezapomínej na důležitou zásadu chování v silničním provozu: „vidět a být viděn“.',
    answers: [
      {
        id: 1,
        answer:
          'Ihned zavolám na linku 112 nebo 155 a přivolám pomoc záchranných složek',
        icon: siren,
        iconAlt:
          'Ihned zavolám na linku 112 nebo 155 a přivolám pomoc záchranných složek',
        correct: true,
      },
      {
        id: 2,
        answer: 'Odejdu hledat pomoc v nejbližším okolí',
        icon: searching,
        iconAlt: 'Odejdu hledat pomoc v nejbližším okolí',
        correct: false,
      },
      {
        id: 3,
        answer: 'Zavolám známému, který mi bude umět poradit',
        icon: call,
        iconAlt: 'Zavolám známému, který mi bude umět poradit',
        correct: false,
      },
      {
        id: 4,
        answer: 'Neudělám nic a počkám, co se bude dít',
        icon: doingNothing,
        iconAlt: 'Neudělám nic a počkám, co se bude dít',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    heading: 'Když se rozvodní řeka:',
    image: river,
    altText: 'Když se rozvodní řeka:',
    answerCorrect:
      'Jednou z nejčastějších mimořádných událostí způsobených přírodními vlivy v ČR jsou povodně. Je důležité vědět, že síla přírodních živlů je stále, i v dnešní moderní době, zrádná, těžko předvídatelná a není ji možné zcela zkrotit. Jednou z důležitých zásad při povodni je, že se nesmíš zdržovat blízko břehů, hrozí zde jejich podmáčení a následný sesuv. Obdobné nebezpečí hrozí také, pokud se budeš zdržovat na mostech. Tady pod tíhou proudu, naplavenin a vlivem podmáčení může dojít k jejich zřícení. Také brodit se povodňovou vodou, a to i v místech, která dobře znáš, je nebezpečné. Doslova život ohrožující je vyjet si na rozvodněnou řeku na lodi. Jakékoliv podcenění rizik při povodni může skončit tragicky.',
    answers: [
      {
        id: 1,
        answer: 'Schovám se do sklepa',
        icon: hide,
        iconAlt: 'Schovám se do sklepa',
        correct: false,
      },
      {
        id: 2,
        answer:
          'Jdu se podívat, o kolik už řeka stoupla, abych to mohl nahlásit záchranným složkám',
        icon: observing,
        iconAlt:
          'Jdu se podívat, o kolik už řeka stoupla, abych to mohl nahlásit záchranným složkám',
        correct: false,
      },
      {
        id: 3,
        answer:
          'Sleduji situaci a pravidelně ji fotím, abych mohl podat informace bezpečnostním složkám',
        icon: camera,
        iconAlt:
          'Sleduji situaci a pravidelně ji fotím, abych mohl podat informace bezpečnostním složkám',
        correct: false,
      },
      {
        id: 4,
        answer: 'K řece se v žádném případě nepřibližuji',
        icon: doingNothing,
        iconAlt: ' řece se v žádném případě nepřibližuji',
        correct: true,
      },
    ],
  },
  {
    id: 6,
    heading: 'Můžeš rozdělávat oheň v lese?',
    image: fireplace,
    altText: 'Můžeš rozdělávat oheň v lese?',
    answerCorrect:
      'V lese oheň nikdy nerozdělávej! Vhodné místo pro ohniště je minimálně 50 metrů od okraje lesa a v dostatečné vzdálenosti od budov a hořlavých materiálů. Oheň nikdy nezakládej pod větvemi stromů, na kořenech stromů, na suchém listí, lesní hrabance nebo rašelině, v blízkosti suché trávy nebo obilí, stohů slámy, seníků apod. Ohniště je vždy potřeba bezpečně oddělit od okolního prostředí, například kameny, obsypáním pískem, vyhloubením zeminy apod. Pro zapálení v žádném případě nepoužívejte vysoce hořlavé látky (např. líh). Oheň nesmíš ponechat bez dozoru. Před ochodem musíš ohniště důkladně uhasit (z ohniště se nesmí kouřit a popel i půda pod ohništěm musí být chladná. Děti by neměly být u ohniště bez dozoru osob starších 18-ti let.',
    answers: [
      {
        id: 1,
        answer:
          'Ano, ale musím zajistit dostatečné množství vody na uhasení případného požáru',
        icon: waterWell,
        iconAlt:
          'Ano, ale musím zajistit dostatečné množství vody na uhasení případného požáru',
        correct: false,
      },
      {
        id: 2,
        answer: 'Ne, ohniště musí být vzdálené nejméně 50 metrů od lesa',
        icon: fifty,
        iconAlt: 'Ne, ohniště musí být vzdálené nejméně 50 metrů od lesa',
        correct: true,
      },
      {
        id: 3,
        answer: 'Ano, pokud jsou přítomny alespoň 3 dospelé osoby',
        icon: threePeople,
        iconAlt: 'Ano, pokud jsou přítomny alespoň 3 dospelé osoby',
        correct: false,
      },
      {
        id: 4,
        answer: 'Ne, ale mohu ho rozdělat kdekoliv na okraji lesa',
        icon: forestEdge,
        iconAlt: 'Ne, ale mohu ho rozdělat kdekoliv na okraji lesa',
        correct: false,
      },
    ],
  },
  {
    id: 7,
    heading:
      'Co uděláš, když při opékání špekáčků začne kamarádovi hořet oděv?',
    image: burnt,
    altText:
      'Co uděláš, když při opékání špekáčků začne kamarádovi hořet oděv?',
    answerCorrect:
      'K tomu, aby oheň mohl hořet, potřebuje zejména přívod vzduchu. Proto základní zásada pro uhašení ohně je, pokusit se zamezit přívod vzduchu a tím hoření udusit, respektive uhasit. Pokud na nás začne hořet oděv, v žádném případě nesmíme utíkat, protože jen ohni přidáváme vzduch. Nejúčinnější uhašení je hodit na hořícího deku, kabát, prostě tlustou textilii (nesmí být z umělých vláken), kterou udusíme hoření. Pokud nic po ruce nemáme, pomůže lehnout si na zem, pro ochranu obličeje si ho zakrýt dlaněmi (dlaně nepřikládejte na tvář jen v případě, že hoří rukávy oblečení) a kutálet se ze strany na stranu tak, abychom zamezili přístupu vzduchu a tudíž uhasili hořící oděv.',
    answers: [
      {
        id: 1,
        answer: 'Budu ho rychle ovívat nějakou plachtou, abych ho uhasil/a',
        icon: fan,
        iconAlt: 'Budu ho rychle ovívat nějakou plachtou, abych ho uhasil/a',
        correct: false,
      },
      {
        id: 2,
        answer: 'Nepřibližuji se k němu, držím se od ohně co nejdál',
        icon: doingNothing,
        iconAlt: 'Nepřibližuji se k němu, držím se od ohně co nejdál',
        correct: false,
      },
      {
        id: 3,
        answer:
          'Povalím ho na zem, aby válel sudy, nebo na něj hodím deku a pokusím se oheň udusit',
        icon: blanket,
        iconAlt:
          'Povalím ho na zem, aby válel sudy, nebo na něj hodím deku a pokusím se oheň udusit',
        correct: true,
      },
      {
        id: 4,
        answer: 'Poběžím s ním k nejbližšímu zdroji vody, kde ho uhasím',
        icon: nature,
        iconAlt: 'Poběžím s ním k nejbližšímu zdroji vody, kde ho uhasím',
        correct: false,
      },
    ],
  },
  {
    id: 8,
    heading: 'Jak se co nejlépe zachovat, pokud tě zastihne horská lavina?',
    image: snow,
    altText: 'Jak se co nejlépe zachovat, pokud tě zastihne horská lavina?',
    answerCorrect:
      'V ČR jsou přesně vymezeny lokality lavinového nebezpečí, které jsou v zimním období označeny, a je zakázáno do nich vstupovat. Přesto může nastat situace, kdy budete lavinou ohroženi. Ve chvíli, kdy se lavina dá do pohybu, je třeba se pokusit ujet (na lyžích, saních či snowboardu) z její dráhy. Pokud nestihneme uniknout, snažíme se pomocí kraulových pohybů udržet na povrchu a „vyplavat“ do strany mimo hlavní proud. Snažíme se chránit si obličej a stočit se do klubíčka. Po zastavení se pokusíme vytvořit si vzduchovou kapsu před ústy a nosem, vyčistit si ústa od sněhu. Nejsme-li vážně zraněni, pokusíme se sami vyhrabat z laviny, nejprve však zjistíme, kterým směrem je povrch (necháme volně viset hodinky nebo řetízek, případně slinu po tváři a pomocí gravitace určíme správný směr nahoru). Není dobré se vzdávat, prvních 15 minut pod lavinou má člověk 90% šanci na záchranu.',
    answers: [
      {
        id: 1,
        answer: 'Zhluboka se nadechnu a zadržuji dech, dokud to jde',
        icon: breath,
        iconAlt: 'Zhluboka se nadechnu a zadržuji dech, dokud to jde',
        correct: false,
      },
      {
        id: 2,
        answer:
          'Vložím si ruku před pusu, stočím se do klubíčka a snažím se vytvořit vzduchovou kapsu',
        icon: bubble,
        iconAlt:
          'Vložím si ruku před pusu, stočím se do klubíčka a snažím se vytvořit vzduchovou kapsu',
        correct: true,
      },
      {
        id: 3,
        answer: 'Vyšlu informaci o své poloze záchranářům',
        icon: sosCall,
        iconAlt: 'Vyšlu informaci o své poloze záchranářům',
        correct: false,
      },
      {
        id: 4,
        answer:
          'Nemá smysl se o cokoliv pokoušet, pouze čekám a doufám, že mě někdo najde',
        icon: doingNothing,
        iconAlt:
          'Nemá smysl se o cokoliv pokoušet, pouze čekám a doufám, že mě někdo najde',
        correct: false,
      },
    ],
  },
];

export const gamefieldIcons = [
  {
    id: 1,
    classDiv: 'house',
    classImg: 'gamefield_icon',
    image: House,
    altText: 'Vejít do chaty',
  },
  {
    id: 2,
    classDiv: 'storm',
    classImg: 'gamefield_icon',
    image: Storm,
    altText: 'Bouřka',
  },
  {
    id: 3,
    classDiv: 'electricity',
    classImg: 'gamefield_icon',
    image: Electricity,
    altText: 'Dráty vysokého napětí',
  },
  {
    id: 4,
    classDiv: 'accident',
    classImg: 'gamefield_icon',
    image: Accident,
    altText: 'Autonehoda',
  },
  {
    id: 5,
    classDiv: 'river',
    classImg: 'gamefield_icon',
    image: River,
    altText: 'Řeka',
  },
  {
    id: 6,
    classDiv: 'fireplace',
    classImg: 'gamefield_icon',
    image: Fireplace,
    altText: 'Ohniště',
  },
  {
    id: 7,
    classDiv: 'burnt',
    classImg: 'gamefield_icon',
    image: Burnt,
    altText: 'Hořící oděv',
  },
  {
    id: 8,
    classDiv: 'snow',
    classImg: 'gamefield_icon',
    image: Snow,
    altText: 'Lavina',
  },
];

export const lives = [
  [heart, heart, heart, heart, heart],
  [heart, heart, heart, heart, heartEmpty],
  [heart, heart, heart, heartEmpty, heartEmpty],
  [heart, heart, heartEmpty, heartEmpty, heartEmpty],
  [heart, heartEmpty, heartEmpty, heartEmpty, heartEmpty],
  [heartEmpty, heartEmpty, heartEmpty, heartEmpty, heartEmpty],
];
