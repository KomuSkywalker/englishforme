import type { ListeningTrack } from "./types";

export const listeningTracks: ListeningTrack[] = [
  {
    id: "l1",
    title: "First Day at the Library",
    topicTr: "Kampüs Yaşamı",
    script: "A: Excuse me, is this the main library? I am a first-year student and I am completely lost.\nB: Yes, it is. Welcome. Do you have your student card with you?\nA: I do, but I have not activated it yet.\nB: No problem. You can activate it at the front desk in about two minutes. Once it is active, you can borrow up to six books for three weeks.\nA: That sounds great. Can I also study here at night? My dormitory is really noisy.\nB: The main hall closes at ten, but the study room on the second floor stays open twenty-four hours during exam weeks.\nA: Perfect. One last question. I heard there is a fine when books come back late.\nB: That is true. It is five lira per day for each book, so set a reminder on your phone.\nA: Thank you so much, you saved my day.\nB: Any time. Good luck with your first semester.",
    questions: [
      {
        id: "l1-q1",
        prompt: "What is speaker A mainly doing?",
        options: [
          "Complaining about a lost book.",
          "Getting information about the library as a new student.",
          "Applying for a job at the front desk.",
          "Returning books that are late."
        ],
        answer: 1,
        explain: "A, kütüphaneyi ilk kez kullanan yeni bir öğrenci olarak bilgi alıyor."
      },
      {
        id: "l1-q2",
        prompt: "How many books can a student borrow, and for how long?",
        options: [
          "Three books for six weeks.",
          "Six books for six weeks.",
          "Three books for three weeks.",
          "Six books for three weeks."
        ],
        answer: 3,
        explain: "Görevli altı kitabın üç haftalığına ödünç alınabileceğini söylüyor."
      },
      {
        id: "l1-q3",
        prompt: "What stays open twenty-four hours during exam weeks?",
        options: [
          "The study room on the second floor.",
          "The main hall.",
          "The front desk.",
          "The dormitory kitchen."
        ],
        answer: 0,
        explain: "Sınav haftalarında ikinci kattaki çalışma odası tüm gece açık kalıyor."
      },
      {
        id: "l1-q4",
        prompt: "What is the fine for a late book?",
        options: [
          "Five lira per week.",
          "Ten lira per day.",
          "Five lira per day for each book.",
          "There is no fine."
        ],
        answer: 2,
        explain: "Gecikme cezası kitap başına günde beş lira."
      }
    ]
  },
  {
    id: "l2",
    title: "A Problem with the Order",
    topicTr: "Günlük Yaşam",
    script: "A: Excuse me, sorry to bother you, but I think there is a mistake with my order.\nB: Oh, I am sorry to hear that. What seems to be the problem?\nA: I ordered a vegetarian sandwich, but this one has chicken in it, and I do not eat meat.\nB: You are completely right, that is our mistake. I will bring you a fresh vegetarian sandwich right away.\nA: Thank you. Also, my friend asked for her coffee with cold milk, but it came with hot milk.\nB: I apologize again. It has been a very busy morning, but that is no excuse. I will replace the coffee as well, and your desserts today are free.\nA: Oh, that is very kind, but it is really not necessary.\nB: We insist. The new sandwich usually takes about ten minutes. Is that all right?\nA: Ten minutes is fine, we are not in a hurry. Thank you for handling it so nicely.\nB: Thank you for your patience. I will be right back with the coffee.",
    questions: [
      {
        id: "l2-q1",
        prompt: "What is the conversation mainly about?",
        options: [
          "Reserving a table for a birthday dinner.",
          "Asking for the recipe of a sandwich.",
          "Politely solving a mistake with an order.",
          "Applying for a job as a waiter."
        ],
        answer: 2,
        explain: "Müşteri yanlış gelen siparişi kibarca düzelttiriyor."
      },
      {
        id: "l2-q2",
        prompt: "What was wrong with the sandwich?",
        options: [
          "It contained chicken although a vegetarian sandwich was ordered.",
          "It was cold when it arrived.",
          "It was too small for the price.",
          "It had no bread."
        ],
        answer: 0,
        explain: "Vejetaryen sandviç yerine tavuklu sandviç gelmiş."
      },
      {
        id: "l2-q3",
        prompt: "What does the waiter offer for free?",
        options: ["The coffee.", "The sandwiches.", "The whole meal.", "The desserts."],
        answer: 3,
        explain: "Görevli özür olarak tatlıları ikram ediyor."
      },
      {
        id: "l2-q4",
        prompt: "How long will the new sandwich take?",
        options: [
          "About two minutes.",
          "About ten minutes.",
          "About half an hour.",
          "Until the evening."
        ],
        answer: 1,
        explain: "Yeni sandviçin yaklaşık on dakikada geleceği söyleniyor."
      }
    ]
  },
  {
    id: "l3",
    title: "Why Your Brain Needs Sleep",
    topicTr: "Bilim",
    script: "Good morning, everyone. Today I want to talk about something you probably did not get enough of last night: sleep. Many students believe sleep is wasted time, but your brain is extremely busy while you rest. During deep sleep, the brain moves new information from short-term storage into long-term memory. In other words, the studying you did during the day is actually completed at night. Sleep also works as a cleaning service. While you sleep, the brain washes out waste chemicals that build up during the day, and researchers believe this process protects us from serious diseases later in life. So how much sleep do you need? For young adults, the healthy range is seven to nine hours. Sleeping less than six hours for several nights in a row lowers your attention and memory almost as much as staying awake for two full days. Before our next class, try a simple experiment: put your phone away one hour before bed, and notice how you feel in the morning.",
    questions: [
      {
        id: "l3-q1",
        prompt: "What is the main purpose of the talk?",
        options: [
          "To explain why sleep is essential for the brain.",
          "To sell a new alarm clock application.",
          "To describe the history of sleep research.",
          "To compare dreams in different cultures."
        ],
        answer: 0,
        explain: "Konuşmacı uykunun beyin için neden gerekli olduğunu anlatıyor."
      },
      {
        id: "l3-q2",
        prompt: "According to the speaker, what happens during deep sleep?",
        options: [
          "The brain stops working completely.",
          "Short-term memory is erased forever.",
          "New information moves into long-term memory.",
          "The body produces extra waste chemicals."
        ],
        answer: 2,
        explain: "Derin uykuda bilgiler uzun süreli hafızaya taşınır."
      },
      {
        id: "l3-q3",
        prompt: "How much sleep does the speaker recommend for young adults?",
        options: [
          "Five to six hours.",
          "Seven to nine hours.",
          "Exactly eight hours.",
          "Ten to twelve hours."
        ],
        answer: 1,
        explain: "Genç yetişkinler için sağlıklı aralık yedi ila dokuz saattir."
      },
      {
        id: "l3-q4",
        prompt: "What experiment does the speaker suggest?",
        options: [
          "Studying all night before an exam.",
          "Drinking coffee before going to bed.",
          "Sleeping during the afternoon lecture.",
          "Putting the phone away one hour before bed."
        ],
        answer: 3,
        explain: "Konuşmacı yatmadan bir saat önce telefonu bırakmayı öneriyor."
      }
    ]
  },
  {
    id: "l4",
    title: "The Animal That Never Grows Up",
    topicTr: "Doğa",
    script: "Welcome back to Wild Wonders, the podcast about nature's strangest creatures. Today's star is the axolotl, a smiling salamander from the lakes of Mexico. Most salamanders start life in the water, then grow up, lose their gills, and move onto land. The axolotl simply refuses. It keeps its feathery gills and its underwater lifestyle for its whole life, like a child who never becomes an adult. But its real superpower is repair. If an axolotl loses a leg, it grows a complete new one, with bones, muscles, and nerves, in a few months. It can even repair parts of its heart and brain. Scientists study these animals closely, hoping to learn tricks for healing human injuries. Sadly, the axolotl is now critically endangered in the wild. Its home lakes near Mexico City have mostly been drained or polluted, and fewer than one thousand may remain in nature, although millions live happily in laboratories and aquariums around the world.",
    questions: [
      {
        id: "l4-q1",
        prompt: "What is the podcast mainly about?",
        options: [
          "How to keep an axolotl as a pet at home.",
          "The pollution of lakes in Mexico City.",
          "The life cycle of ordinary salamanders.",
          "An unusual salamander and its surprising abilities."
        ],
        answer: 3,
        explain: "Bölüm aksolotlun sıra dışı özelliklerini tanıtıyor."
      },
      {
        id: "l4-q2",
        prompt: "How is the axolotl different from most salamanders?",
        options: [
          "It lives in salt water.",
          "It keeps its gills and stays in the water all its life.",
          "It loses its legs as it grows.",
          "It cannot swim."
        ],
        answer: 1,
        explain: "Aksolotl erginleşmeyip solungaçlarıyla suda yaşamaya devam eder."
      },
      {
        id: "l4-q3",
        prompt: "What is described as the axolotl's real superpower?",
        options: [
          "Growing back lost body parts, even organs.",
          "Changing its color at night.",
          "Living without food for a year.",
          "Producing light in dark water."
        ],
        answer: 0,
        explain: "Aksolotl kopan uzuvlarını ve bazı organlarını yeniden büyütebilir."
      },
      {
        id: "l4-q4",
        prompt: "What is the situation of axolotls in the wild?",
        options: [
          "Their population is growing quickly.",
          "They have moved to new lakes in the north.",
          "They are critically endangered because their lakes are damaged.",
          "They are protected inside large national parks."
        ],
        answer: 2,
        explain: "Doğadaki aksolotller göllerin bozulması yüzünden kritik tehlike altında."
      }
    ]
  },
  {
    id: "l5",
    title: "The Missing Suitcase",
    topicTr: "Seyahat",
    script: "A: Excuse me, I have just arrived on flight TK one seven two from London, but my suitcase never appeared.\nB: I am sorry about that. Can I see your baggage tag and your passport, please?\nA: Here you are. It is a large red suitcase with a yellow ribbon on the handle.\nB: Thank you. Let me check the system. Ah, I see the problem. Your suitcase missed the connection in Vienna, so it is still there.\nA: Oh no. I have a wedding tomorrow evening and my suit is inside.\nB: I understand. The good news is that it will arrive on the first flight tomorrow morning, and we will deliver it to your hotel before noon.\nA: Before noon? The wedding starts at seven in the evening, so that should be fine.\nB: We will also give you a small bag with basic items for tonight, and if you keep your receipts, we can pay you back for urgent purchases.\nA: That is really helpful. Thank you very much.",
    questions: [
      {
        id: "l5-q1",
        prompt: "Why is the passenger talking to the airline employee?",
        options: [
          "Her flight to London was cancelled.",
          "Her suitcase did not arrive with her flight.",
          "She lost her passport at the airport.",
          "She wants to change her seat."
        ],
        answer: 1,
        explain: "Yolcunun bavulu uçuşla birlikte gelmemiş."
      },
      {
        id: "l5-q2",
        prompt: "Where is the suitcase now?",
        options: [
          "In Vienna, where it missed the connection.",
          "On the carousel in London.",
          "At the passenger's hotel.",
          "Nobody knows where it is."
        ],
        answer: 0,
        explain: "Bavul aktarma sırasında Viyana'da kalmış."
      },
      {
        id: "l5-q3",
        prompt: "Why is the passenger especially worried?",
        options: [
          "Her medicine is inside the suitcase.",
          "The suitcase contains her laptop.",
          "Her suit for a wedding tomorrow evening is inside.",
          "She has no money for new clothes."
        ],
        answer: 2,
        explain: "Yarın akşamki düğün için gereken kıyafeti bavulda."
      },
      {
        id: "l5-q4",
        prompt: "What does the employee promise?",
        options: [
          "A free ticket for the next flight.",
          "To pay for a new suit immediately.",
          "To send the suitcase back to London.",
          "To deliver the suitcase to her hotel before noon tomorrow."
        ],
        answer: 3,
        explain: "Bavulun yarın öğleden önce otele teslim edileceği söz veriliyor."
      }
    ]
  },
  {
    id: "l6",
    title: "Your Phone and Your Attention",
    topicTr: "Teknoloji",
    script: "Have you ever picked up your phone to check the time and found yourself, twenty minutes later, watching a video about a cat that plays the piano? You are not alone. Studies suggest that the average person touches their phone more than two thousand six hundred times a day and checks it about once every ten minutes while awake. Here is the interesting part: the problem is not only the time we lose. Researchers at a university in Texas found that a phone lying face down on the desk, even when it is switched off, quietly reduces our ability to concentrate, because part of the brain is still waiting for it. The most effective fix is also the simplest one: distance. In the same study, people who left their phones in another room performed clearly better on attention tests than people who kept them nearby. So tonight, try charging your phone in the kitchen instead of next to your bed. Your sleep, and tomorrow's homework, will thank you.",
    questions: [
      {
        id: "l6-q1",
        prompt: "What is the talk mainly about?",
        options: [
          "The history of the mobile phone.",
          "The best applications for studying.",
          "How phones weaken attention and a simple way to fix it.",
          "Why cat videos are popular online."
        ],
        answer: 2,
        explain: "Konuşma telefonların dikkati nasıl zayıflattığını ve basit çözümü anlatıyor."
      },
      {
        id: "l6-q2",
        prompt: "What did the researchers in Texas discover?",
        options: [
          "Phones improve concentration when switched off.",
          "People check their phones only at night.",
          "Face-down phones use less battery.",
          "Even a switched-off phone on the desk reduces concentration."
        ],
        answer: 3,
        explain: "Kapalı bile olsa masadaki telefon odaklanmayı azaltıyor."
      },
      {
        id: "l6-q3",
        prompt: "According to the speaker, what is the most effective solution?",
        options: [
          "Buying a smaller phone.",
          "Keeping the phone physically far away, in another room.",
          "Turning the screen light down.",
          "Deleting all social media accounts."
        ],
        answer: 1,
        explain: "En etkili çözüm telefonu başka bir odada tutmak, yani mesafe."
      },
      {
        id: "l6-q4",
        prompt: "How many times does the average person touch their phone daily?",
        options: [
          "More than two thousand six hundred times.",
          "About two hundred times.",
          "Exactly one thousand times.",
          "Fewer than one hundred times."
        ],
        answer: 0,
        explain: "Ortalama kişi telefonuna günde iki bin altı yüzden fazla kez dokunuyor."
      }
    ]
  },
  {
    id: "l7",
    title: "Planning a Study Group",
    topicTr: "Kampüs Yaşamı",
    script: "A: Hey, did you see the announcement? The proficiency exam is in three weeks.\nB: I know, I am starting to panic. My reading is fine, but my listening is a disaster.\nA: Same here, but the opposite. Why do we not study together? We could meet in the library.\nB: Good idea. I am free on Tuesday and Thursday afternoons after two o'clock.\nA: Tuesday works, but on Thursday I have a part-time job at the bookstore until six.\nB: Then let us say Tuesday at two and Saturday morning at ten. Two sessions a week should be enough.\nA: Perfect. For listening, my teacher recommends podcasts. You listen once for the general idea, then again for the details.\nB: That sounds doable. And you can time my reading passages, so I stop translating every single word.\nA: Deal. I will book a group room online and send you the confirmation tonight.\nB: Great, see you on Tuesday. And please bring coffee, or I will fall asleep at the table.",
    questions: [
      {
        id: "l7-q1",
        prompt: "What are the two students mainly doing?",
        options: [
          "Planning to study together for the proficiency exam.",
          "Complaining about their part-time jobs.",
          "Choosing courses for the new semester.",
          "Organizing a birthday party in the library."
        ],
        answer: 0,
        explain: "İki öğrenci yeterlik sınavına birlikte çalışmayı planlıyor."
      },
      {
        id: "l7-q2",
        prompt: "Which skill does speaker B call a disaster?",
        options: ["Reading.", "Writing.", "Listening.", "Grammar."],
        answer: 2,
        explain: "B, dinleme becerisinin felaket olduğunu söylüyor."
      },
      {
        id: "l7-q3",
        prompt: "Why can speaker A not meet on Thursday?",
        options: [
          "A has a doctor's appointment.",
          "A works part-time at a bookstore until six.",
          "A goes home on Thursdays.",
          "The library is closed on Thursdays."
        ],
        answer: 1,
        explain: "A perşembe günleri altıya kadar kitapçıda çalışıyor."
      },
      {
        id: "l7-q4",
        prompt: "When will the students meet?",
        options: [
          "Every weekday at noon.",
          "Thursday at two and Sunday at ten.",
          "Only on Saturday evenings.",
          "Tuesday at two and Saturday at ten."
        ],
        answer: 3,
        explain: "Salı saat ikide ve cumartesi onda buluşacaklar."
      }
    ]
  },
  {
    id: "l8",
    title: "The Island of Long Lives",
    topicTr: "Sağlık",
    script: "Imagine a place where reaching one hundred years of age is almost ordinary. Welcome to Okinawa, a group of Japanese islands with some of the longest-living people on Earth. Scientists have studied the islanders for decades, hoping to find their secret, and the answer seems to be a combination of small habits rather than one magic factor. First, food. Traditional Okinawans eat mostly vegetables, sweet potatoes, and soy, and they follow a rule called hara hachi bu, which means you stop eating when your stomach feels eighty percent full. Second, movement. Instead of going to the gym, elderly islanders garden, walk, and dance nearly every day, often well into their nineties. Third, and perhaps most important, connection. From childhood, each person belongs to a small circle of friends called a moai, which supports its members through the whole of life. Researchers say loneliness can be as harmful as smoking. So the recipe for a long life may be simple: eat lightly, keep moving, and never let go of your friends.",
    questions: [
      {
        id: "l8-q1",
        prompt: "What is the podcast mainly about?",
        options: [
          "Traditional Japanese cooking techniques.",
          "The habits behind the long lives of people in Okinawa.",
          "The best gyms for elderly people.",
          "How to plan a holiday in Japan."
        ],
        answer: 1,
        explain: "Bölüm Okinawalıların uzun yaşamının ardındaki alışkanlıkları anlatıyor."
      },
      {
        id: "l8-q2",
        prompt: "What does the rule hara hachi bu mean?",
        options: [
          "Eat eight small meals every day.",
          "Never eat after eight in the evening.",
          "Share your food with eight friends.",
          "Stop eating when your stomach feels eighty percent full."
        ],
        answer: 3,
        explain: "Kural, mide yüzde seksen dolunca yemeyi bırakmayı söyler."
      },
      {
        id: "l8-q3",
        prompt: "What is a moai?",
        options: [
          "A small circle of friends that supports its members for life.",
          "A traditional vegetable garden.",
          "A dance performed by elderly islanders.",
          "A type of sweet potato."
        ],
        answer: 0,
        explain: "Moai, üyelerini ömür boyu destekleyen küçük bir arkadaş çemberidir."
      },
      {
        id: "l8-q4",
        prompt: "According to researchers, loneliness can be as harmful as what?",
        options: [
          "Eating too much sugar.",
          "Sleeping too little.",
          "Smoking.",
          "Never exercising."
        ],
        answer: 2,
        explain: "Araştırmacılara göre yalnızlık sigara kadar zararlı olabilir."
      }
    ]
  }
];
