class SallaArabianOudWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Register translations
    this.registerTranslations();
    
    // Wait for Salla to be ready
    if (typeof salla !== 'undefined') {
      salla.onReady(() => {
        this.render();
      });
    } else {
      this.render();
    }
  }

  registerTranslations() {
    if (typeof Salla === 'undefined' || !Salla.lang) {
      console.warn('Salla SDK not loaded yet');
      return;
    }

    Salla.lang.addBulk({
      'arabian_oud.hero_title': {
        ar: 'العربية للعود - خبره منذ ١٩٨٢',
        en: 'Authentic formulations from the East. Founded 1982.',
        fr: 'Formulations authentiques de l\'Orient. Fondée en 1982.',
        es: 'Formulaciones auténticas de Oriente. Fundada en 1982.',
        de: 'Authentische Formulierungen aus dem Osten. Gegründet 1982.',
        tr: 'Doğu\'dan otantik formülasyonlar. 1982\'de kuruldu.',
        it: 'Formulazioni autentiche dall\'Oriente. Fondata nel 1982.',
        ms: 'Formulasi tulen dari Timur. Diasaskan 1982.'
      },
      'arabian_oud.hero_description': {
        ar: 'خبره ومشوار طويل في انتاج العطور <span data-teams="true">الأعواد </span>ذات الروائح الرائعه التركيبات المعقدة: أحد أندر الموارد الفخمة المكتشفة في القرن الحادي والعشرين',
        en: 'An authority in the delicate and complex aroma of Oud: one of the rarest, lavish resources unearthed in the 21st century',
        fr: 'Une autorité dans l\'arôme délicat et complexe de l\'Oud : l\'une des ressources les plus rares et luxueuses découvertes au 21e siècle',
        es: 'Una autoridad en el delicado y complejo aroma del Oud: uno de los recursos más raros y lujosos descubiertos en el siglo XXI',
        de: 'Eine Autorität im zarten und komplexen Aroma von Oud: eine der seltensten, üppigsten Ressourcen, die im 21. Jahrhundert entdeckt wurden',
        tr: 'Oud\'un hassas ve karmaşık aromasında bir otorite: 21. yüzyılda keşfedilen en nadir, lüks kaynaklardan biri',
        it: 'Un\'autorità nell\'aroma delicato e complesso dell\'Oud: una delle risorse più rare e sontuose scoperte nel 21° secolo',
        ms: 'Pakar dalam aroma Oud yang halus dan kompleks: salah satu sumber mewah yang paling jarang ditemui pada abad ke-21'
      },
      'arabian_oud.heritage_title': {
        ar: 'التراث العميق',
        en: 'Deep heritage',
        fr: 'Un héritage profond',
        es: 'Patrimonio profundo',
        de: 'Tiefes Erbe',
        tr: 'Derin miras',
        it: 'Patrimonio profondo',
        ms: 'Warisan mendalam'
      },
      'arabian_oud.heritage_text': {
        ar: 'بإيمان وإصرار على تحقيق حلم عريق لرفع راية «صنع في السعودية»، قامت العربية للعود بإنشاء مجموعة مصانع في المملكة العربية السعودية <span data-teams="true">لصناعة </span>العطور لتكون خير دليل على جدارة وريادة الأيادي السعودية، وانطلاقاً من هذا الهدف النبيل وإكمالاً لخطة عملنا، قمنا بتصدير عطورنا إلى كل أنحاء العالم، محاكين بعراقتنا وتفردنا الشغف العطري العالمي بهوية سعودية خلاقة<br />من مصانعنا في مدينة الرياض، نصدر أكثر من 50 ألف عطر يومياً تتنوع بين أكثر من 400 منتج مختلف إلى أكثر من 37 دولة و 100 مدينة و 1200 فرع حول العالم، إلى عواصم العطور العالمية مثل باريس ولندن ونيويورك وواشنطن وموسكو، كما وصلنا إلى دول جديدة مثل النمسا وإيطاليا وأسبانيا وألمانيا، حيث استطاعت أن تنشئ أكبر شركة عطور فاخرة للجنسين، فأصبحت العربية للعود قادرة على تحريك بوصلة الذوق العام لمحبي العطور في العالم نحو عاصمة جديدة للعطر مقرها السعودية.',
        en: 'Arabian Oud marks the largest Middle Eastern fragrance house in the world since opening our doors in&nbsp;1982 in the traditional former marketplace of Riyadh, Souk al-Azal, with an objective to source one of the&nbsp;rarest scents, Oud, which has served Middle Eastern perfumery for centuries. A renowned brand formulating unconventional fragrances, incense and oils of the finest quality.&nbsp;<br><br>Today, Arabian Oud holds a dashing collection of 400 distinctive products, conducting 1200 stores spread&nbsp;over 37 countries. With more than forty years\' experience of immersing our audience in the realm of heritage, fusing both traditional and modern practices, we continue our service to author the story of Oud.',
        fr: 'Arabian Oud est la plus grande maison de parfums du Moyen-Orient au monde depuis l\'ouverture de nos portes en 1982 dans l\'ancien marché traditionnel de Riyad, Souk al-Azal, avec pour objectif de se procurer l\'un des parfums les plus rares, l\'Oud, qui sert la parfumerie du Moyen-Orient depuis des siècles. Une marque renommée qui formule des parfums, des encens et des huiles non conventionnels de la plus haute qualité.<br><br>Aujourd\'hui, Arabian Oud détient une collection éblouissante de 400 produits distinctifs, exploitant 1 200 magasins répartis dans 37 pays. Avec plus de quarante ans d\'expérience dans l\'immersion de notre public dans le domaine du patrimoine, fusionnant des pratiques traditionnelles et modernes, nous continuons notre service pour raconter l\'histoire de l\'Oud.',
        es: 'Arabian Oud es la casa de fragancias de Oriente Medio más grande del mundo desde que abrimos nuestras puertas en 1982 en el tradicional antiguo mercado de Riad, Souk al-Azal, con el objetivo de obtener uno de los aromas más raros, el Oud, que ha servido a la perfumería de Oriente Medio durante siglos. Una marca reconocida que formula fragancias, inciensos y aceites no convencionales de la más alta calidad.<br><br>Hoy, Arabian Oud posee una deslumbrante colección de 400 productos distintivos, con 1200 tiendas distribuidas en 37 países. Con más de cuarenta años de experiencia sumergiendo a nuestro público en el reino del patrimonio, fusionando prácticas tradicionales y modernas, continuamos nuestro servicio para contar la historia del Oud.',
        de: 'Arabian Oud ist das größte Dufthaus des Nahen Ostens der Welt, seit wir 1982 unsere Türen im traditionellen ehemaligen Marktplatz von Riad, Souk al-Azal, geöffnet haben, mit dem Ziel, einen der seltensten Düfte zu beschaffen, Oud, der seit Jahrhunderten der Parfümerie des Nahen Ostens dient. Eine renommierte Marke, die unkonventionelle Düfte, Weihrauch und Öle von feinster Qualität formuliert.<br><br>Heute verfügt Arabian Oud über eine beeindruckende Sammlung von 400 unverwechselbaren Produkten mit 1200 Geschäften in 37 Ländern. Mit mehr als vierzig Jahren Erfahrung darin, unser Publikum in das Reich des Erbes einzutauchen und traditionelle und moderne Praktiken zu verschmelzen, setzen wir unseren Service fort, um die Geschichte von Oud zu erzählen.',
        tr: 'Arabian Oud, 1982 yılında Riyad\'ın geleneksel eski pazarı Souk al-Azal\'da kapılarımızı açtığımızdan bu yana dünyanın en büyük Orta Doğu koku evidir. Amacımız, yüzyıllardır Orta Doğu parfümerisine hizmet eden en nadir kokulardan biri olan Oud\'u tedarik etmektir. En kaliteli alışılmadık kokular, tütsü ve yağlar formüle eden tanınmış bir marka.<br><br>Bugün Arabian Oud, 37 ülkeye yayılmış 1200 mağazayla 400 farklı ürünün göz alıcı bir koleksiyonuna sahiptir. Kırk yılı aşkın deneyimimizle izleyicilerimizi miras alanına daldırmak, geleneksel ve modern uygulamaları birleştirmek için Oud\'un hikayesini anlatma hizmetimize devam ediyoruz.',
        it: 'Arabian Oud è la più grande casa di fragranze del Medio Oriente al mondo da quando abbiamo aperto le nostre porte nel 1982 nel tradizionale ex mercato di Riyadh, Souk al-Azal, con l\'obiettivo di procurarci uno dei profumi più rari, l\'Oud, che ha servito la profumeria del Medio Oriente per secoli. Un marchio rinomato che formula fragranze, incensi e oli non convenzionali della più alta qualità.<br><br>Oggi Arabian Oud vanta una brillante collezione di 400 prodotti distintivi, con 1200 negozi distribuiti in 37 paesi. Con più di quarant\'anni di esperienza nell\'immergere il nostro pubblico nel regno del patrimonio, fondendo pratiche tradizionali e moderne, continuiamo il nostro servizio per raccontare la storia dell\'Oud.',
        ms: 'Arabian Oud menandakan rumah wangian Timur Tengah terbesar di dunia sejak membuka pintu kami pada tahun 1982 di pasar tradisional bekas Riyadh, Souk al-Azal, dengan objektif untuk mendapatkan salah satu bau paling jarang, Oud, yang telah melayani pewangian Timur Tengah selama berabad-abad. Jenama terkenal yang merumuskan wangian, kemenyan dan minyak bukan konvensional dengan kualiti terbaik.<br><br>Hari ini, Arabian Oud memegang koleksi 400 produk tersendiri yang menawan, menjalankan 1200 kedai yang tersebar di 37 negara. Dengan lebih dari empat puluh tahun pengalaman mencelupkan penonton kami ke dalam alam warisan, menggabungkan amalan tradisional dan moden, kami terus perkhidmatan kami untuk mengarang kisah Oud.'
      },
      'arabian_oud.passion_title': {
        ar: 'اللمسات الإبداعية',
        en: 'A conscientious passion',
        fr: 'Une passion consciencieuse',
        es: 'Una pasión consciente',
        de: 'Eine gewissenhafte Leidenschaft',
        tr: 'Vicdanlı bir tutku',
        it: 'Una passione coscienziosa',
        ms: 'Semangat yang bertanggungjawab'
      },
      'arabian_oud.passion_text': {
        ar: 'جاءت العربية للعود بلمستها الرائعة بأن تكون أول من ابتكر منتج عطري برائحة العود، ومزجه بروائح أو مختلفة بلمسة عبقرية من الإبداع . هذه اللمسة المبتكرة استطاعت أن تغير الثقافة العطرية ال العالمية، بحيث جمعت أصالة الشرق وسحر الغرب في قارورة عطرية واحدة.',
        en: 'Our collection of sophisticated formulations echoes back to our understanding of Oud since opening our doors. Our oud resin creates the unforgettable signature fragrance that greets every customer visiting our stores. With its combination of olfactory power and unique natural fragrance, this ingredient is considered as the key component of the perfumer\'s palette and with its nuanced tones, lends a profound history for us.',
        fr: 'Notre collection de formulations sophistiquées fait écho à notre compréhension de l\'Oud depuis l\'ouverture de nos portes. Notre résine d\'oud crée le parfum signature inoubliable qui accueille chaque client visitant nos magasins. Avec sa combinaison de puissance olfactive et de parfum naturel unique, cet ingrédient est considéré comme le composant clé de la palette du parfumeur et, avec ses tons nuancés, nous confère une histoire profonde.',
        es: 'Nuestra colección de formulaciones sofisticadas se remonta a nuestra comprensión del Oud desde que abrimos nuestras puertas. Nuestra resina de oud crea la fragancia característica inolvidable que recibe a cada cliente que visita nuestras tiendas. Con su combinación de poder olfativo y fragancia natural única, este ingrediente se considera el componente clave de la paleta del perfumista y, con sus tonos matizados, nos brinda una historia profunda.',
        de: 'Unsere Sammlung ausgefeilter Formulierungen hallt zurück zu unserem Verständnis von Oud seit der Öffnung unserer Türen. Unser Oud-Harz kreiert den unvergesslichen Signature-Duft, der jeden Kunden begrüßt, der unsere Geschäfte besucht. Mit seiner Kombination aus olfaktorischer Kraft und einzigartigem natürlichem Duft gilt diese Zutat als Schlüsselkomponente der Parfümeur-Palette und verleiht uns mit ihren nuancierten Tönen eine tiefgreifende Geschichte.',
        tr: 'Sofistike formülasyon koleksiyonumuz, kapılarımızı açtığımızdan bu yana Oud anlayışımıza dayanır. Oud reçinemiz, mağazalarımızı ziyaret eden her müşteriyi karşılayan unutulmaz imza kokusunu yaratır. Koku gücü ve benzersiz doğal koku kombinasyonu ile bu bileşen, parfümörün paletinin temel bileşeni olarak kabul edilir ve nüanslı tonları ile bize derin bir tarih kazandırır.',
        it: 'La nostra collezione di formulazioni sofisticate riecheggia la nostra comprensione dell\'Oud da quando abbiamo aperto le nostre porte. La nostra resina di oud crea la fragranza distintiva indimenticabile che accoglie ogni cliente che visita i nostri negozi. Con la sua combinazione di potere olfattivo e fragranza naturale unica, questo ingrediente è considerato il componente chiave della tavolozza del profumiere e, con i suoi toni sfumati, ci conferisce una storia profonda.',
        ms: 'Koleksi formulasi canggih kami bergema kembali kepada pemahaman kami tentang Oud sejak membuka pintu kami. Resin oud kami mencipta wangian tandatangan yang tidak dapat dilupakan yang menyambut setiap pelanggan yang mengunjungi kedai kami. Dengan gabungan kuasa penciuman dan wangian semula jadi yang unik, ramuan ini dianggap sebagai komponen utama palet pembuat wangian dan dengan nada bernuansa, memberikan sejarah yang mendalam untuk kami.'
      },
      'arabian_oud.global_title': {
        ar: 'انتشارنا حول العالم.',
        en: 'Reaching out to customers across the globe',
        fr: 'Toucher les clients du monde entier',
        es: 'Llegando a clientes de todo el mundo',
        de: 'Kunden auf der ganzen Welt erreichen',
        tr: 'Dünyanın her yerinden müşterilere ulaşmak',
        it: 'Raggiungere i clienti in tutto il mondo',
        ms: 'Menghubungi pelanggan di seluruh dunia'
      },
      'arabian_oud.global_text': {
        ar: 'تتواجد العربية للعود بفروعها&nbsp;المميزة في مدن مثل باريس ودبي وميلانو ومدريد ونيس وبرلين ونيويورك وكوالالمبور ولندن.',
        en: 'Our signature stores thrive in cities such as Kuala Lumpur, Paris, Dubai, Milano, Madrid, Nice, Berlin, New York and London.',
        fr: 'Nos boutiques emblématiques prospèrent dans des villes telles que Kuala Lumpur, Paris, Dubaï, Milan, Madrid, Nice, Berlin, New York et Londres.',
        es: 'Nuestras tiendas emblemáticas prosperan en ciudades como Kuala Lumpur, París, Dubái, Milán, Madrid, Niza, Berlín, Nueva York y Londres.',
        de: 'Unsere charakteristischen Geschäfte gedeihen in Städten wie Kuala Lumpur, Paris, Dubai, Mailand, Madrid, Nizza, Berlin, New York und London.',
        tr: 'İmza mağazalarımız Kuala Lumpur, Paris, Dubai, Milano, Madrid, Nice, Berlin, New York ve Londra gibi şehirlerde gelişmektedir.',
        it: 'I nostri negozi distintivi prosperano in città come Kuala Lumpur, Parigi, Dubai, Milano, Madrid, Nizza, Berlino, New York e Londra.',
        ms: 'Kedai tandatangan kami berkembang maju di bandar-bandar seperti Kuala Lumpur, Paris, Dubai, Milano, Madrid, Nice, Berlin, New York dan London.'
      },
      'arabian_oud.store_button': {
        ar: 'تفضلوا بزيارة أقرب فرع',
        en: 'Visit our Stores',
        fr: 'Visitez nos magasins',
        es: 'Visite nuestras tiendas',
        de: 'Besuchen Sie unsere Geschäfte',
        tr: 'Mağazalarımızı ziyaret edin',
        it: 'Visita i nostri negozi',
        ms: 'Lawati kedai kami'
      },
      'arabian_oud.customer_title': {
        ar: 'افضل تجربة لعملائناً',
        en: 'Enriching customers',
        fr: 'Enrichir les clients',
        es: 'Enriqueciendo a los clientes',
        de: 'Kunden bereichern',
        tr: 'Müşterileri zenginleştirmek',
        it: 'Arricchire i clienti',
        ms: 'Memperkaya pelanggan'
      },
      'arabian_oud.customer_text': {
        ar: 'بلغت العربية للعود الريادة والمكانة الفريدة في صناعة العطور بفضل إتقانها وتفانيها في عملها، وبفضل استخدامها أحدث وأفضل الوسائل التقنية في مصانعها، وذلك لضمان تقديم منتجات فاخرة وذات جودة عالية، وبنسب وبتراكيز متوازنة ومدروسة بتقنيات عالمية ليصبح الخطأ البشري لا يذكر.<br /><br />كما تلتزم العربية للعود باستخدام أنقى وأندر المواد الأولية، بالإضافة لالتزامنا التام بالمعايير الصحية العالمية لنقدم إلى العالم مُنتجات عطرية نفيسة تضاهي أجود أنواع العطور على مستوى العالم',
        en: 'Aromatic preferences are highly personal. Each Arabian Oud scent is a journey of memory, mood, occasion and palate — a sincere expression of the Middle East. Each ingredient is sourced from the most reputable suppliers across the globe. Our wealth of knowledge in the art of Oud and perfumery lends our creations a universal, timeless quality that is enjoyed among global audiences. Impeccable scents accompanied by sophisticated designs, tailored for diverse tastes, different seasons and geographies. Thoughtful formulations that are meant for everyday living, to enrich the lifestyle of our clients.',
        fr: 'Les préférences aromatiques sont très personnelles. Chaque parfum Arabian Oud est un voyage de mémoire, d\'humeur, d\'occasion et de palais - une expression sincère du Moyen-Orient. Chaque ingrédient provient des fournisseurs les plus réputés du monde entier. Notre richesse de connaissances dans l\'art de l\'Oud et de la parfumerie confère à nos créations une qualité universelle et intemporelle appréciée par le public mondial. Des parfums impeccables accompagnés de designs sophistiqués, adaptés aux goûts divers, aux différentes saisons et géographies. Des formulations réfléchies destinées à la vie quotidienne, pour enrichir le style de vie de nos clients.',
        es: 'Las preferencias aromáticas son muy personales. Cada aroma de Arabian Oud es un viaje de memoria, estado de ánimo, ocasión y paladar: una expresión sincera de Oriente Medio. Cada ingrediente se obtiene de los proveedores más reputados de todo el mundo. Nuestra riqueza de conocimientos en el arte del Oud y la perfumería otorga a nuestras creaciones una calidad universal y atemporal que es disfrutada por audiencias globales. Aromas impecables acompañados de diseños sofisticados, adaptados a gustos diversos, diferentes estaciones y geografías. Formulaciones reflexivas destinadas a la vida cotidiana, para enriquecer el estilo de vida de nuestros clientes.',
        de: 'Aromatische Vorlieben sind sehr persönlich. Jeder Arabian Oud-Duft ist eine Reise der Erinnerung, Stimmung, Gelegenheit und des Gaumens - ein aufrichtiger Ausdruck des Nahen Ostens. Jede Zutat stammt von den renommiertesten Lieferanten auf der ganzen Welt. Unser Wissensreichtum in der Kunst von Oud und Parfümerie verleiht unseren Kreationen eine universelle, zeitlose Qualität, die von einem globalen Publikum genossen wird. Makellose Düfte, begleitet von anspruchsvollen Designs, die auf verschiedene Geschmäcker, verschiedene Jahreszeiten und Geografien zugeschnitten sind. Durchdachte Formulierungen für den Alltag, um den Lebensstil unserer Kunden zu bereichern.',
        tr: 'Aromatik tercihler oldukça kişiseldir. Her Arabian Oud kokusu, hafıza, ruh hali, durum ve damak tadının bir yolculuğudur - Orta Doğu\'nun içten bir ifadesi. Her bileşen, dünyanın en saygın tedarikçilerinden temin edilir. Oud ve parfümörlük sanatındaki bilgi zenginliğimiz, yaratımlarımıza küresel kitlelerin zevk aldığı evrensel, zamansız bir kalite kazandırır. Farklı zevklere, farklı mevsimlere ve coğrafyalara göre uyarlanmış sofistike tasarımlarla eşlik eden kusursuz kokular. Müşterilerimizin yaşam tarzını zenginleştirmek için günlük yaşam için tasarlanmış düşünceli formülasyonlar.',
        it: 'Le preferenze aromatiche sono molto personali. Ogni profumo Arabian Oud è un viaggio di memoria, umore, occasione e palato - un\'espressione sincera del Medio Oriente. Ogni ingrediente proviene dai fornitori più rinomati di tutto il mondo. La nostra ricchezza di conoscenze nell\'arte dell\'Oud e della profumeria conferisce alle nostre creazioni una qualità universale e senza tempo apprezzata dal pubblico globale. Profumi impeccabili accompagnati da design sofisticati, su misura per gusti diversi, stagioni e geografie diverse. Formulazioni ponderate destinate alla vita quotidiana, per arricchire lo stile di vita dei nostri clienti.',
        ms: 'Pilihan aromatik sangat peribadi. Setiap bau Arabian Oud adalah perjalanan memori, mood, acara dan selera - ekspresi tulus Timur Tengah. Setiap ramuan diperoleh daripada pembekal yang paling bereputasi di seluruh dunia. Kekayaan pengetahuan kami dalam seni Oud dan pewangian memberikan ciptaan kami kualiti universal dan abadi yang dinikmati di kalangan penonton global. Bau yang sempurna disertai dengan reka bentuk canggih, disesuaikan untuk citarasa yang pelbagai, musim dan geografi yang berbeza. Formulasi yang penuh pertimbangan yang dimaksudkan untuk kehidupan seharian, untuk memperkaya gaya hidup pelanggan kami.'
      },
      'arabian_oud.creative_title': {
        ar: 'مفهومنا في ابتكار العطور',
        en: 'The creative process',
        fr: 'Le processus créatif',
        es: 'El proceso creativo',
        de: 'Der kreative Prozess',
        tr: 'Yaratıcı süreç',
        it: 'Il processo creativo',
        ms: 'Proses kreatif'
      },
      'arabian_oud.creative_text': {
        ar: 'اكتشفنا في العربية للعود أبعاداً عميقة لكل عطر. وصفنا كل تركيبة بطريقة متفردة، فأصبحت عطورنا رسائل حب وترياقات ثقة تبث الفرح في النفوس وتنشر الدفء والحنين تنقلك عبر الزمان والمكان وتضفي إليك جاذبية ومشاعر مختلفة من الكاريزما والحضور أو الاندفاع دون أن تتحدث.',
        en: 'The fusion of tradition and modernity is at the heart of Arabian Oud. The founder, Sheikh Abdul Aziz Al-Jasir, took the novel approach of blending the redolent scent of Oud with conventional notes from the fragrance family.',
        fr: 'La fusion de la tradition et de la modernité est au cœur d\'Arabian Oud. Le fondateur, Sheikh Abdul Aziz Al-Jasir, a adopté l\'approche novatrice consistant à mélanger le parfum odorant de l\'Oud avec des notes conventionnelles de la famille des parfums.',
        es: 'La fusión de la tradición y la modernidad está en el corazón de Arabian Oud. El fundador, Sheikh Abdul Aziz Al-Jasir, adoptó el enfoque novedoso de mezclar el aroma fragante del Oud con notas convencionales de la familia de fragancias.',
        de: 'Die Verschmelzung von Tradition und Moderne steht im Herzen von Arabian Oud. Der Gründer, Scheich Abdul Aziz Al-Jasir, verfolgte den neuartigen Ansatz, den duftenden Duft von Oud mit konventionellen Noten aus der Duftfamilie zu mischen.',
        tr: 'Gelenek ve modernliğin füzyonu Arabian Oud\'un kalbindedir. Kurucu Şeyh Abdul Aziz Al-Jasir, koku ailesinden geleneksel notalarla Oud\'un kokuşan kokusunu harmanlama yenilikçi yaklaşımını benimsedi.',
        it: 'La fusione di tradizione e modernità è al centro di Arabian Oud. Il fondatore, lo sceicco Abdul Aziz Al-Jasir, ha adottato l\'approccio innovativo di miscelare il profumo fragrante dell\'Oud con note convenzionali della famiglia delle fragranze.',
        ms: 'Gabungan tradisi dan kemodenan adalah di jantung Arabian Oud. Pengasas, Sheikh Abdul Aziz Al-Jasir, mengambil pendekatan baru untuk menggabungkan bau wangi Oud dengan nota konvensional dari keluarga wangian.'
      },
      'arabian_oud.creative_button': {
        ar: 'تعرف على منتجاتنا',
        en: 'Explore our fragrances',
        fr: 'Découvrez nos parfums',
        es: 'Explora nuestras fragancias',
        de: 'Erkunden Sie unsere Düfte',
        tr: 'Kokularımızı keşfedin',
        it: 'Esplora le nostre fragranze',
        ms: 'Terokai wangian kami'
      }
    });
  }

  getLocalizedUrl(basePath) {
    if (typeof salla === 'undefined') return basePath;
    
    const locale = salla.lang.locale || 'ar';
    return `/${locale}${basePath}`;
  }

  render() {
    this.innerHTML = `
      <div id="content" class="layout_content__BTk47">
        <section class="styles_root__ZPFWX styles_root__uvCFe styles_text-underneath__OvZyb" role="banner" aria-labelledby="hero-title" tabindex="0">
          <div class="styles_imageContainer__qugEb">
            <picture>
              <source srcset="https://media.al-jasser.com/api/public/content/ib-bha4wttskxpwus66nzg-web?v=f6dc6d69" media="(min-width: 480px)" />
              <img height="500" dam-content-type="Image" alt="World of Arabian Oud banner- Category page" width="1440"
                thumbnailsrc="https://arab-p-001.sitecorecontenthub.cloud/api/gateway/125925/thumbnail"
                dam-id="Ib-bHA4wTTSkXpwUS66nzg" fetchpriority="high"
                src="https://media.al-jasser.com/api/public/content/ib-bha4wttskxpwus66nzg-card?v=f6dc6d69" />
            </picture>
          </div>
          <div class="styles_root__ZPFWX styles_root_px__o6l1Q">
            <div class="styles_content__g6phZ" style="--custom-color: #222222">
              <div id="hero-title">
                <h2 class="h1">${salla.lang.get('arabian_oud.hero_title')}</h2>
              </div>
              <div class="styles_description__0skSL">
                <div class="ck-content">
                  <p>${salla.lang.get('arabian_oud.hero_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_root__okxsE"></section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_root_py__98aJm">
          <div class="styles_root__lXPhW">
            <div>
              <h2 class="h1 styles_title__CjLM3">${salla.lang.get('arabian_oud.heritage_title')}</h2>
              <div class="styles_text__QOPtU styles_column-2__eCr45">
                <div class="ck-content">
                  <p>${salla.lang.get('arabian_oud.heritage_text')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_rootContainer__ZC1me" role="banner" aria-labelledby="passion-title">
          <div class="styles_root__56qp2 styles_reverse__LRfhI">
            <div class="styles_scrollContainer__EDbFL styles_imageColumn__AstML styles_contained__JLV6w" style="--animation-duration: 1s; opacity: 1">
              <div class="styles_imageWrap__G7Vkn">
                <img height="720" dam-content-type="Image" alt="Tawasul Exclusive Rewards" width="720"
                  thumbnailsrc="https://arab-p-001.sitecorecontenthub.cloud/api/gateway/117266/thumbnail"
                  dam-id="4Bsg7iQmTnCLKf97LyoFaw" loading="lazy" class="styles_image__MLuxK"
                  src="https://media.al-jasser.com/api/public/content/4bsg7iqmtnclkf97lyofaw-lcard?v=ee9963db&t=w800" />
              </div>
            </div>
            <div class="styles_scrollContainer__EDbFL styles_contentColumn__l_Q_9" style="--animation-duration: 1s; opacity: 1">
              <section class="styles_root__ZPFWX">
                <h2 class="h1 styles_title__KDWHP" id="passion-title">${salla.lang.get('arabian_oud.passion_title')}</h2>
                <div>${salla.lang.get('arabian_oud.passion_text')}</div>
                <div class="styles_buttonContainer__JBaJg"></div>
              </section>
            </div>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_root__DCVV5">
          <div>
            <h2>${salla.lang.get('arabian_oud.global_title')}</h2>
            <p>${salla.lang.get('arabian_oud.global_text')}</p>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root__uvCFe" role="banner" aria-labelledby="store-section" tabindex="0">
          <div class="styles_imageContainer__qugEb">
            <a title target class tabindex="-1" aria-labelledby="store-section" href="${this.getLocalizedUrl('/find-store')}">
              <picture>
                <source srcset="https://arab-p-001.sitecorecontenthub.cloud/api/public/content/ua2mlvdstvkervfhzchk4g-hero?v=6e37d9a9" media="(min-width: 480px)" />
                <img height="500" stylelabs-content-type="Image" alt="About_Us_Page_Layout2.jpeg"
                  stylelabs-content-id="108309" width="1440"
                  thumbnailsrc="https://arab-p-001.sitecorecontenthub.cloud/api/gateway/108309/thumbnail" fetchpriority="low"
                  loading="lazy"
                  src="https://arab-p-001.sitecorecontenthub.cloud/api/public/content/ua2mlvdstvkervfhzchk4g-card?v=6e37d9a9" />
              </picture>
            </a>
          </div>
          <div class="styles_root__ZPFWX styles_root_px__o6l1Q">
            <div class="styles_content__g6phZ" style="--custom-color: inherit">
              <div id="store-section"></div>
              <div class="styles_buttonContainer__Nnla6">
                <a title target
                  class="styles_ctaButton__e7Eit styles_root__vyg5C styles_root_borderRadiusLarge__jfhiF styles_root_colorLight__OgJ1v styles_root_contained__b_XuB"
                  href="${this.getLocalizedUrl('/find-store')}">${salla.lang.get('arabian_oud.store_button')}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_root_py__98aJm">
          <div class="styles_root__lXPhW">
            <div>
              <h2 class="h1 styles_title__CjLM3">${salla.lang.get('arabian_oud.customer_title')}</h2>
              <div class="styles_text__QOPtU">
                <p>${salla.lang.get('arabian_oud.customer_text')}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="styles_root__ZPFWX styles_root_px__o6l1Q styles_rootContainer__ZC1me" role="banner" aria-labelledby="creative-title">
          <div class="styles_root__56qp2 styles_reverse__LRfhI">
            <div class="styles_scrollContainer__EDbFL styles_imageColumn__AstML styles_contained__JLV6w" style="--animation-duration: 1s; opacity: 1">
              <a title="${salla.lang.get('arabian_oud.creative_button')}" target class="styles_imageWrap__G7Vkn" tabindex="-1" href="${this.getLocalizedUrl('/latest-products')}">
                <img height="720" stylelabs-content-type="Image" alt="Male_Royal_Oud.jpg" stylelabs-content-id="107813"
                  width="720" thumbnailsrc="https://arab-p-001.sitecorecontenthub.cloud/api/gateway/107813/thumbnail"
                  loading="lazy" class="styles_image__MLuxK"
                  src="https://arab-p-001.sitecorecontenthub.cloud/api/public/content/qmyqvyrcseoxfvo-1fc2uw-lcard?v=a9b8ab70&t=w800" />
              </a>
            </div>
            <div class="styles_scrollContainer__EDbFL styles_contentColumn__l_Q_9" style="--animation-duration: 1s; opacity: 1">
              <section class="styles_root__ZPFWX">
                <h2 class="h1 styles_title__KDWHP" id="creative-title">${salla.lang.get('arabian_oud.creative_title')}</h2>
                <div>${salla.lang.get('arabian_oud.creative_text')}</div>
                <div class="styles_buttonContainer__JBaJg">
                  <a title="${salla.lang.get('arabian_oud.creative_button')}" target
                    class="styles_root__vyg5C styles_root_borderRadiusLarge__jfhiF styles_root_colorDark__kKit9 styles_root_contained__b_XuB"
                    href="${this.getLocalizedUrl('/latest-products')}">${salla.lang.get('arabian_oud.creative_button')}</a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('salla-arabian-oud-world', SallaArabianOudWorld);
