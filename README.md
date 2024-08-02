# React + Vite

Bu projede, axios ile JSON-server kütüphanelerini kullandım. Projenin arayüzü için çok uğraşmadım, zaten amacım bu yeni öğrendiğim kütüphanelerde kendimi denemekti. Bu kütüphanelerdende azcık bahsetmem gerekirse eğer;

Öncellikle Json server'ın bize, çalışmalarımızı bir custom API ile denemek istiyorsak kendi tasarlıycağımız JSON dosyasını local bir şekilde yayınlamamızda yardım eder. Json server'ın kullanım alanları ise çoğu zaman (sanırsam her zaman :/ ), bir projeyi test etme, gerçek veri tabanlarından veri çekmeyi öğrenmek için kullanma ve kullanıcı arayüzünü test etme gibi alanlardır. Açıkcası ben bu yaptığım ufak çaplı projede Json serveri sırf kullanmak olmuş için kullanmıştım :d, ama madem böyle bir illeti kullandım o zaman bunun tam olarak ne olduğunu bileyim dedim.

Axios hakkında ekleyebilceğim yorum ise, çekiceğimiz verileri veya kullanıcağımız API'lara daha basit kullanım ile erişmek diyebilirm. (Böyle bir blog yazısı buldum; gayyet anlaşılır ve basit şekilde yazar Axiosu anlatmış: https://medium.com/@dilarauluturhan/i%CC%87stekleri-y%C3%B6netmek-i%CC%87%C3%A7in-g%C3%BC%C3%A7l%C3%BC-bir-ara%C3%A7-axios-2ab7e2b548a7#:~:text=Axios%20taray%C4%B1c%C4%B1%20deste%C4%9Fine%20ve%20Node,Node.js%20ortam%C4%B1nda%20do%C4%9Frudan%20kullan%C4%B1lamaz.)


FAKE API'ı ayağa kaldırmak için kodların bulunduğu dizine terminalle girip "npx json-server --watch src/Quotes/Quotes.json" yazmanız yeterli.
