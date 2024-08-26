# React + Vite

Bu projede, axios ile JSON-server kütüphanelerini kullandım. Projenin arayüzü için çok uğraşmadım, zaten amacım bu yeni öğrendiğim kütüphanelerde kendimi denemekti. Bu kütüphanelerdende azcık bahsetmem gerekirse eğer;

Öncellikle Json server'ın bize, çalışmalarımızı bir custom API ile denemek istiyorsak kendi tasarlıycağımız JSON dosyasını local bir şekilde yayınlamamızda yardım eder. Json server'ın kullanım alanları ise çoğu zaman (sanırsam her zaman :/ ), bir projeyi test etme, gerçek veri tabanlarından veri çekmeyi öğrenmek için kullanma ve kullanıcı arayüzünü test etme gibi alanlardır. Açıkcası ben bu yaptığım ufak çaplı projede Json serveri sırf kullanmak olmuş için kullanmıştım :d, ama madem böyle bir illeti kullandım o zaman bunun tam olarak ne olduğunu bileyim dedim.

Axios hakkında ekleyebilceğim yorum ise, çekiceğimiz verileri veya kullanıcağımız API'lara daha basit kullanım ile erişmek diyebilirm. 

Ek olarak böyle bir blog yazısı buldum; gayyet anlaşılır ve basit şekilde yazar Axiosu anlatmış: https://medium.com/p/2ab7e2b548a7


FAKE API'ı ayağa kaldırmak için kodların bulunduğu dizine terminalle girip "npx json-server --watch src/Quotes/Quotes.json" yazmanız yeterli.
