---
sidebar_position: 2
---

# Folder Structure

Projenin dosya yapısı, kodun düzenli ve anlaşılır olmasını sağlamak için belirli bir hiyerarşiye göre organize edilmiştir. Aşağıda her bir klasör ve içeriği hakkında detaylı açıklamalar bulabilirsiniz:

## `src/`
Projenin tüm kaynak kodlarını içerir.

### `app/`
Uygulamanın ana modülü ve bileşenlerini içerir.

- **`common/`**: Ortak olarak kullanılan bileşenler, servisler veya yardımcı fonksiyonlar için kullanılır.

- **`components/`**: Uygulamanın farklı parçalarını oluşturan bileşenler yer alır.
    - **`customer-offers/`**: Müşteri tekliflerini gösteren bileşenler.
    - **`layout/`**: Uygulamanın genel düzen ve yerleşim bileşenleri.
    - **`login-form/`**: Giriş formu bileşenleri.
    - **`otp-validation/`**: Tek kullanımlık şifre doğrulama bileşenleri.
    - **`page-not-found/`**: 404 hata sayfası bileşeni.
    - **`product-feature/`**: Ürün özelliklerini gösteren bileşenler.
    - **`product-offers-table/`**: Ürün tekliflerini tablo formatında gösteren bileşenler.
    - **`signup-form/`**: Kayıt formu bileşenleri.

- **`controllers/`**: Uygulamanın iş mantığını yöneten kontroller yer alır.

- **`directives/`**: Uygulamada özel davranışlar eklemek için kullanılan Angular direktifleri yer alır.

- **`models/`**: Uygulamanın veri modellerini içerir.

- **`pages/`**: Uygulamanın farklı sayfalarını oluşturan bileşenler yer alır.
    - **`home/`**: Ana sayfa bileşenleri.
    - **`login/`**: Giriş sayfası bileşenleri.
    - **`offers/`**: Tekliflerle ilgili sayfa bileşenleri.
    - **`products/`**: Ürün listesini gösteren sayfa bileşenler.
    - **`signup/`**: Kayıt sayfası bileşenleri.

- **`routes/`**: Uygulamanın yönlendirme yapılandırmalarını içerir.
    - **`routes-config.ts`**: Yönlendirme yapılandırma dosyası.

- **`services/`**: Uygulamanın çeşitli hizmetlerini sağlayan servisler yer alır.

### `assets/` 
Uygulamanın statik varlıklarını içerir(resimler ve stiller).

## Genel Yapı
BU yapıda her bileşen, sayfa veya hizmet belirli bir klasör altında gruplandırılarak düzenlenmiştir. Bu sayede geliştirme sırasında belirli bir bileşen veya sayfa ile ilgili dosyaları kolayca bulabilir ve yönetebilirsiniz.
