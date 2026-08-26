import type { GrammarTopic } from "./types";

export const grammarTopics1: GrammarTopic[] = [
  {
    id: "present-tenses",
    title: "Present Simple & Continuous",
    titleTr: "Geniş Zaman ve Şimdiki Zaman",
    emoji: "⏰",
    level: 1,
    summary: "Şu an mı oluyor, her zaman mı? Bu ikiliyi çözen, sınavın yarısını çözer!",
    sections: [
      {
        heading: "Present Simple: Alışkanlıklar ve Değişmeyen Gerçekler",
        body: "Geniş zaman, her gün tekrarlanan işler ve dünyanın değişmez gerçekleri için kullanılır. Türkçedeki geniş zamana çok benzer, o yüzden burası sana tanıdık gelecek. Tek tuzak şu: he, she, it öznelerinde fiile -s takısı eklemeyi Türk öğrenciler çok unutur. 'She go' değil 'She goes' diyeceğiz, söz mü?",
        examples: [
          { en: "I drink two cups of coffee every morning.", tr: "Her sabah iki fincan kahve içerim." },
          { en: "The sun rises in the east.", tr: "Güneş doğudan doğar." },
          { en: "My sister works at a hospital.", tr: "Kız kardeşim bir hastanede çalışır." }
        ]
      },
      {
        heading: "Present Continuous: Tam Şu Anda Olanlar",
        body: "Konuşma anında olan ya da bu aralar geçici olarak devam eden işler için am/is/are + Ving kalıbını kullanırız. Türkçedeki şimdiki zamanın karşılığı diyebiliriz. Geçici durumlar da bu zamana girer: bu ay, bu dönem, bugünlerde gibi ifadeler gördüğünde aklına gelsin.",
        examples: [
          { en: "She is talking on the phone right now.", tr: "O şu anda telefonda konuşuyor." },
          { en: "We are staying at my uncle's house this week.", tr: "Bu hafta amcamın evinde kalıyoruz." },
          { en: "Look! It is snowing.", tr: "Bak! Kar yağıyor." }
        ]
      },
      {
        heading: "Durum Fiilleri: -ing Sevmeyen Fiiller",
        body: "Bazı fiiller durum bildirir: know, like, love, hate, want, need, believe, understand, seem. Bunlar şu an gerçekleşiyor olsa bile continuous yapılmaz. 'I am knowing' diyen bir öğrenci sınavda hemen puan kaybeder, doğrusu 'I know'. Ama dikkat: bazıları anlam değiştirerek -ing alabilir. 'I think' (bence demek) ama 'I am thinking' (o an kafa yoruyorum demek).",
        examples: [
          { en: "I know the answer.", tr: "Cevabı biliyorum." },
          { en: "This coffee tastes great.", tr: "Bu kahvenin tadı harika." },
          { en: "He is being very polite today.", tr: "Bugün çok kibar davranıyor." }
        ]
      },
      {
        heading: "Zaman Zarfları: Gizli İpuçları",
        body: "Sınavda cümledeki zaman zarfı sana hangi zamanı seçeceğini fısıldar. Always, usually, often, never, every day gördüysen present simple; now, right now, at the moment, look, listen gördüysen present continuous düşün. Bu küçük kelimeler soruların yarısını senin yerine çözer.",
        examples: [
          { en: "He usually takes the bus to work.", tr: "İşe genellikle otobüsle gider." },
          { en: "Listen! Someone is playing the piano.", tr: "Dinle! Biri piyano çalıyor." }
        ]
      }
    ],
    tips: [
      "He, she, it öznesinde -s takısını asla unutma: 'She go' tarzı bir seçenek görürsen elemeden başla.",
      "Now, at the moment, look, listen gibi kelimeler continuous sinyalidir.",
      "Know, want, like, need gibi durum fiilleri -ing almaz, sınavın klasik tuzağıdır.",
      "Tarifeli olaylar (otobüs, tren, ders programı) gelecekten bahsetse bile present simple ile yazılır.",
      "Bugünlerde, bu ay gibi geçici durumlarda continuous, kalıcı durumlarda simple kullan."
    ],
    exercises: [
      {
        id: "present-tenses-e1",
        prompt: "She ___ to school every day.",
        options: ["go", "goes", "is going", "went"],
        answer: 1,
        explain: "Every day geniş zaman ister, she öznesi fiile -s ekletir."
      },
      {
        id: "present-tenses-e2",
        prompt: "Look! The bus ___.",
        options: ["comes", "come", "is coming", "came"],
        answer: 2,
        explain: "Look ünlemi şu ana işaret eder, present continuous gerekir."
      },
      {
        id: "present-tenses-e3",
        prompt: "Water ___ at 100 degrees Celsius.",
        options: ["boils", "is boiling", "boil", "boiled"],
        answer: 0,
        explain: "Genel bilimsel gerçekler present simple ile söylenir."
      },
      {
        id: "present-tenses-e4",
        prompt: "Be quiet! I ___ the news right now.",
        options: ["watch", "watches", "watching", "am watching"],
        answer: 3,
        explain: "Right now şu anı gösterir, am watching doğru olur."
      },
      {
        id: "present-tenses-e5",
        prompt: "He ___ coffee; he prefers tea.",
        options: ["isn't liking", "don't like", "doesn't like", "not likes"],
        answer: 2,
        explain: "Like durum fiilidir ve he öznesi doesn't ister."
      },
      {
        id: "present-tenses-e6",
        prompt: "___ she usually ___ breakfast at home?",
        options: ["Does / eat", "Is / eating", "Do / eat", "Does / eats"],
        answer: 0,
        explain: "Usually geniş zaman işaretidir, does'tan sonra fiil yalın kalır."
      },
      {
        id: "present-tenses-e7",
        prompt: "They ___ in a small flat this month while their house is painted.",
        options: ["live", "lives", "is living", "are living"],
        answer: 3,
        explain: "This month geçici bir durumu anlatır, they ile are living kullanılır."
      },
      {
        id: "present-tenses-e8",
        prompt: "My brother ___ his homework at the moment.",
        options: ["does", "is doing", "do", "did"],
        answer: 1,
        explain: "At the moment ifadesi present continuous ister."
      },
      {
        id: "present-tenses-e9",
        prompt: "I ___ exactly what you mean.",
        options: ["know", "am knowing", "knows", "am known"],
        answer: 0,
        explain: "Know durum fiilidir, continuous yapılmaz."
      },
      {
        id: "present-tenses-e10",
        prompt: "According to the timetable, the train ___ at 9:15.",
        options: ["is leaving", "leave", "leaves", "left"],
        answer: 2,
        explain: "Tarifeli olaylar gelecek için bile present simple ile verilir."
      },
      {
        id: "present-tenses-e11",
        prompt: "She ___ very rude today; she is not normally like this.",
        options: ["is", "is being", "was", "be"],
        answer: 1,
        explain: "Geçici davranış için is being kullanılır."
      },
      {
        id: "present-tenses-e12",
        prompt: "How often ___ to the gym?",
        options: ["you go", "are you going", "you are going", "do you go"],
        answer: 3,
        explain: "How often sıklık sorar, geniş zaman sorusu do you go ile kurulur."
      },
      {
        id: "present-tenses-e13",
        prompt: "This soup ___ delicious. Did you make it yourself?",
        options: ["tastes", "is tasting", "taste", "is tasted"],
        answer: 0,
        explain: "Taste burada durum fiilidir ve -ing almaz."
      },
      {
        id: "present-tenses-e14",
        prompt: "Prices ___ higher and higher these days.",
        options: ["get", "gets", "are getting", "got"],
        answer: 2,
        explain: "These days ile değişmekte olan bir süreç anlatılır, continuous gerekir."
      }
    ]
  },
  {
    id: "past-tenses",
    title: "Past Simple & Continuous",
    titleTr: "Geçmiş Zaman: Simple ve Continuous",
    emoji: "🕰️",
    level: 1,
    summary: "Geçmişi anlatmanın iki yolu: olup biteni ve o sırada süreni ustaca ayır.",
    sections: [
      {
        heading: "Past Simple: Oldu ve Bitti",
        body: "Geçmişte belirli bir zamanda olup bitmiş olaylar için past simple kullanırız: dün, geçen hafta, iki yıl önce. Türkçedeki di'li geçmiş zamanın birebir karşılığı. Düzenli fiillere -ed ekleriz, düzensizleri ise (go-went, see-saw) ezberlemekten başka çare yok, kusura bakma!",
        examples: [
          { en: "I visited my grandmother yesterday.", tr: "Dün büyükannemi ziyaret ettim." },
          { en: "They moved to Izmir in 2020.", tr: "2020'de İzmir'e taşındılar." },
          { en: "She didn't like the film.", tr: "Filmi beğenmedi." }
        ]
      },
      {
        heading: "Past Continuous: O Sırada Devam Eden İş",
        body: "Geçmişte belli bir anda devam etmekte olan işleri anlatır: was/were + Ving. Türkçedeki 'yapıyordum' anlamını verir. Genelde sahne kurar: dün akşam sekizde ders çalışıyordum gibi. Tek başına da kullanılır ama en çok past simple ile birlikte görürsün.",
        examples: [
          { en: "At 9 pm last night, I was studying.", tr: "Dün gece dokuzda ders çalışıyordum." },
          { en: "They were playing football all afternoon.", tr: "Bütün öğleden sonra futbol oynuyorlardı." }
        ]
      },
      {
        heading: "When ve While: Kesme Hikayesi",
        body: "Klasik senaryo şu: uzun süren bir eylem (past continuous) kısa bir eylem (past simple) tarafından kesilir. While'dan sonra genelde continuous, when'den sonra genelde simple gelir. 'While I was sleeping, the phone rang' cümlesi bu yapının kral örneğidir, sınavda mutlaka karşına çıkar.",
        examples: [
          { en: "While I was cooking, the doorbell rang.", tr: "Ben yemek yaparken kapı zili çaldı." },
          { en: "When she arrived, we were watching TV.", tr: "O geldiğinde biz televizyon izliyorduk." },
          { en: "He cut his finger while he was chopping onions.", tr: "Soğan doğrarken parmağını kesti." }
        ]
      },
      {
        heading: "Türk Öğrencinin Klasik Hataları",
        body: "Bir numaralı hata: did'den sonra fiilin ikinci halini kullanmak. 'Did you went?' yanlış, 'Did you go?' doğru, çünkü did zaten geçmişi üstlenir. İkinci hata: durum fiillerini continuous yapmak, 'I was knowing' olmaz, 'I knew' olur. Üçüncüsü: ago kelimesini görünce perfect kullanmak, ago her zaman past simple ister.",
        examples: [
          { en: "Did you see the news last night?", tr: "Dün gece haberleri gördün mü?" },
          { en: "I met her three years ago.", tr: "Onunla üç yıl önce tanıştım." }
        ]
      }
    ],
    tips: [
      "Did'den sonra fiil hep yalın halde kalır: 'Did you went' gördüğün an ele.",
      "Ago, yesterday, last week gibi ifadeler yüzde yüz past simple ister.",
      "While + past continuous, when + past simple: hikaye sorularının anahtar kalıbı.",
      "Uzun eylem kesilen, kısa eylem kesendir: kesilen continuous, kesen simple olur.",
      "Was/were seçerken özneye bak: I, he, she, it için was, diğerlerinde were."
    ],
    exercises: [
      {
        id: "past-tenses-e1",
        prompt: "I ___ my keys yesterday.",
        options: ["lose", "lost", "have lost", "was losing"],
        answer: 1,
        explain: "Yesterday past simple ister."
      },
      {
        id: "past-tenses-e2",
        prompt: "She ___ TV when I called her.",
        options: ["watched", "watches", "was watching", "is watching"],
        answer: 2,
        explain: "Arama anında devam eden eylem past continuous olur."
      },
      {
        id: "past-tenses-e3",
        prompt: "They ___ to Ankara last week.",
        options: ["go", "goes", "gone", "went"],
        answer: 3,
        explain: "Last week ile go fiilinin ikinci hali went kullanılır."
      },
      {
        id: "past-tenses-e4",
        prompt: "Did you ___ the film last night?",
        options: ["saw", "see", "seen", "seeing"],
        answer: 1,
        explain: "Did'den sonra fiil yalın halde kalır."
      },
      {
        id: "past-tenses-e5",
        prompt: "While I ___ dinner, the phone rang.",
        options: ["cooked", "cook", "was cooking", "am cooking"],
        answer: 2,
        explain: "While uzun süren eylemi işaretler, past continuous gerekir."
      },
      {
        id: "past-tenses-e6",
        prompt: "He ___ his leg while he was skiing.",
        options: ["broke", "was breaking", "breaks", "has broken"],
        answer: 0,
        explain: "Kesen kısa eylem past simple ile verilir."
      },
      {
        id: "past-tenses-e7",
        prompt: "We ___ at home last night; we went to a concert.",
        options: ["didn't were", "weren't", "wasn't", "didn't be"],
        answer: 1,
        explain: "Be fiilinin geçmiş olumsuzu we öznesiyle weren't olur."
      },
      {
        id: "past-tenses-e8",
        prompt: "What ___ at 8 pm yesterday? I called you but you didn't answer.",
        options: ["did you do", "you were doing", "were you doing", "do you do"],
        answer: 2,
        explain: "Belirli bir anda süren eylemin sorusu were you doing ile kurulur."
      },
      {
        id: "past-tenses-e9",
        prompt: "The sun ___ when we left the house.",
        options: ["shone", "is shining", "shines", "was shining"],
        answer: 3,
        explain: "Evden çıktığımız anda süren durum past continuous ister."
      },
      {
        id: "past-tenses-e10",
        prompt: "I ___ him at a party two days ago.",
        options: ["have seen", "was seeing", "see", "saw"],
        answer: 3,
        explain: "Ago her zaman past simple ile kullanılır."
      },
      {
        id: "past-tenses-e11",
        prompt: "She didn't ___ anything at the meeting.",
        options: ["say", "said", "says", "saying"],
        answer: 0,
        explain: "Didn't'ten sonra fiil yalın kalır."
      },
      {
        id: "past-tenses-e12",
        prompt: "When the teacher walked in, the students ___ loudly.",
        options: ["talked", "were talking", "talk", "have talked"],
        answer: 1,
        explain: "Öğretmen girdiği anda devam eden eylem past continuous olur."
      },
      {
        id: "past-tenses-e13",
        prompt: "As soon as the bell rang, everyone ___ the classroom.",
        options: ["left", "was leaving", "leaves", "leave"],
        answer: 0,
        explain: "As soon as ardışık kısa eylemleri bağlar, ikisi de past simple olur."
      },
      {
        id: "past-tenses-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "I was knowing the answer.",
          "When she was hearing the news, she was crying.",
          "He was reading a book when the lights went out.",
          "While I watched TV, my phone was ringing suddenly."
        ],
        answer: 2,
        explain: "Uzun eylem continuous, kesen eylem simple olur; know gibi durum fiilleri continuous yapılmaz."
      }
    ]
  },
  {
    id: "present-perfect",
    title: "Present Perfect (Simple & Continuous)",
    titleTr: "Yakın Geçmiş Zaman",
    emoji: "🔗",
    level: 2,
    summary: "Türkçede tam karşılığı olmayan ama sınavın en sevdiği zaman: geçmişle bugünü bağlayan köprü.",
    sections: [
      {
        heading: "Present Perfect: Geçmişle Bugünün Köprüsü",
        body: "Present perfect (have/has + V3) Türkçede birebir karşılığı olmayan bir zaman, o yüzden ilk başta tuhaf gelmesi çok normal. Mantık şu: olay geçmişte oldu ama etkisi ya da bağlantısı şu ana uzanıyor. Ne zaman olduğu önemli değil, sonucu önemli. 'I have lost my keys' dersen anahtar hala kayıp demektir.",
        examples: [
          { en: "I have lost my wallet.", tr: "Cüzdanımı kaybettim (hala kayıp)." },
          { en: "She has visited five countries.", tr: "Bugüne kadar beş ülke gezdi." },
          { en: "We have just finished lunch.", tr: "Öğle yemeğini daha yeni bitirdik." }
        ]
      },
      {
        heading: "Sinyal Kelimeler: just, already, yet, ever, never",
        body: "Bu beş kelime present perfect'in imza kelimeleridir. Just (az önce) ve already (çoktan) olumlu cümlede fiilden önce gelir. Yet (henüz) olumsuz cümlenin ve sorunun sonunda oturur. Ever soruda (hiç), never olumsuz anlamda kullanılır. Sınavda bunlardan birini gördüysen büyük ihtimalle have/has + V3 arıyorsun.",
        examples: [
          { en: "Have you ever been to London?", tr: "Hiç Londra'ya gittin mi?" },
          { en: "I haven't finished my essay yet.", tr: "Kompozisyonumu henüz bitirmedim." },
          { en: "She has already left.", tr: "O çoktan gitti." }
        ]
      },
      {
        heading: "For ve Since: Süre mi, Başlangıç mı?",
        body: "For'dan sonra süre gelir (for two years, for a long time), since'ten sonra başlangıç noktası gelir (since 2019, since Monday). Altın kural: since + geçmiş bir nokta gördüğünde ana cümle neredeyse her zaman present perfect olur. Since'ten sonra past simple bir cümlecik de gelebilir: 'since I was a child' gibi.",
        examples: [
          { en: "I have known her for ten years.", tr: "Onu on yıldır tanıyorum." },
          { en: "He has worked here since 2018.", tr: "2018'den beri burada çalışıyor." },
          { en: "We have been friends since we were children.", tr: "Çocukluğumuzdan beri arkadaşız." }
        ]
      },
      {
        heading: "Present Perfect Continuous: Sürecin Ta Kendisi",
        body: "Have/has been + Ving, eylemin süresini ve devam eden yönünü vurgular. Sonuçtan çok süreç önemliyse bunu seç. Yan etkisi görünüyorsa da harika çalışır: ellerin boyalıysa 'I have been painting' dersin. How long sorularının gözde cevabıdır.",
        examples: [
          { en: "I have been studying English for three hours.", tr: "Üç saattir İngilizce çalışıyorum." },
          { en: "It has been raining all day.", tr: "Bütün gün yağmur yağıyor." },
          { en: "Her eyes are red. She has been crying.", tr: "Gözleri kızarmış. Ağlıyormuş." }
        ]
      },
      {
        heading: "Past Simple ile Farkı: Zaman Belliyse Perfect Yok",
        body: "En kritik sınav noktası: cümlede bitmiş ve belirli bir zaman varsa (yesterday, last year, in 2015, ago) asla present perfect kullanma, past simple kullan. 'I have seen him yesterday' İngilizcede yanlıştır. Zaman belirsizse veya şu ana bağlıysa perfect devreye girer.",
        examples: [
          { en: "I saw that film last week.", tr: "O filmi geçen hafta izledim." },
          { en: "I have seen that film twice.", tr: "O filmi iki kez izledim." }
        ]
      }
    ],
    tips: [
      "Yesterday, ago, last year varsa present perfect'i unut, past simple seç.",
      "Just, already, yet, ever, never gördüğünde have/has + V3 ara.",
      "Since'ten sonra başlangıç noktası, for'dan sonra süre gelir.",
      "How long ile sorulan devam eden eylem genelde present perfect continuous ister.",
      "Have gone (gitti, hala orada) ile have been (gitti ve döndü) farkı klasik tuzaktır."
    ],
    exercises: [
      {
        id: "present-perfect-e1",
        prompt: "I ___ my homework, so I can go out now.",
        options: ["have finished", "finished", "finish", "am finishing"],
        answer: 0,
        explain: "Sonucu şu ana uzanan eylem present perfect ister."
      },
      {
        id: "present-perfect-e2",
        prompt: "She has lived in this city ___ 2015.",
        options: ["for", "during", "from", "since"],
        answer: 3,
        explain: "Başlangıç noktası olan 2015, since ile verilir."
      },
      {
        id: "present-perfect-e3",
        prompt: "We ___ each other for ten years.",
        options: ["have known", "know", "knew", "are knowing"],
        answer: 0,
        explain: "For + süre ile present perfect kullanılır, know continuous olmaz."
      },
      {
        id: "present-perfect-e4",
        prompt: "___ you ever ___ sushi?",
        options: ["Did / eat", "Have / eaten", "Have / ate", "Do / eat"],
        answer: 1,
        explain: "Ever ile deneyim sorusu have + V3 ister."
      },
      {
        id: "present-perfect-e5",
        prompt: "He ___ to London in 2019.",
        options: ["has gone", "has been", "went", "goes"],
        answer: 2,
        explain: "In 2019 belirli bir geçmiş zamandır, past simple gerekir."
      },
      {
        id: "present-perfect-e6",
        prompt: "I have been waiting for the bus ___ forty minutes.",
        options: ["since", "for", "already", "yet"],
        answer: 1,
        explain: "Süre bildiren ifadeler for ile verilir."
      },
      {
        id: "present-perfect-e7",
        prompt: "She hasn't called me back ___.",
        options: ["already", "just", "for", "yet"],
        answer: 3,
        explain: "Olumsuz cümlenin sonunda henüz anlamını yet verir."
      },
      {
        id: "present-perfect-e8",
        prompt: "Look at his hands! He ___ the car all morning.",
        options: ["has repaired", "repaired", "has been repairing", "is repairing"],
        answer: 2,
        explain: "Görünen iz ve süreç vurgusu present perfect continuous ister."
      },
      {
        id: "present-perfect-e9",
        prompt: "How long ___ English?",
        options: ["do you learn", "are you learning", "have you been learning", "did you learned"],
        answer: 2,
        explain: "How long süre sorar, present perfect continuous en doğal cevaptır."
      },
      {
        id: "present-perfect-e10",
        prompt: "I ___ my keys, so I can't open the door.",
        options: ["lost", "have lost", "lose", "was losing"],
        answer: 1,
        explain: "Sonuç şu anı etkilediği için present perfect kullanılır."
      },
      {
        id: "present-perfect-e11",
        prompt: "Zeynep has ___ finished her exam; she came out two minutes ago.",
        options: ["yet", "just", "since", "for"],
        answer: 1,
        explain: "Az önce anlamını just verir."
      },
      {
        id: "present-perfect-e12",
        prompt: "This is the best film I ___.",
        options: ["have ever seen", "ever saw", "have ever saw", "ever seen"],
        answer: 0,
        explain: "The best ile kurulan kalıptan sonra have ever + V3 gelir."
      },
      {
        id: "present-perfect-e13",
        prompt: "They ___ in this house since they got married.",
        options: ["live", "lived", "are living", "have lived"],
        answer: 3,
        explain: "Since'li cümlenin ana kısmı present perfect olur."
      },
      {
        id: "present-perfect-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "I have seen him yesterday.",
          "She has been knowing him for years.",
          "We have already taken the exam.",
          "Did you finish yet your homework?"
        ],
        answer: 2,
        explain: "Already ile have + V3 doğru eşleşmedir; yesterday perfect ile kullanılmaz."
      }
    ]
  },
  {
    id: "past-perfect",
    title: "Past Perfect & Used To",
    titleTr: "Mişli Geçmiş ve Used To",
    emoji: "⏪",
    level: 2,
    summary: "Geçmişin geçmişini ve eski alışkanlıklarını anlatmanın şık yolları.",
    sections: [
      {
        heading: "Past Perfect: Geçmişin de Geçmişi",
        body: "Had + V3, geçmişteki iki olaydan daha önce olanı işaretler. Türkçedeki miş'li geçmişe benzetebilirsin ama asıl işi sıralama yapmak. 'When I arrived, the film had started' dersen film sen gelmeden önce başlamış demektir. Before, after, by the time gibi bağlaçlar bu zamanın en yakın arkadaşlarıdır.",
        examples: [
          { en: "The train had left before we reached the station.", tr: "Biz istasyona varmadan tren kalkmıştı." },
          { en: "She had never seen the sea until last summer.", tr: "Geçen yaza kadar denizi hiç görmemişti." },
          { en: "By the time he called, I had already gone to bed.", tr: "O aradığında ben çoktan yatmıştım." }
        ]
      },
      {
        heading: "Past Perfect Continuous: Öncesinde Süren İş",
        body: "Had been + Ving, geçmişteki bir andan önce bir süredir devam eden eylemi anlatır. Genelde bir sonuç veya iz vardır: yer ıslaksa yağmur yağıyormuştur. For ve since ile süre verildiğinde de bu yapı parlar.",
        examples: [
          { en: "He was tired because he had been running.", tr: "Yorgundu çünkü koşuyordu." },
          { en: "They had been waiting for an hour when the bus finally came.", tr: "Otobüs nihayet geldiğinde bir saattir bekliyorlardı." }
        ]
      },
      {
        heading: "Used To: Eskiden Öyleydi, Artık Değil",
        body: "Used to + fiil, geçmişteki alışkanlık ve durumları anlatır, üstelik artık öyle olmadığını da ima eder. 'I used to smoke' dersen artık içmiyorsun demektir. Dikkat: olumsuzda ve soruda d düşer, 'didn't use to' ve 'Did you use to' yazılır. Bu yazım detayı sınavın favori tuzağıdır.",
        examples: [
          { en: "I used to play the guitar.", tr: "Eskiden gitar çalardım." },
          { en: "There used to be a park here.", tr: "Eskiden burada bir park vardı." },
          { en: "Did you use to wear glasses?", tr: "Eskiden gözlük takar mıydın?" }
        ]
      },
      {
        heading: "Be Used To ve Would: Kardeş Ama Aynı Değil",
        body: "Be/get used to + Ving bambaşka bir şeydir: alışkın olmak demektir ve şimdiki zamanı da anlatabilir. 'I am used to getting up early' (erken kalkmaya alışkınım). Would da geçmiş alışkanlık anlatabilir ama sadece eylemler için; live, be gibi durum bildiren fiillerle would kullanılmaz, orada used to şart.",
        examples: [
          { en: "I am used to driving in heavy traffic.", tr: "Yoğun trafikte araba kullanmaya alışkınım." },
          { en: "When I was a child, we would play outside all day.", tr: "Çocukken bütün gün dışarıda oynardık." },
          { en: "She used to live in a small village.", tr: "Eskiden küçük bir köyde yaşardı." }
        ]
      }
    ],
    tips: [
      "By the time, before, after gördüğünde past perfect kokusu al.",
      "Didn't use to ve Did you use to yazımında used değil use olur, gözünden kaçmasın.",
      "Be used to'dan sonra fiil -ing alır, used to'dan sonra yalın fiil gelir.",
      "Would geçmiş alışkanlıkta sadece eylemlerle kullanılır; live, be gibi durumlarda used to seç.",
      "İki geçmiş olaydan önce olanı had + V3 ile işaretle, sonrakini past simple bırak."
    ],
    exercises: [
      {
        id: "past-perfect-e1",
        prompt: "When we arrived at the cinema, the film ___.",
        options: ["already started", "had already started", "has already started", "was already starting"],
        answer: 1,
        explain: "Biz gelmeden önce olan eylem past perfect ile verilir."
      },
      {
        id: "past-perfect-e2",
        prompt: "I ___ football every weekend when I was a child.",
        options: ["was used to play", "use to play", "used to play", "am used to playing"],
        answer: 2,
        explain: "Geçmiş alışkanlık used to + yalın fiil ile anlatılır."
      },
      {
        id: "past-perfect-e3",
        prompt: "She was exhausted because she ___ all day.",
        options: ["worked", "works", "is working", "had been working"],
        answer: 3,
        explain: "Yorgunluğun sebebi öncesinde süren eylemdir, had been + Ving gerekir."
      },
      {
        id: "past-perfect-e4",
        prompt: "He ___ smoke, but he quit two years ago.",
        options: ["used to", "is used to", "was used to", "uses to"],
        answer: 0,
        explain: "Artık yapılmayan geçmiş alışkanlık used to ile verilir."
      },
      {
        id: "past-perfect-e5",
        prompt: "By the time the police arrived, the thief ___.",
        options: ["escaped", "escapes", "has escaped", "had escaped"],
        answer: 3,
        explain: "By the time'dan önce tamamlanan eylem past perfect olur."
      },
      {
        id: "past-perfect-e6",
        prompt: "Did you ___ live in a village when you were young?",
        options: ["used to", "use to", "using to", "be used to"],
        answer: 1,
        explain: "Soru cümlesinde did varken use to yazılır, d düşer."
      },
      {
        id: "past-perfect-e7",
        prompt: "I couldn't get into the house because I ___ my keys at the office.",
        options: ["had left", "left", "have left", "was leaving"],
        answer: 0,
        explain: "Anahtarı bırakmak eve gelmekten önce olduğu için past perfect gerekir."
      },
      {
        id: "past-perfect-e8",
        prompt: "She is used to ___ up early for work.",
        options: ["get", "got", "getting", "gets"],
        answer: 2,
        explain: "Be used to'dan sonra fiil -ing alır."
      },
      {
        id: "past-perfect-e9",
        prompt: "After they ___ dinner, they watched a film.",
        options: ["have eaten", "had eaten", "eat", "were eating"],
        answer: 1,
        explain: "After'dan sonra önce biten eylem past perfect ile verilir."
      },
      {
        id: "past-perfect-e10",
        prompt: "The ground was wet in the morning. It ___ all night.",
        options: ["rained", "rains", "was raining", "had been raining"],
        answer: 3,
        explain: "Sabahtan önce süren eylemin izi had been + Ving ile anlatılır."
      },
      {
        id: "past-perfect-e11",
        prompt: "There ___ a cinema on this street, but it closed down.",
        options: ["used to be", "used to being", "was used to be", "use to be"],
        answer: 0,
        explain: "Geçmişte var olup artık olmayan durum used to be ile verilir."
      },
      {
        id: "past-perfect-e12",
        prompt: "He didn't ___ like coffee, but now he loves it.",
        options: ["used to", "use to", "using to", "uses to"],
        answer: 1,
        explain: "Didn't'ten sonra use to yazılır, used yazmak tuzaktır."
      },
      {
        id: "past-perfect-e13",
        prompt: "By 2020, she ___ three novels.",
        options: ["wrote", "has written", "had written", "was writing"],
        answer: 2,
        explain: "By + geçmiş tarih, o ana kadar tamamlanan eylem için past perfect ister."
      },
      {
        id: "past-perfect-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "When I arrived, the meeting had already begun.",
          "When I had arrived, the meeting already began.",
          "I am used to get up early.",
          "She used to living in Paris."
        ],
        answer: 0,
        explain: "Önce olan eylem had + V3 alır; be used to'dan sonra -ing, used to'dan sonra yalın fiil gelir."
      }
    ]
  },
  {
    id: "future-forms",
    title: "Future Forms",
    titleTr: "Gelecek Zaman Biçimleri",
    emoji: "🚀",
    level: 1,
    summary: "Will tek başına yetmez: İngilizcede geleceği anlatmanın tam dört farklı yolu var.",
    sections: [
      {
        heading: "Will: Anlık Karar, Söz ve Tahmin",
        body: "Will'i üç durumda seçiyoruz: konuşma anında verilen kararlar (garson geldi, 'I'll have the soup'), sözler ve teklifler, bir de kanıta dayanmayan kişisel tahminler (I think, probably, maybe ile). Türk öğrenciler her geleceği will sanır, halbuki İngilizce gelecek için tam bir kalıp bahçesidir.",
        examples: [
          { en: "I'm tired. I'll go to bed.", tr: "Yorgunum. Yatacağım." },
          { en: "I promise I won't tell anyone.", tr: "Söz veriyorum kimseye söylemeyeceğim." },
          { en: "I think it will be a great match.", tr: "Bence harika bir maç olacak." }
        ]
      },
      {
        heading: "Be Going To: Plan ve Gözle Görülür Kanıt",
        body: "Önceden verilmiş kararlar ve planlar için be going to kullanılır: 'I am going to study abroad' dersen bu kararı çoktan vermişsindir. İkinci görevi de kanıta dayalı tahmin: kara bulutları görüyorsan 'It is going to rain' dersin, çünkü kanıt gözünün önünde.",
        examples: [
          { en: "We are going to buy a new car next month.", tr: "Gelecek ay yeni bir araba alacağız." },
          { en: "Watch out! You are going to fall!", tr: "Dikkat et! Düşeceksin!" }
        ]
      },
      {
        heading: "Present Continuous ve Simple ile Gelecek",
        body: "Ayarlanmış, takvime işlenmiş kişisel planlar için present continuous kullanılır: 'I am meeting Ali at six' (buluşma ayarlandı). Tarifeli olaylar, yani tren, uçak, ders programı gibi resmi programlar ise present simple ile söylenir: 'The train leaves at 9'. Bu ikisi sınavda will ile yan yana seçenek olur, aradaki nüansı bilen kazanır.",
        examples: [
          { en: "I am seeing the dentist tomorrow morning.", tr: "Yarın sabah dişçiye gidiyorum." },
          { en: "The film starts at 8 pm.", tr: "Film akşam sekizde başlıyor." }
        ]
      },
      {
        heading: "Zaman Cümleciği Tuzağı: when'den Sonra will Gelmez",
        body: "MÜYYES tarzı sınavların bayıldığı kural: when, as soon as, until, before, after gibi zaman bağlaçlarından sonra gelecekten bahsetsek bile will kullanılmaz, present simple kullanılır. 'When I will arrive' yanlış, 'When I arrive, I will call you' doğru. Will ana cümlede kalır, yan cümleye giremez.",
        examples: [
          { en: "I will call you as soon as I arrive.", tr: "Varır varmaz seni arayacağım." },
          { en: "We will wait until the rain stops.", tr: "Yağmur durana kadar bekleyeceğiz." }
        ]
      },
      {
        heading: "Future Continuous ve Future Perfect: B2 Dokunuşu",
        body: "Will be + Ving, gelecekte belli bir anda devam edecek işi anlatır: 'This time tomorrow I will be flying to Rome'. Will have + V3 ise bir zamana kadar tamamlanmış olacak işi anlatır ve neredeyse hep by ile gelir: 'By 2030, I will have graduated'. By + gelecek tarih gördüğünde future perfect ara.",
        examples: [
          { en: "Don't call at nine, I will be having dinner.", tr: "Dokuzda arama, yemek yiyor olacağım." },
          { en: "By next June, she will have finished her thesis.", tr: "Gelecek hazirana kadar tezini bitirmiş olacak." }
        ]
      }
    ],
    tips: [
      "When, until, as soon as, before, after'dan sonra will yazma, present simple kullan.",
      "Kanıt görünüyorsa going to, anlık karar veriyorsan will.",
      "Ayarlanmış randevular için present continuous da gelecek anlatır.",
      "By + gelecekteki tarih gördüğünde will have + V3 (future perfect) ara.",
      "Tarifeler (tren, uçak, ders) present simple ile verilir, şaşırma."
    ],
    exercises: [
      {
        id: "future-forms-e1",
        prompt: "I'm so thirsty. I ___ get a glass of water.",
        options: ["will", "am going to", "going to", "would"],
        answer: 0,
        explain: "Anlık karar will ile verilir."
      },
      {
        id: "future-forms-e2",
        prompt: "Look at those black clouds! It ___ rain.",
        options: ["will", "shall", "would", "is going to"],
        answer: 3,
        explain: "Gözle görülür kanıta dayalı tahmin going to ister."
      },
      {
        id: "future-forms-e3",
        prompt: "We ___ dinner with my parents tomorrow evening; everything is arranged.",
        options: ["will have", "have", "are having", "had"],
        answer: 2,
        explain: "Ayarlanmış plan present continuous ile anlatılır."
      },
      {
        id: "future-forms-e4",
        prompt: "The plane ___ at 6:30 tomorrow morning.",
        options: ["will leaving", "is leave", "leave", "leaves"],
        answer: 3,
        explain: "Tarifeli uçuşlar present simple ile söylenir."
      },
      {
        id: "future-forms-e5",
        prompt: "When she ___, I will tell her the news.",
        options: ["will arrive", "arrives", "arrived", "is going to arrive"],
        answer: 1,
        explain: "When'den sonra will gelmez, present simple kullanılır."
      },
      {
        id: "future-forms-e6",
        prompt: "I promise I ___ you every day while I'm away.",
        options: ["am calling", "am going to call", "will call", "call"],
        answer: 2,
        explain: "Söz vermek will ile ifade edilir."
      },
      {
        id: "future-forms-e7",
        prompt: "She has already bought the paint. She ___ her room at the weekend.",
        options: ["is going to paint", "will paint", "paints", "painted"],
        answer: 0,
        explain: "Önceden verilmiş karar going to ile anlatılır."
      },
      {
        id: "future-forms-e8",
        prompt: "Don't call me at nine; I ___ the match then.",
        options: ["will watch", "will be watching", "am watching now", "watch"],
        answer: 1,
        explain: "Gelecekte belli bir anda sürecek eylem future continuous ister."
      },
      {
        id: "future-forms-e9",
        prompt: "By next year, we ___ this project.",
        options: ["will finish", "are finishing", "will have finished", "finished"],
        answer: 2,
        explain: "By + gelecek tarih future perfect (will have + V3) ister."
      },
      {
        id: "future-forms-e10",
        prompt: "I'll wait here until you ___ back.",
        options: ["will come", "came", "come", "will have come"],
        answer: 2,
        explain: "Until'den sonra will kullanılmaz, present simple gelir."
      },
      {
        id: "future-forms-e11",
        prompt: "___ I carry your bag for you?",
        options: ["Shall", "Will", "Do", "Am"],
        answer: 0,
        explain: "Teklif soruları Shall I ile kurulur."
      },
      {
        id: "future-forms-e12",
        prompt: "They ___ married next month; the invitations were sent last week.",
        options: ["will got", "gets", "got", "are getting"],
        answer: 3,
        explain: "Kesinleşmiş yakın plan present continuous ile anlatılır."
      },
      {
        id: "future-forms-e13",
        prompt: "If the weather is nice tomorrow, we ___ to the beach.",
        options: ["go", "will go", "went", "would go"],
        answer: 1,
        explain: "First conditional yapısının ana cümlesi will alır."
      },
      {
        id: "future-forms-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "I will call you when I will arrive.",
          "As soon as he comes, we will start the meeting.",
          "The train will leaves at ten.",
          "She going to visit us next week."
        ],
        answer: 1,
        explain: "As soon as'ten sonra present simple, ana cümlede will kullanılır."
      }
    ]
  },
  {
    id: "modals",
    title: "Modals & Semi-modals",
    titleTr: "Kip Fiilleri",
    emoji: "🎛️",
    level: 2,
    summary: "Küçük ama güçlü fiiller: zorunluluk, tavsiye, olasılık ve çıkarım hepsi bu ailede.",
    sections: [
      {
        heading: "can, could, be able to: Yetenek ve İzin",
        body: "Can şimdiki yetenek ve izin, could geçmiş yetenek ve kibar rica için kullanılır. Modal fiillerin demir kuralı: arkalarından hep yalın fiil gelir ve üçüncü tekilde -s almazlar. 'She cans' veya 'can to go' yazan seçenekler anında çöpe. Gelecek ve perfect yapılarda can çalışmaz, orada be able to devreye girer: 'will be able to'.",
        examples: [
          { en: "She can play the violin.", tr: "Keman çalabilir." },
          { en: "Could you open the door, please?", tr: "Kapıyı açar mısınız lütfen?" },
          { en: "I will be able to help you tomorrow.", tr: "Yarın sana yardım edebileceğim." }
        ]
      },
      {
        heading: "must, have to, mustn't, don't have to: Zorunluluk Dörtlüsü",
        body: "Must ve have to ikisi de zorunluluk anlatır: must daha çok kişisel, have to dışarıdan gelen kural. Ama asıl bomba olumsuzda patlar: mustn't yasak demektir (sakın yapma!), don't have to ise gerek yok demektir (istersen yapma). Bu ikisini karıştırmak Türk öğrencilerin bir numaralı modal hatasıdır, sınav da bunu çok iyi bilir.",
        examples: [
          { en: "You must wear a seatbelt.", tr: "Emniyet kemeri takmak zorundasın." },
          { en: "You mustn't use your phone during the exam.", tr: "Sınavda telefon kullanman yasak." },
          { en: "You don't have to come early.", tr: "Erken gelmek zorunda değilsin." }
        ]
      },
      {
        heading: "should, ought to, had better: Tavsiye Köşesi",
        body: "Should ve ought to tavsiye verir: yapsan iyi olur. Had better biraz daha serttir, yapmazsan kötü sonuç olacağını ima eder ve kısaltması 'd better şeklindedir: 'You'd better hurry'. Üçünden sonra da yalın fiil gelir, to sadece ought'un parçasıdır.",
        examples: [
          { en: "You should see a doctor.", tr: "Bir doktora görünmelisin." },
          { en: "You had better take an umbrella.", tr: "Yanına şemsiye alsan iyi edersin." }
        ]
      },
      {
        heading: "Olasılık ve Çıkarım: might, may, must, can't",
        body: "Olasılıkta sıralama şöyle: might/may (belki), must (kesin öyledir), can't (kesin öyle değildir). Dikkat: çıkarımda must'ın zıttı mustn't değil can't olur. 'Işıkları açık, evde olmalı' için must be, 'imkansız, o Berlin'de' için can't be dersin.",
        examples: [
          { en: "It might rain later.", tr: "Sonra yağmur yağabilir." },
          { en: "He must be at work, his car isn't here.", tr: "İşte olmalı, arabası burada değil." },
          { en: "That can't be true!", tr: "Bu doğru olamaz!" }
        ]
      },
      {
        heading: "Geçmişe Bakan Modallar: should have, must have, might have",
        body: "Modal + have + V3 geçmiş hakkında konuşur. Should have done: yapmalıydın ama yapmadın (pişmanlık ve sitem). Must have done: kesin öyle olmuştur (çıkarım). Might have done: olmuş olabilir. Can't have done: olmuş olamaz. Sınavın B2 sorularında bu kalıp yıldızdır.",
        examples: [
          { en: "You should have studied harder.", tr: "Daha çok çalışmalıydın." },
          { en: "She must have missed the bus.", tr: "Otobüsü kaçırmış olmalı." },
          { en: "He can't have forgotten our meeting.", tr: "Toplantımızı unutmuş olamaz." }
        ]
      }
    ],
    tips: [
      "Modaldan sonra hep yalın fiil gelir: 'must to go' ve 'cans' tarzı seçenekleri anında ele.",
      "Mustn't yasak, don't have to gereksizlik: bu fark tek başına soru getirir.",
      "Kesin çıkarımın olumsuzu mustn't değil can't olur.",
      "Geçmişe dönük pişmanlık için should have + V3 kalıbını ara.",
      "Kural ve prosedürlerde have to, kişisel zorunlulukta must daha doğaldır."
    ],
    exercises: [
      {
        id: "modals-e1",
        prompt: "She ___ speak three languages fluently.",
        options: ["can", "cans", "can to", "could to"],
        answer: 0,
        explain: "Modaldan sonra yalın fiil gelir ve can -s almaz."
      },
      {
        id: "modals-e2",
        prompt: "You ___ smoke in the hospital; it is strictly forbidden.",
        options: ["don't have to", "mustn't", "shouldn't have", "couldn't"],
        answer: 1,
        explain: "Yasak mustn't ile ifade edilir."
      },
      {
        id: "modals-e3",
        prompt: "You ___ come to the meeting if you're busy; it's optional.",
        options: ["mustn't", "can't", "don't have to", "shouldn't"],
        answer: 2,
        explain: "Zorunlu olmadığını don't have to anlatır."
      },
      {
        id: "modals-e4",
        prompt: "I ___ swim when I was only five years old.",
        options: ["can", "must", "should", "could"],
        answer: 3,
        explain: "Geçmiş yetenek could ile verilir."
      },
      {
        id: "modals-e5",
        prompt: "You look exhausted. You ___ go to bed early tonight.",
        options: ["should", "must to", "would", "can to"],
        answer: 0,
        explain: "Tavsiye should ile verilir ve to almaz."
      },
      {
        id: "modals-e6",
        prompt: "He isn't answering his phone. He ___ be asleep.",
        options: ["can't", "should", "must", "mustn't"],
        answer: 2,
        explain: "Güçlü çıkarım must be ile yapılır."
      },
      {
        id: "modals-e7",
        prompt: "That ___ be Ali at the door; he is in Berlin this week.",
        options: ["must", "can't", "should", "might not"],
        answer: 1,
        explain: "İmkansızlık çıkarımı can't ile yapılır."
      },
      {
        id: "modals-e8",
        prompt: "___ you help me with these bags, please?",
        options: ["Must", "Should", "Need", "Could"],
        answer: 3,
        explain: "Kibar rica Could you ile kurulur."
      },
      {
        id: "modals-e9",
        prompt: "We ___ hurry; the meeting starts in five minutes!",
        options: ["had better", "would rather", "used to", "could"],
        answer: 0,
        explain: "Aciliyet ve uyarı had better ile verilir."
      },
      {
        id: "modals-e10",
        prompt: "She wasn't at home last night. She ___ out with her friends.",
        options: ["must go", "might have gone", "should go", "can have gone"],
        answer: 1,
        explain: "Geçmişe dair olasılık might have + V3 ile anlatılır."
      },
      {
        id: "modals-e11",
        prompt: "You ___ told me earlier! Now it's too late to buy tickets.",
        options: ["must have", "should have", "can have", "may"],
        answer: 1,
        explain: "Geçmişe sitem should have + V3 kalıbıyla yapılır."
      },
      {
        id: "modals-e12",
        prompt: "Ali got the highest score in class. He ___ have cheated; he always studies hard.",
        options: ["must", "should", "can't", "may"],
        answer: 2,
        explain: "Geçmişte imkansızlık can't have + V3 ile anlatılır."
      },
      {
        id: "modals-e13",
        prompt: "All passengers ___ show their tickets before boarding.",
        options: ["might", "could", "have to", "would"],
        answer: 2,
        explain: "Dışarıdan gelen kural zorunluluğu have to ile verilir."
      },
      {
        id: "modals-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "You must to study harder.",
          "He cans drive very well.",
          "She doesn't has to come early.",
          "You should have seen the doctor yesterday."
        ],
        answer: 3,
        explain: "Should have + V3 doğru kalıptır; modallar to ve -s almaz."
      }
    ]
  },
  {
    id: "conditionals",
    title: "Conditionals & Wish",
    titleTr: "Koşul Cümleleri ve Keşke",
    emoji: "🎲",
    level: 2,
    summary: "Şartlar, hayaller ve keşkeler: if'i çözen, MÜYYES'in en garantili sorularını cebe atar.",
    sections: [
      {
        heading: "Zero ve First Conditional: Gerçek Dünya",
        body: "Zero conditional genel gerçekler için: if + present simple, present simple ('If you heat ice, it melts'). First conditional gelecekteki gerçekçi ihtimaller için: if + present simple, will + fiil. Altın kural ikisinde de aynı: if'li tarafta will olmaz. 'If it will rain' yazan seçenek yanlıştır, gözünü kapatıp ele.",
        examples: [
          { en: "If you mix red and blue, you get purple.", tr: "Kırmızı ile maviyi karıştırırsan mor elde edersin." },
          { en: "If it rains, we will stay at home.", tr: "Yağmur yağarsa evde kalacağız." }
        ]
      },
      {
        heading: "Second Conditional: Hayal Alemi",
        body: "Şu an gerçek olmayan, hayali durumlar için: if + past simple, would + fiil. Geçmişten bahsetmiyoruz, sadece hayal kuruyoruz! 'If I were rich' kalıbında tüm öznelerle were kullanmak sınav İngilizcesinde tercih edilir. 'If I were you' tavsiye kalıbı da buradan gelir.",
        examples: [
          { en: "If I had more time, I would learn Italian.", tr: "Daha çok vaktim olsaydı İtalyanca öğrenirdim." },
          { en: "If I were you, I would accept the offer.", tr: "Yerinde olsam teklifi kabul ederdim." }
        ]
      },
      {
        heading: "Third Conditional: Geçmişe Ağıt",
        body: "Geçmişte olmamış şeylerin hayali için: if + past perfect, would have + V3. Türkçesi 'olsaydı ... olurdu' kalıbı. Geçmiş artık değiştirilemez, o yüzden hep bir pişmanlık kokusu vardır. Sınavda if tarafında had + V3 görürsen diğer tarafta would have + V3 ara, bu eşleşme neredeyse otomatiktir.",
        examples: [
          { en: "If she had studied, she would have passed.", tr: "Çalışsaydı geçerdi." },
          { en: "If we had left earlier, we wouldn't have missed the plane.", tr: "Daha erken çıksaydık uçağı kaçırmazdık." }
        ]
      },
      {
        heading: "Wish ve If Only: Keşke Cümleleri",
        body: "Wish + past simple şimdiki duruma keşke der: 'I wish I were taller'. Wish + past perfect geçmişe keşke der: 'I wish I had listened'. Wish + would ise başkasının davranışından şikayet eder: 'I wish you would stop shouting'. Kendin hakkında wish + would kullanma, orası şikayet makamı.",
        examples: [
          { en: "I wish I had a car.", tr: "Keşke bir arabam olsaydı." },
          { en: "I wish I had studied medicine.", tr: "Keşke tıp okusaydım." },
          { en: "I wish the neighbours would turn the music down.", tr: "Keşke komşular müziğin sesini kıssa." }
        ]
      },
      {
        heading: "Unless ve Arkadaşları",
        body: "Unless 'if not' demektir: 'Unless you hurry' = 'If you don't hurry'. Unless'ten sonra cümle olumlu kurulur, çifte olumsuz yapma. As long as ve provided that ise 'şartıyla, sürece' anlamı taşır ve first conditional mantığıyla çalışır. Bu bağlaçlar MÜYYES tarzı sınavların vazgeçilmezidir.",
        examples: [
          { en: "Unless you study, you will fail.", tr: "Çalışmazsan kalırsın." },
          { en: "You can borrow my car as long as you drive carefully.", tr: "Dikkatli sürdüğün sürece arabamı ödünç alabilirsin." }
        ]
      }
    ],
    tips: [
      "If'li tarafta asla will olmaz: 'if it will rain' seçeneğini anında ele.",
      "If + past perfect gördüysen cevapta would have + V3 ara.",
      "Wish'ten sonra bir adım geriye git: şimdiki durum için past, geçmiş için past perfect.",
      "Unless zaten olumsuzdur, yanına bir don't daha ekleyen seçenek yanlıştır.",
      "'If I were you' kalıbı tavsiyedir ve were ile yazılır, was'lı halini sınavda tercih etme."
    ],
    exercises: [
      {
        id: "conditionals-e1",
        prompt: "If you heat ice, it ___.",
        options: ["melts", "will melts", "melted", "would melt"],
        answer: 0,
        explain: "Genel gerçekler zero conditional ile, iki tarafta da present simple ile verilir."
      },
      {
        id: "conditionals-e2",
        prompt: "If it rains tomorrow, we ___ the picnic.",
        options: ["cancel", "will cancel", "would cancel", "cancelled"],
        answer: 1,
        explain: "First conditional ana cümlesinde will kullanılır."
      },
      {
        id: "conditionals-e3",
        prompt: "If I ___ rich, I would travel the world.",
        options: ["am", "will be", "were", "had been"],
        answer: 2,
        explain: "Second conditional if tarafında past (were) ister."
      },
      {
        id: "conditionals-e4",
        prompt: "If she had studied harder, she ___ the exam.",
        options: ["would pass", "will pass", "passed", "would have passed"],
        answer: 3,
        explain: "If + past perfect gördüğünde would have + V3 ara."
      },
      {
        id: "conditionals-e5",
        prompt: "I wish I ___ a bit taller.",
        options: ["were", "am", "will be", "would be"],
        answer: 0,
        explain: "Şimdiki duruma keşke demek için wish + past kullanılır."
      },
      {
        id: "conditionals-e6",
        prompt: "What would you do if you ___ a ghost?",
        options: ["see", "will see", "had seen", "saw"],
        answer: 3,
        explain: "Would'lu ana cümle second conditional işaretidir, if tarafı past olur."
      },
      {
        id: "conditionals-e7",
        prompt: "You'll miss the bus ___ you leave right now.",
        options: ["if", "unless", "when", "provided"],
        answer: 1,
        explain: "Unless 'if not' demektir: hemen çıkmazsan kaçırırsın."
      },
      {
        id: "conditionals-e8",
        prompt: "If I ___ about the party, I would have come.",
        options: ["knew", "know", "had known", "have known"],
        answer: 2,
        explain: "Geçmişteki hayali durum if + had + V3 ile kurulur."
      },
      {
        id: "conditionals-e9",
        prompt: "I wish you ___ making that noise! I can't focus.",
        options: ["stop", "stopped", "would stop", "will stop"],
        answer: 2,
        explain: "Başkasının davranışından şikayet wish + would ile yapılır."
      },
      {
        id: "conditionals-e10",
        prompt: "If only I ___ listened to your advice back then.",
        options: ["have", "would have", "had", "was"],
        answer: 2,
        explain: "Geçmişe dönük pişmanlık if only + past perfect ister."
      },
      {
        id: "conditionals-e11",
        prompt: "___ you study regularly, you will pass the exam easily.",
        options: ["Unless", "As long as", "If only", "Wish"],
        answer: 1,
        explain: "Şart anlamını (çalıştığın sürece) as long as verir."
      },
      {
        id: "conditionals-e12",
        prompt: "If he hadn't missed the train, he ___ on time.",
        options: ["would arrive", "arrived", "will arrive", "would have arrived"],
        answer: 3,
        explain: "Third conditional ana cümlesi would have + V3 olur."
      },
      {
        id: "conditionals-e13",
        prompt: "I wish I ___ speak French fluently.",
        options: ["could", "can", "will", "would"],
        answer: 0,
        explain: "Şimdiki yetenek dileği wish + could ile kurulur."
      },
      {
        id: "conditionals-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "If I would have money, I would buy it.",
          "If I had known, I would tell you.",
          "Unless you don't hurry, you will be late.",
          "If I were you, I would apologize immediately."
        ],
        answer: 3,
        explain: "If I were you doğru kalıptır; if tarafında would, unless yanında don't olmaz."
      }
    ]
  },
  {
    id: "passive",
    title: "Passive Voice",
    titleTr: "Edilgen Çatı",
    emoji: "🔄",
    level: 2,
    summary: "Faili değil eylemi öne çıkaran yapı: be + V3 formülüyle her zamanı edilgene çevir.",
    sections: [
      {
        heading: "Edilgen Çatı Ne Zaman Sahneye Çıkar?",
        body: "İşi yapan değil de işin kendisi önemliyse edilgen kullanılır. Faili bilmiyorsak, söylemek istemiyorsak ya da fail çok barizse edilgen tam isabet. Formül her zaman aynı: be + V3. Zamanı taşıyan be fiilidir, ana fiil hep üçüncü halde bekler.",
        examples: [
          { en: "My bike was stolen last night.", tr: "Bisikletim dün gece çalındı." },
          { en: "Rice is grown in China.", tr: "Çin'de pirinç yetiştirilir." }
        ]
      },
      {
        heading: "Zamanlara Göre Edilgen: be'yi Çevir, Gerisi Aynı",
        body: "Edilgende zaman değiştirmek aslında be fiilini çevirmekten ibaret: is cleaned, was cleaned, is being cleaned, was being cleaned, has been cleaned, will be cleaned. Türk öğrencilerin klasik hatası being ile been'i karıştırmak: continuous'ta being, perfect'te been kullanılır. V3 kısmına kimse dokunamaz.",
        examples: [
          { en: "The office is cleaned every day.", tr: "Ofis her gün temizlenir." },
          { en: "The office is being cleaned right now.", tr: "Ofis şu anda temizleniyor." },
          { en: "The office has just been cleaned.", tr: "Ofis az önce temizlendi." }
        ]
      },
      {
        heading: "By ile Faili Eklemek",
        body: "Faili söylemek istersen cümlenin sonuna by ile eklersin: 'This novel was written by Orhan Pamuk'. Ama önemliyse ekle, değilse İngilizce faili atmayı sever. 'By people' gibi bariz failleri yazan seçenekler genelde kötü seçeneklerdir. With ise araç bildirir: 'The door was opened with a key'.",
        examples: [
          { en: "This song was written by a famous composer.", tr: "Bu şarkı ünlü bir besteci tarafından yazıldı." },
          { en: "The window was broken with a hammer.", tr: "Cam bir çekiçle kırıldı." }
        ]
      },
      {
        heading: "Modallar ve Sorularda Edilgen",
        body: "Modal + be + V3 kalıbı çok işlek: 'The report must be finished', 'This medicine should be taken twice a day'. Soru yaparken be fiili öznenin önüne geçer: 'When was the bridge built?'. Bir cümlede özne eylemi kendisi yapamıyorsa (rapor kendini bitiremez) edilgen aranıyor demektir, bu mantık kontrolü seni çok kurtarır.",
        examples: [
          { en: "The homework must be handed in by Monday.", tr: "Ödev pazartesiye kadar teslim edilmeli." },
          { en: "When was this photo taken?", tr: "Bu fotoğraf ne zaman çekildi?" },
          { en: "English is spoken in many countries.", tr: "İngilizce birçok ülkede konuşulur." }
        ]
      }
    ],
    tips: [
      "Edilgen formülü be + V3: önce doğru be halini, sonra üçüncü hali kontrol et.",
      "Özne eylemi kendisi yapamıyorsa (köprü kendini inşa edemez) edilgen ara.",
      "Continuous edilgende being, perfect edilgende been kullanılır, karıştırma.",
      "Yesterday, in 1990 gibi ifadelerle was/were + V3 eşleşir.",
      "Fail araçsa by değil with kullanılır: with a key, with a hammer."
    ],
    exercises: [
      {
        id: "passive-e1",
        prompt: "English ___ all over the world.",
        options: ["speaks", "is spoken", "is speaking", "spoke"],
        answer: 1,
        explain: "Genel gerçek edilgeni is/are + V3 ile kurulur."
      },
      {
        id: "passive-e2",
        prompt: "This bridge ___ in 1973.",
        options: ["built", "was building", "was built", "is built"],
        answer: 2,
        explain: "Geçmiş tarih was/were + V3 ister."
      },
      {
        id: "passive-e3",
        prompt: "The letters ___ every morning at nine.",
        options: ["are delivered", "deliver", "are delivering", "delivered"],
        answer: 0,
        explain: "Mektup kendini dağıtamaz, geniş zaman edilgeni gerekir."
      },
      {
        id: "passive-e4",
        prompt: "My car ___ at the moment, so I'm taking the bus.",
        options: ["is repairing", "repairs", "is being repaired", "has repaired"],
        answer: 2,
        explain: "Şu an süren edilgen is being + V3 ile kurulur."
      },
      {
        id: "passive-e5",
        prompt: "The homework must ___ by Friday.",
        options: ["finish", "be finished", "finished", "to finish"],
        answer: 1,
        explain: "Modal edilgeni modal + be + V3 kalıbıdır."
      },
      {
        id: "passive-e6",
        prompt: "The Mona Lisa ___ by Leonardo da Vinci.",
        options: ["painted", "is painted", "has painted", "was painted"],
        answer: 3,
        explain: "Geçmişte tamamlanmış eser was painted olur, by fail bildirir."
      },
      {
        id: "passive-e7",
        prompt: "The meeting room ___ yet.",
        options: ["hasn't cleaned", "didn't clean", "hasn't been cleaned", "isn't cleaning"],
        answer: 2,
        explain: "Yet ile present perfect edilgeni hasn't been + V3 gerekir."
      },
      {
        id: "passive-e8",
        prompt: "A new hospital ___ in our neighbourhood next year.",
        options: ["will build", "will be built", "builds", "is building"],
        answer: 1,
        explain: "Gelecek edilgeni will be + V3 ile kurulur."
      },
      {
        id: "passive-e9",
        prompt: "When ___ the telephone ___?",
        options: ["was / invented", "did / invented", "was / invent", "is / invented"],
        answer: 0,
        explain: "Edilgen geçmiş soru was + özne + V3 düzeniyle kurulur."
      },
      {
        id: "passive-e10",
        prompt: "The thief ___ by the police last night.",
        options: ["caught", "has caught", "is caught", "was caught"],
        answer: 3,
        explain: "Last night ile edilgen was caught olur."
      },
      {
        id: "passive-e11",
        prompt: "Dinner ___ when the guests arrived.",
        options: ["was preparing", "prepared", "was being prepared", "has been prepared"],
        answer: 2,
        explain: "Geçmişte süren edilgen was being + V3 ile anlatılır."
      },
      {
        id: "passive-e12",
        prompt: "These shoes ___ in Italy from real leather.",
        options: ["were made", "made", "were making", "have made"],
        answer: 0,
        explain: "Ayakkabı kendini yapamaz, edilgen were made gerekir."
      },
      {
        id: "passive-e13",
        prompt: "The exam results ___ on the university website tomorrow.",
        options: ["will announce", "will be announcing", "will have announced", "will be announced"],
        answer: 3,
        explain: "Sonuçlar açıklanır, gelecek edilgeni will be + V3 olur."
      },
      {
        id: "passive-e14",
        prompt: "Choose the correct sentence.",
        options: [
          "The cake was ate by the children.",
          "The report has been written by the manager.",
          "The window broken by the wind.",
          "The book was wrote in 1990."
        ],
        answer: 1,
        explain: "Edilgen be + V3 ister: has been written doğrudur, ate ve wrote V3 değildir."
      }
    ]
  }
];
