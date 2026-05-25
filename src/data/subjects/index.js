// Avtomatik tarzda docs/ ichidagi Excel fayllardan generatsiya qilingan.
// Manba fayllari: DAK umumiy pedagogika(o'zbek).xlsx, Jahon tarixi.xlsx, O'zbekiston tarixi.xlsx, Tarix o‘qitish metodikasi Tarix (2).xlsx, Umumiy_psixologiya_Yosh_davrlari_va_pedagogik_psixologiyao'zbek.xlsx
// Har bir savolda options[0] — to‘g‘ri javob. Sessiya davomida aralashtiriladi.

export const SUBJECTS = [
  {
    "id": "pedagogika",
    "name": "Umumiy pedagogika",
    "tagline": "Ta'lim, didaktika, tarbiya nazariyasi",
    "glyph": "P",
    "questions": [
      {
        "question": "Darsning boshlanishini tashkil etish uy vazifasini tekshirish, darsning maqsadi va vazifasini bayon qilish, yangi materiallarni tushuntirish, mustahkamlash, darsga yakun yasash va uyga vazifa berish» tuzilishidagi darsning tipini ko’rsating:",
        "options": [
          "Kombinatsion (aralash) dars",
          "Bilimlarni takrorlash va mustahkamlash darsi",
          "Yangi bilimlarni o’rganish darsi",
          "Umumiylashtirish darsi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eng qadimgi madaniy boyliklarning o‘rganishdagi manbalar qaysi javobda to‘liq o‘z aksini topgan?",
        "options": [
          "Xalq og‘zaki ijodi, buyuk adiblar, allomalarning asarlari, arxeo-logik qazilmalar natijasida topilgan ashyolar",
          "Etnografiya va arxeologiya materiallari",
          "Xalq og‘zaki ijodi materiallari",
          "Buyuk adiblar, allomalarning ijodiy merosi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Pedagogiya, ya’ni bola tarbiyasining fani demakdir». Pedagogikaga bu ta’rif kim tomonidan berilgan?",
        "options": [
          "Avloniy",
          "Shakuriy",
          "Hamza",
          "S.Ayniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Takrorlash bilimning asosidir”.Ushbu ibora qaysi pedagog olimga tegishli?",
        "options": [
          "Ushinskiy",
          "Shakuriy",
          "Hamza",
          "Komenskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Buyuk didaktika” asarining mullifi?",
        "options": [
          "Komenskiy",
          "Ushinskiy",
          "Suxomlinskiy",
          "Makarenko"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual, individual-guruhli, sinf-dars, leksiya-seminar va sinfdan tashqri, auditoriyadan tashqari, maktabdan tashqari ta’lim. Bular ta’limning asosiy …",
        "options": [
          "Shakllari",
          "Metodlari",
          "Tamoyillari",
          "Turlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Ta’lim beruvchi, rivojlantiruvchi va tarbiyalovchi” tushunchalari didaktikaning qaysi jihatini yoritadi?",
        "options": [
          "Ta’lim funktsiyalari",
          "Ta’lim natijasi",
          "Ta’lim vositalari",
          "Ta’lim metodlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "2017-2018 o‘quv yilidan boshlab O‘zbekistonda majburiy ta’lim necha yil deb belgilandi?",
        "options": [
          "11 yil",
          "12 yil",
          "10 yil",
          "9 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Pedagogika” atamasi ma’nosi nimani anglatadi?",
        "options": [
          "Bolani etaklayman",
          "Bolani o’qitaman",
          "Bolani tarbiyalayman",
          "Bolani tarbiyalayman va o’qitaman"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Donishnoma” asarining muallifi kim?",
        "options": [
          "Ibn Sino",
          "Al-Forobiy",
          "Al-Matrudiy",
          "Al-Farg’oniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Al-Xorazmiy bilishning qaysi usuliga asos soldi?",
        "options": [
          "Sinov-kuzatish va sinov usullariga",
          "Savol-javob usuliga",
          "Ko‘rgazmali tajriba usuliga",
          "Malaka va ko‘nikma shakllantirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Hibat ul-haqoyiq” asarining muallifi kim?",
        "options": [
          "Ahmad Yugnakiy",
          "Yusuf Xos Hojib",
          "Alisher Navoiy",
          "Kaykovus"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limni tashkil etishning darsdan tashqari shakllariga qaysi guruhdagilar kiradi?",
        "options": [
          "To‘garak, praktikum, seminar, konferensiya, maslahat, fakultativ mashg‘ulot, o‘quv ekskursiyalari, mustaqil uy ishlari",
          "Individual, individual-guruhli, sinf-dars, leksiya-seminar va sinfdan tashqari, auditoriyadan tashqari, maktabdan tashqari ta’lim.",
          "Ochiq darslar, interfaol darslar",
          "Differensiyalangan, individuallashtirilgan ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Men farzand tarbiyasida davlatni boshqarishdan ko‘ra chuqurroq mushohada, undan ham chuqurroq donishmandlik kerakligiga ishonch hosil qildim” – degan ibora muallifi kim?.",
        "options": [
          "Amir Temur",
          "Zahiriddin Muhammad Bobur",
          "Abdulla Avloniy",
          "Ulug‘bek"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quvchilarning bilim, ko‘nikma va malakalarini tekshirish quyidagi funksiyalarni bajaradi",
        "options": [
          "Nazorat qilish, o‘qitish, tarbiyalash, rivojlantirish",
          "Umuminsoniy, gumanistik, demokratik.",
          "Bilim berish, tarbiyalash, rivojlantirish",
          "O‘qitish, tashkil etish, tizimlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qadim zamonlardan mavjud bo‘lgan o‘qitishning eng qadimgi shakli – bu:",
        "options": [
          "Individual",
          "Sinf-dars",
          "Ma’ruza-seminar",
          "Laboratoriya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quvchilarning mayli, qiziqishi va qobiliyatini hisobga olib tash-kil etiladigan o‘quv faoliyatini tashkil etish shakli ... deb ataladi.",
        "options": [
          "Tabaqalashgan ta’lim",
          "Individual ta’lim",
          "Tushuntiruvchi-namoyish etuvchi ta’lim",
          "Muammoli ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Didaktika – bu ...",
        "options": [
          "Ta’lim nazariyasi",
          "Rivojlantirish nazariyasi",
          "Tarbiya nazariyasi",
          "Ta’lim va tarbiya nazariyalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Didaktika deb nimaga aytiladi?",
        "options": [
          "Didaktika bu o’qitish mazmuni, metodlari va tashkiliy shakllarini ilmiy asoslab beruvchi o’qitish pedagogik nazariyasi,pedagogikaning sohasi",
          "Didaktika bu shaxsning rivojlanishi qonuniyatlari haqidagi fandir",
          "Didaktika bu bola shaxsini shakllantirish qonuniyatlari haqidagi fan",
          "Didaktika tarbiyalovchi o’qitish jarayonini o’rganadi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Didaktikaning asosiy kategoriyalari qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Dars o’tish, bilim berish, o’qitish, malaka, ko’nikma, shakl, metod, vosita, natijalar",
          "Ta’lim berish, tarbiyalash, rivojlantirish",
          "Bilim, ko’nikma, malaka",
          "Rivojlantirish, mustahkamlash, takrorlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dars, praktikum, seminar, amaliy mashg‘ulot va konsultatsiyalar – bu:",
        "options": [
          "Ta’limni tashkil etish shakllari",
          "Ta’lim usullari",
          "Ta’lim qonuniyatlari va tamoyillari",
          "Ta’lim vositalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "DTSni bajarish qanday ta’lim muassasalari uchun majburiydir?",
        "options": [
          "O’zbekiston Respublikasidagi barcha ta’lim muassasalari uchun",
          "Davlat ta’lim muassasalari uchun",
          "Nodavlat ta’lim muassasalari uchun",
          "Xalq ta’limi hamda Oliy va o’rta maxsus ta’lim vazirliklari tasarrufidagi ta’lim muassasalari uchun"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jaloliddin Davoniyning “Axloqi Jaloliy” asari uch qismdan iborat. Uning birinchi qismi qaysi fanga taaluqli?",
        "options": [
          "Axloq ilmiga",
          "Ta’limga",
          "Oila tarbiyasiga",
          "Iqtisodiyotga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jahon ilmida “Muallimi soniy” (“Ikkinchi muallim”) nomiga musharraf bo’lgan donishmand kim ?",
        "options": [
          "Abu Nasr Farobiy",
          "Konfutsiy",
          "Imom Al-Buxoriy",
          "Imom At-Termiziy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Zardushtiylik axloqining asosi - bu ...",
        "options": [
          "Ezgu fikr, ezgu kalom, ezgu amal",
          "Ezgu niyat, ezgu kayfiyat, ezgu amal",
          "Falsafa, siyosat, e’tikod",
          "Saodat, e’tiqod , tafakkur"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Xalqimiz tayanchi - ajdodlarimiz qoldirgan ma’naviy merosning o‘zi bir hazina. Bu hazinadan oqilona foydalanish lozim» - iborasi Islom Karimovning qaysi asarida ta’kidlangan?",
        "options": [
          "Buyuk maqsad yo‘lidan og‘ishmaylik",
          "Tarixiy xotirasiz – kelajak yo‘q",
          "Amir Temur—fahrimiz, g‘ururimiz",
          "YUksak malakali mutaxassislar – tarakqiyot omili"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ibtidoiy jamiyat davrida kishilarning mehnat faoliyati uch guruhga bo’lingan. Bular qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Bolalar va o’smirlar, hayot va mehnatda to’la ishtirok etuvchilar, keksalar",
          "Go’daklar, bolalar va o’smirlar hamda keksalar",
          "Yoshlar, yigitlar, faxriylar",
          "O’smirlar, hayot va mehnatda to’la ishtirok etuvchilar, ayollar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi asarda dehqonlarga nisbatan: “O‘zing bular bilan aralashgin, qo‘shilgin, tilda yaxshi so‘zla, yuzungni ochiq tut”deya ta’rif berilgan",
        "options": [
          "Qutadg‘u bilig",
          "Hayrat ul-abror",
          "Mahbub ul-qulub",
          "Hibat ul-haqoyiq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijtimoiy institutlarga nimalar kiradi?",
        "options": [
          "Oila, ta’lim, madaniyat, din, mahalla",
          "Oliy o’quv yurtlari",
          "Korxonalar, viloyatlar, jamoa",
          "Tarbiya muassasalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagilardan qaysilari jazolash metodlariga kiradi?",
        "options": [
          "Tanbeh berish, uyaltirish, ogohlantirish",
          "O‘z-o‘zini baholash, uyaltirish, musobaqa",
          "Mashq , pedagoik talab, xayfsan berish",
          "Ma’ruza, o‘git, etik suhbat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijtimoiylashuv jarayoni nima?",
        "options": [
          "Ijtimoiylashuv shaxsning ijtimoiy taraqqiyot asosida belgilangan madaniyat, axloq, bilim, dunyoqarashlarni o’zida mujassamlashtirishdir",
          "Ijtimoiylashuv - bola shaxsini oiladagi tarbiyasini tushunamiz",
          "Ijtimoiylashuv - oila, mahalla",
          "Mahallada shakllanish, tarkib topish jarayonidir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Aniqlash va o‘lchash nima deb ataladi?",
        "options": [
          "Tekshirish",
          "Baholash",
          "Nazorat",
          "Hisobga olish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Imom al-Buxoriy to’plagan hadislar soni qanchani tashkil etadi?",
        "options": [
          "600 ming",
          "300 ming",
          "500 ming",
          "100 ming"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Innovatsiya” tushunchasining mazmunini aniqlang.",
        "options": [
          "Yangilanish, o’zgarishni amalga joriy etish, kiritish jarayoni va faoliyati",
          "Chambarchas bog’liq, butun yagona",
          "Fikrlash qobiliyati, tushunish",
          "Xamkorlikda o’qitish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inson kamolotida uch narsa- “irsiyat, muhit, tarbiya” muhim rol o’ynaydi degan fikrni ilk bor ilgari surgan olimning nomi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Beruniy",
          "Forobiy",
          "Ibn Sino",
          "Al-Motrudiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inson tarbiyasi va rivojlanishi haqidagi fan bu:",
        "options": [
          "Pedagogika",
          "Psixologiya",
          "Tarix",
          "Filosofiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Insonning biologik mohiyatini o’zida aks ettiruvchi tushuncha – bu:",
        "options": [
          "Individ",
          "Shaxs",
          "Sub’yekt",
          "Inson"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik taxlilning mohiyati nimadan iborat?",
        "options": [
          "Pedagogik jarayonning rivojlanish yo‘nalishi va sharoitini aniqlash, uni boshqarish xaqidagi takliflarni kiritish",
          "Maktab rahbari bilan o‘qituvchilari orasidagi qarama-qarshilik",
          "Pedagogning faoliyatilagi kamchiliklarni topish",
          "O‘quvchilarning o‘zlashtirishini oshirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Salomlashish va ruxsat so‘rash odobi, muloqot odobi, uxlash va yo‘l yurish odobi, suhbatlashish odobi, er-xotin odobi, tozalik qoi-dalari, mehmon kutsh odobi, ziyofat va ovqatlanish odobi, safar qoidalari” kabi qoidalar qaysi asarda bayon etilgan?",
        "options": [
          "“Odob as-solihin”",
          "“Axloqi Jaloliy”",
          "“Mahbub ul-qulub”",
          "«Turkiy guliston yoxud axloq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kaykovusning “Qobusnoma” asari necha bobdan iborat ?",
        "options": [
          "44 bob",
          "41bob",
          "39 bob",
          "37 bob"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi javobda Kadrlar tayyorlash milliy modelining tarkibiy qismlari to’g’ri ko’rsatilgan?",
        "options": [
          "Shaxs, davlat va jamiyat, uzluksiz ta’lim, fan, ishlab chiqarish",
          "Davlat va jamiyat, uzluksiz ta’lim, fan, madaniyat",
          "Oila, uzluksiz ta’lim, fan, madaniya, ishlab chiqarish",
          "Madaniyat, shaxs, davlat va jamiyat, ishlab chiqarish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi olim o’qitishni jismoniy mashqlar bilan qo’shib olib borish zarurligini ta’kidlaydi?",
        "options": [
          "Ibn Sino",
          "Beruniy",
          "Al-Farg’oniy",
          "Mahmud Qoshg’ariy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi olimning asarida pedagogika alohida fan maqomiga ega bo’ldi?",
        "options": [
          "Yan Amos Komenskiy «Buyuk didaktika»",
          "K.D.Ushinskiy “Xalqichilik g’oyasi”",
          "Yusuf Xos Hojib «Qutadg’u bilig.»",
          "A.Navoiy “Mahbub ul-qulub”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qanday ta’lim turlari uchun DTS joriy etiladi?",
        "options": [
          "Umumiy o’rta, o’rta maxsus, kasb-xunar, oliy ta’lim",
          "Maktabgacha, umumiy o’rta, o’rta maxsus, kasb-xunar, oliy ta’lim",
          "Umumiy o’rta, maktabdan tashqari ta’lim, oliy ta’lim",
          "Ta’lim turlarining barchasi uchun"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagilardan qaysi biri maktabda o’z-o’zini boshqarishning yuqori organi hisoblanadi?",
        "options": [
          "Maktab jamoasining konferentsiyasi",
          "Metodik kengash",
          "Maktab kengashi",
          "Pedagogik kengash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagilardan qaysi biri pedagogikaning asosiy tushunchalari (kategoriyalari) hisoblanadi?",
        "options": [
          "Tarbiya, ta’lim, ma’lumot",
          "Bilim, ko’nikma, malaka",
          "Irsiyat, muhit, tarbiya",
          "Etuklik, rivojlanish, tarbiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ko’nikma va malakalarni shakllantirishda asosiy sanaluvchi metod – bu:",
        "options": [
          "Mashq",
          "Namoyish",
          "Muammoli",
          "Didaktik o’yin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "I.G.Pestolotssining didaktikaga qo‘shgan hissasi qanday?",
        "options": [
          "Boshlang‘ich ta’lim metodikasining asosini yaratdi",
          "Rivojlantiruvchi o‘qitish nazariyasini aniqladi",
          "Muammoli ta’lim nazariyasini aniqladi",
          "Tabaqalashtirilgan ta’lim asosini yaratdi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qitish jarayoni nima?",
        "options": [
          "Bu ikki yoqlama boshqariladigan maqsadga muvofiq pedagogik jarayon",
          "Bu – bilim ,ko‘nikma, malaka hosil qilish jarayoni",
          "O‘quvchilarning mustaqil ishlarini boshqarishda o‘qituvchilarning rahbarligi",
          "O‘qituvchining tartiblangan faoliyati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogikaning obyekti – bu...",
        "options": [
          "Bola, inson",
          "Tarbiya jarayoni",
          "Pedagogik faoliyat",
          "Pedagogik aksiologiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Malaka – bu:",
        "options": [
          "Ongli xatti-harakatning avtomatlashtirilgan, bexato bajariladigan harakati",
          "Bilimlarni amalda bir necha bor qo’llanilishi orqali sodir bo’ladi",
          "Mehnat qilish jarayonida hosil bo’lgan ko’nikmalar natijasi hisoblanadi",
          "Insonni uzoq yillar davomida o’zlashtira olgan bilimlar majmuasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quv jarayonining umumiy maqsadlari va qonuniyatlariga binoan uning mazmuni, tashkiliy shakl va metodlarini belgilovchi boshlang‘ich qoidalar – bu.... .",
        "options": [
          "Ta’lim tamoyillari",
          "Ta’lim metodlari",
          "Ta’lim funksiyalari",
          "Ta’lim natijasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Internet va boshqa telekommunikatsion aloqa kanallari yordamida uzoqlashgan auditoriyalarni telekommunikatsion xolatda bir biri bilan bog‘lab ta’lim olish yuli – bu… .",
        "options": [
          "Video va audio konferensiyalar",
          "Maxsus Internet saytlar (onlayn resurslar)..",
          "Elektron pochta",
          "Internet orqali mustaqil ta’lim olish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Movarounnaxrda davlat arboblaridan kim XV asrda maktablar islohotini o’tkazdi?",
        "options": [
          "Ulug’bek",
          "Bobur",
          "Navoiy",
          "Husayn Boyqaro"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim mazmunini belgilovchi me’yoriy hujjatlarni belgilang.",
        "options": [
          "DTS, o‘quv rejasi, o‘quv dasturi, darslik",
          "DTS, o‘quv dasturi, sinf jurnali",
          "O‘quv rejasi, dars jadvali, DTS",
          "Darslik, o‘quv qo‘llanma, metodik qo‘llanma"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oila tarbiyasining asosiy yo’nalishlari – bu:",
        "options": [
          "Aqliy, axloqiy, estetik va mehnat tarbiyasi hisoblanadi",
          "Ahloqiy fazilat, vatanparvarlik his-tuyg’ularini shakllantirish hisoblanadi",
          "Bolalarni insonparvarlik umuminsoniy qadriyatlar ruhida tarbiyalashdan iborat",
          "Aqliy zakovat, insoniy fazilat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oliy ta’lim qanday bosqichlardan iborat?",
        "options": [
          "Bakalavriat va magistratura",
          "Magistratura",
          "Bakalavriat",
          "O’rta maxsus"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik olamiga savol-javob evristik suhbat metodini olib kirgan faylasuf olim kim?",
        "options": [
          "Suqrot",
          "Aflotun",
          "Arastu",
          "Demokrit"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik tajriba tashkil etilish sharoitiga ko’ra qanday guruhlarga bo’linadi?",
        "options": [
          "Tabiiy tajriba, laboratoriya tajribasi, tajriba ishi",
          "Matematik-statistik, evrestik, innavatsion tajriba",
          "Bolalarni ijodini o’rganish, statistika va boshqalar",
          "Laboratoriya tajribasi, amaliy tajribasi, anketa-sinov tajribasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogika tarixi qanday fan?",
        "options": [
          "Ijtimoiy",
          "Siyosiy",
          "Huquqiy",
          "Didaktik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogika fani Kontseptsiyasining asosiy mazmun–mohiyati nimadan iborat?",
        "options": [
          "Pedagogika fanining rivojlanish istiqbollarini belgilashdan",
          "Pedagogika fanining yangi yo’nalishlarini belgilashdan",
          "Pedagogika fani erishgan yutuqlarni targ’ib qilishdan",
          "Pedagogika fani erishgan yutuqlarni amaliyotda qo’llashdan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogika fani oldida turgan vazifalardan biri –",
        "options": [
          "Hamkorlik pedagogikasi va milliy pedagogika asoslarini yaratish",
          "Hamkorlik pedagogikasi asoslarini yaratish",
          "Avtoritar pedagogika asoslarini yaratish",
          "Milliy pedagogika asoslarini yaratish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogika fanining ilmiy-tadqiqot usullariga nimalar kiradi?",
        "options": [
          "Kuzatish usuli, suhbat usuli,bolalar ijodini o’rganish usuli, test o’rovnomalar usuli, eksperiment-tajriba usuli, statistika ma’lumotlarini tahlil qilish usuli, matematika va kibernetika usullari",
          "Hikoya usuli, suhbat usuli, ma’ruza usuli, tekshirish usul",
          "Induktiv usuli, deduktiv usuli, evrestik usuli",
          "Illyustrativ uslubi, demonstrativ usuli, laboratoriya usuli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogika fanlari tizimi qaysi javobda to‘g‘ri ko’rsatilgan?",
        "options": [
          "Umumiy pedagogika, maktabgacha ta’lim pedagogikasi, korrektsion (maxsus) pedagogika",
          "Umumiy pedagogika, ijtimoiy pedagogika, kasb ta’limi",
          "Maktabgacha ta’lim pedagogikasi, metodika, pedagogika tarixi, ta’limni boshqarish va boshqalar",
          "Pedagogik mahorat, ijtimoiy pedagogika, pedagogika tarixi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogikaning bosh masalasi",
        "options": [
          "Tarbiya",
          "Barkamol inson",
          "Ta’lim",
          "Ta’lim-tarbiya samaradorligini oshirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maktabda metodik ishlarning asosiy shakllari qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Metodbirlashmalar, metodik kengash, metodik operativ yordam, metod kabinet, ilg‘or tajriba maktabi, individual metodik ish, ochiq darslar",
          "Maktab kengashi, Pedagogik Kengash, Metodik Kengash",
          "O‘quv dasturi, o‘quv qo‘llanmalarini o‘rganish, metodik qayta ishlanmalar, mustaqil ta’lim",
          "Ilg‘or pedagogik tajribalarni to‘plash, psixologik-pedagogik va o‘quv-me-todik adabiyotlar, dasturlar va darsliklarni o‘rganish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’muriy va jamoatchilik boshqaruvi rahbarlarining faoliyatini jamoa manfaatiga qaratib, kasb malakasi darajasida qarorlarni qabul qilishga sharoit yaratadigan boshqarish tamoyilini ko‘rsating.",
        "options": [
          "Boshqarishning markazlashtirilgan va markazlashtirilmagan holatlari-ning ratsional uyg‘unligi tamoyili",
          "Yakka hokimlik bilan jamoatchilik boshqaruvining birligi tamoyili",
          "Pedagogik tizimni boshqarishni demokratiyalash va insonparvarlashti-rish tamoyili",
          "Ta’lim tizimini boshqarishda axborotlarning ob’ektivligi va to‘liq-ligi tamoyili"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sinf-dars tizimini birinchi bo’lib kim yaratgan?",
        "options": [
          "Yan Amos Komenskiy",
          "Ablulla Avloniy",
          "Fitrat",
          "K.D.Ushinskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Darsda o‘quvchilarning bilish faoliyatini tashkil etish shakllari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Ommaviy, guruhli, individual",
          "Sinf-dars, amaliy, ko‘rgazmali",
          "Ma’ruza-seminar, amaliy",
          "Konsultatsiya, instruktaj, konferensiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarbiya turlari qaysi variantda to’g’ri ko’rsatilgan?",
        "options": [
          "Aqliy, jismoniy, ahloqiy, mehnat, nafosat, ekologik, etik, iqtisodiy, huquqiy",
          "Matematik tarbiya,ijtimoiy tarbiya, jamoatchilik tarbiyasi",
          "Oila tarbiyasi, ahloqiy tarbiya, estetik tarbiya va boshqa",
          "Iqtisodiy tarbiya, axloqiy tarbiya va jismoniy tarbiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kim pedagogika tarixida ta’lim – tarbiyaga birinchi bo’lib ta’rif bergan?",
        "options": [
          "Forobiy",
          "Al-Xorazmiy",
          "Ibn Sino",
          "Beruniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Turkiy guliston yoxud axloq” asarining muallifi kim?",
        "options": [
          "AbdullaAvloniy",
          "Abdurauf Fitrat",
          "Hamza",
          "Forobiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim nazariyasi nimani o’rganadi?",
        "options": [
          "Ta’lim jarayonlarini, ta’lim mazmunini, ta’lim metodlari, shakllari va vositalari o’z ichiga oladi",
          "Ta’lim jarayonining mohiyatini o’z ichiga oladi",
          "Ta’lim metodlari, shakllari va vositalarini o’z ichiga oladi",
          "Ta’lim qonuniyatlari va tamoyillarini o’z ichiga oladi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning ko‘rgazmali metodlarini ko‘rsating.",
        "options": [
          "Demonstratsiya, illyustartsiya",
          "Ma’ruza, hikoya, suhbat",
          "Lobarotoriya, mashq, tushuntirish",
          "Mashqlar, amaliy ishlar, didaktik o‘yinlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim funktsiyalari qaysi javobda to’g’ri ko’rsatilgan?",
        "options": [
          "Bilim berish,tarbiyalash,rivojlantirish",
          "Bilim, ko’nikma, malaka hosil qilish",
          "O’quv fanlari mazmunini o’zlashtirib olish",
          "Tevarak—atrofdagi voqealarni tushuntirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning amaliy metodlariga nimalar kirishini aniqlang.",
        "options": [
          "Mashq qilish, laboratoriya va amaliy ishlar",
          "Illyustratsiya, namoyish qilib ko’rsatilishi (demonstartsiya)",
          "Hikoya, tushuntirish, suhbat, ma’ruza",
          "Test, algoritmlash, qisman izlanish, induktsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogikaning qaysi sohasi shaxsi va faoliyatida nuqsoni bor bolalarni o‘qitish va tarbiyalash bilan shug‘ullanadi?",
        "options": [
          "Korrektsion pedagogika",
          "Maktab pedagogikasi",
          "Xalq pedagogikasi",
          "Kasbiy pedagogika"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning qanday turlari uchun Davlat talablari (DT) joriy etiladi?",
        "options": [
          "Maktabgacha, maktabdan tashqari, oliy o’quv yurtidan keyingi, malaka oshirish va qayta tayyorlash",
          "Ta’lim turlarining barchasi uchun",
          "Maktabgacha, malaka oshirish va qayta tayyorlash",
          "Faqat malaka oshirish va qayta tayyorlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning quyidagi metodlaridan qaysi biri ko’rsatmalilik metodining asosiy tarkibini tashkil etadi?",
        "options": [
          "Namoyish etish, tasvirlash, ekskursiya",
          "Mashq qilish, laboratoriya va grafik ishlar",
          "Kuzatish, namoyish qilib ko’rsatilishi (demonstratsiya)va illyustratsiya, darslik va kitob bilan ishlash",
          "Sxema va chizmalar tayyorlash, tablitsalar, grafiklar va diagrammalar tuzish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning og’zaki metodlariga nimalar kirishini ko’rsating.",
        "options": [
          "Hikoya, tushuntirish, suhbat, ma’ruza",
          "Illyustratsiya, namoyish qilib ko’rsatilishi (demonstartsiya)",
          "Mashq qilish, laboratoriya va amaliy ishlar",
          "Test, algoritmlash, qisman izlanish, induktsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’zbekiston Respublikasi Konstitutsiyasining qaysi modallarida oila haqida fikr bayon etiltan.",
        "options": [
          "63, 64, 65, 66 moddalar",
          "63, 64 moddalar",
          "65, 66 moddalar",
          "61, 62, 63, 64 moddalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’zbekistonda mustaqillik e’lon qilingandan so’ng dastlabki “Ta’lim to’g’risida”gi qonun qachon qabul qilingan?",
        "options": [
          "1992-yil",
          "1991-yil",
          "1993-yil",
          "1995-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’zbekistonda uzluksiz ta’lim tizimining faoliyat olib borishi qay tarzda ta’minlanadi?",
        "options": [
          "Kadrlar tayyorlash milliy modelini amalga oshirish jarayonida",
          "Davlat ta’lim standartlari va davlat talablari asosida",
          "Umumiy o’rta ta’lim standartlari asosida",
          "Ilg’or pedagogik texnologiyalar va axborot texnologiyalari asosida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchining suhbati ta’limning qaysi metodiga kiritiladi?",
        "options": [
          "Og’zaki",
          "Amaliy",
          "Ko’rgazmali",
          "Mashq qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quv dasturida nimalar ko’rsatilgan?",
        "options": [
          "Har bir o’quv predmetining (fanining) mazmuni, o’quv yillari bo’yicha programma materiallarining (fanining) mazmuni va mavzularining tahminiy soatlari",
          "O’quv yilining strukturasi",
          "O’quv predmetining (faniga) ajratilgan haftalik soatlar (darslar) miqdori",
          "O’quvchi shaxsini tarbiyalash maqsadi va vazifalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quvchi faoliyatining asosiy turi qaysi javobda to’g’ri berilgan?",
        "options": [
          "O’yin, o’qish",
          "O’qish, mehnat",
          "Mehnat, o’yin",
          "Muomala, mehnat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quvchilarga bilimni tartibli bayon qilish jarayoni pedagogika fanida qanday nomlanadi?",
        "options": [
          "Ta’lim",
          "Faoliyat",
          "Bilish, anglash",
          "Ma’lumot"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quvchilarni mehnatga layoqatli va mehnatsevar qilib tarbiyalashda ko’proq nimalarga e’tibor bermoq lozim?",
        "options": [
          "Mehnatda mashq qildirishga",
          "Ahloqiy tarbiyaga",
          "Ishbilarmon kishini tarbiyalashga",
          "Iqtisodiy tarbiyaga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kommunikativ qobiliyatni shakllantiruvchi asosiy yo’nalishlarni belgilang?",
        "options": [
          "Ishontirish, ta’sir etish, taqlid qilish",
          "Mimika va pantomimika",
          "O’z sohasi bo’yicha chuqur bilimga ega bo’lish",
          "Nutq madaniyatiga doir bilimlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quvchilarning o’quv tafakkurini shakllantirish nechta darajadan iborat?",
        "options": [
          "5 daraja",
          "2 daraja",
          "3 daraja",
          "4 daraja"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quvchining iste’dod va qobiliyatining rivojlanishi nimalarga bog’liq?",
        "options": [
          "Faoliyatning turlariga, aloqa va muloqotga, ta’lim-tarbiyaning pedagogik jihatdan muvofiqligiga",
          "O’qitish va tarbiyalash metodlariga bog’liq",
          "Tarbiyaviy tug’ma nishonlarga bog’liq;",
          "O’zlashtirgan bilimlarning miqdori va hajmiga bog’liq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hadis ilmida “Sahih” yo’nalishining asoschisi kim?",
        "options": [
          "Imom al-Buxoriy",
          "Abu Iso at-Termiziy",
          "Imom Ahmad an-Nasoiy",
          "Imom Abu Dovud Sulaymon Sijistoniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxs rivojlanishiga ta’sir etuvchi omillar nechta?",
        "options": [
          "3ta",
          "2ta",
          "4ta",
          "5ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxs rivojlanishiga ta’sir etuvchi omillarni ko’rsating.",
        "options": [
          "Irsiyat, muhit, tarbiya",
          "Tarbiya, ta’lim, ma’lumot",
          "Bilim, ko’nikma, malaka",
          "Faoliyat, jamoat, axborot"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsning rivojlanishi deganda nima tushuniladi?",
        "options": [
          "Ijtimoiy tirik mavjudot sifatida insonning butun hayoti davomida bo’ladigan miqdor va sifat o’zgarishlari",
          "Organizmning sifat jihatdan o’zgarishi",
          "Tarbiya va rivojlanish natijasida insonning ijtimoiylanuvchanligi",
          "Organizmning miqdoriy o’zgarib borishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ekologik tarbiyaning asosiy maqsadi va vazifalariga nimalar kiradi?",
        "options": [
          "Tevarak atrofdagi tabiiy muhitga ehtiyotkorlik bilan munosabatda bo’lishga o’rgatish, tabiatga, insonga, hayvonlarga muhabbatni tarbiyalash, tabiatni muhofaza qilish sohasidagi asosiy tushunchalarni bilish",
          "Umuminsoniy madaniyat va milliy qadriyatlarga jalb qilish",
          "Baxtli shaxsni tarbiyalash",
          "Hukuqiy davlat qonunlari va huquklarni hurmat qilishni tarbiyalash, o’z mamlakatining ramzlarini hurmatlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Estetik tarbiyaning asosiy vazifalarini ko’rsating:",
        "options": [
          "Estetik ehtiyojlarni tarbiyalash, idrokni va his-tuyg’uni, estetik tushuncha, did, baholash va fikrlash, badiiy va musiqiy qobilyatlarni rivojlantirish",
          "Axloqiy did va ongni, xulq-atvor ko’nikmalari va odatlarni rivojlantirish umuminsoniy madaniyat va milliy qadriyatlarga hurmatni tarbiyalash",
          "Jismoniy rivojlanish sog’liqni mustahkamlash, tozalik-sog’liq tarbiyasi",
          "Atrof-muhitga ehtiyotkorlik munosabatini, tabiatga muhabbat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ya.A.Komenskiyning “Buyuk didaktika” asari nechanchi yilda yozilgan?",
        "options": [
          "1632-yil",
          "1630-yil",
          "1631-yil",
          "1700-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yangi usul maktablari uchun birinchi bo’lib “Ustodi avval” alifbosini kim yaratgan?",
        "options": [
          "Said Rasul Said Azizov",
          "Behbudiy",
          "Hamza",
          "Shakuriy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik vaziyatning faoliyatini mohirlik bilan boshqarish – bu:",
        "options": [
          "Pedagogik mahoratdir",
          "Pedagogik vazifadir",
          "Pedagogik texnikadir",
          "Pedagogik vaziyatdir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Avesto”da bolalarni o‘qitish va tarbiyalash qoidalari to‘g‘ri ko‘rsatilgan javobni belgilang?",
        "options": [
          "Diniy va axloqiy tarbiya, jismoniy tarbiya, o‘qish va yozishga o‘rgatish.",
          "Er, suv, havo, osmon to‘g‘risida bilimlarni bilish.",
          "YAxshi fikr, yaxshi so‘z, yaxshi amallarga ishonish.",
          "Axloq-odob, ma’rifatli, diyonatli, mehnatsevar insonni shakllantirish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Tarbiya bizlar uchun yo hayot- yo mamot, yo najot-yo halokat, yo saodat, yo falokat masalasidir”. Yuqoridagi fikrlar kimning fikrlari?",
        "options": [
          "Abdulla Avloniy",
          "Alisher Navoiy",
          "Amir Temur",
          "Abu Ali Ibn Sino"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Kadrlar tayyorlash milliy dasturi” O‘zbekiston Respublikasi Oliy majlisi IX sessiyasida qachon qabul qilingan?",
        "options": [
          "1997 yil 29 avgust",
          "1998 yil 28 avgust",
          "1992 yil 29 avgust",
          "1991 yil 1 sentyabr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Ustoz shogirdlariga katta zulm ham, haddan tashqari ko‘ngilchanlik ham qilmasligi lozim”. Ushbu fikr qaysi allomaga tegishli?",
        "options": [
          "Abu Nasr Forobiy",
          "Alisher Navoiy",
          "Abu Rayhon Beruniy",
          "Abu Ali ibn Sino"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Inson kamolotida uch narsa – irsiyat, muhit, tarbiya muhim rol o‘ynaydi» degan fikrlar muallifi kim?",
        "options": [
          "Beruniy",
          "Farobiy",
          "Ibn Sino",
          "Yusuf Xos Xojib"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nutq texnikasi bo‘yicha ishlab chiqilgan mashqlar turkumiga quyidagilar kiradi:",
        "options": [
          "Nafas olish, ovoz o‘zgarishi, ravon nutq",
          "Yozma va og‘zaki nutq, ichki nutq",
          "Ichki nutq, tashqi nutq, dialogik va monologik nutq",
          "Nutq organlari, nutq apparati, nutq odobi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Alisher Navoiyning qaysi asarida ustoz-murabbiy haqida noyob fikrlar bayon etilgan?",
        "options": [
          "“Mahbub ul-qulub”",
          "«Qush tili»",
          "“Sabbai-Sayyor”",
          "«Hayrat ul abror»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Antik davr mutafakkirlaridan kimlar pedagogning kasb mahorati va notiqlik san'ati haqida fikr bildirgan?",
        "options": [
          "Sokrat, Platon, Demosfen.",
          "Aristotel, Gegel, Isey.",
          "Sitseron, Esxil, Forobiy.",
          "Farg‘oniy, Isokrad, Giperid."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilim deganda nima tushuniladi?",
        "options": [
          "Tasavvurlar, tushunchalar va ma’lumotlar",
          "Dialektik dunyoqarash, bilimga qiziqish va shaxsiy fazilatlar",
          "Insonning dunyoqarashi, hodisa va voqealarga bo‘lgan munosabati",
          "Hissiyot, qobiliyat va mahorat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Boshqa odamlarning psixik holatlarini tushunish va ularga hamdardlik bildirish qobiliyatning qaysi turiga kiradi?",
        "options": [
          "Empatik",
          "Perseptiv",
          "Didaktik",
          "Kommunikativ"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘rganilayotgan materialni egallashga qaratilgan turli didaktik vazifalarni hal etish bo‘yicha o‘qituvchining o‘rgatuvchi ishi va o‘quvchilarning o‘quv-bilish faoliyatini tashkil etish usullarsh nima deb ataladi?",
        "options": [
          "Ta’lim metodlari",
          "Ta’lim jarayoni",
          "Ta’lim tamoyillari",
          "Ta’lim shakllari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dastlab texnologiya tushunchasi fanga nechanchi yilda kirib kelgan ?",
        "options": [
          "1900 yilda",
          "1725 yilda",
          "1872 yilda",
          "1772 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yosh o‘qituvchi o‘zining ish faoliyatida qanday psixologik to‘siqqa duch keladi?",
        "options": [
          "Ijtimoiy, sinfdan qo‘rqish, o‘quvchi va o‘qituvchi o‘rtasida oraliqning hosil bo‘lishi",
          "Yolg‘on xushomad qilish, kasbga bo‘lgan salbiy munosabat",
          "Do‘stlik, chiqishib hamjihat bo‘lib ishlash",
          "Mensimaslik, buyruq, ayblash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jismoniy tarbiyani rivojlantirish haqida birinchi bo‘lib fikr yuritgan olim ?",
        "options": [
          "Ibn Sino",
          "Forobiy",
          "Beruniy",
          "Komenskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "U yo‘q joyda mehnat unumi ham past bo‘ladi, asablar tez charchaydi, sog‘likka putur etadi bu...?",
        "options": [
          "O‘qituvchining kun tartibi",
          "O‘qituvchining pedagogik mahorati",
          "O‘qituvchi mehnatini ilmiy asosda tashkil etish",
          "Ta’lim va tarbiyaning o‘zaro aloqadorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘z fikrlarini, kayfiyatini, holatini, hissiyotini, qosh, ko‘z va yuz muskullarining harakati bilan bayon qilish san’ati... bu?",
        "options": [
          "O‘qituvchining mimikasi",
          "O‘qituvchining aktyorlik san’ati",
          "O‘qituvchining pantomimikasi",
          "O‘qituvchining notiqligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "... ta’lim – jismoniy, intellektual, ijtimoiy, hissiy, lisoniy va boshqa xususiyatlaridan qat'i nazar, har bir insonga umumta’lim muassaslarida o'qish imkoniyatini beradigan ta'lim shakli. To‘g‘risini toping.",
        "options": [
          "Inklyuziv",
          "Integratsiyalangan",
          "Differensiyalangan",
          "Ixtisoslashtirilgan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Komenskiy grammatik, fizik, matematik, etik, dialektik, ritorik degan olti xil nom bilan nimani atadi?",
        "options": [
          "Lotin maktabining sinflarini",
          "Ona maktabining sinflarini",
          "Ona tili maktabi ning sinflarini",
          "Akademiyaning sinflarini"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim jarayonida o’qituvchining pedagogik mahoratini na­mo­yon etuvchi asosiy vositani belgilang?",
        "options": [
          "O’quvchining nazariy hamda amaliy faoliyatida erishadigan yutuqlari va ijobiy natijalari",
          "Standart va nostandart mashg’ulotlarni o’tkazish",
          "Ta’lim beruvchi va ta’lim oluvchining o’zaro faoliyati",
          "O’quv materiallarini nazariy va amaliy jihatdan puxta o’zlashtirishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ilg‘or pedagogik tajribani o‘rganishning asosiy bosqichlarini aniqlang?",
        "options": [
          "Tajriba o‘rganishning maqsadi va vazifasini tuzish, dolzarb mavzuni aniqlash, maktab amaliyoti va pedagogik fanning dolzarb masalalarini hal etishda usta-o‘qituvchining erishgan yutuqlarini aniqlash, materiallarni to‘plash, tahlil, muomala, xulosa",
          "Shaxsni bilish, axborot almashish, faoliyatni tashkil etish",
          "Modelni tuzish, muomalani boshqarish, muomalani tahlil etish",
          "Mustahkam (nazariy) va amaliy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Husnixatga doir dastlabki kitobni kim yozgan?",
        "options": [
          "Munis Xorazmiy - “Savodi ta’lim”",
          "Muhammad Sodiq Qoshg‘ariy - “Odob as-solihin”",
          "Jaloliddin Davoniy - “Axloqiy Jaloliy”",
          "So‘fi Olloyor - “Sabot ul-ojizin”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkistonda XIX asrning 2-yarmida mavjud bo`lgan madrasalarda ta`lim necha bosqichda bo`lgan?",
        "options": [
          "3 bosqich",
          "4 bosqich",
          "2 bosqich",
          "5 bosqich"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ushinskiyning pedagogik nazariyasidagi eng asosiy g‘oya nima?",
        "options": [
          "Tarbiyaning xalqchilligi",
          "Tarbiyaning milliyligi",
          "Tarbiyaning umumiyligi",
          "Tarbiyaning dunyoviyligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiy qavmlarning urf-odatlari, an’analari, odob-axloqlari hamda ta’lim-tarbiyaga oid tajribalari ifodalangan maqollar mavjud asarni toping.",
        "options": [
          "“Devonu lug‘atit turk”",
          "“Qutadg‘u bilig”",
          "«Hibatul haqoyiq»",
          "«Qobusnoma»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Toshkentda dastlabki rus maktabi qachon ochilgan?",
        "options": [
          "1886-yilda",
          "1913-yilda",
          "1883-yilda",
          "1903-yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maktab sizni inson qilur, maktab hayot ehson qilur, maktab g`ami vayron qilur, hayrat qilib o`qing o`g’lon. Ushbu she`rining muallifi kim?",
        "options": [
          "Avloniy",
          "Ibrat",
          "Shakuriy",
          "Behbudiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Arablar ulkan hududda halifalik davlatini barpo etish natijasida qaysi fanni taraqqiy etishga o`z xissalarini qo`shgan?",
        "options": [
          "Geografiya",
          "Kimyo",
          "Siyosatshunoslik",
          "Zoologiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Arifmetik 4 amalni(,okbi, qo’shish, ayirish, ko‘payti rish) o‘ylab topgan antropologik tipni aniqlang.",
        "options": [
          "Sinantroplar",
          "Pitekantroplar",
          "Neandertallar",
          "Kromanonlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nechanchi asrda madrasalar tuzila boshlangan?",
        "options": [
          "X arsda",
          "XI arsda",
          "XIII asrda",
          "XII asrda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Islom dini ta`limotida “Qur`oni Karimdan” keying asosiy manbaa nima hisoblanadi?",
        "options": [
          "Hadis",
          "Kalom ilmi",
          "Fiqh",
          "Tariqat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Ash-Shamoil an-Nabaviya” asarining muallifi kim?",
        "options": [
          "Termiziy",
          "Buxoriy",
          "Farobiy",
          "Beruniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "So`fiylik inson ma`naviy-ruhiy komilikka erishish yo`lida quyidagi to`rt bosqich o`tishi kerak deb hisoblashgan. Bular…",
        "options": [
          "Shariat, tariqot, ma`rifat, haqiqat",
          "Ilm,bilim, din, inson",
          "Ilm, shariat, din, haqiqat",
          "Shariat, ma`rifat, inson, olam"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘rta Osiyoda musulmon maktablari tizimi qaysi tarixiy davrda vujudga keldi,",
        "options": [
          "VII-XII asrlarda",
          "VII asrgacha",
          "XIV-XVII asrlarda",
          "XVII-XIX asrlarda."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogning kommunikativ madaniyati nima?",
        "options": [
          "Pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan domiy intilishi",
          "Pedagogning dunyoga, pedagog voqelikka va pedagogik jarayonga bo'lgan intelektual va hissiy munosabati",
          "O'qituvchining ob'ektivlik mezoni, uning ma'niviy tayyorgarlik darajasi",
          "Pedagogik jarayonning asosiy birligi, o'ziga xos tizimidir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik muloqot nima?",
        "options": [
          "Ta'lim oluvchilarning maqsadlari hamda ularning birgalikdagi faoliyatlari mazmunidan kelib chiqadigan o'zaro aloqalarni o'rnatish va rivojlantirish",
          "Pedagogik faoliyat munosabatlarini tashkil etadi",
          "Bir-birini anglash va qo'llab-quvvatlashni tashkil etishdagi ko'p qirrali jarayoni",
          "Pedagogik jarayonning asosiy birligi, o'ziga xos tizimidir."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchi tomonidan bo‘lajak darsni samarali tashkil etilishining turli variantlarini tanlab olib baholash va qabul qilingan mezonlarga muvofiq darsni tashkil etishning eng ma’qul variantini tanlab olish nima deb ataladi?",
        "options": [
          "Bashoratlash",
          "Loyihalash",
          "Rejalashtirish",
          "Konspektlashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarbiyalanuvchilarni ma’lum bir maqsadga muvofiq tar­biyalash uchun mo‘ljalga olish san’ati nima deb ataladi?",
        "options": [
          "O’qituvchinng tarbiyachilik mahorati",
          "Texnologik tizim",
          "Kreativ tizim",
          "Taqiqotchilik madaniyati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ayrim so‘z bo‘g‘inlarining aytilish muddati va to‘xta­lishi gapirishdagi to‘liq davomiylik, nutq va ifodalarning navbat bilan o‘z o‘rnida ishlatilishi nima deb ataladi?",
        "options": [
          "Ritmika",
          "Diktsiya",
          "Diapazon",
          "Tembr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchi ongida hosil bo‘ladigan, hali amalga oshmagan til ele­ment­laridan tashkil topgan, kishining og‘iz ochmasdan fikrlashi, mulo­haza yuritishi, o‘ylashi nima deb ataladi?",
        "options": [
          "Ichki nutq",
          "Tashqi nutq",
          "Oraliq nutq",
          "Yakuniy nutq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tildagi mavjud ifoda vositalaridan foydalangan holda real­likka aylangan fikr nima deb ataladi?",
        "options": [
          "Nutq",
          "Fikr",
          "Monolog",
          "Dialog"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Gaplar o‘rtasida fikriy bog‘lanish, izchillik yo‘qolishi oqituvchi nutqida qanday kamchikini keltirib chiqaradi?",
        "options": [
          "Nutqning mantiqiyligi",
          "Nutqning tozaligi",
          "Nutqning to‘g‘riligi",
          "Nutqning ifodaliligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ikki tomonlama bir-biriga ta’sir etish nima deb ataladi?",
        "options": [
          "Interaktiv",
          "Kommunikativ",
          "Perseptiv",
          "Gnostik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchi tomonidan sinf jamoasi bilan bo‘lajak muloqotni modellashtirish muloqot tuzilishining qaysi bosqichiga tegishli?",
        "options": [
          "Prognostik",
          "Kommunikativ",
          "Pedagogik",
          "Natijaviy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mazmunan o‘qituvchining nutqida, ma’ruzasida, dialog, monolog va deklama­tsiyalarida o‘z ifodasini topadigan ta’lim vositasi nima deb ataladi?",
        "options": [
          "So’z",
          "Rasm",
          "Model",
          "Maket"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchining vaziyatni va o‘quvchilar xatti-harakatini chuqur idrok qilib tez va haqqoniy baholashi nima deb ataladi?",
        "options": [
          "Pedagogik impro­vizatsiya",
          "Pedagogik empatiya",
          "Pedagogik simpatiya",
          "Akmeologiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchining pedagogik faoliyatning turli shakllaridan, sinf jamoasining shakllanib ulgurgan darajasidan, muloqotni boshqarish tamoyillaridan kelib chiqadigan vazifasini belgilang",
        "options": [
          "Kommunikativ vazifa",
          "Ta’limiy vazifa",
          "Ijodiy vazifa",
          "Kreativ vazifa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mazkur jarayon o‘qituvchi pedagogik faoliyati jarayonida nazariy va amaliy tajribalar asosida, o‘z – o‘zini kasbiy jihatdan nazorat qilib borishini nazarda tutadi. Bu yerda gap reflektsiyaning qaysi ko’rinishi haqida bormoqda?",
        "options": [
          "O’z-o’zini nazorat qilish",
          "O‘z – o‘zini belgilash",
          "O‘z – o‘zini rivojlantirish",
          "O‘z–o‘zini bilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mazkur jarayon o‘qituvchining o‘z faoliyati va unda o‘zi­ga nisbatan «metapozitsiya» (noaniq pozitsiyada)da turib, o‘ziga tash­qa­ridan qarash, o‘zini kuzatish malakasini ko‘zda tutadi. Bu yerda gap reflektsiyaning qaysi ko’rinishi haqida bormoqda?",
        "options": [
          "O’z-o’zini anglash",
          "O‘z – o‘zini belgilash",
          "O‘z – o‘zini rivojlantirish",
          "O‘z–o‘zini bilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchi perseptiv qobiliyatlariga nimalar kiradi?",
        "options": [
          "Diqqat, kuzatuvchanlik, xayol",
          "Nafas olish, ovozni boshqarish, nutq tempi",
          "Mimika, pantomimika",
          "O‘z–o‘zini boshqarish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchi-tarbiyachining pedagogik metod, usul va vositalarni rejali va kutilgan iatijalarga erishishga imkon beradigan, shaxsga va jamoaga aniq tasir ko‘rsatadigan jihatlarini tanlash tizimi nima deyiladi?",
        "options": [
          "Texnologik tizim",
          "Metodik tizim",
          "Ilmiy tizim",
          "Tarbiya tizim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nutqning mazmundorligini, ma’noli ekanligini bildirib, nutq oqimidagi so‘zlarning o‘zgarishi, mazmunan bir-biriga birikishini ifodalovchi xilma-xil qoidalar yig‘indisi bu …?",
        "options": [
          "Grammatik norma",
          "Nutqning ta’sirchanligi",
          "Mantiqiylik",
          "Nutq tozaligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Milliy-ma’naviy qadriyatlar asosida o‘quvchi ma’naviy madaniyatini shakllantirishda muhim omil nima?",
        "options": [
          "Ijodkorlik",
          "Tashkilotchilik",
          "Tashabbuskorlik",
          "Muomala"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchining o‘z fanini va boshqa fanlarni chuqur bilishi, o‘zlashtirishi va amaliyotda namoyon etishi bu…",
        "options": [
          "O’qituvchining bilish qobiliyati",
          "O’qituvchining mahorati",
          "Notiqlik san’ati",
          "Pedagogik texnika"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchining o‘quv–tarbiyaviy faoliyatni puxta rejalashtirishi asosida yuzaga keladigan kasbiy pedagogik vaziyat bosqichlarini oldindan ko‘ra olishi pedagogik qobiliyatning qaysi turiga kiradi?",
        "options": [
          "Konstruktiv qobiliyat",
          "Tashkilotchilik qobiliyati",
          "Bilish qobiliyati",
          "Kommunikativ qobiliyati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "BMTning ta’lim, fan va madaniyat masalalri bilan shug‘ullanuvchi tashkilot nomini ko‘rsating.",
        "options": [
          "YUNESKO",
          "YUNISEF",
          "BMT",
          "OBSE"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchi mehnatiga ta’sir qiluvchi hamda ijtimoiy xusu­siyatga ega bo‘lgan muhim yo‘nalishlaridan biri ...",
        "options": [
          "O‘qituvchining obyektiv – shaxsiy xususiyatlaridir.",
          "O‘qituvchining kasbiy mahoratidir.",
          "Mutaxassislikka oid bilimlarni chuqur o‘zlashtirishidir.",
          "Ta’lim va tarbiya birligini ta’minlashdir."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchilar o‘quvchilar bilan dars jarayonida qanday munosabatda bo‘lishi kerak?",
        "options": [
          "O‘qituvchi va o‘quvchi orasida hamkorlik va ishonch",
          "Ular orasida do‘stona muloqotda bo‘lish",
          "Bir-biriga e’tiborsiz bo‘lishi",
          "O‘qituvchi va o‘quvchilar orasida masofa bo‘lishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nutqning toza bo‘lishiga xalaqit beruvchi unsurlarni belgilang?",
        "options": [
          "Dialektizm va varvarizm",
          "Ovoz tembri va balandligi",
          "Rezonator va diapazon",
          "Orfoepik va intonatsiya."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Notiqlik san’ati tarixiga bag‘ishlangan “Brut”, “Notiqlik san’ati namoyondalari”, “Notiq”, “Notiqlik haqida” kabi asarlar mual­lifi kim?",
        "options": [
          "Sitseron",
          "Demosfen",
          "Giperid",
          "Isokrat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Tarbiyachi tashkil etishni, yurishni, hazillashishni, quvnoq yoki jahldor bo‘lishni bilishi lozim, u o‘zini shunday tutishi kerakki, uning har bir harakati, yurish-turishi, kiyinishi bolalarni tarbiyalasin” mazkur fikr muallifi qaysi qatorda to’g’ri ko’rsatilgan",
        "options": [
          "A.S. Makarenko",
          "V.A. Suxomlinskiy",
          "K.D. Ushinskiy",
          "Ya.A. Komenskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "So‘z va nutq yordamida psixologik ta’sir ko‘rsatish – bu...",
        "options": [
          "Verbal ta’sir.",
          "Paralingvistik ta’sir.",
          "Noverbal ta’sir.",
          "Barcha javoblar to‘g‘ri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "So’zlarning aniq talaffuz qilinishi nima deyiladi?",
        "options": [
          "Diksiya",
          "Tembr",
          "Rezonator",
          "Diapazon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quvchilarga doimo tarbiyaviy ta’sir etuvchi ota-onalar, tarbiyachilar, sinf jamoasi qanday nomlanadi?",
        "options": [
          "O‘qituvchi faoliyatining subyektlari.",
          "O‘qituvchining kasbiy bilimlari.",
          "O‘qituvchi faoliyatining obyektlari.",
          "Tarbiya jarayonining vositalari."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘z fikrlarini, kayfiyatini, holatini, hissiyotini, qosh, ko‘z va yuz muskullarining harakati bilan bayon qilish san’ati nima deb ataladi?",
        "options": [
          "O‘qituvchining mimikasi.",
          "O‘qituvchining notiqligi.",
          "O‘qituvchining pantomimikasi.",
          "O‘qituvchining aktyorlik sa’nati."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchining ijodiy mehnati jarayonida erishiladigan nati­jalarining rivojlanish bosqichlarini belgilang?",
        "options": [
          "Iqtidor, iste’dod, daholik.",
          "Notiqlik san’ati va pedagogik mahorat.",
          "Kasbiy bilim, ko‘nikma va malakalar.",
          "Pedagogik mahorat, pedagogik qobiliyat."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogikada dilkash insonlar sifatida e’tirof etiladigan o‘qituvchilarni belgilang?",
        "options": [
          "Ekstravert tipdagi shaxslar.",
          "Quvnoq, xushchaqchaq kishilar.",
          "Intravert toifasidagi shaxslar.",
          "Melanxolik insonlar."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchining pedagogik nazokatga erishish yo‘llari?",
        "options": [
          "O‘zini tuta bilishi, sabr-toqat, sezgirlik, vijdon, oriyat kabi xususiyatlarni o‘zida mujassamlashtirishi bilan.",
          "Pedagogik texnikani bilishi asosida o‘qituvchi pedagogik mahoratida sayqallanadigan tuyg‘ulari",
          "Milliy-ma’naviy qadriyatlarimizni chuqur o‘rgangan holda o‘quvchilar bilan yaxshi muomalada bo‘lishi.",
          "O‘qituvchi ijodiy faoliyatida bilimlarni o‘zlashtirishi, notiqlik san’ati va qobiliyatini shakllantirishi orqali."
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Mudarrislarning barcha qobiliyatlaridan eng yaxshisi nutq qobiliyatidir” so‘zlari qaysi alloma asarida berilgan?",
        "options": [
          "Kaykovus “Qobusnoma”.",
          "Alisher Navoiy: “Mahbub ul-qulub”.",
          "Shayx Sa’diy: “Guliston”.",
          "Forobiy: “Fozil odamlar shahri”."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsning bilimlar tizimiga, dunyoqarashiga, xulq-atvoriga, hatti-harakatiga ta’sir eta olish va uni qisman o‘zgartirish nima?",
        "options": [
          "Ishontirish",
          "Empatiya",
          "Relaksatsiya",
          "Kreativlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual pedagogik texnikani shakllantirishda nimalar e’tiborga olinadi?",
        "options": [
          "O‘qituvchining yoshi, jinsi, mijozi, fe’l-atvori, salomatligi, anatomik va fiziologik xususiyatlari",
          "O‘qituvchining o‘z-o‘zini boshqarishda erishadigan yutuqlari, pedagogik mahorati",
          "Ustozlarning mehnat tajribasini o‘zlashtirishi, ta’lim-tarbiyani to‘g‘ri yo‘naltira olishi",
          "Pedagogik mahoratni mukammal egallash uchun mehnat ko‘nikmasi va malakalarini shakllantirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Interfaol» so‘zining lug‘aviy ma’nosi…..",
        "options": [
          "O‘zaro birgalikdagi harakat",
          "Faollikka undash",
          "Fikrlash qobiliyatini faollashtirish",
          "O‘quvchi-talaba faoliyatini faollashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Relaksatsiya” qanday holat?",
        "options": [
          "Jismonan va ruhan bo’shashish, butunlay osoyishtalik",
          "Jizzakilik va asabiylik, o’zini boshqara olmaslik",
          "Jismoniy charchash, baqirish yoki so’kinish",
          "Jismonan va ruhan tetiklik, jizzakilik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kommunikativ munosabatda ishontirishning faoliyat shakllariga nimalar kiradi?",
        "options": [
          "Bahs, munozara, suhbatda o’qituvchining dalillashi, isbot va mantiqqa tayanish",
          "Ovozning o’zgarishi, talaffuz, nutq ohangi asosida o’quvchilar ongiga sezdirmasdan ta’sir qilish",
          "Nutq madaniyati, munosabatga kirishish madaniyati, o’z-o’zini boshqarish munosabati",
          "Mavzu bo’yicha topshiriq berish, uni mashq qilish, o’quvchilarni baholash va rag’batlantirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quvchilarning bilim, ko‘nikma va malakalarini tekshirish quyidagi funksiyalarni bajaradi:",
        "options": [
          "Nazorat qilish, o‘qitish, tarbiyalash, rivojlantirish",
          "Umuminsoniy, gumanistik, demokratik.",
          "Bilim berish, tarbiyalash, rivojlantirish",
          "O‘qitish, tashkil etish, tizimlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "YAngi bilimlarni o‘zlashtirish uchun o‘qituvchi va o‘quvchilar tomonidan foydalaniladigan ob’ekt – bu ... .",
        "options": [
          "Ta’lim vositalari",
          "Ta’lim tamoyillari",
          "Ta’lim metodlari",
          "Ta’lim funksiyalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxs kreativligining tarkibiy tuzilishi bu",
        "options": [
          "Intuisiya, refleksiya, bilim,ko‘nikma, malakalar",
          "Irsiyat, muhit, oila.",
          "Qadriyat, muhit, tarbiya.",
          "Irsiyat, ta’lim, tarbiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchining ta’lim jarayonini boshqarish bosqichlari qaysilar?",
        "options": [
          "Rejalashtirish, tashkil etish, o’quv harakatlari, natijalarni baholash va tahlil qilish",
          "O’qitishga muammoviy-fanlararo yondashish, e’tiborni amaliyotga yoki qo’llashga qaratilganligi",
          "O’qituvchi to’g’ri javobni formal holatda deb qabul qiladi, asosiy e’tibor o’qitishning mazmuniga qaratilgan",
          "Holatlar «yuqoridan pastga» qaraladi, asosiy e’tibor nazariyaga qaratilgan, faoliyat produktiv shaklda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim va tarbiya jarayonida pedagogik ta’sir ko’rsatishning asosiy usullari?",
        "options": [
          "Talab; istiqbol; rag’batlantirish va jazolash; jamoatchilik fikri",
          "Diqqat; hotira; fikrlashni va bilish qobiliyatlarini rivojlantirish",
          "O’quvchining muayyan hislatlari; xarakter hususiyatlarini bilish; ishontirish",
          "Texnik fikrlash; mimika va pantomimika, notiqlik san’ati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik nizoning asosiy turlarini aniqlang",
        "options": [
          "Ichki, shaxsiy, shahslararo, guruhlararo, shaxsiy-guruhli",
          "Ichki, shaxsiy nizo, xulqiy nizo, uzoq muddatli, shaxslararo nizo",
          "Axloqiy nizo, ichki shaxsiy nizo, qisqa muddatli, motivatsion nizo",
          "Ichki shaxsiy nizo, guruhlararo nizo, noodatiy, xulqiy nizo"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Biror faoliyatning muvafaqqiyatli, mustaqil va mukammal bajarilishini ta’minlaydigan noyob qobiliyatlar birikmasi bu...?",
        "options": [
          "Mahoratdir",
          "Mohirlikdir",
          "Iste’doddir",
          "Talantdir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik texnikaning tarkibiy qismlariga nimalar kiradi?",
        "options": [
          "Nutq malakalari, mimika va pantomimika, hissiy psixik holat",
          "Ko’nikma va malaka",
          "Ta’lim-tarbiya, ma’lumot",
          "Pedagogik texnikalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi dars turida o‘quvchilarning amaliy ishlariga alohida e’tibor qaratiladi?",
        "options": [
          "Malaka va ko‘nikmalarni rivojlantirish darsida",
          "Kombinatsiyalangan darsda",
          "Tekshirish darsida",
          "Yangi bilimlarni shakllantirish darsida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Darsga qo‘yiladigan ................... talablarga har bir darsning ta’lim vazifalarini aniq belgilash, darsni axborotlar bilan boyitish, ijtimoiy va shaxsiy ehtiyojlarni hisobga olish bilan mazmunini optimallashtirish, idrok etish eng yangi texnologiyalarini kiritish, turli xildagi shakli, metodlari va ko‘rinishlaridan mos ravishda foydalanish kabilar kiradi. To‘g‘ri javobni toping.",
        "options": [
          "Didaktik",
          "Tarbiyaviy",
          "Rivojlantiruvchi",
          "Nazorat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quvchilarning mayli, qiziqishi va qobiliyatini xisobga olib tashkil etiladigan o‘quv faoliyatini tashkil etish shakli ................ deb ataladi.",
        "options": [
          "Tabaqalashgan ta’lim",
          "Individual ta’lim",
          "Tushuntiruvchi-namoyish etuvchi ta’lim",
          "Muammoli ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limni tashkil etishning darsdan tashqari shakllariga qaysi guruhdagilar kiradi?",
        "options": [
          "To‘garak, praktikum, seminar, konferensiya, maslahat, fakultativ mashg‘ulot, o‘quv ekskursiyalari, mustaqil uy ishlari",
          "Individual, individual-guruhli, sinf-dars, leksiya-seminar va sinfdan tashqari, auditoriyadan tashqari, maktabdan tashqari ta’lim.",
          "Ochiq darslar, interfaol darslar",
          "Differensiyalangan, individuallashtirilgan ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Berilgan javoblardan qaysi biri o’qituvchining avtoritar usu­lida sinf jamoasini boshqaruviga tegishli?",
        "options": [
          "O’qituvchi yakka holda guruh faoliyatini belgilaydi, o’quv­chi­larning so’zsiz bo’ysunishini da’vo qiladi",
          "O’quvchilarga ishonch bildiradi, shaxs sifatida ularni hurmat qiladi, ammo talabchanlikni susaytiradi",
          "O’qituvchi o’quvchilarni o’z holiga tashlab qo’yadi, sinfni o’qi­tuv­­chi emas, o’quvchilar o’z istaganlaricha boshqaradilar",
          "Pedagogik faoliyatda sinf jamoasining fikr mulohazalariga taya­nib, ta’lim-tarbiyaviy ishlarni tashkil qiladi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilish, ilmiy bilimlarning shakllanishi, xususiyatlari, qonu-niyatlari, uslublari, ilmiy tafakkur shakllari, shuningdek, insonga xos bo‘lgan borliqni anglash qobiliyati haqidagi nazariya, ta’limot – bu ... .",
        "options": [
          "Gnoseologiya",
          "Didaktika",
          "Paradigma",
          "Pedagogika"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inson qobiliyatini intellektlar to’plami deb, uning ettita sifatini ajratib ko’rsatgan psixolog olim kim?",
        "options": [
          "Govard Gardner",
          "M.G.Davletshin",
          "S.L.Rubinshteyn",
          "E.G’oziev"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Joriy, oraliq, yakuniy – bu o‘quvchilarning o‘quv faoliyatini nazorat qilish... hisoblanadi.",
        "options": [
          "Turlari",
          "Shakllari",
          "Metodlari",
          "Vositalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ommaviy, o‘z-o‘zini nazorat qilish, individual, aralash, guruhli – bu o‘quvchilarning o‘quv faoliyatini nazorat qilish... xisoblanadi.",
        "options": [
          "Shakllari",
          "Turlari",
          "Metodlari",
          "Vositalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Refleksiya o’z-o’zini tahlil qilish bo’lib, o’z-o’zicha belgi­lan­gan maqsadga erishish emas, balki bilim olish, tajriba orttirish usuli, ijodga, kasbiy jihatdan takomillashishga nisbatan rag’bat­lan­ti­rish­dir”. Refleksiyaga ushbu ta’rif qaysi olim tomonidan berilgan?",
        "options": [
          "Ya.S.Turbovskiy",
          "L.E.Pleskach",
          "V.A.Suxomlinskiy",
          "M.G.Davletshin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual pedagogik texnikani shakllantirishda nimalar e’tiborga olinadi?",
        "options": [
          "O’qituvchining yoshi, jinsi, mijozi, fe’l-atvori, salomatligi, anatomik va fiziologik xususiyatlari.",
          "O’qituvchining o’z-o’zini boshqarishda erishadigan yutuqlari, pedagogik mahorati.",
          "Metodik bilimlar, ta’limning texnologik tomoni, kasbiy qobili­yat­larga ega bo’lish.",
          "Pedagogik mahoratni mukammal egallash uchun mehnat ko’nikmasi va malakalarini shakllantirish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Juvonmardlik yo‘lini tanlagan yoshlarga quyidagilarni, ya’ni: “Ko‘zni yomon narsadan, qo‘lni yomon ishdan, tilni yomon so‘zdan saqlashni” tavsiya etgan alloma . . .",
        "options": [
          "Kaykovus",
          "Ahmad YUgnakiy",
          "Voiz Koshifiy",
          "YUsuf Xos Xojib"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kasbiy bilimlar mukammal bo’lishi uchun nimalar talab etila­di?",
        "options": [
          "Fanning metodologiyasini bilish, nazariy bilimlar, metodik bilimlar, ta’limning texnologik tomonini o’rganish.",
          "Fan metodologiyasi, nazariy bilimlar, pedagogik qobiliyat, ko’nikma va malakalar",
          "Metodik bilimlar, ta’limning texnologik tomoni, kasbiy qobili­yat­larga ega bo’lish",
          "Pedagogik qobiliyatga asoslangan ta’lim va tarbiyaviy rejalarni mukam­mal tuzish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik nazokatda takt so’zi qanday ma’noni bildiradi?",
        "options": [
          "Demokratik talablar asosida o’quvchilarga pedagogik ta’sir o’tkazish",
          "O’qituvchining o’quvchilar oldida tashqi qiyofasini namoyon etishi",
          "Ixtisoslikka doir vijdonlilik, adolatparvarlik",
          "O’qituvchining adolat mezoni, or-nomus, izzat-nafs, ma’naviy bilimi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik faoliyatda mehnat malakasi deb nimaga aytiladi?",
        "options": [
          "Egallagan bilimlarini o’zlarining hayotiy va amaliy faoliyatlarida qo’llay bilishi.",
          "Bir xil tarzda, ishchining tanasi, oyog’i, qo’li, barmoqlari bilan predmetni ko’chirish yoki ushlash uchun ketadigan jarayon.",
          "Tanaffuzsiz bitta yoki bir nechta inson harakat organlarining ish bajarishi.",
          "Kam vaqt va mehnatni sarf qilgan holda xatosiz, nazoratsiz operatsiyalarning bajarilishi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchi o’quvchilar bilan muloqot jarayonida paydo bo’ladigan turli ziddiyatli vaziyatlarni bartaraf etishi uchun...?",
        "options": [
          "Avvalo o’z iqtidoriga, pedagogik va psixologik mahoratiga tayanishi lozim.",
          "O’zi ishlayotgan o’quv muassasasi rahbariyatiga yordam so’rab murojaat qilishi kerak.",
          "Darhol tartibsiz o’quvchini topib unga nisbatan tarbiyaviy jazo metodini qo’llashi shart.",
          "Ota-onasini o’quv muassasasiga chaqirtirishi va suhbat o’tkazib ogohlantirishi kerak."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagilar orasidan pedagogik mahoratni shakllantirishni ta’minlovchi omil­larga kirmaydiganini aniqlang.",
        "options": [
          "Mimik va pantomimik harakatlar, samimiylik, muomala odobi",
          "Ta’lim oluvchilarning yosh, fiziologik, psixologik hamda shaxsiy xususiyatlarini hisobga olish, ularning faoliyatini ob’ektiv nazorat qilish va baholash.",
          "Ta’lim jarayonini demokratlashtirish va insonparvarlashtirish asosida o’z faoliyatini tashkil etish.",
          "Fanlarni o’qitish jarayonida texnik vositalar imkoniyatlaridan keng foydalanish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik mahoratda notiqlik texnikasiga nimalar kiradi?",
        "options": [
          "Nafas olish, tovush, diksiya, tembr, ritmika, diapazon",
          "Tovush, diksiya, tembr, ritmika, diapazon, mimika",
          "Nafas olish, tovush, pantomimika, diksiya, tembr, ritmika, diapazon",
          "Nafas olish, tovush, mimika, tembr, ritmika, diapazon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’qituvchi mehnatini ilmiy jihatdan to’g’ri tashkil etish vositalarini belgilang?",
        "options": [
          "Mehnat faoliyatini to’g’ri rejalashtirish, o’z mehnatini muntazam boshqarish va nazorat qilish; o’z – o’zini nazorat qilish (refleksiya)",
          "Pedagogik-psixologik bilimlarni mukammal egallash",
          "Bilim, tushuntira olish, kuzatuvchanlik, nutq malakasi, tashkilotchilik, obro’ orttira olish, muloqot qilish, kelajakni ko’ra bilish, diqqatni taqsimlay olish",
          "Muloqotda zaruriyatning mavjudligi; yaxshi kayfiyat; kommunikativ ko’nikma va malakalarga ega bo’lish"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "jahon",
    "name": "Jahon tarixi",
    "tagline": "Yangi va eng yangi davr",
    "glyph": "W",
    "questions": [
      {
        "question": "Rekonkista so’zining ma’nosi nima?",
        "options": [
          "qaytarib olish",
          "bosib olish",
          "tuhfa qilish",
          "nazoratga olish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi AQSH prezidenti mamlakat tarixida 4 marotaba prezidentlikka saylangan yagona shaxs edi?",
        "options": [
          "F.D.Ruzvelt",
          "T.Ruzvelt",
          "G.Trumen",
          "A. Linkoln"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiya tarixidagi Beshinchi Respublikaning birinchi prezidenti bo’lgan shaxsni aniqlang?",
        "options": [
          "Sharl de Gol",
          "F.Mitteran",
          "J.Shirak",
          "J.Pompidu"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amerikada “Mustaqillik urushi”ni yakunlagan sulh shartnomasi quyidagi qaysi shaharda imzolangan edi?",
        "options": [
          "Parij",
          "London",
          "Nyu-york",
          "Filadelfiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSH konstitutsiyasi qachon kuchga kirgan?",
        "options": [
          "1788 yil iyun",
          "1788 yil yanvar",
          "1787 yil dekabr",
          "1787 yil yanvar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSH tashkil topganda dastlab uning tarkibida nechta shtat bo‘lgan?",
        "options": [
          "13 ta",
          "14 ta",
          "15 ta",
          "16 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Skvaterlik” atamasi qanday ma’noni anglatgan?",
        "options": [
          "o‘zboshimchalik bilan yerlarni egallash",
          "yer osti qazilma boyliklarini olinishi",
          "harbiy askarlarni uylarga ketishlariga ruxsat berilishi",
          "qulchilikka qarshi kurash harakati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarixda “dunyo ustaxonasi” nomini olgan mamlakatni ko‘rsating.",
        "options": [
          "Angliya",
          "AQSH",
          "Fransiya",
          "Germaniya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning 60 yillariga kelib quyidagi qaysi davlat temir yo’l qurilishida yetakchilikni o’z qo’liga olgan edi",
        "options": [
          "AQSH",
          "Angliya",
          "Fransiya",
          "Prussiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1793 yildagi texnik ixtiro AQSH plantatsiya xo‘jaliklarini jadal kengaytirgan. Bu qanday ixtiro edi?",
        "options": [
          "paxta chigitlash mashinasi “jin” ixtiro qilingan",
          "zamonaviy to‘qimachilik dastgohi yasalgan",
          "qishloq xo‘jaligidagi seyalkalardan foydalanish",
          "ximiyaviy o‘g‘itlar ishlab chiqarishgan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi hududni olinishi AQSH hududini ikki barobar kengayishiga xizmat qilgan?",
        "options": [
          "Luiziana",
          "Florida",
          "Texas",
          "Kaliforoniya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSHda “Monro doktrinasi” qachon e’lon qilingan edi?",
        "options": [
          "1823 yil",
          "1828 yil",
          "1821 yil",
          "1825 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrda AQSH o‘ziga qo‘shib olgan Florida qaysi davlatga tegishli edi?",
        "options": [
          "Ispaniya",
          "Angliya",
          "Fransiya",
          "Rossiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1828 yilda AQSH siyosiy hayotida qanday voqea yuz bergan?",
        "options": [
          "demokratlar partiyasi tashkil topgan",
          "respublikachilar partiyasi tashkil topgan",
          "Monro doktrinasi e’lon qilingan",
          "umumiy saylov huquqi joriy qilingan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSHda XIX asrda bo‘lgan “Abolitsion harakat” qanday harakat edi?",
        "options": [
          "qulchilikni bekor qilish harakati",
          "fermerlar harakati",
          "ishchilar harakati",
          "umumiy saylov huquqi uchun kurash harakati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1796-1804 yillarda Markaziy Xitoyda bo‘lib o‘tgan yirik xalq qo‘zg‘oloni qaysi mahfiy tashkilot tomonidan tayyorlangan?",
        "options": [
          "“Oq nilufar” jamiyati",
          "“Qizil gullar” jamiyati",
          "“Oq oqshomlar” tashkiloti",
          "“Samo va yer” tashkiloti"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVIII asr so‘nggi choragida evropalik savdogarlar Xitoydan qanaqa mahsulotlar olib ketganlar?",
        "options": [
          "choy, ipak, gazmol",
          "paxta, chinni, qog‘oz",
          "ipak, choy, shisha",
          "gazmollar va qimmatbaho toshlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Britaniya Hindistoni Xitoyda afyun savdosiga o‘zining monopoliyasini qachon o‘rnatgan?",
        "options": [
          "1773 yil",
          "1793 yil",
          "1818 yil",
          "1834 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyaning Xitoyga qarshi birinchi urushi nechanchi yillarda bo‘lgan?",
        "options": [
          "1840-1842 yil",
          "1840-1841 yil",
          "1841-1842 yil",
          "1841-1843 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Taypinlar qo‘zg‘oloniga kim rahbarlik kilgan?",
        "options": [
          "Xun Syusyuan",
          "Lin Szesyuy",
          "Syao Chaoguy",
          "Yan Syusin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hindiston aholisidan dastlab “sipohiylar” qo‘shinini kim tuzgan?",
        "options": [
          "Pandisher gubernatori Dyupleks",
          "Ingliz harbiysi Robert Klayv",
          "General Lalli",
          "Uorren Xeystings"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyaning Hindistondagi mustamlakachilik markazi qaysi shahar bo‘lgan?",
        "options": [
          "Kalkutta",
          "Dehli",
          "Bombey",
          "Madras"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eronda xojarlar sulolasi qachon xokimiyat tepasiga kelgan?",
        "options": [
          "1796 yil",
          "1736 yil",
          "1760 yil",
          "1722 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrda Eron Guliston sulh shartnomasiga ko‘ra qaysi hududlaridan mahrum bo‘lgan?",
        "options": [
          "Dog‘iston, Gurjiston, Shimoliy Ozarbayjon",
          "Armaniston, Dog‘iston, Shimoliy Eron",
          "Gurjiston, Armaniston, Xuroson",
          "Tabriz, Gurjiston, Dog‘iston"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiyada “yanichar” lar qo‘shini qachon tugatilgan?",
        "options": [
          "1826 yil",
          "1838 yil",
          "1807 yil",
          "1841 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiyada sultonning qaysi farmoni bilan «Tanzimat islohatlari» boshlangan?",
        "options": [
          "Gulxana xatti-sharifi (1839)",
          "Xatti-xumoyun (1856)",
          "Muntazam qo‘shin tuzish farmoni (1826)",
          "Ma’muriy boshqaruv islohati (1836)"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSH prezidenti Avraam Linkoln qaysi partiya vakili bo‘lgan?",
        "options": [
          "respublikachilar partiyasi",
          "demokratlar partiyasi",
          "frisoylirlar partiyasi",
          "ishchilar partiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSHda qulchilik qachon bekor qilingan?",
        "options": [
          "1863 yil",
          "1860 yil",
          "1865 yil",
          "1867 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Siyosiy jihatdan tarqoq Italiyaning eng yirik davlatini ko‘rsating!",
        "options": [
          "Sardiniya",
          "Lombardiya",
          "Venetsiya",
          "Rim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Italiyada «Risorjimento» atamasi qanday ma’noni anglatgan?",
        "options": [
          "uyg‘onish",
          "mustamlakachilik",
          "mustaqillik",
          "tadbirkorlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Italiyaning iqtisodiy boy viloyatlari qaysilar?",
        "options": [
          "Lombardiya va Venetsiya",
          "Modina va Parma",
          "Toskaniya va Rim",
          "Sardiniya va Neopolitaniya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Yosh Italiya” tashkilotining asoschisi kim bo‘lgan?",
        "options": [
          "Juzeppe Madzini",
          "Juzeppe Garibaldi",
          "Graf Kavur",
          "Vinchenso Joberti"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Prussiya va Avstriyaning Daniyaga qarshi urushi oqibatida qaysi gersogliklar tortib olingan?",
        "options": [
          "Shlezvig va Golshteyn",
          "Baden va Bavariya",
          "Gannover vaGessen",
          "Darmshtadt va Baden"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shimoliy Germaniya ittifoqi qachon tuzilgan?",
        "options": [
          "1866 yil",
          "1867 yil",
          "1865 yil",
          "1862 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rossiya Fanlar Akademiyasi qachon tashkil topgan?",
        "options": [
          "1724 yil",
          "1723 yil",
          "1722 yil",
          "1721 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Peterburg shahridagi “Bosh shtab binosi” qaysi memorning loyihasiga ko‘ra qurilgan?",
        "options": [
          "K.I.Rossi",
          "A.A.Monferran",
          "A.D.Zaxarov",
          "P.K.Kledt"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mendeleev D. I “Ximiyaviy elementlarning davriy jadvali” ni qachon tuzgan?",
        "options": [
          "1869 yil",
          "1870 yil",
          "1871 yil",
          "1868 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1803 yildagi dastlabki bug‘ kemasining ixtirochisi kim bo‘lgan?",
        "options": [
          "R.Fulton",
          "J.Stefenson",
          "G.Bessemer",
          "A.Reomyur"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVII asr birinchi yarmida Angliyada eng ko‘p sonli ijtimoiy toifani ko‘rsating!",
        "options": [
          "dehqonlar",
          "ishchilar",
          "hunarmandlar",
          "feodallar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada “Qisqa parlament” qachon faoliyat ko‘rsatgan?",
        "options": [
          "1640 yil",
          "1639 yil",
          "1641 yil",
          "1642 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVII asr ingliz inqilobi boshlangan sanani ko‘rsating?",
        "options": [
          "1640 yil",
          "1638 yil",
          "1642 yil",
          "1628 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliya qiroli Karl I Styuart qachon qatl etildi?",
        "options": [
          "1649 yil",
          "1647 yil",
          "1653 yil",
          "1640 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada «Yangi na’munadagi armiya»ga kim asos solgan?",
        "options": [
          "Oliver Kromvel",
          "Karl I Styuart",
          "Jon Lilbern",
          "Yakov I Styuart"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada Protektoratlik davri nechanchi yillarni o‘z ichiga oladi?",
        "options": [
          "1653-1660 yillar",
          "1649-1658 yillar",
          "1653-1658 yillar",
          "1650-1660 yillar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada 1653yilda yangi qabul qilingan konstitutsiya nima deb atalgan?",
        "options": [
          "Boshqaruv quroli",
          "Yulduzli palata",
          "Oliy komissiya",
          "Buyuk remonstratsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada «Shonli inqilob» atamasi qaysi voqeaga nisbatan qo‘llangan?",
        "options": [
          "1688 yildagi davlat to‘ntaruvi",
          "1660 yilda monarxiyani tiklanishi",
          "1645 yilda Yangi nusxadagi armiyaning tashkil etilishi",
          "1647 yilda Pyotnedagi harbiy konferensiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Angliyada sanoat to‘ntaruvi qachon nihoyasiga etgan?",
        "options": [
          "1825 yil",
          "1842 yil",
          "1839 yil",
          "1848 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiyada «Notabllar majlisi» qachon chaqirilgan?",
        "options": [
          "1787 yil",
          "1789 yil",
          "1792 yil",
          "1791 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVIII asr fransuz inqilobidagi eng inqilobiy oqimni ko‘rsating!",
        "options": [
          "Yakobinchilar",
          "Jirondistlar",
          "Montanyarlar",
          "Felyanlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiyada birinchi imperiya davrini ko‘rsating!",
        "options": [
          "1804-1814 yillar",
          "1799-1804 yillar",
          "1799-1814 yillar",
          "1795-1804 yillar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Kontinental qamal” tadbiri qaysi mamlakatga nisbatan qo‘llangan?",
        "options": [
          "Angliya",
          "Ispaniya",
          "Rossiya",
          "Prussiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Vena kongressi qachon chaqirilgan?",
        "options": [
          "1814-1815 yillar",
          "1814-1816 yillar",
          "1815-1816 yillar",
          "1813-1815 yillar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Muqaddas ittifoq” ning asosiy maqsadi nima?",
        "options": [
          "din va monarxiyani mustahkamlash",
          "mustamlakachilik urushlarini olib borish",
          "feodal munosabatlarga barham berish",
          "burjua inqiloblarini amalga oshirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda din qaysi jamoa davrida vujudga keldi?",
        "options": [
          "ilk urug’chilik davrida",
          "patriarxat tuzumi davrida",
          "matriarxat tuzumi davrida",
          "ilk feodalizm davrida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda oliy davlat organi?",
        "options": [
          "Xalq yig`ini",
          "Forum",
          "Senat",
          "Tribun"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda yaratuvchi hudo kim?",
        "options": [
          "Ptax",
          "Nefertun",
          "Osiris",
          "Aton"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda oliy sud tashkiloti?",
        "options": [
          "Xalq yig`ini",
          "Forum",
          "Senat",
          "Tribun"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda xalq yig`inlarini necha ko`rinishi mavjud edi?",
        "options": [
          "3",
          "4",
          "6",
          "1"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kimning islohotlarighacha Kuriya komissiyalari mavjud edi?",
        "options": [
          "Serviy Tulliy",
          "Tribut",
          "Litsiniy",
          "Liviy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nima kuriya komissiyalarini siqib chiqardi?",
        "options": [
          "Senturiy komissiyalar",
          "Xalq yig`ini",
          "Liktorlar",
          "Sentrivat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Senturiy komissiyalari qayerda chaqirilar edi?",
        "options": [
          "Mars maydonida",
          "Merkuriy maydonid",
          "Venera maydonida",
          "Vulkan maydonida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ovoz berishning mulk senziga asoslanishi kimlarning norozilighiga uchradi?",
        "options": [
          "demokratlar",
          "plebeylar",
          "aristokratlar",
          "patritsiylar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachon senturiy komissiyalari islohoti o`tkazildi?",
        "options": [
          "er.avv. 241",
          "er.avv. 244",
          "er. avv. 233",
          "er.avv. 322"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rim huquqi hududiy okrug- trib nechta shahar va qishloq tribiga bo`lingan edi?",
        "options": [
          "11414",
          "28185",
          "21-92",
          "46094"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tribut komissiyalarida kimlar saylanar edi?",
        "options": [
          "edillar, kvestrlar, plebey tribunlari",
          "plebeylar, askarlar",
          "askarlar, patritsiylar, senatorlar",
          "edillar, senatorlar, senatorlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eron so’zi nima degan ma’noni anglatadi?",
        "options": [
          "”ariana”-oriylar mamlakati",
          "”marish”-doriylar mamlakati",
          "”sutxa”-birlashgan qabilalar",
          "”lamnu”-buyuk davlat birlashmasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xalq yig`ini nimani muhokama qilar edilar?",
        "options": [
          "magistratlar kiritgan masalalar",
          "senatorlar kiritgan masalalar",
          "liktorlar kiritgan masalalar",
          "patritsiylar kiritgan masalalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda senatorlar soni necha edi?",
        "options": [
          "300",
          "200",
          "100",
          "250"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Er.avv. nechanchi yilgacha har qanday qonun loyihasi senatda muhokama qilingandan keyin xalq yig`ini muhokamasiga olib chiqilar edi?",
        "options": [
          "287-y",
          "288-y",
          "289-y",
          "286-y"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda qonunlar qachon kuchga kirar edi?",
        "options": [
          "senat tasdiqlaganidan keyin",
          "liktorning maslahati bilan",
          "tribun qarori bilan",
          "plebeylarning maslahati bilan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Geradot nechanchi asrda “Tarix” kitobini yozgan?",
        "options": [
          "Mil.avv V asr",
          "Mil.avv IV asr",
          "Mil.avv VI asr",
          "Mil.avv III asr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Magistratlar kimga xisobot berar edilar?",
        "options": [
          "senat",
          "liktor",
          "tribun",
          "Dictator"
        ],
        "correctAnswer": 0
      },
      {
        "question": "er.avv. nechanchi asrdan vakolatlari tugagan oily magistratlar senat tarkibiga kirar edilar?",
        "options": [
          "IV asr",
          "V asr",
          "VI asr",
          "III asr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Diktatorga nechta liktor hamrohlik qilar edi?",
        "options": [
          "24",
          "12",
          "32",
          "48"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eng keksa va obro`li senator nima deb atalgan?",
        "options": [
          "prinseps senatus",
          "kolonkus svintus",
          "chuvkus senatos",
          "perius senatos"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Senat ro`yhatida kim birinchi bo`lib turar edi?",
        "options": [
          "senzorlar",
          "senatorlar",
          "pretorlar",
          "Tribunlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Senatning qarori nima deyilgan?",
        "options": [
          "dekret",
          "Tribunlar",
          "krosfllar",
          "predsullar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kayxusrav I qachon Amudaryoning shimoliy qismiga o’tib massagetlar yerlariga hujum boshlaydi?",
        "options": [
          "Er.avv 530-yilda",
          "Er.avv 538-yilda",
          "Er.avv 535-yilda",
          "Er.avv 539-yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda ijroiya hokimiyat kimga tegishli edi?",
        "options": [
          "magistratlarga",
          "Promenorus",
          "dementrus",
          "kvestor"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oliy magistratlarga kimlar kirgan?",
        "options": [
          "konsullar,senzorlar,pretorlar",
          "asirlar,liktorlar,diktorlar",
          "pretorlar,tribun,plebeylar",
          "diktorlar,senzorlar,penzorlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rim fuqarolarini qarzi uchun qul qilish er avv nechanchi yilgi qonun bilan bekor qilingan edi?",
        "options": [
          "396",
          "159",
          "321",
          "327"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misr madaniyati necha ming yil oldin shakllandi?",
        "options": [
          "4 ming yil oldin",
          "9 ming yil oldin",
          "5ming yil oldin",
          "6 ming yil oldin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misr madaniyatining yuksalishiga qaysi daryoning o’rni beqiyos?",
        "options": [
          "Nil daryosining",
          "Frot daryosining",
          "Dajla daryosining",
          "Po daryosining"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda Anubis nima?",
        "options": [
          "o’liklar saltanatining podshosi",
          "hayvonlarga sig’inish",
          "olovlarning mabadasi",
          "cherkovdagi haykalchalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrliklarda tot qanday hudo?",
        "options": [
          "aql va yozuv hudosi",
          "bosh hudo",
          "otashparastlik hudosi",
          "Zulmatni yenguvchi hudo"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda ilohiy hayvonlardan biri nima?",
        "options": [
          "buqa",
          "ot",
          "tuya",
          "sigir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rim va Karfagen urtasida birinchi Puni urushi necha yil davom etgan?",
        "options": [
          "23",
          "20",
          "30",
          "21"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ingliz arxeologi Karter nechinchi yili Tutanxamon maqbarasida tadqiqot ishlari olib boradi?",
        "options": [
          "1922 y",
          "1920y",
          "1921 y",
          "1924 y"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Evripid 90 tragediya yozgan bolib, qanchasi bizgacha yetib kelgan?",
        "options": [
          "18",
          "15",
          "35",
          "20"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rim armiyasida necha yosh oralig`indagi erkak odamlar xizmat qilgan?",
        "options": [
          "16 yoshdan 46 yosh gacha",
          "16 yoshtan 35 yosha gacha",
          "17 yoshtan 56 yosh gacha",
          "16 yoshtan 40 yosh gacha"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xafra piramidasining uzinligi?",
        "options": [
          "143",
          "147",
          "66",
          "140"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hind Vedalarining eng Qadimgi bo`lagi nima deb ataladi?",
        "options": [
          "Rigveda",
          "Maxabxarat",
          "Ramayana",
          "Panchatatra"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Arastu maktabi (Gretsiya) davrining eng muxim i asarini aniqlang.",
        "options": [
          "«Politiya»",
          "«Geografiya»",
          "«Tarix»",
          "«Anabasis Aleksandriya»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quydagi qaysi asar Gerodotga tegishli?",
        "options": [
          "Muzalar",
          "Urishlar tarixi",
          "Geografiya",
          "Agesilay"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rimda lashkar boshi uchun eng yoqori tortiq nima edi?",
        "options": [
          "«Muqaddas yo`l» bo`ylab Kapitoliy tepaligiga urush aravasida kotarilish",
          "«Imperiya qahramoni» unvonini olish",
          "Imperator unvonini olish",
          "Muqaddas ichimlik Ambrosiyni ichish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Panchatatra» kitobining arabcha tarjimasi aniqlang.",
        "options": [
          "«Kalila va Dimna»",
          "«La`yli va Majnun»",
          "«Ganga va Jamna»",
          "«Ming bir tun»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Forslar va Makedonlar o’rtasidagi Issa yonidagi jang qachon bo’lgan?",
        "options": [
          "Er.avv 333-yil",
          "Er.avv 330-yil",
          "Er.avv 332-yil",
          "Er.avv 331-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fors qabilalarini Old Osiyo chegaralaridagi harakati to’g’risidagi qaysi yozuvlar ma’lumot beradi?",
        "options": [
          "Er.avv IX-VII asrlarga oid Ossuriya yozuvlari",
          "Er.avvVII-VI asrlarga oid Xett yozuvlari",
          "Er.avv V-IV asrlarga oid Akkad yozuvlari",
          "Er.avvIII-II asrlarga oid mixxat yozuvlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Osiris kim tomonidan o’ldiriladi?",
        "options": [
          "akasi tomonidan",
          "askarlari tomonidan",
          "o’g’li tomonidan",
          "o’z dushmanlari tomonidan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda zulmat va yovuzlik hudosi kim?",
        "options": [
          "Set",
          "Xatxor",
          "Aton",
          "Tot"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrliklarda Sax nima?",
        "options": [
          "inson tanasi",
          "Hayvon",
          "xudo",
          "inson boshi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda shunt nima?",
        "options": [
          "inson soyasi",
          "Murda",
          "arvoh",
          "tirik murda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda mumiyolash nima?",
        "options": [
          "insonni tanasini abadiy saqlash",
          "murdalarni 2-3 kunga saqlash",
          "hudolar oldidagi qo’rquv",
          "mumiyolashga e’tibor berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda murdalarga shikast yetmasligi uchun nimalar qurildi?",
        "options": [
          "piramidalar",
          "Ibodatxonalar",
          "tobutlar",
          "yer osti g’orlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVIII asr oxirida Eronda qaysi sulola hukumronligi davrida mamlakat poytaxti Isfaxondan Tehronga ko’chirildi?",
        "options": [
          "Qojar;",
          "Zend",
          "Gilzoiy",
          "Abdali;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVII – XVIII asrlarda qaysi davlat madanyatida Poeziyaning eng keng tarqalgan janri qofiyalashmagan besh qatorli lirik she’rlar bo’lib, ular “Tomchi suvda ummonni ko’rish kerak” degan baddiy tamoyil asosida yozilgan?",
        "options": [
          "Yaponiya;",
          "Koreya",
          "Hindiston",
          "Xitoy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1603-yilda Angliya taxtiga kelgan yangi Styuartlar asli qayerlik bo’lgan?",
        "options": [
          "Shotlandiyalik;",
          "Irlandiyalik;",
          "Gollandiyalik;",
          "Skandinaviyalik;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiyada qanday omil Angliya va Ispaniyani unga qarshi urushga chorladi?",
        "options": [
          "Qirol Lyudovik XVI ning qatl etilishi;",
          "Parij Kommunnasining mag’lubiyati;",
          "Fransiyada Yakobinchilarning Avstriyaga hujumi;",
          "Jirondachilarning tashqi siyosatdagi mag’lubiyatdagi;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk rus olimi M.V.Lomonosov tashabbusi bilan Moskva universiteti tashkil qilingan yilni aniqlang.",
        "options": [
          "1755-yil;",
          "1872-yil;",
          "1721-yil;",
          "1767-yil;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Afrika hududlarining Yevropa davlatlari o’rtasida mustamlaka sifatida taqsimlanishi qaysi davrga kelib tugallandi?",
        "options": [
          "XIX asrning oxiri – XX asrning boshlarida;",
          "XIX asrning 70-yillari;",
          "XVIII asrning boshlari;",
          "XVII asr oxiri – XVIII asr o’rtalari;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eng muhim qul savdosi bo’lgan Angola va Mozambik qaysi davlatning mustamlakasi bo’lgan?",
        "options": [
          "Portugaliya;",
          "Gollandiya;",
          "Angliya;",
          "Fransiya;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1857-yili qaysi davlatlar o’rtasida Parij Tinchlik shartnomasi imzolangan?",
        "options": [
          "Eron va Buyuk Britaniya;",
          "Afg’oniston va Buyuk Britaniya;",
          "Rossiya va Usmoniylar;",
          "Yaponiya va Xitoy;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi davlat geogriflari tomonidan Osiyo va Amerika o’rtasidagi Bering bo’g’ozi kashf etildi?",
        "options": [
          "Rossiya",
          "Xitoy;",
          "Hindiston;",
          "Eron;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVII asrda Yaponiyada joylashgan Edo shahri hozirgi qaysi shaharga to’g’ri keladi?",
        "options": [
          "Tokio;",
          "Nagasaki;",
          "Seul;",
          "Pekin;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Lotin Amerkasi davlatlaridan bir yilda ya’ni 1821-yilda tashkil topgan va mustaqilikka erishgan davlatlar qaysi qatorda to’g’ri berilgan?",
        "options": [
          "Meksika va Peru;",
          "Paragvay va Chili;",
          "Meksika va Argentena;",
          "Boliviya va Vensuela;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning 60-yillarida qaysi davlat konstitutsiyasiga tuzatish kiritilgan?",
        "options": [
          "AQSH;",
          "Yaponiya;",
          "Xitoy;",
          "Fransiya;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Juzeppe Garibaldi o’z harbiy kuchlari bilan Sitsiliya oroliga kelib tushgan vaqtda bo’lgan voqeani aniqlang.",
        "options": [
          "AQSH da Respublikachilar partiyasi vakili Avraam Linkoln g’alaba qozondi;",
          "’Shimoliy Germaniya Ittifoqi” tuzildi;",
          "Fransiya Jazoirni bosib oldi;",
          "AQSH da qulchilik bekor qilindi;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVII asrda mavjud bo’lgan To’pqori saroyi qayerda joylashgan?",
        "options": [
          "Turkiya",
          "Eron;",
          "Iroq;",
          "Bog’dod;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "G’arbiy Afrikada joylashgan qaysi hududdagi qirg’oqqa Qul qirg’og’i deya nom berilgan?",
        "options": [
          "Volta va Niger daryolari oralig’I;",
          "Shimoliy Liberiya;",
          "Janubiy Efofiya;",
          "Quyi Gvinya;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ispanlarga qarshi xalq harakatiga boshchilik qilgan Xayriddin qaysi davlat sarkardasi edi?",
        "options": [
          "Jazoir;",
          "Liviya;",
          "Tunis;",
          "Marokash;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVI – XVII asrlarda Eronda bunyod etilgan Shoh masjidi va Shayx Lutfulla masjidlari qaysi shaharda joylashgan?",
        "options": [
          "Isfaxon;",
          "Tehron;",
          "Tabriz;",
          "Qohira;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk Britaniyada birinchi va ikkinchi parlament islohot yillari to’g’ri berilgan javobni aniqlang.",
        "options": [
          "1832-1867-yillar",
          "1825-1873-yillar;",
          "1831-1852-yillar",
          "1832-1875-yillar;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yaponiyada Tokugava Ieyasu syogun unvonini qabul qilgan yilni aniqlang.",
        "options": [
          "1603-yil;",
          "1605-yil",
          "1683-yil;",
          "1606-yil;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVI asrda Koreyada markazlashgan davlatning zaiflashib borishi natijasida mamlakatning qaysi qismidan Yaponiya tajovuzi boshlandi?",
        "options": [
          "janubi",
          "shimoli",
          "sharqi",
          "g’arbi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi sivilizatsiyaning o’ziga xos jihati shundaki; ularbing jamiyatida kishilarning ijtimoiy holati uning tug’ilishi va qaysi tabaqaga mansubligi bilan farqlanadi?",
        "options": [
          "Hind siv",
          "Xitoy siv;",
          "Yapon siv",
          "Islom siv;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qanday omil Fransiya konsuli Napoleon Bonapartni siyosiy hokimyatni egallashga chorladi?",
        "options": [
          "1798-yili Misrga qilingan yurish;",
          "Fransiyada hokimyatning Direktoriyaga topshirilishi;",
          "Fransiyaning Belgiya va Gollandiyani bosib olishi;",
          "Ijro hokimyatning Oqqsoqollar kengashi qo’liga o’tishi;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIV asr o’rtalarida Gumanizm qaysi davlatda paydo bo’lgan?",
        "options": [
          "Italiya",
          "Ispaniya",
          "Fransiya",
          "Angliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1795-yilda qaysi davlatning konstitutsiyasi qabul qilingan?",
        "options": [
          "Fransiya",
          "Angliya",
          "Yaponiya",
          "Xitoy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sovet Rossiyasi 1918-yilning 3-mart kuni imzolagan Brest tinchlikshartnomasiga ko’ra . . .",
        "options": [
          "Boltiqbo’yi, Polsha, Finlandiya va Ukrainadan voz kechar edi",
          "Kavkazdagi Kars, Ardagan va Batumi hududlari Germaniyaga berildi",
          "Rossiya Germaniyaga 132 mlrd marka miqdorida tovon to’ladi",
          "Ukraina va Polsha davlatlarining mustaqilligini tan oldi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi olimlardan qaysi biri har bir madaniyatning o‘ziga xosligi, ularning bir-biridan mustaqil ravishda rivojlanishi to‘g‘risidagi g‘oyani ilgari surgan?",
        "options": [
          "O.Shpengler",
          "F.Nitsshe",
          "Z.Freyd",
          "J.London"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asr oxiri - XX asr boshlarida Yaponiyaning qaysi harakati uning AQSH va Buyuk Britaniya bilan munosabatlarining yomonlashuviga olib keldi?",
        "options": [
          "Xitoy mulklaridan foydalanishga harakat qilishi",
          "Koreya yarimorolini harbiy kuch bilan o‘ziga qo‘shib olishi",
          "10 yillik qurollanish dasturini qabul qilishi",
          "sanoat ishlab chiqarish hajmi bo‘yicha AQSH va Buyuk Britaniyadan o‘zib ketishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dunyoga mashhur ”Mutafakkir” haykalini kim yaratgan?",
        "options": [
          "O.Roden",
          "P.Gogen",
          "V.Van Gog",
          "K.Mone"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yaponiya va Xitoy o’rtasida Simonoseki shartnomasi imzolangan yilda Kuba tarixida bo’lib o’tgan voqeani aniqlang.",
        "options": [
          "Xose Marti va Maksimo Gomes boshchiligida Kuba xalqi ispanlarga qarshi qo’zg’alon ko’tardi",
          "AQSH Kubaga majburan shartnoma qabul qildirdi",
          "Kubada qulchilik bekor qilindi",
          "Kuba mustaqil deb e’lon qilindi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning 90-yillari oxirida Germaniya imperiyasi tomonidan bosib olingan hududlar to’g’ri berilgan javob variantini aniqlang.",
        "options": [
          "Shandunning bir qismi, Karolina, Mariana orollari va Samoa orolining bir qismi",
          "Togo , Kamerun, Mariana va Marshall orolining bir qismi",
          "Zabzibar, Kamerun, Samoa orolining bir qismi va Marshall oroli",
          "Shandunning bir qismi, Zanzibar, Karolina oroli va Samoa orolining bir qismi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Erоn shоhlari to`g`ri ketma-ketlikda bеrilgan javоbni tоping?",
        "options": [
          "Muzaffariddin, Alishоh, Ahmadshоh",
          "Ahmadshоh, Muzaffariddin, Alishоh",
          "Alishоh, Ahmadshоh, Muzaffariddin",
          "Muzaffariddin, Ahmadshоh, Alishоh"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning oxirlarida qaysi davlatda yagona pul birligi, mamlakat uchun bir xil tosh-tarozi va uzunlik o’lchovlari joriy etilgan?",
        "options": [
          "Afg’oniston",
          "Hindiston",
          "Eron",
          "Turkiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi asarda har bir madaniyatning o’ziga xosligi, bir-biridan mustasno holda rivojlanish g’oyasini mutlaqlashtirilgan?",
        "options": [
          "’’Yevropa quyoshning botishi’’",
          "’’Oq tanli kishining burch anduhi’’",
          "’’Zardusht tavallosi’’",
          "’’Tom tog’aning kulbasi’’"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Usmoniylarda Abdulaziz Shayx ul-Islom fatvosi bilan taxtdan tushirilgan vaqtda qaysi davlatda ikki palatali parlament joriy etildi va quyi palata Deputatlar palatasi yuqori palata esa Senat deb ataladi?",
        "options": [
          "Turkiya",
          "Eron",
          "Bolgariya",
          "Italiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Misrda Jamoliddin al-Afg’oniy tomonidan nechanchi yili ’’Xizb ul-Vatan’’ partiyasi tuzilgan?",
        "options": [
          "1871-yil",
          "1882-yil",
          "1872-yil",
          "1873-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning oxiri – XX asrning boshlarida quydagi qaysi davlatda o’qotar qurollarni saqlamaslik haqida akt qabul qilingan?",
        "options": [
          "Xitoy",
          "Eron",
          "Afg’oniston",
          "Hindiston"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Afg’onistonda 1880-yili ingliz harbiy brigadasi qaysi shaxs tomonidan yanchib tashlangan?",
        "options": [
          "Sheralixonning o’g’li Ayubxon",
          "Sheralixonning o’g’li Yoqubxon",
          "Afzalxonning o’g’li Abdurahmon",
          "Afzalxonning o’g’li Habibuloxon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrning oxirida quydagi qaysi shaxs Seylon oroliga surgun qiligan?",
        "options": [
          "Samori Ture",
          "Ahmad Orabebiy",
          "Abdulqodir",
          "Saad Zaglul"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mahdiylar xalifasiga murojat qilib, umumiy dushmanga qarshi birgalikda kurashga chaqirgan hukumdor qaysi javobda to’g’ri berilgan?",
        "options": [
          "Yo’xonni",
          "Menelik",
          "Xiks",
          "Abdulloh"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachonga kelib, Bolgariya, Germaniya, Avstriya-Vengriya va Usmoniylar davlatlari ,,To’rtlar ittifoqi’’ga birlashgan?",
        "options": [
          "1915-yil 15-sentabr",
          "1914-yil 2-oktabr",
          "1915-yil 28-avgust",
          "1914-yil 14-oktabr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quydagi qaysi arab sultonligi qul savdosiga qarshi kurash bahonasi bilan nemislar, fransuzlar va inglizlar tomonidan bo’linib olingan?",
        "options": [
          "Zanzibar",
          "Svazilend",
          "Bunaro",
          "Kongo"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yilning 29-oktabrda respublika deb e’lon qilingan davlatni aniqlang.",
        "options": [
          "Turkiya;",
          "Germaniya;",
          "Eron;",
          "Misr;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eronda nechanchi yilda chodra o’rab yurish bekor qilindi?",
        "options": [
          "1935-yil;",
          "1930-yil",
          "1934-yil;",
          "1927-yil;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1931-yili tuzilgan Xitoy Sovet Respublikasiga kim rais etib saylangan?",
        "options": [
          "Mao Szedun;",
          "Chan Kayshi;",
          "Sun Yatsen;",
          "Maxatma Gandi;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi shartnomaga ko’ra, Turkiyaning birinchi jahon urushidan keying chegaralari belgilab berilgan va mustaqilligi tan olingan?",
        "options": [
          "Lozanna shartnomasi;",
          "Vashington shartnomasi;",
          "Rapallo shartnomasi;",
          "Versal shartnomasi;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1940-yilda Buyuk Britaniya hukumati boshlig’i lavozimidan istefoga chiqqan shaxsni aniqlang.",
        "options": [
          "Nevill Chemberlin;",
          "Uinston Cherchil;",
          "David Lloyd Jorj;",
          "Margaret Tetcher;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushidan keyin 1920-yilda Turkiya bilan qayerda g’olib davlatlar o’rtasida shartnoma imzolangan edi",
        "options": [
          "Sever",
          "Sen-Jermen",
          "Trianoin",
          "Versal"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Italiya 1926-yili quyidagi qaysi davlat bilan do‘stlik to‘g‘risida shartnoma imzoladi",
        "options": [
          "Albaniya",
          "Yugoslaviya",
          "Gretsiya",
          "Germaniya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushidan keyin qaysi davlat oxirgi bo‘lib jahon iqtisodiy inqiroziga uchradi",
        "options": [
          "Fransiya",
          "Angliya",
          "AQSh",
          "Italiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Germaniya bilan Sovet davlati o‘rtasida bir biriga hujum qilmaslik shartnomasi qaysi sanada imzolandi.",
        "options": [
          "1939-yil 23-avgust",
          "1939-yil 12-avgust",
          "1939-yil 13- avgust",
          "1939 -yil 26- avgust"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nechanchi yilgacha Angliya va Fransiya SSSR bilan diplomatik munosabatlarni o‘rnatmagan edi",
        "options": [
          "1924-yil",
          "1923-yil",
          "1925-yil",
          "1926-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi davlatda polkovnik De Lya Rok boshchiligida 1927- yilda “jangavor krestlar” nomli yangi harbiy-fashistik tashkilot tuzildi",
        "options": [
          "Fransiya",
          "Italiya",
          "Ispaniya",
          "Portugaliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1937-yil 11-dekabrda quyidagi qaysi davlat Millatlar ittifoqidan chiqdi",
        "options": [
          "Italiya",
          "Germaniya",
          "Yaponiya",
          "SSSR"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushidan keyin Turkiya mustamlakalari bo‘lgan Suriya va Livanni idora qilish mandatini qaysi davlat oldi",
        "options": [
          "Fransiya",
          "Buyuk Britaniya",
          "Misr",
          "Italiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushidan keyin barcha mamlakatlar yaxlitligi, ochiqligi va demokratik bo‘lish taklifi qaysi davlat tomonidan ilgari surildi",
        "options": [
          "AQSh",
          "Italiya",
          "Fransiya",
          "Angliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Versal konferensiyasi yakunlari bo‘yicha qaysi davlatni “G‘alaba qozonganlar orasidagi mag‘lubiyatga uchragan davlat” deb atashdi",
        "options": [
          "Italiyani",
          "Ispaniyani",
          "AQSHni",
          "Yaponiyani"
        ],
        "correctAnswer": 0
      },
      {
        "question": "General Franko qaysi mamlakatning yetakchisi edi",
        "options": [
          "Ispaniya",
          "Italiya",
          "Fransiya",
          "Angliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi konferensiyada Reyn ahdnomasi imzolandi",
        "options": [
          "Lokarno konferensiyasi",
          "London konferensiyasi",
          "Genuya konferensiyasi",
          "Lozanno konferensiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yil oxiridan 1928-yil iyunigacha Germaniyada kimlar mamlkakatni boshqardi?",
        "options": [
          "Kichik koalitsiya",
          "Katta koalitsiya",
          "Sotsal demokratlar bloki",
          "Liberallar bloki"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qo‘yidagi kanslerlardan qaysi biri shaxsan Gindenburg komandasida davlatni ikki yil idora qildi.",
        "options": [
          "G. Bryuni",
          "G. Myuller",
          "D. Papen",
          "S. Lyuter"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Germaniya quyidagi qaysi xalqaro shartnomaga ko’ra Millatlar Ligasiga a’zo bo’ldi",
        "options": [
          "Lokarno konferensiyasi",
          "London konferensiyasi",
          "Genuya konferensiyasi",
          "Lozanno konferensiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1919 yil 27 noyabrda Parij yaqinidagi Neyi-syur-Sen shaharchasida qaysi malakat bilan shartnoma imzolangan.",
        "options": [
          "Bolgariya",
          "Avstriya",
          "Turkiya",
          "Vengriya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1919 va 1921 yillarda qayerda Buyuk Britaniya mustamlakachilariga qarshi katta namoyishlar, ish tashlashlar, politsiya bilan to‘qnashuvlar va qurolli qo‘zg‘olonlar bo‘ldi.",
        "options": [
          "Misr",
          "Suriya",
          "Liviya",
          "Hindiston"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi mamlakatda birinchi jahon urushidan so’ng 1 million 400 ming kishi halok bo‘ldi",
        "options": [
          "Fransiya",
          "Italiya",
          "Germaniya",
          "Vengriya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushidan so’ng Fransiya bilan Sovet Ittifoqi o‘rtasida diplomatik munosabatlar qachon o’rnatilgan",
        "options": [
          "1924-yil oktyabrda",
          "1923 yil martda",
          "1924-yil noyabrda",
          "1925 yiul aprelda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Vashington konferensiyasida nechta dvlat qatnashgan",
        "options": [
          "to’qizta",
          "o’n bitta",
          "o’nta",
          "o’n beshta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1938-yil 29-sentyabrda Myunxen yig‘ilishi qaysi davlat maslahatiga ko‘ra chaqirildi",
        "options": [
          "AQSh",
          "Italiya",
          "Fransiya",
          "Angliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Germaniya qachondan boshlab umuman reparatsiya to‘lamay qo‘ydi",
        "options": [
          "1932-yildan",
          "1931-yildan",
          "1934-yildan",
          "1935-yildan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Britaniya qiroli Georg V 1923-yil 23-dekabrda kimga mamlakat tarixida birinchi marta leyboristlar hukumatini tuzishni topshirdi.",
        "options": [
          "Ramsey Makdonaldga",
          "Benar Laoga",
          "Stenli Bolduinga",
          "Davod Loyd Jorjga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSh 1929 yilda qaysi mamlakatdagi milliy ozodlik harakatini qurol kuchi bilan yovuzlarcha bostirdi",
        "options": [
          "Filippindagi",
          "Gavayadagi",
          "Meksikadagi",
          "Kubadagi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yilda Korfu orolini quyidagi qaysi davlat bosib olgan",
        "options": [
          "Italiya",
          "Turkiya",
          "Gretsiya",
          "Fransiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1920-yil 4-iyunda Versal saroyining Trianon zalida quyidagi qaysi mamlakat bilan Antanta davlatlari o’rtasida shartnoma imzolandi",
        "options": [
          "Vengriya",
          "Avstriya",
          "Bolgariya",
          "Turkiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk Britaniya imperiyasining 1910-1936 yillarda kim qiroli bo’lgan edi",
        "options": [
          "Georg V",
          "Edvard VII",
          "Georg VI",
          "Edvard III"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Boltiq dengizida Germaniyaning pozitsiyasini kuchaytirish maqsadida Angliya Germaniya bilan qachon dengiz bitimini tuzdi.",
        "options": [
          "1935-yil 18-iyunda",
          "1935-yil 28-iyunda",
          "1935-yil 8-iyunda",
          "1935-yil 15-iyunda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dastlabki radioeshitgirish vositalari 1922-yili quyidagi qaysi davlatda yaratildi.",
        "options": [
          "Angliyada",
          "AQSHda",
          "Fransiyada",
          "Ispaniyada"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiya tashabbusi bilan tuzilgan Kichik Antanta avvalo qaysi davlatga qaratilgan edi",
        "options": [
          "Sovet Rossiyasiga",
          "Buyuk Britaniyaga",
          "Italiyaga",
          "Turkiyaga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1935-yil 3-oktyabrda Italiya urush e’lon qilmasdan quyidagi qaysi davlatga qarshi urush boshlagan edi",
        "options": [
          "Efiopiyaga",
          "Albaniyaga",
          "Gretsiyaga",
          "Marokashga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSh qachon Sovet ittifoqi bilan diplomatik munosabatlarini o‘rnatdi.",
        "options": [
          "1933-yil noyabr",
          "1935-yil dekabr",
          "1937-yil noyabr",
          "1934-yil yanvar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "F.Ruzvelt “Yaxshi qo‘shnichilik” siyosati orqali qaerdan AQSh qo‘shinlarini olib chiqib ketdi.",
        "options": [
          "Gaitidan",
          "Guatemaladan",
          "Gondurasdan",
          "Kubadan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQSh davlat departamenti rahbarlari qaysi voqeadan so‘ng “Yangi xalqaro tartibot” o‘rnatilganligini jar solishdi.",
        "options": [
          "Myunxen bitimidan so‘ng",
          "Gitler xokimiyatga kelganidan so‘ng",
          "“To‘rtlar axdnomasi” imzolangandan so‘ng",
          "Lenin vafotidan keyin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "F.Ruzvelt qachon “Betaraflik tshg‘risidagi qonun”ni qayta ko‘rib chiqishni parlamentga taklif qildi",
        "options": [
          "1939-yil mart",
          "1938-yil dekabr",
          "1940-yil avgust",
          "1941- yil mart"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Italiya qachonga kelib Germaniya bilan Yaponiya o‘rtasida tuzilgan “Antikommentern ahdnomasi”ga qo‘shildi",
        "options": [
          "1937-yil 6-noyabrida",
          "1938-yil 6-noyabrida",
          "1937-yil 16-noyabrida",
          "1937-yil 26-noyabrida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "AQShda ikki jahon urushi oralig‘ida qachon ishsilik eng yuqori darajaga yetgan.",
        "options": [
          "1933- yil",
          "1929 -yil",
          "1935 -yil",
          "1937- yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk Britaniyada qachon liberallar va konservatorlardan iborat birinchi koalitsion hukumat tuzildi.",
        "options": [
          "1916- yil",
          "1917- yil",
          "1919- yil",
          "1921- yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "R.Makdonald tomonidan leyboristlarning ikkinchi hukumati qachon tuzildi.",
        "options": [
          "1929- yil iyun oyida",
          "1931- yil aprel oyida",
          "1929 -yil sentyabr oyida",
          "1930 -yil noyabr oyida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "N.Chemberlen tomonidan ilgari surilgan siyosat bu......",
        "options": [
          "“Tinchlantirish”",
          "“Yon berish”",
          "“Bo‘ysundirish”",
          "“Qo‘shilmaslik”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi mamlakatda fashist oxrankasi-“Ovra” deb atalgan",
        "options": [
          "Italiya",
          "Ispaniya",
          "Portugaliya",
          "Fransiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi jahon urushi yakunlariga ko‘ra Buyuk Britaniya AQShdan qancha miqdorda qarz bo‘lib qo‘lgan edi.",
        "options": [
          "5 mlrd. dollar",
          "650 ming funt sterling",
          "8 mlrd. funt sterling",
          "4 mlrd. dollar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk Britaniya hukumati tepasida eng kam faoliyat olib borgan shaxsni aniqlang.",
        "options": [
          "Bonar Lou",
          "S.Bolduin",
          "R.Makdonald",
          "N.Chemberlen"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1926-yil 4-mayda quyidagi qaysi davlatda ishchilarning yalpi ish tashlashi boshlandi.",
        "options": [
          "Buyuk Britaniya",
          "Fransiya",
          "AQSH",
          "Italiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1936-1939-yillarda quyidagi qaysi mamlakatda fuqarolar urushi bo’lib o’tdi",
        "options": [
          "Ispaniya",
          "Marokash",
          "Italiya",
          "Misr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sovet hukumati 1918-yil dekabr oyida quyidagi qaysi davlatni mustaqilligini tan oldi",
        "options": [
          "Finlandiya",
          "Polsha",
          "Ukraina",
          "Belorussiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiya 1932-yilda o‘zaro hujum qilmaslik bo‘yicha qaysi davlat bilan shartnoma imzolangan.",
        "options": [
          "SSSR",
          "AQSh",
          "Buyuk Britaniya",
          "Italiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachon Fransiyada keksalik, nogironlik haqidagi qonun qabul qilindi.",
        "options": [
          "1926- yil",
          "1927- yil",
          "1928- yil",
          "1925- yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fransiyada qachon Leon Blyum hokimiyatdan ketdi.",
        "options": [
          "1938- yil",
          "1940 -yil",
          "1924- yil",
          "1936 -yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk Britaniyadaqaysi bosh vazir davrida moliya islohoti o‘tkazildi.",
        "options": [
          "S.Bolduin",
          "Bonar Lou",
          "R.Makdonald",
          "N.Chemberlen"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quydagi qaysi davlat Ispaniyada davom etayotgan fuqarolar urushiga keyinchalik aralashmaslik siyostini o’zgartirib, respublikachilarga yordam bera boshlaydi?",
        "options": [
          "SSSR",
          "AQSH",
          "Fransiya",
          "Angliya"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "ozbekiston",
    "name": "O'zbekiston tarixi",
    "tagline": "Qadimgi davrdan bugungacha",
    "glyph": "⌘",
    "questions": [
      {
        "question": "So‘g‘diylar qaysi hududda yashagan.",
        "options": [
          "Zarafshon va Qashqadaryo vodiysida",
          "Amudaryoning quyi oqimida",
          "Toshkent vohasi",
          "Farg’ona vodiysida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amudaryoning quyi oqimida mavjud bo’lgan qadimgi davlatni ko’rsatilgan.",
        "options": [
          "Xorazm",
          "Baqtriya",
          "Sug’diyona",
          "Marg’iyona"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Seleng‘ur g‘ori qayerda joylashgan.",
        "options": [
          "Farg’ona viloyatiSo‘x tumanida",
          "Buxoro viloyati Qorako‘l tumanida",
          "Toshkent viloyatiOhangaron tumanida",
          "Qashqadaryo viloyatiKitob tumanida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muste madaniyati tarkibiga kirgan arxeologik yodgorliklarni aniqlang.",
        "options": [
          "Teshiktosh, Obiraxmat, Xo‘jakent",
          "Joytun, Kaltaminor,Zamonbobo",
          "Yoztepa, Arvalitepa, Ko‘hnatepa",
          "Uchtepa, Qiziltepa, Yerqo‘rg‘on"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘zbekiston hududidan eng qadimgi qoyatosh rasmlari qayerdan topilgan.",
        "options": [
          "Surxondaryo viloyati Sherobod tumani",
          "Namangan viloyatiChust tumani",
          "Toshkent viloyatiParkent tumani",
          "Andijon viloyatiBuloqboshi tumani"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muste madaniyatiga oid nechta arxeologik qatlam O‘zbekiston hududida o‘rganilgan.",
        "options": [
          "24 ta",
          "34 ta",
          "44 ta",
          "54 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tuproqqal’a yodgorligi kim tomonidan o‘rganilgan.",
        "options": [
          "1938-1950-yillarda S. P. Tolstov rahbarligidagi Xorazm arxeologiya-etnografiya ekspeditsiyasi tomonidan",
          "1943-1960-yillarda Y.G‘ulomov rahbarligidagi Xorazm arxeologiya-etnografiya ekspeditsiyasi tomonidan",
          "1970-1980-yillarda A.Asqarovrahbarligidagi Xorazm arxeologiya-etnografiya ekspeditsiyasi tomonidan",
          "1953-1958-yillarda V.A.Shishkin rahbarligidagi Xorazm arxeologiya-etnografiya ekspeditsiyasi tomonidan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qadimda Tarmita deb nomlangan shaharni aniqlang.",
        "options": [
          "Termiz",
          "Samarqand",
          "Buxoro",
          "Xorazm"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oybuyurqal‘adan topilgan ko‘za sirtiga yozilgan qadimgi yozuv qaysi olim tomonidan o‘qilgan.",
        "options": [
          "V.А.Livshist",
          "S.P.Tolstov",
          "Y.G‘ulomov",
          "V.A.Shishkin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘rta Osiyodagi qaysi hududlar Aleksandr Makedoniysiga bo‘ysunmagan.",
        "options": [
          "Toshkent va Farg‘ona",
          "Bekobod va Xorazm",
          "Xo‘jand va Farg‘ona",
          "Xorazm va Marg‘iyona"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’rta Osiyoda Makedoniyalik Aleksandrga qarshi kurash olib borgan xalq qahramonini ko’rsatilgan",
        "options": [
          "Spitaman",
          "Shiroq",
          "To’maris",
          "Skunxa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qadimgi Maroqanda bugungi kunda qaysi shaharga to’g’ri keladi.",
        "options": [
          "Samarqand",
          "Buxoro",
          "Toshkent",
          "Panjikent"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Akademik A.Asqarovning ma‘lumotiga ko‘ra Jarqo‘ton yodgorligidan….",
        "options": [
          "m.av. II-ming yillikka oid o‘t(olov)parastlarning olovdoni topilgan",
          "m.av.III-ming yillikka oid ko‘za topilgan",
          "m.av. VI-ming yillikka oid Budda haykali topilgan",
          "m.av. IV-ming yillikka oid tangalar topilgan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi davlatning poytaxti Yangikent shahri bo‘lgan.",
        "options": [
          "O‘g‘uzlar davlati",
          "Qarluqlar davlati",
          "Qoraxoniylar davlati",
          "Qoraxitoylar davlati"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kushon hukmdori Kudzula Kadfiz davrida amalda bo‘lgan 1 dinor necha gramm oltinga teng bo‘lgan.",
        "options": [
          "8 gr",
          "12 gr",
          "15 gr",
          "20 gr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Birinchi marta mahalliy aholini islom diniga kiritish maqsadida masjidga kelib ibodat qiluvchular uchun ikki dirhamdan pul hadya etishni joriy qilgan xalifalik noibini aniqlang.",
        "options": [
          "Qutayba ibn Muslim",
          "Ubaydulloh ibn Ziyod",
          "Nasr ibn Sayyor",
          "Said Xaroshiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kushonlar davlatining dastlabki poytaxti hozirgi qaysi madaniy yodgorlik o‘rnida bo‘lgan.",
        "options": [
          "Dalvarzintepa",
          "Xolchayon",
          "Ayritom",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "G‘aznaviylar davlatida bosh vazirga bo‘ysunuvchi qanday devonlar (vazirliklar) bo‘lgan.",
        "options": [
          "Harbiy, elchilik, rasmiy tadbirlar, moliya, xabar-pochta",
          "Tashqi ishlar, ichki ishlar, davlat ishlari, harbiy, madaniyat, san’at",
          "Moliya, tashqi aloqalar, madaniy tadbirlar, soliq, hashar",
          "Elchilik, soliq, harbiy ishlar, ichki intizomiy ishlar, madaniyat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mo‘g‘ul hukmdorlari orasida kim birinchi bo‘lib o‘z qarorgohini Movarounnahrga (Qarshiga) ko‘chiradi.",
        "options": [
          "Kebekxon",
          "Chig‘atoy",
          "Munke",
          "Tug‘luq Temur"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kushon davlati bayrog‘ida … tasvirlanmagan.",
        "options": [
          "besh qirrali och sariq rangli yulduz tasvirlanmagan",
          "uch qirrali qizil rangli yulduz tasvirlanmagan",
          "Bo‘rining rasmi tasvirlangan",
          "Oy va quyosh tasvirlangan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Chingizxon istilo qilgan hududlardan Movarounnahrni qaysi o’g’liga ulus qilib bergan edi.",
        "options": [
          "Chig’atoy",
          "Tulu",
          "Jo’chi",
          "O’qtoy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xolchayon yodgorligi 1959-1969-yillarda qaysi tadqiqotchi tomonidan o‘rganilgan.",
        "options": [
          "G.A.Pugachenkovo",
          "E.V.Rtveladze",
          "S.P.Tolstov",
          "V.A.Shishkin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kanishka hukmronligi davrida ... tili joriy qilingan.",
        "options": [
          "Baqtriya",
          "So‘g‘d",
          "Yunon",
          "Fors"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kushon podsholigining eng rivojlangan davri.",
        "options": [
          "Kanishka hukmronligiga to‘g‘ri keladi",
          "Vima Kadfiz hukmronligiga to‘g‘ri keladi",
          "Xuvishka hukmronligiga to‘g‘ri keladi",
          "Vasudeva hukmronligiga to‘g‘ri keladi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jug‘rofiy tuzilishiga ko‘ra Kushon podsholigi…",
        "options": [
          "Beshta okrug, 350 dan ziyod shahar va qal‘alarga bo‘lingan",
          "O‘nta okrug, 200 dan ziyod shahar va qal‘alarga bo‘lingan",
          "O‘n beshta satraplik, shahar va qal‘alarga bo‘lingan",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi atama mo‘g‘ulchada “nazoratchi”, “shahar boshlig‘i” degan ma’nolarni bildiradi.",
        "options": [
          "Dorug‘a",
          "Bosqoq",
          "Noib",
          "Tavg‘ach"
        ],
        "correctAnswer": 0
      },
      {
        "question": "IX-XII asrlarda yashab ijod qilgan qomusiy olimlarni aniqlang.",
        "options": [
          "Abu Ali Ibn Sino, Abu Rayhon Beruniy, Muso al-Xorazmiy, Ahmad al-Farg‘oniy",
          "Abu Abdulloh Rudakiy, Nosir Xusrav, Yusuf Xos Xojib, Abu Mansur as-Solobiy",
          "Imom al-Buxoriy, Imom Muslim, Imom Abu Dovud,Iso at-Termiziy",
          "Nizomiddin Shomiy, Sharafuddin Ali Yazdiy,Mirzo Ulug‘bek"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muhaddis olimlar qatoriga …kiritish mumkin.",
        "options": [
          "Imom al-Buxoriy, Imom Muslim, Imom Abu Dovud, Iso at-Termiziy, Imom ibn Mojja",
          "Abu Ali Ibn Sino, Abu Rayhon Beruniy, Muso al-Xorazmiy, Ahmad al-Far‘goniy",
          "Nizomiddin Shomiy, Sharafuddin Ali Yazdiy,Mirzo Ulug‘bek",
          "Abu Abdulloh Rudakiy, Nosir Xusrav, Yusuf Xos Xojib, Abu Mansur as-Solobiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur davrida askariy qismlarni viloyatlardan to‘plash bilan qaysi mansabdagi amaldor shug‘ulangan.",
        "options": [
          "Tavochi",
          "Sarxang",
          "Sohibi Surat",
          "Bahodir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Burhoniddin al-Marg’iloniy qalamiga mansub asarlarni aniqlang.",
        "options": [
          "“Kitob al-Hidoya”, “Nashr al-mazhab”, “Kitob ul-faroiz”",
          "“Al-jome‘ as-sahih”, “Al-adab al-mufrad”, “At-tarix al-kabir”",
          "“Al-jome‘ as-sahih”, “ashShamoil annabaviya”",
          "“Ashshamoil annabaviya”, “Kitob at-tajnis val-maziy”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bayt ul-Hikma (“Donishmandlar uyi”)da tashkil etilgan Bog‘dod va Damashq rasadxonalariga rahbarlik qilgan qomusiy olim shaxsiga aniqlik kiriting.",
        "options": [
          "Muso al-Xorazmiy",
          "Abu Rayhon Beruniy",
          "Ahmad al-Far‘goniy",
          "Abu Ali Ibn Sino"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur Qundizcha jangida kim bilan to’qnashgan edi.",
        "options": [
          "To’xtamishxon",
          "Boyazid Yildirim",
          "Sulton Mahmud",
          "Qora Yusuf"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Hindiston”, “O‘tmish xalqlardan qolgan yodgorliklar” asari muallifini aniqlang.",
        "options": [
          "Abu Rayhon Beruniy",
          "Muso al-Xorazmiy",
          "Ahmad al-Farg’oniy",
          "Abu Ali Ibn Sino"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Abulqosim al-Firdavsiy qaysi asarlarni bitgan.",
        "options": [
          "“Shohnoma”, “Yusuf va Zulayho”",
          "“Kalila va Dimna”, “Sinbadnoma”",
          "“To‘rt ulus tarixi”, “Zafarnoma”",
          "“Sinbadnoma”, “Yusuf va Zulayho”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mahmud Qashg’ariyning asari… deb nomlanadi.",
        "options": [
          "“Devonu Lug‘atut turk”",
          "“Shohnoma”",
          "“Sinbadnoma”",
          "“Zafarnoma”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Qutadg‘u bilik” asari muallifini aniqlang.",
        "options": [
          "Mahmud Qashg‘ariy",
          "“To‘rt ulus tarixi”",
          "“Hibbat ul-Haqoyiq”",
          "“Kalila va Dimna”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Vaqf yerlaridan olinadigan foyda hisob-kitobi va taqsimoti bilan kim shug‘ullangan.",
        "options": [
          "Mutavalli",
          "Sadr",
          "Muftiy",
          "Muhtasib"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hadislarni yig‘uvchi, chorlovchi, tar‘gib etuvchiilar….",
        "options": [
          "Muhaddislar deyilgan",
          "Fiqhshunos olimlar deyilgan",
          "Tarixchilar deyilgan",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Islom huquqi bilan shug‘ullanuvchilar qaysi termin bilan ifodalangan.",
        "options": [
          "Fiqshunos",
          "Muhandis",
          "Tafsirchi",
          "Qori"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi hududda Qang‘ davlatiga oid o‘troq ziroatchi va savdo-hunarmandchilik madaniyati vujudga kelgan.",
        "options": [
          "Toshkent vohasida",
          "Xorazm hududida",
          "Farg‘ona vodiysida",
          "Zarafshon vodiysida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Кitob at-Tavhid”, “Ta‘viloti ahli sunna” asarlari muallifini aniqlang.",
        "options": [
          "Abu Mansur al-Moturudiy",
          "Qaffol al-Shoshiy",
          "Burhoniddin al-Marg‘inoniy",
          "Abu Nasir al-Farobiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur davlat boshqaruvida nechta devon faoliyat ko’rsatgan.",
        "options": [
          "10 ta",
          "8 ta",
          "9 ta",
          "7 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Chingizxonning davlat va jamiyat boshqaruviga oid qarashlari .... aks etgan.",
        "options": [
          "“Yasoq” kitobida",
          "Vaqf hujjatlarida",
          "“Mo’ng’ul qonunlari”da",
          "Klavixo kundaliklarida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shohruh Mirzo saroyida faoliyat yuritgan tarixchi, fiqhshunos olim, elchi….",
        "options": [
          "Abdurazzoq Samarqandiy",
          "Sharafuddin Ali Yazdiy",
          "Nizomiddin Shomiy",
          "Ibn Arabshoh"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIV-XV asrlarda Markaziy Osiyoda mantiq va falsafa fanlarining rivoji qaysi olimlar faoliyati bilan bog‘liq.",
        "options": [
          "Saadiddin Taftazoniy, Mir Sayid Jurjoniy",
          "Ali Qushchi, Mirzo Ulug‘bek",
          "Abu Mansur al-Moturudiy, Ahmad Yassaviy",
          "Bahouddin Naqshband, Muhammad Porso"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1394-1449 yillarda yashab faoliyat yuritgan davlat va madaniyat arbobini aniqlang.",
        "options": [
          "Mirzo Ulug‘bek",
          "Saadiddin Taftazoniy",
          "Mir Sayid Jurjoniy",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temurni Misrda olimlar bilan munozaraga kirishganligi haqida qaysi olim ma‘lumot beradi.",
        "options": [
          "Ibn Haldun",
          "Sharafuddin Ali Yazdiy",
          "Nizomiddin Shomiy",
          "Ibn Arabshoh"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temurning buyrug‘i bilan saroyda … faoliyati yo‘lga qo‘yilgan.",
        "options": [
          "Bitikchi va tarixchilarning",
          "Muddarislarning",
          "Darveshlarning",
          "Sufiylarning"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kimning hukumronlig davrida Samarqandda 100 dan ortiq olimlar faoliyat yuritgan.",
        "options": [
          "Mirzo Ulug‘bek",
          "Abu Sayid",
          "Husayn Boyqaro",
          "Halil sulton"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘z zamonasining Aflotuni deb ta‘riflangan olim…",
        "options": [
          "Qozizoda Rumiy",
          "Ibn Haldun",
          "Ali Qushchi",
          "Mirzo Ulug‘bek"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sаmоniylаr dаvlаtining pоytахti qаysi jаvоbdа to’g’ri ko’rsаtilgаn.",
        "options": [
          "Buхоrо shаhri",
          "Sаmаrqаnd shаhri",
          "Mаrv shаhri",
          "Tеrmiz shаhri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "IХ-ХII- аsrlаrdа o’zbеk хаlqining etnik shаkllаnishini tаshkil etgаn turkiy qаvmlаr.",
        "options": [
          "Qаrluqlаr, o’g’uzlаr, qipchоqlаr",
          "Sаmоniylаr, qоrахоniylаr, sаljuqiylаr",
          "Chig’illаr, nаymаnlаr, bаhtаrlаr",
          "Ahаmоniylаr, yunоnlаr, аrаblаr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk ipаk yo’li” O’rtа Оsiyo хаlqlаri hаyotigа qаndаy tа’sir ko’rsаtdi.",
        "options": [
          "Sаvdо – sоtiq, iqtisоdiy vа siyosiy, хаlqаrо vа diplоmаtik munоsаbаtlаrning rivоjlаnishidа kаttа rоl o’ynаydi",
          "Eng qаdimgi dаvlаt uyushmаlаrning pаydо bo’lishi vа rivоjlаnishigа turtki bo’ldi",
          "Ichki ziddiyatlаr yanаdа kuchаyib, mustаqil vilоyatlаr pаydо bo’ldi",
          "Chоrvаchilik, dеhqоnchilik vа hunаrmаndchilikning rivоjlаnishidа muhim аhаmiyatgа egа bo’ldi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“To‘rt ulus tarixi” asarining muallifini aniqlang.",
        "options": [
          "Mirzo Ulug‘bek",
          "Abdurazzoq Samarqandiy",
          "Ali Yazdiy",
          "Alisher Navoiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur o’z poytaxtini tanlashda Samarqandga yana qaysi shaharni raqobatchi sifatida ko’rgan edi.",
        "options": [
          "Kesh",
          "Buxoro",
          "Balx",
          "Marv"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur qaysi avlodiga o’z otasining ismini qo’ygan edi.",
        "options": [
          "Ulug’bek Mirzoga",
          "Boysunqur Mirzoga",
          "Ahmad Mirzoga",
          "Jahongir Mirzoga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Temur Ispaniya elchisini qayerda qabul qilgan edi.",
        "options": [
          "Bog’i Dilkushoda",
          "Konigilda",
          "Ko’ksaroyda",
          "Bo’stonsaroyda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qo’shinni yetti qismga bo’lib joylashtirish tartibini birinchi bo’lib Amir Temur joriy qilganligi haqida kim yozib qoldirgan.",
        "options": [
          "Ali Yazdiy",
          "A.Yu.Yakubovskiy",
          "Ibn Arabshoh",
          "Klavixo"
        ],
        "correctAnswer": 0
      },
      {
        "question": "V-VI аsrlаrdа eftаlitlаr dаvridа qаndаy o’zgаrishlаr sоdir etildi.",
        "options": [
          "Ijtimоiy - iqtisоdiy hаyot rivоjlаnа bоshlаdi",
          "Sаvdо vа hunаrmаndchilik rivоjlаndi",
          "Chоrvаchilik rivоjlаndi",
          "yеrgа egаlik munоsаbаtlаri o’sdi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hisor…",
        "options": [
          "shaharning devor bilan o‘ralgan qismi (arkdan tashqari) temuriylar davridashu nom bilan atalgan",
          "shaharning tashqari qismi",
          "Hunamandlar mahallasi",
          "Shaharning ichki qismi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nous nima.",
        "options": [
          "Zardushtiylik dinida ostodonlar saqlanadigan maxsus bino",
          "Zardushtiylik dinida mozor",
          "Zardushtiylikda saroy",
          "Diniy ruhoniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "U maxsus suv yig’gich inshooti bo‘lib, gumbazli aylanasimon hovuzlar tarzida qurilgan.",
        "options": [
          "Sardoba",
          "karvonsaroy",
          "hovuz",
          "hammom"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kenataf bu…",
        "options": [
          "Mayitsiz qabr yoki ruhni dafn qilish",
          "echki bolasini ko‘mish",
          "qabrtosh",
          "To‘gri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Arxantrop..",
        "options": [
          "Paleolit davrinin urug’-jamoachilik bosqichiga qadar yashab o‘tgan odam ajdodlari, ya’ni ularning suyak qoldiqlari",
          "Moment suyaklari",
          "Arxar shohlari",
          "Tog’ echkisi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Arab–ota maqbarasi qayerda joylashgan.",
        "options": [
          "Samarqand viloyati Tim qishlog’ida",
          "Buxoro viloyati Qorako‘l qishlog’ida",
          "Qashqadaryo viloyati Oqbo‘yra qishlog’ida",
          "Toshkent viloyati Bo‘zsuv qishlog’ida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Temuriylar davrida bunyod etilgan eng noyob inshootlardan biri Ulug’bek rasadxonasi Samarqandni qayerida qurilgan.",
        "options": [
          "U 1424 yilda Obi Rahmat arig’i yonida, osti tog’ jinsli toshlardan iborat tepalik ustiga qurilgan",
          "1435 yil Jo‘y arig’i atrofiga qurilgan",
          "1415 yil Registon maydoniga qurilgan",
          "1444 yil Bogi Dilkushoda qurilgan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kuchuktepa …",
        "options": [
          "Qadimgi Baqtriya xududida joylashgan so‘nggi bronza davriga oid yodgorlik xisoblanadi",
          "Qadimgi Xorazm xududida joylashgan so‘nggi bronza davriga oid yodgorlik xisoblanadi.",
          "Qadimgi Shosh xududida joylashgan so‘nggi bronza davriga oid yodgorlik xisoblanadi.",
          "Qadimgi Farg’ona xududida joylashgan so‘nggi bronza davriga oid yodgorlik xisoblanadi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dalvarzintepa, Eski Termiz, Jondavlattepa qayerda joylashgan edi.",
        "options": [
          "Baqtriyada",
          "Sug’da",
          "Xorazmda",
          "Toshkentda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qadimgi Farg’ona (Dovon)ning poytaxt shahri …",
        "options": [
          "Ershi",
          "Afrosiyob",
          "Axsi",
          "Andijon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Abdulxayrxon qayerda ko’chmanchi o’zbeklar davlatini barpo etdi?",
        "options": [
          "Dashti qipchoqda",
          "Movarounnahrda",
          "Xurosonda",
          "Sharqiy Turkistonda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XV asrning birinchi yarimida \"O’zbeklar\" deb atalgan ko’chmanchi qabilalar yashagan geografik hududni qayd eting?",
        "options": [
          "Ural tog’ yonbag’irlari, Sirdaryo quyi oqimi, Tobol, Ural, Irtish, Ilyok xamda Orol xavzasi oralig’idagi kengliklar",
          "Oltin O’rda",
          "Ural tog’ yonbag’irlari",
          "Sirdaryo quyi oqimi, Orol xavzasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shayboniyxon o’z hukmronligining dastlabki yillarida.",
        "options": [
          "Ko’chmanchi qabilalarni birlashtirib, Dashti qipchoqda o’z hokimiyatini mustahkamlashga harakat qildi",
          "Movarounnahr erlariga bostirib kirdi",
          "Bobur bilan uzoq muddatli kurash boshladi",
          "Xurosonda markazlashgan davlat tuzdi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shayboniyxon Toshkent hokimi Mahmudxon qo’shinlarini nechanchi yilda tor-mor etdi?",
        "options": [
          "1503 yilda",
          "1500 yilda",
          "1501 yilda",
          "1502 da"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shayboniyxon qo’shinlari tomonidan 1506 yilda qaysi shahar egallangan?",
        "options": [
          "Balx",
          "Urganch",
          "Xirot",
          "Toshkent"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ulug’bekning otasi…",
        "options": [
          "Shohruh",
          "Jaxongir",
          "Shoxjoxon",
          "Umarshayx"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1451-1469 yil temuriy hukmdor…",
        "options": [
          "Abu Said",
          "Muxammad",
          "Abu Bakir",
          "Abdulxayr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bobur kimning chevarasi?",
        "options": [
          "Mironshohning",
          "Jaxongirning",
          "Shoxjoxonning",
          "Umarshayxning"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bobur Farg’ona taxtiga necha yoshda o’tirdi?",
        "options": [
          "12 yoshida",
          "13 yoshida",
          "10 yoshida",
          "16 yoshi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bobur qachon tug’ilgan?",
        "options": [
          "1483 y 14-fevral",
          "1482 y 19-fevral",
          "1488 y 18-fevral",
          "1485 y 15-fevral"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bobur yosh bo’lganligi uchun taxtni kimlar boshqardi?",
        "options": [
          "Hojiqozi, Qutlug’nigorxonim",
          "Muxammad otaliq",
          "Abu Bakir",
          "Abdulxayr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Boburning onasi…",
        "options": [
          "Qutlug’nigorxonim",
          "Qutlaroyim",
          "Bibixonim",
          "Moxlaroyim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Boburning amakisi…",
        "options": [
          "Said Ahmad",
          "Abu Bakir",
          "Umar Shayx",
          "Xusayn Bayqaro"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Boburning amakisi qachon Farg’onaga yurish qildi?",
        "options": [
          "1494 yil",
          "1495 yil",
          "1492 yil",
          "1496 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shayboniylar markazlashuv siyosatining ijobiy xususiyatlarini to’g’ri toping?",
        "options": [
          "qishloq aholisining tinch mehnati uchun muayyan sharoitlar yaratildi",
          "Tarqoq xo’jaliklar qayta tiklandi",
          "Shaharlik osoyishtaligi va tinch ishlashi uchun imkoniyatlar tug’ildi",
          "Iqtisodiyotning yuksalishiga olib keldi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shayboniyxonning O’rta Osiyodagi istilochilik yurishlarining muvaffaqiyatli chiqishiga yordam bergan omilni aniqlang.",
        "options": [
          "ko’chmanchilarning jangovor an’analari bilan O’rta Osiyo shaharlarining madaniy yutuqlarini birlashtira olishi",
          "kuchli armiyaning mavjud bo’lishi",
          "Shayboniyxonning Movarounnahr zodogonlari orasidagi mashhurligi",
          "Movarounnahr zodagonlari tomonidan Shayboniyxonning qo’llab-quvvatlanishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1503 yili Shayboniyxon Toshkent va Shohruxiya shaharlarini egallagach, ushbu shaharlarga Ko’chkunchi Sulton va Suyunchxo’jani hokimlikka tayinlaydi. Ushbu tarixiy shaxslarning kelib chiqishini aniqlang?",
        "options": [
          "Ular Shayboniyxonning amakilari edilar",
          "Ular Abulxayrxonning farzandlari edilar",
          "Ular Mirzo Ulug’bekning nabiralari edilar",
          "Ular Shayboniyxonning o’g’illari edilar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi tarixiy voqeadan so’ng Temuriylar sulolasi hukmronligi quladi?",
        "options": [
          "Shayboniyxon qo’shinlarining Samarqandni bosib olishi",
          "Shayboniyxon qo’shinlarining Hirotni bosib olishi",
          "Shayboniyxon qo’shinlarining Toshkentni bosib olishi bilan",
          "Shayboniyxon qo’shinlarining Buxoroni bosib olishi bilan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xiva xonligi tashkil topgan paytda uning hududiga...",
        "options": [
          "Marv vohasi, Shimoliy Afg’oniston va Xorazm kirdi",
          "Xorazm, Buxoroning bir qismi, Toshkent vohasidan iborat edi",
          "Xorazm, Mang’ishloq, Balxan yassiligi, Dexiston va Uzboy kiradi",
          "Farg’onaning bir qismi, Xorazm va Zarafshon vohasi kiradi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro davlati xonlik deb atalgan tarixiy davrlar chegarasini ko’rsating.",
        "options": [
          "XVI asrning 60 yillaridan boshlab XVIII asrning ikkinchi yarmigacha",
          "XV asrning boshidan XVII asr boshigacha",
          "XVI asrning o’rtalaridan XVIII asr birinchi yarmigacha",
          "XVII asrdan XVIII asr oxirigacha"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVI asrga oid me’morchilik yodgorliklari quyidagi qaysi shaharda nisbatan ko’proq joylashgan?",
        "options": [
          "Buxoroda",
          "Xivada",
          "Toshkentda",
          "Shahrisabzda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’lumki, XVI-XII asrlar O’rta Osiyoda madrasalar qurish keng rasm bo’lgan edi. Quyidagi qaysi madrasa Buxoroda barpo etilmagan?",
        "options": [
          "Arab Muhammad",
          "Modarixon",
          "Abdullaxon",
          "Abdulazizxon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi asrdan boshlab Samarqandni Movarounnahrning poytaxti sifatidagi ahamiyati kamaya boshladi?",
        "options": [
          "XVI asrdan",
          "XVII asrdan boshida",
          "XVII asr oxiridan",
          "XX asr oxiridan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’rta Osiyoda XVI asrda davlat yerlari nima deb atalar edi?",
        "options": [
          "Mulk",
          "Amlok",
          "Vaqf",
          "Xiroj"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Farg’ona vodiysi Buxoro xonligidan qachon ajralib chiqdi?",
        "options": [
          "XVIII asrning boshlarida",
          "XVI asrning boshlarida",
          "XVI asrning oxirlarida",
          "XVIII asrning oxirlarida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi yildan boshlab O’rta Osiyo davlatlariga janubdan, Hindistondagi britan mulklaridan bo’lgan tahlika ayniqsa kuchaya boshladi?",
        "options": [
          "1839 yildan",
          "1836 yildan",
          "1837 yildan",
          "1838 yildan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "13 yoshli Xudoyorxon Qo’qon taxtiga o’tirgunga qadar qanday lavozimni egallagan?",
        "options": [
          "Namangan shahar hokimi edi",
          "Isfara hokimi edi",
          "amirning Qo’qondagi noibi edi",
          "xonning Toshkentdagi vakili edi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Haydar davrida birinchi bo‘lib kimlar qo’zg’olon ko’tardilar?",
        "options": [
          "Marv turkmanlari",
          "Samarqand qipchoqlari",
          "Orolbo'yi qoraqalpoqlari",
          "Shahrisabz kenagas qabilasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buyuk fransuz inqilobi sodir bo’lganidan 19 yil oldin......",
        "options": [
          "Xivada qo’ng’irotlar sulolasi hokimiyat tepasiga keldi",
          "Buxoroda hokimyat tepasiga yangi sulola-mang’itlar sulolasi keldi",
          "Orol dengizi shimolidagi o’zbek qabilalari eronliklar zulmiga qarshi qo’zg’olon ko’tardi",
          "Farg’ona rasman Qo’qon xonligi deb e'lon qilindi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro xonligida Abdullaxon I hukmronligidan keyin yuzaga kelgan qo’shhokimiyatchilikda Samarqandda kim hukmronlik qilgan?",
        "options": [
          "Ko’chkunchixoning o’g’li Abdulatifxon",
          "Abdullaxonning otasi Iskandarxon",
          "Ubaydullaxonning o’g’li Abdulazizxon",
          "Balx va Badaxshon hokimi Pirmuhammad"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1781 yili Rossiya hukumati Buxoroga savdo shartnomasi tuzishni taklif qilganida, Doniyolbiy qanday javob berdi?",
        "options": [
          "“61 ta o’zbek qabilasi boshliqlarining fikrini so’rab bilishim kerak”",
          "“92 ta o’zbek qabilasi boshliqlarning fikrini so’rab bilishim kerak”",
          "“bajonidil roziman”",
          "“qabila boshliklarining roziligisiz imzolay olmayman”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "General fon Kaufman rus podshosiga Turkiston yer tuzilishini o’zgartirish loyihasini qachon taqdim etgan edi?",
        "options": [
          "1873 yilda",
          "1870 yilda",
          "1871 yilda",
          "1872 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XVIII asr oxiri - XIX asr boshlarida Qo’qon xonligi va Toshkent bekligi o’rtasidagi munosabatlar keskinlashadi. Buning sababi nimada?",
        "options": [
          "Yunusxo’ja Qo’qon xonligidagi markaziy hokimiyatga bo’ysunishni istamagan bekliklar, viloyatlar bilan ittifoq tuzishga va ularning markaziy hokimiyatga qarshi kurashidan foydalanishga harakat qilgan edi",
          "Toshkent bekligi hududi asosan Qo’qon xonligi hududi hisobiga kengaygan edi",
          "Qo’qon xonligi mustaqil Toshkent bekligini butunlay yo’qotish yo’lini tutgan edi",
          "Ular o’rtasidagi nizolarning asosiy sababi Gurumsaroy muammosi tufayli kelib chiqayotgan edi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qo’qon xonlari sulolasi (minglar) ning asoschisi kim?",
        "options": [
          "Shohruxbiy",
          "Xudoyorxon",
          "Muhammad Rahim",
          "Arab Muhammad"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro xonligida fuqarolarning arz va shikoyatlarini tinglovchi va xal etuvchi amaldor kim?",
        "options": [
          "Dodxoh",
          "Devonbegi",
          "Ko’kaldosh",
          "Mirshab"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ko’chmanchi turkmanlar Buxoro amirligining qaysi tumanlarida yashaganlar?",
        "options": [
          "janubiy va g’arbiy tumanlarida",
          "shimoli-sharqiy tumanlarida",
          "janubi-sharqiy tumanlarida g’arbiy va sharqiy tumanlarida",
          "shimoliy va janubiy tumanlarida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1770- yilda Xiva xonligini qaysi sulola vakillari boshqargan?",
        "options": [
          "Qo’ng’irotlar",
          "Naymanlar",
          "Qipchoqlar",
          "Turkman qabilalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Nima sababdan Boqi Muhammadxonning 1604 yilga mo’ljallangan Xuroson yurishi amalga oshmasdan qoldi?",
        "options": [
          "O’sha yili u qozoq xoni Keldi Muhammadning qo’shinini mamlakat hududidan haydab chiqarish bilan band bo’ldi",
          "O’sha yili u Xorazm masalasi bilan shug’ullanishga majbur bo’lgan edi",
          "O’sha yili u Balxga hujum qilgan Eron safaviylari qo’shinini bartaraf qilishga majbur bo’ldi",
          "Bunga BoqiMuhammadxonning vafoti monelik qildi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Makkadagi Ka’baga kiraverish darvozalaridan biri ostonasi uchun oltin va kumush tutqichli yog’och zina qurdirgan hukmdorni aniqlang.",
        "options": [
          "Abdullaxon II",
          "Amir Temur",
          "Ulug’bek",
          "Amir Olimxon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qo’qon shahrini xonlikning poytaxtiga aylantirgan hukmdorni aniqlang.",
        "options": [
          "Abdurahimxon",
          "Shohruxbiy",
          "Abdulkarimxon",
          "Erdonabek"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Samarqanddagi Sherdor va Tillakori madrasalarini bunyod ettirgan mahalliy hukmdorni aniqlang.",
        "options": [
          "Yalangto’shbiy",
          "Mahmudbiy qatag’on",
          "Normuhammadxon",
          "Imomqulixon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xiva xonligida davlat unvonlarining yuqoridan quyiga qarab tartib bilan ko’rsatilgan qatorini belgilang.",
        "options": [
          "otaliq, biy, inoq",
          "Inoq, otaliq, biy",
          "inoq, biy, otaliq",
          "biy, otaliq, inoq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asrda O’rta Osiyo xonliklarida viloyat yoki tuman hoqimligiga tayinlanadigan beklarni tayinlash tartibini ko’rsating.",
        "options": [
          "Ular qushbegi tomonidan tayinlangan",
          "Ular xonlar tomonidan tayinlangan,",
          "Ular qushbegi tomonidan tavsiya qilinib, amir tomonidan tasdiqlangan",
          "Ular amir tomonidan tavsiya qilinib, qushbegi tomonidan tasdiqlangan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xonliklarda birinchi bor o’g’irlik qilib qo’lga tushgan o’g’riga qanday jazo berilgan?",
        "options": [
          "20 darra urilgan. O’g’irlangan molni 10 hissa miqdorida to’lashga majbur qilingan",
          "o’ng qo’li kesilgan",
          "chap qo’li kesilgan",
          "chap qo’lining jimjilog’i va bosh barmog’i kesilgan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rossiya Astraxanni ................ bosib oldi.",
        "options": [
          "1556 yil",
          "1559-yil",
          "1555-yil",
          "1560-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro xonligida fuqarolarning arz va shikoyatlarini tinglovchi va xal etuvchi amaldor kim?",
        "options": [
          "Dodxoh",
          "Devonbegi",
          "Ko’kaldosh",
          "Mirshab"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Shoh Murodning hukmronlik yillari",
        "options": [
          "1785-1800",
          "1780-1795",
          "1782-1792",
          "1765-1777"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1756-yil Buxoro tarixida qanday voqea sodir bo’ldi?",
        "options": [
          "Buxoro xonligi Buxoro amirligi deb atala boshladi",
          "Qo’zg’alon sodir bo’ldi",
          "Zilzila sodir bo’lgan",
          "Xonlikning iqtisodiyoti inqirozga yuz tutdi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro amirligida muntazam piyoda qo’shin tuzgan hukmdor kim?",
        "options": [
          "Amir Nasrullo",
          "Amir Xaydar",
          "Muhammad Rahimxon",
          "Amir Shoxmurod"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiston general-gubernatorligi tashkil topgan sanani aniqlang?",
        "options": [
          "1867 yil",
          "1866 yil",
          "1865 yil",
          "1868 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ruslarning 1864 yilda Toshkentga uyushtirgan bosqinchilik yurishiga kim boshchilik qilgan edi?",
        "options": [
          "M.Chernyayev",
          "D.Skobelev",
          "P.Perovskiy",
          "V.Veryovkin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkistonda mintaqaning bosh xaritasi qaysi yilda tuzib chiqildi?",
        "options": [
          "1867-yilda",
          "1869-yilda",
          "1877-yilda",
          "1886-yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XX asr boshlariga kelib asta-sekin milliy teatrlarning soni ortib bordi. Xivada, Buxoroda (1922) ham dast­labki teatrlar tashkil topdi. Andijonda teatr qachon tashkil etilgan?",
        "options": [
          "1919 yilda",
          "1917 yilda",
          "1918 yilda",
          "1916 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Andijondagi 1898-yil qo'zg'olonidan keyin podsho Nikolay II Turkiston general-gubernatori general-leytenant ........ lavozimidan chetlatdi.",
        "options": [
          "A.Vrevskiy",
          "M.Chernyayev",
          "N.Kuropatkin",
          "N.Romanovskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiston o'lkasida ............ kuchga kirgan «Harbiy holatda deb e'lon qilingan joylar haqida Qoida» joriy etildi",
        "options": [
          "1892-yil 18-iyundan",
          "1891-yil 18-iyundan",
          "1893-yil 18-iyundan",
          "1894-yil 18-iyundan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1887 yilda…",
        "options": [
          "Turkistonda Rossiya Markaziy banki bo’limi ochildi",
          "Rossiya Buxoro hududida temir yo’l va suv yo’llari qurishga ruxsat oldi",
          "Amudaryo flotiliyasi faoliyat boshladi",
          "Buxoroda Rossiya siyosiy agentlik tashkiloti ochildi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1865 yilda bo’lib o’tgan asosiy tarixiy voqealarni aniqlang?",
        "options": [
          "Toshkent chor Rossiyasi qo’shinlari tomonidan zabt etildi",
          "AQSh dagi fuqarolar urushi janub qo’shinlarining g’alabasi bilan tugadi",
          "Afrikada mustamlakachilik tugatildi.",
          "Buxoro amirligi bosib olindi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’rta Osiyo xonliklarida masjid, madrasa va mozoristonlarning sarf-xarajatlari qaysi mulk hisobidan bo’lgan?",
        "options": [
          "Vaqf",
          "Amloq",
          "Mulki Xur",
          "Xiroj"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xivadagi birinchi tosh bosmaxonaning asoschisi kim? (1877)",
        "options": [
          "Boboxon Salimov",
          "Otajon Abdalov",
          "Jumaniyoz Xoji",
          "Komil Xorazmiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rossiya imperatori Aleksandr I \"Turkiston o’lkasini boshqarish\" haqidagi nizomni qachon imzoladi?",
        "options": [
          "1886 yilda",
          "1884 yilda",
          "1885 yilda",
          "1887 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xiva xonligi tarixida birinchi sanoat korxonalari qachon paydo bo’ldi?",
        "options": [
          "XIX asrning 80-yillarida",
          "XIX asrning 60-yillarida",
          "XIX asrning 70-yillarida",
          "XIX asrning 90-yillarida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro amirligining eng so’nggi hukmdori kim?",
        "options": [
          "Amir Olimxon",
          "Amir Xaydar",
          "Muhammad Rahimxon",
          "Amir Shoxmurod"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1885-1892 yillarda Turkistonning qaysi hududlarida Chor Rossiyasiga qarshi yirik qo’zg’olonlar bo’lib o’tdi?",
        "options": [
          "Farg’ona va Toshkentda",
          "Farg’ona va Samarqandda",
          "Toshkent va Xo’jandda",
          "Andijon va Samarqandda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amir Muzaffar fon Kaufman bilan sulh tu’zishni orqaga surganda (1868 y), qaysi davlatning yordamiga ishongan edi?",
        "options": [
          "Turkiya",
          "Afg’oniston",
          "Eron",
          "Angliya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XIX asr Xiva xonligida mushrifona nima?",
        "options": [
          "Hosilni tekshiruvchi va uni miqdorini aniqlovchi shaxs",
          "Ommaviy ishlardan ozod etilgani uchun xaq to’lash",
          "Xosilni tekshiruvchi va uning miqdorini aniqlovchi amaldorga xaq to’lash",
          "Begar xabarini yetkazgani uchun xaq to’lash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’rta Osiyo xonliklarida masjid, madrasa va mozoristonlarning sarf-xarajatlari qaysi mulk hisobidan bo’lgan?",
        "options": [
          "Vaqf",
          "Amloq",
          "Mulki Xur",
          "Xiroj"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1943 yil 28 sentabrda Dnepr uchun janglarda qatnashgan va Dnerning g'arbiy qirg'og'iga birinchilar qatorida o'tgan o'zbek jangchisini aniqlang.",
        "options": [
          "Vali Nabiyev",
          "Botir Boboyev",
          "Sobir Odilov",
          "Jo'raxon Usmonov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiston o'lka musulmonlari Markaziy Kengashi tuzilganda, unga bosh kotib etib saylangan shaxsni aniqlang.",
        "options": [
          "Zakiy Validiy",
          "Mustafo Cho'qayev",
          "Turor Risqulov",
          "Munawar Qori"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jadidchilik qanday hodisa edi?",
        "options": [
          "Siyosiy va madaniy",
          "iqtisodiy va ijtimoiy",
          "iqtisodiy va siyosiy",
          "ijtimoiy va madaniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "\"Sho'roi Islomiya'1, \"Sho'roi Ulamo\", \"Turon\" va boshqa jamiyatlarning dasturlarida qanday masalaga alohida e'tibor berilgan?",
        "options": [
          "davlatchilik masalalariga",
          "tashqi iqtisodiy aloqalar masalalariga",
          "ichki bozor taraqqiyoti muammolariga",
          "yer egaligi munosabatlari masalalariga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma'lumki, sovet tuzumi o'rnatilgunga qadar (1917-yil) Xiva xonligi 20 ta beklikka bo'lingan. Xonlikda bundan tashqari yana qaysi noibliklar bor edi?",
        "options": [
          "Beshariq va Qiyot-Qo'ng'irot",
          "Hazorasp va Pitnak",
          "Qo'ng'irot va To'rtko'l",
          "Gurlan va Pitnak"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1917-yilda Sirdaryo, Samarqand va Farg'ona viloyatlarida nechta rus qarorgohi bor edi?",
        "options": [
          "330 ta",
          "335 ta",
          "340 ta",
          "350 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1917-yilda Turkiston o'lkasidagi paxta tozalash zavodlarining ko'pchiligi qayerda joylashgan edi?",
        "options": [
          "Farg'ona viloyatida",
          "Zarafshon okrugida",
          "Sirdaryo viloyatida",
          "Toshkent viloyatida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1917-yilda Turkistonga g'alla va temir buyumlar asosan qaysi davlatdan keltirilardi?",
        "options": [
          "Rossiyadan",
          "Erondan",
          "Hindistondan",
          "Qashqardan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1919-yil mart oyida Turkiston o'lkasi musulmonlar byurosi tuzilib, unga rais etib tayinlangan shaxsni aniqlang",
        "options": [
          "Turor Risqulov",
          "Zaki Validiy",
          "Mustafo Cho'qayev",
          "Muhammadjon Tinishboyev"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkiston o'lka musulmonlari kengashi (Kraymussovet) tashkil etish haqidagi qaror qaysi yig'inda qabul qilingan?",
        "options": [
          "Butunturkiston musulmonlarining birinchi qurultoyida",
          "Butunturkiston musulinonlarining ikkinchi qurultoyida",
          "Munavvarqori boshchiligidagi jadidlarning maxsus yig'inida",
          "Turkiston muxtoriyati hukumatining yig'inida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "\"Sho'roi ulamo\"ning Toshkent sho\"basiga kim asos soldi?",
        "options": [
          "Sherali Lapin",
          "Abdumalik Hoji Nabiyev",
          "Munavvarqori Abdurashidxonov",
          "Mahmudxo'ja Behbudiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1917-yil 26-30 dekabrda Qo'qon shahrida bo'lib o'tgan qurultoyda kim Turkiston muxtoriyatini \"boylar muxtoriyati\" deb atab, munofiqlik qilgan?",
        "options": [
          "o'lka mehnat komissari Poltoratskiy",
          "o’lka harbiy komissari Yakoves",
          "o'lka favqulodda ishlar komissari Krijanovskiy",
          "o'lka xalq komissarlari soveti raisi Osipov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yilning oktabrida o'tgan IV Butun Xorazrn Xalq qurultoyida Xorazm Respublikasi Konstitutsiyasiga kiritilgan o'zgartirishlardan so'ng uning asosiy g'oyasi qanday tamoyillardan iborat bo'ldi?",
        "options": [
          "barcha fuqarolarning tengligi va jamiki boyliklar xalqniki",
          "hokimiyat va islohotlarning yo'lboshchisi sovetlardir",
          "kommunistik partiyaning yetakchiligi va millatlararo qardoshlik",
          "millatlararo totuvlik va \"Xiva inqilobiy partiyasi dasturi\"ga sodiqlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xalqimiz tarixidagi dastlabki demokratik hukumatni aniqlang.",
        "options": [
          "Turkiston Muxtoriyati",
          "\"Sho'roi Islomiya\"",
          "Turkiston avtonom sovet respublikasi",
          "Turkiston Xalq Komissarlari Soveti"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amudaryo bo'limiga viloyat maqomi qachon berildi?",
        "options": [
          "1920-yil",
          "1918-yil",
          "1921-yil",
          "1919-yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amudaryo bo'limi viloyat maqomini olganidan keyin, viloyat markazi etib belgilangan shaharni aniqlang.",
        "options": [
          "To'rtko'l",
          "Sho'raxon",
          "Chimboy",
          "Xo'jayli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yilda tashkil etilgan O'rta Osiyo Iqtisodiy Kengashi nazoratni kuchaytirish maqsadida qachon qayta tuzildi?",
        "options": [
          "1926-yilda",
          "1924-yilda",
          "1925-yilda",
          "1927-yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sovetlar tomonidan O'zbekistonda qachon yer-suv islohoti o'tkazildi?",
        "options": [
          "1925-1929-yy",
          "1920-1925-yy.",
          "1924-1928-yy.",
          "1928-1932-yy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turkomissiyani tugatish, qizil armiya qo'shinlarini Turkiston hududidan olib chiqib ketish talabini qo'ygan davlat rahbarini aniqlang.",
        "options": [
          "T. Risqulov",
          "R. Inog'omov",
          "I. Xidiraliyev",
          "R. Rafiqov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sovet hukumati rahbar hodimlardan kimni \"g'oyaviy jihatdan\" tor-mor qilindi deb hisoblab uni Qashqadaryoning chekka qishloqlaridan biriga ishga jo'natib yubordi?",
        "options": [
          "R. Inog'omovni",
          "T. Risqulovni",
          "I. Xidiraliyevni",
          "R. Rafiqovni"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sovet hukumati rahbar hodimlardan kimni \"Milliy Ittihod\" tashkiloti a'zolari va \"bosmachilar bilan aloqada bo'lgan\" degan ayb bilan otishga hukm qilgan edi?",
        "options": [
          "Sh. Badriddinovni",
          "T. Risqulovni",
          "I. Xidiraliyevni",
          "R. Inog'omovni"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi shahar XX asr boshida zardo‘zlik markazi hisoblangan?",
        "options": [
          "Buxoro",
          "Samarqand",
          "Xiva",
          "Qo'qon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "BXSRning Konstitutsiyasi qachon qabul qilindi?",
        "options": [
          "1921-yilda",
          "1919-yilda",
          "1920-yilda",
          "1922-yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mustaqil Buxoro Xalq Respublikasi tashkil topgandan so‘ng, quyi hokimiyat bo‘g'ini ...",
        "options": [
          "oqsoqolliklar bo'lgan.",
          "bekliklar bo'lgan.",
          "nozirlar kengashining o'rinbosarlari edi.",
          "qisman vakolatga ega bo'lgan qoziliklar edi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Buxoro jadidchilik harakatida faol ishtirok etgan Respublika Nozirlar Kengashining raisini aniqlang",
        "options": [
          "Fayzulla Xo‘jayev",
          "Usmonxo'ja Po'latxo'jayev",
          "Mo'injon Aminov",
          "Porso Xo'jayev"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1921-yil Qizil armiya qo'shinlaridan mag’lubiyatga uchragan amir Olimxon qayerga o'tib ketadi?",
        "options": [
          "Afg'onistonga",
          "Pokistonga",
          "Eronga",
          "Turkiyaga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1923-yil Buxoro respublikasida tashkil etilgan viloyatlarni aniqlang.",
        "options": [
          "turkman va tojik",
          "muxtor turkman va muxtor qirg'iz",
          "tojik va muxtor qirg'iz",
          "muxtor qirg'iz va muxtor qozoq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘zbekiston SSRning dastlabki poytaxtini aniqlang.",
        "options": [
          "Buxoro",
          "Samarqand",
          "Toshkent",
          "Farg'ona"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oֲ‘zbek xalqining bolsheviklar amalga oshirgan oktabr to‘ntarishiga nisbatan noxush munosabatda bo‘lganligini ko‘rsatgan \"O'zbekiston ziyolilari\" nomli risola muallifini aniqlang.",
        "options": [
          "R.Inog'omov",
          "T.Risqulov",
          "LXidiraliyev",
          "R.Rafiqov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1924-yilda qoraqalpoq xalqi alifbosiga asos bo'lgan yozuvni aniqlang.",
        "options": [
          "arab",
          "lotin",
          "kirill",
          "eski turk"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kommunistik mafkura hukmronligi davrida O'zbekistondagi ko'pgina yodgorliklarni paxta dalalariga aylantirishdan saqlab qolgan olimni aniqlang.",
        "options": [
          "Ya.G'ulomov",
          "I.Mo'minov",
          "H.Abdullayev",
          "M.Masson"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1956-1962-yillarda O'zbekiston Fanlar akademiyasining prezidenti bo'lgan shaxsni aniqlang.",
        "options": [
          "H.Abdullayev",
          "T.N.Qoriniyoziy",
          "I.Mo'minov",
          "Y.G'ulomov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kommunistik mafkura hukmronligi davrida Amir Temur shaxsini to'g'ri yoritgan yagona olimni aniqlang.",
        "options": [
          "I.Mo'minov",
          "H.Abdullayev",
          "O'.Islomov",
          "M.Masson"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1917 yil 26 aprelda Xorazmda ish boshlagan Majlisga kim raislik qildi?",
        "options": [
          "Bobooxun Salimov",
          "Husaynbek Matmurodov",
          "Polvonniyoz Hoji Yusupov",
          "Ro'zimuhammad Mahram"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Respublikasining Birinchi Prezidenti I.A.Karimovning “Tarixiy xotirasiz kelajak yo‛q” asari nechinchi yilda yozilgan?",
        "options": [
          "1998 yilda",
          "1991 yilda",
          "2000 yilda",
          "2001 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1983-1988 yillarda О‘zbekiston Respublikasining rahbari kim edi?",
        "options": [
          "I.Usmoxо‘jayev",
          "SH.Rashidov",
          "R.Nishonov",
          "A.Muhiddinov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Respublikasida ma’muriy o‛zgarishlar qaysi hokimiyat oʽrganining roziligi bilan amalga oshiriladi?",
        "options": [
          "Oliy Majlisning",
          "Vazirlar Mahkamasining",
          "Ichki Ishlar vazirligining",
          "Respublika Prokuraturasining"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekistonda an’anaviy “Sharq taronalari” xalqaro musiqa festivali qaysi shaharda o‛tkazib kelinmoqda?",
        "options": [
          "Samarqand",
          "Andijon",
          "Toshkent",
          "Shaxrisabz"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Yoshlar ishlari agentligi”ni tuzish tо‘g‘risidagi О‘zbekiston Respublikasi Prezidentining Farmoni qachon qabul qilingan?",
        "options": [
          "2020 yil 30 iyunda",
          "1996 yil 16 martda",
          "2000 yil 29 avgustda",
          "2015 yil 30 mayda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Respublikasining butun hududida yoki uning ayrim joylarida favqulodda holat joriy etish vakolatiga ega?",
        "options": [
          "О‘zbekiston Respublikasining Prezidenti",
          "Vazirlar mahkamasi",
          "Oliy Majlis Senati",
          "Favqulodda Vaziyatlar vaziri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Birlashgan Millatlar Tashkiloti (BMT)ga qachon a’zo bo‛lgan?",
        "options": [
          "1992 yil 2 martda",
          "1995 yil 12 mayda",
          "1997 yil 31 avgustda",
          "1945 yil 24 oktyabrda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi davlatlardan qaysi biri O‘zbеkistоnning mustaqilligini birinchi bo‛lib tan оlgan?",
        "options": [
          "Turkiya",
          "Erоn",
          "AQSH",
          "Хitоy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘zbekiston Shanxay Hamkorlik tashkiloti (ShHT)ga qachon a’zo bo‛ldi?",
        "options": [
          "15 iyun 2001 yil",
          "12 fevral 1998 yil",
          "12 iyul 2011 yil",
          "15 iyun 2005 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi sana О‘zbekistonda “Yoshlar kuni” sifatida nishonlanadi?",
        "options": [
          "46203",
          "46163",
          "46279",
          "46296"
        ],
        "correctAnswer": 0
      },
      {
        "question": "2020 yil may oyida Toshkent shahrida fashizm ustidan erishilgan g‘alabaning 75 yilligi munosabati bilan ...",
        "options": [
          "“G‘alaba bog‘i” majmuasining ochilish marosimi bo‘lib o‘tdi",
          "Yugurish bo‘yicha yarim Marafon tadbiri o‘tkazildi",
          "Toshkent – tinchlik shahri mavzuida xalqaro konferetsiya o‘tkazildi",
          "“Adiblar hiyoboni” majmuasida katta bayram tadbiri o‘tkazildi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hozirgi kunda yurtimizda maktab ta’lim tizimidagi oʻzgarishlar qanday gʻoya asosida amalga oshirilmoqda?",
        "options": [
          "Yangi O`zbekiston maktab ostonasidan boshlanadi",
          "Kelajak maktab ostonasidan boshlanadi",
          "Kelajak oiladan boshlanadi",
          "To`gri javob yo`q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1959-1983 yillarda O‛zbekiston SSR Kompartiyasi Markaziy qo‛mitasining birinchi kotibi lavozimida faoliyat yuritgan shaxsni aniqlang?",
        "options": [
          "SH.Rashidov",
          "M.Yusupov",
          "Y.Oxunboboyev",
          "R.Nishonov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachon Qoraqalpog‘iston Respublikasining Davlat suvereniteti tо‘g‘risidagi Deklaratsiya qabul qilingan?",
        "options": [
          "1990 yil 14 dekabrda",
          "1991 yil 14 dekabrda",
          "1992 yil 24 oktabrda",
          "1990 yil 17 noyabrda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston tashabbusi bilan tashkil etilgan\"6+2\" uchrashuvi qaysi masalaga bagʻishlangan?",
        "options": [
          "Afg’oniston muammosiga",
          "Markaziy Osiyoda oziq ovqat muammosiga",
          "Orol muammosiga",
          "Terrorizmga qarshi kurash masalasiga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi sanada “O‛zbekiston hududida joylashgan harbiy qismlar va o‛quv muassasalari to‛g‘risida“gi Oliy Kengash Qarori asosida Oʻzbekiston hududida joylashgan barcha harbiy qismlar, harbiy o‛quv yurtlari respublika tasarrufiga olindi?",
        "options": [
          "1992 yil 14 yanvarda",
          "1996 yil 15 martda",
          "1991 yil 1 sentabrda",
          "1994 yil 1 iyulda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Davlat va jamiyat hayotining eng muhim masalalari xalq muhokamasiga qoʻyilishi qanday ataladi?",
        "options": [
          "Referendum",
          "Umumxalq saylovi",
          "Ombudsman",
          "Muqobil saylov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oʻzbekistonda mutlaqo yangicha mazmun va shakldagi 4 ta Prezident maktabi, 3 ta Ijod maktablari nechanchi yildan oʻz faoliyatini boshladi?",
        "options": [
          "2019 yildan",
          "2016 yildan",
          "2014 yildan",
          "2000 yildan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“O‛zbеkistоn Rеspublikаsinig Davlat Mustaqilligi asоslari to‛g’risida”gi Qоnuni qаchоn qаbul qilingаn?",
        "options": [
          "1991 yil 31 аvgustdа",
          "1991 yil 30 iyuldа",
          "1991 yil 1 iyundа",
          "1991 yil 1 sеntyabrdа"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Temuriylar tarixi davlat muzeyi qachon ochilgan?",
        "options": [
          "1996yil 18 oktabrda",
          "1993yil 18 oktabrda",
          "1994yil 18 oktabrda",
          "1991 yil 18 oktabrda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Korrupsiyaga qarshi kurashish toʻgʻrisida”gi Oʻzbekiston Respublikasining Qonuni qachon qabul qilindi?",
        "options": [
          "2017 yil 3 yanvarda",
          "2015 yil 5 martda",
          "2005 yil 15 mayda",
          "2019 yil 7 fevralda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachоndan bоshlab mаmlаkаtimizdа 21 mаrt “Navro‛z” umumхаlq milliy bayrami sifatida nishоnlаnаdigаn bo‛ldi?",
        "options": [
          "1990 yildаn",
          "1991 yildаn",
          "1992 yildаn",
          "1993 yildаn"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oʻzbekiston Respublikasining milliy valyutasi – «soʻm» qachondan muomalaga kiritildi?",
        "options": [
          "1994 yil 1 iyuldan",
          "1991 yil 18 noyabrdan",
          "1992 yil 8 dekabrdan",
          "1992 yil 2 iyuldan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oʻzbekiston Respublikasining milliy valyutasi – «soʻm» qachondan muomalaga kiritildi?",
        "options": [
          "1994 yil 1 iyuldan",
          "1991 yil 18 noyabrdan",
          "1992 yil 8 dekabrdan",
          "1992 yil 2 iyuldan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "1991 yilda yurtimizda qaysi allomaning 550 yilligi nishonlangan edi?",
        "options": [
          "Alisher Navoiy",
          "Mirzo Ulugʻbek",
          "Bobur",
          "Farg‛oniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“O‛zbekiston Tarixi” telekanali o‛z ko‛rsatuvlarini qaysi sanadan boshlab efirga uzata boshladi?",
        "options": [
          "2019 yil 1 sentabr",
          "2019 yil 18 avgust",
          "2019 yil 24 iyun",
          "2019 yil 11 iyun"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Prezident farmoniga asosan Oʻzbekiston Respublikasi Mudofaa ishlari vazirligi qachon tashkil etilgan edi?",
        "options": [
          "1991 yil 6 sentabrda",
          "1992 yil 14 yanvarda",
          "1991 yil 25 avgustda",
          "1994 yil 10 noyabrda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qachon Oʻzbekistoning 12 viloyati, 159 ta qishloq tumani, 18 ta shahar tumani hamda 120 ta shaharlarda HOKIM lavozimi ta’sis etildi?",
        "options": [
          "1992 yil yanvarda",
          "1988 yil noyabrda",
          "1995 yil oktabrda",
          "1993 yil fevralda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Respublikasining «Ta’lim to‛g’risida»gi (Yangi tahrir) Qonuni qachon qabul qilingan?",
        "options": [
          "2020 yil 23 sentyabrda",
          "2021 yil 5 iyulda",
          "1991 yil 14 iyunda",
          "1993 yil 27 martda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Mustaqillikka erishganining dastlabki yillarida huquqiy-demokratik davlat barpo etish uchun belgilangan eng muhim vazifalardan biri qaysi qatorda to‛g’ri ko‛rsatilgan?",
        "options": [
          "Davlat hokimiyatining vakillik va fuqarolarning o‛zini o‛zi boshqarish organlarining yangi sharoitlarga mos keladigan tizimini yaratish",
          "Ko‛ppartiyaviylik tizimi asosida professional parlamentni tashkil etish",
          "Jamiyatda kuchli davlatdan kuchli fuqarolik jamiyatiga o‛tish tamoyini tatbiq etish",
          "Jamiyatni modernizatsiya qilish yo‛lida ijro etuvchi hokimiyat vakolatlarini kamaytirib, vakillik organlari vakolatlarini kengaytirish, Prezidentning uchala hokimiyatni muvofiqlashtiruvchi rolini kuchaytirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbekiston Liberal-demokratik partiyasining ijtimoiy-siyosiy gazetasini aniqlang.",
        "options": [
          "“XXI asr”",
          "“Jamiyat”",
          "“O‛zbekiston ovozi”",
          "“Mohiyat”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‛zbеkistоn Rеspublikаsining bоshqaruvgа ko‛rа shakli......",
        "options": [
          "Rеspublika",
          "Ittifoq",
          "Mоnarхiya",
          "Kоnstitutsiоn mоnarхiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Jaloliddin Manguberdi tavalludining 800 yilligi qachon nishonlandi?",
        "options": [
          "1999 yilda",
          "2001 yilda",
          "1997 yilda",
          "1998 yilda"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘zbekiston Respublikasi davlat hokimiyatining tizimi nechchiga bo‛linadi?",
        "options": [
          "3 ga, ya’ni qonun chiqaruvchi, ijro etuvchi, sud hokimiyati",
          "4 ga, ya’ni mahalla oqsoqoli, hokim, Vazirlar Mahkamasi, Prezident",
          "2 ga, ya’ni demokratiya va monarhiya",
          "1 ga, ya’ni Respublika"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "metodika",
    "name": "Tarix o‘qitish metodikasi",
    "tagline": "Pedagogik texnologiyalar, metodlar",
    "glyph": "M",
    "questions": [
      {
        "question": "Metod nima?",
        "options": [
          "(yunoncha metodos –nazariya, bilim va tadqiqot yo‘llari) – u yoki bu maqsadlarga erishish yo‘llari, uslublari, aniq va konkret vazifalarni hal etish usullari",
          "Lotincha metodos - bilim , nazariya, ilmiy tadqiqot yo‘llarini o‘rganadi",
          "Lotincha metodos, falsafiy yondashuv demakdir",
          "Lotincha metodos, maxsus tarixiy fanlarni tahlil qilishda yordam beradi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limni tashkil etishning shakllari:",
        "options": [
          "jamoaviy, frontal, kichik guruhlarda ish oliib borish, juftlikda ishlash, individual",
          "frontal, kichik guruhlarda ish oliib borish, juftlikda ishlash, individual",
          "jamoaviy, kichik guruhlarda ish oliib borish, juftlikda ishlash, individual",
          "jamoaviy, frontal, juftlikda ishlash, individual"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys stadi ilk bora Garvard universitetining huquq maktabida ..... yilda qo‘llanilgan edi?",
        "options": [
          "1870 yil",
          "1882 yil",
          "1885 yil",
          "1878 yil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi pedagogik texnologiya mavzu, matn, bo‘lim bo‘yicha izlanuvchilikni olib borish imkonini beradi va tizimli fikrlash, tuzilmaga keltirish, tahlil qilish ko‘nikmalarini rivojlantiradi.",
        "options": [
          "B/B/B jadvali",
          "Insert",
          "Keys-stadi",
          "Loyiha"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi pedagogik texnologiya o‘rganilayotgan hodisa, tushuncha, fikrlarni ikki va undan ortiq jihatlari bo‘yicha taqqoslashni ta’minlaydi.",
        "options": [
          "Konseptual jadval",
          "Venna” diagrammasi",
          "B/B/B jadvali",
          "Nima uchun” sxemasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Toifali sharh nima?",
        "options": [
          "ajratilgan alomatlar asosida olingan ma’lumotlarni birlashtirishni ta’minlaydigan usul",
          "amaliy yoki ilmiy muammolar echish g‘oyasini jamoaviy yuzaga keltirish",
          "munozara usullari yoki o‘quv suhbatini amaliy usul bilan moslashdan iborat ta’lim uslubi",
          "ma’ruza jarayonida o‘quvchilarni eslab qolgan narsalarini yana bir marta aytilganlarni qaytarib aytishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim texnologiyasining turlari qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "muammoli, shaxsga yo‘naltirilgan, masofaviy, modulli",
          "noan’anaviy, an’anaviy, mustaxkamlash",
          "aralash, ma’ruza, masofaviy, nazariy",
          "nazariy, amaliy, aralash, mustahkamlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim shakllarini optimallashtirishga qaratilgan va texnika hamda inson omillari, uning o‘zaro hamkorligi asosida o‘qitish jarayoni va bilimlarni egallash, yaratish, qo‘llash va belgilashning tizimli metodi qanday nomlanadi?",
        "options": [
          "Pedagogik texnologiyaga berilgan YUNESKO ta’rifi",
          "Pedagogik tizim",
          "Pedagogik texnika",
          "Pedagogik jarayondagi o‘qitiuvchi va talaba hamkorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Berilgan yoki mavjud sharoitda pedagogik vazifalarga maqbul erishish yo‘llarini ongli loyihalash (21 asrdagi ta’rif)",
        "options": [
          "Pedagogik texnologiya",
          "Pedagogik tizim",
          "Pedagogik texnika",
          "Pedagogik jarayondagi o‘qitiuvchi va talaba hamkorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": ".... Kompyuter texnologiyalariga asoslangan ta’lim metodlaridan foydalanishga mo‘ljallangan o‘qitish vositasi bo‘lib, undan mustaqil ta’lim olishda va o‘quv materiallarini har tomonlama samarali o‘zlashtirishda foydalanish mumkin. Unda o‘quv materiallari o‘quvchiga interfaol usullar bilan, psixologik va pedagogik jihatlar, zamonaviy axborot texnologiyalari, audio va video animatsiyalar imkoniyatlaridan keng foydalanilanish imkonii beradi.",
        "options": [
          "Elektron darslik",
          "elektron majmua",
          "slaydlar",
          "multimediya animatsiyalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Elektron darsliklar qanday qismlardan iborat",
        "options": [
          "O‘rgatuvchi qism gipermatnga asoslangan va statik, dinamik rasmlar; mashq qildiruvchi xatolarni ko‘rsatib beruvchi va to‘g‘ri xulosaga olib keluvchi qism, nazorat qiluvchi testlar orqali nazorat qiluvchi tizim",
          "kirish, asosiy qism va xulosa",
          "o‘rgatuvchi va nazorat qiluvchi, baholovchi",
          "o‘rgatuvchi, namoyish etuvchi, baholovchi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "An’anaviy o‘quv jarayoniga mos qatorlarni aniqlang",
        "options": [
          "Tayyor bilimlarni o‘qituvchi tomonidan talabalarga etkazilishi",
          "Tizimiy yondoshuv asosida o‘quv jarayonini loyihalash",
          "Andoza ko‘rinishidagi, kutilgan natija shaklidagi o‘quv maqsadini mumkin qadar aniqlashtirish",
          "Axborotlar bilan mustaqil ishlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabalarni matn ustida fikrlash, o‘z g‘oyalarini shakllantirish va ularni hamkorlar yordamida muayyan shaklda ifodalashga yo‘naltiradigan texnikasi qaysi qatorda to‘?ri ko‘rsatilgan?",
        "options": [
          "“O‘ylang - juftlikda ishlang - fikr almashing”",
          "“Insert”",
          "“Ilon izi”",
          "“Aqliy hujum”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim beruvchi va ta’lim oluvchilarning hamkorlikdagi faoliyatini tashkillashtirish shakllari qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "ommaviy, jamoaviy, guruhli, yakka tartibli",
          "sinf, sinfdan tashqari, individual, amaliy",
          "yakka tartibli, tabaqalashtirilgan, guruhli, juftlikda ishlash",
          "Juftlikda ishlash, guruhli, individual, ommaviy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hamkorlikdagi o‘qishni tashkil etish usullariga qaysi biri kirmaydi?",
        "options": [
          "«Aqliy hujum»",
          "«Birgalikda o‘qiymiz»",
          "«Arra»",
          "«O‘ylang-Juftlikda ishlang-Fikr almashing»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim vositasi nima?",
        "options": [
          "Ma’lum o‘qitish usulini muvaffaqiyatli amalga oshirish uchun zarur bo‘lgan yordamchi o‘quv materiallari",
          "Ta’lim jarayonida o‘qituvchi va o‘quvchilarning kutilgan maqsadga erishishiga qaratilgan birgalikdagi faoliyati",
          "Dars jarayonida tabiiy va so‘n’iy ko‘rgazmali vositalardan foydalanish",
          "Tushuntirish, suhbat, ma’ruza."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quv materialini ko‘rgazmali taqdim etish va shu bilan birga o‘qitish samaradorligini oshiruvchi yordamchi materiallar nima deb ataladi?",
        "options": [
          "Ta’lim vositalari",
          "Ta’lim shakllari",
          "Ta’lim usullari",
          "Ta’lim tamoyillari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafikli organayzerlar bu...",
        "options": [
          "fikriy jarayonlarni ko‘rgazmali taqdim etish vositasi",
          "muammoning dastlabki sabablarini aniqlash bo‘yicha fikrlar zanjiri",
          "tanqidiy mushohadani rivojlantiruvchi texnologiya",
          "tizimli fikrlash, solishtirish vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’ruza - o‘qitishni tashkil etishning yetakchi shakli hisoblanib, quyidagi vazifalarni amalga oshirishga imkon beradi:",
        "options": [
          "yo‘naltiruvchilik, axborotlilik, metodologiklik, tarbiyalovchilik, rivojlantiruvchilik",
          "Muammoli,anjuman-ma’ruza, konspektsiz ma’ruza, mualliflik ma’ruzasi, munozarali ma’ruza",
          "qaytar aloqadan foydalanilgan ma’ruza, aniq vaziyatlarni ko‘rib chiqish ma’ruzasi, ma’ruza-suhbat",
          "Yangi bilimlarni beradi xolos"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dars o‘tish shakllarini sanang",
        "options": [
          "Ma’ruza seminar amaliy mashg‘ulot laboratoriya mashg‘uloti mustaqil ish, ommaviy juftlikda, guruxlarda ishlash, yakka tartibda",
          "Diaproyektor grafoproyektor doska-bloknot doska-stend flipchart videofilmlar yozuv taxtasiva boshq.",
          "ma’ruza hikoya tushuntirish yo‘riqnoma berish namoyish ko‘rsatish videousul",
          "Suhbat bahs aqliy hujum ta’limiy o‘yin pinbord insert"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Texnologik xaritaga ta’rif bering",
        "options": [
          "Texnologik xarita - ma’lum bir mahsulotni ishlab chiqarish texnologik operatsiyalarini ketma-ketligini bayon qiluvchi hujjat",
          "Texnologik xarita - ishlab chiqariladigan mahsulotga ishlov berishning yagona jarayonini hosil qiluvchi texnik operatsiyalarning asosiy hujjati.",
          "Texnologik jaryon – barcha texnik harakatlarni boshqarishga oid hujjatlar majmuasi.",
          "Texnologik xarita mutaxassis tomonidan o‘zining ish joyida bajariladigan, yakuniga etkazilgan harakat ko‘rinishidagi jarayonning bir qismini ifodalovchi hujjat."
        ],
        "correctAnswer": 0
      },
      {
        "question": "interfaol ta’lim berish usuli -",
        "options": [
          "ta’lim oluvchilarning bilim faoliyatlarini rag‘batlantiruvchi usuldir. U yoki boshqa muammoni yechish to‘g‘risidagi fikrlarni erkin almashinuvini nazarda tutuvchi dialog asosida quriladi va dialogli ta’lim berish, bunda ta’lim beruvchi va ta’lim oluvchi, ta’lim oluvchi va kompyuterning o‘zaro harakati amalga oshiriladi",
          "belgilangan ta’lim berish maqsadiga erishish bo‘yicha ta’lim beruvchi va ta’lim oluvchilar o‘zaro faoliyatini tartibli tashkil etish yo‘li",
          "auditoriya bo‘ylab harakat qilish, mimikadan foydalanish, materiallarni dalillar bilan isbotlash, o‘quv materiali tempini tanlash",
          "Innovatsion texnologiyalar loyihalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shakl va ta’lim shakliga ta’rif bering",
        "options": [
          "(forma-lotincha-tashqi ko‘rinish) – tashqi qobiq, tashqi ko‘rinish ma’nosini ifodalaydi. bu o‘quv jarayonini mavjud bo‘lish yo‘li, uning ichki mohiyati, mantiqi va mazmuni uchun qobiqdir.",
          "Ma’ruza Seminar Amaliy mashg‘ulot Laboratoriya mashg‘uloti Mustaqil ish",
          "Kunduzgi Masofaviy",
          "Auditoriya ishi Auditoriyadan tashqari ish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Model, mulyajlar, grafik, diagrammalar ta’lim vositalarining qaysi turiga kiradi?",
        "options": [
          "yordamchi ta’lim vositalariga",
          "texnik ta’lim vositalariga",
          "o‘quv-uslubiy ta’lim vositalariga",
          "faol ta’lim vositalariga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi qatorda ta’lim texnologiyasi bosqichlarning ketma-ketligi to‘g‘ri ko‘rsatilgan?",
        "options": [
          "tayyorlov, loyihalash, bajarish, tahlil qilish, baholash",
          "tayyorlov, loyihalash, tahlil qilish, bajarish, baholash",
          "tayyorlov, bajarish, loyihalash, tahlil qilish, baholash",
          "tayyorlov, loyihalash, baholash, bajarish, tahlil qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "An’anaviy o‘quv jarayoniga mos qatorlarni aniqlang",
        "options": [
          "Tayyor bilimlarni o‘qituvchi tomonidan talabalarga etkazilishi",
          "Tizimiy yondoshuv asosida o‘quv jarayonini loyihalash",
          "Andoza ko‘rinishidagi, kutilgan natija shaklidagi o‘quv maqsadini mumkin qadar aniqlashtirish",
          "Axborotlar bilan mustaqil ishlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafikli organayzerlar nima?",
        "options": [
          "Fikriy jarayonlarni ko‘rgazmali taqdim etish vositasi",
          "fikriy jarayonlarni ijodiy taqdim etish vositasi",
          "fikriy jarayonlarni jadvallar yordamida taqdim etish vositasi",
          "fikriy jarayonlarni og‘zaki taqdim etish vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafikli tashkillashtiruvchilarga qaysi biri kirmaydi?",
        "options": [
          "“Aqliy hujum”",
          "“Insert” jadvali",
          "“Baliq skeleti”",
          "B / BX /B"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fikriy jarayonlarni ko‘rgazmali taqdim etish vositasi nima deb ataladi?",
        "options": [
          "Grafik organayzer",
          "Ko‘rgazmalik vosita",
          "Ta’lim usuli",
          "Ta’lim vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qanday grafik organayzer mustaqil o‘qish vaqtida olgan ma’lumotlarni, eshitgan ma’ruzalarni tizimlashtirishni ta’minlaydi; olingan ma’lumotni tasdiqlash, aniqlash, chetga chiqish, kuzatish, avval o‘zlashtirgan ma’lumotlarni bog‘lash qobiliyatini shakllantirishga yordam beradi?",
        "options": [
          "Insert jadvali",
          "SWOT-tahlil jadvali",
          "Toifalash jadvali",
          "Konseptual jadval"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qanday grafik organayzer o‘rganilayotgan hodisa, tushuncha, fikrlarni ikki va undan ortiq jihatlari bo‘yicha taqqoslashni ta’minlaydi?",
        "options": [
          "Konseptual jadval",
          "SWOT-tahlil jadvali",
          "Toifalash jadvali",
          "Insert jadvali"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi pedagogik texnologiya bitta konsepsiya (ma’lumot)ning jihatini o‘zaro solishtirish yoki ularni (ijobiy/salbiy) tanqidiy mushohada asosida tahlil qiladi?",
        "options": [
          "T - jadval",
          "Insert",
          "Keys-staldi",
          "Loyiha"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Aqliy hujum” nima?",
        "options": [
          "amaliy yoki ilmiy muammolar echish g‘oyasini jamoaviy yuzaga keltirish",
          "munozara usullari yoki o‘quv suhbatini amaliy usul bilan moslashdan iborat ta’lim uslubi",
          "o‘yinli so‘rov ma’ruza jarayonida o‘quvchilarni eslab qolgan narsalarini yana bir mara aytilganlarni qaytarib aytishi",
          "ajratilgan alomatlar asosida olingan ma’lumotlarni birlashtirishni ta’minlaydigan usul"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Blits-so‘rov” nima?",
        "options": [
          "ma’ruza jarayonida o‘quvchilarni eslab qolgan narsalarini yana bir mara aytilganlarni qaytarib aytishi",
          "amaliy yoki ilmiy muammolar echish g‘oyasini jamoaviy yuzaga keltirish",
          "munozara usullari yoki o‘quv suhbatini amaliy usul bilan moslashdan iborat ta’lim uslubi",
          "ajratilgan alomatlar asosida olingan ma’lumotlarni birlashtirishni ta’minlaydigan usul"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Noan’anaviy ta’lim shakliga nimalar kiradi?",
        "options": [
          "muammoli ma’ruza, fakultativ seminar, bahs-munozara, davra stoli, viktorina va xokazo",
          "kirish darslari, bilim, ko‘nikma va malakalarni tekshirish darslari",
          "yangi bilimlarni bayon qilish darsi, takrorlash darslari",
          "ekskursiya, ma’ruza, viktorina"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Texnologiya”",
        "options": [
          "yunoncha so‘zdan kelib chiqqan bo‘lib “techne” - mahorat, san’at, malaka va “logos” - so‘z, ta’limot ma’nolarini anglatadi.",
          "lotincha so‘zdan kelib chiqqan bo‘lib “techne” - mahorat, san’at, malaka va “logos” - so‘z, ta’limot ma’nolarini anglatadi.",
          "ingliz tilidan kelib chiqqan bo‘lib “techne” - mahorat, san’at, malaka va “logos” - so‘z, ta’limot ma’nolarini anglatadi.",
          "rus tilidan kelib chiqqan bo‘lib “techne” - mahorat, san’at, malaka va “logos” - so‘z, ta’limot ma’nolarini anglatadi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "(breynstroming-aqllar to‘zoni) - amaliy yoki ilmiy muammolar yechish g‘oyasini jamoaviy yuzaga keltirish.",
        "options": [
          "Aqliy hujum usuli",
          "pinbord",
          "klaster",
          "bumerang"
        ],
        "correctAnswer": 0
      },
      {
        "question": "DTS, o‘quv dasturi, uslubiyati va didaktik talablari asosida belgilangan milliy istiqlol g‘oya singdirilgan, muayyan o‘quv fanining mavzulari to‘liq yoritilgan, tegishli fan asoslarini mukammal o‘zlashtirilishiga qaratilgan hamda turdosh ta’lim yunalishlarida foydalanish imkoniyatlari hisobga olingan nashr ...",
        "options": [
          "darslik",
          "o‘quv qo‘llanma",
          "metodik qo‘llanma",
          "risola"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muammoli savollarni ko‘rish yoki maummoli masalalarni ko‘rsatish yo‘li bilan ketma-ket modellashtiriladigan muammoli vaziyatlar mantiqiga tayangan xolda olib boriladigan ma’ruza turi",
        "options": [
          "muammoli ma’ruza",
          "ma’ruza",
          "seminar",
          "amaliy mashg‘ulot"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Informatikaning dasturiy va texnikaviy vositalari asosida audio, video, matn, grafika va animatsiya (obektlarni fazodagi xarakati) samaralari asosida o‘quv materialini o‘quvchilarga yetkazib berishning mujassamlashgai xoldagi ko‘rinishi, kompyuterning axborotlarni rangli grafika, matn va grafikli, ovozli, annimatsiyali, videofilmlar kabi turli ko‘rinishlari bilan ishlash imkoniyati.",
        "options": [
          "multimedia",
          "video lavha",
          "grafoproyektor",
          "proyektor"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ko‘pchilik manfaatdor tomonlar kelishuvi asosida ishlab chiqilgan va ma’lum sohalarda eng makbul darajali tartiblashtirishga yo‘naltirilgan hamda faoliyatning har bir turlari yoki natijalariga tegishli bulgan umumiy va takror qo‘llaniladigan qoidalar, tavsiyalar, talablar va usullar belgilangan va tan olingan idora tomonidan tasdiqlangan meyoriy xujjat.",
        "options": [
          "standart",
          "qonun",
          "hujjat",
          "reja"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muayyan (ishlab chiqarish, ijtimoiy, iqtisodiy va b.) jarayonlarning yuksak mahorat, san’at darajasida tashkil etilishi",
        "options": [
          "Texnologiya",
          "Innovatsiya",
          "Novatsiya",
          "Modernizatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim (o‘qitish) jarayonining yuksak mahorat, san’at darajasida tashkil etilishi",
        "options": [
          "Ta’lim texnologiyasi",
          "Ta’lim konsepsiyasi",
          "Ta’lim natijasi",
          "Ta’lim maqsadi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘quv jarayonining majmuaviy vazifalarini yechishga qaratilgan o‘qituvchi va talabalarning birgalikdagi faoliyati usuli – ...",
        "options": [
          "Ta’lim metodi",
          "Ta’lim shakli",
          "Ta’lim tamoyili",
          "Ta’lim vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muayyan o‘quv predmetini o‘qitishning ilmiy asoslangan metod, qoida va usullar tizimi – bu ...",
        "options": [
          "Ta’lim metodikasi",
          "Ta’lim Metodi",
          "Ta’lim shakli",
          "Ta’lim vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’lum bir shaxsning vazifa va majburiyatlarini bajarishdagi ruhiy holati, xatti-harakatlar mohiyatini ochib berishga qaratilgan o‘yin – bu ...",
        "options": [
          "Rolli o‘yin",
          "Syujetli o‘yin",
          "Didaktik o‘yin",
          "Imitatsion o‘yin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsning o‘z xatti-harakatlari asoslarini tushunib yetishi, fahmlashi, o‘z-o‘zini tahlil qilishi – bu ...",
        "options": [
          "Refleksiya",
          "Relaksatsiya",
          "Repetitsiya",
          "Regeneratsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Baliq skeleti”, “BBB”, “Konseptual jadval”, “Venn diagrammasi”, “Insert”, “Klaster”, “Nima uchun?”, “Qanday?”. Ular ...",
        "options": [
          "Grafik organayzerlar",
          "Ta’lim strategiyalari",
          "Ta’lim turlari",
          "Ta’lim vositalari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Zamonaviy elektron o‘quv dastur – bu ...",
        "options": [
          "Sillabus",
          "Portfolio",
          "Assesment",
          "Protokol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Faoliyat shakllarini to‘g‘ri belgilash, metod, vositalarni maqsadga muvofiq tanlay olish, ularni samarali qo‘llash qanday kompetentlik negizida amalga oshiriladi?",
        "options": [
          "Metodik kompetentlik",
          "Psixologik kompetentlik",
          "Ijtimoiy kompetentlik",
          "Innovatsion kompetentlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Axborot muhitida muhim ma’lumotlarni izlash, yig‘ish, saralash, qayta ishlash, ulardan maqsadli foydalanish qanday kompetentlik negizida kechadi?",
        "options": [
          "Axborot kompetentligi",
          "Metodik kompetentlik",
          "Psixologik kompetentlik",
          "Ijtimoiy kompetentlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik faoliyatga tanqidiy, ijodiy yondashish, ijodkorlik malakalariga egaligini namoyish eta olish qanday kompetentlikni ifodalaydi?",
        "options": [
          "Kreativ kompetentlik",
          "Axborot kompetentligi",
          "Metodik kompetentlik",
          "Psixologik kompetentlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qanday kompetentlik ta’lim jarayonining barcha ishtirokchilari, jumladan, talabalar bilan samimiy muloqotda bo‘lishga yordam beradi?",
        "options": [
          "Kommunikativ kompetentlik",
          "Psixologik kompetentlik",
          "Axborot kompetentligi",
          "Metodik kompetentlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Izchil ravishda kasbiy o‘sishga erishish, malaka darajasini oshirib borish qanday kompetentlik negizida amalga oshadi?",
        "options": [
          "Shaxsiy kompetentlik",
          "Kommunikativ kompetentlik",
          "Psixologik kompetentlik",
          "Metodik kompetentlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kasbiy-pedagogik BKMni boyitadigan ilg‘or texnologiyalarni o‘zlashtirish, zamonaviy vosita, texnika va texnologiyalardan foydalana olish qanday kompetentlik negizida aks etadi?",
        "options": [
          "Texnologik kompetentlik",
          "Metodik kompetentlik",
          "Shaxsiy kompetentlik",
          "Axborot kompetentligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amaliy takliflarni ishlab chiqarish, muammoli masala va vaziyatlarni hal qilish, shaxsiy kuzatishlarga asoslangan holda yechimni topishga oid topshiriqlar qanday nomlanadi?",
        "options": [
          "Ijodiy fikrlashni talab etuvchi topshiriqlar",
          "Raqam va ma’lumotlar bilan ishlashda oddiy fikriy operatsiyalarni taqozo etuvchi topshiriqlar",
          "Raqam va ma’lumotlar bilan ishlashda murakkab fikriy operatsiyalarni taqozo etuvchi topshiriqlar",
          "Ma’lumotlarni e’lon qilishga oid topshiriqlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "hikoya, monolog, dialog, suhbat, syujetli hikoya, tahlil qilib tushuntirish, tarixiy manbalar bilan ishlash; tarixiy adabiyotlar, tarixiy hujjatlarni izohlash – qaysi metodning usullari jamlanmasi",
        "options": [
          "og‘zaki o‘qitish metodi",
          "Ko‘rsatmali metod",
          "Muammoli metod",
          "Amaliy metod"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ko‘rsatmali metodning turlari",
        "options": [
          "Illyustratsiya metodi, namoyish (demonstratsiya) metodi, tabiiy ko‘rsatmali qurollar",
          "namoyish (demonstratsiya) metodi",
          "Ilmiy tadqiqotchilik metodida",
          "Muammoli ta’lim metodlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarixiy kartalarning turlari",
        "options": [
          "tarixiy iqtisodiy, tarixiy etnografik, arxeologik, tarixiy-siyosiy, harbiy-tarixiy, tarixiy-madaniy.",
          "Geografik, iqtisodiy, tarixiy etnografik, arxeologik, tarixiy-siyosiy, harbiy-tarixiy, tarixiy-madaniy.",
          "tarixiy iqtisodiy, tarixiy etnografik, arxeologik, tarixiy-siyosiy, harbiy-tarixiy, geografik.",
          "tarixiy iqtisodiy, tarixiy etnografik, arxeologik, tarixiy-siyosiy, geografik, tarixiy-madaniy."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Namunaga qarab o‘quv materialini o‘zlashtirish metodidir. Har qanday materialni bayon qilishda yoki bu materialni tezroq tushunish uchun (darsliklarda beriladi) tayyor yechib ko‘rsatilgan metodik nuqtai nazardan qulay mashqlar berilishi hozir odatga aylangan. Bunday mashqlar o‘rganilgandan so‘ng boshqa namunaga o‘xshamagan lekin namunaga qarab yechilishi mumkin bo‘lgan mashqlar tushuniladi. Mashqlar (savollar) namunadagi ya’ni reproduktiv usuldagi o‘zlashtirishga mo‘ljallangan o‘quv materiali bo‘lsa, bularni namuna bilan bir xil turdagi o‘quv materiali deyiladi.",
        "options": [
          "Reproduktiv metod -",
          "Muammoli ta’lim metodlari",
          "Izlanishli metod (evristika)",
          "Ilmiy tadqiqotchilik metodida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’ruza - o‘qitishni tashkil etishning yetakchi shakli hisoblanib, quyidagi vazifalarni amalga oshirishga imkon beradi:",
        "options": [
          "yo‘naltirish, axborot berish, metodologik, tarbiyalovchi, rivojlantiruvchilik",
          "yo‘naltirish, axborot berish, nazorat qilish, umumlashtirish, baholash",
          "yo‘naltirish, metodologik, nazorat qilish, umumlashtirish, baholash",
          "yo‘naltirish, nazorat qilish, umumlashtirish, baholash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ilmiy tadqiqot metodiga qaysijavobdagi kuzatishni kiritish mumkin?",
        "options": [
          "pedagog o’quvchilar rivojlanishini murakkab ta’limiy vazifalarini bajarishlari sharoitida kuzatadi",
          "Sinf rahbari o’quvchilarni darslardagi hulqini kuzatadi",
          "Navbatchi tartib qoidalarga rioya etilishini kuzatadi",
          "O’qituvchi o’quvchilar bilan ekskursiya vaqtida quyoshning botishini kuzatadi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dars, ma’ruza, seminar, o’quv ekskursiyasi, laboratoriya, amaliy, konsultatsiya ga kiradi.",
        "options": [
          "ta’lim faoliyatini tashkil etish shakli",
          "ta’lim texnologiyasi",
          "ta’lim usuli",
          "ta’lim vositasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Faoliyatni tashkil qilish metodlarini belgilang.",
        "options": [
          "mashq, uqtirish, talab, topshiriq, tarbiyaviy vaziyatlar, jamoa fikri",
          "talab, musobaqa, suhbat, uqtirish",
          "o’z-o’ziga hisob berish, o’z-o’zini baholash, uqtirish, topshiriq",
          "namuna, talab, rahbatlantirish, uqtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Insonning ma’lum bir faoliyat turiga nisbatan tug’ma moyilligi nima deb ataladi?",
        "options": [
          "layoqat",
          "qiziqish",
          "Qobiliyat",
          "kasbiy yo’nalganilk"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Davlat ta’lim standarti qaysi tashkilot tomonidan tasdiqlanadi?",
        "options": [
          "O‘zR Vazirlar mahkamasi",
          "Oliy o‘quv yurti",
          "Oliy va o‘rta maxsus ta’lim vazirligi",
          "Xalq ta’lim vazirligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijtimoiy ongini shakllantiruvchi metodlar:",
        "options": [
          "hikoya, tushuntirish, ta’sir o’tkazish, suhbat, muhokama, namuna",
          "uqtirish, topshiriq, rag’bat, mashq.",
          "ishontirish, suhbat, topshiriq,namuna, mashq",
          "talab, tarbiyalovchi vaziyat, rag’batlantirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Breyn stroming-aqllar to‘zoni) – amaliy yoki ilmiy muammolar yechish g‘oyasini jamoaviy yuzaga keltirish",
        "options": [
          "Aqliy hujum",
          "Blits-so‘rov",
          "Munozara",
          "Pinbord"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inglizchadan: pin- mahkamlash, board – yozuv taxtasi) munozara usullari yoki o‘quv suhbatini amaliy usul bilan moslashdan iborat...",
        "options": [
          "Pinbord",
          "Blits-so‘rov",
          "Munozara",
          "Disskussiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Matn bilan ishlash jarayonida ta’lim oluvchiga o‘zining mustaqil bilim olishini faol kuzatish imkonini ta’minlovchi kuchli asbob",
        "options": [
          "Insert",
          "Pinbord",
          "Munozara",
          "Blits-so‘rov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim beruvchini ta’lim oluvchilar bilan faol suhbatga kirishishiga yo‘naltirilgan, nazariy bilimlarni amaliy faoliyatda amalga oshrish uchun sharoitni ta’minlovchi, mashg‘ulotni o‘qitish shakli",
        "options": [
          "Seminar",
          "Ma’ruza",
          "Laboratoriya",
          "noan’anaviy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "(forma-lotincha-tashqi ko‘rinish) – tashqi qobiq, tashqi ko‘rinish ma’nosini ifodalaydi. Bu o‘quv jarayonini mavjud bo‘lish yo‘li, uning ichki mohiyati, mantiqi va mazmuni uchun qobiq",
        "options": [
          "Ta’lim shakli",
          "Darsjarayoni",
          "Ma’ruza",
          "Seminar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Darslikdagi asosiy matn komponentlari...",
        "options": [
          "Qo‘shimcha, asosiy, izohlovchi",
          "Metodik, illyustratsiyalar, mundarija",
          "Asosiy, metodik, mundarija",
          "Mundarija, atamalar, biografik ma’lumotlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Darslikdagi asosiy matndan tashqari komponentlar tarkibi...",
        "options": [
          "Metodik, illyustratsiyalar, mundarija",
          "Qo‘shimcha, asosiy, izohlovchi",
          "Asosiy, metodik, mundarija",
          "Mundarija, atamalar, biografik ma’lumotlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "An’anaviy darsning kamchiliklarini ko‘rsating?",
        "options": [
          "O‘quvchi tinglovchiga aylanadi",
          "Tahlil qilingan bilimlar egallanadi",
          "O‘quvchi mavzuni anglaydi",
          "Matnlar bilan ishlaydi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Noa’nanaviy dars turini ko‘rsating?",
        "options": [
          "Konferensiya dars",
          "Pedagogik texnologiyalardan foydalanish",
          "Aralash dars",
          "Umumlashtiruvchi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "An’anaviy dars turlarini ko‘rsating",
        "options": [
          "Aralash dars, umumlashtiruvchi",
          "Konferensiya dars",
          "Pedagogik texnologiyalardan foydalanish",
          "Individual dars"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Memuar, tarixiy roman, balletristika …",
        "options": [
          "Badiiy adabiyotlar",
          "Ilmiy adabiyotlar",
          "Ilmiy-ommabop",
          "maqola"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim-tarbiyaviy ishlarning asosiy tashkiliy shakli ...",
        "options": [
          "Dars",
          "Tanafus",
          "Tadbir",
          "Ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Darslik, tarqatma materiallar, xarita…",
        "options": [
          "Ta’lim vositalarini",
          "Ta’lim usullari",
          "Ta’lim metodlari",
          "Ta’lim shakllari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol usullar bu…",
        "options": [
          "O‘quvchini faollashtirishga qaratilgan usullar",
          "Pedagogik texnologiya",
          "Amaliy metodlar",
          "O‘quvchi shaxsini tarbiyalashga qaratilgan usullar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagi qaysi vosita mantiqan mos emas?",
        "options": [
          "Slayd-xarita",
          "Xarita-sxema",
          "Kalendar reja",
          "Kontur xarita"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qadimgi yunon tilidan «metodika» so‘zi qanday ma’noni bildiradi?",
        "options": [
          "Tadqiqot yo‘l, tadqiqot usuli",
          "vosita",
          "Tarbiya usuli",
          "Ta’lim usuli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Materialni bayon qilish, suhbatlashish, darslik, ilmiy adabiyot, tarixiy xujjatlarni tahlil qilish metodi qanday nomlanadi?",
        "options": [
          "Og‘zaki metod",
          "Hujjatlashtirish metodi",
          "Yozma bayon metodi",
          "Axborot berish metodi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilimlarni tekshirish turlari qaysi qatorda to‘gri ko‘rsatilgan?",
        "options": [
          "Joriy, oraliq yakuniy",
          "chorak, mustakil, yakuniy",
          "individual tekshirish, test nazorati, yakuniy nazorat",
          "mustaqil ishlar nazorati, test sinovi, yozma ish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Model, mulyajlar, grafik, diagrammalar ta'lim vositalarining qaysi turiga kiradi?",
        "options": [
          "Yordamchi ta'lim vositalariga",
          "texnik ta'lim vositalariga",
          "o‘quv-uslubiy ta'lim vositalariga",
          "faol ta'lim vositalariga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "... –o‘quv materiallar, o‘zlashtirilgan o‘quv materiallarini mustahkamlash uchun mashqlar. Bular talabalarning mustaqil ishlarini faollashtirishga yordam beradilar.",
        "options": [
          "O‘quv - uslubiy materiallar",
          "Yordamchi ta'lim vositalariga",
          "texnik ta'lim vositalariga",
          "Izohli illyustratsiyalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "... o‘quv materialini k o‘rgazmali namoyish etishga, uni tizimli yetkazib berishga yordam beradi; talabalarga o‘quv materialini tushunishlariga va yaxshi eslab qolishlariga imkon beradi",
        "options": [
          "Ta'limning texnik vositalari",
          "Yordamchi ta'lim vositalari",
          "o‘quv - uslubiy materiallar",
          "Izohli illyustratsiyalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«B/B/B» – bu ... imkon beruvchi grafik-organayzerdir",
        "options": [
          "mavzu bo‘yicha tadqiqotchilik, bilish faoliyatini oqilona tashkil etish ko‘nikmasini rivojlantirishga",
          "Muammo va uning tarkibiy qismlarini tez aniqlashga",
          "katta auditoriyada yangi g‘oyalarni samarali tadbiq etishga",
          "umumiylik va tafovutga ega ikki xil ko‘rinishni analiz va sintez qilishga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Klaster» – bu ... imkon beruvchi grafik-organayzerdir",
        "options": [
          "tuzilmalarning mohiyatini markazlashtirish va aniqlash uchun qandaydir biror asosiy omil atrofida g‘oyalarni yig‘ishga",
          "Muammoni izohlash, uning takibiy qismlarni aniqlash va asosiy maqsadga erishish",
          "Tashkiliy jarayon tafovutlarini aniqlash, xal etishga",
          "katta auditoriyada yangi g‘oyalarni samarali tadbiq etishga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Venn diagrammasi» – bu ... imkon beruvchi grafik-organayzerdir",
        "options": [
          "umumiylik va tafovutga ega ikki xil ko‘rinishni analiz va sintez qilishga",
          "O‘zaro bog‘liq ikki aspektni turli punktlar asosida kartochkalarga qayd etishga",
          "Muammoni shakl-lantirish, uning takibiy qismlarini aniq-lash va maqsadga erishishga",
          "Muammo va uning tarkibiy qismlarini tez aniqlashga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«T-jadval» - bu ... imkon beruvchi grafik-organayzer",
        "options": [
          "bitta konsepsiya (ma’lumot)ning jihatini o‘zaro solishtirish yoki ularni (ijobiy/salbiy) tanqidiy mushohada asosida tahlil qilishga",
          "Bir qator muammolarni tasvirlash va uni echish, tizimli fikrlash, tuzilmaga keltirish, tahlil qilish ko‘nikmalarini rivojlantirishga",
          "O‘z fikrini qisqa izohlash, suhbatdoshini eshitish, bag‘rikenglik asosida tadqiq etishga",
          "mavzu bo‘yicha tadqiqotchilik, bilish faoliyatini oqilona tashkil etish ko‘nikmasini rivojlantirishga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim maqsadiga erishish yo’li qanday ataladi?",
        "options": [
          "metod",
          "usul",
          "texnik vositalar",
          "tashkil etish shakli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidagilardan qaysi biri oila tarbiyasi metodi hisoblanmaydi?",
        "options": [
          "mashq",
          "muxokama",
          "nazorat",
          "shaxsiy namuna"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘qitish texnologiyasiga berilgan tо‘g‘ri javobni belgilang.",
        "options": [
          "о‘quv mashg‘ulotining har bir bosqichini alohida-alohida loyihalash, kutiladigan natijalarni oldindan aniqlashtirish, har bosqichda qо‘llaniladigan shakl, metod va vositalarini oqilona tanlab olish, professor-о‘qituvchi va talabaning vazifalarini oydinlashtirishga qaratilgan algoritmik ketma-ketlik",
          "aniq maqsadga yо‘naltirilgan hamda ushbu maqsadning natijalanishini kafolatlovchi pedagogik faoliyat jarayonining mazmunidir",
          "har bosqichda qо‘llaniladigan shakl, metod va vositalarini oqilona tanlab olish jarayoni",
          "bu muayyan loyiha asosida tashkil etiladigan, aniq maqcadga yо‘naltirilgan hamda ushbu maqcadning natijalanishini kafolatlovchi pedagogik faoliyat jarayonining mazmunidir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muammoli ta’lim metodidan farqli ravishda real vaziyatlarni о‘rganish asosida aniq qarorlar qabul qilishga asoslanadigan ta’lim metodi qaysi",
        "options": [
          "keys‑stadi",
          "loyiha",
          "masofaviy ta’lim",
          "modulli ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys‑stadi metodi ilk marta qayerda qachon qо‘llanilgan",
        "options": [
          "1920 yilda Garvard biznes maktabi",
          "1928 yilda Oksford universitetida",
          "1925 yilda Kembridj biznes maktabida",
          "1920 yilda Oksford biznes universitetida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interaktivlik tushunchasi qanday ma’noni anglatadi",
        "options": [
          "birgalikda harakatlanish, suhbat",
          "tezkorlik",
          "rivojlantirish",
          "mustahkamlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol ta’limning asosini nima tashkil etadi",
        "options": [
          "interfaol metodlar asosida darsni olib borish",
          "aralash darslar asosida olib borish",
          "interfaol metodlardan qisman foydalanish",
          "о‘qituvchi va talabalarning birgalikdagi hamkorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol metodlar qanday natijalarga erishish maqsadini nazarda tutadi",
        "options": [
          "ruhiy va jismoniy kuch sarflamay, qisqa vaqt ichida yuksak natijalarga erishish",
          "qisqa vaqt ichida malaka hosil qilish",
          "qisqa vaqt ichida ma’naviy sifatlarni shakllantirish",
          "ruhiy va jismoniy kuch sarflamay, bilimlarni nazorat qilish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol ta’lim bu-…",
        "options": [
          "ta’limdagi chuqurlashtirilgan muloqot",
          "о‘z-о‘zini rivojlantirish",
          "ta’limni tizimliligi",
          "ta’limda hamkorlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Venn diagrammasi – bu …",
        "options": [
          "bir-birini kesadigan ikki yoki undan ortiq doiralar qо‘llaniladi",
          "grafik kо‘rinishiga ega tizimli ma’lumot larning birligi",
          "ma’lumotlarni solishtirish",
          "ma’lumotlani yig‘ish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "B-B-B jadvali -…",
        "options": [
          "mavzu, matn, bо‘lim bо‘yicha izlanuvchanlikni olib borish imkoni",
          "tizimli fikrlash",
          "tahlil qilish, solishtirish",
          "mustaqil faoliyat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol metodlar tasnifi tо‘g‘ri berilgan qatorni toping",
        "options": [
          "о‘rganilayotganlarni о‘zlashtirishga da’vat qilish metodlari, yangi materialni anglash metodlari, о‘rganilganlarni fikrlashga imkon beruvchi metodlar",
          "о‘rganilayotganlarni о‘zlashtirishga da’vat qilish metodlari, yangi materialni anglash metodlari",
          "yangi materialni anglash metodlari, о‘rganilganlarni fikrlashga imkon beruvchi metodlar",
          "о‘rganilayotganlarni о‘zlashtirishga da’vat qilish metodlari, о‘rganilganlarni fikrlashga imkon beruvchi metodlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mavzuga oid savollar ketma-ketligi asosida oddiydan murakkabga qarab tuziladigan metod nomi?",
        "options": [
          "“Zinama-zina” grafik organayzeri",
          "Nilufar guli",
          "“Qanday” grafik organayzeri",
          "klaster grafik organayzeri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘rganilayotganlarni о‘zlashtirishga da’vat qilish metodlari tо‘g‘ri berilgan qatorni toping",
        "options": [
          "erkin yozish, klaster, aqliy hujum, B-B-B chizmasi, chalkashtirilgan mantiqiy zanjirlar ketma-ketligi",
          "insert chizmasi, aqliy hujum, B-B-B chizmasi, bir-biriga о‘rgatish metodi",
          "T-chizma, nima uchun? chizmasi, erkin yozish,",
          "besh minutlik esse, venn diagrammasi, insert chizmasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yangi materialni anglash metodlari berilgan qatorni belgilang",
        "options": [
          "insert chizmasi, B-B-B chizmasi, bir-biriga о‘rgatish metodi, о‘qitish bо‘yicha qо‘llanma, ikki qismli kundaliklar",
          "erkin yozish, klaster, aqliy hujum, B-B-B chizmasi, chalkashtirilgan mantiqiy zanjirlar ketma-ketligi",
          "T-chizma, nima uchun? chizmasi, erkin yozish, besh minutlik esse.",
          "besh minutlik esse,venn diagrammasi, insert chizmasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘rganilganlarni fikrlashga imkon beruvchi metodlar tо‘g‘ri berilgan qatorni toping",
        "options": [
          "eng asosiy tushunchalar, T-chizma, toifalash jadvali, nima uchun? chizmasi, “qanday?” diagrammasi, venn diagrammasi, besh minutlik esse",
          "B-B-B chizmasi, bir-biriga о‘rgatish metodi, о‘qitish bо‘yicha qо‘llanma, ikki qismli kundaliklar",
          "erkin yozish, klaster, aqliy hujum, chalkashtirilgan mantiqiy zanjirlar ketma-ketligi",
          "aqliy hujum, chalkashtirilgan mantiqiy zanjirlar ketma-ketligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafik organayzerlar berilgan qatorni belgilang",
        "options": [
          "B-B-B chizmasi, venn diagrammasi, klaster, insert chizmasi",
          "erkin yozish, klaster, aqliy hujum",
          "B-B-B chizmasi, bir-biriga о‘rgatish metodi,",
          "besh minutlik esse,venn diagrammasi, klaster"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Rolli о‘yin” bu-...",
        "options": [
          "tahsil oluvchilar tomonidan mavzu bо‘yicha uchraydigan hayotiy vaziyatlarning har xil sharoitlarini sahnalashtirish orqali kо‘rsatib beruvchi metod",
          "ta’lim oluvchilani faollashtirish maqsadida ularni kichik guruhlarga ajratgan holda о‘quv materiallarini о‘rganish",
          "talabalar о‘rtasida va kichik guruhlarda aylana stol atrofida о‘z fikr-mulohazalarini bildirish orqali olib boriladigan metod",
          "berilgan topshiriqqa kо‘ra yoki о‘yin ishtrokchilari tomonidan tayyorlangan har xil vaziyatdagi boshqaruvchilik qarorlarini qabul qilishni imitatsiya qilish metodi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik guruhlarda ishlash – bu …",
        "options": [
          "kichik guruhlarni shakllantirish, guruhlarga topshiriqlar berish, kо‘rsatma berish va yо‘naltirish; guruhlar taqdimoti; muhokama, tahlil va baholash",
          "baholash mezonlari bilan talabalarni tanishtirish; vazifalarni taqsimlash; vazifalar bо‘yicha ishtirokchilarning qaror qabul qilishi;",
          "kichik guruhlarni shakllantirish; о‘rganish uchun tarqatma materiallar berish; yangi kichik guruhlarni shakllantirish;",
          "talabalar bilan о‘yin tarzida mavzu bо‘yicha yangi axborotni о‘zlashtiris;"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol ta’limga asos solgan, о‘quv maqsadlar taksonomiyasini tadqiq qilgan muallifni toping",
        "options": [
          "Benjamin Blum",
          "Lev Vigotskiy",
          "Djon Dyui",
          "Ushinskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabaning zarur va istiqbolli imkoniyat va qobiliyatlarini, uning kuchli va kuchsiz tomonlarini kо‘rsatib berish, shaxsiy, kasbiy va ijodiy salohiyatini ochib berishning obyektiv va maksimal ravishda tо‘liq aniqlash vositasi nima deb ataladi",
        "options": [
          "о‘quv portfoliosi",
          "keys stadi",
          "loyiha",
          "muammo metodi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘zida turli xil ijodiy ishlar, loyihalar, tadqiqot ishlarini: reyting daftarchasi, ijodiy ish daftari, elektron hujjatlar, modellar, loyihalar, ijtimoiy amaliyotga doir hisobotlarni aks ettiradigan portfolio turi?",
        "options": [
          "“Ishlar portfoliosi”",
          "“Hujjatlar portfoliosi”.",
          "“Taqrizlar portfoliosi”",
          "“Baholovchi portfolio”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Taksonomiya” qanday ma’noga ega",
        "options": [
          "tartib bilan joylashtirish",
          "reklama",
          "loyixalashtirish",
          "ketma-ketlikka amal qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ba’zi murakkab ishlanmalarni yaratish bо‘yicha hujjatlar yig‘indisi nima deb nomlanadi?",
        "options": [
          "о‘quv portfoliosi",
          "keys stadi",
          "loyiha",
          "muammo metodi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sinkveyn metodi amaliyotda bu - ...",
        "options": [
          "ijodiy ifoda vositasi sifatida juda foydalidir",
          "murakkab axborotlarni sintezlash quroli",
          "ta’lim vositasi sifatida",
          "loyixalashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik texnologiya nima",
        "options": [
          "bu muayyan loyiha asosida tashkil etiladigan, aniq maqsadga yо‘naltirilgan hamda ushbu maqsadning natijalanishini kafolatlovchi pedagogik faoliyat jarayonining mazmunidir",
          "о‘quv mashg‘ulotining har bir bosqichini alohida-alohida loyihalash, kutiladigan natijalarni oldindan aniqlashtirish,",
          "har bosqichda qо‘llaniladigan shakl, metod va vositalarini oqilona tanlab olish, professor-о‘qituvchi va talabaning vazifalarini oydinlashtirish qaratilgan algoritmik ketma-ketlik.",
          "tarbiya natijalariga asoslanib, tarbiyaning maqsad va vazifalarini oydinlashtirish jarayoni."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tizimli fikrlash, solishtirish, taqqoslash, tahlil qilish kо‘nikmalarini rivojlantiradigan grafik organayzer turi",
        "options": [
          "venn diagrammasi",
          "insert chizmasi",
          "toifalash jadvali.",
          "T-chizma."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilimlarni faollashtirishni tezlashtiradigan, fikrlash jarayoniga mavzu bо‘yicha yangi о‘zaro bog‘lanishli tasavvurlarni erkin va ochiq jalb qilishga yordam beradigan metod turi",
        "options": [
          "klaster",
          "T-chizma",
          "toifalash jadvali",
          "erkin yozish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Identiv о‘quv maqsadi nima",
        "options": [
          "texnologik jarayonning asosiy komponenti bо‘lib, kutiladigan natijaga aynan mos keladigan о‘quv maqsadi.",
          "о‘qitish shakl, metod va vositalarini oqilona tanlab olish",
          "о‘quv jarayonini texnologiyalash-tirishning tayanch asoslari",
          "о‘quv jarayoni maqsadi va vazifalarini oydinlashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol metod tushunchasiga berilgan ta’rifni aniqlang.",
        "options": [
          "о‘quv jarayonining tarkibiy qismi bо‘lib, bir vaqtning о‘zida ham professor-о‘qituvchi, ham talabani faollashtirishga yо‘naltirilgan о‘qitish usullari majmui",
          "amalga oshiriladigan о‘quv jarayonining har bir bosqichini alohida-alohida loyihalash",
          "kutiladigan natijalarni aniq belgilab olish",
          "о‘quv jarayonini texnologiyalash-tirishning tayanch asoslari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafik organayzerlar ta’rifini toping.",
        "options": [
          "о‘quv jarayonida qо‘yilgan maqsadga erishishda yordam beruvchi chizma, jadval, grafiklar majmui",
          "о‘quv jarayoni maqsadi va vazifalarini oydinlashtirish",
          "kutiladigan natijalarni aniq belgilab olish",
          "amalga oshiriladigan о‘quv jarayonining har bir bosqichini alohida-alohida loyihalash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oydinlashtirilgan о‘quv maqsadlari deb nimaga aytiladi",
        "options": [
          "talabani о‘rganish natijasini anglaydigan vazifalar",
          "texnologik jarayonning asosiy komponenti bо‘lib, kutiladigan natijaga aynan mos keladigan о‘quv maqsadi",
          "о‘z navbatida о‘quv vazifalariga aylantiriladigan maqsad",
          "B.Blum taksonomiyasidan foydalaniladigan maqsad"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol metod berilmagan qatorni aniqlang",
        "options": [
          "ma’ruza",
          "klaster",
          "chalkashtirilgan mantiqiy zanjirlar ketma-ketligi",
          "toifalash jadvali"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Grafik organayzerlar berilgan qatorni toping",
        "options": [
          "venn diagrammasi",
          "aqliy hujum.",
          "asoslangan esse",
          "о‘qitish bо‘yicha qо‘llanma"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Agar grafik organayzerlarni о‘qituvchi tayyor (tо‘ldirilgan) holda qо‘llasa qanday vazifani bajaradi",
        "options": [
          "vosita vazifasi",
          "metod vazifasi",
          "shakl vazifasini",
          "texnologiya vazifasini"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Agar grafik organayzerlarni о‘qituvchi talabalarning mashg‘ulot mavzusiga doir bilimlarini mustahkamlash va fikrlashini rivojlantirish maqsadida ishlatilsa, qanday vazifani bajaradi?",
        "options": [
          "metod vazifasini",
          "vosita vazifasini",
          "shakl vazifasini",
          "texnologiya vazifasini"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…asosini tо‘qqizta katta tо‘rt burchaklar tashkil etadi va tizimli fikrlash, tahlil qilish kо‘nikmalarini rivojlantiradi va faollashtiradi.",
        "options": [
          "nilufar guli",
          "“Qanday” grafikli organayzeri",
          "klaster grafik organayzeri",
          "“Zinama-zina” grafik organayzeri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Quyidan yuqoriga bosqichma-bosqich bо‘ysunadigan g‘oyalar tuzilmasini aniqlashga va takomillashtirishga imkoniyat yaratadi, muammoni yechish nafaqat bor imkoniyatlarni, balki ularni amalga oshirish yо‘llarini ham tadqiq qilishga undaydigan metod nomi",
        "options": [
          "“Qanday” grafik organayzeri",
          "Nilufar guli",
          "Klaster grafik organayzeri",
          "“Zinama-zina” grafik organayzeri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…grafik organayzeri asosida marraga kim birinchi chiqish texnologiyasining sxematik tuzilishi bо‘yicha о‘tilgan mavzularni mustahkamlash samarali hisoblanadi.",
        "options": [
          "Zinama-zina",
          "Nilufar guli",
          "“Qanday” grafik organayzeri",
          "Klaster grafik organayzeri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Aniq vaziyatlarni о‘rganish, tahlil etish va ijtimoiy ahamiyatga ega natijalarga erishishga asoslangan ta’lim metodi",
        "options": [
          "keys‑stadi",
          "muammoli ta’lim",
          "о‘quv loyihasi",
          "modulli ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys stadi metodining muammoli ta’lim metodidan farqi nimada",
        "options": [
          "real vaziyatlarni о‘rganish asosida aniq qarorlar qabul qilishga asoslanadi",
          "muammo hal etilmaydi",
          "deyarli bir xil, farqi faqat nomlanishida",
          "tо‘g‘ri javob mavjud emas"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interaktiv sо‘zining ma’nosi nima",
        "options": [
          "inglizcha “inter” – “birgalikdagi” va “act” – “harakatlanish”",
          "lotincha “inter”- ichidagi, “act”- dalil",
          "Inglizcha “inter” – ichidagi va “act” - “harakatlanish”",
          "inglizcha “inter” - “birgalikdagi” va “act”- dalil"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘rganilayotganlarini о‘zlashtirishga da’vat qilish metodlariga kiruvchi metodni aniqlang",
        "options": [
          "erkin yozish",
          "о‘qitish bо‘yicha qо‘llanma",
          "ikki qismli kundaliklar.",
          "toifalash jadvali."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik guruhlarda talabalar soni nechta bо‘lishi kо‘proq samara beradi",
        "options": [
          "46145",
          "46178",
          "46209",
          "46146"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yangi materialni anglash metodi berilgan qatorni toping.",
        "options": [
          "bir-biridan sо‘rash",
          "о‘n minutlik esse",
          "venn diagrammasi",
          "aqliy hujum."
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘rganilganlarini fikrlashga imkon beruvchi metodni belgilang.",
        "options": [
          "toifalash jadvali",
          "erkin yozish",
          "eng asosiy tushunchalar",
          "ikki qismli kundaliklar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Axborot xaritasini tuzish yо‘li, barcha tuzilmaning mohiyatini markazlashtirish va aniqlash uchun qandaydir biror asosiy omil atrofida g‘oyalarni yig‘ishga imkon beradigan grafik organayzer",
        "options": [
          "klaster",
          "venn diagrammasi",
          "toifalash jadvali",
          "ikki qismli kundaliklar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘z xayollariga kelgan barcha narsalarni tо‘xtamasdan yozishni taklif qilish mumkin bо‘lgan metod nomini aniqlang.",
        "options": [
          "erkin yozish metodi",
          "eng asosiy tushunchalar",
          "bir-biridan sо‘rash",
          "о‘qitish bо‘yicha qо‘llanma"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mustaqil о‘qish vaqtida olgan ma’lumotlarni, eshitgan ma’ruzalarni tizimlashtirishni ta’minlaydigan olingan ma’lumotni tasdiqlash, aniqlash, chetga chiqish, kuzatish imkonini beruvchi metodni belgilang.",
        "options": [
          "insert chizmasi",
          "о‘n minutlik esse",
          "о‘qitish bо‘yicha qо‘llanma",
          "ikki qismli kundaliklar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bir-birini kesadigan ikki yoki undan ortiq doiralarda qо‘llaniladigan grafik organayzerni belgilang.",
        "options": [
          "venn diagrammasi",
          "toifalash jadvali",
          "T-chizma",
          "erkin yozish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabalarni о‘z-о‘zini rivojlantiradigan, о‘zi mustaqil izlanib, bilimlarni egallaydigan darajaga olib chiqishni maqsad qilgan ta’lim turi",
        "options": [
          "mustaqil ta’lim",
          "interfaol ta’lim",
          "ommaviy ta’lim",
          "individual ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ortiqcha ruhiy va jismoniy kuch sarflamay, qisqa vaqt ichida yuksak natijalarga erishish maqsadini nazarda tutadigan metodlar nima deb ataladi",
        "options": [
          "interfaol metodlar",
          "faol metodlar",
          "passiv metodlar",
          "bunday metod mavjud emas"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Fan yoki mavzuni tavsiflaydigan, belgilangan reja bо‘yicha tuziladigan besh qatordan iborat kichik adabiy asar metodi qanday nomlanadi",
        "options": [
          "sinkveyn",
          "pinbord",
          "insert jadvali",
          "ikki qismli kundaliklar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim oluvchilarni muammoni ifodalashni va maqsadga muvofiqroq yechim izlashga yо‘naltiruvchi, bir guruh insonlar yoki alohida shaxslarni hayotiy tashkillashishidan olingan ma’lum sharoitlarini bayonli taqdim etilishiga nima deyiladi",
        "options": [
          "keys",
          "muammo",
          "test",
          "yechim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabalarga matn mazmunini о‘z shaxsiy tajribasi bilan chambarchas bog‘lash, о‘zining tabiiy qiziquvchanligini qondirish imkonini beradigan metod nomi",
        "options": [
          "ikki qismli kundaliklar",
          "besh minutlik esse",
          "erkin yozish",
          "bir-biriga о‘rgatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Keys‑stadi” sо‘zining ma’nosi nima",
        "options": [
          "inglizcha case – vaziyat, stadi – о‘rganish",
          "inglizcha case - aniq vaziyat, stadi – ta’lim",
          "inglizcha case- quti, stadi- о‘quv muassasasi",
          "inglizcha case – muammo, stadi – bilim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys-stadi metodining asosiy tushunchalari nimalardan iborat",
        "options": [
          "“vaziyat” va “tahlil”",
          "“muammo” va “yechim”",
          "“muammo” va “tahlil”",
          "“yechim” va “tahlil”"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabalar yozilmagan qog‘ozning о‘rtasidan tik chiziq о‘tkazib, uni ikkiga ajratishlari kerak. Qog‘ozning chap tomoniga matnning qaysi qismi ularga eng kо‘p taassurot qoldirganini qayd etishlari talab etiladigan metod nomi?",
        "options": [
          "ikki qismli kundaliklar",
          "5 minutli esse",
          "erkin yozish",
          "bir-biriga о‘rgatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘qituvchi talabalarga besh minut vaqt davomida “Kadrlar tayyorlash milliy dasturi haqida bilganlarini daftarlariga yozishni sо‘raydi. Vaqt tugagach, ba’zi talabalardan yozganlarini о‘qib berishni sо‘raydi.Ushbu kо‘rsatma qaysi metodga taaluqli",
        "options": [
          "erkin yozish",
          "besh minutlik esse",
          "ikki qismli kundaliklar",
          "bir-biriga о‘rgatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yozma topshiriqning ushbu turida talabalardan quyidagi ikki topshiriqni bajarish: mazkur mavzu bо‘yicha ular nimalarni о‘rganganliklarini mustaqil bayon etish va ular baribir javobini ololmagan bitta savol berish sо‘raladi. Ushbu kо‘rsatma qaysi metodga tegishli",
        "options": [
          "besh minutlik esse",
          "erkin yozish",
          "ikki qismli kundaliklar",
          "bir-biriga о‘rgatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mutlaq hayotiy vaziyatlarni tavsiflaydigan keys turi",
        "options": [
          "amaliy keys",
          "ta’limiy keyslar",
          "ilmiy-tadqiqotchilik",
          "rivojlantiruvchi keyslar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys-stadi metodining afzalliklarni va boshqa о‘qitish metodlaridan ajralib turuvchi jixatlari nimalardan iborat",
        "options": [
          "muammo yechimini aniqlashga jamoaviy tarzda erishish.",
          "yagona yechimning mantiqan mavjud emasligi",
          "muammoning yechimida turli muqobil javoblarning mavjudligi.",
          "barcha javoblar tо‘g‘ri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘rganilgan bilimlarni eslab qolish va qayta tiklashni belgilaydigan kategoriyani aniqlang.",
        "options": [
          "bilish",
          "tahlil qilish",
          "tushunish",
          "Sintez"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Predmetlar va ularga xos bо‘lgan xususiyatlarni fikran bir-biriga solishtirish, umumiy va farq qiluvchi jihatlarini topish qanday nomlanadi?",
        "options": [
          "taqqoslash",
          "mavhumlashtirish",
          "tahlil etish",
          "umumlashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi qatorda muammolikning tо‘rtinchi darajasi (sathi) ifodalangan",
        "options": [
          "talaba muammoni о‘zi qо‘yadi va uni yechadi",
          "о‘qituvchi muammoni qо‘yadi, talabalar esa mustaqil yoki о‘qituvchining raxbarligi ostida muammoni echadilar",
          "talaba muammoni о‘zi qо‘yadi va uni о‘qituvchi echadi",
          "talaba muammoni qо‘yadi.о‘qituvchi esa uni echishga yordam beradi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Innovatsiya iborasiga qaysi qatorda tо‘g‘ri ta’rif berilgan",
        "options": [
          "yangilik kiritish;",
          "tadqiqot qilish;",
          "tashkiliy jarayon;",
          "ishlab chiqarish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keysni hal etish jarayoni necha bosqichdan iborat",
        "options": [
          "2 ta",
          "5 ta",
          "8ta",
          "4 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys texnologiyasini amalga oshiruvchi о‘qituvchi faoliyati necha bosqichdan iborat",
        "options": [
          "3 ta",
          "5 ta",
          "2 ta",
          "4 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys metodini amalga oshirish bosqichlarini kо‘rsating",
        "options": [
          "5 ta",
          "3 ta",
          "2 ta",
          "4 ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ilmiy tadqiqotchilikka qaratilgan keyslarga qanday xususiyat xos?",
        "options": [
          "tadqiqotchilik faoliyatini kо‘zlash",
          "mutloq hayotiy vaziyatlarni tavsiflash",
          "ta’lim berish",
          "vaziyatlarni mukammal aks ettirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turidan qati nazar keyslar nechta strukturadan tashkil topgan?",
        "options": [
          "5ta",
          "4 ta",
          "3ta",
          "2ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys hal etilish texnologiyasi bо‘yicha necha bosqichdan iborat",
        "options": [
          "2ta",
          ".4 ta",
          ".5ta",
          "3ta"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Auditoriya bilan birgalikda vaziyat yuzasidan ishlash keysning nechanchi bosqichi hisoblanadi",
        "options": [
          "2 bosqich",
          "3 bosqich",
          "4 bosqich",
          "1 bosqich"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…– ba’zi murakkab ishlanmalarni yaratish bо‘yicha hujjatlar yeg‘indisi.",
        "options": [
          "loyiha",
          "portfolio",
          "keys",
          "grafik organayzerlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Loyiha vazifalari bо‘yicha optimal yechimlarni izlash, hujjatlar bilan ishlash, grafik ishlarni bajarish loyiha bosqichlarini qay biriga tegishli?",
        "options": [
          "konstruktorlik",
          "texnologik",
          "yakuniy",
          "izlanishga doir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ma’ruza mashg‘uloti texnologik kartasining 2-bosqichi qanday ataladi",
        "options": [
          "asosiy",
          "faollashtirish",
          "mustahkamlash",
          "yakuniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mashg‘ulotning anglash bosqichida qо‘llaniladigan metodlarni kо‘rsating.",
        "options": [
          "о‘qitish bо‘yicha qо‘llanma, ikki qisimli kundaliklar",
          "erkin yozish, aqliy hujum",
          "”qanday? “ diagrammasi, 5 minutlik esse",
          "о‘qitish bо‘yicha qо‘llanma, о‘n minutlik esse"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mashg‘ulotning da’vat bosqichida qо‘llaniladigan metodlar qaysi qatorda tо‘g‘ri kо‘rsatilagan",
        "options": [
          "erkin yozish, aqliy hujum",
          "”qanday? “ diagrammasi, 5 minutlik esse",
          "о‘qitish bо‘yicha qо‘llanma, ikki qisimli kundaliklar",
          "о‘qitish bо‘yicha qо‘llanma, о‘n minutlik esse"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Berilganlar orasidan mashg‘ulotning fikrlash bosqichida qо‘llaniladigan metodlarni tanlang.",
        "options": [
          "T-chizma, toifalash jadvali",
          "erkin yozish, aqliy hujum",
          "о‘qitish bо‘yicha qо‘llanma, ikki qisimli kundaliklar",
          "о‘qitish bо‘yicha qо‘llanma, о‘n minutlik esse"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interfaol ta’limning asosi nimadan iborat",
        "options": [
          "interfaol metodlarni qо‘llash",
          "zamonaviy texnologiyalar",
          "о‘qituvchi malakasi",
          "ta’lim muassasasi sharoitini yaxshilash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Barcha tuzilmani mohiyatini markazlashtirish va aniqlash uchun qandaydir biror omil atrofida g‘oyalarni yechish qaysi interfaol metodga xos",
        "options": [
          "klaster",
          "T-chizma",
          "blits sо‘rov",
          "venn diagrammasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "О‘zlashtirilgan ma’lumotlarni bog‘lash qobolyatini shakllantirishga yordam beradigan metod qaysi qatorda tо‘g‘ri kо‘rsatilgan?",
        "options": [
          "insert jadvali",
          "B-B-B chizmasi",
          "T-chizm",
          "venn diagrammasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "… talabalarning tadqiq etish faoliyatini , ular matnni mustaqil о‘qish topshirig‘ini olishganida yо‘naltirishga yordam beradi.",
        "options": [
          "о‘qitish bо‘yicha qо‘llanma",
          "bir-biriga о‘rgatish",
          "ikki qisimli kundalik",
          "insert jadvali"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Keys stadining …kotegoriyasini obyektni hayolan bо‘laklarga bо‘lish yoki ilmiy tadqiq etish sifatida tushunish mumkin.",
        "options": [
          "tahlil etish",
          "targ‘ib etish",
          "umumlashtirish",
          "xulosalash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Loyiha maqsadi biror obyekt yoki hodisa haqida ma’lumotlarni tо‘plashga qaratilgan bо‘lsa, loyiha turi tо‘g‘ri kо‘rsatilagan qatorni toping.",
        "options": [
          "axboriy tavsifga ega",
          "tadqiqotchilikka oid",
          "amaliy yо‘naltirilgan",
          "ijodiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Loyiha bosqichlarining qay birida о‘qituvchi faoliyati moddiy bazani ta’minlash, talabalar faoliyatini boshqarish, mahsulot berishga qartilgabn bо‘ladi",
        "options": [
          "konstruktorlik",
          "texnologik",
          "izalanishga doir",
          "yakuniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Loyihaning konstruktorlik bosqichida ta’lim berishning qanday shakli va metodlaridan foydalanish mumkin",
        "options": [
          "taxlil, rolli о‘yin",
          "muammoli suhbat, maslahat",
          "namoyish etish, mashq",
          "maslahat, taqdimot"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hujjatlar portfoliosi, ishlar portfoliosi, taqrizlar portfoliosi, natijalar portfoliosi va boshqalar portfolioning ... hisoblanadi?",
        "options": [
          "portfolio turlari",
          "portfolio yaratish shartlari",
          "portfolio yaratish bosqichlari",
          "tarkibiy tuzilishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijodiy ishlar, loyihalar, tadqiqot ishlarini qaysi portfolio о‘zida aks ettiradi",
        "options": [
          "ishlar portfoliosi",
          "hujjatlar portfolisi",
          "taqrizlar portfoliosi",
          "natijalar portfoliosi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talabalarning egallagan bilim, kо‘nikmalarini nazorat qilish uchun yoziladigan portfoli bu …",
        "options": [
          "baholovchi",
          "ishlar portfoliosi",
          "taqrizlar portfoliosi",
          "on-line portfoliosi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Klassik portfolio qismlari tо‘g‘ri kо‘rsatilgan javobni toping",
        "options": [
          "”portret” , “kollektor”, “ishchi materiallar”",
          "taqrizlar, natijalar",
          "portret, taqrizlar",
          "ishchi materiallar, kollektor"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Erishilgan yutuqlarni baholashga oid xulosa, rezyumelar, esselar qaysi portfolioda aks ettiriladi",
        "options": [
          "taqrizlar portfoliosi",
          "baholovchi",
          "Ishlar portfoliosi",
          "on-line portfoliosi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik texnologiya bu о‘qitishning о‘ziga xos bо‘lgan ... yondashuvidir.",
        "options": [
          "tizimli",
          "an’anaviy",
          "texnologik",
          "Innovatsion"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tanqidiy fikrlash asosini tashkil qiluvchi fazalarning nomlari yozilgan qatorni toping.",
        "options": [
          "chaqiruv yoki da’vat, anglash, fikrlash",
          "da’vat, idrok, sezish",
          "mulohaza qilish, fikr yuritish, izlanish",
          "anglash, о‘ylash, xulosa chiqarish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik texnologiyalar ta’limni tashkil etishda yondashuv jihatdan qanday guruhlarga bо‘linadi",
        "options": [
          "biogen, psixogen, sotsiogen",
          "biogen, sotsiogen",
          "psixogen, sotsiogen",
          "biogen, psixogen"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Faoliyatning ijodiy darajasi nima",
        "options": [
          "faoliyatning yangi qirralarini tadqiq qiluvchi mahsuldor harakat",
          "bilim va kо‘nikmalarni о‘zlashtirish",
          "talabaning materialni mustaqil о‘zlashtirishi",
          "keng doiradagi bilimlarni qо‘llash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mahsuldor faoliyat nima",
        "options": [
          "talaba о‘quv predmetida о‘zlashtirib olganiga nisbatan yangi axborotni yuzaga keltiradi",
          "talaba noaniq vaziyatni aniqlashtiradi",
          "talaba о‘quv elementlarini о‘zlashtiradi",
          "talaba ma’lum bir harakatni bajarishga harakat qiladi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi texnologiyalarda talabalarda aqliy faoliyat usullarini shakllarintirishga asosiy etibor qaratiladi",
        "options": [
          "muammoli ta’lim texnologiyalarida",
          "didaktik о‘yin texnologiyalarida",
          "modulli ta’lim texnologiyalarida",
          "loyihalash texnologiyalarida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Reproduktiv faoliyat nima",
        "options": [
          "о‘quv predmetida dastlab bilib olingan ma’lumotlarga talaba о‘qish davomida biror axborot qо‘shmaydi",
          "о‘quv predmeti mazmunini о‘zlashtirish",
          "bilish faoliyati",
          "bilib olgan axborotlardan foydalanish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik texnologiyaning qanday qoidalari mavjud",
        "options": [
          "pedagog tomonidan ijobiy mustahkamlovchi reaksiyalar qoidasi, analogik, bilim olishni kuchaytiruvchi, ekvivalent",
          "pedagog tomonidan ijobiy mustahkamlovchi reaksiyalar qoidasi",
          "analogik, bilim olishni kuchaytiruvchi",
          "yekvivalent amaliyot, analogik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Loyihani bajarish bosqichlari tо‘g‘ri berilgan qatorni toping",
        "options": [
          "izlanishga doir konstruktorlik texnologik yakuniy",
          "izlanishga doir konstruktorlik",
          "izlanishga doir konstruktorlik texnologik",
          "konstruktorlik texnologik yakuniy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Trening bu-",
        "options": [
          "mashq qilish",
          "о‘yin о‘ynash",
          "suhbatlashish",
          "tahlil qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Zamonaviy sharoitda pedagogikaning asosiy vazifasi to‘g‘ri ko‘rsatilgan javobni toping",
        "options": [
          "Ta’lim oluvchilarda analitik (tahlil etish) fikrlashni rivojlantirish",
          "Qo‘llab-quvvatlovchi ta’limni rivojlantirish",
          "Ta’lim oluvchilarda nazariy bilimlarni tarkib toptirish",
          "Pragmatik yondashuvni qaror toptirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "XXI asrda “qo‘llab-quvvatlovchi ta’lim”ning muqobili sifatida yuzaga kelgan ta’lim turini aniqlang",
        "options": [
          "Innovatsion ta’lim",
          "Rivojlantiruvchi ta’lim",
          "Arxaik ta’lim",
          "Sxolastik ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Innovatsion ta’limning asosiy maqsadi nima?",
        "options": [
          "Ijtimoiy amaliyot rivojlanishi ehtiyojlari va oliy ta’lim bitiruvchilarining real tayyorgarlik darajasining o‘zaro mosligini ta’minlash",
          "Ta’lim jarayoni sub’ektlarining qiziqish va imkoniyatlarini oshirish",
          "Ta’lim oluvchilarda kelajakkka mas’uliyat hissini va o‘z-o‘ziga ishonchni shakllantirish",
          "Ta’lim oluvchilarda nazariy bilimlarni tarkib toptirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Interaktiv» o‘qitish texnikasi sifatida qanday ma’noni anglatadi",
        "options": [
          "«o‘zaro munosabat»",
          "«joylashtirish»",
          "«usul»",
          "«metod»"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Metod nima?",
        "options": [
          "(yunoncha metodos –nazariya, bilim va tadqiqot yo‘llari) – u yoki bu maqsadlarga erishish yo‘llari, uslublari, aniq va konkret vazifalarni hal etish usullari",
          "Lotincha metodos - bilim , nazariya, ilmiy tadqiqot yo‘llarini o‘rganadi",
          "Lotincha metodos, falsafiy yondashuv demakdir",
          "Lotincha metodos, maxsus tarixiy fanlarni tahlil qilishda yordam beradi"
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "id": "psixologiya",
    "name": "Pedagogik psixologiya",
    "tagline": "Yosh davrlari, ta'lim psixologiyasi",
    "glyph": "ψ",
    "questions": [
      {
        "question": "Pedogogik psixologiya fani qachon paydo bo‘lgan?",
        "options": [
          "XIX asr o‘rtasida.",
          "XIX asr boshida.",
          "XX asr o‘rtasida.",
          "XX asr boshida."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rus pedogogik psixologiyasining asoschisi kim?",
        "options": [
          "K.D.Ushinskiy",
          "A.P.Nechaev",
          "P.F.Kapterev",
          "A.F.Lazurskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedologiyaga qachon asos solingan?",
        "options": [
          "XIX XX asrlarda chet davlatlarda",
          "XIX asrning II-yarmida",
          "XX asr boshida",
          "XIX asr o‘rtasida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rus pedologiyasiga asos soluvchi kim?",
        "options": [
          "A.P.Nechaev",
          "V.M.Bexterev",
          "K.D.Ushinskiy",
          "N.N.Lange"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik rivojlanishning ijtimoiy sharoitlari nimalardan iborat?",
        "options": [
          "Bola tarbiyasi va turmish sharoitlari",
          "So‘z mantiqiy esda saqlash.",
          "xizmat usullari",
          "Abstrakt o‘ylash predmetlarni qabullash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixologiyada qiziquvchanlikning qaysi turlari o‘quvchilarning ta’lim protsesida aniqlanadi?",
        "options": [
          "Bevosita va bilvosita qiziquvchanlik",
          "mazmuni bo‘yicha qiziqish",
          "O‘rtacha qiziquvchanlik",
          "Keng va tor qiziquvchanlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limga psixik tayyorgarlik nima?",
        "options": [
          "Bolaning abektiv va subektiv jihatda maktab talabiga munosibligi",
          "Aqil o‘ylari, so‘zlashining rivojlanganligi.",
          "Obrazli o‘yinlarga tayyorgarligi.",
          "Diqqati, fkirlashini rivojlantirishi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limning samaradorligi nimalarga bog‘liq ?",
        "options": [
          "Psixologik elementlarga",
          "psixologik bilimlarga",
          "psixologik o‘zgarishlarga",
          "Psixologik tasirchanliklarga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim protsesi natijalari bu…",
        "options": [
          "o‘rganish",
          "o‘qish",
          "o‘zlashtirish",
          "Bilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim protsessi nechta elemendan iborat?",
        "options": [
          "5",
          "4",
          "2",
          "3"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarbiya uch narsaga muhtojlik sezadi",
        "options": [
          "ilmga, mashqga, qobiliyatga",
          "pulga, kiyimge, ovqatga",
          "bilimga, baxtga, sog‘liqqa",
          "Hech narsaga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim-tarbiya protsesida o‘qituvchi va o‘quvchi orasidagi munosabat nima deb ataladi?",
        "options": [
          "pedagogik",
          "kommunikativ",
          "interaktiv",
          "Demokratik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Pedagogik psixologiya» terminini fanga kim kiritgan?",
        "options": [
          "Kapterev K.F.",
          "Ushinskiy K.D.",
          "Blonskiy P.P.",
          "Lazurskiy A.F."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik hodisa nima?",
        "options": [
          "psixik protsessler, psixik jarayonlar va psixik o‘zgarishlar",
          "psixologik yo‘nalish",
          "odam harakatlari",
          "psixik xizmatlarning ayrim formalari yoki turlari."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik protsesslar, bu….",
        "options": [
          "Sezgi, idrok, esda saqlash, fikirlash, hayol, so‘zlash, diqqat.",
          "Bu tirik jonning tashqi tasirga javobi",
          "bu faqatgina hayvonning yashash harakatlari.",
          "Hayvon bilan odamning ichki hissiyotlari, holat kechinmalari."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik rivojlanishning yaqin zonasi haqidagi ta’limotning muallifi kim?",
        "options": [
          "Vigotskiy",
          "Ushinskiy",
          "Krutetskiy",
          "Petrovskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik rivojlanishni harakatlantiruvchi kuch, bu…",
        "options": [
          "ichki qarama – qarshiliklar",
          "Tabiat",
          "Tarbiya",
          "ta’lim"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik rivojlanishga ta’sir etuvchi faktorlar qanday?",
        "options": [
          "Biologik tug‘ma xususiyati, voyaga yetga muhiti, turmush holatlari va ta’lim tarbiya",
          "jismoniy tarbiya, sport, gigeyena",
          "Biologik tug‘ma xususiyatlari",
          "O‘yin turlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixodinamika nazaryotchisi vakili bo‘lgan E.Eriksonning ta’limotiga binoan inson umri nechta davirga bo‘linadi?",
        "options": [
          "8",
          "6",
          "7",
          "9"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim-tarbiyaning psixologik qonunlarini va o‘qituvchi psixologiyasini o‘rgatadigan yo‘nalish bu….",
        "options": [
          "Pedagogika psixologiya",
          "Mehnat psixologiyasi",
          "Injiner psixologiyasi",
          "Bolalar psixologiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "L.S.Vigotskiy psixologik rivojlanishni nechta bosqichga bo‘ladi?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 0
      },
      {
        "question": "L.S.Vigotskiy talimotiga binoan psixik rivojlanish bosqichlari nima deyiladi?",
        "options": [
          "Yaqin zona va real zona",
          "o‘ganish zo‘nasi va yaqin zona",
          "taqlid zona va real zona",
          "qiyoslash zona va takrorlash zonasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixologiyani bilish pedogoglarga nimaga uchun kerak?",
        "options": [
          "O‘z- o‘zini tarbiyalash, bolalarni to‘g‘ri o‘qitish har tamonlama o‘rgatishga yordam beradi",
          "Psixologik tamondan kuchli, chiniqqan sog‘lom bo‘lishga yordam beradi.",
          "Odamlarning ichki ruhiy dunyosini bilish uchun kerak.",
          "Boshqa fanlarniorganishga yordam beradi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik psixologiya nimani o‘rganadi?",
        "options": [
          "O‘rgatish ta’lim tarbiya va o‘qituvchi psixilogoyasini",
          "Pedagog kasbining psixologiyasi",
          "Har xil millat vakillarining psixologik xususiyatlari",
          "Pedagogika va ta’lim metodikasining psixologok masalalarni"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tarbiyaning psixologik tamoni nimada?",
        "options": [
          "Oquvchining individual xususiyatlarini shakillantirish, tushuncha olishga yo‘naltirish, o‘quv fanlariga qiziqish, qobilyatlarni rivojlantirish.",
          "Tarbiyachi talablariga boy’sintirish to‘g‘ri bajarishga undash .",
          "O‘quvchida bilimdonlik paydo qilish fanlarni o‘zlashtirish.",
          "O‘quvchiga na’muna bo‘lish, og‘zaki tasir ko‘rsatish birga harakat qilish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qituvchining individual xususiyatlari qanday bo‘lishi kerak?",
        "options": [
          "dunyoga to‘g‘ri ilmiy ko‘z qarash, ishonch, g‘oyalar, odob-axloq, pedagogik qobilyat, mohorat xususiyatlari.",
          "Bilimdonlik, insoniylik, o‘z kasbining ustasi bolish xususiyati.",
          "Ko‘ngilchanlik, mehribonlik fazilatlari ustun bo‘lishi kerak.",
          "O‘zini yuqori tutish o‘zini ko‘rsata olish."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik qobilyat deganda nimani tushunasiz?",
        "options": [
          "Didaktik qobilyatni tushintira olish ilim fanni yaxshi o‘zlashtirish, fikirlash qobilyati, tashkillashtirish, munosabat o‘rnata olish.",
          "Politexnik o‘y-fikr qobilyati kombinatorlik mahoratliligi.",
          "Fizik epchillik, sabr, fikirlash qobilyati o‘ziga qarata olish qobilyati.",
          "Chet tillarni bilish,notiqlik,artistlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘zlashtirish nima?",
        "options": [
          "Tushuntirganlarni, o‘qiganlarni to‘g‘ri qabul qilib,anglab o‘z tushunchalariga aylantirish",
          "O‘qituvchining tushuntirganlarini to‘g‘ri anglab olish",
          "Yoddan ayta bilish",
          "idrok etilgan narsalarni tushunish,"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Motiv nima?",
        "options": [
          "Bir narsani ishlashga,intilishga sababchi bo‘ladigan kuchli o‘y-fikr hislari",
          "Bir narsani ishlashda keng ma’noda qo‘llab foydalana bilish",
          "Bir narsaga yo‘naltiradigan,odamning qalbida paydo bo‘lgan o‘y-hayollari",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilim nima?",
        "options": [
          "Tabiat va jamiyatdagi narsa,voqea-hodisalarni o‘zlashtirib olish turi",
          "Odamlarning o‘z ustida ishlashi,qobiliyatlarni rivojlantirish",
          "Madaniyat,urf-odatrni o‘rgatish",
          "Bolalarga bilim berishda amalga oshiriladigan faoliyat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘qish epchilligi nima?",
        "options": [
          "Qoida va ko‘rsatmalarni hodisalarni amalda qo‘llay olish",
          "Odamlarning o‘z ustida ishlashi",
          "O‘quvchi uchun kerakli ko‘nikmalarni o‘rgatish",
          "Bilim olish tushunchalarni amalda ko‘rsatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik munosabat nima?",
        "options": [
          "O‘quvchi va o‘qituvchi orasidagi munosabat,o‘quvchiga bilimni o‘rgatish,o‘qitish.",
          "O‘quvchining yakka mashg‘uloti",
          "Oila a’zolari bilan munosabat",
          "Maktabdan tashqari tarbiya muassasalari bilan aloqa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tajriba natijalarining to‘g‘riligini qaysi metod ta’minlaydi?",
        "options": [
          "Eksperimental metod",
          "Ko‘zatish",
          "Natijalar qayta ishlash metodi",
          "Kontent- analiz"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tashkillashirish metodlariga nimalar kiradi?",
        "options": [
          "longityud, taqqoslash",
          "anketa, interv`yu",
          "eksperiment",
          "Test, anketa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tashkillashtiruvchi metod qaysi metodga sinonim?",
        "options": [
          "Genetik- modellashtiruvchi eksperiment",
          "Kontrol eksperiment",
          "Proektiv eksperiment",
          "Eksperiment"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Talim oluvchilarning ta’lim ahamiyatiga ko‘ra talimning qanday metodlari bor?",
        "options": [
          "tushintirish repraduktiv",
          "Ko‘zatish, eksperiment",
          "Anketa, intervyu",
          "Test, anketa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’lim oluvchilarning ta’lim faoliyatiga ko‘ra ta’limning nechta metodi bor?",
        "options": [
          "5",
          "4",
          "3",
          "6"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi metod bir obektni o‘zoq vaqt yillar davomida o‘rganadi?",
        "options": [
          "Longityud",
          "Suhbat",
          "kompleksli",
          "Eksperiment"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik guruh azolari o‘rtasidagi emotsional munosabatlarni aniqlovchi metod qaysi?",
        "options": [
          "Sotsiometriya",
          "Test",
          "suhbat",
          "Anketa"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mehnatni psixologik tamondan o‘rganishga va undan kelajakda amaliy faoliyatda foydalanishga qaratilgan qisqa va har tomonlama to‘liq ko‘rsatib berilgan hujjat nima deyiladi?",
        "options": [
          "professiogramma",
          "Tarjimai hol",
          "ra`smiy hujjat",
          "Shaxsiy hujjat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixoanalizda oxirgi bosqich?",
        "options": [
          "Genital",
          "Oral",
          "Anal",
          "Fallik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ontogenezda filogenez takrori nazariyasi nima deb nomlanadi?",
        "options": [
          "Rekapitulyatsiya",
          "Kognitiv",
          "Faoliyat",
          "Gumanistik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Eriksonda rollar chalkashuvi qachon?",
        "options": [
          "O‘smirlik",
          "Bolalik",
          "Yetuklik",
          "Qarilik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ramziy intellekt qaysi bosqich?",
        "options": [
          "Preoperatsional",
          "Sensomotor",
          "Formal",
          "Konkret"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Erikson nechta bosqich ajratgan?",
        "options": [
          "8",
          "5",
          "6",
          "10"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Mavhum tafakkur qaysi bosqichda?",
        "options": [
          "Formal operatsiyalar",
          "Sensomotor",
          "Preoperatsional",
          "Konkret"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sensomotor bosqich qaysi davrda bo‘ladi?",
        "options": [
          "Go‘daklik",
          "Maktabgacha",
          "O‘smirlik",
          "Yetuklik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muloqot yetakchi faoliyatda nomoyon bo‘lishi qaysi davrda bo‘ladi?",
        "options": [
          "Go‘daklik va o‘smirlik",
          "o‘spirinlik",
          "Yetuklik",
          "prenatal"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yosh davrlarining qaysi birida dastlab uchiraydigan inqiroz?",
        "options": [
          "ilk bolalik",
          "go‘daklik",
          "o‘spirinlik",
          "O‘smirlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Guruh tushunchasining to‘g‘ri ta’rifi qaysi javobda berilgan?",
        "options": [
          "Umumiy maqsad, faoliyat va muloqot asosida birlashgan kishilar uyushmasi",
          "Tasodifiy yig‘ilgan odamlar to‘plami",
          "Faqat rasmiy tashkilot a’zolari",
          "Bir hududda yashovchi odamlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hozirgi zamon psixologiya fanining predmeti qaysi javobda to‘g‘ri aks ettirilgan?",
        "options": [
          "psixik faktlarni, ularning qonuniyatlarini, mexanizmlarini o‘rganuvchi fandir",
          "kishining ongini o‘rganuvchi fandir",
          "ruh, jon haqidagi fandir",
          "kishining hatti-harakati, xulq atvorini o‘rganuvchi fandir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sezgi psixologik hodisalarning qaysi guruhiga (turkumga) kiradi?",
        "options": [
          "psixik jarayonlarga",
          "psixik holatlarga",
          "psixik xususiyatlarga",
          "Hissiy-irodaviy jarayon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Barcha psixologik hodisalar uch guruhga bo‘linadi. Quyida tushirib qoldirilganligini toping: psixik holatlar, psixik jarayonlar, …..",
        "options": [
          "individual-psixik xususiyatlar",
          "Sezgilar",
          "parapsixologik hodisalar",
          "apatiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Diqqat psixologik hodisalarning qaysi guruhi (turkumi)ga kiradi?",
        "options": [
          "Psixik jarayonlarga",
          "Psixik holatlarga",
          "psixik xususiyatlarga",
          "parapsixologik hodisalarga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kuzatish metodi turini aniqlang?",
        "options": [
          "O‘z-o‘zini kuzatish va tashqi kuzatish",
          "Laboratoriya sharoitida",
          "Eksperiment",
          "dars davomida kuzatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. odamni uning tarjimai holi bilan bog‘liq bo‘lgan hujjatlar orqali o‘rganish usuli.",
        "options": [
          "biografik metod",
          "Eksperiment",
          "Test",
          "Kuzatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kishining psixologik xususiyatlarini maxsus to‘zilgan savollarni o‘z ichiga olgan savolnomalar yordamida o‘rganish?",
        "options": [
          "Test",
          "Kuzatish",
          "Eksperiment",
          "Sotsiometriya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qisqa muddatli standart (o‘zgarmas) vazifalardan iborat bo‘lib, bajarilishi natijasiga ko‘ra shaxsning bilim, ko‘nikma, malaka, individual xususiyatlarning rivojlanganlik darajasini o‘rganish …..metodi deyiladi.",
        "options": [
          "Kuzatish",
          "Eksperiment",
          "Anketa",
          "test"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual hayot davomida orttirilgan hatti-harakat shakllari…",
        "options": [
          "ko‘nikmalar",
          "Instinklar",
          "Reflekslar",
          "aqliy hatti-harakatlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Harakatlar yoki harakatlar sistemasini esda olib qolish, esga tushirish, esda saqlash?",
        "options": [
          "To‘g‘ri javob yo‘q",
          "ko‘rgazmali-obrazli",
          "So‘z-mantiq",
          "emotsioanal xotira"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Gerontopsixologiya yosh psixologiyasi fanining qanday sohasi bo‘lib hisoblanadi?",
        "options": [
          "Qarilik davri psixologiyasi",
          "Bolalik davri psixologiyasi",
          "O‘smirlik psixologiyasi",
          "Embrional rivojlanish psixologiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik psixologiya ta’lim va tarbiyadan tashqari nimani o‘rganadi?",
        "options": [
          "Shaxsning o‘qitish jarayonida rivojlanishi",
          "Fiziologik rivojlanish",
          "Genetik omillar",
          "Faqat muhit"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Akmeologiya qanday soha?",
        "options": [
          "Yetuklik davri psixologiyasi",
          "Bolalik davri",
          "Qarilik davri",
          "Embrional davr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yosh psixologiyasi qaysi davrgacha falsafa va tibbiyotda bayon etilgan?",
        "options": [
          "XIX asr o‘rtalarigacha",
          "XVII asr",
          "XX asr",
          "XXI asr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "A.Navoiy yosh davrlar tasnifini qaysi asarda bergan?",
        "options": [
          "Mahbub ul-qulub",
          "Xamsa",
          "Lison ut-tayr",
          "Farhod va Shirin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Odam tarbiya predmeti sifatida” muallifi kim?",
        "options": [
          "K.D.Ushinskiy",
          "A. Makarenko",
          "J. Locke",
          "L. Tolstoy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kognitiv rivojlanish nazariyasi asoschisi kim?",
        "options": [
          "J.Piaje",
          "Z. Freyd",
          "E. Erikson",
          "B. Skinner"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Rekapitulyatsiyada 4–12 yosh qaysi davrga o‘xshaydi?",
        "options": [
          "Ibtidoiy jamiyat",
          "Industrial jamiyat",
          "Feodal davr",
          "Postindustrial"
        ],
        "correctAnswer": 0
      },
      {
        "question": "V. Shtern nazariyasining mohiyati?",
        "options": [
          "Irsiyat va muhit birligi",
          "Faqat biologik omil",
          "Faqat muhit",
          "Faoliyat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "L.I. Bojovich asosiy ehtiyoj deb nimani ko‘rsatadi?",
        "options": [
          "Muloqot ehtiyoji",
          "Fiziologik ehtiyoj",
          "Harakat",
          "O‘yin"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yosh davrlar psixologiyasi fani nimani o‘rgatadi?",
        "options": [
          "har xil yoshdagi odamlarning psixik rivojlanishini, shakllanishini o‘zaro munasabat qonuniyatlarini o‘rgatadi.",
          "har xil yoshdagi bolalarning psixologik jarayonlarini",
          "Har bir yosh davrdagi insonning xizmatini o‘rganadi.",
          "Yosh davrlardagi ta`lim-tarbiya jarayonlarini o‘rganadi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Chaqaloq dunyoga kelganda qaysi reflekslar belgili darajada rivojlangan buladi?",
        "options": [
          "So‘rish, emish.",
          "Ko‘rish, ovqatlanish, eshitish.",
          "Yutinish, eshitish.",
          "Ko‘rish, so‘rish, yutinish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ilk bolalik davridagi shakllantiradigan eng ahamiyatli sifatlar?",
        "options": [
          "Tik turib yura olishi, predmetlar bilan xizmat ishlay olishi, tilni egallashi, o‘rganishi.",
          "Odamlar gap so‘zlarini tushunish, aktiv gapira olishining paydo bo‘lishi.",
          "Oddiy harakatlar ko‘nikmalarini egallash va o‘z-o‘ziga xizmat qila olishining",
          "Aktiv gapira olishi natijasida shakllanishi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maktabgacha davrdagi bolalarning psixik rivojlanishiga xos xususiyatlar ko‘rsatilgan javobni aniqlang",
        "options": [
          "idrok, tafakkurining shakllanishi, fikrlarning ishlatila boshlashi",
          "eshitish, so‘z, diqqat, esta saqlash hajmining kengayishi",
          "Ikkinchi signal sistemasi, tafakkurning shakllanib borishi",
          "Ijtimoiy sharoitlardan kelib chiqishi, syujetli o‘yinlarda aks etishi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bolaning maktabda ta`lim olishga tayyorligini quyidagi xususiyatlarda ko‘rina boshlashi.",
        "options": [
          "Sezgilar, irodaning rivojlanishi, o‘z xatti- harakatini boshqara olishi",
          "o‘yin faoliyati to‘xtaydi",
          "bilimlarni o‘zlashtirishi",
          "Bilish, ishchanlik faoliyati o’sishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Uch yoshlik krizis qanday ish xarakatlarda ko’rinadi?",
        "options": [
          "Ish harakatlarida yaxshi, yomon tushunchalarni anglash, kattalardek harakatlanish",
          "O‘zini boshqalardan farqlay olish",
          "O‘zining va tengdoshlarining ulg‘ayganliklarini tushinish",
          "harakatlarning turi baholashni talab etadi."
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik maktab yoshdagi bolalarning psixik rivojlanishidagi ta`lim tarbiyaning roli qaysi javobda berilgan?",
        "options": [
          "Bilish jarayonining rivojlanishi, muommolarni yecha olish",
          "Kollektiv turdagi munosabat, bilimga bo’lgan qiziqish",
          "Ko’nikmalarning shakllanishi",
          "Diqqat, esda saqlash, tafakkurning shakllanishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik maktab yoshdagi bolalar faoliyatining psixologik xususiyatlari ko’rsatilgan javobni aniqlang",
        "options": [
          "Faoliyat harakat kordinatsiyalarini o’stiradi, javobgarchilikni shakllantiradi",
          "Faoliyat, ko’nikmalarni shakllantiradi",
          "Faoliyat bu yosh davrdagi asosiy xizmat hisoblanadi",
          "O‘z- o‘ziga faoliyat ko‘rsatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘spirinlarda o‘z aro munosabatlarning o‘zgacha belgilari va «tengdoshlik» davrini boshdan kechirilishi nimalar bilan aniqlanadi?",
        "options": [
          "Jamiyat talablarining kattalar dunyosi darajasiga o’tishi bilan",
          "Shaxsiy shakllanish xususiyatlari",
          "Organizmidagi anatomo-fiziologik xususiyatlar xarakteri bilan",
          "O’qish motivlari shakllanishi bilan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Necha oylikdan boshlab go’dak predmetlarni ushlay oladi?",
        "options": [
          "5-6 oylikdan",
          "6-7 oylikdan",
          "7-8 oylikdan",
          "5-8 oylikdan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kichik maktab yoshi davriga qaysi yosh oralig’i kiradi?",
        "options": [
          "46301",
          "42675",
          "17-25",
          "26-55"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ta’limda psixologik ta’sir deganda nimani tushunasiz?",
        "options": [
          "Bolalarning ob`ektiv va sub`ektiv tamonidan maktab talabiga munosibligi",
          "Akl idrok, nutk rivojlanishi",
          "Diqqati, tafakkuri rivojlanganligi",
          "Munosabat, rolli o’yinlarga tayyorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘spirinlarning aqliy kamoloti deganda nimani tushunasiz?",
        "options": [
          "Ta`lim tarbiya borasidagi materiallarini analiz va sintez qilib tushunib olish.",
          "O’spirinning o‘zini o‘zi anlashi",
          "O’spirinlarning adob axloqligi o‘ziga mos ongining rivojlanishi",
          "Mustakil fikr yuritishi, kattalar bilan aloqasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Do‘stga bo’lgan munosabat qaysi davrda yaqqol ko’rinadi?",
        "options": [
          "O‘spirinlik",
          "Ilk bolalik.",
          "Kichik maktab Yoshi davrida",
          "O‘spirinlik va kichik maktab Yoshi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "«Akseleratsiya» degan nima?",
        "options": [
          "Bolalarning fizik va psixik rivojlanish jadalligi",
          "Odam o’y fikrining ortta qolishi",
          "Bolaning suyak, muskul sistemasining tez rivojlanishi",
          "Tez yetilish va dunyo tanish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O’quv, bilim olishdan iborat bo’lgan asosiy foaliyat turlari qaysi davrdan rivojlana boshlaydi?",
        "options": [
          "Kichik maktab davri",
          "Ilk o‘spirinlik",
          "Maktabgacha yosh davr",
          "o‘smirlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik rivojlanishning harakatlantirivchi kuchi bu-",
        "options": [
          "tarbiya",
          "tabiyat",
          "ta`lim",
          "ichki ziddiyatlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Biogenetik nazariya asoschilari kimlar?",
        "options": [
          "F.Myuller, E.Gekkel",
          "Shtern, Z.Freyd",
          "E.Krechmer, L.S.Vigotskiy",
          "B.G.Ananev, P.P.Blonskiy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maktabgacha yoshdagi bolalarning yetakchi faoliyati nima?",
        "options": [
          "O’yin",
          "O’quv",
          "Muloqat",
          "Qiziqish va o’qish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hozirgi zamon psixologiya fanining predmeti qaysi javobda to‘g‘ri aks ettirilgan?",
        "options": [
          "psixik faktlarni, ularning qonuniyatlarini, mexanizmlarini o‘rganuvchi fandir",
          "kishining ongini o‘rganuvchi fandir",
          "ruh, jon haqidagi fandir",
          "kishining hatti-harakati, xulq atvorini o‘rganuvchi fandir"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sezgi psixologik hodisalarning qaysi guruhiga (turkumga) kiradi?",
        "options": [
          "psixik jarayonlarga",
          "psixik holatlarga",
          "psixik xususiyatlarga",
          "Hissiy-irodaviy jarayon"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Diqqat psixologik hodisalarning qaysi guruhi (turkumi)ga kiradi?",
        "options": [
          "Psixik jarayonlarga",
          "Psixik holatlarga",
          "psixik xususiyatlarga",
          "parapsixologik hodisalarga"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kuzatish metodi turini aniqlang?",
        "options": [
          "O‘z-o‘zini kuzatish va tashqi kuzatish",
          "Laboratoriya sharoitida",
          "Eksperiment",
          "dars davomida kuzatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. odamni uning tarjimai holi bilan bog‘liq bo‘lgan hujjatlar orqali o‘rganish usuli.",
        "options": [
          "biografik metod",
          "Eksperiment",
          "Test",
          "Ko‘zatish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Kishining psixologik xususiyatlarini maxsus tuzilgan savollarni o‘z ichiga olgan savolnomalar yordamida o‘rganish?",
        "options": [
          "Test",
          "Kuzatish",
          "Eksperiment",
          "Sotsiometriya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual hayot davomida orttirilgan hatti-harakat shakllari…",
        "options": [
          "ko‘nikmalar",
          "Instinklar",
          "Reflekslar",
          "aqliy hatti-harakatlar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Harakatlar yoki harakatlar sistemasini esda olib qolish, esga tushirish, esda saqlash?",
        "options": [
          "To‘g‘ri javob yo‘q",
          "ko‘rgazmali-obrazli",
          "So‘z-mantiq",
          "emotsioanal xotira"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Dualizm” oqimining asoschisi qaysi qatorda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Platon",
          "Geraklit",
          "Arastu",
          "Fales"
        ],
        "correctAnswer": 0
      },
      {
        "question": "………psixikaning eng yuksak darajasi bólib, u faqat insongagina xos.",
        "options": [
          "Ong",
          "psixika",
          "ongsizlik",
          "To‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": ".…… bu shunday psixik jarayonlar holatlar yig‘indisiki, unda inson o‘z xatti-рarakatlariga javob bermaydi, anglamaydi?",
        "options": [
          "Ongsizlik",
          "gallyusinasiya",
          "tush ko‘rish",
          "patalogik hodisalar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turli nerv hujayralarining tutashgan joyi bu ….",
        "options": [
          "Sinaps",
          "akson",
          "dendrit",
          "neyron"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hayvonlarning o‘z ehtiyojlarini qondirish uchun qiladigan tug‘ma murakkab harakatlari ….. deb ataladi.",
        "options": [
          "Instinkt",
          "ko‘nikma",
          "intellektual harakat",
          "malaka"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…. organizmning individual rivojlanishi.",
        "options": [
          "Ontogenez",
          "filogenez",
          "biogenetik qonun",
          "to‘g‘ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. muayyan tirik mavjudot turining evolyutsion taraqqiyot jarayoni.",
        "options": [
          "Filogenez",
          "biogenetik qonun",
          "ontogenez",
          "to‘g‘ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixoanaliz yo‘nalishiga kim asos solgan?",
        "options": [
          "Z.Freyd",
          "K.N.Kornilov",
          "E.Torndayk",
          "Dj.Uotson"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. inson tug‘ilgandan voyaga yetgunga qadar psixik rivojlanish yoshidan o‘tishi",
        "options": [
          "psixikaning ontogenezda rivojlanishi",
          "ongni faoliyatda rivojlanishi",
          "psixikaning filogenezda rivojlanishi",
          "to‘g‘ri javob berilmagan"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. nerv tizimining ichki a’zolar faoliyatini boshqaradi.",
        "options": [
          "vegetativ asab tizimi",
          "markaziy asab tizimi",
          "bosh miya yarim sharlari",
          "metabolizm"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dastlab psixologik tadqiqotlar laboratoriyasi kim tomonidan ochildi?",
        "options": [
          "V.Vundt",
          "Z.Freyd",
          "I.Pavlov",
          "V.M.Bexterev"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Dastlabki psixologik eksperiment qaysi mamlakatda tashkil qilindi?",
        "options": [
          "Germaniya",
          "AQSh",
          "Avstriya",
          "Buyuk Britaniya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "“Psixologiyaning tarixgacha bo‘lgan katta va kichik tarixi bor” fikr muallifi?",
        "options": [
          "G.Ebbingauz",
          "E.Torndayk",
          "Dj.Uotson",
          "I.M.Sechenov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…. Shaxsning tevarak-atrofdagi odamlarga, tashqi hodisalarga yo‘nalishi.",
        "options": [
          "Ekstraversiya",
          "nerv tizimi muvozanatsiz",
          "introversiya",
          "nerv tizimi muvozanatli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Til yoki boshqa belgilar vositasida axborot berish bu …",
        "options": [
          "kommunikatsiya",
          "identifikatsiya",
          "muloqot",
          "refleksiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inson gavdasining mimika, imo-ishora, intonasiyalar bilan psixik holatini ifodalovchi harakatlari.",
        "options": [
          "Pantomimika",
          "nutq madaniyati",
          "empatiya",
          "refleksiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qaysi qatorda diqqat tushunchasiga to‘g‘ri ta’rif berilgan?",
        "options": [
          "ongimizning muayyan obektga yo‘naltirilishi va unda to‘planishi",
          "eng oddiy psixik jarayon",
          "ma'lum obektga o‘zoq vaqt qaratilishi",
          "bir vaqtda bir necha obektga taqsimlanishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. diqqatning ma'lum obektga o‘zoq vaqt davomida mutassil qaratilishi",
        "options": [
          "diqqatning barqarorligi",
          "diqqatning ko‘lami",
          "diqqatning taqsimlanishi",
          "diqqatning ko‘chishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. bir vaqtning o‘zida diqqatning bir qancha ob'ektga qaratilishi",
        "options": [
          "diqqatning ko‘lami",
          "diqqatning taqsimlanishi",
          "diqqatning ko‘chishi",
          "diqqatning barqarorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. diqqatning bir vaqtda bir necha ob'ektga taqsimlanishi",
        "options": [
          "diqqatning taqsimlanishi",
          "diqqatning barqarorligi",
          "diqqatning ko‘lami",
          "diqqatning ko‘chishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. diqqatni ixtiyoriy ravishda bir ob'ektdan ikkinchisiga o‘tkazish",
        "options": [
          "diqqatning ko‘chishi",
          "diqqatning taqsimlanishi",
          "diqqatning barqarorligi",
          "diqqatning ko‘lami"
        ],
        "correctAnswer": 0
      },
      {
        "question": "To‘satdan ta’sir qilgan sabab tufayli hohishimizdan tashqari hosil bo‘ladigan diqqat",
        "options": [
          "Ixtiyorsiz",
          "ixtiyoriy",
          "ixtiyordan so‘nggi diqqat",
          "bo‘linuvchanlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. oldindan belgilangan qat'iy maqsad asosida diqqatni ma'lum narsalarga qaratilishi",
        "options": [
          "Ixtiyoriy",
          "ixtiyorsiz",
          "ixtiyoriydan keyingi diqqat",
          "bo‘linuvchanlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "….. odam o‘z diqqatini biror narsaga o‘zoq muddat muttasil qaratib tura olishi",
        "options": [
          "diqqatning kuchi va barqarorligi",
          "diqqatning ko‘lami",
          "diqqatning bo‘linuvchanligi",
          "diqqatning konsentrasiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Diqqatning ko‘lami qaysi asbob yordamida o‘lchanadi?",
        "options": [
          "Taxistoskop",
          "varometr",
          "manometr",
          "sekundametr"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ixtiyoriydan keyingi diqqat tushunchasi kim tomonidan fanga kiritilgan?",
        "options": [
          "N.F.Dobrinin",
          "A.A.Uxtomiskiy",
          "I.M.Sechenov",
          "I.P.Pavlov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…. sezgi a'zolarining qo‘zg‘ovchi kuchiga moslashuvi natijasida sezgirlikning o‘zgarishi.",
        "options": [
          "Adaptatsiya",
          "analizator",
          "afferentatsiya",
          "sinesteziya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "…. fazodagi harakatlarning yo‘nalishi holatini ko‘zatib baholab turishga yordam beradigan analizator",
        "options": [
          "vestibulyar apparat",
          "analizator",
          "afferentatsiya",
          "sinesteziya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Inson ichki a'zolarida joylashgan reseptorlar nima deb ataladi?",
        "options": [
          "interoreseptiv sezgilar",
          "proprioreseptiv sezgilar",
          "eksterioreseptiv sezgilar",
          "kinestetik sezgi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘z tana a'zolarining holati va harakatini propreoreseptorlar ta'sirida sezish?",
        "options": [
          "kinestetik sezgi",
          "interoreseptiv sezgilar",
          "proprioreseptiv sezgilar",
          "eksterioreseptiv sezgilar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tananing turli qismlaridagi holat va harakatlardan darak beruvchi sezgilar?",
        "options": [
          "proprioreseptiv sezgilar",
          "kinestetik sezgi",
          "interoreseptiv sezgilar",
          "eksterioreseptiv sezgilar"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tashqi olamdagi narsa va hodisalarning xususiyatlari haqida darak beruvchi sezgilar?",
        "options": [
          "eksterioreseptiv sezgilar",
          "interoreseptiv sezgilar",
          "proprioreseptiv sezgilar",
          "kinestetik sezgi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turli xil sezgilarning o‘zaro ta'siri natijasida qo‘shilib ketishi?",
        "options": [
          "Sinesteziya",
          "sensibilizatsiya",
          "adaptatsiya",
          "akkomodatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sezgi bu ...",
        "options": [
          "eng oddiy psixik jarayon – narsa va hodisalar xususiyatlarini aks ettirish",
          "o‘tmishdagi voqealarga munosabat",
          "ongning obektga yo‘naltirilishi",
          "narsa va hodisalarning butun holda aks etishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ekstroseptiv sezgilar qaysi?",
        "options": [
          "barcha javoblar to‘g‘ri",
          "ta'm bilish",
          "hid bilish",
          "teri, ko‘rish, eshitish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Interoreseptiv sezgilar bu ...",
        "options": [
          "organik sezgilar",
          "idrok va sezgi birligi",
          "vestibulyar apparat",
          "to‘g‘ri javob yo‘q"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sezgi organlarini stimullarga moslashishi?",
        "options": [
          "Adaptatsiya",
          "sensibilizatsiya",
          "sinesteziya",
          "konstantlik"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sensibilizatsiya bu...",
        "options": [
          "mashq natijasida sezuvchanlik ortishi",
          "bir sezgiga ta'sir etuvchi qo‘zg‘atuvchilar yig‘indisi",
          "ko‘z gavharini moslashishi",
          "ma'lumotlarni jamlanishi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Adaptatsiya turlari:",
        "options": [
          "pozitiv, negativ",
          "negativizm, kommunikativ",
          "sub'ekt, ob'ektiv",
          "taktik negativ"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qorni ochlikni, chanqashni sezish qaysi sezgi turiga oid?",
        "options": [
          "Organik",
          "eshitish",
          "ta'm bilish",
          "teri sezgisi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Sezgilar klassifikatsiyasini dastlab kim ishlab chiqqan?",
        "options": [
          "Ch.Sherrington",
          "A.R.Luriya",
          "I.Pavlov",
          "A.Orbeli"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Idrok bu ...",
        "options": [
          "sezgi a'zolariga ta'sir etayotgan narsa va hodisalarning butun holda aks etishi",
          "shaxsning voqealarni aks etishi",
          "bor narsani noto‘g‘ri anglash",
          "yo‘q narsani his qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Gallyutsinatsiya - bu ...",
        "options": [
          "yo‘q narsalarni idrok qilish",
          "bor narsani noto‘g‘ri idrok qilish",
          "idrok qilish qobiliyati",
          "idrokning tajribaga bog‘liqligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yo‘q narsalarni idrok qilish bu ...",
        "options": [
          "Gallyutsinatsiya",
          "idrok",
          "xayol",
          "illyo‘ziya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Narsalar sharoiti o‘zgarsa ham obrazning o‘zgarmasligi?",
        "options": [
          "idrok konstantligi",
          "idrok yaxlitligi",
          "appersepsiya",
          "idrok strukturaviyligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Illyuziya bu...",
        "options": [
          "bor narsani noto‘g‘ri, yanglish idrok qilish",
          "bir narsani his qilib anglash",
          "idrok qilish qobiliyati",
          "yo‘q narsani idrok qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Appersepsiya - bu ...",
        "options": [
          "idrokning shaxs va uning tajribasiga bog‘liqligi",
          "shaxsning adaptatsion davri",
          "o‘smirlik krizisi",
          "vaqtni, harakatni idrok qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Konvergensiya bu ...",
        "options": [
          "biror narsaga qaraganda ikkala ko‘z soqqasining baravar burilishi",
          "narsalarning fazo munosabatini binokulyar idrok qilish",
          "odatdagi narsalarni idrok qilish",
          "vaqtni idrok qilish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Odam narsalarning harakati haqida qanday ma'lumot oladi?",
        "options": [
          "harakatni bevosita idrok qilish va harakat haqida xulosa chiqarish",
          "faqat harakat haqida xulosa chiqarish",
          "ko‘zni harakatdagi narsaga qaratish",
          "ko‘zni nuqtaga qaratib turish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xotira tushunchasiga to‘g‘ri ta’rif?",
        "options": [
          "ilgari idrok qilgan, kechirgan va bajargan ishlarni yodda saqlash va esga tushirish",
          "miyadagi muvaqqat bog‘lanishlar",
          "miyada iz hosil bo‘lishi",
          "kundalik bilimlarni esda olib qolish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xotira jarayonlari qaysi?",
        "options": [
          "barcha javoblar to‘g‘ri",
          "esga tushirish",
          "esda olib qolish, unutish",
          "esda saqlash"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Materialni saqlash muddatiga ko‘ra xotira turlari?",
        "options": [
          "qisqa muddatli, o‘zoq muddatli, operativ",
          "ixtiyorsiz, ixtiyoriy",
          "harakat, hissiy, obrazli, so‘z-mantiq",
          "harakat, ixtiyorsiz, operativ"
        ],
        "correctAnswer": 0
      },
      {
        "question": "O‘tmishda idrok qilingan narsalarning ongda qayta tiklanishi?",
        "options": [
          "esga tushirish",
          "tanish",
          "eslash",
          "bevosita esga tushirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Unutilgandan keyin materialning xotiraga qaytishi?",
        "options": [
          "Remenissensiya",
          "amneziya",
          "retrograd amneziya",
          "assotsiatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Unutishning vaqtga bog‘liqligini o‘rgangan olim?",
        "options": [
          "G.Ebbingauz",
          "I.Pavlov",
          "A.Smirnov",
          "I.Sechenov"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ilgari idrok qilingan narsa obrazlarining ongda qaytadan gavdalanishi?",
        "options": [
          "xotira tasavvurlari",
          "unutish",
          "esda saqlash",
          "xayol tasavvurlari"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shakliga ko‘ra tafakkur turlari?",
        "options": [
          "ko‘rgazmali-harakatli, ko‘rgazmali-obrazli, mantiqiy",
          "amaliy, nazariy",
          "konvergent, divergent",
          "reproduktiv, produktiv"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yangilik darajasiga ko‘ra tafakkur turlari?",
        "options": [
          "reproduktiv, produktiv",
          "ko‘rgazmali-obrazli, harakatli, so‘z-mantiq",
          "konvergent, divergent",
          "amaliy, nazariy"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Masala xarakteriga ko‘ra tafakkur turlari?",
        "options": [
          "amaliy, nazariy",
          "ko‘rgazmali-harakatli, obrazli, mantiqiy",
          "konvergent, divergent",
          "reproduktiv, produktiv"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijodiyligiga ko‘ra tafakkur turlari?",
        "options": [
          "konvergent, divergent",
          "ko‘rgazmali-harakatli, obrazli, mantiqiy",
          "amaliy, nazariy",
          "reproduktiv, produktiv"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Narsa va hodisalarni fikran qismlarga ajratish?",
        "options": [
          "Analiz",
          "sintez",
          "taqqoslash",
          "klassifikatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Qismlarni fikran birlashtirib butun holga keltirish?",
        "options": [
          "Sintez",
          "analiz",
          "taqqoslash",
          "klassifikatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Narsalarning o‘xshashlik va farqini aniqlash?",
        "options": [
          "Taqqoslash",
          "analiz",
          "sintez",
          "klassifikatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Muhim xususiyatlarni ajratib, muhim bo‘lmaganlarini fikran tashlash?",
        "options": [
          "Abstraksiyalash",
          "analiz",
          "sintez",
          "klassifikatsiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Narsalarni turkumlarga ajratish tizimi?",
        "options": [
          "Klassifikatsiya",
          "abstraksiyalash",
          "analiz",
          "sintez"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Narsa va hodisalar haqida tasdiqlovchi yoki inkor qiluvchi fikr?",
        "options": [
          "Hukm",
          "xulosa chiqarish",
          "tushuncha",
          "mavhumlashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xayol turlari qaysi?",
        "options": [
          "tasavvur, ijodiy, ixtiyoriy, ixtiyorsiz",
          "mexanik, ixtiyoriy, ixtiyorsiz",
          "tasavvur, ijodiy, frenologik, emotsional",
          "ixtiyoriy, ixtiyorsiz, ijodiy, emotsional"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tajribada bo‘lmagan narsalar haqida obraz yaratish?",
        "options": [
          "ijodiy xayol",
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol",
          "tasavvur xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Hikoyani eshitib, qahramonlar ko‘z oldida gavdalanishi?",
        "options": [
          "tasavvur xayol",
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol",
          "ijodiy xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yozuvchining tipik obraz yaratishi?",
        "options": [
          "ijodiy xayol",
          "tasavvur xayol",
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ijodiy xayolning maxsus turi?",
        "options": [
          "Orzu",
          "tush ko‘rish",
          "fantaziya",
          "tiklovchi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maqsadsiz, irodasiz obraz va tasavvurlar yaratish?",
        "options": [
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol",
          "ijodiy xayol",
          "tasavvur xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tashna yoki och paytda taomlar va suv paydo bo‘lishi?",
        "options": [
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol",
          "ijodiy xayol",
          "tasavvur xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tush ko‘rish xayolning qaysi turi?",
        "options": [
          "ixtiyorsiz xayol",
          "ixtiyoriy xayol",
          "ijodiy xayol",
          "tasavvur xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Maqsad va iroda kuchi bilan obraz yaratish?",
        "options": [
          "ixtiyoriy xayol",
          "ixtiyorsiz xayol",
          "ijodiy xayol",
          "tasavvur xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Tush ko‘rishning asosiy sababi?",
        "options": [
          "bosh miya po‘stining hamma joyi tormozlanmay, ayrim joylari ishlaydi",
          "qattiq uxlamagan vaqtda",
          "bosh miyada tormozlanmagan markazlar",
          "orzu qilgan narsalar haqida"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Voqelik aks ettiriladigan, orzular amalga oshadigan xayol?",
        "options": [
          "realistik xayol",
          "ixtiyorsiz xayol",
          "ijodiy xayol",
          "fantastik xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Amalga oshmaydigan xayol turi?",
        "options": [
          "fantastik xayol",
          "realistik xayol",
          "ixtiyorsiz xayol",
          "ijodiy xayol"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Voqelikning kishilar faoliyati uchun bo‘ladigan doirasi – qaysi xayol sifati?",
        "options": [
          "xayolning kengligi",
          "xayolning mazmundorligi",
          "xayolning realligi",
          "xayolning kuchi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Asab tizimining tipikligi, charchoq, sog‘liqqa bog‘liq xayol sifati?",
        "options": [
          "xayolning kuchi",
          "xayolning kengligi",
          "xayolning mazmundorligi",
          "xayolning realligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Voqelikni to‘g‘ri aks ettiruvchi xayoliy obrazlar yaratilishi?",
        "options": [
          "xayolning realligi",
          "xayolning kuchi",
          "xayolning kengligi",
          "xayolning mazmundorligi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Xayolning kuchi nimaga bog‘liq?",
        "options": [
          "barcha javoblar to‘g‘ri",
          "ehtiyoj, qiziqish, istak kuchiga",
          "hissiyotga",
          "idrokka"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Turli qismlarni bitta qilib yangi obraz yaratish?",
        "options": [
          "Agglyutinatsiya",
          "giperbolizatsiya",
          "sxematlashtirish",
          "tipiklashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Obrazlarni kattalashtirish yoki kichiklashtirish?",
        "options": [
          "Giperbolizatsiya",
          "agglyutinatsiya",
          "sxematlashtirish",
          "tipiklashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ayrim belgilarni ta’kidlash orqali obraz yaratish?",
        "options": [
          "Aksentlashtirish",
          "giperbolizatsiya",
          "sxematlashtirish",
          "tipiklashtirish"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixologiya so‘zi qaysi tildan olingan va ma’nosi?",
        "options": [
          "grekcha: psyche – jon, ruh; logos – ta’limot",
          "lotincha: psyche – jon, ruh",
          "inglizcha: psyche – jon, ruh",
          "grekcha: psyche – xulq"
        ],
        "correctAnswer": 0
      },
      {
        "question": "To‘satdan paydo bo‘lib, tez o‘tadigan kuchli holat?",
        "options": [
          "Affekt",
          "kayfiyat",
          "ehtiros",
          "stress"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsdagi befarqlik, beparvolik holati?",
        "options": [
          "Apatiya",
          "astenik",
          "stenik",
          "ekspressiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixologiya tuzilishi?",
        "options": [
          "psixik jarayonlar, psixik holatlar, individual-psixologik xususiyatlar",
          "bilish jarayonlari, hissiy-emotsional jarayon",
          "kulish, xafa bo‘lish, hayratlanish",
          "temperament, xarakter, qobiliyat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Predmet, narsa, hodisalar orqasidagi bog‘lanishlarni umumlashtirib aks ettirish?",
        "options": [
          "Tafakkur",
          "idrok",
          "sezgi",
          "xotira"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsning psixologik xususiyatlarining yosh o‘zgarishi dinamikasini o‘rganuvchi fan?",
        "options": [
          "yosh davrlari psixologiyasi",
          "umumiy psixologiya",
          "pedagogik psixologiya",
          "injenerlik psixologiya"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Shaxsning individual xususiyatlari deganda nima tushuniladi?",
        "options": [
          "bir shaxsni ikkinchi shaxsdan farqlaydigan xususiyatlar",
          "bir shaxsning ikkinchisiga o‘xshashligi",
          "xususiyatlarning shakllanishidagi o‘xshashlik",
          "barchasi to‘g‘ri"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Uyqu vaqtida yuz beradigan, sezilmaydigan psixologik hodisalar?",
        "options": [
          "ongsizlik",
          "ong",
          "ong osti",
          "psixika"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bixeviorizm so‘zi qaysi tildan olingan va ma’nosi?",
        "options": [
          "inglizcha: xulq-atvor",
          "inglizcha: tafakkur",
          "yunoncha: tamg‘a",
          "lotincha: xulq-atvor"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Pedagogik psixologiyaning bo‘limlari?",
        "options": [
          "barcha javoblar to‘g‘ri",
          "tarbiya psixologiyasi",
          "o‘qituvchi psixologiyasi",
          "ta’lim psixologiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Oligofrenopsixologiya nimani o‘rganadi?",
        "options": [
          "miyaning tug‘ma kamchiliklari tufayli paydo bo‘ladigan bo‘limlarni",
          "eshitish nuqsonli bolalar rivojlanishini",
          "ko‘rmaydigan kishilar faoliyatini",
          "rivojlanish cho‘qqisiga erishishni"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Yetuklik darajasiga erishgan shaxs rivojlanishining yuqori darajasini o‘rganuvchi soha?",
        "options": [
          "akmeologiya",
          "etnopsixologiya",
          "differensial psixologiya",
          "din psixologiyasi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Psixik holatlar to‘g‘ri berilgan qator?",
        "options": [
          "qo‘rquv, apatiya, xafa bo‘lish",
          "sezgi, idrok, xotira",
          "qobiliyat, xarakter, qiziqishlar",
          "tafakkur, xayol, nutq, diqqat"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Bilish jarayonlari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "diqqat, sezgi, idrok, xayol, xotira, tafakkur",
          "iroda, hissiyot, tafakkur, temperament",
          "idrok, sezgi, qobiliyat, iroda",
          "qobiliyat, nutq, xayol, idrok"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Individual psixologik xususiyatlar?",
        "options": [
          "temperament, xarakter, qobiliyat",
          "diqqat, idrok",
          "sezgi, xayol, xarakter",
          "qiziqish, tafakkur, sezgi"
        ],
        "correctAnswer": 0
      },
      {
        "question": "Ong nima?",
        "options": [
          "psixikaning yuksak darajasi, mehnat faoliyati va munosabatlar mahsuli",
          "ijtimoiy muhit mahsuli",
          "aniq maqsad qo‘yib faoliyat ko‘rsatish",
          "mehnat faoliyati jarayoni va natijasi"
        ],
        "correctAnswer": 0
      }
    ]
  }
];

export function findSubject(id) {
  return SUBJECTS.find((s) => s.id === id) ?? null;
}
