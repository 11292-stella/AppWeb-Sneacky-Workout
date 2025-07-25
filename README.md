# 🏋️‍♀️ Sneacky Workout

**Sneacky Workout** è una web app full-stack pensata per personal trainer e appassionati di fitness. 
Offre un'esperienza interattiva per creare, salvare e gestire schede di allenamento personalizzate, scoprire esercizi per ogni muscolo, e acquistare prodotti sportivi.

---

## 🔎 Panoramica

**Sneacky Workout** è un'app intuitiva che ti accompagna nel tuo percorso fitness, offrendo funzionalità complete e semplici da usare, adatte a utenti alle prime armi e a sportivi esperti.

### Cosa puoi fare:

- ✅ Registrarti e accedere in modo sicuro
- 📝 Generare e salvare schede di allenamento personalizzate
- 💪 Esplorare una libreria interattiva di muscoli ed esercizi
- 🛒 Acquistare integratori e accessori con un carrello integrato
- 🌟 Lasciare feedback su prodotti e schede

---

## 🚀 Funzionalità principali

- 🔐 **Autenticazione sicura** con JWT
- 🏋️ **Schede di allenamento personalizzate**: genera, salva e visualizza i tuoi workout
- 🧠 **Libreria muscoli**: clicca su un muscolo e scopri descrizione + esercizi associati
- 🛍️ **Catalogo prodotti**: integratori e accessori acquistabili
- 🧾 **Carrello**: aggiunta, rimozione e visualizzazione prodotti
- ⭐ **Feedback utenti**: voti e commenti su schede e prodotti
- 📱 **Responsive design**: funziona perfettamente da mobile e desktop

---

## 🧰 Tecnologie utilizzate

### 🔸 Frontend

- **React** – UI interattiva
- **Redux Toolkit** – gestione stato globale
- **React Router DOM** – navigazione tra pagine
- **Axios** – chiamate HTTP
- **React-Bootstrap** – componenti responsive
- **Vercel** – hosting del frontend

### 🔹 Backend

- **Spring Boot** – API REST
- **Spring Security + JWT** – autenticazione sicura
- **Spring Data JPA (Hibernate)** – ORM e persistenza
- **PostgreSQL** – database relazionale
- **Lombok** – meno boilerplate
- **Koyeb** – hosting del backend

  ## ⚙️ Avviare il progetto in locale

Vuoi provare **Sneacky Workout** sul tuo computer? Segui questi semplici passaggi per configurare sia il backend che il frontend.

---

### 📦 Prerequisiti

Assicurati di avere installato:

- ✅ **JDK 17+** (per il backend)
- ✅ **Apache Maven** (per compilare e avviare Spring Boot)
- ✅ **Node.js (LTS)** e **npm** (per il frontend React)
- ✅ **PostgreSQL** (o un client tipo pgAdmin / DBeaver)

---

### 🔧 Setup del Backend (Spring Boot)

1. **Clona il repository e accedi alla cartella backend:**

git clone https://github.com/11292-stella/AppWeb-Sneacky-Workout.git
cd AppWeb-Sneacky-Workout/Prova_Progetto_Personal_Trainer

Configura il database PostgreSQL:

Crea un database locale, ad esempio sneaky_workout_db

Apri il file src/main/resources/application.properties (o .yml) e aggiorna le seguenti proprietà:

spring.datasource.url=jdbc:postgresql://localhost:5432/sneaky_workout_db

spring.datasource.username=tuo_username

spring.datasource.password=la_tua_password

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

Imposta la chiave JWT:

Nel file application.properties, aggiungi:

jwt.secret=UnaChiaveSegretaLungaSicuraEUnica
jwt.duration=3600000

Avvia il backend:
mvn clean install
mvn spring-boot:run
Il backend sarà disponibile su http://localhost:8080.

💻 Setup del Frontend (React)

Vai nella cartella del frontend:
cd ../FrontProjectPersonalTrainer


Installa le dipendenze:
npm install

Configura l'URL del backend:

Crea un file .env nella root del frontend e aggiungi:
env

REACT_APP_BACKEND_URL=http://localhost:8080
🔁 Assicurati che le chiamate API nel tuo codice React usino process.env.REACT_APP_BACKEND_URL. In caso contrario, modifica direttamente gli URL hardcoded.

Avvia il frontend:
npm start
L'app sarà visibile nel browser su http://localhost:3000.

🔐 Autenticazione e autorizzazione
L’applicazione utilizza JWT (JSON Web Tokens) per proteggere le rotte e gestire la sessione degli utenti.

Registrazione: POST /auth/register

Login: POST /auth/login

Una volta autenticato, l'utente riceve un token JWT da inviare nelle chiamate API protette via header:

Authorization: Bearer <il-tuo-token>
Le rotte protette richiedono un ruolo valido (USER o ADMIN, se implementato).

✅ Ora sei pronto per iniziare!
Buon allenamento con Sneacky Workout 💪


  
🌐 Demo live
🔗 Frontend (Vercel):
https://front-project-personal-trainer.vercel.app/home

🔗 Backend API (Koyeb):
https://conservation-umeko-stella02-65bf7872.koyeb.app/
  

👤 Autrice
Stella Marucelli
🛠️ Full Stack Developer
🔗 https://github.com/11292-stella
