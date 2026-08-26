import type { ReadingPassage } from "./types";

export const readingPassages: ReadingPassage[] = [
  {
    id: "r1",
    title: "Why We Procrastinate",
    topicTr: "Psikoloji",
    level: 1,
    text: "Almost everyone has delayed an important task at least once. Students promise themselves they will start studying early, and then find themselves cleaning their rooms or watching videos instead. Scientists who study this behavior say that procrastination is not simply laziness. It is a battle between two parts of the brain.\n\nThe limbic system, an old and powerful region, wants comfort and pleasure right now. The prefrontal cortex, which handles planning, wants long-term rewards such as good grades. When a task feels boring, difficult, or frightening, the limbic system usually wins, and we escape to something more enjoyable. Psychologists call this \"mood repair\": we delay the task because we want to feel better immediately, even though we know we will feel worse later.\n\nResearch offers some practical solutions. One famous method is the \"two-minute rule\": if you tell yourself you will work for only two minutes, starting becomes much less painful, and once you begin, you often continue. Another strategy is breaking a large project into small, clear steps, because vague goals invite delay. Finally, forgiving yourself matters. In one study, students who forgave themselves for procrastinating before an exam delayed less on the next one. In short, procrastination is an emotional problem, and the cure begins with understanding, not guilt.",
    questions: [
      {
        id: "r1-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Lazy students can never learn to manage their time.",
          "The limbic system is the most important part of the brain.",
          "Procrastination is an emotional habit that can be managed with practical methods.",
          "Cleaning your room is a useful way to prepare for studying."
        ],
        answer: 2,
        explain: "Metin ertelemenin tembellik değil, yönetilebilir duygusal bir sorun olduğunu anlatıyor."
      },
      {
        id: "r1-q2",
        prompt: "According to the passage, what does the limbic system want?",
        options: [
          "Comfort and pleasure right now.",
          "Long-term rewards such as good grades.",
          "Careful planning for the future.",
          "Difficult and frightening tasks."
        ],
        answer: 0,
        explain: "İkinci paragrafta limbik sistemin anlık rahatlık ve keyif istediği söyleniyor."
      },
      {
        id: "r1-q3",
        prompt: "What happened to the students who forgave themselves for procrastinating?",
        options: [
          "They failed the next exam.",
          "They stopped studying completely.",
          "They felt guilty for a longer time.",
          "They procrastinated less on the next exam."
        ],
        answer: 3,
        explain: "Çalışmada kendini affeden öğrenciler bir sonraki sınavda daha az ertelemiş."
      },
      {
        id: "r1-q4",
        prompt: "What can be inferred about vague goals?",
        options: [
          "They make projects more enjoyable.",
          "They make people more likely to delay their work.",
          "They are only a problem for university students.",
          "They help the prefrontal cortex win."
        ],
        answer: 1,
        explain: "Metne göre belirsiz hedefler ertelemeye davetiye çıkarır."
      },
      {
        id: "r1-q5",
        prompt: "The word \"vague\" in paragraph 3 is closest in meaning to:",
        options: ["exciting", "detailed", "unclear", "impossible"],
        answer: 2,
        explain: "Vague, açık olmayan yani belirsiz anlamına gelir."
      }
    ],
    glossary: [
      { en: "procrastination", tr: "erteleme" },
      { en: "reward", tr: "ödül" },
      { en: "frightening", tr: "korkutucu" },
      { en: "immediately", tr: "hemen, derhal" },
      { en: "vague", tr: "belirsiz" },
      { en: "guilt", tr: "suçluluk" },
      { en: "forgive", tr: "affetmek" }
    ]
  },
  {
    id: "r2",
    title: "The Journey of Coffee",
    topicTr: "Tarih",
    level: 1,
    text: "According to a popular legend, coffee was discovered in Ethiopia by a goat herder named Kaldi. He noticed that his goats became unusually energetic after eating red berries from a certain bush. Curious, he tried the berries himself and felt the same energy. Whether the story is true or not, historians agree that coffee drinking began in that region and spread to Yemen by the fifteenth century.\n\nFrom Yemen, coffee traveled to the great cities of the Middle East. Coffeehouses opened in Cairo, Damascus, and Istanbul, where people gathered to talk, play chess, and listen to stories. These places became so important for sharing news and ideas that they were sometimes called \"schools of the wise.\" Some rulers even tried to ban coffee, because they feared that people were meeting in coffeehouses to discuss politics.\n\nCoffee reached Europe in the seventeenth century and quickly became fashionable. In London, a coffeehouse was nicknamed a \"penny university\": for the price of one cup, a customer could join conversations with writers, scientists, and merchants. Today coffee is one of the most traded products on the planet, and people drink more than two billion cups every day. A simple red berry from an Ethiopian bush has become a global habit that connects cultures across continents.",
    questions: [
      {
        id: "r2-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Goats discovered coffee and taught humans to drink it.",
          "Coffee spread from Ethiopia across the world and shaped social life.",
          "European rulers invented the first coffeehouses.",
          "Coffee is the most expensive drink in history."
        ],
        answer: 1,
        explain: "Metin kahvenin Etiyopya'dan dünyaya yayılışını ve sosyal etkisini anlatıyor."
      },
      {
        id: "r2-q2",
        prompt: "Why did some rulers try to ban coffee?",
        options: [
          "Because coffee was too expensive to import.",
          "Because coffeehouses played music too loudly.",
          "Because coffee made people sick.",
          "Because they feared people were discussing politics in coffeehouses."
        ],
        answer: 3,
        explain: "İkinci paragrafa göre yöneticiler kahvehanelerdeki siyasi sohbetlerden korkuyordu."
      },
      {
        id: "r2-q3",
        prompt: "What was a \"penny university\"?",
        options: [
          "A London coffeehouse where one cup bought access to interesting conversations.",
          "A cheap school for merchants in Yemen.",
          "A tax that European rulers placed on coffee.",
          "A university course about the history of coffee."
        ],
        answer: 0,
        explain: "Üçüncü paragrafta Londra'daki bir kahvehaneye bu takma adın verildiği anlatılıyor."
      },
      {
        id: "r2-q4",
        prompt: "What can be inferred about early coffeehouses in the Middle East?",
        options: [
          "They served only rich customers.",
          "They were open for a few weeks each year.",
          "They were important social centers, not just places to drink coffee.",
          "They were quieter than libraries."
        ],
        answer: 2,
        explain: "Kahvehanelerin haber ve fikir paylaşım merkezi olması sosyal önemini gösteriyor."
      },
      {
        id: "r2-q5",
        prompt: "The word \"fashionable\" in paragraph 3 is closest in meaning to:",
        options: ["expensive", "popular", "illegal", "traditional"],
        answer: 1,
        explain: "Fashionable burada moda olmuş, yani popüler anlamındadır."
      }
    ],
    glossary: [
      { en: "legend", tr: "efsane" },
      { en: "herder", tr: "çoban" },
      { en: "berry", tr: "küçük sulu meyve" },
      { en: "spread", tr: "yayılmak" },
      { en: "ban", tr: "yasaklamak" },
      { en: "merchant", tr: "tüccar" },
      { en: "nickname", tr: "takma ad vermek" },
      { en: "fashionable", tr: "moda olan, gözde" }
    ]
  },
  {
    id: "r3",
    title: "Video Games and the Brain",
    topicTr: "Bilim",
    level: 1,
    text: "For years, parents and teachers worried that video games would damage young people's minds. Recent research paints a more balanced picture. Playing games is neither purely good nor purely bad for the brain; the effects depend on the type of game and the amount of time spent playing.\n\nAction games, in which players must react quickly to events on the screen, appear to train useful skills. In several experiments, regular players noticed small visual details faster than non-players and switched between tasks more easily. Some surgeons even play these games before operations to keep their hands and eyes sharp. Puzzle and strategy games, on the other hand, exercise planning and problem-solving, skills that support success at school.\n\nHowever, scientists also warn about real risks. Playing late at night steals hours of sleep, and tired brains learn poorly the next day. A small number of players lose control of the habit and begin to ignore friends, meals, and homework; the World Health Organization now recognizes this extreme pattern as a disorder. The practical message of the research is moderation. An hour of play can relax the mind and train attention, but the benefits disappear when the controller never leaves the player's hands. Experts therefore advise families to agree on time limits together instead of simply banning games at home.",
    questions: [
      {
        id: "r3-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Video games can help or harm the brain depending on how they are used.",
          "All video games are dangerous for young people.",
          "Surgeons should play video games every day.",
          "Puzzle games are more popular than action games."
        ],
        answer: 0,
        explain: "Metin oyunların etkisinin türe ve süreye bağlı olduğunu vurguluyor."
      },
      {
        id: "r3-q2",
        prompt: "According to the passage, what did regular action game players do in experiments?",
        options: [
          "They slept better than non-players.",
          "They solved math problems more slowly.",
          "They noticed small visual details faster than non-players.",
          "They forgot the rules of the games quickly."
        ],
        answer: 2,
        explain: "İkinci paragrafta aksiyon oyuncularının görsel detayları daha hızlı fark ettiği belirtiliyor."
      },
      {
        id: "r3-q3",
        prompt: "What does the World Health Organization recognize?",
        options: [
          "Video games as a school subject.",
          "Extreme gaming as a disorder.",
          "Action games as medical training.",
          "Strategy games as a form of exercise."
        ],
        answer: 1,
        explain: "DSÖ kontrolden çıkmış oyun alışkanlığını bir bozukluk olarak tanıyor."
      },
      {
        id: "r3-q4",
        prompt: "What can be inferred from the fact that some surgeons play action games?",
        options: [
          "Surgeons have more free time than other doctors.",
          "Hospitals now require gaming experience.",
          "Action games are designed by medical companies.",
          "Skills trained in games can transfer to real-world tasks."
        ],
        answer: 3,
        explain: "Cerrahların oyun oynaması, oyun becerilerinin gerçek işlere aktarılabildiğini ima ediyor."
      },
      {
        id: "r3-q5",
        prompt: "The word \"moderation\" in paragraph 3 is closest in meaning to:",
        options: ["addiction", "excitement", "balance", "competition"],
        answer: 2,
        explain: "Moderation ölçülü olma, yani denge anlamına gelir."
      }
    ],
    glossary: [
      { en: "damage", tr: "zarar vermek" },
      { en: "react", tr: "tepki vermek" },
      { en: "surgeon", tr: "cerrah" },
      { en: "disorder", tr: "bozukluk, rahatsızlık" },
      { en: "moderation", tr: "ölçülülük" },
      { en: "attention", tr: "dikkat" },
      { en: "benefit", tr: "fayda" }
    ]
  },
  {
    id: "r4",
    title: "The Alien in the Aquarium",
    topicTr: "Biyoloji",
    level: 2,
    text: "If aliens exist on Earth, they may be hiding in the ocean. The octopus separated from the human evolutionary line more than five hundred million years ago, yet it developed a remarkable intelligence along a completely different path. Two-thirds of its five hundred million neurons sit not in its head but in its eight arms, which means each arm can taste, touch, and even make simple decisions on its own.\n\nStories of octopus cleverness are common in laboratories and aquariums. Octopuses can unscrew jars from the inside, recognize individual human faces, and squeeze their soft bodies through openings the size of a coin. One famous individual, Inky, escaped from a national aquarium in New Zealand by sliding across the floor at night and disappearing down a narrow drain pipe that led to the sea. The keepers found only a wet trail the next morning.\n\nWhat fascinates scientists most is what this intelligence suggests about minds in general. Because octopus brains evolved independently from ours, studying them is the closest thing we have to examining an intelligent alien species. If a soft-bodied animal with no bones, a short life, and a distributed brain can learn, play, and solve problems, then intelligence may not be a rare accident of evolution. It may be a solution that nature has discovered more than once.",
    questions: [
      {
        id: "r4-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Octopuses are dangerous animals that should not be kept in aquariums.",
          "Inky was the most intelligent animal ever studied.",
          "Human intelligence developed from octopus intelligence.",
          "Octopus intelligence evolved separately and changes how we think about minds."
        ],
        answer: 3,
        explain: "Metin ahtapot zekasının bağımsız evrimini ve bunun bilime katkısını anlatıyor."
      },
      {
        id: "r4-q2",
        prompt: "Where are most of an octopus's neurons located?",
        options: ["In its head.", "In its eight arms.", "In its heart.", "Along its skin."],
        answer: 1,
        explain: "Nöronların üçte ikisi kollarında bulunuyor."
      },
      {
        id: "r4-q3",
        prompt: "How did Inky escape from the aquarium?",
        options: [
          "Through a narrow drain pipe that led to the sea.",
          "By hiding inside a visitor's bag.",
          "By breaking the glass of its tank.",
          "With the help of another octopus."
        ],
        answer: 0,
        explain: "Inky gece tanktan çıkıp denize giden dar bir borudan kaçtı."
      },
      {
        id: "r4-q4",
        prompt: "Why is studying octopuses especially valuable for scientists?",
        options: [
          "Because octopuses live longer than most mammals.",
          "Because octopus brains are identical to human brains.",
          "Because their minds evolved independently, offering a rare comparison.",
          "Because they are easy to catch and train."
        ],
        answer: 2,
        explain: "Bağımsız evrilen bir zeka, zihni anlamak için eşsiz bir karşılaştırma sunar."
      },
      {
        id: "r4-q5",
        prompt: "The word \"remarkable\" in paragraph 1 is closest in meaning to:",
        options: ["ordinary", "extraordinary", "invisible", "temporary"],
        answer: 1,
        explain: "Remarkable, dikkat çekici yani olağanüstü demektir."
      }
    ],
    glossary: [
      { en: "evolutionary", tr: "evrimsel" },
      { en: "neuron", tr: "sinir hücresi" },
      { en: "remarkable", tr: "olağanüstü, dikkat çekici" },
      { en: "squeeze", tr: "sıkışarak geçmek" },
      { en: "drain", tr: "gider borusu" },
      { en: "fascinate", tr: "büyülemek" },
      { en: "distributed", tr: "dağınık, dağıtılmış" },
      { en: "species", tr: "tür" }
    ]
  },
  {
    id: "r5",
    title: "Inside the Algorithm",
    topicTr: "Teknoloji",
    level: 2,
    text: "Every time you open a social media app, an invisible competition begins. Thousands of posts could appear at the top of your feed, but only a few can win. The winners are chosen by an algorithm, a set of mathematical rules that predicts what will keep you looking at the screen. The algorithm does not ask whether a post is beautiful, true, or important; it mainly asks whether you will stop scrolling.\n\nTo make its predictions, the system studies your behavior in great detail. It records which videos you watch to the end, which photos you enlarge, how long you pause on a post, and whom you message most often. Each action becomes a signal. Posts similar to the ones that held your attention in the past are pushed upward, while everything else quietly sinks. This is why two friends who follow exactly the same accounts can see completely different feeds.\n\nCritics argue that this design has serious side effects. Because content that produces strong emotions keeps people scrolling, anger and fear often travel faster than calm explanation. Users can also become trapped in \"filter bubbles,\" seeing only opinions they already agree with. Defenders reply that algorithms simply give people what they want. Either way, understanding the system is the first step toward using it wisely. When you know the feed is built from your own clicks, every click becomes a small vote.",
    questions: [
      {
        id: "r5-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Social media companies hire editors to choose the best posts.",
          "Algorithms build personal feeds from user behavior, which has important effects.",
          "Filter bubbles are the only reason people use social media.",
          "Two friends always see the same posts if they follow the same accounts."
        ],
        answer: 1,
        explain: "Metin algoritmaların davranıştan kişisel akış ürettiğini ve sonuçlarını anlatıyor."
      },
      {
        id: "r5-q2",
        prompt: "According to the passage, what does the algorithm mainly care about?",
        options: [
          "Whether a post is true and important.",
          "Whether a post is beautiful.",
          "Whether a post was expensive to produce.",
          "Whether the user will keep looking at the screen."
        ],
        answer: 3,
        explain: "Algoritmanın asıl derdi kullanıcının ekranda kalıp kalmayacağıdır."
      },
      {
        id: "r5-q3",
        prompt: "Why can two friends who follow the same accounts see different feeds?",
        options: [
          "Because one of them pays for a premium account.",
          "Because the app changes its rules every day.",
          "Because the feed is built from each person's own behavior signals.",
          "Because algorithms select posts randomly."
        ],
        answer: 2,
        explain: "Akış her kullanıcının kendi davranış sinyallerinden oluşturuluyor."
      },
      {
        id: "r5-q4",
        prompt: "What does the final sentence suggest about users?",
        options: [
          "Their own clicks give them some influence over what they see.",
          "They should stop using social media completely.",
          "They cannot change their feeds in any way.",
          "They should click on every post they see."
        ],
        answer: 0,
        explain: "Her tıklamanın oy sayılması, kullanıcının akışını etkileyebildiğini gösterir."
      },
      {
        id: "r5-q5",
        prompt: "The word \"predicts\" in paragraph 1 is closest in meaning to:",
        options: ["ignores", "records", "prevents", "forecasts"],
        answer: 3,
        explain: "Predict, önceden tahmin etmek anlamına gelir."
      }
    ],
    glossary: [
      { en: "invisible", tr: "görünmez" },
      { en: "predict", tr: "tahmin etmek" },
      { en: "scroll", tr: "ekranı kaydırmak" },
      { en: "signal", tr: "sinyal, işaret" },
      { en: "content", tr: "içerik" },
      { en: "critic", tr: "eleştirmen" },
      { en: "trapped", tr: "kapana kısılmış" },
      { en: "wisely", tr: "akıllıca" }
    ]
  },
  {
    id: "r6",
    title: "The Science of Dreams",
    topicTr: "Psikoloji",
    level: 2,
    text: "You spend about six years of your life dreaming, yet you forget almost all of it. Dreams occur mainly during REM sleep, a stage in which the eyes move rapidly and the brain becomes nearly as active as when you are awake. At the same time, the body's large muscles are switched off, a clever safety system that stops sleepers from acting out their adventures.\n\nWhy do we dream at all? One leading theory says dreams are the brain's overnight filing system. During the day we collect enormous amounts of information, and at night the brain replays experiences, strengthens important memories, and throws away useless details. Students may find this encouraging. In experiments, people who slept after studying remembered the material better than people who stayed awake, and those who dreamed about the task improved most of all.\n\nAnother theory treats dreams as a flight simulator for emotions. Nightmares about being chased or falling may be ancient training programs that prepare us for danger in a safe environment, which could explain why dream content is surprisingly similar across very different cultures. Scientists still cannot read the exact pictures inside a dreaming mind, although modern brain scanners are beginning to guess the general topic of a dream. For now, the theater inside your head remains private. It opens every night, and it never sells tickets.",
    questions: [
      {
        id: "r6-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Nightmares are dangerous for physical health.",
          "Scientists can now watch dreams like films.",
          "Dreams probably help the brain manage memories and emotions.",
          "People in different cultures never have similar dreams."
        ],
        answer: 2,
        explain: "Metin rüyaların hafıza ve duygu işlevlerine hizmet ettiğini savunan kuramları özetliyor."
      },
      {
        id: "r6-q2",
        prompt: "What happens to the body's large muscles during REM sleep?",
        options: [
          "They are switched off.",
          "They become more active than during the day.",
          "They grow stronger.",
          "They move the eyes rapidly."
        ],
        answer: 0,
        explain: "REM sırasında büyük kaslar devre dışı kalır, böylece rüyalar bedenle oynanmaz."
      },
      {
        id: "r6-q3",
        prompt: "In the experiments described, which group improved most?",
        options: [
          "People who stayed awake all night.",
          "People who dreamed about the task.",
          "People who studied in the morning.",
          "People who slept without dreaming."
        ],
        answer: 1,
        explain: "Görev hakkında rüya görenler en çok gelişme gösterdi."
      },
      {
        id: "r6-q4",
        prompt: "What does the similarity of dream content across cultures suggest?",
        options: [
          "All cultures teach children the same stories.",
          "Dreams are copied from television programs.",
          "People secretly share their dreams online.",
          "Common nightmares may come from a shared evolutionary past."
        ],
        answer: 3,
        explain: "Kültürler arası benzerlik, ortak evrimsel bir kökene işaret ediyor."
      },
      {
        id: "r6-q5",
        prompt: "The word \"enormous\" in paragraph 2 is closest in meaning to:",
        options: ["huge", "useless", "secret", "limited"],
        answer: 0,
        explain: "Enormous, çok büyük anlamına gelir."
      }
    ],
    glossary: [
      { en: "rapidly", tr: "hızla" },
      { en: "muscle", tr: "kas" },
      { en: "strengthen", tr: "güçlendirmek" },
      { en: "enormous", tr: "devasa" },
      { en: "nightmare", tr: "kabus" },
      { en: "environment", tr: "ortam" },
      { en: "private", tr: "özel, kişiye ait" }
    ]
  },
  {
    id: "r7",
    title: "How to Actually Remember",
    topicTr: "Eğitim",
    level: 2,
    text: "Most students study in exactly the wrong way. They read a chapter, highlight sentences in bright colors, and then read everything again the night before the exam. Research in cognitive psychology shows that these popular habits create a feeling of learning without much real learning. The text starts to look familiar, and the brain confuses familiarity with knowledge.\n\nWhat actually works is surprisingly uncomfortable. The most powerful technique is retrieval practice: closing the book and forcing yourself to remember. Every time you pull a fact out of memory, the path to that fact becomes stronger, like a trail through a forest that grows clearer each time someone walks it. In one study, students who tested themselves remembered about fifty percent more a week later than students who simply reread the material.\n\nA second proven method is spacing. Ten hours of study spread across two weeks produces far better results than the same ten hours squeezed into the night before an exam, because each small forgetting forces the brain to rebuild the memory. Sleep matters too, since memories are strengthened overnight. The general rule is simple: easy studying is usually a warning sign, and a little difficulty usually means the method is working. Effective learning should feel like exercise at the gym, not like watching television on the sofa.",
    questions: [
      {
        id: "r7-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Popular study habits feel effective, but testing yourself and spacing work better.",
          "Students should highlight more sentences in their books.",
          "Rereading is the fastest way to learn new material.",
          "Sleep has no connection to learning."
        ],
        answer: 0,
        explain: "Metin, alışılmış yöntemlerin aldatıcı olduğunu, geri çağırma ve aralıklı çalışmanın işe yaradığını anlatıyor."
      },
      {
        id: "r7-q2",
        prompt: "In the study mentioned, what did the self-testing students achieve?",
        options: [
          "They finished the course a week early.",
          "They read twice as many chapters.",
          "They remembered about fifty percent more a week later.",
          "They got tired more quickly than other students."
        ],
        answer: 2,
        explain: "Kendini test edenler bir hafta sonra yaklaşık yüzde elli daha fazla hatırladı."
      },
      {
        id: "r7-q3",
        prompt: "Why does spacing study sessions work so well?",
        options: [
          "Because students enjoy short lessons more.",
          "Because teachers can give more homework.",
          "Because it leaves more time for television.",
          "Because each small forgetting forces the brain to rebuild the memory."
        ],
        answer: 3,
        explain: "Aralıklarda yaşanan küçük unutmalar beyni hafızayı yeniden kurmaya zorlar."
      },
      {
        id: "r7-q4",
        prompt: "According to the passage, what does easy studying probably mean?",
        options: [
          "The student has finally mastered the subject.",
          "The method may not be producing real learning.",
          "The exam will also be easy.",
          "The student should study less."
        ],
        answer: 1,
        explain: "Kolaylık hissi genellikle gerçek öğrenme olmadığının uyarı işaretidir."
      },
      {
        id: "r7-q5",
        prompt: "The word \"retrieval\" in paragraph 2 is closest in meaning to:",
        options: ["copying", "forgetting", "recalling", "repeating"],
        answer: 2,
        explain: "Retrieval, bilgiyi hafızadan geri çağırma demektir."
      }
    ],
    glossary: [
      { en: "highlight", tr: "işaretlemek, vurgulamak" },
      { en: "cognitive", tr: "bilişsel" },
      { en: "familiarity", tr: "aşinalık" },
      { en: "retrieval", tr: "geri çağırma" },
      { en: "trail", tr: "patika" },
      { en: "spacing", tr: "aralıklı çalışma" },
      { en: "rebuild", tr: "yeniden kurmak" },
      { en: "effective", tr: "etkili" }
    ]
  },
  {
    id: "r8",
    title: "Why Cities Are Getting Hotter",
    topicTr: "Çevre",
    level: 3,
    text: "On a summer night, the center of a large city can be as much as seven degrees warmer than the surrounding countryside. Scientists call this phenomenon the urban heat island effect, and it is becoming one of the most serious challenges of modern city life. As global temperatures rise, many cities are warming roughly twice as fast as the planet as a whole.\n\nThe causes are built into the city itself. Asphalt roads and dark rooftops absorb solar energy all day and release it slowly after dark, preventing the air from cooling down. Tall buildings block the wind and trap warm air in narrow street canyons. Meanwhile, the trees and wet soil that would normally cool the air through the evaporation of water have been replaced by concrete. Even the heat produced by cars, air conditioners, and millions of human bodies makes a measurable contribution.\n\nThe consequences are unequal. Heat waves kill more people than floods or storms in many countries, and the victims are usually elderly residents of the poorest and least green neighborhoods. Fortunately, solutions exist, and some are surprisingly simple. Los Angeles has painted streets with reflective coatings, Paris has opened \"cool islands\" of parks and fountains, and Singapore covers new buildings with plants. Studies suggest that raising a neighborhood's tree cover to about thirty percent can lower local temperatures by several degrees, turning the city's own design into a cure.",
    questions: [
      {
        id: "r8-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Modern architecture has solved the problem of hot cities.",
          "City design traps heat, but changes in that design can cool cities down.",
          "Heat waves are less dangerous than floods and storms.",
          "The countryside is warming faster than city centers."
        ],
        answer: 1,
        explain: "Metin kent tasarımının ısıyı hapsettiğini ve çözümün yine tasarımda olduğunu anlatıyor."
      },
      {
        id: "r8-q2",
        prompt: "Why do asphalt roads and dark rooftops keep cities warm at night?",
        options: [
          "They absorb solar energy all day and release it slowly after dark.",
          "They reflect sunlight back into space.",
          "They produce their own electrical heat.",
          "They block the light of the moon."
        ],
        answer: 0,
        explain: "Asfalt ve koyu çatılar gündüz emdikleri ısıyı gece yavaşça salar."
      },
      {
        id: "r8-q3",
        prompt: "According to the passage, who suffers most during heat waves?",
        options: [
          "Tourists visiting city centers.",
          "Office workers in tall buildings.",
          "Elderly residents of poor neighborhoods with few green areas.",
          "Drivers stuck in traffic."
        ],
        answer: 2,
        explain: "Kurbanlar çoğunlukla yoksul, az yeşilli mahallelerdeki yaşlılardır."
      },
      {
        id: "r8-q4",
        prompt: "What can be inferred from the examples of Los Angeles, Paris, and Singapore?",
        options: [
          "Only rich cities can fight the heat island effect.",
          "Painting streets is the single best solution.",
          "The problem will disappear without any human action.",
          "Cities can reduce heat through changes in their own design."
        ],
        answer: 3,
        explain: "Örnekler, şehirlerin tasarım değişiklikleriyle ısıyı azaltabildiğini gösteriyor."
      },
      {
        id: "r8-q5",
        prompt: "The word \"consequences\" in paragraph 3 is closest in meaning to:",
        options: ["causes", "results", "opinions", "questions"],
        answer: 1,
        explain: "Consequence, sonuç anlamına gelir."
      }
    ],
    glossary: [
      { en: "urban", tr: "kentsel" },
      { en: "phenomenon", tr: "olgu" },
      { en: "absorb", tr: "emmek" },
      { en: "evaporation", tr: "buharlaşma" },
      { en: "concrete", tr: "beton" },
      { en: "measurable", tr: "ölçülebilir" },
      { en: "consequence", tr: "sonuç" },
      { en: "reflective", tr: "yansıtıcı" }
    ]
  },
  {
    id: "r9",
    title: "The Psychology of Luck",
    topicTr: "Psikoloji",
    level: 3,
    text: "Are some people simply born lucky? Psychologist Richard Wiseman spent a decade studying hundreds of people who described themselves as exceptionally lucky or unlucky, and his conclusion was provocative: luck is largely a way of behaving, not a gift from the universe. Lucky people, he claims, create their own good fortune through habits that anyone can learn.\n\nIn one famous experiment, Wiseman gave participants a newspaper and asked them to count the photographs inside. Unlucky people took about two minutes. Lucky people took a few seconds, because they noticed a huge message on the second page that said, \"Stop counting, there are forty-three photographs in this newspaper.\" The unlucky participants, focused narrowly on their task, looked straight at the message without seeing it. Anxious, tense people, Wiseman found, develop a kind of tunnel vision that blinds them to unexpected opportunities.\n\nThe good news is that luck responds to training. When Wiseman taught unlucky volunteers to vary their daily routines, act on chance opportunities, and reinterpret bad events by imagining how much worse things could have been, eighty percent reported feeling luckier within a month, and many said they were happier as well. The lottery remains a matter of pure chance, but in careers, friendships, and everyday life, fortune appears to favor the open-minded rather than the merely hopeful.",
    questions: [
      {
        id: "r9-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Lucky people are born with a special gift from the universe.",
          "Winning the lottery is possible with the right training.",
          "Luck mostly comes from learnable habits and an open mind.",
          "Unlucky people should avoid reading newspapers."
        ],
        answer: 2,
        explain: "Wiseman'a göre şans büyük ölçüde öğrenilebilir davranışlardan doğar."
      },
      {
        id: "r9-q2",
        prompt: "In the newspaper experiment, why did lucky people finish so quickly?",
        options: [
          "They had read the same newspaper before.",
          "They were better at mathematics.",
          "They counted only the large photographs.",
          "They noticed the message that gave the answer."
        ],
        answer: 3,
        explain: "Şanslı katılımcılar ikinci sayfadaki cevabı veren mesajı fark etti."
      },
      {
        id: "r9-q3",
        prompt: "What did Wiseman teach the unlucky volunteers?",
        options: [
          "To vary routines, act on chance opportunities, and reinterpret bad events.",
          "To buy more lottery tickets every week.",
          "To count photographs faster.",
          "To avoid anxious people in daily life."
        ],
        answer: 0,
        explain: "Eğitimde rutini değiştirme, fırsatları değerlendirme ve olayları yeniden yorumlama öğretildi."
      },
      {
        id: "r9-q4",
        prompt: "What does the passage suggest about anxiety?",
        options: [
          "It helps people focus on opportunities.",
          "It narrows attention and hides unexpected chances.",
          "It only affects people during experiments.",
          "It makes people luckier in their careers."
        ],
        answer: 1,
        explain: "Kaygı tünel görüşü yaratarak beklenmedik fırsatları görünmez kılar."
      },
      {
        id: "r9-q5",
        prompt: "The word \"provocative\" in paragraph 1 is closest in meaning to:",
        options: ["boring", "obviously false", "easily forgotten", "challenging and surprising"],
        answer: 3,
        explain: "Provocative, yerleşik fikirlere meydan okuyan, şaşırtıcı demektir."
      }
    ],
    glossary: [
      { en: "decade", tr: "on yıl" },
      { en: "exceptionally", tr: "olağanüstü derecede" },
      { en: "provocative", tr: "kışkırtıcı, düşündürücü" },
      { en: "participant", tr: "katılımcı" },
      { en: "anxious", tr: "kaygılı" },
      { en: "opportunity", tr: "fırsat" },
      { en: "reinterpret", tr: "yeniden yorumlamak" },
      { en: "fortune", tr: "talih" }
    ]
  },
  {
    id: "r10",
    title: "An Ocean of Plastic",
    topicTr: "Çevre",
    level: 3,
    text: "Every year, an estimated eight million tons of plastic enter the world's oceans, the equivalent of emptying a garbage truck into the sea every minute. Some of it gathers in vast rotating currents; the largest collection, known as the Great Pacific Garbage Patch, covers an area roughly three times the size of France. Yet the floating bottles and bags that photographs usually show are only the visible edge of the problem.\n\nThe greater danger may be the plastic we cannot see. Sunlight and waves gradually break large items into microplastics, fragments smaller than five millimeters, which have now been found everywhere from Arctic ice to the deepest ocean trench. Fish and shellfish swallow these particles, mistaking them for food, and the plastic travels up the food chain toward human dinner plates. Scientists have detected microplastics in drinking water, in table salt, and even in human blood, although the health effects are still being studied.\n\nCleaning the surface, engineers admit, will never be enough while the flow continues. Researchers estimate that only ten rivers, mostly in Asia and Africa, carry a large share of the plastic that reaches the sea, so stopping waste at its source is far cheaper than collecting it later. Some countries have banned single-use bags, and newly discovered enzymes that digest plastic offer real hope. The ocean, however, keeps its own schedule: a bottle thrown away today may still be drifting four hundred and fifty years from now.",
    questions: [
      {
        id: "r10-q1",
        prompt: "What is the main idea of the passage?",
        options: [
          "Ocean plastic, much of it invisible, is best fought by stopping waste at its source.",
          "The Great Pacific Garbage Patch has already been cleaned.",
          "Fish have learned to avoid eating plastic.",
          "Plastic bottles disappear in the sea within a few years."
        ],
        answer: 0,
        explain: "Metin görünmez mikroplastik tehlikesini ve kaynağında önlemenin önemini anlatıyor."
      },
      {
        id: "r10-q2",
        prompt: "What are microplastics?",
        options: [
          "Bottles that float on the ocean surface.",
          "Fragments of plastic smaller than five millimeters.",
          "A new material invented by engineers.",
          "Chemicals produced by shellfish."
        ],
        answer: 1,
        explain: "Mikroplastikler beş milimetreden küçük plastik parçalarıdır."
      },
      {
        id: "r10-q3",
        prompt: "Why would focusing on certain rivers be an effective strategy?",
        options: [
          "Because rivers are easier to photograph than oceans.",
          "Because ocean cleaning machines cannot float in salt water.",
          "Because fish live mostly in rivers.",
          "Because a small number of rivers carry a large share of the plastic."
        ],
        answer: 3,
        explain: "Az sayıda nehir denize ulaşan plastiğin büyük bölümünü taşıyor."
      },
      {
        id: "r10-q4",
        prompt: "What can be inferred about humans and microplastics?",
        options: [
          "Humans are completely protected from microplastics.",
          "Only people who eat fish are affected.",
          "People are probably already taking microplastics into their bodies.",
          "Scientists have proven that microplastics are harmless."
        ],
        answer: 2,
        explain: "İçme suyunda, tuzda ve kanda bulunmaları insanların mikroplastik aldığını gösteriyor."
      },
      {
        id: "r10-q5",
        prompt: "The word \"vast\" in paragraph 1 is closest in meaning to:",
        options: ["extremely large", "dangerous", "very deep", "rotating"],
        answer: 0,
        explain: "Vast, çok geniş, devasa anlamına gelir."
      }
    ],
    glossary: [
      { en: "estimated", tr: "tahmini" },
      { en: "current", tr: "akıntı" },
      { en: "fragment", tr: "parça" },
      { en: "trench", tr: "derin çukur" },
      { en: "swallow", tr: "yutmak" },
      { en: "detect", tr: "tespit etmek" },
      { en: "single-use", tr: "tek kullanımlık" },
      { en: "drift", tr: "sürüklenmek" }
    ]
  }
];
