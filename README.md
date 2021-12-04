- [ ]  Creamos la aplicación con create-react-app

```html
npx create-react-app task-list-firebase

```

- [ ]  Limpiamos  los archivos  🗑
- [ ]  Inicializamos  git

```html
git init 
```

- [ ]  Hacemos commit y sicronizamos con nuevo repositorio en github 😺
- [ ]  instalar firebase 🔥

```html
npm i firebase@8.7.1
```

```html
npm audit fix
```

- [ ]  Registrarse en firebase   [https://firebase.google.com/](https://firebase.google.com/)
- [ ]  Colocar nombre del proyecto y crear proyecto

Los servicios de Firebase que usaremos son : 

- Autentication
- Database (firestore)
- Storage
- Hosting

- [ ]  Seleccionar base de Datos y crear base de datos , seleccionar modo prueba
- [ ]  Relacionar la firebase con una app

 

- Seleccionar  </> aplicación web
- Colocar nombre de la aplicación
- crear y copiar las api keys

- [ ]  crear un archivo en el directorio ***src*** llamado ***firebase.js***

 donde importaremos firebase de la librería que se instaló y  copiamos la parte de 

la variable de configuración y la inicialización 

```jsx
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
```

- [ ]  Creamos las variables de ambiente, para eso creamos en el directorio raíz del proyecto  el archivo  ***.env.local***   donde colocaremos nuestras variables de ambiente de firebase

```jsx
  REACT_APP_API_KEY = "xxxxxxxx"
  REACT_APP_AUTH_DOMAIN= "xxxxxxxx"
  REACT_APP_PROJECT_ID="xxxxxxxx"
  REACT_APP_STORAGE_BUCKET="xxxxxxxx"
  REACT_APP_MESSAGING_SENDER_ID= "xxxxxxxx"
  REACT_APP_APP_ID= "xxxxxxxx"
```

- [ ]  Ahora reemplazamos las variables en nuestro archivo de firebase para así poder subir nuestro proyecto a github sin subir nuestras credenciales de acceso a nuestra base de datos

```jsx
import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
```

Agregando estructura y estilos con Bootstrap 4 

 

- [ ]  Agregar el <link>  en el directorio public en el archivo index.html , dentro de la etiqueta  <meta>

```html
<meta>
 <link rel="stylesheet" 
href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
crossorigin="anonymous">
</meta>
```

Usaremos para las secciones las siguientes clases 

```jsx
//Para las secciones 
<className="container"/>
<className="row"/>
<className="col-md-6 col-md-4"/>
<className=""/>

//textos 

<className="text-center"/>
<className="text-info"/>

```