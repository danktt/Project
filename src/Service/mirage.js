import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';

    this.get('users', () => {
      return [
        {
          id: 1,
          name: 'Danilo de Souza Miranda',
          nickname: 'Miranda',
          cpf: '000000000-00',
          pattent: 'Cb',
          phone: '(67)99999-9999'
        },
        {
          id: 2,
          name: 'Isadora Escaraber',
          nickname: 'Escaraber',
          cpf: '000000000-00',
          pattent: 'Gen',
          phone: '(67)99999-9998'
        },
        {
          id: 3,
          name: 'Emilton Cuca',
          nickname: 'Cuca',
          cpf: '000000000-00',
          pattent: 'Gen',
          phone: '(67)99999-9123'
        }

      ]
    })
  }
})