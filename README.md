# Kişisel Borç Takip Uygulaması

## Genel Bakış

Bu proje, React.js ve Redux kullanarak oluşturulmuş bir kişisel borç takip uygulamasıdır. Uygulama, kullanıcıların borçlarını takip etmelerini, ödeme planlarını görüntülemelerini ve borçlarının ödeme durumunu güncellemelerini sağlar.

## Özellikler

- Dashboard: Toplam borç, ödenen borç ve yaklaşan ödeme tarihlerini görüntüleme.
- Borçlar Sayfası: Borçları listeleme, düzenleme, yeni borç ekleme ve ödeme planlarını görüntüleme.
- Ödeme Planı Sayfası: Borçları ödendi/ödenmedi olarak işaretleme.
- Redux kullanarak kalıcı durum yönetimi.
- Borç ve ödeme planı yönetimi için backend entegrasyonu.

## Kullanılan Teknolojiler ve Sürümleri

- **Vite**: ^5.2.0
- **React**: ^18.2.0
- **Redux**: ^5.0.1
- **Redux Thunk**: ^3.1.0
- **Redux Logger**: ^3.0.6
- **Axios**: ^1.7.2
- **React Hook Form**: ^7.51.5
- **Tailwind CSS**: ^3.4.4
- **Bootstrap**: ^5.3.3
- **React Bootstrap**: ^2.10.2
- **React Toastify**: ^10.0.5
- **React Router**: ^5.3.4
- **React Icons**: ^5.2.1
- **React Gravatar**: ^2.6.3
- **Material Tailwind**: ^2.1.9
- **ESLint**: ^8.57.0
- **PostCSS**: ^8.4.38
- **FontAwesome**: ^6.5.2

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
