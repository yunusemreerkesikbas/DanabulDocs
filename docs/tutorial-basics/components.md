---
sidebar_position: 3
---

# Components

Uygulama içindeki bileşenlerin nasıl yapılandırıldığını öğrenin.

## `layout/`
Uygulamanın genel düzen ve yerleşim bileşenlerini içerir.

### `header/`
HeaderComponent, uygulamanın üst kısmında yer alan ve navigasyon menüsü ile dil değiştirme seçeneklerini içeren başlık bileşenidir.
#### Kullanım
```html
<app-header></app-header>
```
#### Özellikler
- **`navbar`**: Navigasyon menüsünü tanımlayan dizi. Her öğe bir URL ve metin içerir ve alt bağlantılar (sublinks) barındırabilir.
- **`changeLanguage(language: string)`**: Uygulamanın dilini değiştirmek için kullanılan yöntem. translateHelper servisini kullanarak mevcut dili değiştirir.

### `section-layout/`
SectionLayoutComponent, sayfa düzenini oluşturmak için kullanılan bir bileşendir. Ekran boyutuna göre farklı başlık bileşenlerini (header) kullanır ve içerik alanını dinamik olarak ayarlar.

#### Kullanım
```html
<app-section-layout>
  <!-- İçerik burada yer alır -->
</app-section-layout>
```

#### Özellikler
- **`isSmallScreen: boolean`**: Ekran boyutunun küçük olup olmadığını belirler ve uygun header bileşenini yükler.

### `sign-layout/`
SignLayoutComponent, kayıt veya giriş gibi sayfaların düzenini oluşturmak için kullanılan bir bileşendir. Logo ve form alanlarını içerir.

#### Kullanım
```html
<app-sign-layout>
    <app-login-form></app-login-form> <!-- veya <app-signup-form></app-signup-form> -->
</app-sign-layout>
```

## `customer-offers/`
CustomerOffersComponent, müşteri tekliflerini listeleyen bir bileşendir. Tablo formatında müşteri bilgilerini ve teklif detaylarını gösterir.
#### Kullanım
Bu component örnek bir senaryoda aşağıdaki gibi kullanılabilmektedir
```html
<app-section-layout >
    <div class="table table-offer-detail table-center-container">
        <app-product-offers-table></app-product-offers-table>
    </div>
    <app-customer-offers class="display-contents"></app-customer-offers>
</app-section-layout>
```

## `login-form/`
LoginFormComponent, kullanıcıların giriş yapmasını sağlayan bir form bileşenidir. Kullanıcı adı ve şifre alanlarını içerir ve giriş yapma işlemini başlatmak için bir button sunar.
#### Kullanım
```html
<app-sign-layout>
    <app-login-form></app-login-form> <!-- veya <app-signup-form></app-signup-form> -->
</app-sign-layout>
```

## `page-not-found/`
PageNotFoundComponent, 404 sayfa bulunamadı hatası için kullanılan bir bileşendir. Kullanıcıları bilgilendirir ve ana sayfaya geri dönmeleri için bir bağlantı sağlar.
#### Kullanım

404 sayfa bulunamadı bileşenini kullanmak için yönlendirme modülünde tanımlamanız gerekmektedir. Aşağıda örnek bir yönlendirme yapılandırması verilmiştir:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
Bu yapılandırma ile, kullanıcılar mevcut olmayan bir URL'ye erişmeye çalıştıklarında `PageNotFoundComponent` gösterilecektir.

## `product-offers-table/`
ProductOffersTableComponent, ürün tekliflerini tablo formatında gösteren bir bileşendir. Bu bileşen, hem ürün listesi hem de tek bir ürün detayını gösterecek şekilde dinamik olarak tasarlanmıştır.

#### Özellikler
- **lang**: Dil bilgisi. string tipindedir ve isteğe bağlıdır.
- **items**: Ürün veya ürün listesi verileri. any tipindedir ve gereklidir.
- **isArray**: items'ın dizi olup olmadığını belirler. boolean tipindedir ve varsayılan olarak false değerindedir.


#### Kullanım
```html title="src/pages/offers/offers.component.html"
<app-section-layout  sectionClass="offers-section">
    
    <div class="table">
        <app-product-offers-table  [lang]="lang" [items]="items"></app-product-offers-table>
    </div>
</app-section-layout>
```
```typescript title="src/pages/offers/offers.component.ts"

export class OffersComponent implements OnInit {
    items: any[] = [];
    lang: string | undefined;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.lang = localStorage.getItem('selectedLanguage') || 'tr';
        this.http.get<any>('/assets/json/data.json').subscribe(data => {
            this.items = data.products;
        });
    }
}
```

```html title="src/pages/offers/product-offers-detail-page.component.html"
<app-section-layout>
    <app-product-offers-table [items]="product" ></app-product-offers-table>
    <app-customer-offers class="display-contents" ></app-customer-offers>
</app-section-layout>


```
```typescript title="src/pages/offers/product-offers-detail-page.component.ts"

export class ProductOffersDetailPageComponent  implements OnInit {
    product: any;
    productUrl: string | null | undefined;
    lang: string | null | undefined;

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productUrl = `/${params.get('productUrl')}`;
            this.lang = params.get('lang') || 'en';
            this.getProductDetail();
        });
    }

    getProductDetail(): void {
        this.http.get<any>('/assets/json/data.json').subscribe(data => {
            this.product = data.products.find((p:any) => p.url === this.productUrl);
        });
    }
}
```
Bileşen, `items` verisinin dizi olup olmadığını kontrol ederek dinamik olarak yapılandırılır. Eğer items verisi bir dizi ise, tablo formatında tüm ürünleri gösterir. Eğer items verisi bir nesne ise, tek bir ürün detayını gösterir.

## `signup-form/`
SignupFormComponent, kullanıcıların kayıt olmasını sağlayan bir form bileşenidir. Kullanıcı adı, e-posta ve şifre alanlarını içerir ve kayıt olma işlemini başlatmak için bir button sunar.
#### Kullanım
```html
<app-sign-layout>
    <app-signup-form></app-signup-form>
</app-sign-layout>
```

## `otp-validation/`
OtpValidationComponent, tek kullanımlık şifre doğrulama işlemi için kullanılan bir bileşendir. Kullanıcıdan alınan şifreyi doğrular ve işlem sonucunu kullanıcıya bildirir.
#### Kullanım
```html
<app-otp-validation></app-otp-validation>
```

