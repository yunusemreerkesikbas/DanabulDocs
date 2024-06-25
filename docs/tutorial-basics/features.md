---
sidebar_position: 1
---
# Features
Bu sayfada, projedeki temel özellikleri ve bu özelliklerin nasıl kullanıldığını açıklanmaktadır. Proje, çok dilli destek, dinamik bileşenler, global stil yönetimi ve daha fazlasını içeren çeşitli özellikler sunar.

## Çok Dilli Destek

Proje, `ngx-translate-core` paketini kullanarak çok dilli destek sağlar. Türkçe (`tr`) ve İngilizce (`en`) dil seçenekleri mevcuttur. Kullanıcılar, header'da bulunan dil butonları aracılığıyla dili değiştirebilirler.

#### Kullanım
- **Dil Değişimi:** Header'daki dil butonlarına tıklanarak dil değişimi gerçekleştirilir.
- **Statik Metinler:** Statik metinler, `assets/i18n` dizinindeki `en.json` ve `tr.json` dosyaları kullanılarak çevrilir.
- **TranslateHelperService:** Bu servis, dil değişimini ve navbar yüklemesini yönetir.

#### Örnek
```html
<div class="language-btn" (click)="changeLanguage('en')">
  <img ngSrc="../../../../assets/images/flag-en.svg" alt="English" height="30" width="30">
</div>
<div class="language-btn" (click)="changeLanguage('tr')">
  <img ngSrc="../../../../assets/images/flag-tr.svg" alt="Türkçe" height="30" width="30">
</div>
```
## Dinamik Bileşenler
Proje, dinamik olarak hem ürün listesi hem de ürün detayları için kullanılabilecek bileşenler içerir. Bu bileşenler, gelen verinin türüne göre farklı şekilde davranır.

#### Örnek
ProductOffersTableComponent: Hem ürün listesi hem de tek bir ürün detayını gösterebilir.

```html title="product-offers-table.component.ts"
@Component({
  selector: 'app-product-offers-table',
  templateUrl: './product-offers-table.component.html',
  styleUrls: ['./product-offers-table.component.scss']
})
export class ProductOffersTableComponent implements OnInit {
  @Input() items: any;
  @Input() isArray: boolean = false;

  ngOnInit(): void {
    this.isArray = Array.isArray(this.items);
  }
}
```

## Global Stil Yönetimi
Proje, SCSS kullanarak global stil yönetimini gerçekleştirir. Projede bileşenlere özel stiller ve global stiller için ayrı dosyalar bulunmaktadır.
#### Global Stil Dosyaları
- **styles.scss:** Global stiller için ana stil dosyasıdır. Diğer stil dosyalarını içe aktararak global stilleri yönetir.
- **variables.scss:** Projede kullanılan stil değişkenlerini tanımlar. Renkler, yazı tipleri ve diğer stil özellikleri burada merkezi olarak tanımlanır.
- **reset.scss:** Tarayıcıların varsayılan stillerini sıfırlar ve sıfırdan başlayarak stil uygulamalarınızı daha tutarlı hale getirir.

####  SCSS Kullanımının Avantajları
- Değişkenler: Renkler, yazı tipleri ve diğer stil özellikleri merkezi olarak yönetilir.
- İçe Aktarma (Import): Stil dosyalarını modüler hale getirir.
- İç İçe Geçme (Nesting): Stil kurallarını daha okunabilir ve hiyerarşik hale getirir.
- Karıştırıcılar (Mixins): Tekrar eden stil kurallarını merkezi olarak tanımlar.
- Hesaplamalar ve Fonksiyonlar: Dinamik ve esnek stil tanımlamaları sağlar.

## Yönlendirme (Routing)
Proje, Angular'ın RouterModule'ünü kullanarak yönlendirme yapılandırmasını gerçekleştirir. Uygulamanın farklı sayfaları arasında gezinti sağlar.

#### Routes Yapısı
- **routesConfig:** Tüm yönlendirme yapılandırmalarını merkezi bir yerde toplar.
- **AppRoutingModule:** Routes yapılandırmasını kullanarak uygulamanın yönlendirme yapılandırmasını oluşturur.

#### Yeni Bir Route Ekleme
Yeni bir route eklemek için routes-config.ts dosyasına yeni bir rota tanımı ekleyin ve AppRoutingModule dosyasının bu yeni rotayı otomatik olarak içereceğini unutmayın.

## Gelişmiş Dil Değişim Mekanizması
Dil değişimi sırasında URL'nin güncellenmesi ve mevcut sayfanın yeni dilde yeniden yüklenmesi sağlanır. Projenin varsayılan dili `tr` olarak ayarlanmıştır.

#### Kullanım
- **TranslateHelperService:** Dil değişimini yönetir ve URL'yi günceller.
- **Yerel Depolama:** Seçilen dili tarayıcının local storage'da depolamasına kaydeder.