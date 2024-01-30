function validaCamposNull(objeto) {
    let isValid = true;

    for (const p in objeto) {
        const valorCampo = objeto[p];
        if (valorCampo === null || valorCampo === '' || valorCampo === undefined) {
            showMessage(`${p} é obrigatório.`, 'error');
            isValid = false;
            break;
        }
    }
    return isValid;
}

export function convertMoney(money) {
    return Number(money)
  }

export function moneyBRL(money){
    return Number(money).toLocaleString('pt-br',  {minimumFractionDigits: 2})

}

const showMessage = (msg = '', type = 'success') => {
    const toast = window.Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: type,
        title: msg,
        padding: '10px 20px',
    });
};
export { validaCamposNull };
