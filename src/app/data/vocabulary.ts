import { Vocabulary } from '../models/vocabulary';

export const VOCABULARY: { isoCode: string; words: { translate: string; request: string; rate: string; send: string; thanks: string } }[] = [
  { isoCode: 'af-ZA', words: { translate: 'vertaling', request: 'U versoek:', rate: 'Is u tevrede met u onderhoud?', send: 'stuur', thanks: 'Pôle Emploi dankie' } },
  { isoCode: 'am-ET', words: { translate: 'ትርጉም', request: 'የእርስዎ ጥያቄ', rate: 'በቃለ መጠይቅዎ ረክተዋል?', send: 'ላክ', thanks: 'ፖሌ አራይ አመሰግናለሁ ፡፡' } },
  { isoCode: 'hy-AM', words: { translate: 'թարգմանություն', request: 'Ձեր հայցը.', rate: 'Գրեք փորձը:', send: 'ուղարկել', thanks: 'Pôle Emploi շնորհակալություն' } },
  { isoCode: 'az-AZ', words: { translate: 'tərcümə', request: 'İstəkiniz:', rate: 'Müsahibədən razısınız?', send: 'göndərmək', thanks: 'Pôle Emploi təşəkkür edirəm' } },
  { isoCode: 'id-ID', words: { translate: 'terjemahan', request: 'Permintaan anda:', rate: 'Apakah Anda puas dengan wawancara Anda?', send: 'mengirim', thanks: 'Pôle Emploi terima kasih' } },
  { isoCode: 'ms-MY', words: { translate: 'terjemahan', request: 'Permintaan anda:', rate: 'Adakah anda berpuas hati dengan temuduga anda?', send: 'menghantar', thanks: 'Pôle Emploi terima kasih' } },
  { isoCode: 'bn-BD', words: { translate: 'অনুবাদ', request: 'আপনার অনুরোধ:', rate: 'আপনি কি আপনার সাক্ষাত্কারে সন্তুষ্ট?', send: 'পাঠান', thanks: 'পোলে কর্মচারী আপনাকে ধন্যবাদ' } },
  { isoCode: 'bn-IN', words: { translate: 'অনুবাদ', request: 'আপনার অনুরোধ:', rate: 'আপনি কি আপনার সাক্ষাত্কারে সন্তুষ্ট?', send: 'পাঠান', thanks: 'পোলে কর্মচারী আপনাকে ধন্যবাদ' } },
  { isoCode: 'ca-ES', words: { translate: 'traducció', request: 'La vostra sol·licitud:', rate: 'Esteu satisfets amb la vostra entrevista?', send: 'enviar', thanks: 'Pôle Emploi gràcies' } },
  { isoCode: 'cs-CZ', words: { translate: 'překlad', request: 'Váš požadavek:', rate: 'Jste se svým pohovorem spokojeni?', send: 'odeslat', thanks: 'Pôle Emploi děkuji' } },
  { isoCode: 'da-DK', words: { translate: 'oversættelse', request: 'Din anmodning:', rate: 'Er du tilfreds med dit interview?', send: 'sende', thanks: 'Pôle Emploi tak' } },
  { isoCode: 'de-DE', words: { translate: 'Übersetzung', request: 'Ihre Anfrage:', rate: 'Bist du mit deinem Interview zufrieden?', send: 'senden', thanks: 'Pôle Emploi dankt Ihnen' } },
  { isoCode: 'en-AU', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-CA', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-GH', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-GB', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-IN', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-IE', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-KE', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-NZ', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-NG', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-PH', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-SG', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-ZA', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'en-TZ', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'us-US', words: { translate: 'Translate', request: 'Your request:', rate: 'Are you satisfied with your interview?', send: 'Send', thanks: 'Pôle Emploi thanks you.' } },
  { isoCode: 'es-AR', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-BO', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-CL', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-CO', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-CR', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-EC', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-SV', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-ES', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-US', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-GT', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-HN', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-MX', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-NI', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-PA', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-PY', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-PE', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-PR', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-DO', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-UY', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'es-VE', words: { translate: 'Traducción', request: 'Traducción', rate: '¿Estás satisfecho con tu entrevista?', send: 'Enviar a', thanks: 'Pôle Emploi gracias.' } },
  { isoCode: 'eu-ES', words: { translate: 'itzulpen', request: 'Zure eskaera:', rate: 'Pozik al zaude zure elkarrizketarekin?', send: 'Bidali', thanks: 'Pôle Emploi eskerrik asko' } },
  { isoCode: 'fr-CA', words: { translate: 'Traduction', request: 'Votre demande :', rate: 'Êtes-vous satisfait de votre entretien ?', send: 'Envoyer', thanks: 'Pôle Emploi vous remercie' } },
  { isoCode: 'fr-FR', words: { translate: 'Traduction', request: 'Votre demande :', rate: 'Êtes-vous satisfait de votre entretien ?', send: 'Envoyer', thanks: 'Pôle Emploi vous remercie' } },
  { isoCode: 'gl-ES', words: { translate: 'tradución', request: 'A túa solicitude:', rate: 'Está satisfeito coa súa entrevista?', send: 'Enviar', thanks: 'Pôle Emploi grazas' } },
  { isoCode: 'ka-GE', words: { translate: 'თარგმანი', request: 'თქვენი მოთხოვნა:', rate: 'კმაყოფილი ხართ თქვენი ინტერვიუდან?', send: 'გაუგზავნე', thanks: 'Pôle Emploi მადლობას გიხდით' } },
  { isoCode: 'gu-IN', words: { translate: 'અનુવાદ', request: 'તમારી વિનંતી:', rate: 'શું તમે તમારા ઇન્ટરવ્યુથી સંતુષ્ટ છો?', send: 'મોકલી', thanks: 'પેલે કર્મચારી આભાર' } },
  { isoCode: 'hr-HR', words: { translate: 'prijevod', request: 'Vaš zahtjev:', rate: 'Jeste li zadovoljni svojim intervjuom?', send: 'poslati', thanks: 'Pôle Emploi hvala vam' } },
  { isoCode: 'zu-ZA', words: { translate: 'translation', request: 'Isicelo sakho:', rate: 'Wanelisekile ngengxoxo yakho?', send: 'ukuthumela', thanks: 'Pôle Emploi ngiyabonga' } },
  { isoCode: 'is-IS', words: { translate: 'þýðingar', request: 'Beiðni þín:', rate: 'Ertu ánægður með viðtalið þitt?', send: 'Sendu', thanks: 'Pôle Emploi takk fyrir' } },
  { isoCode: 'it-IT', words: { translate: 'traduzione', request: 'La tua richiesta:', rate: 'Sei soddisfatto della tua intervista?', send: 'mandare', thanks: 'Pôle Emploi ti ringrazia' } },
  { isoCode: 'uz-UZ', words: { translate: 'tarjima', request: "Sizning so'rovingiz:", rate: 'Suhbatingizdan qoniqasizmi?', send: 'yuborish', thanks: 'Pôle Emploi sizga rahmat' } },
  { isoCode: 'jv-ID', words: { translate: 'translation', request: 'Panjalukmu:', rate: 'Apa sampeyan wis wareg karo wawancara?', send: 'ngirim', thanks: 'Pôle Emploi matur suwun' } },
  { isoCode: 'kn-IN', words: { translate: 'ಅನುವಾದ', request: 'ನಿಮ್ಮ ವಿನಂತಿ:', rate: 'ನಿಮ್ಮ ಸಂದರ್ಶನದಲ್ಲಿ ನೀವು ತೃಪ್ತರಾಗಿದ್ದೀರಾ?', send: 'ಕಳುಹಿಸಿ', thanks: 'ಪೆಲೆ ಎಂಪ್ಲಾಯ್ ಧನ್ಯವಾದಗಳು' } },
  { isoCode: 'km-KH', words: { translate: 'បកប្រែ', request: 'សំណើរបស់អ្នក៖', rate: 'តើអ្នកពេញចិត្តនឹងការសម្ភាសរបស់អ្នកទេ?', send: 'ផ្ញើ', thanks: 'Plele Emploi សូមអរគុណ។' } },
  { isoCode: 'lo-LA', words: { translate: 'ການແປພາສາ', request: 'ຄຳ ຮ້ອງຂໍຂອງທ່ານ:', rate: 'ທ່ານພໍໃຈກັບການ ສຳ ພາດຂອງທ່ານບໍ?', send: 'ສົ່ງ', thanks: 'Pôle Emploi ຂໍຂອບໃຈທ່ານ' } },
  { isoCode: 'lv-LV', words: { translate: 'tulkojums', request: 'Jūsu pieprasījums:', rate: 'Vai esat apmierināts ar savu interviju?', send: 'sūtīt', thanks: 'Pôle Emploi pateicas jums' } },
  { isoCode: 'lt-LT', words: { translate: 'vertimas', request: 'Jūsų prašymas:', rate: 'Ar esate patenkintas savo interviu?', send: 'siųsti', thanks: 'Pôle Emploi dėkoja jums' } },
  { isoCode: 'hu-HU', words: { translate: 'fordítás', request: 'Az Ön kérése:', rate: 'Elégedett az interjúval?', send: 'küld', thanks: 'Pôle Emploi köszönöm' } },
  { isoCode: 'ml-IN', words: { translate: 'വിവർത്തനം', request: 'നിങ്ങളുടെ അഭ്യർത്ഥന:', rate: 'നിങ്ങളുടെ അഭിമുഖത്തിൽ നിങ്ങൾ സംതൃപ്തനാണോ?', send: 'അയയ്ക്കുക', thanks: 'പോൾ എംപ്ലോയി നന്ദി' } },
  { isoCode: 'mr-IN', words: { translate: 'अनुवाद', request: 'आपली विनंतीः', rate: 'आपण आपल्या मुलाखतीत समाधानी आहात?', send: 'पाठवा', thanks: 'Plele कर्मचारी धन्यवाद' } },
  { isoCode: 'nl-NL', words: { translate: 'vertaling', request: 'Uw verzoek:', rate: 'Ben je tevreden met je interview?', send: 'sturen', thanks: 'Pôle Emploi bedankt' } },
  { isoCode: 'ne-NP', words: { translate: 'अनुवाद', request: 'तपाईको अनुरोध:', rate: 'के तपाइँ तपाइँको साक्षात्कार संग सन्तुष्ट हुनुहुन्छ?', send: 'पठाउन', thanks: 'P Emplole कर्मचारी धन्यवाद' } },
  { isoCode: 'nb-NO', words: { translate: 'oversettelse', request: 'Din forespørsel:', rate: 'Er du fornøyd med intervjuet ditt?', send: 'sende', thanks: 'Pôle Emploi takk' } },
  { isoCode: 'pl-PL', words: { translate: 'tłumaczenie', request: 'Twoja prośba:', rate: 'Czy jesteś zadowolony ze swojego wywiadu?', send: 'wysłać', thanks: 'Pôle Emploi dziękuje' } },
  { isoCode: 'pt-BR', words: { translate: 'tradução', request: 'O seu pedido:', rate: 'Você está satisfeito com sua entrevista?', send: 'enviar', thanks: 'Pôle Emploi agradece a você' } },
  { isoCode: 'pt-PT', words: { translate: 'tradução', request: 'O seu pedido:', rate: 'Você está satisfeito com sua entrevista?', send: 'enviar', thanks: 'Pôle Emploi agradece a você' } },
  { isoCode: 'ro-RO', words: { translate: 'traducere', request: 'Cererea dvs.:', rate: 'Sunteți mulțumit de interviu?', send: 'trimite', thanks: 'Pôle Emploi vă mulțumesc' } },
  { isoCode: 'si-LK', words: { translate: 'පරිවර්තනය', request: 'ඔබගේ ඉල්ලීම:', rate: 'ඔබේ සම්මුඛ පරීක්ෂණය ගැන ඔබ සෑහීමකට පත්වේද?', send: 'එවන', thanks: 'පෙලේ එම්ප්ලෝයි ඔබට ස්තූතියි' } },
  { isoCode: 'sk-SK', words: { translate: 'preklad', request: 'Vaša požiadavka:', rate: 'Ste spokojní so svojím rozhovorom?', send: 'odoslať', thanks: 'Pôle Emploi ďakujem' } },
  { isoCode: 'sl-SI', words: { translate: 'prevod', request: 'Vaša zahteva:', rate: 'Ste zadovoljni s svojim intervjujem?', send: 'pošlji', thanks: 'Pôle Emploi se zahvaljuje' } },
  { isoCode: 'su-ID', words: { translate: 'tarjamahan', request: 'Pamundut anjeun:', rate: 'Naha anjeun puas kana wawancara anjeun?', send: 'ngirim', thanks: 'Pôle Emploi hatur nuhun' } },
  { isoCode: 'sw-TZ', words: { translate: 'tafsiri', request: 'Ombi lako:', rate: 'Je! Umeridhika na mahojiano yako?', send: 'kutuma', thanks: 'Pomole Emploi asante' } },
  { isoCode: 'sw-KE', words: { translate: 'tafsiri', request: 'Ombi lako:', rate: 'Je! Umeridhika na mahojiano yako?', send: 'kutuma', thanks: 'Pomole Emploi asante' } },
  { isoCode: 'fi-FI', words: { translate: 'käännös', request: 'Pyyntösi:', rate: 'Oletko tyytyväinen haastattelusi?', send: 'lähettää', thanks: 'Pôle Emploi kiittää sinua' } },
  { isoCode: 'sv-SE', words: { translate: 'översättning', request: 'Din förfrågan:', rate: 'Är du nöjd med din intervju?', send: 'skicka', thanks: 'Pôle Emploi tack' } },
  { isoCode: 'te-IN', words: { translate: 'అనువాదం', request: 'మీ అభ్యర్థన:', rate: 'మీ ఇంటర్వ్యూతో మీరు సంతృప్తిగా ఉన్నారా?', send: 'పంపడానికి', thanks: 'Ple Emploi ధన్యవాదాలు' } },
  { isoCode: 'ta-SG', words: { translate: 'மொழிபெயர்ப்பு', request: 'உங்கள் கோரிக்கை:', rate: 'உங்கள் நேர்காணலில் நீங்கள் திருப்தியடைகிறீர்களா?', send: 'அனுப்ப', thanks: 'நன்றி' } },
  { isoCode: 'ta-LK', words: { translate: 'மொழிபெயர்ப்பு', request: 'உங்கள் கோரிக்கை:', rate: 'உங்கள் நேர்காணலில் நீங்கள் திருப்தியடைகிறீர்களா?', send: 'அனுப்ப', thanks: 'நன்றி' } },
  { isoCode: 'ta-MY', words: { translate: 'மொழிபெயர்ப்பு', request: 'உங்கள் கோரிக்கை:', rate: 'உங்கள் நேர்காணலில் நீங்கள் திருப்தியடைகிறீர்களா?', send: 'அனுப்ப', thanks: 'நன்றி' } },
  { isoCode: 'ta-IN', words: { translate: 'மொழிபெயர்ப்பு', request: 'உங்கள் கோரிக்கை:', rate: 'உங்கள் நேர்காணலில் நீங்கள் திருப்தியடைகிறீர்களா?', send: 'அனுப்ப', thanks: 'நன்றி' } },
  { isoCode: 'vi-VN', words: { translate: 'dịch', request: 'Yêu cầu của bạn:', rate: 'Bạn có hài lòng với cuộc phỏng vấn của bạn?', send: 'gởi', thanks: 'Pôle Emploi cảm ơn bạn' } },
  { isoCode: 'tr-TR', words: { translate: 'çeviri', request: 'İsteğiniz:', rate: 'Röportajınızdan memnun musunuz?', send: 'göndermek', thanks: 'Pôle Emploi teşekkür ederim' } },
  { isoCode: 'ur-PK', words: { translate: 'ترجمہ', request: 'آپ کی درخواست:', rate: 'کیا آپ اپنے انٹرویو سے مطمئن ہیں؟', send: 'بھیج', thanks: 'پیلی ملازم آپ کا شکریہ۔' } },
  { isoCode: 'ur-IN', words: { translate: 'ترجمہ', request: 'آپ کی درخواست:', rate: 'کیا آپ اپنے انٹرویو سے مطمئن ہیں؟', send: 'بھیج', thanks: 'پیلی ملازم آپ کا شکریہ۔' } },
  { isoCode: 'el-GR', words: { translate: 'μετάφραση', request: 'Το αίτημά σας:', rate: 'Είστε ικανοποιημένοι με τη συνέντευξη σας;', send: 'στείλετε', thanks: 'Το Pôle Emploi σας ευχαριστεί' } },
  { isoCode: 'bg-BG', words: { translate: 'превод', request: 'Вашето искане:', rate: 'Доволни ли сте от интервюто си?', send: 'изпращам', thanks: 'Pôle Emploi ви благодаря' } },
  { isoCode: 'ru-RU', words: { translate: 'перевод', request: 'Ваш запрос:', rate: 'Довольны ли вы своим интервью?', send: 'послать', thanks: 'Pôle Emploi благодарит вас' } },
  { isoCode: 'sr-RS', words: { translate: 'превод', request: 'Ваш захтев:', rate: 'Да ли сте задовољни интервјуом?', send: 'послати', thanks: 'Поле Емплои хвала вам' } },
  { isoCode: 'uk-UA', words: { translate: 'переклад', request: 'Ваш запит:', rate: "Ви задоволені своїм інтерв'ю?", send: 'послати', thanks: 'Pôle Emploi дякую вам' } },
  { isoCode: 'he-IL', words: { translate: 'תרגום', request: 'בקשתך:', rate: 'האם אתה מרוצה מהראיון שלך?', send: '', thanks: 'Pôle Emploi תודה' } },
  { isoCode: 'ar-IL', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-JO', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-AE', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-BH', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-DZ', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-SA', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-QI', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-KW', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-MA', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-TN', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-OM', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-PS', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-QA', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-LB', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'ar-EG', words: { translate: 'ترجمة', request: 'طلبك :', rate: 'هل أنت راضي عن مقابلتك؟', send: 'إرسال', thanks: 'بول إمبلوي شكرا لك' } },
  { isoCode: 'fa-IR', words: { translate: 'ترجمه', request: 'درخواست شما:', rate: 'آیا از مصاحبه خود راضی هستید؟', send: 'ارسال', thanks: 'Pôle Emploi از شما متشکرم' } },
  { isoCode: 'hi-IN', words: { translate: 'अनुवाद', request: 'आपका अनुरोध:', rate: 'क्या आप अपने साक्षात्कार से संतुष्ट हैं?', send: 'भेजना', thanks: 'पोले एम्प्लोयी धन्यवाद' } },
  { isoCode: 'th-TH', words: { translate: 'การแปล', request: 'คำขอของคุณ:', rate: 'คุณพอใจกับการสัมภาษณ์ของคุณหรือไม่', send: 'ส่ง', thanks: 'Pôle Emploi ขอบคุณ' } },
  { isoCode: 'ko-KR', words: { translate: '번역', request: '귀하의 요청 :', rate: '인터뷰에 만족하십니까?', send: '보내', thanks: 'Pôle Emploi 감사합니다' } },
  { isoCode: 'zh-TW', words: { translate: '翻譯', request: '您的要求：', rate: '你對面試滿意嗎？', send: '發送', thanks: 'PôleEmploi謝謝你' } },
  { isoCode: 'yue-Ha', words: { translate: '翻譯', request: '您的要求：', rate: '你對面試滿意嗎？', send: '發送', thanks: 'PôleEmploi謝謝你' } },
  { isoCode: 'ja-JP', words: { translate: '翻訳', request: 'あなたのリクエスト：', rate: 'インタビューに満足していますか？', send: '送ります', thanks: 'ポール・エンプロイ、ありがとう' } },
  { isoCode: 'zh-HK', words: { translate: '翻译', request: '您的要求：', rate: '你对面试满意吗？', send: '发送', thanks: 'PôleEmploi谢谢你' } },
  { isoCode: 'zh-ZH', words: { translate: '翻译', request: '您的要求：', rate: '你对面试满意吗？', send: '发送', thanks: 'PôleEmploi谢谢你' } }
];

export const VOCABULARY_V2: Vocabulary[] = [
  {
    isoCode: 'ar-IL',
    sentences: [
      { key: 'country-name-raw', value: 'ישראל' },
      { key: 'country-name-fr', value: 'Israël' },
      { key: 'language-name-raw', value: 'עברי' },
      { key: 'language-name-fr', value: 'Hébreu' },
      { key: 'flag', value: 'IL' },
      { key: 'application-name', value: 'תרגום מיידי' },
      { key: 'send', value: 'שליחה' },
      { key: 'translate', value: 'תרגום' },
      { key: 'translation-h2', value: 'הזן טקסט עברי' },
      { key: 'rate', value: 'האם אתה מרוצה מהראיון שלך?' },
      { key: 'thanks', value: 'Pôle Emploi תודה' },
      { key: 'listen', value: 'להקשיב' },
      { key: 'record-text', value: 'דבר עכשיו' }
    ]
  },
  {
    isoCode: 'ar-JO',
    sentences: [
      { key: 'country-name-raw', value: 'الأردن' },
      { key: 'country-name-fr', value: 'Jordanie' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'JO' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-AE',
    sentences: [
      { key: 'country-name-raw', value: 'الإمارات' },
      { key: 'country-name-fr', value: 'Emirats Arabes Unis' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'AE' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-BH',
    sentences: [
      { key: 'country-name-raw', value: 'البحرين' },
      { key: 'country-name-fr', value: 'Bahreïn' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'BH' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-XA',
    sentences: [
      { key: 'country-name-raw', value: 'الجزائر' },
      { key: 'country-name-fr', value: 'Algérie' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'DZ' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' },
      { key: 'displayed-welcome', value: 'مرحباً ، سأكون مترجمك الخاص للتبادل بسهولة مع مستشارك.' },
      { key: 'readed-welcome', value: 'هل ترغب في التبادل بهذه اللغة؟' }
    ]
  },
  {
    isoCode: 'ar-SA',
    sentences: [
      { key: 'country-name-raw', value: 'السعودية' },
      { key: 'country-name-fr', value: 'Arabie Saoudite' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'SA' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-IQ',
    sentences: [
      { key: 'country-name-raw', value: 'العراق' },
      { key: 'country-name-fr', value: 'Irak' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'IQ' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-KW',
    sentences: [
      { key: 'country-name-raw', value: 'الكويت' },
      { key: 'country-name-fr', value: 'Koweït' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'KW' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-MA',
    sentences: [
      { key: 'country-name-raw', value: 'المغرب' },
      { key: 'country-name-fr', value: 'Maroc' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'MA' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-TN',
    sentences: [
      { key: 'country-name-raw', value: 'تونس' },
      { key: 'country-name-fr', value: 'Tunisie' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'TN' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-OM',
    sentences: [
      { key: 'country-name-raw', value: 'عُمان' },
      { key: 'country-name-fr', value: 'Oman' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'OM' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-PS',
    sentences: [
      { key: 'country-name-raw', value: 'فلسطين' },
      { key: 'country-name-fr', value: 'Palestine' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'PS' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-QA',
    sentences: [
      { key: 'country-name-raw', value: 'قطر' },
      { key: 'country-name-fr', value: 'Qatar' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'QA' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-LB',
    sentences: [
      { key: 'country-name-raw', value: 'لبنان' },
      { key: 'country-name-fr', value: 'Liban' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'LB' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'ar-EG',
    sentences: [
      { key: 'country-name-raw', value: 'مصر' },
      { key: 'country-name-fr', value: 'Egypte' },
      { key: 'language-name-raw', value: 'العربية' },
      { key: 'language-name-fr', value: 'Arabe' },
      { key: 'flag', value: 'EG' },
      { key: 'application-name', value: 'الترجمة الفورية' },
      { key: 'send', value: 'إرسال' },
      { key: 'translate', value: 'ترجمة' },
      { key: 'translation-h2', value: 'أدخل النص باللغة العربية' },
      { key: 'rate', value: 'هل أنت راض عن مقابلتك؟' },
      { key: 'thanks', value: 'بول إمبلوي شكرا لك' },
      { key: 'listen', value: 'استمع' },
      { key: 'record-text', value: 'تكلم الان' }
    ]
  },
  {
    isoCode: 'fa-IR',
    sentences: [
      { key: 'country-name-raw', value: 'ایران' },
      { key: 'country-name-fr', value: 'Iran' },
      { key: 'language-name-raw', value: 'فارسی' },
      { key: 'language-name-fr', value: 'Persan' },
      { key: 'flag', value: 'IR' },
      { key: 'application-name', value: 'ترجمه فوری' },
      { key: 'send', value: 'ارسال' },
      { key: 'translate', value: 'ترجمه' },
      { key: 'translation-h2', value: 'متن را به فارسی وارد کنید' },
      { key: 'rate', value: 'آیا از مصاحبه خود راضی هستید؟' },
      { key: 'thanks', value: 'Pôle Emploi از شما متشکرم' },
      { key: 'listen', value: 'گوش دادن' },
      { key: 'record-text', value: 'الان صحبت کن' },
      { key: 'displayed-welcome', value: '.سلام ، من مترجم شما خواهم بود تا با مشاور شما به راحتی تبادل شوید' },
      { key: 'readed-welcome', value: 'آیا می خواهید به این زبان ادامه دهید؟' }
    ]
  },
  {
    isoCode: 'fr-FR',
    sentences: [
      { key: 'country-name-raw', value: 'France' },
      { key: 'country-name-fr', value: 'France' },
      { key: 'language-name-raw', value: 'Français' },
      { key: 'language-name-fr', value: 'Français' },
      { key: 'flag', value: 'FR' },
      { key: 'application-name', value: 'Traduction instantanée' },
      { key: 'send', value: 'Envoyer' },
      { key: 'translate', value: 'Traduction' },
      { key: 'translation-h2', value: 'Saisir un texte en français' },
      { key: 'rate', value: 'Êtes-vous satisfait de votre entretien ?' },
      { key: 'thanks', value: 'Pôle Emploi vous remercie' },
      { key: 'listen', value: 'Ecouter' },
      { key: 'record-text', value: 'Parlez maintenant' },
      { key: 'displayed-welcome', value: 'Je suis votre traducteur pour échanger facilement avec votre conseiller.' },
      { key: 'readed-welcome', value: 'Voulez-vous continuer dans cette langue ?' }
    ]
  },
  {
    isoCode: 'en-GB',
    sentences: [
      { key: 'country-name-raw', value: 'United Kingdom' },
      { key: 'country-name-fr', value: 'Royaume-Uni' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'GB' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'record-text', value: 'Speak now' },
      { key: 'displayed-welcome', value: 'Hello, I would be your interpreter to exchange easily with your advisor.' },
      { key: 'readed-welcome', value: 'Would you like to exchange in this language?' }
    ]
  },
  {
    isoCode: 'es-ES',
    sentences: [
      { key: 'country-name-raw', value: 'España' },
      { key: 'country-name-fr', value: 'Espagne' },
      { key: 'language-name-raw', value: 'Español' },
      { key: 'language-name-fr', value: 'Espagnol' },
      { key: 'flag', value: 'ES' },
      { key: 'application-name', value: 'Traducción instantánea' },
      { key: 'send', value: 'Enviar a' },
      { key: 'translate', value: 'Traducción' },
      { key: 'translation-h2', value: 'Ingrese texto en español' },
      { key: 'rate', value: '¿Estás satisfecho con tu entrevista?' },
      { key: 'thanks', value: 'Pôle Emploi te agradece' },
      { key: 'listen', value: 'Escuchar' },
      { key: 'record-text', value: 'Habla ahora' },
      { key: 'displayed-welcome', value: 'Hola, sería tu intérprete para intercambiar fácilmente con tu asesor.' },
      { key: 'readed-welcome', value: '¿Te gustaría intercambiar en este idioma?' }
    ]
  },
  {
    isoCode: 'zh-ZH',
    sentences: [
      { key: 'country-name-raw', value: '中国大陆' },
      { key: 'country-name-fr', value: 'Chine' },
      { key: 'language-name-raw', value: '普通话' },
      { key: 'language-name-fr', value: 'Mandarin' },
      { key: 'flag', value: 'CN' },
      { key: 'application-name', value: '即時翻譯' },
      { key: 'send', value: '發送' },
      { key: 'translate', value: '翻譯' },
      { key: 'translation-h2', value: '輸入中文文字' },
      { key: 'rate', value: '您對面試滿意嗎？' },
      { key: 'thanks', value: 'PôleEmploi謝謝' },
      { key: 'listen', value: '聽' },
      { key: 'record-text', value: '現在說' },
      { key: 'displayed-welcome', value: '您好，我将是您的翻译，可以轻松地与您的顾问交流。' },
      { key: 'readed-welcome', value: '您想用这种语言交流吗？' }
    ]
  },
  {
    isoCode: 'en-AU',
    sentences: [
      { key: 'country-name-raw', value: 'Australia' },
      { key: 'country-name-fr', value: 'Australie' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'AU' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-GH',
    sentences: [
      { key: 'country-name-raw', value: 'Ghana' },
      { key: 'country-name-fr', value: 'Ghana' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'GH' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-CA',
    sentences: [
      { key: 'country-name-raw', value: 'Canada' },
      { key: 'country-name-fr', value: 'Canada-Uni' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'CA' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-IN',
    sentences: [
      { key: 'country-name-raw', value: 'India' },
      { key: 'country-name-fr', value: 'Inde' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'IN' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-ZA',
    sentences: [
      { key: 'country-name-raw', value: 'South Africa' },
      { key: 'country-name-fr', value: 'Afrique du Sud' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'ZA' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-IE',
    sentences: [
      { key: 'country-name-raw', value: 'Ireland' },
      { key: 'country-name-fr', value: 'Irelande' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'IE' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-KE',
    sentences: [
      { key: 'country-name-raw', value: 'Kenya' },
      { key: 'country-name-fr', value: 'Kenya' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'KE' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-NZ',
    sentences: [
      { key: 'country-name-raw', value: 'New Zealand' },
      { key: 'country-name-fr', value: 'Nouvelle-Zélande' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'NZ' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-SG',
    sentences: [
      { key: 'country-name-raw', value: 'Singapore' },
      { key: 'country-name-fr', value: 'Singapour' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'SG' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-PH',
    sentences: [
      { key: 'country-name-raw', value: 'Philippines' },
      { key: 'country-name-fr', value: 'Philippines' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'PH' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-NG',
    sentences: [
      { key: 'country-name-raw', value: 'Nigeria' },
      { key: 'country-name-fr', value: 'Nigeria' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'NG' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'en-TZ',
    sentences: [
      { key: 'country-name-raw', value: 'Tanzania' },
      { key: 'country-name-fr', value: 'Tanzanie' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'TZ' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'us-US',
    sentences: [
      { key: 'country-name-raw', value: 'United-States' },
      { key: 'country-name-fr', value: 'Etats-Unis' },
      { key: 'language-name-raw', value: 'English' },
      { key: 'language-name-fr', value: 'Anglais' },
      { key: 'flag', value: 'US' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'bn-BD',
    sentences: [
      { key: 'country-name-raw', value: 'বাংলাদেশ' },
      { key: 'country-name-fr', value: 'Bangladesh' },
      { key: 'language-name-raw', value: 'বাংলা' },
      { key: 'language-name-fr', value: 'Bengali' },
      { key: 'flag', value: 'BD' },
      { key: 'application-name', value: 'তাত্ক্ষণিক অনুবাদ' },
      { key: 'send', value: 'পাঠান' },
      { key: 'translate', value: 'অনুবাদ' },
      { key: 'translation-h2', value: 'ফরাসী ভাষায় একটি পাঠ্য প্রবেশ করান' },
      { key: 'rate', value: 'আপনি কি আপনার সাক্ষাত্কারে সন্তুষ্ট?' },
      { key: 'thanks', value: 'পোলে কর্মচারী আপনাকে ধন্যবাদ' },
      { key: 'listen', value: 'শোনা' },
      { key: 'gauge-text', value: 'এখন কথা বলুন' },
      { key: 'displayed-welcome', value: 'হ্যালো, আমি আপনার পরামর্শদাতার সাথে সহজেই বিনিময় করার জন্য আপনার দোভাষী হব।' },
      { key: 'readed-welcome', value: 'আপনি কি এই ভাষায় বিনিময় করতে চান?' }
    ]
  },
  {
    isoCode: 'bn-IN',
    sentences: [
      { key: 'country-name-raw', value: 'ভারত' },
      { key: 'country-name-fr', value: 'Inde' },
      { key: 'language-name-raw', value: 'Bengali' },
      { key: 'language-name-fr', value: 'বাংলা' },
      { key: 'flag', value: 'IN' },
      { key: 'application-name', value: 'তাত্ক্ষণিক অনুবাদ' },
      { key: 'send', value: 'পাঠান' },
      { key: 'translate', value: 'অনুবাদ' },
      { key: 'translation-h2', value: 'ফরাসী ভাষায় একটি পাঠ্য প্রবেশ করান' },
      { key: 'rate', value: 'আপনি কি আপনার সাক্ষাত্কারে সন্তুষ্ট?' },
      { key: 'thanks', value: 'পোলে কর্মচারী আপনাকে ধন্যবাদ' },
      { key: 'listen', value: 'শোনা' },
      { key: 'gauge-text', value: 'এখন কথা বলুন' }
    ]
  },
  {
    isoCode: 'ps-PS',
    sentences: [
      { key: 'country-name-raw', value: 'افغانستان' },
      { key: 'country-name-fr', value: 'Afghanistan' },
      { key: 'language-name-fr', value: 'Pachto' },
      { key: 'language-name-raw', value: 'پښتو' },
      { key: 'flag', value: 'AF' },
      { key: 'displayed-welcome', value: '.سلام ، زه به ستاسو ترجمان شم چې ستاسو د مشاور سره په اسانۍ سره تبادله وکړم' },
      { key: 'readed-welcome', value: 'ایا تاسو غواړئ پدې ژبه کې تبادله وکړئ؟' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in english' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'ur-PK',
    sentences: [
      { key: 'country-name-raw', value: 'پاکستان' },
      { key: 'country-name-fr', value: 'Pakistan' },
      { key: 'language-name-fr', value: 'Ourdou' },
      { key: 'language-name-raw', value: 'اردو' },
      { key: 'flag', value: 'PK' },
      { key: 'displayed-welcome', value: 'ہیلو ، میں آپ کے مشیر سے آسانی سے تبادلہ کرنے کے لئے آپ کا ترجمان ہوں گا۔' },
      { key: 'readed-welcome', value: 'کیا آپ اس زبان میں تبادلہ کرنا چاہیں گے؟' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Ourdou' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'pt-PT',
    sentences: [
      { key: 'country-name-raw', value: 'Portugal' },
      { key: 'country-name-fr', value: 'Portugal' },
      { key: 'language-name-fr', value: 'Portugais' },
      { key: 'language-name-raw', value: 'Português' },
      { key: 'flag', value: 'PT' },
      { key: 'displayed-welcome', value: 'Olá, eu seria seu intérprete para trocar facilmente com seu orientador.' },
      { key: 'readed-welcome', value: 'Deseja trocar neste idioma?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Português' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'tr-TR',
    sentences: [
      { key: 'country-name-raw', value: 'Türkiye' },
      { key: 'country-name-fr', value: 'Turquie' },
      { key: 'language-name-fr', value: 'Turc' },
      { key: 'language-name-raw', value: 'Türkçe' },
      { key: 'flag', value: 'TR' },
      { key: 'displayed-welcome', value: 'Merhaba, danışmanınızla kolayca alışveriş yapmak için tercümanınız olurum.' },
      { key: 'readed-welcome', value: 'Bu dilde takas yapmak ister misiniz?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Türkçe' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'de-DE',
    sentences: [
      { key: 'country-name-raw', value: 'Deutschland' },
      { key: 'country-name-fr', value: 'Allemange' },
      { key: 'language-name-fr', value: 'Allemand' },
      { key: 'language-name-raw', value: 'Deutsch' },
      { key: 'flag', value: 'DE' },
      { key: 'displayed-welcome', value: 'Hallo, ich wäre Ihr Dolmetscher, um mich problemlos mit Ihrem Berater auszutauschen.' },
      { key: 'readed-welcome', value: 'Möchten Sie in dieser Sprache austauschen?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Deutsch' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'am-ET',
    sentences: [
      { key: 'country-name-raw', value: 'ኢትዮጵያ' },
      { key: 'country-name-fr', value: 'Ethiopie' },
      { key: 'language-name-fr', value: 'Amharique' },
      { key: 'language-name-raw', value: 'አማርኛ' },
      { key: 'flag', value: 'ET' },
      { key: 'displayed-welcome', value: 'ጤና ይስጥልኝ ፣ ከአማካሪህ ጋር በቀላሉ ለመቀየር አስተርጓሚ እሆን ነበር' },
      { key: 'readed-welcome', value: 'በዚህ ቋንቋ መለወጥ ይፈልጋሉ?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in አማርኛ' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'km-KH',
    sentences: [
      { key: 'country-name-raw', value: 'កម្ពុជា' },
      { key: 'country-name-fr', value: 'Cambodge' },
      { key: 'language-name-fr', value: 'Amharique' },
      { key: 'language-name-raw', value: 'Khmer' },
      { key: 'flag', value: 'KH' },
      { key: 'displayed-welcome', value: 'ជំរាបសួរ, ខ្ញុំនឹងក្លាយជាអ្នកបកប្រែរបស់អ្នកដើម្បីផ្លាស់ប្តូរយ៉ាងងាយស្រួលជាមួយទីប្រឹក្សារបស់អ្នក។' },
      { key: 'readed-welcome', value: 'តើអ្នកចង់ផ្លាស់ប្តូរភាសានេះទេ?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Khmer' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'es-ES',
    sentences: [
      { key: 'country-name-raw', value: 'España' },
      { key: 'country-name-fr', value: 'Espagne' },
      { key: 'language-name-fr', value: 'Espagnol' },
      { key: 'language-name-raw', value: 'Español' },
      { key: 'flag', value: 'ES' },
      { key: 'displayed-welcome', value: 'Hola, sería tu intérprete para intercambiar fácilmente con tu asesor.' },
      { key: 'readed-welcome', value: '¿Te gustaría intercambiar en este idioma?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Español' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },

  {
    isoCode: 'hi-IN',
    sentences: [
      { key: 'country-name-raw', value: 'भारत' },
      { key: 'country-name-fr', value: 'Inde' },
      { key: 'language-name-fr', value: 'Hindi' },
      { key: 'language-name-raw', value: 'हिन्दी' },
      { key: 'flag', value: 'IN' },
      { key: 'displayed-welcome', value: 'नमस्कार, मैं आपके सलाहकार के साथ आसानी से आदान-प्रदान करने वाला आपका दुभाषिया बनूंगा।' },
      { key: 'readed-welcome', value: 'क्या आप इस भाषा में विनिमय करना चाहेंगे?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in हिन्दी' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'ta-IN',
    sentences: [
      { key: 'country-name-raw', value: 'இந்தியா' },
      { key: 'country-name-fr', value: 'Inde' },
      { key: 'language-name-fr', value: 'Tamoul' },
      { key: 'language-name-raw', value: 'தமிழ்' },
      { key: 'flag', value: 'IN' },
      { key: 'displayed-welcome', value: 'வணக்கம், உங்கள் ஆலோசகருடன் எளிதாக பரிமாறிக்கொள்ள உங்கள் மொழிபெயர்ப்பாளராக இருப்பேன்.' },
      { key: 'readed-welcome', value: 'இந்த மொழியில் பரிமாற விரும்புகிறீர்களா?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in தமிழ்' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'it-IT',
    sentences: [
      { key: 'country-name-raw', value: 'Italia' },
      { key: 'country-name-fr', value: 'Italie' },
      { key: 'language-name-fr', value: 'Italien' },
      { key: 'language-name-raw', value: 'Italiano' },
      { key: 'flag', value: 'IT' },
      { key: 'displayed-welcome', value: 'Ciao, sarei il tuo interprete per scambiare facilmente con il tuo consulente.' },
      { key: 'readed-welcome', value: 'Ti piacerebbe scambiare in questa lingua?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Italiano' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'mn-MN',
    sentences: [
      { key: 'country-name-raw', value: 'Монгол Улс' },
      { key: 'country-name-fr', value: 'Mongolie' },
      { key: 'language-name-fr', value: 'Mongol' },
      { key: 'language-name-raw', value: 'Монгол' },
      { key: 'flag', value: 'MN' },
      { key: 'displayed-welcome', value: 'Сайн байна уу, би зөвлөхтэйгээ хялбархан солилцох орчуулагч болно.' },
      { key: 'readed-welcome', value: 'Та энэ хэлээр солилцохыг хүсч байна уу?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Монгол' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'ne-NP',
    sentences: [
      { key: 'country-name-raw', value: 'नेपाल' },
      { key: 'country-name-fr', value: 'Népal' },
      { key: 'language-name-fr', value: 'Népalais' },
      { key: 'language-name-raw', value: 'नेपाली' },
      { key: 'flag', value: 'NP' },
      { key: 'displayed-welcome', value: 'नमस्कार, म तपाईको दोभाषे बन्ने छ तपाईंको सल्लाहकार संग सजिलै साटासाट गर्न।' },
      { key: 'readed-welcome', value: 'के तपाईं यस भाषामा आदान प्रदान गर्न चाहनुहुन्छ?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in नेपाली' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'uz-UZ',
    sentences: [
      { key: 'country-name-raw', value: 'Ўзбекистон' },
      { key: 'country-name-fr', value: 'Ouzbékistan' },
      { key: 'language-name-fr', value: 'Ouzbek' },
      { key: 'language-name-raw', value: 'ўзбек' },
      { key: 'flag', value: 'UZ' },
      { key: 'displayed-welcome', value: "Assalomu alaykum, maslahatchingiz bilan osonlikcha almashish uchun sizning tarjimoningiz bo'lardim." },
      { key: 'readed-welcome', value: 'Ushbu tilda almashishni xohlaysizmi?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in ўзбек' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'ro-RO',
    sentences: [
      { key: 'country-name-raw', value: 'România' },
      { key: 'country-name-fr', value: 'Roumanie' },
      { key: 'language-name-fr', value: 'Roumain' },
      { key: 'language-name-raw', value: 'Română' },
      { key: 'flag', value: 'RO' },
      { key: 'displayed-welcome', value: 'Buna ziua, eu as fi interpretul tau pentru a schimba usor cu consilierul tau.' },
      { key: 'readed-welcome', value: 'Buna ziua, eu as fi interpretul tau pentru a schimba usor cu consilierul tau.' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Română' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'so-SO',
    sentences: [
      { key: 'country-name-raw', value: 'Soomaaliya' },
      { key: 'country-name-fr', value: 'Somalie' },
      { key: 'language-name-fr', value: 'Somali' },
      { key: 'language-name-raw', value: 'Af-Soomaali' },
      { key: 'flag', value: 'SO' },
      { key: 'displayed-welcome', value: 'Salaan, waxaan noqon lahaa turjubaankaaga si aan si fudud ula beddelo la-taliyahaaga.' },
      { key: 'readed-welcome', value: 'Ma jeceshahay inaad ku badasho luqadan?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Soomaali' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  },
  {
    isoCode: 'vi-VN',
    sentences: [
      { key: 'country-name-raw', value: 'Việt Nam' },
      { key: 'country-name-fr', value: 'Vietnam' },
      { key: 'language-name-fr', value: 'Vietnamien' },
      { key: 'language-name-raw', value: 'Tiếng Việt' },
      { key: 'flag', value: 'VN' },
      { key: 'displayed-welcome', value: 'Xin chào, tôi sẽ là thông dịch viên của bạn để trao đổi dễ dàng với cố vấn của bạn.' },
      { key: 'readed-welcome', value: 'Bạn có muốn trao đổi bằng ngôn ngữ này?' },
      { key: 'application-name', value: 'Instant Translation' },
      { key: 'send', value: 'Send' },
      { key: 'translate', value: 'Translate' },
      { key: 'translation-h2', value: 'Type a text in Tiếng Việt' },
      { key: 'rate', value: 'Are you satisfied with your interview?' },
      { key: 'thanks', value: 'Pôle Emploi thanks you.' },
      { key: 'listen', value: 'Listen' },
      { key: 'gauge-text', value: 'Speak now' }
    ]
  }

  //  {
  //    isoCode: '',
  //    sentences: [
  //      { key: 'country-name-raw', value: '' },
  //      { key: 'country-name-fr', value: '' },
  //      { key: 'language-name-fr', value: '' },
  //      { key: 'language-name-raw', value: '' },
  //      { key: 'flag', value: '' },
  //      { key: 'displayed-welcome', value: '' },
  //      { key: 'readed-welcome', value: '' }
  //    ]
  //  }
  // {
  //   isoCode: 'xxxxxxxxxx',
  //   sentences: [
  //     { key: 'country-name-raw', value: 'xxxxxxxxxx' }
  //     { key: 'country-name-fr', value: 'xxxxxxxxxx' }
  //     { key: 'application-name', value: 'xxxxxxxxxx' },
  //     { key: 'send', value: 'xxxxxxxxxx' },
  //     { key: 'translate', value: 'xxxxxxxxxx' },
  //     { key: 'translation-h2', value: 'xxxxxxxxxx' },
  //     { key: 'rate', value: 'xxxxxxxxxx' },
  //     { key: 'thanks', value: 'xxxxxxxxxx' },
  //     { key: 'listen', value: 'xxxxxxxxxx' },
  //     { key: 'record-text', value: 'xxxxxxxxxxx' },
  //     { key: 'displayed-welcome', value: 'xxxx' },
  //     { key: 'readed-welcome', value: 'xxx' }
  //   ]
];
