export default class MessageDTO {
  nome: string;
  atendimento: boolean;
  msg: string;
  whatsapp_id: string | undefined;
  

  constructor(data: any) {
    this.nome = data.notifyName ? data.notifyName : null;
    this.atendimento = false;
    this.msg = String(data.body);
    this.whatsapp_id = data.id?.id;
  }
}
