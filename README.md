# MicroScraper
<!-- Dla (docelowy klient),
który (opis tego czego potrzebuje/ chce/ co mogło by mu da ́c korzy ́s ́c)
tworzymy system o nazwie (nazwa systemu).
System ten jest produktem z grupy (grupa produktów, np. oprogramowanie
finansowe, social-media, gra, logistyczne, edukacyjne itp.)
który (opis głównych zalet).
W przeciwie  ́nstwie do (opis konkurencji)
nasz produkt pozwala na (opis głównych ró ̇znic). -->

## Ogólny opis aplikacji
MicroScraper to aplikacja webowa, w której użytkownik może wyświetlać najnowsze posty z 
aplikacji reddit. Po zalogowaniu może je również zapisywać na swoim panelu oraz je usuwać.

## Architektura aplikacji
Aplikacja zostanie skonteneryzowana i umieszczona w GCP w kubernetesie. Będzie się składać z 
czterech mikroserwisów:
- Front - dostarczający GUI
- Scraper - pobierający co godzinę posty z serwisu reddit
- ScraperAPI - komunikujący front ze scraperem.
- UserAPI - obsługujący bazę danych zawierającą posty zapisane przez użytkowników

## Użyte technologie
- Docker
- Kubernetes
- RabbitMQ
- JavaScript
- Express
- TypeScript
- ReactJS
- Python
- Firebase