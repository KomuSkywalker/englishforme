import type { GrammarTopic } from "./types";

export const grammarTopics2: GrammarTopic[] = [
  {
    id: "relative-clauses",
    title: "Relative Clauses",
    titleTr: "İlgi Cümlecikleri",
    level: 2,
    summary: "who, which, where derken kaybolma: iki cümleyi tek zincirde birleştirmenin en şık yolu burada!",
    sections: [
      {
        heading: "who, which, that: kim kimi tanımlıyor?",
        body: "Relative clause dediğimiz şey aslında bir ismin hemen arkasına yapışıp onu tarif eden mini bir cümle. Kişilerden bahsediyorsak who, nesnelerden ve hayvanlardan bahsediyorsak which kullanıyoruz. that ise ikisinin de yerine geçebilen joker kart (ama birazdan göreceğin virgüllü cümlelerde bu joker geçersiz). Türkçede biz bunu tek kelimeyle hallederiz: koşan adam. İngilizcede ise sıra ters döner: the man who runs.",
        examples: [
          { en: "The woman who called you is my aunt.", tr: "Seni arayan kadın benim teyzem." },
          { en: "I bought a phone which has a great camera.", tr: "Harika bir kamerası olan bir telefon aldım." },
          { en: "The cake that you made was delicious.", tr: "Yaptığın kek çok lezzetliydi." }
        ]
      },
      {
        heading: "whose, whom, where, when, why",
        body: "Ailenin diğer üyeleriyle tanış! whose sahiplik bildirir (kimin), where yer, when zaman, why sebep anlatır. whom ise who'nun resmi ve nesne halidir, özellikle to whom, with whom gibi edatlı yapılarda sınavda karşına çıkar. Türk öğrencilerin klasik hatası: where'den sonra bir daha yer zamiri kullanmak. \"The city where I live in\" yanlış, in'e gerek yok çünkü where zaten o işi yapıyor.",
        examples: [
          { en: "That is the girl whose brother won the prize.", tr: "İşte kardeşi ödülü kazanan kız o." },
          { en: "This is the town where I grew up.", tr: "Burası büyüdüğüm kasaba." },
          { en: "I still remember the day when we graduated.", tr: "Mezun olduğumuz günü hala hatırlıyorum." },
          { en: "The person to whom you spoke is the manager.", tr: "Konuştuğun kişi müdürün ta kendisi." }
        ]
      },
      {
        heading: "Defining vs Non-defining: virgülün gücü",
        body: "Virgülsüz relative clause (defining) ismi tanımlar, o bilgi olmadan cümle eksik kalır. Virgüllü olan (non-defining) ise sadece ekstra bilgi verir, cümleden çıkarsan da anlam bozulmaz. Altın kural: virgüllü cümlelerde asla that kullanılmaz! Bir bonus daha: virgülden sonra gelen which, bazen önceki cümlenin tamamına gönderme yapar. Bu, MÜYYES'in bayıldığı bir sorudur.",
        examples: [
          { en: "My sister, who lives in Izmir, is a nurse.", tr: "İzmir'de yaşayan kız kardeşim hemşiredir." },
          { en: "The students who studied hard passed the exam.", tr: "Sıkı çalışan öğrenciler sınavı geçti." },
          { en: "He forgot my birthday, which really upset me.", tr: "Doğum günümü unuttu, bu da beni gerçekten üzdü." }
        ]
      },
      {
        heading: "Kısaltmalar: reduced relative clauses",
        body: "Sınavın seviye atladığı yer burası. who is, which was gibi kısımları atıp fiili -ing veya V3 haline getirebiliriz. Cümle aktifse -ing (the boy playing football), pasifse V3 (the letter written by him) kullanılır. Boşluktan önce bir isim, boşluktan sonra fiilin devamı görüyorsan aklına hemen bu kısaltma gelsin.",
        examples: [
          { en: "The man standing at the door is my uncle.", tr: "Kapıda duran adam benim amcam." },
          { en: "The novel written in 1950 is still popular.", tr: "1950'de yazılan roman hala popüler." },
          { en: "Students wanting extra help can stay after class.", tr: "Ekstra yardım isteyen öğrenciler dersten sonra kalabilir." }
        ]
      }
    ],
    tips: [
      "Virgül gördüğün relative clause sorusunda that seçeneğini anında ele: virgülle that asla yan yana gelmez.",
      "Boşluktan sonra isim varsa (the girl ___ father) cevap büyük ihtimalle whose'dur.",
      "where varsa artık in, at gibi yer edatına gerek yok: \"the city where I live in\" tuzağına düşme.",
      "Edattan hemen sonra who değil whom gelir: to whom, with whom.",
      "Boşluk + fiilin -ing veya V3 hali seçeneklerdeyse reduced clause sorusundasın: aktifse -ing, pasifse V3."
    ],
    exercises: [
      { id: "relative-clauses-e1", prompt: "The man ___ lives next door is a doctor.", options: ["which", "who", "where", "whose"], answer: 1, explain: "Kişiden bahsediyoruz ve özne konumunda, bu yüzden who." },
      { id: "relative-clauses-e2", prompt: "This is the book ___ I told you about.", options: ["who", "where", "which", "whom"], answer: 2, explain: "Nesnelerden bahsederken which kullanılır." },
      { id: "relative-clauses-e3", prompt: "The city ___ I was born is on the coast.", options: ["which", "who", "when", "where"], answer: 3, explain: "Yer bildiren isimden sonra where gelir." },
      { id: "relative-clauses-e4", prompt: "The woman ___ car was stolen called the police.", options: ["whose", "who", "which", "that"], answer: 0, explain: "Boşluktan sonra isim (car) var, sahiplik için whose." },
      { id: "relative-clauses-e5", prompt: "I will never forget the day ___ we first met.", options: ["which", "where", "when", "who"], answer: 2, explain: "Zaman bildiren isimden (day) sonra when kullanılır." },
      { id: "relative-clauses-e6", prompt: "The people ___ we met on holiday were very friendly.", options: ["whose", "which", "where", "that"], answer: 3, explain: "Kişiler için nesne konumunda that kullanılabilir." },
      { id: "relative-clauses-e7", prompt: "Is there a reason ___ she left so early?", options: ["why", "which", "where", "when"], answer: 0, explain: "reason kelimesinden sonra sebep bildiren why gelir." },
      { id: "relative-clauses-e8", prompt: "My brother, ___ lives in Berlin, is visiting us next week.", options: ["that", "which", "who", "whose"], answer: 2, explain: "Virgüllü (non-defining) yapıda that kullanılmaz, kişi için who." },
      { id: "relative-clauses-e9", prompt: "The hotel ___ we stayed last summer has closed down.", options: ["which", "where", "that", "when"], answer: 1, explain: "stayed edatsız kullanıldığı için yer anlamını where karşılar." },
      { id: "relative-clauses-e10", prompt: "She failed the exam, ___ surprised everyone.", options: ["that", "what", "which", "who"], answer: 2, explain: "Virgülden sonra tüm cümleye gönderme yapan which gelir." },
      { id: "relative-clauses-e11", prompt: "The manager to ___ I sent the report has resigned.", options: ["who", "which", "whose", "whom"], answer: 3, explain: "Edattan (to) hemen sonra whom kullanılır." },
      { id: "relative-clauses-e12", prompt: "Most of the students ___ in the survey were satisfied.", options: ["who interviewed", "interviewed", "interviewing", "which interviewed"], answer: 1, explain: "Pasif anlam (görüşülen öğrenciler) için kısaltılmış V3 kullanılır." },
      { id: "relative-clauses-e13", prompt: "The train ___ at platform 3 goes to the airport.", options: ["waits", "waited", "waiting", "which waiting"], answer: 2, explain: "Aktif anlamda kısaltılmış relative clause için -ing." },
      { id: "relative-clauses-e14", prompt: "Choose the correct sentence.", options: ["My father, that is 60, still works.", "My father, who is 60, still works.", "My father who is 60, still works.", "My father, which is 60, still works."], answer: 1, explain: "Non-defining yapıda kişi için virgül + who doğrudur." }
    ]
  },
  {
    id: "noun-clauses",
    title: "Noun Clauses & Reported Speech",
    titleTr: "İsim Cümlecikleri ve Dolaylı Anlatım",
    level: 3,
    summary: "\"Ne dediğini bilmiyorum\" cümlesini İngilizce kurarken kelime sırası şaşıranlar buraya: dedikodu bile gramer ister!",
    sections: [
      {
        heading: "that ile isim cümlecikleri",
        body: "Bir cümlenin tamamını isim gibi kullanmak istersen başına that koyman yeter. Bu koca yapı artık cümlenin öznesi ya da nesnesi olabilir. I think that..., I believe that... kalıplarında that'i atabilirsin ama cümle başında özne olarak kullanıyorsan that zorunlu. Bir de The fact that... kalıbı var, sınav bunu çok sever.",
        examples: [
          { en: "I know that you are busy these days.", tr: "Bu aralar meşgul olduğunu biliyorum." },
          { en: "That she won the scholarship made us all happy.", tr: "Onun bursu kazanması hepimizi mutlu etti." },
          { en: "The fact that he lied changed everything.", tr: "Yalan söylemiş olması gerçeği her şeyi değiştirdi." }
        ]
      },
      {
        heading: "Gömülü sorular: kelime sırasına dikkat!",
        body: "Türk öğrencilerin en klasik hatası burada patlıyor. \"Where does he live?\" bir sorudur ama \"I don't know where he lives\" içinde artık soru yoktur, düz cümle sırası kullanılır. Yani does, did gibi yardımcılar gömülü cümlede kaybolur ve fiil normal çekimine döner. Kural basit: wh- kelimesinden sonra özne + fiil, asla tersini yapma.",
        examples: [
          { en: "I don't know where he lives.", tr: "Nerede yaşadığını bilmiyorum." },
          { en: "Can you tell me what time the bank opens?", tr: "Bankanın saat kaçta açıldığını söyleyebilir misin?" },
          { en: "Nobody understands why she resigned.", tr: "Neden istifa ettiğini kimse anlamıyor." }
        ]
      },
      {
        heading: "if ve whether: acaba'nın İngilizcesi",
        body: "Evet/hayır sorusunu gömülü hale getirirken wh- kelimemiz yok, o yüzden if veya whether devreye girer. İkisi çoğu yerde eşdeğerdir ama or not ile birlikte ve edattan sonra whether tercih edilir. wonder, ask, not sure gibi ifadelerden sonra bu yapı sık sık karşına çıkacak.",
        examples: [
          { en: "I wonder whether they will come to the party.", tr: "Acaba partiye gelecekler mi diye merak ediyorum." },
          { en: "She asked me if I needed any help.", tr: "Bana yardıma ihtiyacım olup olmadığını sordu." },
          { en: "It depends on whether the weather is good.", tr: "Havanın iyi olup olmamasına bağlı." }
        ]
      },
      {
        heading: "Reported speech: zamanda bir adım geri",
        body: "Birinin sözünü aktarırken zamanlar bir adım geriye kayar: present, past olur; past, past perfect olur; will, would olur. Zamir ve zaman ifadeleri de değişir: today yerine that day, tomorrow yerine the next day. Panik yok, mantık hep aynı: aktarma anında o söz artık geçmişte kaldığı için her şey bir vites geri gider.",
        examples: [
          { en: "\"I am tired,\" she said. She said that she was tired.", tr: "\"Yorgunum\" dedi. Yorgun olduğunu söyledi." },
          { en: "He said he had finished the project the day before.", tr: "Projeyi bir gün önce bitirdiğini söyledi." },
          { en: "They told us they would visit us the following week.", tr: "Bize ertesi hafta ziyarete geleceklerini söylediler." }
        ]
      },
      {
        heading: "Aktarılan sorular ve emirler",
        body: "Soru aktarırken asked + gömülü soru sırası kullanılır, soru işareti ve yardımcı fiil devrilmesi yok olur. Emir aktarırken ise formül çok tatlıdır: told/asked + kişi + to V1, olumsuzsa not to V1. \"Don't be late\" cümlesi \"She told me not to be late\" olur. not'un yerini şaşırtmak sınavın favori oyunudur.",
        examples: [
          { en: "He asked me where I worked.", tr: "Bana nerede çalıştığımı sordu." },
          { en: "The doctor advised him to rest for a few days.", tr: "Doktor ona birkaç gün dinlenmesini tavsiye etti." },
          { en: "She warned us not to swim in the cold water.", tr: "Bizi soğuk suda yüzmememiz konusunda uyardı." }
        ]
      }
    ],
    tips: [
      "Gömülü soruda asla soru sırası kullanma: \"I don't know where does he live\" her zaman yanlıştır.",
      "say ve tell farkı: tell'den sonra mutlaka kişi gelir (told me), say'den sonra gelmez (said that).",
      "Aktarılan emirlerde olumsuzluk not to V1 ile yapılır: told me not to go.",
      "Reported speech sorusunda zaman zarflarına bak: yesterday görürsen cevapta the day before ve past perfect ara.",
      "Cümlenin öznesi bir noun clause ise fiil tekil çekilir: What he said is true."
    ],
    exercises: [
      { id: "noun-clauses-e1", prompt: "I don't know where ___.", options: ["does he live", "he lives", "is he living", "lives he"], answer: 1, explain: "Gömülü soruda düz cümle sırası kullanılır: özne + fiil." },
      { id: "noun-clauses-e2", prompt: "She said that she ___ tired.", options: ["is", "be", "was", "has"], answer: 2, explain: "said'den sonra zaman bir adım geriye kayar: is, was olur." },
      { id: "noun-clauses-e3", prompt: "Can you tell me what time ___?", options: ["the bank opens", "does the bank open", "opens the bank", "the bank open"], answer: 0, explain: "Gömülü soruda yardımcı fiil (does) kullanılmaz." },
      { id: "noun-clauses-e4", prompt: "He asked me ___ I liked coffee.", options: ["that", "what", "whether", "which"], answer: 2, explain: "Evet/hayır sorusu aktarılırken whether veya if gelir." },
      { id: "noun-clauses-e5", prompt: "___ she passed the exam made her parents proud.", options: ["What", "That", "Which", "Who"], answer: 1, explain: "Tam bir cümleyi özne yapmak için başına that konur." },
      { id: "noun-clauses-e6", prompt: "Tom said he ___ the movie the night before.", options: ["sees", "has seen", "saw", "had seen"], answer: 3, explain: "the night before ipucu: geçmişin geçmişi için past perfect." },
      { id: "noun-clauses-e7", prompt: "The teacher asked us ___ quiet.", options: ["that we are", "being", "be", "to be"], answer: 3, explain: "Emir aktarılırken asked + kişi + to V1 kalıbı kullanılır." },
      { id: "noun-clauses-e8", prompt: "I wonder ___ they will arrive on time.", options: ["what", "whether", "that", "which"], answer: 1, explain: "wonder'dan sonra olup olmayacağı anlamı için whether gelir." },
      { id: "noun-clauses-e9", prompt: "She told me that she ___ me the next day.", options: ["will call", "calls", "would call", "is calling"], answer: 2, explain: "Aktarmada will, would'a dönüşür." },
      { id: "noun-clauses-e10", prompt: "What he said ___ true.", options: ["are", "is", "were", "be"], answer: 1, explain: "Özne konumundaki noun clause tekil fiil alır." },
      { id: "noun-clauses-e11", prompt: "\"Don't touch the wire,\" he said. He warned me ___ the wire.", options: ["not touching", "to not touching", "don't touch", "not to touch"], answer: 3, explain: "Olumsuz emir aktarımı not to V1 ile yapılır." },
      { id: "noun-clauses-e12", prompt: "He asked me where ___ the previous summer.", options: ["did I go", "I have gone", "had I gone", "I had gone"], answer: 3, explain: "Gömülü soru sırası + geçmişin aktarımı için I had gone." },
      { id: "noun-clauses-e13", prompt: "The fact ___ she never apologized upset everyone.", options: ["which", "what", "that", "whose"], answer: 2, explain: "The fact kalıbından sonra that gelir." },
      { id: "noun-clauses-e14", prompt: "She wanted to know ___.", options: ["why I had left the party early", "why had I left the party early", "why did I leave the party early", "that why I left the party early"], answer: 0, explain: "Gömülü soruda düz sıra ve zaman kayması birlikte kullanılır." }
    ]
  },
  {
    id: "gerund-infinitive",
    title: "Gerunds & Infinitives",
    titleTr: "Gerund ve Infinitive: -ing mi to mu?",
    level: 2,
    summary: "enjoy doing ama want to do: hangi fiil neyi sever sorusunun cevabı ezber değil, mantık ve bolca örnekle burada!",
    sections: [
      {
        heading: "-ing seven fiiller",
        body: "Bazı fiiller arkalarına fiil alacaklarsa onu mutlaka -ing halinde ister. En popülerleri: enjoy, avoid, finish, mind, suggest, deny, keep, practise, consider. Küçük bir hafıza hilesi: bu fiillerin çoğu bir eylemi yaşarken ya da sürdürürken kullanılır, o yüzden süreç kokan -ing ile anlaşırlar. suggest'e ekstra dikkat: \"suggest to do\" diye bir şey yok, sınav bu tuzağı çok kurar.",
        examples: [
          { en: "I enjoy swimming in the sea.", tr: "Denizde yüzmekten keyif alırım." },
          { en: "He denied breaking the window.", tr: "Camı kırdığını inkar etti." },
          { en: "She suggested going to the cinema.", tr: "Sinemaya gitmeyi önerdi." }
        ]
      },
      {
        heading: "to seven fiiller",
        body: "Diğer takım ise arkasına to + V1 ister: want, decide, hope, plan, refuse, agree, promise, offer, manage, afford. Bunların ortak havası genelde geleceğe dönük bir niyet ya da karardır. Bir de fiil + kişi + to V1 kalıbı var: want you to come, ask him to help. Türkçede \"gelmeni istiyorum\" dediğimiz yapı işte tam olarak bu.",
        examples: [
          { en: "They decided to move to a bigger city.", tr: "Daha büyük bir şehre taşınmaya karar verdiler." },
          { en: "She refused to answer my question.", tr: "Soruma cevap vermeyi reddetti." },
          { en: "My parents want me to study medicine.", tr: "Ailem tıp okumamı istiyor." }
        ]
      },
      {
        heading: "İkisini de alıp anlamı değiştirenler",
        body: "İşte sınavın yıldız konusu! stop, remember, forget, try, regret hem -ing hem to alır ama anlam bambaşka olur. stop doing: yapmayı bırakmak, stop to do: yapmak için durmak. remember doing: geçmişte yaptığını hatırlamak, remember to do: yapman gereken görevi unutmamak. Kısa formül: -ing genelde geçmişe, to genelde geleceğe ya da göreve bakar.",
        examples: [
          { en: "He stopped smoking last year.", tr: "Geçen yıl sigarayı bıraktı." },
          { en: "We stopped to take some photos.", tr: "Fotoğraf çekmek için durduk." },
          { en: "Remember to lock the door when you leave.", tr: "Çıkarken kapıyı kilitlemeyi unutma." },
          { en: "I remember visiting this museum as a child.", tr: "Çocukken bu müzeyi ziyaret ettiğimi hatırlıyorum." }
        ]
      },
      {
        heading: "Edattan sonra -ing, amaç için to",
        body: "Demir gibi bir kural: edattan (in, of, at, about, for...) sonra fiil geliyorsa hep -ing olur: interested in learning, good at cooking, tired of waiting. Ama bir işi neden yaptığını anlatıyorsan to + V1 kullanılır: I went out to buy bread. Türkçe düşünüp \"for buying bread\" demek en klasik hatalardan, amaç varsa to var. Ayrıca look forward to, be used to gibi kalıplardaki to bir edattır, arkasına -ing gelir.",
        examples: [
          { en: "She is interested in learning Japanese.", tr: "Japonca öğrenmekle ilgileniyor." },
          { en: "I went to the bank to open an account.", tr: "Hesap açtırmak için bankaya gittim." },
          { en: "We are looking forward to seeing you again.", tr: "Seni tekrar görmeyi dört gözle bekliyoruz." }
        ]
      }
    ],
    tips: [
      "enjoy, avoid, finish, mind, suggest, deny gördüğünde gözün kapalı -ing seç.",
      "Amaç anlatılıyorsa (niçin?) cevap to + V1, asla for + -ing değil.",
      "stop to do: yapmak için durmak, stop doing: bırakmak. Cümlenin mantığına bak.",
      "look forward to ve be used to kalıplarındaki to edattır: arkasından -ing gelir.",
      "It's no use, It's worth, can't help gibi kalıplar da hep -ing ile çalışır."
    ],
    exercises: [
      { id: "gerund-infinitive-e1", prompt: "I enjoy ___ to music while studying.", options: ["listen", "to listen", "listening", "listened"], answer: 2, explain: "enjoy fiili arkasına her zaman -ing alır." },
      { id: "gerund-infinitive-e2", prompt: "She decided ___ a new car.", options: ["buying", "to buy", "buy", "bought"], answer: 1, explain: "decide geleceğe dönük karar bildirir, to + V1 alır." },
      { id: "gerund-infinitive-e3", prompt: "He avoided ___ my question.", options: ["answering", "to answer", "answer", "answered"], answer: 0, explain: "avoid fiilinden sonra -ing gelir." },
      { id: "gerund-infinitive-e4", prompt: "They hope ___ abroad next year.", options: ["travelling", "travel", "travelled", "to travel"], answer: 3, explain: "hope fiili to + V1 ister." },
      { id: "gerund-infinitive-e5", prompt: "Would you mind ___ the window?", options: ["to open", "open", "opening", "opened"], answer: 2, explain: "mind fiilinden sonra -ing kullanılır." },
      { id: "gerund-infinitive-e6", prompt: "I'm interested ___ photography.", options: ["in learning", "to learn", "for learning", "learn"], answer: 0, explain: "interested in kalıbındaki edattan sonra -ing gelir." },
      { id: "gerund-infinitive-e7", prompt: "She went to the store ___ some bread.", options: ["for buying", "buying", "to buy", "buy"], answer: 2, explain: "Amaç anlatılırken to + V1 kullanılır, for buying yanlıştır." },
      { id: "gerund-infinitive-e8", prompt: "Don't forget ___ the lights before you leave.", options: ["turning off", "to turn off", "turn off", "turned off"], answer: 1, explain: "Yapılacak görev için forget + to V1 kullanılır." },
      { id: "gerund-infinitive-e9", prompt: "I remember ___ this movie when I was a child.", options: ["to watch", "watch", "watched", "watching"], answer: 3, explain: "Geçmişteki anıyı hatırlamak için remember + -ing." },
      { id: "gerund-infinitive-e10", prompt: "He stopped ___ because it was bad for his health.", options: ["smoking", "to smoke", "smoke", "smoked"], answer: 0, explain: "Bir alışkanlığı bırakmak stop + -ing ile anlatılır." },
      { id: "gerund-infinitive-e11", prompt: "We stopped ___ some coffee on the way.", options: ["having", "have", "to have", "had"], answer: 2, explain: "Bir şey yapmak için durmak stop + to V1 ile anlatılır." },
      { id: "gerund-infinitive-e12", prompt: "The teacher suggested ___ more practice tests.", options: ["to do", "doing", "do", "done"], answer: 1, explain: "suggest asla to almaz, arkasına -ing gelir." },
      { id: "gerund-infinitive-e13", prompt: "It's no use ___ about the past.", options: ["to worry", "worry", "worrying", "worried"], answer: 2, explain: "It's no use kalıbından sonra -ing kullanılır." },
      { id: "gerund-infinitive-e14", prompt: "I regret ___ you that your flight has been cancelled.", options: ["telling", "tell", "told", "to tell"], answer: 3, explain: "Kötü haber verirken regret to tell/inform kalıbı kullanılır." }
    ]
  },
  {
    id: "conjunctions",
    title: "Linkers & Conjunctions",
    titleTr: "Bağlaçlar ve Geçiş İfadeleri",
    level: 2,
    summary: "MÜYYES'in en çok soru çıkardığı konu: although ile despite'ın farkını çözen, sınavın yarısını cebine koyar!",
    sections: [
      {
        heading: "Zıtlık 1: although, though, even though",
        body: "Bu üçlü \"rağmen\" ailesinin cümle alan koludur. Arkalarına mutlaka özne + fiil içeren tam bir cümle gelir: Although it was raining... even though, although'nun biraz daha vurgulu halidir, though ise konuşma dilinde cümle sonuna bile gelebilir. Sınavdaki bir numaralı kontrol: boşluktan sonra tam cümle mi var? Varsa bu aile devrede.",
        examples: [
          { en: "Although he was tired, he finished his homework.", tr: "Yorgun olmasına rağmen ödevini bitirdi." },
          { en: "Even though the ticket was expensive, we bought it.", tr: "Bilet pahalı olmasına rağmen aldık." },
          { en: "She kept smiling, though she was very nervous.", tr: "Çok gergin olmasına rağmen gülümsemeye devam etti." }
        ]
      },
      {
        heading: "Zıtlık 2: despite ve in spite of",
        body: "Aynı \"rağmen\" anlamı ama bu ikili cümle değil, isim veya -ing ister: despite the rain, in spite of being late. İki dev tuzağı ezberle: birincisi \"despite of\" diye bir şey yoktur, of sadece in spite of'ta bulunur. İkincisi, arkalarına özne + fiil gelemez; cümle kullanmak istiyorsan despite the fact that köprüsünü kurman gerekir. MÜYYES bu ayrımı neredeyse her yıl sorar.",
        examples: [
          { en: "Despite the heavy rain, the match continued.", tr: "Şiddetli yağmura rağmen maç devam etti." },
          { en: "In spite of being ill, she went to work.", tr: "Hasta olmasına rağmen işe gitti." },
          { en: "Despite the fact that he is young, he is very wise.", tr: "Genç olmasına rağmen çok bilge biri." }
        ]
      },
      {
        heading: "Zıtlık 3: however, nevertheless, on the other hand",
        body: "Bu grup iki bağımsız cümleyi birbirine bağlayan geçiş kelimeleridir. Noktalama imzaları bellidir: ya önceki cümle nokta ile biter ya da noktalı virgül gelir, arkasından da virgül konur: It was cold. However, we went out. nevertheless biraz daha resmi bir \"yine de\"dir, on the other hand ise madalyonun öbür yüzünü gösterir. Boşluğun iki yanında noktayla ayrılmış iki tam cümle görüyorsan although değil bu ekip gelir.",
        examples: [
          { en: "The exam was hard. However, most students passed.", tr: "Sınav zordu. Yine de öğrencilerin çoğu geçti." },
          { en: "He is very rich; nevertheless, he lives simply.", tr: "Çok zengin; yine de sade yaşıyor." },
          { en: "City life is exciting. On the other hand, it can be stressful.", tr: "Şehir hayatı heyecanlı. Öte yandan stresli olabilir." }
        ]
      },
      {
        heading: "Sebep ve sonuç: because, since, as, therefore",
        body: "Sebep tarafında because, since ve as cümle alır; because of ve due to ise isim alır (aynen although vs despite mantığı). Sonuç tarafında therefore, as a result, consequently, so vardır ve bunlar sonucu söyleyen cümlenin başına gelir. Soruda ok yönünü bul: boşluk sebebi mi başlatıyor, sonucu mu ilan ediyor? Bu soruya cevap verirsen şık kendiliğinden elenir.",
        examples: [
          { en: "Since it was late, we took a taxi.", tr: "Geç olduğu için taksiye bindik." },
          { en: "The flight was cancelled because of the storm.", tr: "Uçuş fırtına yüzünden iptal edildi." },
          { en: "He didn't study. Therefore, he failed the test.", tr: "Çalışmadı. Bu yüzden testte başarısız oldu." },
          { en: "Prices went up; as a result, sales dropped.", tr: "Fiyatlar yükseldi; sonuç olarak satışlar düştü." }
        ]
      },
      {
        heading: "Ekleme ve kıyas: moreover, whereas, while",
        body: "Bir fikrin üstüne yenisini koyarken moreover, furthermore, in addition, besides kullanılır: hepsi \"dahası, üstelik\" der ve aynı yöndeki ikinci bir kanıtı takdim eder. whereas ve while ise iki şeyi karşılaştırır: I like tea, whereas my sister prefers coffee. Dikkat, while hem \"iken\" hem \"oysa\" anlamına gelebilir, cümleye hangi anlamın oturduğuna bak. not only... but also ikilisi de eklemenin şovmenidir, sınavda eşleşmesi asla değişmez.",
        examples: [
          { en: "The hotel was cheap. Moreover, the staff were friendly.", tr: "Otel ucuzdu. Üstelik personel de güler yüzlüydü." },
          { en: "My brother is very tidy, whereas I am quite messy.", tr: "Kardeşim çok düzenlidir, oysa ben epey dağınığım." },
          { en: "She is not only talented but also hardworking.", tr: "O sadece yetenekli değil, aynı zamanda çalışkan." }
        ]
      }
    ],
    tips: [
      "İlk iş boşluktan sonrasına bak: tam cümle varsa although/because, isim veya -ing varsa despite/because of.",
      "\"despite of\" her zaman yanlıştır: of yalnızca in spite of kalıbında bulunur.",
      "Nokta veya noktalı virgülden sonra gelen boşlukta however, therefore, moreover gibi geçiş kelimeleri aranır.",
      "Anlam yönünü belirle: zıtlık mı (however), sonuç mu (therefore), ekleme mi (moreover)? Yanlış yöndeki şıkları anında ele.",
      "not only ... but also eşleşmesi sabittir; birini görünce diğerini ara."
    ],
    exercises: [
      { id: "conjunctions-e1", prompt: "___ it was raining, we went for a walk.", options: ["Despite", "Although", "However", "Because"], answer: 1, explain: "Boşluktan sonra tam cümle var ve zıtlık anlamı gerekiyor: Although." },
      { id: "conjunctions-e2", prompt: "He passed the exam ___ he hadn't studied much.", options: ["despite", "because", "even though", "therefore"], answer: 2, explain: "Cümle + zıtlık anlamı için even though kullanılır." },
      { id: "conjunctions-e3", prompt: "___ the heavy traffic, we arrived on time.", options: ["Although", "Despite", "However", "Whereas"], answer: 1, explain: "Boşluktan sonra isim öbeği var, bu yüzden Despite." },
      { id: "conjunctions-e4", prompt: "She was tired. ___, she kept working.", options: ["Because", "Despite", "Although", "However"], answer: 3, explain: "İki ayrı cümle arasında zıtlık geçişi için However." },
      { id: "conjunctions-e5", prompt: "I like tea, ___ my sister prefers coffee.", options: ["whereas", "because", "so", "therefore"], answer: 0, explain: "İki zıt tercih kıyaslanıyor, whereas uygun." },
      { id: "conjunctions-e6", prompt: "In spite of ___ ill, he came to the meeting.", options: ["he was", "being", "was", "to be"], answer: 1, explain: "in spite of'tan sonra cümle değil -ing gelir." },
      { id: "conjunctions-e7", prompt: "It was very cold. ___, we decided to cancel the picnic.", options: ["Although", "Despite", "Therefore", "However"], answer: 2, explain: "İkinci cümle bir sonuç bildiriyor: Therefore." },
      { id: "conjunctions-e8", prompt: "The hotel was cheap. ___, the rooms were very clean.", options: ["Moreover", "However", "Therefore", "Whereas"], answer: 0, explain: "Aynı yönde ikinci bir olumlu bilgi ekleniyor: Moreover." },
      { id: "conjunctions-e9", prompt: "___ studying hard, she failed the test.", options: ["Although", "However", "In spite of", "Even though"], answer: 2, explain: "Boşluktan sonra -ing var, cümle almayan In spite of doğru." },
      { id: "conjunctions-e10", prompt: "He didn't get the job ___ his lack of experience.", options: ["because", "despite of", "although", "because of"], answer: 3, explain: "İsim öbeğinden önce sebep için because of gelir, despite of diye bir kalıp yoktur." },
      { id: "conjunctions-e11", prompt: "The exam was difficult; ___, most students passed.", options: ["therefore", "nevertheless", "because", "moreover"], answer: 1, explain: "Noktalı virgülden sonra zıtlık geçişi: nevertheless." },
      { id: "conjunctions-e12", prompt: "She is not only intelligent ___ also very hardworking.", options: ["and", "but", "or", "so"], answer: 1, explain: "not only'nin sabit eşi but also'dur." },
      { id: "conjunctions-e13", prompt: "Prices have risen sharply. ___ a result, many people are spending less.", options: ["Therefore", "Since", "As", "For"], answer: 2, explain: "Kalıp As a result şeklindedir." },
      { id: "conjunctions-e14", prompt: "Choose the correct sentence.", options: ["Despite he was tired, he finished the report.", "Although being tired, he finished the report.", "In spite of his tiredness, he finished the report.", "However he was tired, he finished the report."], answer: 2, explain: "in spite of isim öbeği aldığı için üçüncü cümle doğrudur." }
    ]
  },
  {
    id: "comparatives",
    title: "Comparatives & Superlatives",
    titleTr: "Karşılaştırma ve Üstünlük",
    level: 1,
    summary: "Daha iyi, en iyi, olabildiğince iyi: kıyaslamanın tüm tonlarını tek konuda topladık, gerisi antrenman!",
    sections: [
      {
        heading: "-er mi more mu?",
        body: "İki şeyi kıyaslarken kısa sıfatlara -er eklenir (taller, faster), uzun sıfatların önüne more gelir (more expensive, more interesting). Kıyasın karşı tarafı than ile bağlanır. Yazım detayları puan kurtarır: big, bigger olur (son harf ikizlenir), easy ise easier olur (y, i'ye döner). \"more faster\" gibi çifte kıyas yapmak Türk öğrencilerin sık düştüğü çukurdur, ikisinden sadece biri kullanılır.",
        examples: [
          { en: "My brother is taller than me.", tr: "Kardeşim benden daha uzun." },
          { en: "This restaurant is more expensive than the old one.", tr: "Bu restoran eskisinden daha pahalı." },
          { en: "The exam was easier than I expected.", tr: "Sınav beklediğimden daha kolaydı." }
        ]
      },
      {
        heading: "the ... -est: zirvedeki tek kişi",
        body: "Bir grubun en'ini söylerken superlative kullanılır ve başına neredeyse her zaman the gelir: the tallest, the most beautiful. Arkasından sık sık in the class, of all gibi grup belirten ifadeler gelir. Superlative cümlelerinde have ever yapısı da klasik bir arkadaştır: the best film I have ever seen.",
        examples: [
          { en: "Mount Everest is the highest mountain in the world.", tr: "Everest dünyanın en yüksek dağıdır." },
          { en: "This is the most delicious cake I have ever eaten.", tr: "Bu şimdiye kadar yediğim en lezzetli kek." },
          { en: "She is the smartest student in our class.", tr: "O sınıfımızın en zeki öğrencisi." }
        ]
      },
      {
        heading: "as ... as: eşitlik terazisi",
        body: "İki şey birbirine denk ise as + sıfat + as kalıbı devreye girer: as tall as. Olumsuzda not as ... as (veya not so ... as) kullanılır ve bu aslında gizli bir kıyastır: not as expensive as, daha ucuz demektir. Ortadaki sıfat asla -er veya more halinde olmaz, yalın kalır. Sınav bu kalıbın ikinci as'ini than ile değiştirip tuzağa çevirmeyi çok sever.",
        examples: [
          { en: "This bag is as heavy as yours.", tr: "Bu çanta seninki kadar ağır." },
          { en: "The film was not as good as the book.", tr: "Film kitap kadar iyi değildi." },
          { en: "Please come as early as possible.", tr: "Lütfen olabildiğince erken gel." }
        ]
      },
      {
        heading: "Özel kalıplar ve düzensizler",
        body: "Düzensiz üçlüleri ezberle: good/better/best, bad/worse/worst, far/further/furthest, little/less/least. İki güzel kalıp daha var: the more you practise, the better you become (ne kadar... o kadar) ve better and better (gittikçe daha iyi). Kıyası güçlendirmek istersen much, far, a lot kullanılır: much better, asla \"very better\" değil. Bir de iki şehir kıyaslarken tekrarı önleyen that of kalıbına göz kırp: the population of Istanbul is larger than that of Ankara.",
        examples: [
          { en: "The weather is getting worse and worse.", tr: "Hava gittikçe daha da kötüleşiyor." },
          { en: "The more you read, the more you learn.", tr: "Ne kadar çok okursan o kadar çok öğrenirsin." },
          { en: "This phone is far more useful than my old one.", tr: "Bu telefon eskisinden çok daha kullanışlı." }
        ]
      }
    ],
    tips: [
      "Cümlede than görüyorsan comparative (-er/more), in the class veya of all görüyorsan superlative ara.",
      "\"more better\", \"more easier\" gibi çifte kıyaslar her zaman yanlıştır.",
      "as ... as kalıbında ortadaki sıfat yalın kalır: as tall as, asla as taller as değil.",
      "Kıyası güçlendirmek için very değil much/far kullanılır: much better.",
      "The more ..., the more ... kalıbında her iki tarafta da the unutulmaz."
    ],
    exercises: [
      { id: "comparatives-e1", prompt: "This book is ___ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], answer: 1, explain: "Uzun sıfatlar more ile kıyaslanır." },
      { id: "comparatives-e2", prompt: "Today is ___ day of the year.", options: ["hotter", "hottest", "the hottest", "more hot"], answer: 2, explain: "Superlative yapıda the + -est kullanılır." },
      { id: "comparatives-e3", prompt: "My car is ___ than yours.", options: ["fast", "fastest", "more fast", "faster"], answer: 3, explain: "Kısa sıfatlar -er ekiyle kıyaslanır." },
      { id: "comparatives-e4", prompt: "She is as ___ as her mother.", options: ["taller", "tall", "tallest", "more tall"], answer: 1, explain: "as ... as arasında sıfat yalın kalır." },
      { id: "comparatives-e5", prompt: "This exam was ___ than the last one.", options: ["easyer", "more easy", "easier", "easiest"], answer: 2, explain: "y ile biten sıfatta y düşer, i gelir: easier." },
      { id: "comparatives-e6", prompt: "He is ___ student in the class.", options: ["the best", "better", "good", "the better"], answer: 0, explain: "in the class ifadesi superlative ister: the best." },
      { id: "comparatives-e7", prompt: "The weather is getting ___.", options: ["bad and bad", "worse and worse", "worst and worst", "more and more bad"], answer: 1, explain: "Gittikçe artan değişim comparative + and + comparative ile anlatılır." },
      { id: "comparatives-e8", prompt: "The ___ you practice, the ___ you become.", options: ["more / good", "much / better", "more / better", "most / best"], answer: 2, explain: "The more ..., the better ... kalıbı kullanılır." },
      { id: "comparatives-e9", prompt: "This film is ___ than I expected.", options: ["far more exciting", "far exciting", "more far exciting", "far excitinger"], answer: 0, explain: "far, kıyası güçlendirir: far more exciting." },
      { id: "comparatives-e10", prompt: "My new phone is not as expensive ___ my old one.", options: ["than", "so", "that", "as"], answer: 3, explain: "not as ... as kalıbının ikinci parçası yine as'tir." },
      { id: "comparatives-e11", prompt: "Of the two options, this one is ___.", options: ["best", "the better", "most good", "more better"], answer: 1, explain: "İki şeyden biri için the better kullanılır." },
      { id: "comparatives-e12", prompt: "It was ___ mistake I have ever made.", options: ["the worst", "the worse", "worst", "the baddest"], answer: 0, explain: "have ever ile superlative gelir, bad'in en hali the worst." },
      { id: "comparatives-e13", prompt: "The population of Istanbul is much larger than ___ of Ankara.", options: ["this", "one", "that", "it"], answer: 2, explain: "Tekrarı önlemek için that of kalıbı kullanılır." },
      { id: "comparatives-e14", prompt: "The problem was ___ serious than we thought.", options: ["little", "least", "more little", "less"], answer: 3, explain: "Daha az anlamı less + sıfat ile verilir." }
    ]
  },
  {
    id: "articles-quantifiers",
    title: "Articles & Quantifiers",
    titleTr: "Artikeller ve Miktar Belirteçleri",
    level: 1,
    summary: "a mı an mi the mı hiçbiri mi? Türkçede olmayan bu minik kelimeler sınavda kolay puan, yeter ki kuralları tanı!",
    sections: [
      {
        heading: "a / an: ilk kez bahsediyorum",
        body: "Sayılabilir tekil bir isimden ilk kez bahsederken a veya an kullanılır. Seçim yazıma değil telaffuza göre yapılır: an hour deriz çünkü h okunmaz, ama a university deriz çünkü kelime /j/ sesiyle başlar. Türkçede artikel olmadığı için en sık hata onu tamamen unutmaktır: \"She is teacher\" değil, \"She is a teacher\". Meslek söylerken artikel şart!",
        examples: [
          { en: "She is an engineer at a big company.", tr: "O, büyük bir şirkette mühendis." },
          { en: "I waited for an hour at a university campus.", tr: "Bir üniversite kampüsünde bir saat bekledim." },
          { en: "He bought a European car.", tr: "Bir Avrupa arabası aldı." }
        ]
      },
      {
        heading: "the ve artikelsizlik: belirli mi genel mi?",
        body: "Dinleyicinin hangisinden bahsettiğini bildiği her şey the alır: daha önce bahsedilenler, tek olan şeyler (the sun, the world) ve müzik aletleri (play the guitar). Genelleme yaparken ise artikel hiç kullanılmaz: I love music, Cats are independent. Okul, hastane gibi kelimeler kurum anlamında kullanılırsa artikel almaz: go to school. Yemekler, diller ve çoğu ülke adı da artikelsizdir.",
        examples: [
          { en: "The sun rises in the east.", tr: "Güneş doğudan doğar." },
          { en: "I bought a book yesterday. The book is about space.", tr: "Dün bir kitap aldım. Kitap uzay hakkında." },
          { en: "Children go to school five days a week.", tr: "Çocuklar haftada beş gün okula gider." }
        ]
      },
      {
        heading: "much, many, a lot of: miktarın büyükleri",
        body: "many sayılabilir çoğul isimlerle (many books), much sayılamayan isimlerle (much water) kullanılır. much genelde olumsuz cümlelerde ve sorularda rahat eder; olumlu cümlede a lot of daha doğal durur. Türk öğrencilerin bam teli sayılamayan isimlerdir: money, information, advice, news, furniture hepsi tekildir ve much ile anılır. \"informations\" diye bir kelime yok, sınav bunu sormaya bayılır.",
        examples: [
          { en: "How much money do you need?", tr: "Ne kadar paraya ihtiyacın var?" },
          { en: "There are many students in the library.", tr: "Kütüphanede çok sayıda öğrenci var." },
          { en: "She gave me a lot of useful advice.", tr: "Bana bir sürü faydalı tavsiye verdi." }
        ]
      },
      {
        heading: "few, a few, little, a little: küçük ama kritik fark",
        body: "a few (sayılabilir) ve a little (sayılamayan) \"az ama var, yeterli\" der; olumlu bir havası vardır. a'sız few ve little ise \"neredeyse hiç yok\" diyerek olumsuz bir tablo çizer. He has a few friends: birkaç arkadaşı var, fena değil. He has few friends: zavallım, pek arkadaşı yok. Tek bir a harfi cümlenin ruh halini değiştiriyor, sınav da tam bu ayrımı soruyor.",
        examples: [
          { en: "We have a little time before the bus leaves.", tr: "Otobüs kalkmadan önce biraz vaktimiz var." },
          { en: "There is little hope of finding the keys.", tr: "Anahtarları bulma umudu çok az." },
          { en: "A few students asked questions after the lecture.", tr: "Dersten sonra birkaç öğrenci soru sordu." }
        ]
      },
      {
        heading: "some, any, every, each",
        body: "some olumlu cümlelerde, any olumsuz ve soru cümlelerinde kullanılır; ama teklif ve ricalarda soru bile olsa some gelir: Would you like some tea? every ve each ikisi de tekil isim ve tekil fiil alır. İnce fark: each of the ile kullanılabilir (each of the students), every tek başına of alamaz. no ise cümleyi tek başına olumsuz yapar: There is no milk.",
        examples: [
          { en: "There are some apples in the fridge.", tr: "Buzdolabında birkaç elma var." },
          { en: "I don't have any plans for the weekend.", tr: "Hafta sonu için hiçbir planım yok." },
          { en: "Each of the players received a medal.", tr: "Oyuncuların her biri madalya aldı." }
        ]
      }
    ],
    tips: [
      "a/an seçimi yazıma değil sese göre yapılır: an hour ama a university.",
      "money, information, advice, news sayılamaz: many değil much ile kullanılır ve çoğul eki almaz.",
      "a few/a little olumlu (biraz var), few/little olumsuz (neredeyse yok) anlam taşır.",
      "Teklif ve ricalarda soru cümlesi bile olsa any değil some kullanılır.",
      "every ve each'ten sonra isim ve fiil tekildir: Every student has a book."
    ],
    exercises: [
      { id: "articles-quantifiers-e1", prompt: "She is ___ engineer.", options: ["a", "an", "the", "no article"], answer: 1, explain: "engineer sesli harfle başlar, an gelir." },
      { id: "articles-quantifiers-e2", prompt: "I waited for ___ hour.", options: ["a", "the", "an", "no article"], answer: 2, explain: "hour'da h okunmaz, sesli başladığı için an." },
      { id: "articles-quantifiers-e3", prompt: "How ___ money do you have?", options: ["many", "much", "few", "a few"], answer: 1, explain: "money sayılamayan isimdir, much ile kullanılır." },
      { id: "articles-quantifiers-e4", prompt: "There are ___ apples in the basket.", options: ["much", "little", "a little", "a few"], answer: 3, explain: "Sayılabilir çoğul isimle olumlu anlamda a few gelir." },
      { id: "articles-quantifiers-e5", prompt: "___ sun rises in the east.", options: ["A", "An", "The", "No article"], answer: 2, explain: "Tek olan şeyler the alır." },
      { id: "articles-quantifiers-e6", prompt: "I don't have ___ time today.", options: ["any", "some", "many", "a few"], answer: 0, explain: "Olumsuz cümlede any kullanılır." },
      { id: "articles-quantifiers-e7", prompt: "He knows ___ people in this city, so he feels lonely.", options: ["a few", "few", "a little", "little"], answer: 1, explain: "Yalnız hissediyor, yani neredeyse hiç tanıdığı yok: few." },
      { id: "articles-quantifiers-e8", prompt: "Would you like ___ coffee?", options: ["some", "any", "many", "few"], answer: 0, explain: "Teklif cümlelerinde soru bile olsa some kullanılır." },
      { id: "articles-quantifiers-e9", prompt: "___ information you gave me was very useful.", options: ["A", "The", "An", "Some"], answer: 1, explain: "Belirli bir bilgiden (senin verdiğin) bahsedildiği için The." },
      { id: "articles-quantifiers-e10", prompt: "There is ___ milk left; we need to buy more.", options: ["a few", "few", "a little", "little"], answer: 3, explain: "Almamız gerekiyor, çünkü neredeyse hiç kalmamış: little." },
      { id: "articles-quantifiers-e11", prompt: "She goes to ___ school by bus.", options: ["a", "an", "the", "no article"], answer: 3, explain: "Kurum anlamında school artikel almaz." },
      { id: "articles-quantifiers-e12", prompt: "___ of the students has a laptop.", options: ["Every", "Each", "All", "Both"], answer: 1, explain: "of the yapısıyla ve tekil fiille each kullanılır." },
      { id: "articles-quantifiers-e13", prompt: "He plays ___ guitar very well.", options: ["a", "an", "the", "no article"], answer: 2, explain: "Müzik aletlerinden önce the gelir." },
      { id: "articles-quantifiers-e14", prompt: "Choose the correct sentence.", options: ["I have an useful book.", "She gave me a advice.", "We saw a European film last night.", "He bought the new car yesterday, I don't know which one."], answer: 2, explain: "European /j/ sesiyle başladığı için a alır." }
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions & Dependent Prepositions",
    titleTr: "Edatlar ve Bağımlı Edatlar",
    level: 2,
    summary: "in mi on mu at mi? Türkçeden çeviri burada işlemez: doğru edatı fiiliyle, sıfatıyla paket halinde öğreniyoruz!",
    sections: [
      {
        heading: "Zaman edatları: in, on, at",
        body: "Zamanda büyükten küçüğe bir piramit düşün: geniş dilimler in alır (aylar, yıllar, mevsimler, in the morning), günler ve tarihler on alır (on Monday, on 5 May), saatler ve kesin anlar at alır (at 7 o'clock, at noon, at night). Evet, at night bir istisnadır ve sınavların gözdesidir. next, last, every, this ile başlayan zaman ifadeleri ise hiç edat almaz: last week, asla in last week değil.",
        examples: [
          { en: "The course starts in September.", tr: "Kurs eylülde başlıyor." },
          { en: "We have a meeting on Friday morning.", tr: "Cuma sabahı bir toplantımız var." },
          { en: "The train leaves at 6:45.", tr: "Tren 6:45'te kalkıyor." }
        ]
      },
      {
        heading: "Yer edatları: in, on, at",
        body: "Yerde de benzer bir mantık var: bir şeyin içindeysen in (in the box, in Istanbul), bir yüzeyin üstündeysen on (on the table, on the wall), bir noktadaysan at (at the door, at the bus stop). Bazı kalıplar ezber ister: in bed, at home, at work, on the bus, in the car. Otobüste on ama arabada in olması ilk başta tuhaf gelir, kuralı şöyle hatırla: içinde ayakta durabildiğin ulaşım araçları on alır.",
        examples: [
          { en: "I left my keys in the car.", tr: "Anahtarlarımı arabada unuttum." },
          { en: "There is a beautiful painting on the wall.", tr: "Duvarda güzel bir tablo var." },
          { en: "Let's meet at the entrance of the mall.", tr: "AVM'nin girişinde buluşalım." }
        ]
      },
      {
        heading: "Fiil + edat: ayrılmaz ikililer",
        body: "Bazı fiiller edatlarıyla evlidir ve boşanmazlar: depend on, listen to, wait for, apologize for, believe in, belong to, apply for, succeed in. Türkçeden çeviri yapmak burada felakettir: biz \"birine bakmak\" deriz ama İngilizce look at ister, \"bir şeye gülmek\" laugh at olur. Bu ikilileri fiil + edat şeklinde tek kelimeymiş gibi ezberle, sınavda boşluk tam da o edatın yerinde açılır.",
        examples: [
          { en: "Everything depends on the weather.", tr: "Her şey havaya bağlı." },
          { en: "We waited for the bus for twenty minutes.", tr: "Otobüsü yirmi dakika bekledik." },
          { en: "He apologized for being late.", tr: "Geç kaldığı için özür diledi." }
        ]
      },
      {
        heading: "Sıfat + edat: interested in, good at",
        body: "Sıfatlar da edat partnerleriyle gezer: interested in, good at, afraid of, famous for, similar to, different from, married to, proud of, responsible for. Türkçe mantığı en çok married to'da yanıltır: \"biriyle evli\" dediğimiz için with demek isteriz ama doğrusu to. Aynı şekilde \"bir şeyden korkmak\" afraid of olur, from değil. Edat + fiil gelirse fiil elbette -ing halinde olur: good at solving problems.",
        examples: [
          { en: "She is really good at playing chess.", tr: "Satranç oynamakta gerçekten iyi." },
          { en: "Our city is famous for its historical sites.", tr: "Şehrimiz tarihi yerleriyle ünlü." },
          { en: "He is married to a well-known writer.", tr: "Tanınmış bir yazarla evli." }
        ]
      },
      {
        heading: "İsim + edat: reason for, increase in",
        body: "Son takım isimlerle gelen edatlar: reason for, solution to, answer to, increase in, decrease in, effect on, difference between, interest in. Özellikle increase in ve solution to sınav klasikleridir çünkü Türkçe düşününce of demek istersin. Grafik ve istatistik içeren okuma parçalarında an increase in prices gibi ifadeler sürekli karşına çıkacak, gözün alışsın.",
        examples: [
          { en: "There has been a sharp increase in fuel prices.", tr: "Yakıt fiyatlarında keskin bir artış oldu." },
          { en: "We must find a solution to this problem.", tr: "Bu soruna bir çözüm bulmalıyız." },
          { en: "Smoking has a harmful effect on your health.", tr: "Sigaranın sağlığın üzerinde zararlı bir etkisi var." }
        ]
      }
    ],
    tips: [
      "Zaman piramidini ezberle: geniş dilim in, gün ve tarih on, saat at; at night istisnasını unutma.",
      "next, last, every, this ile başlayan zaman ifadeleri edat almaz: see you next week.",
      "married to, afraid of, different from: Türkçeden çeviri yapma, kalıbı paket olarak öğren.",
      "increase/decrease sonrası in gelir, solution/answer sonrası to gelir.",
      "Edattan sonra fiil gelecekse mutlaka -ing halindedir: interested in learning."
    ],
    exercises: [
      { id: "prepositions-e1", prompt: "The meeting is ___ Monday.", options: ["in", "at", "on", "by"], answer: 2, explain: "Günlerden önce on kullanılır." },
      { id: "prepositions-e2", prompt: "She was born ___ 1998.", options: ["in", "on", "at", "by"], answer: 0, explain: "Yıllardan önce in gelir." },
      { id: "prepositions-e3", prompt: "I'll meet you ___ the bus stop.", options: ["on", "in", "by", "at"], answer: 3, explain: "Nokta gibi düşünülen yerlerde at kullanılır." },
      { id: "prepositions-e4", prompt: "The film starts ___ 8 o'clock.", options: ["in", "at", "on", "for"], answer: 1, explain: "Saatlerden önce at gelir." },
      { id: "prepositions-e5", prompt: "Success depends ___ hard work.", options: ["of", "from", "on", "to"], answer: 2, explain: "depend fiilinin sabit edatı on'dur." },
      { id: "prepositions-e6", prompt: "She is very good ___ mathematics.", options: ["at", "in", "on", "of"], answer: 0, explain: "good sıfatı at edatıyla kullanılır." },
      { id: "prepositions-e7", prompt: "I'm waiting ___ the bus.", options: ["to", "for", "on", "at"], answer: 1, explain: "wait fiili for edatını alır." },
      { id: "prepositions-e8", prompt: "He is married ___ a doctor.", options: ["with", "for", "by", "to"], answer: 3, explain: "Türkçedeki ile yüzünden with tuzağına düşme, doğrusu married to." },
      { id: "prepositions-e9", prompt: "There has been an increase ___ food prices.", options: ["of", "on", "in", "at"], answer: 2, explain: "increase isminden sonra in gelir." },
      { id: "prepositions-e10", prompt: "She is afraid ___ spiders.", options: ["from", "of", "about", "with"], answer: 1, explain: "Türkçede korkmak -den alır ama İngilizcesi afraid of'tur." },
      { id: "prepositions-e11", prompt: "The reason ___ his success is his discipline.", options: ["for", "of", "to", "about"], answer: 0, explain: "reason isminin sabit edatı for'dur." },
      { id: "prepositions-e12", prompt: "This book is different ___ the one I read last year.", options: ["than", "to", "from", "with"], answer: 2, explain: "different sıfatı from ile kullanılır." },
      { id: "prepositions-e13", prompt: "We need to find a solution ___ this problem.", options: ["of", "for", "about", "to"], answer: 3, explain: "solution isminden sonra to gelir." },
      { id: "prepositions-e14", prompt: "He apologized ___ arriving late.", options: ["from", "for", "about", "of"], answer: 1, explain: "apologize for kalıbı kullanılır, edattan sonra -ing gelir." }
    ]
  },
  {
    id: "adjective-adverb",
    title: "Adjectives vs Adverbs & Participles",
    titleTr: "Sıfat mı Zarf mı? ve Ortaçlar",
    level: 2,
    summary: "bored musun boring misin? Bu soruya gülümseyerek doğru cevap verebiliyorsan bu konu tamamdır!",
    sections: [
      {
        heading: "Sıfat ismi süsler, zarf fiili anlatır",
        body: "Temel ayrım çok net: sıfatlar isimleri tarif eder (a slow train), zarflar ise fiilin nasıl yapıldığını söyler (drives slowly). Çoğu zarf sıfata -ly eklenerek yapılır. Ama dikkat: look, seem, feel, taste, smell, sound gibi duyu fiillerinden sonra zarf değil sıfat gelir çünkü bu fiiller eylemi değil durumu anlatır. The soup tastes delicious deriz, deliciously değil. Türkçede ikisi de \"güzel\" olduğu için bu ayrım bize ekstra sinsi gelir.",
        examples: [
          { en: "She is a careful driver and she drives carefully.", tr: "Dikkatli bir sürücü ve dikkatli araba kullanıyor." },
          { en: "You look tired today.", tr: "Bugün yorgun görünüyorsun." },
          { en: "This perfume smells wonderful.", tr: "Bu parfüm harika kokuyor." }
        ]
      },
      {
        heading: "Tuzak kelimeler: hard/hardly, late/lately",
        body: "Bazı kelimeler kural bozar. fast, hard, late hem sıfat hem zarftır: work hard, drive fast. Ama hardly ve lately bambaşka anlamlar taşır: hardly \"neredeyse hiç\", lately \"son zamanlarda\" demektir. He works hard: çok çalışır. He hardly works: neredeyse hiç çalışmaz! good'un zarfı da well'dir: speaks English well. friendly, lovely, lonely ise -ly ile bitmesine rağmen sıfattır, sınav bu görünüşe aldananları avlar.",
        examples: [
          { en: "He works hard to support his family.", tr: "Ailesine bakmak için çok çalışıyor." },
          { en: "She hardly ever eats fast food.", tr: "Neredeyse hiç fast food yemez." },
          { en: "Have you talked to Emre lately?", tr: "Son zamanlarda Emre ile konuştun mu?" },
          { en: "She plays the violin very well.", tr: "Keman çalmada çok iyi." }
        ]
      },
      {
        heading: "-ed mi -ing mi: bored vs boring",
        body: "Efsane ikilem! -ing sıfatlar duyguyu yaratan kaynağı anlatır: the film is boring (film sıkıcı). -ed sıfatlar ise duyguyu hisseden kişiyi anlatır: I am bored (ben sıkıldım). \"I am boring\" dersen \"ben sıkıcı bir insanım\" demiş olursun, dikkat! Aynı mantık tüm aileye işler: interested/interesting, excited/exciting, tired/tiring, surprised/surprising, confused/confusing.",
        examples: [
          { en: "The lecture was boring, so the students were bored.", tr: "Ders sıkıcıydı, bu yüzden öğrenciler sıkıldı." },
          { en: "I am really excited about the trip.", tr: "Gezi konusunda gerçekten heyecanlıyım." },
          { en: "The instructions were confusing, and we all got confused.", tr: "Talimatlar kafa karıştırıcıydı ve hepimizin kafası karıştı." }
        ]
      },
      {
        heading: "Ortaçlar sıfat olarak: broken windows, crying babies",
        body: "Fiillerin V3 ve -ing halleri sıfat gibi ismin önüne gelebilir. Mantık relative clause kısaltmasıyla aynıdır: the window which was broken kısalır, the broken window olur. İsim eylemi kendisi yapıyorsa -ing (the crying baby: ağlayan bebek), eylem isme yapılmışsa V3 (the stolen car: çalınan araba) kullanılır. Aktif mi pasif mi sorusunu sorarsan asla şaşırmazsın.",
        examples: [
          { en: "The police found the stolen car.", tr: "Polis çalınan arabayı buldu." },
          { en: "The barking dog kept the neighbours awake.", tr: "Havlayan köpek komşuları uyutmadı." },
          { en: "They repaired the damaged roof after the storm.", tr: "Fırtınadan sonra hasar gören çatıyı onardılar." }
        ]
      }
    ],
    tips: [
      "look, seem, feel, taste, smell fiillerinden sonra zarf değil sıfat gelir: it tastes good.",
      "hard: çok çalışarak, hardly: neredeyse hiç. Anlamlar taban tabana zıttır, boşluğa dikkat.",
      "Duyguyu yaşayan kişi -ed, duyguyu yaratan şey -ing alır: I am bored because the film is boring.",
      "good sıfat, well zarftır: a good singer ama sings well.",
      "friendly, lovely, lonely -ly ile bitse de sıfattır; görünüşe aldanma."
    ],
    exercises: [
      { id: "adjective-adverb-e1", prompt: "She sings very ___.", options: ["beautiful", "beautifully", "beauty", "more beautiful"], answer: 1, explain: "Fiilin nasıl yapıldığını zarf anlatır: beautifully." },
      { id: "adjective-adverb-e2", prompt: "The soup tastes ___.", options: ["deliciously", "deliciousness", "delicious", "in a delicious way"], answer: 2, explain: "Duyu fiili taste'ten sonra sıfat gelir." },
      { id: "adjective-adverb-e3", prompt: "He drives too ___.", options: ["fastly", "faster", "fastest", "fast"], answer: 3, explain: "fast hem sıfat hem zarftır, fastly diye bir kelime yoktur." },
      { id: "adjective-adverb-e4", prompt: "The movie was so ___ that I fell asleep.", options: ["boring", "bored", "bore", "boringly"], answer: 0, explain: "Sıkıntıyı yaratan kaynak (film) -ing alır." },
      { id: "adjective-adverb-e5", prompt: "I was really ___ by the news.", options: ["shocking", "shock", "shocked", "shockingly"], answer: 2, explain: "Duyguyu yaşayan kişi -ed sıfat alır." },
      { id: "adjective-adverb-e6", prompt: "She speaks English very ___.", options: ["good", "well", "goodly", "best"], answer: 1, explain: "good'un zarf hali well'dir." },
      { id: "adjective-adverb-e7", prompt: "He works ___ to support his family.", options: ["hardly", "harder", "hard", "hardness"], answer: 2, explain: "Çok çalışmak work hard ile anlatılır, hardly anlamı bozar." },
      { id: "adjective-adverb-e8", prompt: "He ___ ever studies, so his grades are low.", options: ["hard", "hardly", "harder", "hardest"], answer: 1, explain: "hardly ever, neredeyse hiç demektir ve düşük notları açıklar." },
      { id: "adjective-adverb-e9", prompt: "The lecture was ___, so the students were ___.", options: ["bored / boring", "boring / bored", "bored / bored", "boring / boring"], answer: 1, explain: "Kaynak -ing, duyguyu yaşayan -ed alır." },
      { id: "adjective-adverb-e10", prompt: "She looked ___ at the exam results.", options: ["nervously", "nervous", "nerve", "more nervous"], answer: 0, explain: "Burada look bakmak eylemidir, nasıl baktığını zarf anlatır." },
      { id: "adjective-adverb-e11", prompt: "Have you seen him ___? He seems different.", options: ["late", "later", "lately", "latest"], answer: 2, explain: "Son zamanlarda anlamı lately ile verilir." },
      { id: "adjective-adverb-e12", prompt: "The ___ window needs to be repaired.", options: ["breaking", "break", "broke", "broken"], answer: 3, explain: "Cam kırılmış durumda, pasif anlam için V3 kullanılır." },
      { id: "adjective-adverb-e13", prompt: "It was a ___ story.", options: ["fascinated", "fascinate", "fascination", "fascinating"], answer: 3, explain: "Hikaye etkileyen kaynaktır, -ing sıfat alır." },
      { id: "adjective-adverb-e14", prompt: "Choose the correct sentence.", options: ["I am very interesting in history.", "The match was excited.", "I am very interested in history.", "The news made me boring."], answer: 2, explain: "Duyguyu yaşayan kişi interested olur, interesting değil." }
    ]
  }
];
