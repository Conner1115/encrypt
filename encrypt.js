var enc_arr=[];function Encryption(VAR,CODE) {this.REG = /[^a-zA-Z≈]/;this.VAR=VAR;this.CODE=CODE;this.allow=false;this.decode=this.CODE.split(this.REG).join('').split('≈').reverse().join(' ');} Encryption.prototype.protect=function(){if(this.VAR===this.decode){this.allow=true;}if(this.VAR!==this.decode){this.allow = false;}if (!this.allow) {document.body.innerHTML = "<html lang = 'en'><h1>Important Notice</h1><p>Tampering with the code is prohibited by the author of this project and by the encryption library protecting it.  Please prevent adding any further changes to the code.  Thank you.</p></html>";}}; function createEncryption(V, C){enc_arr.push(new Encryption(V, C));for(var i=0;i<enc_arr.length;i++){enc_arr[i].protect();} }
