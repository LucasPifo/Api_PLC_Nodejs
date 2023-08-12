const sendMessage = (error = false, msg = 'Error en el servidor', data = [])=>{
    return {
        error,
        msg,
        data
    }
}
export default sendMessage;