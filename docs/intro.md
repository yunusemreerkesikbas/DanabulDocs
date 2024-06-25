---
sidebar_position: 1
---

# Installation

Danabul, Enoca tarafından çiftçiler ile tüketiciler arasında köprü oluşturmak amacıyla geliştirilen bir platformdur. Danabul, çiftçilerin ürünlerini tüketicilere ulaştırmasını sağlar. Tüketiciler, Danabul platformu üzerinden çiftçilerin ürünlerini inceleyebilir, sipariş verebilir ve ödeme yapabilir. Çiftçiler, Danabul platformu üzerinden ürünlerini listeleyebilir, siparişleri yönetebilir ve ödemelerini alabilir.

## Kurulum

Projeyi yerel makinenizde kurmak ve çalıştırmak için aşağıdaki adımları izleyin:.

### Depoyu Klonlayın

```bash
git clone https://github.com/osmcgrgenc/Danabul
cd danabul-web-project
```

> **Note**
>
> 📢 Proje private bir repoda tutulmaktadır. Klonlamak için yetkilendirme gerekmektedir. Bunun için yöneticiniz ile iletişime geçebilirsiniz. 

## Bağımlılıkları Yükleyin

Node.js, npm ve yarn'ın yüklü olduğundan emin olun. Daha sonra proje bağımlılıklarını yükleyin:
```bash
yarn 
```
ya da

```bash
npm install 
```


## Uygulamayı Çalıştırın
Geliştirme sunucusunu başlatın:
```bash
yarn dev
```
ya da 
```bash
npm run start
```
Uygulama http://localhost:4200 adresinde erişilebilir olacaktır.

## Uygulamayı Derleyin
Projeyi üretim için derlemek için şu komutu kullanın:
```bash
npm run build
```
