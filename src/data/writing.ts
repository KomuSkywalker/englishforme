import type { WritingPrompt } from "./types";

export const writingPrompts: WritingPrompt[] = [
  {
    id: "wr1",
    type: "opinion",
    typeTr: "Görüş Yazısı",
    prompt: "Some people believe that university education should be free for everyone. Do you agree or disagree? Give reasons and examples to support your answer.",
    plan: [
      "Giriş: Yükseköğretim maliyetinin dünya çapında tartışıldığını belirten bir cümleyle aç, tezini net biçimde ver (katılıyorum ya da katılmıyorum).",
      "Gövde 1: Fırsat eşitliği argümanı: ücretsiz eğitim, yetenekli ama dar gelirli öğrencilerin önünü açar; ücretsiz eğitim veren bir ülkeyi örnek göster.",
      "Gövde 2: Topluma geri dönüş argümanı: mezunlar vergi, nitelikli iş gücü ve inovasyonla bu maliyeti fazlasıyla geri öder.",
      "Karşı görüş: bütçeye yük olacağı itirazını tanı, mezun katkı payı veya burs sistemleri gibi çözümlerle çürüt.",
      "Sonuç: Tezini farklı kelimelerle tekrarla, eğitime yatırımın geleceğe yatırım olduğu vurgusuyla kapat."
    ],
    phrases: [
      "In my opinion,",
      "I strongly believe that",
      "One major reason is that",
      "Furthermore,",
      "For instance,",
      "Although some people claim that",
      "The evidence clearly shows that",
      "This would allow students to",
      "To sum up,",
      "For these reasons, I am convinced that"
    ]
  },
  {
    id: "wr2",
    type: "opinion",
    typeTr: "Görüş Yazısı",
    prompt: "Some people argue that children under 16 should not be allowed to use social media. Do you agree or disagree? Support your opinion with reasons and examples.",
    plan: [
      "Giriş: Çocukların ekran başında geçirdiği süreye dair çarpıcı bir gözlemle başla, yaş sınırı konusundaki tezini açıkla.",
      "Gövde 1: Ruh sağlığı boyutu: kıyaslama kültürü ve siber zorbalığın genç zihinler üzerindeki etkisini anlat, bir araştırma bulgusuna değin.",
      "Gövde 2: Zaman ve dikkat boyutu: sosyal medyanın uyku düzenine ve ders başarısına etkisini kendi çevrenden bir örnekle destekle.",
      "Karşı görüş: yasağın denetlenemeyeceği itirazını kabul et, aile gözetimi ve platform doğrulaması ile uygulanabileceğini savun.",
      "Sonuç: Tezini pekiştir, yasakla birlikte bilinçli kullanım eğitiminin de şart olduğunu söyleyerek bitir."
    ],
    phrases: [
      "From my point of view,",
      "It seems clear to me that",
      "The main problem with this is that",
      "Research suggests that",
      "A good example of this is",
      "Some may argue that, yet",
      "What is more,",
      "This is especially true for teenagers because",
      "In conclusion,",
      "Therefore, I firmly believe that"
    ]
  },
  {
    id: "wr3",
    type: "cause-effect",
    typeTr: "Neden ve Sonuç",
    prompt: "In many countries, young people are leaving villages and small towns to live in big cities. What are the main causes of this trend, and what effects does it have on society?",
    plan: [
      "Giriş: Köyden kente göçün küresel bir olgu olduğunu belirt, yazının nedenleri ve sonuçları inceleyeceğini söyle.",
      "Gövde 1 (nedenler): İş ve eğitim fırsatlarının şehirlerde toplanması ile kırsalda sosyal hayatın sınırlı olmasını iki ana neden olarak işle.",
      "Gövde 2 (sonuçlar): Şehirlerde konut sıkışıklığı ve trafik, köylerde ise yaşlanan nüfus ve terk edilen tarım arazileri sonuçlarını anlat.",
      "İsteğe bağlı çözüm cümlesi: kırsala yatırım ve uzaktan çalışmanın bu akışı yavaşlatabileceğine kısaca değin.",
      "Sonuç: Neden ve sonuçları tek cümlede özetle, dengeli kalkınmanın önemini vurgulayarak kapat."
    ],
    phrases: [
      "One of the main causes of this trend is",
      "This is largely due to",
      "Another important factor is that",
      "As a result,",
      "Consequently,",
      "This leads to",
      "The most visible effect is that",
      "In the long term,",
      "To conclude,"
    ]
  },
  {
    id: "wr4",
    type: "cause-effect",
    typeTr: "Neden ve Sonuç",
    prompt: "People today cook at home less often and eat more fast food than in the past. What are the causes of this change, and what effects does it have on health and family life?",
    plan: [
      "Giriş: Sofra alışkanlıklarının son elli yılda kökten değiştiğini belirt, nedenleri ve etkileri ele alacağını söyle.",
      "Gövde 1 (nedenler): Uzun çalışma saatleri, iki ebeveynin de çalışması ve hazır yemeğin ucuz, hızlı, her yerde olması.",
      "Gövde 2 (sağlık etkileri): Obezite, kalp hastalıkları ve aşırı tuz, şeker tüketimindeki artışı somut bir veriyle destekle.",
      "Gövde 3 (aile etkileri): Ortak sofra kültürünün zayıflaması ve çocukların yemek pişirmeyi öğrenmeden büyümesi.",
      "Sonuç: Zinciri özetle (yoğun hayat, hazır gıda, sağlık ve aile bağlarında zayıflama), haftada birkaç ev yemeği öner."
    ],
    phrases: [
      "The primary reason for this shift is",
      "Because of busy working schedules,",
      "This is partly caused by",
      "One serious consequence is that",
      "This has led to a rise in",
      "As a direct result,",
      "Another effect worth mentioning is",
      "Over time, this may cause",
      "In summary,"
    ]
  },
  {
    id: "wr5",
    type: "for-against",
    typeTr: "Lehte ve Aleyhte",
    prompt: "More and more employees now work from home instead of going to an office. Discuss the advantages and disadvantages of working from home.",
    plan: [
      "Giriş: Pandemiden sonra uzaktan çalışmanın kalıcı hale geldiğini belirt, yazının iki tarafı da tartışacağını söyle.",
      "Gövde 1 (avantajlar): Yol süresinden tasarruf, esnek program ve aileye ayrılan zamanın artması; bir çalışan örneği ver.",
      "Gövde 2 (dezavantajlar): Yalnızlaşma, iş ile özel hayat sınırının silinmesi ve ekip iletişiminin zayıflaması.",
      "Değerlendirme: Hangi meslekler için uygun olup olmadığını kısaca tart, hibrit modelin dengeyi sağlayabileceğini belirt.",
      "Sonuç: İki tarafı tek cümlede özetle ve dengeli bir kişisel yargıyla kapat."
    ],
    phrases: [
      "One of the main advantages is that",
      "Another benefit worth mentioning is",
      "Supporters of remote work point out that",
      "On the other hand,",
      "One significant drawback is that",
      "Critics also argue that",
      "However, this depends largely on",
      "Taking both sides into account,",
      "On balance, it seems that"
    ]
  },
  {
    id: "wr6",
    type: "for-against",
    typeTr: "Lehte ve Aleyhte",
    prompt: "Some schools allow students to use smartphones in class as a learning tool. Discuss the advantages and disadvantages of using smartphones in the classroom.",
    plan: [
      "Giriş: Telefonların okullardaki yerinin dünyada tartışıldığını belirt (bazı ülkeler yasaklıyor, bazıları teşvik ediyor), iki yönü de inceleyeceğini söyle.",
      "Gövde 1 (avantajlar): Anında bilgiye erişim, sözlük ve eğitim uygulamaları, dijital okuryazarlık kazanımı; derste kullanılan bir uygulama örneği ver.",
      "Gövde 2 (dezavantajlar): Dikkat dağınıklığı, sosyal medya bildirimleri, kopya riski ve telefon alamayan öğrenciler arasında eşitsizlik.",
      "Değerlendirme: Kuralların belirleyici olduğunu vurgula: öğretmen kontrolünde, belirli görevler için kullanım orta yol olabilir.",
      "Sonuç: Telefonun kendisinin değil kullanım biçiminin sonucu belirlediğini söyleyerek dengeli bir yargıyla bitir."
    ],
    phrases: [
      "The strongest argument in favour is that",
      "In addition, smartphones enable students to",
      "Those who support this practice claim that",
      "Nevertheless,",
      "The most serious disadvantage is that",
      "Opponents argue that",
      "There is also a risk that",
      "Weighing the pros and cons,",
      "All things considered,"
    ]
  },
  {
    id: "wr7",
    type: "compare",
    typeTr: "Karşılaştırma",
    prompt: "Compare and contrast living in a big city and living in a small town. Which one offers a better quality of life? Explain with reasons and examples.",
    plan: [
      "Giriş: İnsanların yaşam yeri seçiminin hayat kalitesini doğrudan etkilediğini söyle, iki seçeneği hangi ölçütlerle kıyaslayacağını belirt.",
      "Gövde 1 (fırsatlar): İş, eğitim, sağlık ve kültürel etkinliklerde büyük şehrin üstünlüğünü işle, somut bir şehir örneği ver.",
      "Gövde 2 (yaşam temposu): Küçük şehrin sakinliği, düşük yaşam maliyeti, temiz havası ve güçlü komşuluk bağlarını anlat.",
      "Ortak nokta ve fark özeti: İkisinin de topluluk hissi sunabildiğini ama tempo, maliyet ve imkan yönünden ayrıştığını göster.",
      "Sonuç: Hangi yaşam tarzının kime uyduğunu belirt (kariyer odaklı gençler ve aileler ayrımı) ve kendi tercihini gerekçelendir."
    ],
    phrases: [
      "When it comes to job opportunities,",
      "In contrast,",
      "Unlike big cities,",
      "One key similarity is that",
      "The most striking difference is",
      "Whereas city life offers",
      "Similarly,",
      "Compared to a small town,",
      "On the whole,",
      "Ultimately, the better option depends on"
    ]
  },
  {
    id: "wr8",
    type: "compare",
    typeTr: "Karşılaştırma",
    prompt: "Compare and contrast printed books and e-books. In what ways are they similar, and how are they different for a typical student?",
    plan: [
      "Giriş: Dijital çağda okuma biçiminin değiştiğini belirt, iki formatı öğrenci gözünden kıyaslayacağını söyle.",
      "Gövde 1 (benzerlikler): İçerik aynıdır, ikisi de bilgiye ve hayal gücüne kapı açar, ikisiyle de not tutulabilir.",
      "Gövde 2 (pratik farklar): E-kitabın taşınabilirliği, arama ve sözlük özellikleri, anında satın alma; basılı kitabın ekran yorgunluğu yaratmaması ve odaklanmayı kolaylaştırması.",
      "Gövde 3 (maliyet ve alışkanlık farkı): E-kitapların genelde ucuz olması ama cihaz gerektirmesi; basılı kitabın kütüphane ve ödünç alma kültürüne uygunluğu.",
      "Sonuç: İki formatın rakip değil tamamlayıcı olduğunu, sınav çalışan bir öğrencinin ikisini birlikte kullanabileceğini söyleyerek kapat."
    ],
    phrases: [
      "Both formats allow readers to",
      "In much the same way,",
      "They are alike in that",
      "The main difference lies in",
      "While printed books offer",
      "E-books, on the other hand,",
      "Another point of contrast is",
      "In terms of cost,",
      "Taken together, these points show that"
    ]
  }
];
