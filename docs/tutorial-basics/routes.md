# Routes

Angular uygulamalarında yönlendirme işlemleri, `RouterModule` modülü ile sağlanır. Bu modül, uygulamanın yönlendirme yapılandırmasını sağlar ve uygulamanın URL'sini bileşenlerle eşleştirir.

## Routes Yapısı

### `routes-config.ts`
`routes-config.ts` dosyası, uygulamanın yönlendirme yapılandırmalarını merkezi bir yerde toplamak için kullanılan bir konfigürasyon dosyasıdır. Bu dosya, uygulamadaki her bir sayfa bileşeni için rotaları tanımlar ve hem İngilizce (`en`) hem de Türkçe (`tr`) dillerinde kullanılacak yolları içerir. Bu yapı sayesinde, çok dilli destek sağlamak ve yönlendirme yapılandırmalarını merkezi bir yerden yönetmek daha kolay hale gelir.

#### Örnek Konfigürasyon
```typescript title="src/app/routes/routes-config.ts"
export const routesConfig = [
  { path: '', component: HomeComponent, trPath: '' },
  { path: 'login', component: LoginComponent, trPath: 'giris' },
  { path: 'signup', component: SignupComponent, trPath: 'kayit-ol' },
  { path: 'offers', component: OffersComponent, trPath: 'teklifler' },
  { path: 'products', component: ProductListPageComponent, trPath: 'urunler' },
  { path: 'product/:productUrl', component: ProductOffersDetailPageComponent, trPath: 'urun/:productUrl' }
];
//Bu konfigürasyon, her bir sayfa bileşeni için iki dilde (İngilizce ve Türkçe) yollar tanımlar.
```
### `AppRoutingModule`
routes-config.ts dosyasındaki rotalar, AppRoutingModule içinde kullanılarak uygulamanın yönlendirme yapılandırması oluşturulur. Bu yapılandırma, çok dilli destek sağlamak için her dil için ayrı yollar tanımlar.

#### Örnek Konfigürasyon
```typescript title="src/app/app-routing-module.ts"
const languages = ['en', 'tr'];
const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    ...languages.map(lang => ({
        path: lang,
        children: [
            { path: '', component: HomeComponent },
            ...routesConfig.filter(route => route.path !== `${lang ==='en'? 'product' :'urun'+'/:productUrl'}`).map(route => ({
                path: `${lang === 'en' ? route.path : route.trPath}`,
                component: route.component
            })),
            { path: `${lang ==='en'? 'product' :'urun'+'/:productUrl'}`, component: ProductOffersDetailPageComponent },
        ]
    })),
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```
Bu yapılandırma, routes-config.ts dosyasındaki rotaları kullanarak her dil için ayrı yönlendirme yolları tanımlar. Ayrıca, bilinmeyen herhangi bir yol için PageNotFoundComponent bileşenini kullanarak 404 hata sayfası gösterir.

### `Yeni Bir Route Ekleme`
Yeni bir rota eklemek için routes-config.ts dosyasına yeni bir rota tanımı ekleyin ve AppRoutingModule dosyasındaki yapılandırmanın bu yeni rotayı otomatik olarak içereceğini unutmayın.

#### Örnek
```typescript title="src/app/routes/routes-config.ts"
import { NewPageComponent } from "@pages/new-page/new-page.component";

export const routesConfig = [
  // Diğer rotalar...
  { path: 'new-page', component: NewPageComponent, trPath: 'yeni-sayfa' }
];
```
Bu yapı, yeni sayfa componentlerini eklemeyi ve mevcut rotaları düzenlemeyi kolaylaştırır, çünkü tüm yönlendirme yapılandırmaları merkezi bir dosyada toplanmıştır.

### `Mevcut Route'ı Düzenleme`
Mevcut bir route'ı düzenlemek için routes-config.ts dosyasını güncelleyin.

#### 1. `routes-config.ts` Dosyasını Düzenleme
```typescript title="src/app/routes/routes-config.ts"
export const routesConfig = [
  // Diğer rotalar...
  { path: 'existing-route', component: ExistingComponent, trPath: 'mevcut-sayfa' }
];
```
#### 2. Değişikliklerin Yansıtılması
app-routing.module.ts dosyası, routes-config dosyasındaki güncellemeleri otomatik olarak içerecektir. Bu nedenle, ek bir işlem yapmanıza gerek yoktur.

