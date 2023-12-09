const container = document.querySelector(".container");
const qrConderBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
//Gerar QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    
    if (!qrCodeInputValue) return;

    qrConderBtn.innerHTML = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrConderBtn.innerHTML = "Código criado!";
    })
};


qrConderBtn.addEventListener("click", () => {
    generateQrCode();
}); 


//Gerando evento apertando o enter no teclado
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
});


//Limpar área do qr code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrConderBtn.innerHTML = "Gerar QR Code"
    }
})