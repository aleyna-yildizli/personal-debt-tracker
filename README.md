# Kişisel Borç Takip Uygulaması

## Genel Bakış

Bu proje, React.js ve Redux kullanarak oluşturulmuş bir kişisel borç takip uygulamasıdır. Uygulama, kullanıcıların borçlarını takip etmelerini, ödeme planlarını görüntülemelerini ve borçlarının ödeme durumunu güncellemelerini sağlar.

## Özellikler

- Dashboard: Toplam borç, ödenen borç ve yaklaşan ödeme tarihlerini görüntüleme.
- Borçlar Sayfası: Borçları listeleme, düzenleme, yeni borç ekleme ve ödeme planlarını görüntüleme.
- Ödeme Planı Sayfası: Borçları ödendi/ödenmedi olarak işaretleme.
- Redux kullanarak kalıcı durum yönetimi.
- Borç ve ödeme planı yönetimi için backend entegrasyonu.

## Kullanılan Teknolojiler

- **Frontend**: React.js, Redux, Axios, Tailwind CSS
- **UI Bileşenleri**: Bootstrap, Material Tailwind, React Bootstrap, React Icons
- **Form Yönetimi**: React Hook Form
- **Bildirimler**: React Toastify

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda kurmak ve çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın**:

   ```bash
   git clone https://github.com/aleyna-yildizli/personal-debt-tracker.git
   ```

2. **Bağımlılıkları Yükleyin**:

   ```bash
   npm install
   ```

3. **Uygulamayı Çalıştırın**:
   ```bash
   npm run dev
   ```

Uygulama `http://localhost:3000` adresinde erişilebilir olacaktır.

## Canlı Demo

Uygulamaya şu adresten de erişebilirsiniz: [Personal Debt Tracker](https://personal-debt-tracker.vercel.app/)

## Proje Yapısı

```plaintext
src/
├── components/           # React bileşenleri
├── pages/                # Sayfa bileşenleri
├── store/                # Redux store, reducer ve action dosyaları
├── App.jsx               # Ana uygulama bileşeni
├── index.js              # Uygulamanın başlangıç noktası
└── api.js                # API istekleri için Axios yapılandırması
```

    •	Aleyna Yıldızlı
