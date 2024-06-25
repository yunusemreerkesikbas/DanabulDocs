# Styles
Projede kullanılan stilleri öğrenin.

Bu dokümantasyon, projede kullanılan stil dosyalarının yapısını ve SCSS'in avantajlarını açıklar. Projede bileşenlere özel stilleri içeren dosyaların yanı sıra global stil dosyaları da bulunmaktadır.


## Bileşen Stilleri
Her bileşenin kendi klasöründe, o bileşene özel stilleri içeren bir `.scss` dosyası bulunur. Bu dosyalar, bileşenlerin stil yönetimini yerel olarak gerçekleştirir ve bileşen bazlı stil uygulamalarını kolaylaştırır.

## Global Stil Dosyaları
Global stil dosyaları, tüm uygulama genelinde geçerli olan stilleri tanımlar. Bu dosyalar `src/` ve `src/assets/style/` dizinlerinde bulunur.

### styles.scss
Bu dosya, global stiller için ana stil dosyasıdır. Diğer stil dosyalarını içe aktararak global stilleri yönetir.

```scss title="src/styles.scss"
/* Global stil dosyalarını bu dosyaya ekleyebilirsiniz */
@import "assets/style/reset";
@import "assets/style/variables";

body {
  font-family: $font-family;
}
/* Diğer global sınıflar */
```
### variables.scss
Bu dosya, projede kullanılan stil değişkenlerini tanımlar. Renkler, yazı tipleri ve diğer stil özellikleri burada merkezi olarak tanımlanır.

```scss title="src/assets/style/variables.scss"
// örnek bir değişken tanımlama
$font-family: 'Arial', sans-serif;
```
### reset.scss
Bu dosya, tarayıcıların varsayılan stillerini sıfırlar ve sıfırdan başlayarak stil uygulamalarınızı daha tutarlı hale getirir. Bunun için Eric Meyer'in [reset.css](http://meyerweb.com/eric/tools/css/reset/) dosyası kullanıldı.

## Global Stil Dosyası Ekleme
Projeye yeni bir global stil dosyası eklemek için aşağıdaki adımları izleyin:

1. `src/assets/style/` dizininde yeni bir `.scss` dosyası oluşturun.Örneğin, `example-styles.scss` adında bir dosya oluşturabilirsiniz.
2. Oluşturduğunuz global-styles.scss dosyasını açın ve gerekli stilleri ekleyin.
3. `src/styles.scss` dosyasını açın ve yeni oluşturduğunuz dosyayı içe aktarın.
```scss title="src/styles.scss"
/* Global stil dosyalarını bu dosyaya ekleyebilirsiniz */
@import "assets/style/reset";
@import "assets/style/variables";
@import "assets/style/example-styles";

body {
  font-family: $font-family;
}
/* Diğer global sınıflar */
```
4. Projeyi derleyin ve değişikliklerinizi kontrol edin.