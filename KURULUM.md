# 📖 Kurulum Rehberi - Bayenderman Korku Modu

## Adım 1: Dosyaları İndir

GitHub repository'den tüm dosyaları indir:
```
bayenderman/bayendermankorku
```

## Adım 2: Minecraft Bedrock Klasörünü Bul

### Windows
```
C:\Users\[Kullanıcı Adı]\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\
```

### macOS
```
~/Library/Application Support/minecraft/
```

### Android
```
/sdcard/games/com.mojang/
```

## Adım 3: Add-on Klasörüne Kopyala

1. `behavior_packs` klasörüne git
2. `korku_modu` klasörünü buraya yapıştır

Sonuç:
```
behavior_packs/
└── korku_modu/
    ├── entities/
    ├── scripts/
    └── (diğer dosyalar)
```

## Adım 4: Minecraft'ı Aç

1. Minecraft Bedrock Edition'ı başlat
2. **Create New** → **Create New World** tıkla
3. **Behavior Packs** sekmesinde **korku_modu** ekle
4. **Activate** butonu tıkla
5. World'ü oluştur

## Adım 5: Modunu Kullan

Oyun içinde chat'te yaz:
```
!korku_kupu_cagir
```

Veya komut yaz:
```
/summon bayenderman:horror_cube
```

## ⚠️ Sorun Giderme

### "Mod yüklenmiyor"
- Manifest.json'un doğru klasörde olup olmadığını kontrol et
- Minecraft'ı yeniden başlat

### "Entity bulunamıyor"
- Script dosyasının `scripts` klasöründe olup olmadığını kontrol et
- Minecraft Engine versiyonunu güncelle (1.20+)

### "Komut çalışmıyor"
- `/reload` komutu yaz
- World'ü yeniden gir

## 🎮 İlk Oyun

1. Korku Küpü çağır
2. Küpün sorularını cevapla
3. 5 soru sonrası Ender Man'e dönüşümü izle
4. Saldırıdan kaç! 😨

---

**İhtiyaç Duyulursa**: GitHub Issues'de soru sor!
