 class WhatsappModel{
    constructor(data){
        this.id = Number(data.id) || undefined
        this.session = String(data.session),
        this.qrcode = String(data.qrcode)
    
    }
}

export default WhatsappModel;