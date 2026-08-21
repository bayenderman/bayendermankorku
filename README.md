# 🎮 Bayenderman Korku Modu - Minecraft Bedrock

Minecraft Bedrock Edition için gelişmiş bir korku modu! Siyah ve mor gözlü yardımcı bir küp sana sorular soruyor, sonra devasa bir Ender Man'e dönüşerek saldırıyor!

### 📋 Özellikler

✅ **Faz 1: Yardımcı Küp**
- Siyah küp şekli, mor gözler 👻
- Oyuncuya 8 farklı soru soruyor
- Sakin ve dostça görünüş
- Envanterine eklenebilir

✅ **Faz 2: Ender Man Dönüşümü**
- 5 soru sorulduktan sonra otomatik dönüş
- Korkunç Ender Man görünümüne geçiş
- Tehditkâr mesajlar gönderir
- Oyuncuya saldırır ve hasar verir

✅ **Oyun Mekanikler**
- AI tabanlı davranış sistemi
- Mesafe algılaması (20 blok yardımcı, 30 blok Ender Man)
- Soru sistemi (5 soru sonrası transform)
- Dinamik hasar sistemi
- Ses efektleri

### 🚀 Kurulum

1. Bu repository'yi indir
2. `behavior_packs/korku_modu` klasörünü Bedrock Add-ons klasörüne kopyala
3. Minecraft Bedrock'ta world oluştururken modu etkinleştir
4. Oyun içinde `/summon bayenderman:horror_cube` komutu ile küpü çağır

### 🎮 Kullanım Komutları

```bash
# Korku Küpü çağır
/summon bayenderman:horror_cube

# Veya sohbet'de yazarak:
!korku_kupu_cagir
```

### 📝 Soru Listesi

Küp sana şu sorular soruyor:
- "Senin adın ne? 👻"
- "Neden burada yalnız mısın? 😨"
- "Korkmaktan hoşlanır mısın? 💀"
- "Gece ne yapıyorsun? 🌙"
- "Bu dünyada ne kadar kaldın? ⏳"
- "En kötü hatırın ne? 😱"
- "Kaçmak ister misin? 🏃"
- "Beni tanıyor musun? 👁️"

### 🔄 Transform Mesajları

Ender Man'e dönüşünce şu mesajları yollar:
- "Hahahaha... GÜÇ! 💥"
- "Artık farklıyım... 👿"
- "Seni bulmamı istemedin mi? 🔥"
- "ENDER MAN'E DÖNÜŞTÜM! 🌑"
- "Sonu geliyor... ⚫"

### 🛠️ Teknik Detaylar

- **Engine Versiyonu**: Minecraft 1.20+
- **Dil**: JavaScript + JSON
- **Dosya Yapısı**: Behavior Pack + Resource Pack
- **Entity**: Custom Horror Cube Entity
- **Scripts**: @minecraft/server API

### 📦 Dosya Yapısı

```
bayendermankorku/
├── manifest.json
├── behavior_packs/
│   └── korku_modu/
│       ├── entities/
│       │   └── horror_cube.json
│       └── scripts/
│           └── horror_cube_ai.js
└── README.md
```

### ⚙️ Geliştirme

Modun geliştirilmesi için:
1. Entity tanımını düzenle: `horror_cube.json`
2. AI davranışını değiştir: `horror_cube_ai.js`
3. Soru ve mesajları ekle/kaldır

### 🎨 Gelecek Sürümler

- [ ] Özel doku tasarımı
- [ ] Animasyon sistemi
- [ ] Daha fazla soru
- [ ] Zorluk seviyeleri
- [ ] Çoklu dil desteği
- [ ] Ses efektleri

### 📄 Lisans

Bu mod açık kaynak olarak paylaşılmıştır.

---

**Geliştirici**: Bayenderman  
**Versiyon**: 1.0.0  
**Son Güncelleme**: 2026-08-21

Korku moduna hoş geldiniz! 👻🔥
