# Localization

Bu dokümantasyon, projede kullanılan dil yönetimini ve `ngx-translate-core` paketinin nasıl kullanıldığını açıklar. Projede Türkçe (`tr`) ve İngilizce (`en`) dil seçenekleri mevcuttur. Dil değişimi, header'da bulunan dil butonlarına tıklanarak gerçekleştirilir. Ayrıca, statik metinler için `assets/i18n` dizininde `en.json` ve `tr.json` dosyaları oluşturulmuştur.

## Dil Yönetimi

### `ngx-translate-core`
Proje, dil yönetimi için `ngx-translate-core` paketini kullanır. Bu paket, uygulamadaki statik metinleri farklı dillere çevirmek için kullanılır. Detaylı bilgi için [github sayfası](https://github.com/ngx-translate/core) ziyaret edilebilirsiniz.

### Dil Dosyaları
Dil dosyaları `assets/i18n` dizininde yer alır ve her dil için ayrı bir JSON dosyası bulunur.

#### `en.json` Örneği
```json
{
  "COLUMNS": {
    "product": "Product",
    "price": "Price",
    "highest_offer": "Highest Offer"
  },
  "navbar": [
    { "text": "Home", "url": "/home" },
    { "text": "Products", "url": "/products" }
  ]
}
```
#### `tr.json` Örneği
```json
{
  "COLUMNS": {
    "product": "Ürün",
    "price": "Fiyat",
    "highest_offer": "En Yüksek Teklif"
  },
  "navbar": [
    { "text": "Ana Sayfa", "url": "/ana-sayfa" },
    { "text": "Ürünler", "url": "/urunler" }
  ]
}
```
### TranslateHelperService
`TranslateHelperService`, Angular projesinde dil değişimini ve navigasyon barı (navbar) yüklemesini yönetmek için kullanılan bir servistir. Bu servis, `ngx-translate-core` paketini kullanarak dil değişimini gerçekleştirir ve dil değişikliği sırasında URL'yi günceller.
#### Navbar Öğelerini Yükleme
Servis, dil dosyalarından (`en.json` ve `tr.json`) navbar öğelerini yükler. Bu öğeler, uygulamanın üst kısmında bulunan navigasyon barında gösterilir.

#### Dil Değişimi
Servis, kullanıcıların dil değişimi yapmasına olanak tanır. Dil değişimi yapıldığında, seçilen dil tarayıcıya kaydedilir ve uygulamanın tüm statik metinleri yeni dilde görüntülenir. Ayrıca, mevcut sayfanın URL'si yeni dil ile güncellenir ve sayfa yeni dilde yeniden yüklenir.

#### 1. Servisin Enjekte Edilmesi
Servisi kullanmak istediğiniz bileşene enjekte edin. Örneğin, `HeaderComponent` bileşeninde kullanmak için aşağıdaki adımları izleyin:

#### HeaderComponent

1. `TranslateHelperService` servisini bileşeninize enjekte edin.
2. Bileşenin `ngOnInit` metodunda navbar öğelerini yüklemek için `loadNavbar` metodunu çağırın.
3. Dil değişimi için bir metod tanımlayın ve bu metodda `switchLanguage` metodunu çağırın.

#### `header.component.ts`

```typescript title="header.component.ts"

export class HeaderComponent implements OnInit {
  navbar: any[] | undefined;

  constructor(
    protected translate: TranslateService,
    private translateHelper: TranslateHelperService
  ) {}

  ngOnInit(): void {
    // Navbar öğelerini yükler
    this.translateHelper.loadNavbar((navbar) => {
      this.navbar = navbar;
    });
  }

  // Dil değişimi yapar
  changeLanguage(language: string): void {
    this.translateHelper.switchLanguage(language);
  }
}
```
#### 2. Dil Değiştirme Butonları
Header bileşeninin HTML dosyasına dil değiştirme butonları ekleyin. Bu butonlar, kullanıcıların dil değiştirmesini sağlar.

```typescript title="header.component.html"

    <div class="language-btn" (click)="changeLanguage('en')">
    <img ngSrc="../../../../assets/images/flag-en.svg" alt="English" height="30" width="30">
        </div>
        <div class="language-btn" (click)="changeLanguage('tr')">
    <img ngSrc="../../../../assets/images/flag-tr.svg" alt="Türkçe" height="30" width="30">
        </div>

```
#### 3. Statik Metinlerin Çevirisi
Proje genelinde statik metinler translate pipe kullanılarak çevrilir. Örneğin, ürün teklifleri tablosunda sütun başlıklarını çevirmek için aşağıdaki gibi kullanabilirsiniz:

```typescript title="product-offers-table.component.html"

    <th>{{ 'COLUMNS.product' | translate }}</th>
    <th>{{ 'COLUMNS.price' | translate }}</th>
    <th>{{ 'COLUMNS.highest_offer' | translate }}</th>

```
>
>  📢 translate pipe'ını kullanmak için ilgili componentin .ts uzantılı dosyasında `TranslateService` servisini enjekte etmeyi unutmayın.

Bunun sonucunda, sütun başlıkları, seçilen dile göre `en.json` veya `tr.json` dosyasındaki karşılıklarına göre çevrilecektir.

### Dil Değişimi ve URL Güncelleme
Dil değişimi yapıldığında, URL de güncellenir ve kullanıcı mevcut sayfada kalmaya devam eder. Örneğin, kullanıcı `http://localhost:4200/products` sayfasında iken dil değişimi yaparsa, URL `http://localhost:4200/tr/urunler` şeklinde güncellenir ve kullanıcı aynı sayfada kalır.

1. Kullanıcı header.component.html dosyasındaki İngilizce veya Türkçe butonlarından birine tıklar.
2. changeLanguage metodu çağrılır ve TranslateHelperService servisini kullanarak dil değiştirilir.
3. Seçilen dil tarayıcının localStorage'ına kaydedilir.
4. Mevcut URL, seçilen dile göre güncellenir ve kullanıcı yeni dildeki sayfaya yönlendirilir.