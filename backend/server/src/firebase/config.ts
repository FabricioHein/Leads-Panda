const fs = require('fs');

function lerArquivoJSON(caminhoArquivo) {
  try {
    const data = fs.readFileSync(caminhoArquivo, 'utf8');
    const jsonData = JSON.parse(data);
    console.log('Arquivo JSON lido com sucesso:', jsonData);
    return jsonData;
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    throw err; // Lança o erro para ser tratado pelo código que chama essa função
  }
}

function firebaseConfig(): any {
  const data = lerArquivoJSON('./src/firebase/key.json');

  // Crie uma instância de FirebaseConfigConverter com os dados
  const converter = new FirebaseConfigConverter(data);

  // Chame o método convertToFirebaseConfig para converter os dados
  const convertedData = converter.convertToFirebaseConfig();
  return convertedData;  
}

class FirebaseConfigConverter {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  convertToFirebaseConfig(): {
    apiKey: string;
    authDomain: string;
    projectId: string;
    databaseURL: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
    privateKey?: string;
    clientEmail: string;
  } {
    return {
      apiKey: this.data.apiKey,
      authDomain: this.data.authDomain,
      projectId: this.data.projectId,
      databaseURL: this.data.FIRESTORE_DB_URL,
      storageBucket: this.data.storageBucket,
      messagingSenderId: this.data.messagingSenderId,
      appId: this.data.appId,
      measurementId: this.data.measurementId,
      privateKey: this.data.private_key
        ? this.data.private_key.replace(/\n/gm, '\n')
        : undefined,
      clientEmail: this.data.client_email
    };
  }
}

export default firebaseConfig;
